# AGENTS

## Project Identity

This repository is `ai-dev-system`, an orchestration system for AI-assisted product delivery.

It is not a product app, not a Stitch project, and not a UI/code generation workspace by default.

## Mandatory Entrypoint

If the user asks to start, resume, continue, test, audit, or operate `ai-dev-system`, route to the local orchestration flow first.

Before using any downstream tool, MCP, design generator, frontend/backend specialist, database tool, or product-specific workflow, read:

1. `ai-dev-system/ENGINE.md`
2. `ai-dev-system/system/control/ORCHESTRATOR.md`
3. `ai-dev-system/skills/orchestrate/SKILL.md`
4. `ai-dev-workspace/current/config.yaml`
5. `ai-dev-workspace/current/STATE.md`

If your current working directory is already `ai-dev-system/ai-dev-system`, use paths relative to that folder:

1. `ENGINE.md`
2. `system/control/ORCHESTRATOR.md`
3. `skills/orchestrate/SKILL.md`
4. `../ai-dev-workspace/current/config.yaml`
5. `../ai-dev-workspace/current/STATE.md`
## Operational Root Resolution

Do not assume the current working directory is the operational root.

Resolve roots before reading workspace state:

1. Check the current working directory first. If it contains both required folders, it is the operational root. Stop searching.
   - `ai-dev-system/`
   - `ai-dev-workspace/`
2. Only if the current directory does not contain both folders, walk upward through parents until a folder containing both is found.
3. Only if no current/ancestor folder matches, use the location of the loaded `ai-dev-system` file to infer a candidate umbrella folder, then verify it contains both folders.
4. If no verified folder contains both required folders, report `Operational root: unresolved`, route to bootstrap/recovery, and do not continue with product, design, code, Stitch, or MCP tools.
5. Print absolute paths in the root status header.

Canonical resolved roots:

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

## Required Root Status

At the start of every ai-dev-system orchestration pass, report:

```text
Operational root:
Root verification: [verified | unresolved]
System root:
Workspace root:
Target project root:
Active phase:
Active task:
Next action:
```

If `target_project.root` is unset, product-code execution is not allowed.

## Route Before Specializing

Product words in the prompt are context, not tool routing.

Examples: `SaaS`, `wedding`, `hero`, `premium`, `design`, `frontend`, `backend`, `database`, and `Stitch` do not override explicit `ai-dev-system` intent.

Do not invoke Stitch or any design/code MCP before orchestration resolves scenario, actual phase, gate, and next movement.
## External Design Tool Default

Stitch and other design/code generation MCP tools are unavailable by default for ai-dev-system orchestration.

They may be used only when the user explicitly asks to use that tool or an active task contract/handoff explicitly names it after user approval.

Do not infer Stitch usage from words like `hero`, `design`, `premium`, `romï¿½ntico`, or `storytelling`.

## Downstream Tool Gate

Do not call Stitch, MCP design generators, frontend/backend/database tools, or product-specific skills unless a current orchestration decision or active task contract explicitly allows that tool path.

Product terms like `hero`, `premium`, `design`, `SaaS`, or `wedding` are not tool permission.

If a downstream tool times out or fails, record the failure and stop with retry guidance. Do not silently replace the failed tool with manual feature implementation unless the active task contract allows that fallback.


## Non-Negotiable Gates

These gates are intentionally repeated here because this file is loaded early.

- After creating or materially updating a Discovery artifact, stop before Synthesis unless the user explicitly approved crossing that phase gate.
- After creating or materially updating a Synthesis artifact, stop before Planning unless the user explicitly approved crossing that phase gate.
- After creating or materially updating a Planning task contract, stop before Build/Review execution unless the user explicitly approved executing that specific task.
- Before creating a Planning task contract, read `ai-dev-system/system/playbooks/phase-2-planning.md` and `ai-dev-system/system/contracts/TASK.md`.
- Before executing any implementation task, read `ai-dev-system/skills/execute-task/SKILL.md`, `ai-dev-system/system/playbooks/phase-3-build-review.md`, `ai-dev-system/system/contracts/TASK.md`, `ai-dev-system/system/engineering/CODING_STANDARDS.md`, and any architecture/design standards required by the task.
- The mechanical validator is an internal gate, not a user-facing ritual. When `ai-dev-system/scripts/validate-ai-dev.mjs` exists, agents must run it automatically at the Planning task-readiness gate and Build/Review execution gate. Do not ask the user to remember, copy, or manually run the validator command. Manual validator commands are for debugging only.
- Planning reports must include `Validator: PASS | FAIL | NOT-RUN`. If an active task contract was created or updated and the validator is `NOT-RUN` or `FAIL`, the gate is `fail-repair`; never report `Gate: PASS` or request execution approval for that task.
- A task contract that lacks `Owner Specialist`, `Architecture Boundaries`, `Standards Preflight`, `Verification Plan`, `Evidence Required`, or `Review Gate` is invalid and must not be executed.
- A task that mixes bootstrap, design-system, hero/landing, backend/API, database, auth, dashboard, and verification in one broad task must be split unless the user explicitly approved the larger scope after seeing the contract.
- Do not claim a task is complete without concrete ledger and review files under `ai-dev-workspace/current/execution/ledgers/` and `ai-dev-workspace/current/execution/reviews/`.
- Do not claim specialist use unless the specialist was actually invoked natively or its file was read and materially applied. Naming specialists in prose is not specialist execution.
- Adapter specialist execution is valid when egistry.yaml declares untime_type: general and invocation_mode: adapter, but it must happen before code edits and must produce concrete implementation/design decisions. A citation-only specialist claim is invalid.
- Do not update `config.yaml` or `STATE.md` by appending duplicate fields. Rewrite or structured-edit them and re-read to verify one value per field.
- Use the actual current date from the runtime environment when writing records. Do not copy stale dates from templates or previous logs.
## Workspace Boundary

- `ai-dev-system/` is the system engine.
- `ai-dev-workspace/current/` is private operational memory.
- `target_project.root` is the product code root.

Never create product code inside `ai-dev-workspace/current/` unless explicitly approved by the user and recorded in the task contract.

## Final Rule

When in doubt, read the orchestrator first. The orchestrator routes; downstream tools execute only after routing.













