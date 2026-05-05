param(
  [string]$WorkspaceRoot = "ai-dev-workspace/current",
  [string]$Task,
  [switch]$All
)

$ErrorActionPreference = "Stop"
$failures = New-Object System.Collections.Generic.List[string]
$warnings = New-Object System.Collections.Generic.List[string]

function Add-Fail([string]$Message) { $script:failures.Add($Message) | Out-Null }
function Add-Warn([string]$Message) { $script:warnings.Add($Message) | Out-Null }

function Resolve-WorkspaceRoot([string]$Root) {
  if ([System.IO.Path]::IsPathRooted($Root)) { return (Resolve-Path -LiteralPath $Root).Path }
  return (Resolve-Path -LiteralPath (Join-Path (Get-Location) $Root)).Path
}

function Get-Text([string]$Path) {
  if (-not (Test-Path -LiteralPath $Path)) { Add-Fail "Missing file: $Path"; return "" }
  return Get-Content -LiteralPath $Path -Raw
}

function Test-UniqueLineKey([string]$Text, [string]$Key, [string]$Label) {
  $count = ([regex]::Matches($Text, "(?m)^" + [regex]::Escape($Key))).Count
  if ($count -ne 1) { Add-Fail "$Label must appear exactly once: '$Key' found $count" }
}
function Get-Section([string]$Text, [string]$Heading) {
  $match = [regex]::Match($Text, "(?ms)^##\s+" + [regex]::Escape($Heading) + "\s*\r?\n(.*?)(?=^##\s+|\z)")
  if (-not $match.Success) { return "" }
  return $match.Groups[1].Value.Trim()
}

function Get-CanonicalSpecialists {
  $systemRoot = Split-Path -Parent $PSScriptRoot
  $agentsDir = Join-Path $systemRoot "system/agents"
  $names = New-Object System.Collections.Generic.HashSet[string] ([System.StringComparer]::OrdinalIgnoreCase)
  if (Test-Path -LiteralPath $agentsDir) {
    Get-ChildItem -LiteralPath $agentsDir -Filter "*.md" -File | ForEach-Object {
      if ($_.BaseName -ne "AGENTS") { [void]$names.Add($_.BaseName) }
    }
  }
  [void]$names.Add("none")
  return $names
}

function Normalize-SpecialistList([string]$Text) {
  $items = New-Object System.Collections.Generic.List[string]
  if (-not $Text) { return $items }
  $Text -split "\r?\n|," | ForEach-Object {
    $item = $_.Trim()
    $item = $item -replace "^[-*]\s*", ""
    $item = $item -replace "\s*\(.*?\)\s*", ""
    $item = $item.Trim()
    if ($item -and $item -notmatch "^(none|not-needed|n/a|na)$") { $items.Add($item) | Out-Null }
  }
  return $items
}

function Get-TaskSpecialistsFromText([string]$Text) {
  $owner = (Get-Section $Text "Owner Specialist" -split "\r?\n" | Select-Object -First 1).Trim()
  $owner = ($owner -replace "^[-*]\s*", "").Trim()
  $support = Normalize-SpecialistList (Get-Section $Text "Supporting Specialists")
  return @{ Owner = $owner; Supporting = $support }
}

function Find-TaskById([string]$Workspace, [string]$TaskId) {
  if (-not $TaskId) { return $null }
  $taskDir = Join-Path $Workspace "execution/tasks"
  if (-not (Test-Path -LiteralPath $taskDir)) { return $null }
  $escaped = [regex]::Escape($TaskId.Trim())
  $match = Get-ChildItem -LiteralPath $taskDir -Filter "*.md" -File | Where-Object { $_.Name -ne "README.md" } | Where-Object {
    (Get-Content -LiteralPath $_.FullName -Raw) -match "(?m)^##\s+Task ID\s*\r?\n\s*$escaped\s*$"
  } | Select-Object -First 1
  if ($match) { return $match.FullName }
  return $null
}

function Test-Config([string]$Workspace) {
  $path = Join-Path $Workspace "config.yaml"
  $text = Get-Text $path
  if ($text -eq "") { return }

  foreach ($key in @("schema_version:","system:","roots:","workspace:","target_project:","runtime:","workflow:","artifacts:","execution:","exports:")) {
    Test-UniqueLineKey $text $key "config.yaml top-level key"
  }

  $targetBlock = [regex]::Match($text, "(?ms)^target_project:\r?\n(.*?)(?=^\S|\z)").Groups[1].Value
  if ($targetBlock) {
    foreach ($child in @("  name:","  root:")) { Test-UniqueLineKey $targetBlock $child "config.yaml target_project child key" }
  }

  $workflowBlock = [regex]::Match($text, "(?ms)^workflow:\r?\n(.*?)(?=^\S|\z)").Groups[1].Value
  if ($workflowBlock) {
    foreach ($child in @("  scenario:","  phase:")) { Test-UniqueLineKey $workflowBlock $child "config.yaml workflow child key" }
  }
}

function Test-State([string]$Workspace) {
  $path = Join-Path $Workspace "STATE.md"
  $text = Get-Text $path
  if ($text -eq "") { return }
  foreach ($field in @("Target project","Target root","Scenario","Phase","Active deliverable","Active task","Next action","Current constraints","Current risks","Last updated")) {
    $count = ([regex]::Matches($text, "(?m)^- " + [regex]::Escape($field) + ":")).Count
    if ($count -ne 1) { Add-Fail "STATE.md field '$field' must appear exactly once, found $count" }
  }
  if ($text -match "2026-04-21") { Add-Warn "STATE.md contains stale date 2026-04-21; use the runtime current date." }
}

function Resolve-TaskPath([string]$Workspace, [string]$TaskArg) {
  if (-not $TaskArg) { return $null }
  if ([System.IO.Path]::IsPathRooted($TaskArg)) { return (Resolve-Path -LiteralPath $TaskArg).Path }
  $candidate = Join-Path (Join-Path $Workspace "execution/tasks") $TaskArg
  if (Test-Path -LiteralPath $candidate) { return (Resolve-Path -LiteralPath $candidate).Path }
  $candidate = Join-Path (Join-Path $Workspace "execution/tasks") ("$TaskArg.md")
  if (Test-Path -LiteralPath $candidate) { return (Resolve-Path -LiteralPath $candidate).Path }
  Add-Fail "Task not found: $TaskArg"
  return $null
}

function Test-Task([string]$TaskPath) {
  if (-not $TaskPath) { return }
  $text = Get-Text $TaskPath
  if ($text -eq "") { return }

  $required = @(
    "Task ID","Title","Scenario","Phase","Objective","Why Now","Owner Specialist","Supporting Specialists","Inputs",
    "Allowed Scope","Out of Scope","Target Project Root","Target Surfaces","Architecture Boundaries","Standards Preflight",
    "Verification Plan","Constraints","Done Criteria","Evidence Required","Review Gate","Drift Risks"
  )

  foreach ($heading in $required) {
    if ($text -notmatch "(?m)^##\s+" + [regex]::Escape($heading) + "\s*$") {
      Add-Fail "Task '$TaskPath' missing required section: ## $heading"
    }
  }

  $canonical = Get-CanonicalSpecialists
  $spec = Get-TaskSpecialistsFromText $text
  if (-not $spec.Owner) { Add-Fail "Task '$TaskPath' has empty Owner Specialist" }
  elseif (-not $canonical.Contains($spec.Owner)) { Add-Fail "Task '$TaskPath' uses unknown Owner Specialist: $($spec.Owner)" }

  foreach ($support in $spec.Supporting) {
    if (-not $canonical.Contains($support)) { Add-Fail "Task '$TaskPath' uses unknown Supporting Specialist: $support" }
  }

  $standards = Get-Section $text "Standards Preflight"
  if ($spec.Owner -and $spec.Owner -ne "none" -and $standards -notmatch ("system/agents/" + [regex]::Escape($spec.Owner) + "\.md")) {
    Add-Warn "Task '$TaskPath' Owner Specialist '$($spec.Owner)' should be listed in Standards Preflight as system/agents/$($spec.Owner).md"
  }

  foreach ($support in $spec.Supporting) {
    if ($standards -notmatch ("system/agents/" + [regex]::Escape($support) + "\.md")) {
      Add-Warn "Task '$TaskPath' Supporting Specialist '$support' should be listed in Standards Preflight as system/agents/$support.md or explicitly waived."
    }
  }

  if ($text -match "(?i)MVP Implementation|MVP completo|landing page completa|Setup do Projeto") {
    Add-Warn "Task '$TaskPath' may be too broad. Check bootstrap/design/feature mixing."
  }

  if ($text -match "(?i)backend|api|database|auth|prisma|postgres" -and $text -notmatch "(?i)validation|validator|use-case|repository|ownership|authorization|error") {
    Add-Warn "Task '$TaskPath' mentions backend/API/database/auth but may lack backend architecture boundaries."
  }
}
function Test-Ledgers([string]$Workspace) {
  $dir = Join-Path $Workspace "execution/ledgers"
  if (-not (Test-Path -LiteralPath $dir)) { Add-Fail "Missing ledgers directory: $dir"; return }
  Get-ChildItem -LiteralPath $dir -Filter "*.md" -File | Where-Object { $_.Name -ne "README.md" } | ForEach-Object {
    $text = Get-Text $_.FullName
    $resultCount = ([regex]::Matches($text, "(?m)^##\s+Result\s*$|(?m)^\*\*Status:\*\*")).Count
    if ($resultCount -ne 1) { Add-Fail "Ledger '$($_.Name)' must have exactly one final Result/Status, found $resultCount" }

    foreach ($section in @("Architecture Preflight","Standards Applied","Specialist Material Contribution")) {
      if ($text -notmatch "(?m)^##\s+" + [regex]::Escape($section) + "\s*$") { Add-Warn "Ledger '$($_.Name)' missing section: ## $section" }
    }

    $taskId = (Get-Section $text "Task ID" -split "\r?\n" | Select-Object -First 1).Trim()
    $taskPath = Find-TaskById $Workspace $taskId
    $taskSpec = $null
    if ($taskPath) { $taskSpec = Get-TaskSpecialistsFromText (Get-Text $taskPath) }

    $ownerRequired = (Get-Section $text "Owner Specialist Required" -split "\r?\n" | Select-Object -First 1).Trim()
    $ownerInvoked = (Get-Section $text "Owner Specialist Invoked" -split "\r?\n" | Select-Object -First 1).Trim()
    $strength = (Get-Section $text "Specialist Result Strength" -split "\r?\n" | Select-Object -First 1).Trim()
    $result = (Get-Section $text "Result" -split "\r?\n" | Select-Object -First 1).Trim()
    $material = Get-Section $text "Specialist Material Contribution"
    $arch = Get-Section $text "Architecture Preflight"

    if ($taskSpec -and $taskSpec.Owner -and $taskSpec.Owner -ne "none") {
      if (-not $ownerRequired -or $ownerRequired -eq "none") { Add-Fail "Ledger '$($_.Name)' does not record required owner specialist from task: $($taskSpec.Owner)" }
      elseif ($ownerRequired -notmatch ("(?i)^" + [regex]::Escape($taskSpec.Owner) + "$")) { Add-Fail "Ledger '$($_.Name)' owner specialist mismatch. Task requires '$($taskSpec.Owner)' but ledger says '$ownerRequired'" }
    }

    $requiresOwner = $ownerRequired -and $ownerRequired -notmatch "^(none|not-needed|n/a|na)$"
    if ($requiresOwner) {
      if ($ownerInvoked -notmatch "(?i)^(yes|native|adapted|native-specialist-execution|adapted-specialist-execution)$") {
        Add-Fail "Ledger '$($_.Name)' requires owner specialist '$ownerRequired' but Owner Specialist Invoked is not affirmative: '$ownerInvoked'"
      }
      if (-not $material -or $material -match "(?i)^\s*(none|n/a|not needed|not-needed)\s*$") {
        Add-Fail "Ledger '$($_.Name)' requires ## Specialist Material Contribution for owner specialist '$ownerRequired'"
      }
      if (($material + "`n" + $arch) -notmatch ("system/agents/" + [regex]::Escape($ownerRequired) + "\.md")) {
        Add-Fail "Ledger '$($_.Name)' must cite the owner specialist file used: system/agents/$ownerRequired.md"
      }
      if ($result -eq "implemented" -and $strength -notmatch "^(native-specialist-execution|adapted-specialist-execution)$") {
        Add-Fail "Ledger '$($_.Name)' cannot be implemented with owner specialist '$ownerRequired' unless Specialist Result Strength is native-specialist-execution or adapted-specialist-execution. Found '$strength'"
      }
    }
  }
}
function Test-Reviews([string]$Workspace) {
  $dir = Join-Path $Workspace "execution/reviews"
  if (-not (Test-Path -LiteralPath $dir)) { Add-Fail "Missing reviews directory: $dir"; return }
  $reviews = Get-ChildItem -LiteralPath $dir -Filter "*.md" -File | Where-Object { $_.Name -ne "README.md" }
  foreach ($review in $reviews) {
    $text = Get-Text $review.FullName
    $decisionCount = ([regex]::Matches($text, "(?m)^##\s+Decision\s*$")).Count
    if ($decisionCount -ne 1) { Add-Fail "Review '$($review.Name)' must have exactly one Decision section, found $decisionCount" }
    if ($text -notmatch "(?m)^##\s+Architecture Compliance Result\s*$") { Add-Warn "Review '$($review.Name)' missing Architecture Compliance Result" }
  }
}

$workspace = Resolve-WorkspaceRoot $WorkspaceRoot
Test-Config $workspace
Test-State $workspace

$taskPath = Resolve-TaskPath $workspace $Task
if ($taskPath) { Test-Task $taskPath }
if ($All) {
  $taskDir = Join-Path $workspace "execution/tasks"
  if (Test-Path -LiteralPath $taskDir) {
    Get-ChildItem -LiteralPath $taskDir -Filter "*.md" -File | Where-Object { $_.Name -ne "README.md" } | ForEach-Object { Test-Task $_.FullName }
  }
  Test-Ledgers $workspace
  Test-Reviews $workspace
}

if ($warnings.Count -gt 0) {
  Write-Host "WARNINGS:" -ForegroundColor Yellow
  $warnings | ForEach-Object { Write-Host "- $_" -ForegroundColor Yellow }
}

if ($failures.Count -gt 0) {
  Write-Host "FAIL:" -ForegroundColor Red
  $failures | ForEach-Object { Write-Host "- $_" -ForegroundColor Red }
  exit 1
}

Write-Host "PASS: ai-dev-system validation passed." -ForegroundColor Green
exit 0

