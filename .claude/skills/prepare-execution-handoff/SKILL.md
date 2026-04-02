---
name: prepare-execution-handoff
description: Prepare a canonical handoff artifact from a bounded task by producing a short, clear, execution-friendly transfer aligned with the handoff template.
---

# SKILL: prepare-execution-handoff

## Purpose

Prepare a canonical handoff artifact from a bounded task.

This skill exists to:

- verify that the selected task is ready enough for handoff
- transform that task into a short, clear, execution-friendly handoff
- preserve only the context needed for the next bounded execution step
- produce output aligned with the canonical handoff template

This skill prepares controlled execution transfer.

It does not generate a full implementation plan, an execution report, or implementation work itself.

---

## When To Use

Use this skill when:

- a specific task has already been selected
- the task is bounded enough to support controlled handoff
- the task objective is clear enough that the next execution step can be framed without redefining scope
- the next safe governed step is handoff preparation

---

## When Not To Use

Do not use this skill when:

- no specific task has been selected
- the task is still too broad, vague, or unstable
- the task still depends on unresolved scope definition
- the task still depends on missing validation-relevant clarity
- the current need belongs to task decomposition, implementation, or execution reporting

If the task itself is not yet well bounded, return to:

`break-scope-into-tasks`

If the basis for the task is still unstable at PRD or validation level, return control to the earlier skill that must stabilize that layer first.

---

## Task Readiness for Handoff

Before preparing a handoff, this skill must verify that the selected task is ready enough for controlled transfer.

At minimum, the task must provide enough clarity about:

- the immediate objective
- the execution boundary
- the relevant prerequisites
- the required references
- the expected output
- the completion condition

If these elements are still materially unclear, missing, or unstable:

- stop
- do not generate a handoff
- return control to the earlier skill that must refine the task or its upstream basis

Handoff must not compensate for a weak or oversized task.

The selected task must also be operationally unambiguous.

This skill must not prepare a handoff on top of a state situation where multiple tasks are being treated as simultaneously active execution targets.

---

## Controlled Context Transfer

A handoff in this system is a controlled transfer of only the context needed for the next bounded execution step.

It must:

- include what downstream execution needs now
- remain short and targeted
- preserve scope clarity
- reduce guessing without turning into a long execution package

It must not:

- restate the full PRD
- restate the full validation artifact
- restate the full task decomposition set
- dump large architecture summaries
- include context that belongs in upstream artifacts rather than the handoff itself

The handoff must function as a precise bridge, not as a context dump.

---

## Handoff Preparation Role

Once task readiness is established, this skill must transform the selected task into a bounded handoff artifact.

The handoff should clearly capture:

- the immediate objective
- the execution boundary
- the relevant prerequisites
- the required references
- the expected output
- the completion condition

These elements must remain focused on the selected task.

The handoff must support the next execution step without drifting into:

- detailed implementation strategy
- architectural redesign
- new requirements
- re-decomposition of scope
- execution reporting

Preparing a handoff does not mean implementation has started.

Preparing a handoff only establishes the bounded execution transfer for a single selected task.

---

## Template Adherence

This skill must produce output aligned with the canonical handoff template located at:

`project/handoff/templates/HANDOFF_TEMPLATE.md`

The template defines the canonical artifact structure.

This skill must use that template as the structural anchor rather than recreating a parallel handoff format inside the skill.

The result should be:

- clear
- bounded
- concise
- execution-friendly
- suitable for low-context operation

---

## Canonical Artifact Placement

This skill must create the handoff artifact in the canonical active handoff location:

`project/handoff/active/`

It must not:

- create the handoff in `project/tasks/`
- create the handoff in the root of `project/handoff/`
- place the handoff under the task artifact domain
- treat a non-canonical handoff path as valid closure

If the artifact cannot be materialized in the canonical active handoff location, this skill must stop and report that handoff preparation remains operationally incomplete.

---

## Task Mutation Restrictions

Preparing a handoff does not start implementation.

Because of that, this skill must not mutate the selected task as if execution had already begun.

This skill must not:

- change task status to `in_progress`
- rewrite the task into an execution artifact
- add implementation-progress language to the task
- add execution notes that imply work has already started
- replace bounded task content with handoff content

At most, this skill may add a minimal canonical reference to the created handoff artifact if that reference is part of the repository convention.

That reference must remain short and must not change the task into an execution record.

---

## Materialization Order

This skill must preserve strict closure order.

A valid handoff closure must happen in this sequence:

1. create the handoff artifact in the canonical active handoff location
2. confirm the handoff artifact is materially present and represents the selected task coherently
3. update `PROJECT_STATE.md` only if the new operational moment can be represented coherently
4. emit the completion message only after the artifact and resulting state describe the same operational moment

This skill must not narrate handoff completion before the material handoff artifact exists.

This skill must not claim implementation readiness on the basis of intended or attempted artifact creation.

---

## State Closure Discipline

If this skill successfully creates a canonical handoff artifact, it may participate in closing the handoff preparation step by updating `PROJECT_STATE.md`.

This is allowed only when the resulting operational moment is clear and can be reflected coherently.

A valid state closure for this step must not:

- unlock execution while the rest of the state still materially describes an earlier stage
- point `Next Expected Skill` toward implementation while `Primary Objective`, `Next Allowed Action`, or `STATE NOTES` still point to validation or task decomposition
- keep multiple tasks represented as simultaneously active execution work when the handoff is prepared for one selected task
- treat handoff preparation as if implementation had already begun
- point `Active Handoff` to a non-canonical path or to the task artifact domain

When `PROJECT_STATE.md` is updated after handoff creation, the resulting state must coherently align at minimum:

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

For this step, a coherent post-handoff state should describe:

- handoff as prepared
- one active task as the current execution target
- remaining tasks as pending when applicable
- implementation as the next allowed governed step
- no claim that implementation has already started

Execution may be unlocked only when the resulting state is semantically coherent as a whole and the active handoff artifact exists in:

`project/handoff/active/`

`Implementation` being the next governed stage is not, by itself, the same as formal implementation readiness.

This skill must distinguish clearly between:

- implementation as the next pipeline stage
- implementation as formally unlocked execution

If `Execution Unlocked` remains `no`, the resulting state and the completion message must describe implementation only as a later governed step, not as work that may now begin.

This skill must not emit completion language such as:

- implementation may begin
- execution may now start
- the task is ready for implementation now

unless the resulting `PROJECT_STATE.md` coherently and explicitly reflects formal implementation readiness.

A favorable subset of fields is not enough.

If this skill cannot close the state coherently, it must stop and report that lifecycle closure remains incomplete.

It must not treat a partial or contradictory state patch as a valid completed transition.

---

## Boundaries

This skill must not:

- behave like workflow governance
- behave like live project state
- generate an implementation report
- generate a full implementation plan
- redesign architecture in detail
- decompose scope into tasks
- generate code or pseudo-code
- depend on concrete agent or role taxonomies
- continue into implementation inline after handoff preparation
- claim that handoff-stage closure is complete if the resulting `PROJECT_STATE.md` still reflects an earlier stage or a contradictory lifecycle situation

Its role is limited to producing a canonical handoff artifact from a bounded task.

---

## Output Contract

This skill produces one bounded handoff artifact.

The output must be:

- aligned with the canonical handoff template
- based on the selected task and its upstream references
- short enough to remain usable for low-context execution
- clear enough to reduce guessing in the next bounded execution step
- controlled enough to avoid becoming a hidden implementation plan or context dump

After the handoff artifact is produced, this skill must stop.

If lifecycle closure is valid and coherent, that closure may include a complete `PROJECT_STATE.md` update for the handoff step.

It must not continue automatically into `implementation` or any later stage.

A narrated next step is not sufficient by itself.

The material handoff artifact, the resulting `PROJECT_STATE.md`, and the completion message must all describe the same operational moment.

The completion message must mirror the final state exactly.

If the resulting state reflects handoff prepared but execution still locked, the completion message must say only that handoff preparation is complete and that implementation remains a later governed step pending formal readiness.

It must not compress "next stage" into "authorized now".

Preparing a handoff may establish readiness for a later implementation step.

It does not authorize same-turn implementation execution.

---

## Failure Handling

If the selected task is not ready enough for handoff:

- stop handoff preparation
- identify the missing or unstable basis clearly
- return control to the earlier skill that must refine the task or upstream artifact

If preparing the handoff would require hidden redesign, broad contextual recovery, or premature implementation planning:

- stop
- surface that risk clearly
- return to the earlier stage that must restore boundedness and clarity

If handoff artifact creation succeeds but coherent lifecycle closure fails:

- stop
- surface the state inconsistency clearly
- treat the governed transition as operationally incomplete
- do not authorize implementation on top of the partial closure

In that situation, the completion language must remain conservative.

It may acknowledge that the handoff artifact was created, but it must explicitly state that lifecycle closure is still incomplete and that implementation is not yet authorized.

This skill must never compensate for weak task definition by inventing execution structure.

---

## Final Rule

A correct `prepare-execution-handoff` must answer:

- is the selected task ready for handoff?
- what is the next bounded execution step?
- how should that step be framed as a short, clear, canonical handoff?

It must not answer:

- how to implement the solution
- how to govern the whole workflow
- how to decompose the project into tasks
- what has already been executed

Its job is to prepare a canonical handoff artifact from a bounded task, close the handoff step coherently when possible, and then stop.