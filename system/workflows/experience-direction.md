# WORKFLOW: experience-direction

This workflow defines how the system should perform governed experience-direction work when UI, information architecture, motion, trust-sensitive interaction, or overall surface quality materially matters.

It is a macro workflow contract.

It does not replace governance, live state, or bounded skill execution.

---

## Purpose

Use this workflow to add structured product-surface direction before PRD stabilization or downstream execution preparation when experience quality materially affects delivery quality.

This workflow exists to improve:

- UI direction
- interaction coherence
- information architecture
- motion restraint and usefulness
- visual hierarchy and surface quality
- trust-sensitive surface behavior
- clearer upstream direction for later PRD, design-foundation, task, handoff, and frontend work

---

## Workflow Role

This workflow governs experience-direction as a real traversal step, not as decorative design support.

When it is materially required, it must be explicitly entered and materially completed rather than merely referenced.

That means:

- the need for experience-direction must be explicit
- the relevant specialists must be explicitly evaluated and used when materially needed
- any durable direction must be synthesized clearly
- an `Experience` artifact must be created when durable direction is required
- downstream progression must not pretend the experience question was resolved when it was only acknowledged

Recognition of surface importance is not the same as completion of this workflow.

---

## When This Workflow Is Materially Needed

Use this workflow when one or more of the following is true:

- the delivery includes a meaningful user-facing surface
- usability, page structure, or information hierarchy materially affects success
- the implementation risks becoming generic, visually weak, or interactionally inconsistent without direction
- motion, branding, or system-level surface choices could materially affect experience quality
- the user explicitly wants stronger surface-level quality, polish, emotional resonance, or premium feel
- frontend implementation would otherwise proceed with too little experiential guidance
- trust, confidence, or emotional tone materially affects the product surface
- research or contextual discovery concluded that experience-direction is materially required before PRD safety or later progression

Do not use this workflow decoratively.

Do not open it for purely backend or non-surface work unless a real user-facing experience dependency exists.

If surface-level direction is already sufficiently governed by existing artifacts or repository continuity, this workflow may remain inactive — but that conclusion must be explicit.

For user-facing products, this workflow must always be explicitly evaluated.

When it is materially relevant, silent bypass is not valid.

---

## Relationship To Product-Definition Workflow

This workflow often operates as a materially required domain traversal inside the broader `product-definition` path.

Accordingly:

- `discover-missing-context` may identify that experience-direction is materially required
- `structured-research` may strengthen or confirm that need
- `product-definition` must not silently bypass this workflow when it is materially blocking safe PRD or later downstream quality
- `define-prd` may consume the resulting direction
- `define-design-foundation` may later instantiate the resulting direction into a project-level design system
- `plan-tasks` and `prepare-handoff` may consume the resulting direction later

This workflow does not replace product-definition.

It provides governed experience maturity inside it.

For user-facing products, if the current execution line already determined that experience-direction is materially required, downstream PRD or execution-preparation work must not proceed as though the requirement had already been satisfied.

---

## Typical Governed Span

This workflow usually operates after context and research are sufficiently stable and before PRD, or before downstream work that still depends on unresolved surface direction.

It often relates to:

- late `research`
- `experience`
- early `prd`

In some user-facing cases it may remain relevant after PRD if additional direction is still materially required for safe design-foundation work, but this workflow is not the design-foundation layer itself.

This workflow may influence PRD framing, design-foundation quality, task writing, and handoff quality, but it does not replace those bounded skills.

---

## Architectural Boundary: Experience Direction vs Design Foundation

This workflow must preserve the distinction between:

- `experience-direction`
- `design-foundation`

The distinction is:

- `experience-direction` defines surface intent, quality bar, feel, trust profile, hierarchy, and interaction direction
- `design-foundation` instantiates the project-level design system that makes those decisions durable and implementation-capable

Accordingly:

- this workflow may clarify what the product should feel like
- this workflow may clarify what must remain consistent downstream
- this workflow may clarify what kind of system logic will later be needed
- this workflow must not pretend that those clarifications already constitute the concrete design-foundation artifact

A correct traversal may therefore conclude:

- experience-direction is materially complete
- a durable `Experience` artifact exists
- downstream `design-foundation` is still required

That is valid.

This workflow must not collapse those two layers into one vague “design already happened” claim.

---

## Mandatory Specialist Evaluation

Relevant specialists may include:

- `ui`
- `branding`
- `design-system`
- `information-architecture`
- `motion`
- `page-strategy`

These specialists remain bounded support inside the workflow.

They do not create a parallel design workflow.

However, when this workflow is materially required, the relevant experience specialists must not be silently bypassed.

For web/desktop user-facing products, `design-system` must always be explicitly evaluated.

For web/desktop user-facing products, `design-system` should normally be treated as materially relevant unless a sufficiently stable governed equivalent already exists for the same execution line.

In those cases, the workflow must be able to state explicitly one of the following:

- `design-system` was materially required and used for direction-level synthesis
- `design-system` was explicitly evaluated and a governed equivalent already exists
- `design-system` was evaluated and found genuinely non-blocking for this bounded pass

Silent omission is not valid.

A correct traversal should be able to state, honestly:

- which experience specialists were materially relevant
- which were actually used
- which aspects of the surface were clarified
- what downstream consequence now follows

If a materially relevant specialist is unavailable for safe traversal, this workflow must stop honestly with that limitation made explicit.

It must not pretend completion by approximation alone.

---

## Specialist Invocation Discipline

When specialists are materially required inside this workflow, they must be resolved through the canonical registry/runtime bridge.

That means:

- the canonical project agent must be resolved first
- the registry-approved runtime type and runtime call target must be honored
- canonical agent names must not be sent directly as runtime call targets when the registry maps execution to another target
- specialist execution must be reported honestly as strong, partial, failed, or unavailable

This workflow must not narrate specialist participation as materially completed when routing or execution failed.

---

## Design-System Direction Rule for Digital Product Surfaces

For web/desktop user-facing products, experience-direction should normally include a design-system direction pass as part of first-pass synthesis.

This does not mean the workflow must always produce a heavy standalone design-system artifact.

It does mean the workflow should normally clarify at least some direction-level shared-system expectations covering some combination of:

- typography hierarchy
- spacing or density profile
- component consistency expectations
- state consistency expectations
- surface treatment logic
- trust-sensitive consistency rules

If a digital product surface is premium, differentiated, or expected to feel professionally coherent across multiple sections, pages, or states, omission of `design-system` direction should be treated as exceptional rather than normal.

When omitted, that omission must be explained explicitly and conservatively.

This remains direction-level output.

The project-level design system artifact still belongs in `define-design-foundation` when that layer is materially required.

---

## Required Synthesis Behavior

This workflow must produce explicit experience synthesis.

That synthesis should make clear, at minimum:

- what part of the surface needed direction
- what the intended feel, quality level, or trust profile now is
- what structure, hierarchy, or consistency rules were clarified
- whether motion is necessary, unnecessary, or still open
- what must remain consistent downstream
- what PRD, design-foundation, task, handoff, or implementation consequences now follow at the level of direction
- whether a durable `Experience` artifact was required and created

Specialist fragments alone are not enough.

Loose aesthetic commentary alone is not enough.

Experience-direction is not mature until the resulting direction is synthesized clearly enough to affect downstream work intentionally.

This workflow must remain direction-level rather than implementation-level.

It must not silently settle technical baseline choices, implementation architecture, framework-specific UI decisions, or invented operational precision that was not materially grounded.

It must not convert aesthetic preference into fake product fact through unjustified numbers, thresholds, timings, counts, or pseudo-exact interaction rules when those were not actually established upstream.

---

## Expected Output

When this workflow is used, the system should aim to produce some or all of the following:

- an `Experience` artifact when durable direction is warranted
- clearer surface-level guidance for PRD stabilization when experience materially shapes product framing
- explicit notes on what the delivery should feel like, not just what it should functionally do
- clearer information hierarchy or page/screen structure
- explicit direction on consistency, restraint, and quality level
- restrained motion guidance when motion truly adds value
- downstream implications for `define-design-foundation`, task, or handoff wording when applicable

If this workflow is materially required and produces no downstream consequence, it should say so explicitly rather than pretending traversal value by ceremony.

---

## When An Experience Artifact Is Warranted

A durable `Experience` artifact is usually warranted when one or more of the following is true:

- multiple later steps will depend on the same surface-direction decisions
- the delivery includes enough UI or interaction complexity that conversational guidance would be fragile
- information architecture, motion, or design-system direction needs to stay durable across PRD or design-foundation work
- the project aims for a premium or differentiated surface quality that should not be left implicit
- task or handoff quality would materially benefit from stable experience guidance
- research or product-definition output already established that surface direction is a key differentiator

An `Experience` artifact is not required for every project.

If the needed direction is light, local, and safely bounded inside the current step, the system may proceed without creating one.

But when durable downstream dependence exists, the artifact should not be skipped.

---

## Canonical Skills and Gates

This workflow requires an explicit bounded traversal step for experience-direction itself.

The canonical traversal skill for first-pass governed experience-direction synthesis is:

- `define-experience-direction`

That traversal step must synthesize the materially relevant experience specialists and produce experience-level direction for the active execution line.

Accordingly:

- `define-experience-direction` is the canonical first-pass traversal skill for this workflow
- `review-frontend-experience` is not the default entry or traversal skill for this workflow
- `review-frontend-experience` may be used later as a review-oriented helper when an existing frontend design proposal, UI proposal, or frontend implementation plan actually exists
- `check-motion-need` is an auxiliary gate that may support this workflow when motion relevance is materially in question
- the governing workflow must not treat review-oriented evaluation as a substitute for initial experience-direction synthesis

This workflow may also influence:

- `define-prd`
- `define-design-foundation`
- `plan-tasks`
- `prepare-handoff`
- implementation guidance for frontend-facing work

But it must not replace product definition, design-foundation, task planning, or implementation governance.

These bounded governed pieces do not replace this workflow.

They operate inside or around it.

---

## Experience Traversal Entry Rule

When this workflow becomes materially required, the system must enter it through the canonical bounded synthesis step:

- `define-experience-direction`

A correct traversal entry must:

- identify which experience specialists are materially relevant
- resolve those specialists through the registry/runtime bridge
- synthesize their contribution into bounded experience direction
- determine whether a durable `Experience` artifact is required
- determine whether downstream `design-foundation` work will also be materially required
- stop after the bounded experience-direction moment

This workflow must not use a frontend-review helper as the default mechanism for first-pass experience traversal.

Review may happen later.

Direction must happen first.

---

## Motion Restraint Rule

Motion must remain strictly value-adding.

This workflow must not impose motion by default.

A correct traversal must be able to state one of the following:

- motion is materially useful and should be used in a restrained way
- motion is unnecessary and should remain absent
- motion is still genuinely undecided and should remain open conservatively

If motion does not clearly improve meaning, guidance, feedback, hierarchy, or emotional tone without harming clarity, this workflow should prefer no motion.

---

## Downstream Impact

When used correctly, this workflow should materially improve downstream work.

Typical impacts include:

- making PRD stabilization more experience-aware
- making later design-foundation work better grounded
- making task decomposition more experience-aware
- making handoffs clearer for frontend implementation
- reducing generic or default-looking delivery
- clarifying what experience qualities are intentional versus optional
- preventing motion or branding decisions from being improvised too late
- making review of frontend-facing delivery more grounded

If the workflow produces no meaningful downstream consequence, it should say so explicitly rather than pretending value by ceremony.

---

## Readiness Signal

This workflow is sufficiently closed for the current pass when downstream work can proceed with materially clearer experience guidance than it had before.

At minimum, the system should be able to state:

- what aspect of the surface was clarified
- what should remain consistent during downstream work
- whether motion is necessary, unnecessary, or still undecided
- whether a durable `Experience` artifact exists in `project/experience/active/` or is unnecessary
- whether downstream `design-foundation` is required, unnecessary, or already governed by an equivalent
- what downstream PRD, design, task, handoff, or implementation implications now follow
- whether the workflow materially completed or remains blocked

This workflow does not need to resolve every visual detail.

It needs to reduce meaningful experience ambiguity enough for downstream work to proceed more intentionally.

---

## Completion and Stop Rule

Experience-direction completion is a bounded workflow moment.

When this workflow materially completes, the system may:

- finalize experience synthesis
- create the durable `Experience` artifact when required
- update `PROJECT_STATE.md` coherently to reflect the experience-complete moment

It must then stop and return control.

This workflow must not:

- auto-open `growth-strategy`
- auto-open `define-prd`
- auto-open `define-design-foundation`
- auto-open `plan-tasks`
- auto-open `prepare-handoff`
- auto-open implementation work
- treat improved direction as permission to continue in the same turn

The correct result of this workflow is:

- experience-direction materially completed
- artifact materially present when required
- one coherent post-experience state
- explicit return of control

Nothing later.

---

## Must Not

This workflow must not:

- become decorative design theater
- impose motion by default
- replace core product definition
- replace design-foundation
- turn aesthetic exploration into uncontrolled scope expansion
- pretend surface polish is more important than bounded delivery reality
- create an `Experience` artifact that has no real downstream role
- blur the boundary between direction and implementation
- blur the boundary between direction and design-foundation
- be treated as “implicitly satisfied” merely because the product is user-facing and someone said design matters
- auto-continue into later workflow stages after experience closure
