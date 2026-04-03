---
name: derive-validation-scenarios
description: Derive a canonical validation artifact from a stabilized PRD by defining a small bounded set of observable validation scenarios or axes before task decomposition.
---

# SKILL: derive-validation-scenarios

## Purpose

Derive a canonical validation artifact from a stabilized PRD.

This skill exists to:

- verify that the active PRD is ready enough to support validation work
- transform stabilized scope into a small bounded set of validation scenarios or validation axes
- make expected behavior and observable evidence clearer before later task decomposition
- produce output aligned with the canonical validation template

This skill defines what must be validated.

It does not decompose work into tasks, design implementation, or generate later-stage artifacts.

---

## When To Use

Use this skill when:

- an active PRD exists
- the PRD is already stable enough to support validation
- the next safe governed step is to define validation from that PRD
- expected behavior needs to be translated into observable validation coverage before later tasking

---

## When Not To Use

Do not use this skill when:

- no active PRD exists
- the PRD is still unstable, ambiguous, or materially incomplete
- context is still too weak to support safe scope interpretation
- the current work already belongs to `tasks`, `handoff`, `implementation`, or `review`
- the need is detailed solution design rather than validation derivation

If context is still unstable, return to:

`detect-context-gap`

If the PRD is missing or not yet sufficiently stabilized, return to:

`create-or-update-prd`

---

## PRD Readiness for Validation

Before deriving validation, this skill must verify that the PRD is materially stable enough.

At minimum, the PRD must provide enough clarity about:

- the problem being addressed
- the relevant actors
- the intended behavior or primary workflow
- the scope boundary
- the requirements direction that needs to be validated

If these elements are still vague, contradictory, or materially incomplete:

- stop
- do not derive validation
- return control to the earlier skill that must stabilize the missing layer

Validation must not be built on top of unstable scope.

---

## Validation Recheck Discipline

Even if a prior step already treated the PRD as ready, this skill must still perform its own bounded readiness recheck.

This recheck must confirm that validation can be derived without needing to guess:

- the expected behavior
- the workflow meaning
- the scope boundary
- the observable outcome direction

If deriving validation would require silent interpretation, hidden narrowing, or invented behavioral precision:

- stop
- do not derive validation
- return control to `create-or-update-prd`

A prior PRD completion claim does not override this recheck.

---

## Validation Derivation Role

Once PRD readiness is established, this skill must transform the stabilized scope into a bounded validation artifact.

The artifact should clarify, at behavior level:

- what outcomes matter
- what success must look like
- what important failures or rule-sensitive behaviors matter
- what observable evidence would support correctness
- what remaining validation-relevant gaps, if any, should be surfaced

Validation must remain focused on observable behavior.

It must not drift into:

- task decomposition
- implementation planning
- detailed solution design
- architecture design
- speculative future scope

---

## Coverage Discipline

This system is optimized for bounded, low-context operation.

Therefore this skill should produce a small, high-value validation set.

Preferred range:

- 3 to 5 validation scenarios or validation axes

Maximum in one response:

- 5

Coverage should usually prioritize only what materially improves confidence, such as:

- the primary success path
- an important failure path or rule-sensitive condition
- a relevant boundary or edge behavior
- another materially important behavior when needed

Do not inflate validation coverage with decorative or low-value cases.

Edge behavior should be included only when it meaningfully affects correctness.

---

## Grounding Discipline Inside Validation

Validation scenarios must be grounded in the active PRD.

This skill must not silently upgrade plausible interpretation into validation truth.

It must not invent:

- exact counts
- exact timing thresholds
- exact quantitative limits
- exact UI rules
- exact operational constraints
- exact failure expectations

unless those are already materially grounded in the PRD.

If a validation idea is useful but would still require assumption:

- do not state it as a validation fact
- either omit it
- or surface it conservatively as a validation-relevant gap or open question if the template supports that section

Validation must not harden ambiguous product scope into false precision.

---

## Scenario Selection Rule

Each scenario or axis should correspond to something materially important in the PRD.

A good scenario should be:

- observable
- bounded
- directly connected to the active PRD
- useful for later tasking without becoming a hidden implementation plan

This skill must avoid scenarios that are:

- merely decorative
- implementation-shaped
- duplicates of each other
- based on assumptions not stabilized upstream

If two candidate scenarios both depend on the same unresolved ambiguity, this skill should not pretend they are valid independent coverage.

It should instead surface the ambiguity conservatively.

---

## Template Adherence

This skill must produce output aligned with the canonical validation template located at:

`project/validation/templates/VALIDATION_TEMPLATE.md`

The template defines the canonical artifact structure.

This skill must use that template as the structural anchor rather than recreating a parallel validation format inside the skill.

The result should be:

- concise
- bounded
- observable
- downstream-friendly
- clearly autonomous as a validation artifact

---

## Artifact Cleanliness Rule

The validation artifact must be structurally clean and semantically coherent.

This skill must not leave behind:

- placeholder leftovers
- duplicated filler
- stray `none` lines
- mixed partial sections that contradict each other
- malformed bullets
- broken language fragments
- accidental multilingual artifacts unless they were user-provided and intentionally preserved

Every populated section must read as intentional final artifact content.

Every omitted section must remain omitted according to the template convention, not filled with noisy filler.

---

## Canonical Artifact Placement

This skill must create or update the validation artifact in the canonical active validation location:

`project/validation/active/`

It must not:

- create or update the validation artifact in the root of `project/validation/`
- place an active validation artifact in `done/` or `archived/`
- treat a non-canonical validation path as valid step closure

If the validation artifact cannot be materialized in the canonical active validation location, this skill must stop and report that validation closure remains operationally incomplete.

---

## Upstream Artifact Mutation Restrictions

This skill may update upstream references only when that update is minimal, canonical, and does not reinterpret the upstream artifact.

This skill must not:

- rewrite the active PRD beyond minimal reference maintenance
- mutate the PRD as if downstream tasking had already started
- add implementation language to the PRD
- convert the PRD into a validation report or downstream planning artifact

At most, this skill may add or refresh a minimal canonical reference to the created validation artifact when that reference is part of the repository convention.

That reference must remain short and must not alter the role of the PRD artifact.

---

## Memory Boundary

This skill must not write to durable memory as part of normal validation derivation.

This skill must not create, update, or append content in:

- `project/memory/`
- `project/memory/decisions/`
- `project/memory/PATTERNS.md`
- `project/memory/ARCHITECTURE.md`

Validation derivation is not a memory-writing step.

Reusable insights, architectural decisions, and durable patterns must not be recorded here unless a separate explicit workflow step authorizes that action.

This skill may update only the canonical validation artifact, minimal upstream references when canonically appropriate, and `PROJECT_STATE.md` when coherent lifecycle closure is possible.

---

## Materialization Order

This skill must preserve strict closure order.

A valid validation closure must happen in this sequence:

1. create or update the validation artifact in the canonical active validation location
2. confirm the validation artifact is materially present and coherently reflects the active PRD
3. update upstream references only when that update is minimal and canonically appropriate
4. update `PROJECT_STATE.md` only if the new operational moment can be represented coherently
5. emit the completion message only after the artifact and resulting state describe the same operational moment

This skill must not narrate validation completion before the material validation artifact exists.

This skill must not claim that validation-stage closure is complete on the basis of intended or attempted artifact creation.

---

## State Closure Discipline

If this skill successfully creates a canonical validation artifact, it may participate in closing the current workflow step by updating `PROJECT_STATE.md`.

This is allowed only when the resulting operational moment is clear and can be reflected coherently.

A valid state closure for this step must not update only `Active Validation` while leaving the rest of the state materially anchored to the prior stage.

It must also not point `Active Validation` to a non-canonical path.

If `PROJECT_STATE.md` is updated after validation creation, the resulting state must coherently align at minimum:

- current phase
- current focus
- active PRD
- active validation
- execution flags
- next expected skill
- primary objective
- success condition
- next allowed action
- state notes

For this step, a coherent post-validation state should describe:

- PRD as active and stable enough for downstream work
- validation as created or revised
- task decomposition as the next allowed governed step when applicable
- no claim that tasking, handoff, or implementation has already started

If this skill cannot close the state coherently, it must stop and report that lifecycle closure remains incomplete.

It must not treat a partial state patch as a valid completed transition.

If `PROJECT_STATE.md` update fails, remains partially applied, or leaves the operational moment semantically mixed between PRD-stage and validation-stage closure, this skill must treat validation lifecycle closure as incomplete.

In that situation, it must not narrate the validation step as fully completed at the workflow level.

---

## Boundaries

This skill must not:

- use `tester`, `tests`, or `testing` as the central structural framing of the phase
- behave like workflow governance
- behave like live project state
- generate Tasks
- generate a Handoff
- create an implementation plan
- define architecture in detail
- redesign product scope
- generate code or pseudo-code
- continue into later stages inline after validation is derived
- claim that validation stage closure is complete if the resulting `PROJECT_STATE.md` still reflects an earlier stage or a contradictory operational moment

Its role is limited to deriving the validation artifact from a stabilized PRD.

---

## Output Contract

This skill produces one bounded validation artifact.

The output must be:

- aligned with the canonical validation template
- based on the active PRD
- clear enough to support later tasking safely
- focused on observable behavior and evidence
- bounded enough to avoid turning validation into a hidden task list or implementation plan

After the validation artifact is produced, this skill must stop.

If lifecycle closure is valid and coherent, that closure may include a complete `PROJECT_STATE.md` update for the validation step.

It must not continue automatically into `tasks`, `handoff`, or `implementation`.

A narrated next step is not sufficient by itself.

The material artifact, the resulting `PROJECT_STATE.md`, and the completion message must all describe the same operational moment.

If the validation artifact exists but lifecycle closure is still incomplete, the completion message must say so explicitly.

It may acknowledge successful validation artifact creation, but it must distinguish artifact materialization from full governed step closure.

---

## Failure Handling

If the PRD is not stable enough for validation:

- stop validation derivation
- identify the missing or unstable basis clearly
- return control to the earlier skill that must stabilize the context or PRD

If validation-relevant ambiguity reveals that the PRD no longer gives a safe basis for observable validation:

- stop
- surface the ambiguity clearly
- return to PRD stabilization before continuing

If validation artifact creation succeeds but coherent lifecycle closure fails:

- stop
- surface the state inconsistency clearly
- treat the governed transition as operationally incomplete
- do not authorize the next stage on top of the partial closure

In that situation, the completion language must remain conservative.

It may state that the validation artifact was created, but it must explicitly state that state closure remains incomplete and that task decomposition is not yet authorized on the basis of that partial transition.

This skill must never compensate for unstable scope by inventing missing behavior.

---

## Final Rule

A correct `derive-validation-scenarios` must answer:

- is the PRD ready enough for validation?
- what should be validated?
- what observable evidence would support correctness?

It must not answer:

- how to decompose the work into tasks
- how to implement the solution
- how to govern the whole workflow
- how to rediscover context from zero

Its job is to derive a canonical validation artifact from a stabilized PRD, close the validation step coherently when possible, and then stop.