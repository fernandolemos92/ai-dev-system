# ai-dev-system Operational Root

This directory is the operational root for local ai-dev-system work.

## Folder Roles

```text
ai-dev-system/
  ai-dev-system/              # system engine, doctrine, playbooks, contracts, agents, skills
  ai-dev-workspace/current/   # private operational memory for the active journey
  projects/                   # optional product code roots
```

## Root Meanings

- Operational root: the parent folder that contains the system and workspace.
- System root: `ai-dev-system/`, the ai-dev-system engine itself.
- Workspace root: `ai-dev-workspace/current/`, private runtime memory.
- Target project root: the product repository or app being built.

The workspace is outside the system engine by design, but inside the same operational root for ergonomics.

## Working Convention

Work from this directory when possible:

```powershell
cd D:\OpenRouterClaudeCode\ai-dev-system
```

The orchestrator should print the current root status before any execution:

```text
Operational root:
System root:
Workspace root:
Target project root:
Active phase:
Active task:
Next action:
```

The target project root must be explicit before product code is written.
## Mechanical Validation Gate

`ai-dev-system` includes a local validator for structured workflow truth. This validator is an internal gate that agents must run automatically during Planning and Build/Review. Users should not need to remember or type the command below. The examples are for debugging only:

```powershell
cd D:\OpenRouterClaudeCode\ai-dev-system
node .\ai-dev-system\scripts\validate-ai-dev.mjs --workspace .\ai-dev-workspace\current --all
```

Validate one active task before execution:

```powershell
node .\ai-dev-system\scripts\validate-ai-dev.mjs --workspace .\ai-dev-workspace\current --task TASK-001-bootstrap.md
```

A PowerShell validator may remain as a Windows fallback, but the Node validator is the preferred automatic gate.

The validator checks:

- `config.yaml` duplicate structured keys
- `STATE.md` canonical fields
- task contract required sections, including `Standards Preflight` and `Verification Plan`
- broad task warnings
- ledger/review structural truth

A failing validator means the workflow must repair Planning, execution records, or workspace state before continuing. In normal operation, the agent performs this check automatically and records the result in the planning report or ledger evidence.
