# PHASE 2 - PLANNING

## Purpose

This playbook defines how the system turns Synthesis into executable work.

Planning exists to create bounded tasks, execution boundaries, specialist expectations, sequencing, and review evidence requirements.

It must follow:

- `system/TECHNICAL_PLANNING.md`
- `system/engineering/ARCHITECTURE_CONTRACTS.md`
- `system/contracts/TASK.md`
- `system/control/HANDOFF_TEMPLATES.md`
- `system/control/ORCHESTRATOR.md`
- `system/control/DELIVERY_DOCTRINE.md`

---

## Phase Objective

Produce a planning artifact, an active task contract, and a visible delivery sequence when the MVP is larger than one task.

Planning should clarify:

- what will be built or changed
- why this unit is next
- what is explicitly out of scope
- which surfaces are involved
- which specialist owns the work
- which evidence will prove completion
- how review will judge the result

The goal is not to describe the whole future. The goal is to make the next task executable without invention while keeping the rest of the MVP visible enough that execution does not mistake one task for the whole product.

---

## Required Inputs

Typical inputs:

- synthesis artifact from `ai-dev-workspace/current/artifacts/synthesis/`
- discovery artifact when context is needed
- `ai-dev-workspace/current/STATE.md`
- `ai-dev-workspace/current/MEMORY.md` when stable project truth matters
- `ai-dev-workspace/current/DESIGN.md` when UI or design-system work is involved
- existing product/code context when relevant
- technical or design constraints
- scenario runbook

If synthesis is missing or weak, route back to Synthesis.

If product direction is still unclear, route back to Discovery or Synthesis.

---

## Standard Sequence

### 1. Read Synthesis

Extract:

- product direction
- scope boundary
- non-goals
- highest-risk assumptions
- planning implications
- validation needs

Do not plan features that Synthesis explicitly deferred.

### 2. Identify Work Slices

First distinguish:

- the MVP boundary
- the delivery slices needed to reach that MVP
- the first executable slice

Then break scope into meaningful slices.

A slice should be:

- coherent
- reviewable
- small enough to execute
- valuable or enabling
- bounded by clear surfaces

Avoid giant tasks that hide multiple decisions or silently collapse the whole MVP into one contract.

If a slice still contains major unknowns, split the unknown into a separate investigation or shaping task.
## Target Root Requirement For Planning

Planning may include non-code shaping tasks, but it must still declare whether the task touches:

- private workspace artifacts only
- product code root
- external design/tool workspace

If the product target root is unset, Planning must not create a feature implementation task.

If the product project does not exist, the first code task must be a bootstrap/setup task. A hero implementation, landing page, dashboard, auth, RSVP, or gift-list task cannot be active before bootstrap.

Design-system baseline tasks may run before bootstrap only when their output is an ai-dev-workspace artifact such as `DESIGN.md`, not an external design tool project unless explicitly approved.

### Project Root And Bootstrap Check

Before selecting an implementation task, Planning must resolve whether product code already exists.

Check and record:

- private workspace root: `ai-dev-workspace/current/`
- product target root: the directory where product code may be created or edited
- whether the product target root exists
- whether a framework/project scaffold already exists

If the product target root is unknown, do not create an implementation task for product code. Create a decision or planning-repair item to resolve the target root.

If the product target root does not exist, the first executable implementation task must be a bootstrap/setup task. That task must explicitly allow creating the product root, package manifest, framework config, initial route tree, and base commands.

Do not let a feature task silently become a project bootstrap task.

Do not use `ai-dev-workspace/current/` as the product root unless the user explicitly approves that unusual choice.
## Bootstrap Task Boundary

A bootstrap/setup task may create the product root, package manifest, framework config, route shell, and base commands.

It must not also become the design-system task, landing page task, hero task, animation task, backend task, or first feature task.

Design-system baseline, hero, landing page, auth, RSVP, gifts, payments, and backend APIs require separate task contracts unless the user explicitly approves a larger bootstrap scope and the review evidence can still judge every done criterion.

### 3. Remove Hidden Decisions

Before choosing the active task, check whether the task would force Build/Review to invent:

- product behavior
- architecture direction
- backend/API architecture boundaries
- schema decisions
- trust/security decisions
- visual language or design-system rules
- review evidence expectations

If yes, Planning is not done yet.

Resolve the missing decision here, route to the right specialist, or create a smaller task that only investigates the unknown.

### 4. Choose First Executable Task

Select the next task based on:

- dependency order
- risk reduction
- user value
- implementation readiness
- reviewability
- smallest honest scope

Do not start with a task that requires unresolved product or technical decisions.

The active task should be the smallest unit that can produce meaningful progress and truthful review evidence.

Treat the active task as one slice of delivery, not as the full MVP, unless Planning can justify that the MVP is truly one bounded executable unit.

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
### 5. Define Task Contract

Create task contracts using:

`system/contracts/TASK.md`

Each task must include:

- objective
- one canonical owner specialist
- supporting specialists
- inputs
- allowed scope
- out of scope
- target surfaces
- constraints
- standards preflight
- verification plan
- done criteria
- evidence required
- review gate
- drift risks

A task is not ready if Build/Review would still need to guess where to work, what to avoid, how success will be judged, or which hidden technical decision is still unresolved.

Planning must break or repair tasks that:

- use a composite owner specialist such as `frontend + motion`
- mix bootstrap, design-system, frontend implementation, backend/API, and review evidence in one broad contract
- create a new web product without choosing the system-recommended web/api/server/db/shared structure or explicitly justifying an equivalent convention

### 6. Decide Whether Handoff Is Needed

Create a handoff only when it makes execution narrower, safer, or more explicit.

Typical reasons to create a handoff:

- specialist coordination matters
- the task has non-obvious execution boundaries
- external docs or version-specific references matter
- acceptance criteria need extra operational translation
- the work is risky enough that execution should not infer intent

If the task contract already gives enough execution truth, use `not-needed` and do not create handoff theater.

### 7. Sequence Remaining Work

When the MVP requires more than one executable unit, Planning must record the immediate delivery sequence after the active task.

Remaining work may be listed as candidate tasks, but only the active task needs full execution readiness.

Candidate tasks should not pretend to be executable until they have full contracts.

A candidate task is not executable. Before any candidate task moves to Build/Review, Planning must materialize its own task contract under execution/tasks/, run the automatic Node validator for that task, and stop for execution approval if required by the phase gate.

Candidate tasks may stay short as long as they are clearly marked non-executable.

If the system cannot name the next likely tasks after the active task, the MVP is probably still undershaped or the active task is too large.

### 8. Automatic Task Validation Gate

After creating or materially updating the active task contract, Planning must automatically run the local Node validator when `ai-dev-system/scripts/validate-ai-dev.mjs` exists.

This is an internal gate. Do not ask the user to remember or run a command.

The gate must validate the active task contract before Planning reports the task as ready for Build/Review. If validation fails, Planning gate is `fail-repair`; repair the task, `STATE.md`, or `config.yaml`, then rerun validation.

Record the validator result in the planning artifact or orchestration report.

Planning must not report `Gate: pass` or `Gate: pass-with-warning` unless the validator ran for the active task contract and passed. If the validator was not run, the Planning gate is `fail-repair`, the task readiness is `blocked`, and the next movement is `repair-planning`. A missing validator result is not a warning; it is a failed Planning gate.

The Planning report must include:

- `Validator: PASS | FAIL | NOT-RUN`
- `Validator Command: node ai-dev-system/scripts/validate-ai-dev.mjs --workspace ai-dev-workspace/current --task <task-file>`

If `Validator: FAIL`, include the first actionable failure and repair before asking to execute the task.

### 9. Apply Planning Gate

Before advancing to Build/Review, verify:

- active task contract is valid
- active task can be executed without inventing scope
- active task can be reviewed from evidence
- handoff is actionable when needed
- allowed and forbidden scope are explicit
- target project root is explicit for implementation tasks
- target surfaces are known
- specialist plan is explicit
- evidence requirements are clear
- standards preflight and verification plan are explicit for implementation tasks
- the plan distinguishes the active task from the full MVP
- when more work remains, the immediate delivery sequence is visible
- unknowns are either resolved or deliberately removed from this task

### 10. Update Workspace State

Update `ai-dev-workspace/current/STATE.md` with short operational truth only.

Typical updates:

- current phase
- active deliverable
- active task
- next action
- current risk if planning is blocked

Do not dump the planning artifact into state.

---
## Task Granularity And Architecture Gate

Planning must reject task contracts that bundle unrelated execution layers merely because they are convenient to demo together.

Split the task when it mixes two or more of these without explicit approval and reviewable evidence for each:

- project bootstrap/scaffold
- design-system baseline
- hero/landing/frontend feature
- backend/API behavior
- database/schema/persistence
- auth/ownership/security
- dashboard/admin UX
- runtime verification/review repair

For code tasks, the task contract must include `Standards Preflight` and `Verification Plan`. If those are missing, Planning gate is `fail-repair`.
## Tool Identity And Specialist Names

Task contracts must name canonical ai-dev-system specialists as owners, such as `design-system`, `frontend`, `backend`, `database`, `ui`, or `motion`.

Do not use external tool names such as `Stitch`, `MCP`, `Figma`, `v0`, or `design generator` as owner specialists.

External tools may appear only under constraints, allowed tooling, or handoff notes when explicitly approved by the user or required by the task. They are execution tools, not specialists.

If the user did not explicitly approve a downstream design/code generation tool, do not plan it into the active task.

## Specialist Use

Useful specialists:

- `prioritizer` for slicing and ordering
- `project-manager` for dependencies and delivery sequencing
- `architectux` for structural product/workflow boundaries
- `frontend` for frontend execution surfaces
- `ui` for screen-level hierarchy, visible states, responsive behavior, or visual drift
- `design-system` for DESIGN.md, tokens, component standards, or reusable visual language
- `motion` for animation, gestures, timing, easing, or reduced-motion behavior
- `backend` for backend execution surfaces
- `database` for persistence or schema surfaces
- `security` for trust or risk-sensitive surfaces
- `reality-checker` when task readiness may be overstated

Specialist activation must follow `system/control/AGENT_ACTIVATION_PROMPTS.md`.

Use specialists to reduce hidden decisions, not to decorate the plan.

---

## Planning Artifact

Create or update a planning artifact under:

`ai-dev-workspace/current/artifacts/planning/`

Recommended sections:

- source synthesis artifact
- planning goal
- MVP boundary
- selected work slices
- active task
- active slice versus full MVP
- why this task is first
- candidate tasks
- immediate delivery sequence
- sequencing rationale
- dependencies
- specialist plan
- backend architecture contract when API or server behavior is involved
- evidence strategy
- risks and non-goals
- unresolved items kept out of the active task

---

## Task Location

Executable tasks should live under:

`ai-dev-workspace/current/execution/tasks/`

Recommended naming:

`TASK-001-short-title.md`

Only one task should be marked active unless the system is explicitly operating in a parallel mode.

A larger MVP may still have multiple queued or candidate tasks behind the active one.

---

## Handoff Location

Execution handoffs should live near execution records:

`ai-dev-workspace/current/execution/tasks/`

Recommended naming:

`HANDOFF-TASK-001-short-title.md`

If no handoff is needed, record `not-needed` in the planning artifact or orchestration output.

---

## Gate

Planning may advance to Build/Review only when:

- at least one valid task contract exists
- the active task has a clear execution boundary
- the active task does not hide unresolved product or technical decisions
- the plan distinguishes the active task from the full MVP
- when more work remains, the immediate delivery sequence is visible
- the handoff is actionable if required
- the task can be reviewed from evidence
- required specialists are declared
- unknowns are not hidden inside implementation

Gate result must be one of:

- `pass`
- `pass-with-warning`
- `fail-repair`
- `fail-stop`
- `recovery-required`

---

## Failure Patterns

Avoid:

- creating a backlog instead of an executable task
- collapsing the full MVP into one oversized task without justification
- vague tasks such as "build the dashboard"
- missing out-of-scope boundaries
- hidden future features inside current task
- target surfaces marked unknown for implementation tasks
- evidence-free done criteria
- treating candidate tasks as approved execution
- assigning specialists ceremonially
- pushing unresolved design, architecture, or security choices into Build/Review

---
## Planning To Build Stop Rule

Planning creates executable truth; it does not execute it automatically by default.

After creating or updating an active task contract, stop and report:

- planning artifact path
- active task path
- target project root
- owner specialist
- allowed scope
- out of scope
- evidence required
- gate result

Do not start Build/Review in the same pass unless the user explicitly approved execution after seeing the task contract, or the user explicitly requested unattended execution across phase gates.


Planning artifact persistence belongs to the orchestrator or current executor. Specialists may shape slice selection, sequencing, or task design, but they do not own final artifact persistence unless they are the active executor with write authority.

If workspace writing is unavailable, report:

```text
Artifact path: pending - write unavailable
```

Stop instead of reconstructing planning artifacts or task contracts through ad hoc shell fallbacks.

## Output

A Planning completion report should include:

```markdown
## Planning

Artifact: [path]
Source Synthesis: [path]
Active Task: [path]
Handoff: [path or not-needed]
Specialists Planned: [list or none]
Task Readiness: [ready | partial | blocked]
Validator: [PASS | FAIL | NOT-RUN]
Validator Command: [command used or not-run]
Gate: [pass | pass-with-warning | fail-repair | fail-stop | recovery-required]
Next Movement: [execute-task | repair-planning | return-synthesis | stop-for-decision | route-recovery]
Reason: [one short reason]
```

---

## Final Rule

Planning is successful when Build/Review can execute the next task without inventing scope, target surfaces, evidence requirements, specialist responsibilities, or unresolved product decisions.









