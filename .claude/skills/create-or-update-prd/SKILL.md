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

## Readiness Recheck Discipline

Even if the prior contextual skill reported readiness, this skill must still perform its own bounded readiness recheck before creating or updating the PRD.

This recheck must confirm that the PRD can be grounded without needing to guess:

- the real problem
- the main actor
- the desired outcome
- the primary workflow
- the system boundary
- the relevant constraint or priority

If the PRD would still require pattern completion, guesswork, hidden assumptions, or silent narrowing of ambiguity:

- stop
- do not create or update the PRD
- return control to `detect-context-gap`

A previous readiness claim does not override this recheck.

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

This skill must not quietly mix product scope with lightweight solution proposals.

It must not introduce implementation-shaped statements such as:

- suggested backend style
- suggested integration mechanism
- suggested delivery channel for confirmations
- suggested technical fallback for first version behavior

unless those statements are already explicitly grounded in stabilized context and belong in the PRD at product level rather than as technical design.

---

## Technical Baseline Boundary Inside the PRD

This skill must not use the PRD to silently settle technical baseline decisions that have not been explicitly authorized upstream.

Examples include:

- frontend framework choice
- backend framework choice
- storage or persistence choice
- architectural style
- folder structure
- state management baseline
- "no backend for MVP" style implementation shortcuts

Even when a plausible technical path seems simple or common, this skill must not convert it into PRD fact unless one of the following is true:

- the baseline was explicitly stated by the user in stabilized context
- the baseline is explicitly authorized by project-level defaults
- the baseline is already governed by durable project decisions for the same execution line

If an official technical default exists upstream, this skill may inherit it only when that inheritance is necessary and truthful to the PRD's product-level purpose.

Even in that case, the PRD must not over-specify implementation shape beyond what is actually needed at product level.

Technical convenience is not product grounding.

---

## Grounding Discipline Inside the PRD

The PRD must distinguish clearly between:

- grounded context already established
- bounded assumptions that are explicitly marked as assumptions
- unresolved items that remain open and should not be silently converted into facts

This skill must not present inferred structure as if it had already been confirmed.

Examples of content that must not be silently invented include:

- exact workflow steps not actually clarified
- exact channel or platform boundary not actually clarified
- exact operational exclusions framed as closed non-scope without basis
- quantitative limits, counts, timings, or thresholds not actually grounded
- downstream artifact references that do not yet exist
- technical defaults framed as product facts when they were never established in context

When something is plausible but not actually clarified, it must either:

- remain outside the PRD until clarified, or
- be marked explicitly in the appropriate assumptions / risks / open questions area if the template supports it

Plausibility is not confirmation.

This skill must not convert plausible product heuristics into closed requirements merely because they sound reasonable.

Examples include:

- target load times
- exact viewport breakpoints
- exact touch-count goals
- exact commission percentages
- exact operational thresholds

If a number, threshold, timing, count, or limit was not materially grounded in stabilized context, it must not appear in the PRD as a confirmed requirement.

---

## Product-Level Precision Discipline

This skill must avoid filling the PRD with convenient but unconfirmed operational detail.

It must not silently convert likely behavior into confirmed requirement merely because that behavior is common in similar products.

Examples include:

- notification behavior not actually clarified
- confirmation behavior not actually clarified
- default onboarding or starter content not actually clarified
- browser support matrices not actually clarified
- performance targets not actually clarified
- storage or persistence behavior described as a settled product fact without grounding
- default account model or identity model not actually clarified

If such detail is useful but not materially confirmed, it must be handled conservatively by one of the following:

- omit it from the PRD
- keep it explicitly open
- place it in assumptions / risks / open questions only when the template supports that treatment truthfully

The PRD must prefer truthful incompleteness over polished invention.

---

## Scope and Non-Scope Discipline

This skill must keep scope bounded without inventing exclusions.

`In Scope` should contain only behavior and product scope that are grounded in the stabilized context.

`Out of Scope` should contain only exclusions that are materially supported by one of the following:

- the user explicitly excluded it
- the stabilized context clearly bounded it out
- the repository’s governed scope already established that exclusion for the same PRD continuity line

This skill must not use `Out of Scope` as a place to silently narrow ambiguous requirements.

If an exclusion would still require interpretation rather than grounding, it must not be presented as a closed product decision.

In such cases, it should remain open or be treated conservatively.

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

## Canonical Loading and Write Discipline

This skill must prefer direct canonical paths when they are already known.

It must not use broad repository scanning as a substitute for canonical artifact and template locations when the correct path is already defined by governance, state, or repository structure.

For this skill, the expected canonical structural anchors are:

- `project/prd/templates/PRD_TEMPLATE.md`
- `project/prd/active/`
- `project/PROJECT_STATE.md`

If these paths are known and available, this skill must use them directly rather than performing broad exploratory globbing.

---

## Downstream Artifact Reference Rule

This skill must not reference downstream artifacts as if they already exist when they do not.

It must not:

- cite Tasks that have not been created
- cite Validation artifacts that have not been created
- cite Handoffs that have not been created
- create artificial downstream traceability by anticipation

If the PRD template includes related references sections, those sections must remain truthful to the real current artifact set.

This skill must not fabricate future linkage in order to make the PRD appear more complete.

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
- last updated
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

When updating `Next Expected Skill`, this skill must use the real canonical skill name for the next governed step.

It must not invent synonymous labels, shorthand names, or approximate phase descriptions in place of the actual skill identifier.

Immediately after PRD creation or revision, `PROJECT_STATE.md` must still describe the live operational moment as PRD-stage closure with validation pending as the next governed action, unless a separate valid downstream validation artifact already exists and the operational state is being reconstructed from real artifacts rather than advanced speculatively.

This skill must not advance `Current Phase` to `validation` merely because validation is the next allowed step.

If no active validation artifact has been materially created in its canonical location, the resulting state must not represent validation as already active work.

A narrated future step, by itself, is not sufficient to move the live phase forward.

If this skill cannot close the state coherently, it must stop and report that lifecycle closure remains incomplete.

It must not treat a partial state patch as a valid completed transition.

A coherent state closure for this step should be applied as one full lifecycle update for the new operational moment, not as a sequence of narrow patches that temporarily leave contradictory values in place.

If the skill cannot represent the new lifecycle moment cleanly in one coherent closure pass, it must stop and report incomplete closure rather than applying partial edits and narrating success.

---

## Post-PRD Live-State Wording Rule

Immediately after successful PRD closure, the live state must describe the current operational situation as:

- a project with an active PRD
- no active downstream workflow artifact yet
- validation pending as the next allowed governed step

It must not remain centered on the just-finished creation act as if that were still the present operational objective.

Therefore, after coherent PRD closure:

- `Primary Objective` should describe the current live project objective with PRD stabilized and validation pending
- `Success Condition` should describe what successful advancement now depends on, rather than merely restating that the PRD was created
- `Current Focus` should reflect the current active bounded focus, not a retrospective narration of the just-completed write event
- `State Notes` should reflect the live situation conservatively, without implying downstream work has already begun

A state that still reads primarily like "create the PRD" after PRD closure is semantically stale even if the artifact exists.

This skill must prefer a truthful live snapshot over a retrospective completion summary.

---

## Completion and Stop Discipline

After PRD creation or revision, this skill must stop after:

- producing the bounded PRD artifact
- applying a coherent state closure when that closure is valid
- reporting PRD closure and the next allowed governed action

It must not:

- invoke `derive-validation-scenarios` inline
- continue into validation behavior
- continue into tasking, handoff, implementation, or review
- treat the next expected skill as authorization for same-turn continuation

A narrated next step is not execution of that next step.

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

If the PRD would require introducing technical baseline decisions that are not materially authorized upstream:

- stop
- surface the missing technical authority clearly
- keep the PRD conservative rather than inventing implementation baseline

If the PRD would require introducing unconfirmed operational precision that was not materially grounded in stabilized context:

- keep the PRD conservative
- convert the point into an explicit open question or assumption when truthful
- otherwise omit it rather than upgrading it into a confirmed requirement

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