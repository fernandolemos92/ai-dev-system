# WORKFLOW: governed-implementation

This workflow defines how the system should move from execution readiness into bounded implementation without losing governance discipline.

It is the governing macro workflow for execution unlock and bounded implementation.

---

## Purpose

Use this workflow to ensure implementation happens only when the system is actually ready and remains bounded once it starts.

This workflow exists to improve:

- execution readiness discipline
- implementation quality
- technical accuracy
- respect for approved scope
- respect for baseline authority
- respect for design readiness when user-facing surface quality materially matters
- material participation of relevant implementation specialists
- explicit implementation synthesis before review reentry

---

## Typical Governed Span

This workflow covers:

- `execution-unlock`
- `implementation`

This workflow does not replace governed review.

It defines the macro operating contract for unlock and bounded execution only.

Review and closure remain downstream governed work.

---

## Workflow Traversal Rule

This workflow is not satisfied merely because unlock happened or because implementation output exists.

When this workflow governs the current execution line, traversal through it must be material and explicit.

That means:

- execution unlock must be handled as its own bounded governed transition
- implementation must execute inside this workflow rather than as an isolated skill shortcut
- materially relevant implementation specialists must participate according to scope
- implementation work must remain bounded by the active handoff
- implementation synthesis must be explicit before the workflow can hand off to review

This workflow must not be treated as complete merely because code was written.

---

## Canonical Skills

The main bounded skills associated with this workflow are:

- `authorize-implementation`
- `implement-approved-scope`

These remain separate bounded operations.

Unlock does not implement.

Implementation does not close lifecycle by itself.

These skills execute inside this workflow.

They do not replace it.

---

## Specialist Participation Rule

Relevant specialists may include:

- `frontend`
- `backend`
- `database`
- `qa`
- `security`
- `architect`

These specialists remain bounded support inside the governing workflow.

They are not workflow controllers.

However, when a specialist is materially relevant to the active handoff boundary, that specialist must not be silently bypassed.

Inside this workflow, specialist participation must be treated as material workflow behavior, not decorative optional support.

A correct bounded implementation step should be able to state:

- which specialists were materially relevant
- which specialists were actually invoked
- which specialists were consciously deferred or found unnecessary
- why that decision was valid for the active bounded step

Silent omission is not valid implementation maturity.

---

## Mandatory Specialist Triggers

The controlling skill inside this workflow must treat the following as mandatory specialist-trigger conditions:

- invoke `frontend` when the active handoff includes meaningful UI, interaction, layout, screen, page, visual component, or user-facing surface behavior
- invoke `backend` when the active handoff includes API, service, server, domain, orchestration, or backend behavior
- invoke `database` when the active handoff includes persistence, schema, query, durable state, storage modeling, or database-bound behavior
- invoke `security` when the active handoff crosses trust, auth, permissions, sensitive data, abuse-risk, or protection-relevant boundaries
- invoke `architect` when implementation structure, boundary control, coupling, or maintainability materially affects correctness
- invoke `qa` when the bounded implementation step materially benefits from explicit test-oriented or verification-oriented specialist participation

These triggers are not decorative recommendations.

They define when specialist participation is part of correct workflow traversal.

If a trigger condition is materially present, the workflow must not treat specialist omission as neutral by default.

---

## Baseline and Documentation Discipline

This workflow remains constrained by technical baseline authority.

Specialist support does not authorize missing baselines.

If the active step depends on current or version-sensitive framework, library, SDK, API, or configuration knowledge, this workflow must also explicitly evaluate whether external documentation support such as Context7 is required for honest execution.

When documentation sensitivity is materially present, silent omission of that evaluation is not valid workflow maturity.

If the active step depends on a missing baseline authority, this workflow must not proceed as though implementation were ready.

---

## Design-Readiness Rule For User-Facing Surfaces

This workflow must explicitly evaluate design readiness when the active handoff includes materially relevant user-facing surfaces.

This rule becomes materially relevant when the active implementation step depends on one or more of the following:

- shared visual or interaction consistency across multiple surfaces
- reusable state logic for UI components
- accessibility materialization that should not be improvised during coding
- implementation-facing design contracts such as token logic, component mapping, or surface rules
- premium, trust-sensitive, or differentiated interface quality that should not be left to ad hoc frontend interpretation

In those cases, this workflow must not behave as though technical baseline readiness alone is sufficient.

A correct readiness evaluation must be able to state one of the following:

- a governed `design-foundation` exists for the current execution line and is materially sufficient
- a governed equivalent already exists and is still valid for the current execution line
- design-foundation is genuinely unnecessary for this bounded implementation step
- design readiness is still materially unresolved, so implementation readiness remains blocked

This rule does **not** mean every implementation step requires a design-foundation artifact.

It means the workflow must not silently skip design readiness when the current execution line materially depends on it.

---

## Design-Foundation Dependency Rule

When the active handoff is meaningfully frontend-facing, this workflow must not treat `experience-direction` alone as automatic proof of design readiness.

`experience-direction` may improve direction.

It does not automatically satisfy the project-level design-foundation requirement.

If the current execution line materially depends on:

- tokens
- reusable component-state logic
- consistent surface contracts
- implementation-facing theming rules
- accessibility constraints that should already be materialized structurally

then the workflow should normally expect either:

- an active design-foundation artifact in `project/design/active/`

or

- a clearly valid governed equivalent for the same execution line

If neither exists and the dependency is materially real, unlock or implementation maturity must not be overstated.

---

## Technical-Baseline Decision Step

This workflow does not treat technical baseline definition as a new macro stage.

However, when the active execution line still depends on a materially unresolved technical baseline, a bounded governed decision step may be required before safe execution preparation or implementation can proceed.

The canonical bounded step for that situation is:

- `define-technical-baseline`

This step may be required when:

- the project is sufficiently defined to support technical approach evaluation
- implementation would otherwise proceed on assumed defaults or convenience choices
- the active handoff cannot be honestly prepared without a stabilized baseline
- implementation readiness would still depend on unresolved stack/runtime/persistence direction

If baseline definition is still materially open, this workflow must not behave as though implementation readiness already exists.

---

## Required Synthesis Behavior

This workflow must produce explicit implementation synthesis before reentry into review.

That synthesis should make clear, at minimum:

- what bounded scope was executed
- what specialists participated
- what constraints governed the implementation
- whether design readiness was materially relevant for the active step
- whether design-foundation or a governed equivalent was present, unnecessary, or missing
- what remains unresolved
- why the implementation is ready, or not ready, for governed review

Raw code output alone is not sufficient workflow synthesis.

Specialist fragments alone are not sufficient workflow synthesis.

A bounded implementation step must end with an honest structured understanding of what was actually delivered.

---

## Supporting Policies

This workflow is especially constrained by:

- technical baseline authority rules from governance
- `artifact-lifecycle-policy`
- `context7-policy`
- `evidence-policy` when implementation guidance depends on external documentation
- `design-governance-policy` when design readiness materially affects safe implementation

---

## Expected Output

When this workflow is used correctly, the system should produce:

- an honest implementation authorization decision
- bounded implementation work aligned to the active handoff
- explicit acknowledgment of unresolved blockers when authorization is not possible
- implementation output that respects the approved boundary
- explicit acknowledgment of which materially relevant specialists participated
- explicit acknowledgment of whether design readiness was materially sufficient, unnecessary, or still unresolved
- explicit implementation synthesis sufficient for governed review reentry

---

## Readiness Signal

This workflow is ready to start only when:

- the active task and handoff exist
- state and filesystem are coherent
- execution is still locked
- no missing baseline authority materially blocks the work
- no materially required design-readiness dependency remains unresolved for the active execution line

Implementation inside this workflow is sufficiently mature for review reentry only when:

- the active scope has been executed honestly
- the active boundary has not been widened
- materially relevant specialists have not been silently bypassed
- required documentation support has been handled when materially needed
- materially required design readiness was present or honestly treated as non-blocking
- implementation synthesis has been produced explicitly
- the project is genuinely ready for governed review

This workflow must not claim maturity merely because unlock succeeded or code now exists.

---

## Must Not

This workflow must not:

- start from handoff alone without execution unlock
- invent technical baselines by convenience
- widen the approved handoff boundary
- close task or handoff lifecycle directly from implementation
- silently skip materially relevant specialist participation
- silently treat design readiness as already solved for user-facing work when it was not
- treat `experience-direction` alone as universal proof of implementation-facing design readiness
- treat absence of specialist invocation as neutral when the active bounded step clearly called for it
- treat raw implementation output as sufficient workflow completion without explicit synthesis
- hand off to review as though implementation maturity were obvious when workflow traversal remained partial
