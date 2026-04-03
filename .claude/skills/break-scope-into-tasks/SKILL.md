---
name: break-scope-into-tasks
description: Break stabilized and validated scope into a small bounded set of canonical task artifacts aligned with the task template, without generating handoff or implementation planning.
---

# SKILL: break-scope-into-tasks

## Purpose

Break stabilized and validated scope into a small bounded set of canonical task artifacts.

This skill exists to:

- verify that the active PRD and active validation are ready enough to support task decomposition
- transform validated scope into clear bounded task units
- keep task artifacts small, understandable, and downstream-friendly
- produce output aligned with the canonical task template

This skill defines task units.

It does not generate handoff, implementation planning, or later-stage execution detail.

---

## When To Use

Use this skill when:

- an active PRD exists
- an active validation artifact exists
- both are stable enough to support bounded task decomposition
- the next safe governed step is to create task artifacts from that validated scope

---

## When Not To Use

Do not use this skill when:

- context is still unstable
- the PRD is missing or materially incomplete
- validation has not been derived yet or is too weak to support decomposition
- scope is still ambiguous enough that task boundaries would be guessed
- the current need already belongs to `handoff`, `implementation`, or `review`

If context is still weak, return to:

`detect-context-gap`

If the PRD is missing or unstable, return to:

`create-or-update-prd`

If validation is missing or unstable, return to:

`derive-validation-scenarios`

---

## Readiness for Task Decomposition

Before decomposing scope into tasks, this skill must verify that the basis is materially stable.

At minimum, task decomposition requires:

- a stabilized PRD
- a derived validation artifact
- scope that is clear enough to separate into bounded work units
- validation that is clear enough to indicate what the work must support without guessing

If these conditions are not met:

- stop
- do not generate tasks
- return control to the earlier skill that must stabilize the missing layer

Task decomposition must not compensate for unstable scope or weak validation.

---

## Recheck Against Upstream Ambiguity

Even if upstream artifacts exist, this skill must still recheck whether decomposition would require hidden interpretation.

This skill must not proceed when task boundaries would depend on:

- guessed workflow meaning
- guessed scope exclusions
- guessed feature coupling
- inferred technical structure that was never established upstream
- invented quantitative or operational precision

If task decomposition would still require silent assumption or hidden design completion:

- stop
- do not generate tasks
- return control to the earlier skill that must stabilize the ambiguity

Tasking must not harden upstream ambiguity into false execution structure.

---

## Bounded Task Unit Definition

A good task in this system is one bounded unit of work.

Each task should have:

- a clear objective
- a clear boundary
- a clear done condition
- enough focus to remain understandable without internal re-planning
- enough separation to avoid absorbing the whole feature or workflow

A task must not be:

- a full feature dump
- a milestone-level label
- a subsystem-sized container
- a vague placeholder for future thinking
- a bundle of unrelated concerns unless the coupling is unavoidable

Tasks should be small enough to support controlled downstream execution later, but they must not become mini implementation plans.

---

## Decomposition Discipline

This system is optimized for bounded, low-context operation.

Therefore this skill should produce a small, high-value task set.

Preferred range:

- 3 to 5 tasks

Maximum in one response:

- 5

Decomposition should:

- preserve traceability to the active PRD and validation artifact
- create the smallest sufficient set of meaningful task units
- avoid inventing new requirements or new scope
- avoid embedding execution detail that belongs to a later handoff
- avoid overloading tasks with surrounding context that should stay in upstream artifacts

Each generated task should make later work clearer without collapsing `tasks` into `handoff` or `implementation`.

Task generation may produce multiple task artifacts in one bounded decomposition step.

However, this does not make the system parallel-first.

The existence of multiple task artifacts must not be described as simultaneous active execution.

Task creation remains one governed decomposition step inside a serial operational model.

---

## Task Shaping Rule

Each task should usually represent one of the following:

- one bounded user-visible behavior slice
- one bounded enabling slice directly required by that behavior
- one tightly coupled pair of concerns only when separating them would create artificial fragmentation

A task should not combine multiple broad behaviors just because they are adjacent in the eventual product flow.

If a candidate task would require phrases like:

- "base app + navigation + cart + checkout"
- "UI + backend + persistence + final flow"
- "all remaining behavior"

then it is likely too broad and must be narrowed before creation.

---

## Technical Decision Containment

This skill must not silently convert task decomposition into technical decision-making.

It must not introduce as if already decided:

- stack choices
- framework choices
- storage choices
- persistence choices
- package choices
- folder structure choices
- implementation architecture choices

unless those decisions are already materially grounded upstream by governed context, PRD continuity, or official project defaults.

If a task depends on a technical decision that is still unresolved, that dependency may be noted conservatively as a dependency or open note, but it must not be silently resolved inside the task artifact.

Task scope is not the place to improvise stack or architecture.

---

## Traceability Discipline

Each task must remain traceable to the upstream basis.

A task should be explainable in terms of:

- which part of the active PRD it supports
- which validation scenario or validation axis it materially contributes to

This skill must avoid loose or decorative traceability.

It must not attach a task to upstream artifacts that do not materially justify that task.

It must also not produce tasks whose relationship to validation is so weak that later execution would require reinterpretation.

If traceability is weak, decomposition is not ready.

---

## Active vs Pending Task Discipline

When multiple tasks are created, this skill must preserve the serial operational model.

It must determine:

- one current `Active Task`
- the remaining generated tasks as `Pending Tasks`

The chosen `Active Task` should usually be the one that:

- best unlocks later downstream work
- is currently most foundational without being artificially over-broad
- is coherent as the first bounded execution focus

This choice must not be arbitrary.

This skill must not describe all created tasks as equally active.

It must not imply concurrent execution.

---

## Template Adherence

This skill must produce output aligned with the canonical task template located at:

`project/tasks/templates/TASK_TEMPLATE.md`

The template defines the canonical artifact structure.

This skill must use that template as the structural anchor rather than recreating a parallel task format inside the skill.

The result should be:

- clear
- bounded
- template-compatible
- easy to review
- suitable for low-context operation

---

## Artifact Cleanliness Rule

Each task artifact must be structurally clean and semantically coherent.

This skill must not leave behind:

- placeholder leftovers
- duplicated filler
- stray `none` lines
- malformed bullets
- mixed structural fragments
- accidental contradictory sections
- noisy references that do not correspond to real artifact state

Each populated field must read as intentional final task content.

Omitted content must remain omitted according to template convention, not filled with filler noise.

---

## Canonical Artifact Placement

This skill must create or update task artifacts in the canonical active task location:

`project/tasks/active/`

It must not:

- create or update active task artifacts in the root of `project/tasks/`
- place active task artifacts in `done/` or `archived/`
- treat a non-canonical task path as valid step closure

If one or more task artifacts cannot be materialized in the canonical active task location, this skill must stop and report that task-stage closure remains operationally incomplete.

---

## Upstream Artifact Mutation Restrictions

This skill may update upstream references only when that update is minimal, canonical, and does not reinterpret the upstream artifact.

This skill must not:

- rewrite the active PRD beyond minimal task reference maintenance
- rewrite the active validation artifact into a downstream planning artifact
- mutate upstream artifacts as if handoff or implementation had already started
- add execution language to the PRD or validation artifact

At most, this skill may add or refresh minimal canonical task references when that reference maintenance is part of the repository convention.

Those updates must remain short and must not alter the role of the upstream artifacts.

---

## Materialization Order

This skill must preserve strict closure order.

A valid task-stage closure must happen in this sequence:

1. create the task artifacts in the canonical active task location
2. confirm the task artifacts are materially present and coherently reflect the active PRD and validation basis
3. update upstream references only when that update is minimal and canonically appropriate
4. update `PROJECT_STATE.md` only if the new operational moment can be represented coherently
5. emit the completion message only after the artifacts and resulting state describe the same operational moment

This skill must not narrate task-stage completion before the material task artifacts exist.

This skill must not claim that task-stage closure is complete on the basis of intended or attempted artifact creation.

---

## State Closure Discipline

If this skill successfully creates canonical task artifacts, it may participate in closing the task decomposition step by updating `PROJECT_STATE.md`.

This is allowed only when the resulting operational moment is clear and can be reflected coherently.

A valid state closure for this step must not:

- populate `Active Task` with multiple simultaneously active tasks
- describe bounded task artifact creation as parallel operational execution
- update only a narrow subset of task-related fields while leaving the rest of the state materially anchored to a prior stage
- point `Active Task` to a non-canonical path

When multiple tasks are generated, the state model should preserve one current active task and distinguish the remaining non-active tasks separately.

The preferred operational model is:

- `Active Task` = the current task in execution focus
- `Pending Tasks` = the remaining generated tasks that are not yet active

If `PROJECT_STATE.md` is updated after task generation, the resulting state must coherently align at minimum:

- current phase
- current focus
- active PRD
- active validation
- active task
- pending tasks
- active handoff
- execution flags
- next expected skill
- primary objective
- success condition
- next allowed action
- state notes

For this step, a coherent post-task state should describe:

- PRD and validation as active and stable enough for downstream work
- one active task as the current execution focus
- remaining generated tasks as pending when applicable
- handoff preparation as the next allowed governed step when applicable
- no claim that handoff or implementation has already started

If this skill cannot close the state coherently, it must stop and report that lifecycle closure remains incomplete.

It must not treat a partial state patch as a valid completed transition.

---

## Boundaries

This skill must not:

- behave like workflow governance
- behave like live project state
- generate a Handoff
- create an implementation plan
- define architecture in detail
- redesign product scope
- generate code or pseudo-code
- introduce role taxonomies or agent-specific routing
- continue into later stages inline after task generation
- claim that task-stage closure is complete if the resulting `PROJECT_STATE.md` still reflects an earlier stage or a contradictory lifecycle situation

Its role is limited to producing canonical task artifacts from stabilized and validated scope.

---

## Output Contract

This skill produces a small bounded set of task artifacts.

The output must be:

- aligned with the canonical task template
- based on the active PRD and active validation artifact
- clear enough to support later handoff safely
- bounded enough to avoid becoming a hidden implementation plan
- concise enough to remain reliable for low-context execution

After the task set is produced, this skill must stop.

If lifecycle closure is valid and coherent, that closure may include a complete `PROJECT_STATE.md` update for the task decomposition step.

It must not continue automatically into `handoff`, `implementation`, or `review`.

A narrated next step is not sufficient by itself.

The material task artifacts, the resulting `PROJECT_STATE.md`, and the completion message must all describe the same operational moment.

---

## Failure Handling

If the PRD or validation artifact is not stable enough to support safe decomposition:

- stop task generation
- identify the missing or unstable basis clearly
- return control to the earlier skill that must stabilize the problem

If decomposition reveals that task boundaries would only be possible through guessing, hidden design work, or premature execution planning:

- stop
- surface the ambiguity clearly
- return to the earlier stage that must clarify scope or validation

If task artifact creation succeeds but coherent lifecycle closure fails:

- stop
- surface the state inconsistency clearly
- treat the governed transition as operationally incomplete
- do not authorize the next stage on top of the partial closure

This skill must never compensate for weak upstream artifacts by inventing hidden structure.

---

## Final Rule

A correct `break-scope-into-tasks` must answer:

- is the scope ready for bounded task decomposition?
- what are the smallest meaningful task units?
- how should they be recorded as canonical tasks?

It must not answer:

- how to make handoff
- how to implement the solution
- how to govern the entire workflow
- how to rediscover context from zero

Its job is to decompose validated scope into a small bounded set of canonical task artifacts, close the task decomposition step coherently when possible, and then stop.