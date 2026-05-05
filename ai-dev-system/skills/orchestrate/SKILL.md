---
name: orchestrate
description: Primary entry skill for ai-dev-system. Bootstrap the private workspace if needed, then resolve scenario, phase, delegation boundary, and the next bounded move.
---

# orchestrate

Primary entry skill for ai-dev-system.

Use this skill when the user wants to start, resume, plan, inspect, or continue an AI-assisted delivery journey.

`orchestrate` owns bootstrap, continuity, scenario resolution, phase resolution, delegation boundary, and next-move selection. It does not execute implementation tasks directly unless the selected movement explicitly routes to `execute-task`.


## Entrypoint Routing Guard

When the user explicitly mentions `ai-dev-system`, or asks to start, resume, continue, test, audit, or operate an ai-dev journey, this skill is the mandatory entrypoint.

Do not invoke product, design, code, research, Stitch, frontend, backend, database, or other downstream tools before this skill has:

- loaded `system/control/ORCHESTRATOR.md`
- printed root status
- resolved scenario
- resolved actual phase
- selected the next movement

Product details in the user's request are context for Discovery/Synthesis. They are not permission to skip orchestration or activate a design/code tool directly.
## Operational Root Resolution

Do not assume the current working directory is the operational root.

Resolve roots before workspace bootstrap or state reconstruction:

1. Check the current working directory first. If it contains both required folders, it is the operational root. Stop searching.
   - `ai-dev-system/`
   - `ai-dev-workspace/`
2. Only if the current directory does not contain both folders, walk upward through parents until a folder containing both is found.
3. Only if no current/ancestor folder matches, use the location of the loaded `ai-dev-system` file to infer a candidate umbrella folder, then verify it contains both folders.
4. If no verified folder contains both required folders, report `Operational root: unresolved`, route to bootstrap/recovery, and do not continue with product, design, code, Stitch, or MCP tools.
5. Use absolute paths in the root status header.
6. Resolve all relative paths from `config.yaml` against the operational root when `roots.path_basis` is `operational-root`.


Operational root selection rule: prefer the nearest verified folder, starting with the current working directory. Do not jump to a parent folder or to another sibling clone merely because it contains `ai-dev-system/`. A clone folder such as `D:/OpenRouterClaudeCode/test` is valid when it contains both `ai-dev-system/` and `ai-dev-workspace/`.
Canonical roots:

```text
Operational root: <folder containing ai-dev-system/ and ai-dev-workspace/>
Root verification: verified only after both folders are confirmed
System root: <Operational root>/ai-dev-system
Workspace root: <Operational root>/ai-dev-workspace/current
Target project root: config target_project.root resolved from Operational root, or unset
```
## Path Read Safety

Do not read repo files using leading-slash paths such as `/ai-dev-system/ENGINE.md` on Windows. A leading slash may resolve to the drive root and bypass the operational root.

After root resolution, read files with verified absolute paths or paths explicitly relative to the resolved operational root.

If the first read fails because a path resolved outside the operational root, treat that as a path-resolution bug: repair the root/path first, then retry. Do not continue as if the failed absolute path was harmless.
## Local Skill File Semantics

`ai-dev-system/skills/*/SKILL.md` files are local project procedure files unless the host runtime explicitly exposes them as callable native skills.

For `ai-dev-system` orchestration, reading and applying `skills/orchestrate/SKILL.md` is sufficient. Do not call a host/runtime skill named `orchestrate` unless it is listed as an available native skill.

If a host skill named `orchestrate` is unavailable, that is not a failure. Continue with adapted local procedure execution and record it as local/adapted orchestration if relevant.

## Bootstrap Preflight

Before orchestration, verify the private workspace:

1. Locate the operational root, the parent folder that contains `ai-dev-system/` and `ai-dev-workspace/`.
2. Locate the ai-dev-system root inside the operational root.
3. Locate or create the sibling private workspace:

```text
ai-dev-workspace/current/
```

4. If `ai-dev-workspace/current/` does not exist, create it from:

```text
templates/ai-dev-workspace/current/
```

5. Ensure these files and folders exist:

```text
STATE.md
MEMORY.md
DESIGN.md
config.yaml
artifacts/
execution/
```

6. Read `config.yaml` and `STATE.md`. Paths in `config.yaml` are relative to the operational root when `roots.path_basis` is `operational-root`.
7. If `current/` appears to belong to another active journey, stop and ask before replacing, archiving, or overwriting it.
8. If the target project root is known, record it in `config.yaml`.
9. If the target project root is not known, keep it blank and let discovery/planning resolve it.
10. Read `system/control/ORCHESTRATOR.md` before resolving scenario or phase.
11. Continue to orchestration.


## Root Status Header

At the start of every orchestration pass, print a compact root status before scenario, phase, planning, or execution decisions:

```text
Operational root: [absolute path]
Root verification: [verified | unresolved]
System root: [absolute path]
Workspace root: [absolute path]
Target project root: [absolute path or unset]
Active phase: [phase or unset]
Active task: [task or unset]
Next action: [bounded next action]
```

Do not make the user monitor a second terminal just to understand where memory and product code live.

If target project root is unset, say `unset` and do not execute product-code tasks.
## Artifact Update Integrity

Discovery artifacts are structured phase records, not append-only scratchpads.

When updating a discovery artifact after user answers:

- update the relevant existing sections instead of inserting new sections in the middle of old unanswered gaps
- remove or revise stale questions that have been answered
- do not leave an old blocked gate and a new passing gate as simultaneous final truth
- keep one current gate status section
- preserve open questions only if they remain genuinely open
- re-read the artifact after editing and verify it has no contradictory final state

If the edit tool cannot safely update in place, rewrite the artifact cleanly from the current known truth instead of accumulating contradictory blocks.

## Workspace Record Integrity

Workspace records are structured truth, not append-only notes.

When editing `ai-dev-workspace/current/config.yaml`, `STATE.md`, `MEMORY.md`, task contracts, ledgers, or reviews:

- update existing fields in place instead of appending duplicate fields
- preserve the file's schema and intended shape
- do not leave old and new values for the same field side by side
- re-read the file after editing
- verify there are no duplicate YAML keys, duplicate STATE fields, or contradictory final statuses
- if a structured validator or parser is available, use it for YAML/JSON/TOML/manifest files
- if duplication or contradiction is found, repair it before continuing

`STATE.md` must remain short operational truth. Bug logs, research notes, and long histories belong under `artifacts/`, not `STATE.md`.

## Config Rewrite Rule

`config.yaml` is a structured manifest, not a patch target.

When updating `ai-dev-workspace/current/config.yaml`:

- rewrite or update the structured object so each YAML key appears exactly once at its level
- do not append duplicate `target_project`, `workflow`, `runtime`, `roots`, `artifacts`, `execution`, or `exports` blocks
- do not leave blank and filled values for the same key side by side
- parse or otherwise validate the YAML after editing when a parser is available
- re-read the full file after writing it
- if duplicate keys are detected, repair `config.yaml` before continuing

For `target_project`, keep exactly this shape:

```yaml
target_project:
  name:
  root:
```
## STATE Rewrite Rule

`STATE.md` is a canonical short status file, not a patch target.

When updating `ai-dev-workspace/current/STATE.md`:

- rewrite the whole file using the canonical STATE shape
- keep exactly one value for each canonical field
- do not partially patch scattered lines if that can leave old fields behind
- do not append a second STATE block
- do not store phase history, bug logs, research notes, or old decisions in STATE
- re-read the full file after writing it
- verify these fields appear exactly once: Target project, Target root, Scenario, Phase, Active deliverable, Active task, Next action, Current constraints, Current risks, Last updated
- if any field appears more than once, repair STATE before continuing

Canonical shape:

```markdown
# STATE

Short operational memory for the current ai-dev journey.

Keep this file small. It should describe the current operating moment, not the whole project history.

- Target project:
- Target root:
- Scenario:
- Phase:
- Active deliverable:
- Active task:
- Next action:
- Current constraints:
- Current risks:
- Last updated:
```
## Memory Discipline

- `STATE.md` is short operational memory.
- `MEMORY.md` is curated long-lived memory.
- `DESIGN.md` is target-project design memory.
- `artifacts/` stores durable discovery, synthesis, planning, design, architecture, decisions, and review outputs.
- `execution/` stores tasks, ledgers, and reviews.

Do not write raw discovery notes into `MEMORY.md`.

Bug logs and issue inventories belong under `ai-dev-workspace/current/artifacts/review/`, not in `STATE.md`.

Do not create `.ai-dev/` inside the product repository unless the user explicitly asks for project-local memory.


## Product Root Discipline

The private workspace is not the product repository.

Before selecting Build/Review or `execute-task`, orchestration must know whether the product target root exists and where it is.

If the target root is unknown, route to Discovery/Synthesis/Planning to resolve it.

If the target root does not exist, the next implementation task must be an explicit bootstrap/setup task. Do not let a feature task create the project root by accident.
## Discovery Artifact Kickoff Rule

For `new-product` + `discovery`, if the workspace is writable, create or update the initial discovery artifact before asking follow-up questions.

The orchestrator report should include the artifact path. If no artifact was created, it must state the concrete blocker.

Do not present only a chat questionnaire when `artifacts/discovery/` can be written.
## User Answer Does Not Equal Phase Approval

A user response that fills missing Discovery/Synthesis/Planning data is input to the current phase, not permission to cross the next phase gate.

After incorporating the answer into the current phase artifact, stop with the gate and next recommended movement unless the user explicitly asked for unattended continuation across phase gates.

Examples:

- answering Discovery questions -> update Discovery, stop before Synthesis
- approving Discovery gate -> may start Synthesis
- answering Synthesis clarification -> update Synthesis, stop before Planning
- approving task contract -> may execute that task only

## Canonical Discovery Movement

If scenario resolves to `new-product` and actual phase resolves to `discovery`, do not stop at a permission question.

The orchestrator should select `continue-phase` and begin Discovery unless a failed root/workspace gate, conflicting state, or real product-direction decision blocks progress.

For a fresh workspace, the correct next action is a Discovery kickoff with truth labels and focused questions, not "ask whether to proceed".

Target project root may remain unset during Discovery and Synthesis. It blocks product-code execution, not Discovery.

## Phase Authority Read Gate

Before materializing or advancing a phase, the orchestrator must read the authority files for that phase.

| Phase action | Required reads before action |
|---|---|
| Discovery artifact | `system/playbooks/phase-0-discovery.md` |
| Synthesis artifact | `system/playbooks/phase-1-synthesis.md`, `system/PRODUCT_SYNTHESIS.md`, latest Discovery artifact |
| Planning artifact or task contract | `system/playbooks/phase-2-planning.md`, `system/contracts/TASK.md`, latest Synthesis artifact |
| Build/Review execution | `skills/execute-task/SKILL.md`, `system/playbooks/phase-3-build-review.md`, active task contract, `system/contracts/LEDGER_ENTRY.md`, `system/contracts/REVIEW_REPORT.md`, `system/engineering/CODING_STANDARDS.md`, and architecture/design standards required by the task |

If the required authority was not read in the current pass, stop and read it before writing artifacts, tasks, product code, ledgers, or reviews.

A phase report that recommends the next phase is not permission to create the next phase artifact in the same pass.

For Planning reports, the validator line is mandatory. If an active task contract was created or materially updated and the validator did not run, report `Validator: NOT-RUN`, `Gate: fail-repair`, and `Movement: repair-planning`. Do not report `Gate: pass` or ask for task execution approval until the active task validator passes.
## Output Shape

Use the orchestrator report shape unless a direct user answer is more useful:

```markdown
## Orchestration

Scenario: [new-product | existing-feature | bugfix | recovery]
Actual Phase: [discovery | synthesis | planning | build-review]
Path: [playbook] + [runbook]
Gate: [gate name] -> [result]
Specialists: [used / not used / required but unavailable]
Delegation: [not-needed | advice-only | task-shaping | execution-support | review-support]
Movement: [one movement]
Next Action: [specific bounded action]
Reason: [one short reason]
```

## Final Rule

`orchestrate` should make the next move clearer with the least possible ceremony.

If the bootstrap is already valid, do not narrate it at length. Move into the orchestration decision.



















