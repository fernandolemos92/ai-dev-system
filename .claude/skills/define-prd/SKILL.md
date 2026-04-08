---
name: define-prd
description: Create or update a canonical PRD from context that has already reached minimum readiness, producing a clear and bounded scope artifact aligned to the PRD template.
---

# SKILL: define-prd

## Purpose

Create or update a canonical Product Requirements Document (PRD) when context is already sufficiently stabilized.

This skill exists to:

- verify that minimum contextual readiness for PRD has been reached
- verify that materially required upstream workflow-domain work has actually completed
- transform stabilized context into a clear and bounded scope artifact
- create a new PRD or update an existing one when appropriate
- produce a PRD that is compatible with the canonical PRD template
- prepare an honest post-PRD routing decision into either `design` or `validation`, depending on what the active execution line materially requires

This skill structures scope.

It does not perform broad discovery, detailed solution design, or downstream planning.

---

## When To Use

Use this skill when:

- context has already reached minimum readiness for PRD work
- all materially required upstream workflow-domain work for PRD safety has actually completed
- a bounded feature, workflow, or system scope needs to be formalized into a PRD
- an existing PRD needs to be updated because the bounded scope has materially changed
- the next safe governed step is to stabilize scope into a PRD artifact

---

## When Not To Use

Do not use this skill when:

- core context is still vague, missing, contradictory, or assumption-based
- the problem still requires discovery from zero
- the actor, desired outcome, workflow, or system boundary are still unstable
- materially required upstream workflow work is still incomplete
- the current need belongs to `validation`, `tasks`, `handoff`, `implementation`, or `review`
- the work requires detailed solution design rather than scope formalization

If minimum contextual readiness is not established, use:

`discover-missing-context`

If required upstream workflow-domain work is still incomplete, stop and return control to the correct governing workflow step.

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
- return control to `discover-missing-context`

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
- return control to `discover-missing-context`

A previous readiness claim does not override this recheck.

---

## Upstream Workflow Completion Boundary

Contextual clarity alone is not always enough to justify PRD creation.

Before creating or updating the PRD, this skill must also verify whether materially required upstream workflow-domain work has actually completed.

At minimum, this skill must explicitly evaluate whether the current execution line still depends on:

- `research`
- `experience-direction`
- `growth-strategy`

A correct PRD readiness decision must be able to state one of the following for each materially relevant domain:

- the domain was materially required and has already been traversed
- the domain was explicitly evaluated and is not materially blocking PRD now
- the domain is not relevant for this current bounded PRD step

If a domain is materially required and has not yet been traversed, this skill must stop.

It must not create the PRD anyway.

---

## New Project Upstream Rule

For `New Project`, this skill must not create or update the PRD unless the required structured research pass has materially completed.

For `New Project`, the following are not equivalent:

- context is clear
- research need was recognized
- research traversal is complete
- PRD is ready

A correct `New Project` PRD entry requires, at minimum:

- foundational context clear enough to make research bounded
- structured research materially completed
- a durable Research artifact present in `project/research/active/`
- research synthesis explicit enough to ground PRD creation

If any of those conditions is missing:

- stop
- do not create or update a PRD
- return control to the structured research workflow

This skill must not treat a state field, a narrated summary, or a prior claim of “research complete” as sufficient substitute for real research traversal and canonical artifact presence.

---

## User-Facing Product Domain Rule

For user-facing products, this skill must explicitly evaluate whether `experience-direction` and `growth-strategy` are materially required before PRD can be created safely.

Signals that `experience-direction` may be materially required include:

- visual quality as a top priority
- trust-sensitive or emotionally charged interaction
- information architecture uncertainty
- page/surface structure uncertainty
- design-system or motion-direction uncertainty
- strong benchmark dependence for user expectations

Signals that `growth-strategy` may be materially required include:

- positioning ambiguity
- messaging ambiguity
- CTA/funnel significance
- discoverability importance
- SEO/CRO/analytics significance
- acquisition-sensitive product framing

If the current execution line already determined that either of these domains is materially required before PRD safety, this skill must not proceed until that workflow-domain work has materially completed.

If the current execution line has not yet evaluated those domains honestly, this skill must stop and require that evaluation rather than silently treating omission as irrelevance.

---

## Domain Requirement Propagation Rule

If an earlier bounded step already concluded that a domain is materially required before PRD, this skill must inherit that requirement rather than reinterpreting it away.

Examples:

- if `discover-missing-context` concluded that structured research is required before PRD, this skill must not create the PRD before research completes
- if research synthesis concluded that `experience-direction` is materially required before PRD safety, this skill must not create the PRD before that workflow materially completes
- if research or contextual evaluation concluded that `growth-strategy` is materially required before safe PRD framing, this skill must not proceed until that requirement is satisfied

This skill must not overrule prior governed diagnosis through optimistic interpretation.

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

If those elements are still unstable, the correct action is to stop and return to `discover-missing-context`.

If the missing point is not local but instead reflects incomplete research / experience / strategy traversal, the correct action is to stop and return to the relevant workflow-domain step.

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
- the baseline has already been materially established through a governed technical-baseline decision for the same execution line
- the baseline is already governed by durable project decisions for the same execution line

Repository-level technical defaults are not, by themselves, sufficient reason to include baseline decisions inside the PRD.

This skill must not treat repository defaults alone as enough to:

- name a frontend framework in the PRD
- name a backend framework in the PRD
- name a persistence/database choice in the PRD
- imply a hosting/runtime model in the PRD
- describe implementation architecture as if it were product fact

If a repository-level default exists upstream, it may inform later technical-baseline evaluation, but it must not be promoted into PRD content unless the active execution line has already received a governed baseline decision or the user explicitly grounded that baseline in stabilized context.

Even when a technical baseline is already governed, the PRD must still remain conservative and product-level.

It must not over-specify implementation shape beyond what is actually necessary for truthful product definition.

Technical convenience is not product grounding.

---

## Repository Default Non-Sufficiency Rule

Repository-level defaults may help later bounded technical decisions.

They must not, by themselves, be treated as sufficient authority for introducing technical baseline content into the PRD.

The PRD is not the place where repository preferences become execution-line facts.

If the active execution line still lacks a governed technical-baseline decision, this skill must keep the PRD free of stack, framework, persistence, runtime, or implementation-architecture commitments.

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

## Post-PRD Design Evaluation Rule

PRD closure does not automatically mean that validation is the next allowed step.

After the PRD artifact is created or updated, this skill must explicitly evaluate whether the active execution line materially requires downstream `design-foundation` before validation can start safely.

This evaluation becomes materially relevant when one or more of the following is true:

- shared user-facing surface consistency matters across multiple screens, pages, or states
- reusable component-state logic will materially affect downstream correctness
- accessibility should be materialized structurally rather than improvised during later implementation
- the execution line depends on tokens, theming, component mapping, or surface rules that should become durable before validation and tasking rely on them
- the product is premium, trust-sensitive, or differentiated enough that implementation-facing design contracts materially affect downstream quality

A correct post-PRD decision must be able to state one of the following:

- `design-foundation` is materially required next
- `design-foundation` is not materially required for this execution line
- a governed equivalent already exists for this execution line, so validation may proceed without a new design-foundation pass

This skill must not silently assume that validation is next when design readiness is still materially unresolved.

---

## Experience vs Design Boundary Rule

This skill must preserve the architectural distinction between:

- `experience-direction`
- `design-foundation`

`Experience-direction` may materially improve PRD framing.

It does not automatically satisfy the project-level design-system layer.

Accordingly, this skill must not treat:

- an active `Experience` artifact
- completed experience-direction traversal
- direction-level design-system guidance

as automatic proof that downstream `design-foundation` is unnecessary.

If downstream validation, tasking, or handoff quality materially depends on a concrete implementation-facing design layer, this skill must route conservatively to `define-design-foundation` rather than jumping directly to validation.

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
- cite Design Foundation artifacts that have not been created
- create artificial downstream traceability by anticipation

If the PRD template includes related references sections, those sections must remain truthful to the real current artifact set.

This skill must not fabricate future linkage in order to make the PRD appear more complete.

---

## Materialization Order

This skill must preserve strict closure order.

A valid PRD closure must happen in this sequence:

1. verify contextual readiness and upstream workflow completion
2. create or update the PRD artifact in the canonical active PRD location
3. confirm the PRD artifact is materially present and coherently reflects the stabilized scope
4. perform the post-PRD design evaluation conservatively
5. update `PROJECT_STATE.md` only if the new operational moment can be represented coherently
6. emit the completion message only after the artifact and resulting state describe the same operational moment

This skill must not narrate PRD completion before the material PRD artifact exists.

This skill must not claim that PRD-stage closure is complete on the basis of intended or attempted artifact creation.

---

## State Closure Discipline

If this skill successfully creates or updates a canonical PRD artifact, it may participate in closing the PRD step by updating `PROJECT_STATE.md`.

This is allowed only when the resulting operational moment is clear and can be reflected coherently.

A valid state closure for this step must not update only the PRD reference while leaving the rest of the state materially anchored to contextual discovery, research, or some contradictory prior moment.

It must also not point `Active PRD` to a non-canonical path.

If `PROJECT_STATE.md` is updated after PRD creation or revision, the resulting state must coherently align at minimum:

- overall status
- current phase
- current focus
- last updated
- active research
- active PRD
- active validation
- active experience
- active strategy
- active design foundation
- active task
- pending tasks
- active handoff
- execution flags
- current blockers
- next expected skill
- primary objective
- success condition
- next allowed action
- state notes

If upstream optional-domain artifacts were active before PRD closure, this skill must update those fields truthfully for the new post-PRD moment rather than leaving stale `Research`, `Experience`, or `Strategy` activity in place by omission.

For this step, a coherent post-PRD state should describe:

- PRD as created or revised
- no active downstream artifact unless one already validly exists
- either `define-design-foundation` or `define-success-scenarios` as the next allowed governed step, depending on the post-PRD design evaluation
- no claim that design, validation, tasking, handoff, or implementation has already started

Closing the PRD step is not, by itself, the same as entering design or validation.

This skill must distinguish clearly between:

- PRD closure as the current completed governed step
- design or validation as the next allowed governed step
- design or validation as an already active downstream stage

When updating `Next Expected Skill`, this skill must use the real canonical skill name for the next governed step.

It must not invent synonymous labels, shorthand names, or approximate phase descriptions in place of the actual skill identifier.

Immediately after PRD creation or revision, `PROJECT_STATE.md` must still describe the live operational moment as PRD-stage closure with downstream design-or-validation pending as the next governed action, unless a separate valid downstream artifact already exists and the operational state is being reconstructed from real artifacts rather than advanced speculatively.

This skill must not advance `Current Phase` to `design` merely because design is next.

It must not advance `Current Phase` to `validation` merely because validation is next.

If no active design artifact and no active validation artifact have been materially created in their canonical locations, the resulting state must not represent those downstream phases as already active work.

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
- design or validation pending as the next allowed governed step, according to the post-PRD design evaluation

It must not remain centered on the just-finished creation act as if that were still the present operational objective.

Therefore, after coherent PRD closure:

- `Primary Objective` should describe the current live project objective with PRD stabilized and the correct next bounded step pending
- `Success Condition` should describe what successful advancement now depends on, rather than merely restating that the PRD was created
- `Current Focus` should reflect the current active bounded focus, not a retrospective narration of the just-completed write event
- `State Notes` should reflect the live situation conservatively, without implying downstream work has already begun and without preserving stale notes from a prior session moment

A state that still reads primarily like "create the PRD" after PRD closure is semantically stale even if the artifact exists.

This skill must prefer a truthful live snapshot over a retrospective completion summary.

---

## Completion and Stop Discipline

After PRD creation or revision, this skill must stop after:

- producing the bounded PRD artifact
- applying a coherent state closure when that closure is valid
- reporting PRD closure and the next allowed governed action

It must not:

- invoke `define-design-foundation` inline
- invoke `define-success-scenarios` inline
- continue into design behavior
- continue into validation behavior
- continue into tasking, handoff, implementation, or review
- treat the next expected skill as authorization for same-turn continuation

A narrated next step is not execution of that next step.

---

## Boundaries

This skill must not:

- perform broad contextual discovery
- replace `discover-missing-context`
- behave like workflow governance
- behave like live project state
- generate a Design Foundation artifact
- generate a Validation artifact
- decompose scope into Tasks
- generate a Handoff
- define the solution architecture in detail
- create an implementation plan
- generate code or pseudo-code
- continue into later phases inline after PRD completion
- claim that PRD-stage closure is complete if the resulting `PROJECT_STATE.md` still reflects an earlier stage or a contradictory operational moment

Its role is limited to creating or updating the PRD artifact for already-stabilized scope and already-satisfied upstream workflow requirements.

---

## Output Contract

This skill produces one bounded PRD artifact.

The output must be:

- aligned with the canonical PRD template
- clear enough for downstream design, validation, and tasking
- bounded enough to avoid uncontrolled scope drift
- written at product and behavior level rather than implementation level

After the PRD is created or updated, this skill must stop.

If lifecycle closure is valid and coherent, that closure may include a complete `PROJECT_STATE.md` update for the PRD step.

It must not continue automatically into `design`, `validation`, `tasks`, or `handoff`.

A narrated next step is not sufficient by itself.

The material PRD artifact, the resulting `PROJECT_STATE.md`, and the completion message must all describe the same operational moment.

The completion message must mirror PRD closure exactly.

It may state that `define-design-foundation` or `define-success-scenarios` is the next allowed governed step, but it must not describe either as already started unless the resulting state and artifact set coherently show that downstream stage as materially active.

---

## Failure Handling

If minimum contextual readiness is not met:

- stop PRD creation or update
- identify the missing or unstable context clearly
- return control to `discover-missing-context`

If required upstream workflow-domain work has not materially completed:

- stop PRD creation or update
- identify the blocking domain clearly
- return control to the relevant governing workflow step

If an existing PRD is present but the scope is too unstable to update safely:

- stop
- surface the instability clearly
- return to contextual clarification before attempting PRD revision

If PRD artifact creation succeeds but coherent lifecycle closure fails:

- stop
- surface the state inconsistency clearly
- treat the governed transition as operationally incomplete
- do not authorize the next stage on top of the partial closure

If the PRD artifact exists but the resulting state prematurely advances to design or validation or otherwise mixes current closure with a downstream stage that has not materially started, this skill must treat lifecycle closure as incomplete.

In that situation, the completion language must remain conservative and must not narrate the project as already being in design or validation.

If the PRD would require introducing technical baseline decisions that are not materially authorized upstream:

- stop
- surface the missing technical authority clearly
- keep the PRD conservative rather than inventing implementation baseline

If the PRD would require introducing unconfirmed operational precision that was not materially grounded in stabilized context:

- keep the PRD conservative
- convert the point into an explicit open question or assumption when truthful
- otherwise omit it rather than upgrading it into a confirmed requirement

This skill must never justify PRD creation through assumption, familiarity, momentum, or incomplete upstream workflow traversal.

---

## Final Rule

A correct `define-prd` must answer:

- is the context ready for PRD?
- has all materially required upstream workflow-domain work actually completed?
- should the system create or update the PRD?
- how should stabilized context be recorded as a bounded scope artifact?
- does the current execution line require downstream `design-foundation` before validation can begin safely?

It must not answer:

- how to discover the problem from zero
- how to design the solution in detail
- how to instantiate the design foundation
- how to decompose work into tasks
- how to implement the system

Its job is to turn sufficiently stabilized context into a canonical PRD, perform an honest post-PRD design evaluation, close the PRD step coherently when possible, and then stop.
