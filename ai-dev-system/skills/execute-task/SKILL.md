---
name: execute-task
description: Execute one bounded task with ledger, evidence, and review.
---

# Execute Task

Execute one bounded task through the build/review loop.

Use this skill only after orchestration has selected `execute-task` as the next movement or when the user explicitly requests execution of an already valid task.

`execute-task` is not a replacement for planning. If the task is weak, missing, or too broad, route back to orchestration or planning.

## Purpose

Implement one task honestly, stay inside the approved boundary, record what actually happened, collect evidence, and produce a review result.

This skill must operate against the private workspace:

```text
ai-dev-workspace/current/
```

## Execution Contract

Before making changes, confirm:

1. A task contract exists as a file under `ai-dev-workspace/current/execution/tasks/`, not only in chat or an orchestration report.
2. The task objective is concrete.
3. Allowed scope is explicit.
4. Out-of-scope is explicit.
5. Target project root is explicit for implementation tasks and is not `ai-dev-workspace/current/` unless explicitly approved.
6. Target surfaces are known or investigation itself is the task.
7. Done criteria are reviewable.
8. Evidence required is listed.

If any of these fail, stop and route back to planning or orchestration.

## Working Sequence

### 1. Confirm Task Readiness

Check the task against `system/contracts/TASK.md`.

If the contract is weak, do not execute.


### Project Root Guard

Before changing files, identify:

- private workspace root
- product target root
- active task file path

Stop when product target root is unknown, points at the private workspace without explicit approval, or does not exist while the task is not a bootstrap/setup task.

A feature task must not silently create package manifests, framework config, or project scaffold.

### Mechanical Validator Gate

The validator is an automatic execution gate, not a user-facing command.

Before executing an implementation task, `execute-task` must automatically run the local Node validator when `ai-dev-system/scripts/validate-ai-dev.mjs` exists. The user must not be asked to remember, copy, or manually run the validator command.

Required automatic checks:

- before product code edits: validate the active task contract with `-Task <task-file>`
- after ledger, review, and state records are written: validate workspace records with `--all`

If the validator fails, do not edit product code or claim completion. Repair Planning, state, config, task contract, ledger, or review records first, then rerun the automatic gate.

If the host runtime cannot execute the validator, stop with `fail-repair` or `recovery-required` and report the blocker. Do not silently skip the gate.

Record validator execution and result in the ledger evidence. Record consulted documentation in the ledger `Documentation Preflight` section. Manual validator commands may be shown only as optional debugging guidance, never as the normal operating path.
## Specialist Standards Matrix

When a task declares an owner or supporting specialist, its `Standards Preflight` must include the specialist file plus the required standards for that specialist. The ledger must later show those same standards in `Standards Applied`, `Architecture Preflight`, or `Specialist Material Contribution`.

Minimum matrix:

| Specialist | Required Standards |
|---|---|
| `design-system` | `system/agents/design-system.md`, `system/design/DESIGN_SYSTEM_STANDARDS.md`, `system/design/DESIGN_MD_TEMPLATE.md` |
| `ui` | `system/agents/ui.md`, `system/design/DESIGN_SYSTEM_STANDARDS.md` |
| `motion` | `system/agents/motion.md`, `system/design/DESIGN_SYSTEM_STANDARDS.md` |
| `frontend` | `system/agents/frontend.md`, `system/engineering/CODING_STANDARDS.md`, `system/engineering/ARCHITECTURE_CONTRACTS.md` |
| `backend` | `system/agents/backend.md`, `system/engineering/CODING_STANDARDS.md`, `system/engineering/ARCHITECTURE_CONTRACTS.md` |
| `database` | `system/agents/database.md`, `system/engineering/CODING_STANDARDS.md`, `system/engineering/ARCHITECTURE_CONTRACTS.md` |
| `security` | `system/agents/security.md`, `system/engineering/CODING_STANDARDS.md`, `system/engineering/ARCHITECTURE_CONTRACTS.md` |
| `research` | `system/agents/research.md`, `system/research/DISCOVERY_STANDARDS.md` |
| `ux-research` | `system/agents/ux-research.md`, `system/research/DISCOVERY_STANDARDS.md` |

This matrix is enforced by `ai-dev-system/scripts/validate-ai-dev.mjs`.
### Architecture And Standards Preflight

Before editing product code, execute-task must turn standards into an explicit implementation plan.

Required reads before code changes:

- `system/engineering/CODING_STANDARDS.md`
- `system/engineering/ARCHITECTURE_CONTRACTS.md` when frontend, backend, database, API, auth, persistence, or framework structure is touched
- `system/design/DESIGN_SYSTEM_STANDARDS.md` when UI, tokens, visual components, or styling are touched
- the owner specialist file and any required supporting specialist files named by the task contract

Before changing files, record an Architecture Preflight in the ledger draft or execution notes with:

- standards read
- owner specialist path used
- target layers to be touched
- allowed architecture shape for this task
- anti-patterns explicitly prohibited for this task
- verification commands and evidence needed before `done`

Execution must stop with `stopped-missing-input` or route back to Planning when:

- the task touches backend but lacks route/controller, validation, use-case, repository, auth/ownership, or error-mapping boundaries where applicable
- the task touches frontend but lacks page/screen/component/hook/adapter boundaries where applicable
- the task touches UI/design but lacks token/design-system constraints
- the task would create a god page, god component, route-handler dumping ground, generic service dumping ground, or mock persistence layer not explicitly allowed by the task
- the task mixes bootstrap, design-system, feature implementation, backend/API, and review evidence in one broad contract without explicit approval
### Documentation Preflight Gate

Before product code edits, execution must consult documentation when the task touches modern framework/library/SDK/API/database/styling/animation behavior.

Preferred order:

1. Context7 or the project-configured documentation provider.
2. Official framework/library/vendor docs.
3. Existing local project docs when they are authoritative for the stack.

Do not rely on model memory for version-sensitive behavior such as Next.js App Router, Tailwind CSS v4, Prisma, auth libraries, animation APIs, SDK clients, routing conventions, or generated clients. If documentation cannot be consulted, record an explicit waiver in the ledger and downgrade related review confidence.

The ledger must record documentation consulted under `Documentation Preflight`.
### Native Subagent First Rule

For tasks with an owner specialist, `execute-task` must resolve `system/agents/registry.yaml` before editing files.

If the owner has `runtime_type: opencode`, `invocation_mode: native-or-adapted`, and a valid `opencode_agent`, invoke that native subagent first using `@<opencode_agent>` and the bounded task context. The expected runtime behavior is a child/subagent execution, not only reading a markdown file.

Adapter fallback is allowed only when the native subagent is missing, unavailable, or fails. The ledger must then record why native execution was not used.
### Adapter Specialist Rule

Adapter is the canonical specialist path for this runtime when `registry.yaml` declares `runtime_type: general` and `invocation_mode: adapter`.

For any non-trivial task with an owner specialist, adapted execution must be visible before product files are edited:

1. resolve the specialist in `system/agents/registry.yaml`
2. read the specialist file named in the registry
3. read required standards from the task `Standards Preflight`
4. produce a short `Specialist Result` in execution notes or the ledger draft before implementation
5. name concrete architecture/component/design decisions that will guide the edit

Do not wait until the ledger to invent specialist contribution. If no concrete guidance changes the implementation, record `behavioral-specialist-guidance` or stop with `stopped-specialist-failure`; do not claim `adapted-specialist-execution`.
### Declared Supporting Specialist Accountability

Supporting specialists are not decorative.

For every supporting specialist declared in the active task, execution must choose and record one status before product code edits are considered complete:

- `invoked-native`
- `invoked-adapted`
- `waived-with-reason`
- `not-needed-after-owner-analysis`
- `unavailable`
- `failed`

If a supporting specialist owns a material part of the task domain, prefer invocation. Examples:

- `motion` for animation timing, gestures, reduced-motion, or motion performance.
- `ui` for screen hierarchy, visible states, responsive layout, and visual drift.
- `design-system` for tokens, component states, or DESIGN.md compliance.
- `backend` for API behavior, validation, auth, use cases, and error mapping.
- `database` for schema, migrations, query constraints, and ownership.
- `security` for trust boundaries, auth, sanitization, secrets, or unsafe rendering.

A ledger may not claim a supporting specialist was used unless there is native execution evidence or adapted file-read evidence plus a concrete contribution. Missing supporting specialist status prevents acceptance.
### 2. Resolve Specialist Need

Use the declared owner specialist and supporting specialists according to the task contract. Supporting specialists must be invoked, explicitly waived, or marked not-needed after owner analysis with a reason.

For any non-trivial task with an owner specialist, invoke the owner through native or adapted specialist execution before changing files. If the owner is not invoked, stop unless the task contract explicitly says direct execution is sufficient and explains why.

Record before and after execution whether specialist use was:

- native-specialist-execution
- adapted-specialist-execution
- behavioral-specialist-guidance
- specialist-not-needed
- specialist-unavailable
- specialist-failed

Do not exaggerate specialist participation. `behavioral-specialist-guidance` is not enough to satisfy an owner specialist requirement for non-trivial implementation.
For any required owner specialist, the ledger must include `Specialist Material Contribution` with the specialist file path, such as `system/agents/frontend.md`, and the concrete implementation or architecture decision that changed because of that specialist. A name-only specialist claim is invalid.

### 3. Execute The Smallest Honest Change

Implement only the active task boundary.

If safe execution would require scope expansion, stop and route back to orchestration or planning.

### 4. Create Ledger Entry

After the execution attempt, create a ledger in:

```text
ai-dev-workspace/current/execution/ledgers/
```

Use `system/contracts/LEDGER_ENTRY.md`.

A ledger summary is not a ledger. Do not use legacy fields such as `Status`, `Task Title`, or a free-form completion summary instead of the required ledger sections.

A task is not complete until a review report exists under `ai-dev-workspace/current/execution/reviews/` and the final automatic Node validator passes.

No review without a ledger.
### Command Shell Discipline

Before running implementation or verification commands, read `runtime.preferred_shell` from `config.yaml`.

On Windows, use Git Bash when configured and available:

```text
C:/Program Files/Git/bin/bash.exe
```

Prefer portable Bash commands for project workflows. If the runtime forces PowerShell or Git Bash is unavailable, continue with PowerShell only when safe and record the deviation in the ledger.

Do not mix shell-specific path syntax in a way that makes verification non-reproducible.
### Downstream Tool Gate

Do not invoke Stitch, MCP design generators, or unrelated specialist tools from `execute-task` unless the active task contract or handoff explicitly allows that tool path.

If an allowed tool fails or times out, record the failure in the ledger and return retry guidance. Do not silently replace a failed design-generation path with manual feature implementation unless fallback implementation is explicitly allowed in the task contract.

### Dev Server Timeout Rule

Any foreground dev-server verification command, such as `npm run dev`, must be bounded so the runtime does not hang.

Default limit: 6 seconds.

On Git Bash or other Unix-like shells, prefer:

```bash
timeout 6 npm run dev
```

If the task requires proving localhost readiness, use a managed background process with cleanup plus an HTTP request. Do not leave a dev server running in the tool session unless the user explicitly asked for an interactive server.

A plain foreground `npm run dev` is invalid evidence because it can block execution indefinitely.
### Tooling And Evidence Guard

Use the task-approved package manager and scripts.

If a command is unavailable and a substitute is used, record the substitute as a tooling deviation in the ledger and explain whether the user approved it or why retry is required.

Do not claim runtime UI, responsive behavior, console cleanliness, accessibility, API behavior, auth behavior, or persistence from build output alone.

Build output cannot satisfy a dev-server criterion. If 
pm run dev or localhost readiness is a done criterion, execution must record an actual server start plus successful HTTP request, or mark that criterion partial/not-inspected.

### 5. Collect Evidence

Evidence should match the task's required evidence.

For code tasks, evidence must include the architecture preflight result and the verification outcome required by the task. A build failure, runtime error, unresolved import, server-start failure, or missing required specialist contribution prevents `implemented`.

If evidence is missing, incomplete, or indirect, say so explicitly.

### 6. Review

Create a review report in:

```text
ai-dev-workspace/current/execution/reviews/
```

Use `system/contracts/REVIEW_REPORT.md`.

### 7. Update Workspace State

Update `ai-dev-workspace/current/STATE.md` only with short operational truth.

Do not dump implementation history into `STATE.md`.
### Single Task Stop Rule

`execute-task` executes one active task only.

After execution, it must create or update the ledger and review for that task, then stop with the review decision.

Do not start the next task, call a new design/MCP tool, install libraries for another task, or edit unrelated product files until orchestration selects the next movement and a valid task contract exists.

### 8. Final Record Consistency

After writing or editing ledger, review, and state, re-read them.

Verify:

- ledger has one final `Result`
- review has one final `Decision`
- done criteria status aligns with the decision
- no stale failure/success lines coexist as final truth
- `STATE.md` remains short operational state only
- bug logs are placed under `artifacts/review/`

If consistency fails, repair records before reporting completion.

## Output Shape

Use this shape when reporting completion:

```markdown
## Build/Review

Task: [path]
Ledger: [path]
Review: [path]
Specialists Used: [list or none]
Specialist Result Strength: [summary]
Evidence: [summary]
Decision: [accepted | accepted-with-follow-up | retry-required | rejected | recovery-required]
Next Movement: [next-task | retry | repair-planning | stop-for-decision | route-recovery]
Reason: [one short reason]
```

## Final Rule

`execute-task` succeeds only when implementation truth, evidence, and review decision all line up.








