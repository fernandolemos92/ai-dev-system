---
name: create-or-update-prd
description: Create or update a canonical PRD from context that has already reached minimum readiness, producing a clear and bounded scope artifact aligned to the PRD template.
---

# SKILL: create-or-update-prd

## Purpose

Create or update a canonical Product Requirements Document (PRD) when context is already sufficiently stabilized.

This skill exists to:

- verify that minimum contextual readiness for PRD has been reached
- transform stabilized context into a clear and bounded scope artifact
- create a new PRD or update an existing one when appropriate
- produce a PRD that is compatible with the canonical PRD template

This skill structures scope.

It does not perform broad discovery, detailed solution design, or downstream planning.

---

## When To Use

Use this skill when:

- context has already reached minimum readiness for PRD work
- a bounded feature, workflow, or system scope needs to be formalized into a PRD
- an existing PRD needs to be updated because the bounded scope has materially changed
- the next safe governed step is to stabilize scope into a PRD artifact

---

## When Not To Use

Do not use this skill when:

- core context is still vague, missing, contradictory, or assumption-based
- the problem still requires discovery from zero
- the actor, desired outcome, workflow, or system boundary are still unstable
- the current need belongs to `validation`, `tasks`, `handoff`, `implementation`, or `review`
- the work requires detailed solution design rather than scope formalization

If minimum contextual readiness is not established, use:

`detect-context-gap`

---

## PRD Readiness Boundary

Before creating or updating a PRD, this skill must verify that the context is sufficiently stable at a high level.

Minimum contextual readiness for PRD requires all of the following to be materially clear:

- the core problem
- the main actor
- the desired outcome
- the primary workflow
- the system boundary
- at least one relevant constraint or priority

If any of these elements is still missing, vague, contradictory, or based on assumptions:

- stop
- do not create or update a PRD
- return control to `detect-context-gap`

High-level requests alone are not sufficient.

Examples such as:

- "build a dashboard"
- "add authentication"
- "create admin panel"
- "make a login form"

do not justify PRD creation unless the required context has already been stabilized.

This skill must not fill contextual gaps silently.

---

## Allowed Clarifications

This skill may ask for small clarifications only when the missing point is local, bounded, and does not reopen discovery.

Examples of acceptable clarifications include:

- confirming a title or naming choice
- selecting between already-described alternatives
- confirming a small bounded parameter
- resolving a narrow ambiguity inside already-stabilized scope

This skill must not use clarification to rediscover:

- the real problem
- the main actor
- the primary workflow
- the system boundary
- the core product objective

If those elements are still unstable, the correct action is to stop and return to `detect-context-gap`.

---

## Create vs Update Decision

This skill must determine whether the correct action is to create a new PRD or update an existing one.

Create a new PRD when:

- no active PRD exists for the bounded scope
- the current stabilized context represents a new bounded scope that is not already captured by an active PRD

Update an existing PRD when:

- an active PRD already exists for the same bounded scope
- the scope remains fundamentally the same, but needs revision, clarification, or controlled expansion
- updating preserves continuity better than creating a duplicate artifact

This skill must avoid unnecessary PRD duplication.

---

## PRD Transformation Role

Once readiness is established, this skill must transform stabilized context into a bounded PRD artifact.

The PRD should clearly capture, at product level:

- the problem being addressed
- the relevant actors
- the intended outcome
- the primary workflow
- the scope and non-scope boundary
- the relevant requirements
- the acceptance direction for later downstream work

The PRD must stay at the level of product scope and expected behavior.

It must not drift into:

- detailed architecture
- implementation design
- task decomposition
- validation artifact generation
- handoff generation

---

## Template Adherence

This skill must produce output that is aligned with the canonical PRD template located at:

`project/prd/templates/PRD_TEMPLATE.md`

The template defines the canonical artifact structure.

This skill must use that template as the structural anchor for PRD creation or update rather than recreating a parallel PRD structure inside the skill.

The result should be:

- clear
- bounded
- template-compatible
- easy to continue downstream
- suitable for low-context operation

---

## Canonical Artifact Placement

This skill must create or update the PRD artifact in the canonical active PRD location:

`project/prd/active/`

It must not:

- create or update the PRD in the root of `project/prd/`
- place an active PRD in `done/` or `archived/`
- treat a non-canonical PRD path as valid step closure

If the PRD artifact cannot be materialized in the canonical active PRD location, this skill must stop and report that PRD closure remains operationally incomplete.

---

## Materialization Order

This skill must preserve strict closure order.

A valid PRD closure must happen in this sequence:

1. create or update the PRD artifact in the canonical active PRD location
2. confirm the PRD artifact is materially present and coherently reflects the stabilized scope
3. update `PROJECT_STATE.md` only if the new operational moment can be represented coherently
4. emit the completion message only after the artifact and resulting state describe the same operational moment

This skill must not narrate PRD completion before the material PRD artifact exists.

This skill must not claim that PRD-stage closure is complete on the basis of intended or attempted artifact creation.

---

## State Closure Discipline

If this skill successfully creates or updates a canonical PRD artifact, it may participate in closing the PRD step by updating `PROJECT_STATE.md`.

This is allowed only when the resulting operational moment is clear and can be reflected coherently.

A valid state closure for this step must not update only the PRD reference while leaving the rest of the state materially anchored to contextual discovery or some contradictory prior moment.

It must also not point `Active PRD` to a non-canonical path.

If `PROJECT_STATE.md` is updated after PRD creation or revision, the resulting state must coherently align at minimum:

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

For this step, a coherent post-PRD state should describe:

- PRD as created or revised
- no active downstream artifact unless one already validly exists
- validation as the next allowed governed step when applicable
- no claim that validation, tasking, handoff, or implementation has already started

Closing the PRD step is not, by itself, the same as entering validation.

This skill must distinguish clearly between:

- PRD closure as the current completed governed step
- validation as the next allowed governed step
- validation as an already active downstream stage

Immediately after PRD creation or revision, `PROJECT_STATE.md` must still describe the live operational moment as PRD-stage closure with validation pending as the next governed action, unless a separate valid downstream validation artifact already exists and the operational state is being reconstructed from real artifacts rather than advanced speculatively.

This skill must not advance `Current Phase` to `validation` merely because validation is the next allowed step.

If no active validation artifact has been materially created in its canonical location, the resulting state must not represent validation as already active work.

A narrated future step, by itself, is not sufficient to move the live phase forward.

If this skill cannot close the state coherently, it must stop and report that lifecycle closure remains incomplete.

It must not treat a partial state patch as a valid completed transition.

---

## Boundaries

This skill must not:

- perform broad contextual discovery
- replace `detect-context-gap`
- behave like workflow governance
- behave like live project state
- generate a Validation artifact
- decompose scope into Tasks
- generate a Handoff
- define the solution architecture in detail
- create an implementation plan
- generate code or pseudo-code
- continue into later phases inline after PRD completion
- claim that PRD-stage closure is complete if the resulting `PROJECT_STATE.md` still reflects an earlier stage or a contradictory operational moment

Its role is limited to creating or updating the PRD artifact for already-stabilized scope.

---

## Output Contract

This skill produces one bounded PRD artifact.

The output must be:

- aligned with the canonical PRD template
- clear enough for downstream validation and tasking
- bounded enough to avoid uncontrolled scope drift
- written at product and behavior level rather than implementation level

After the PRD is created or updated, this skill must stop.

If lifecycle closure is valid and coherent, that closure may include a complete `PROJECT_STATE.md` update for the PRD step.

It must not continue automatically into `validation`, `tasks`, or `handoff`.

A narrated next step is not sufficient by itself.

The material PRD artifact, the resulting `PROJECT_STATE.md`, and the completion message must all describe the same operational moment.

The completion message must mirror PRD closure exactly.

It may state that validation is the next allowed governed step, but it must not describe validation as already started unless the resulting state and artifact set coherently show that downstream stage as materially active.

---

## Failure Handling

If minimum contextual readiness is not met:

- stop PRD creation or update
- identify the missing or unstable context clearly
- return control to `detect-context-gap`

If an existing PRD is present but the scope is too unstable to update safely:

- stop
- surface the instability clearly
- return to contextual clarification before attempting PRD revision

If PRD artifact creation succeeds but coherent lifecycle closure fails:

- stop
- surface the state inconsistency clearly
- treat the governed transition as operationally incomplete
- do not authorize the next stage on top of the partial closure

If the PRD artifact exists but the resulting state prematurely advances to validation or otherwise mixes current closure with a downstream stage that has not materially started, this skill must treat lifecycle closure as incomplete.

In that situation, the completion language must remain conservative and must not narrate the project as already being in validation.

This skill must never justify PRD creation through assumption, familiarity, or momentum.

---

## Final Rule

A correct `create-or-update-prd` must answer:

- is the context ready for PRD?
- should the system create or update the PRD?
- how should stabilized context be recorded as a bounded scope artifact?

It must not answer:

- how to discover the problem from zero
- how to design the solution in detail
- how to decompose work into tasks
- how to implement the system

Its job is to turn sufficiently stabilized context into a canonical PRD, close the PRD step coherently when possible, and then stop.