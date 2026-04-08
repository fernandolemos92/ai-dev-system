# WORKFLOW: structured-research

This workflow defines how the system should conduct governed research work when benchmark, market, category, or external reference grounding materially improves the current scope.

It is the governing macro workflow for structured upstream research.

It does not replace governance, live state, or bounded skill execution.

---

## Purpose

Use this workflow to make discovery and product definition more evidence-aware without turning research into open-ended wandering.

This workflow exists to improve:

- external grounding
- benchmark quality
- category awareness
- evidence discipline
- separation between finding, inference, and unknown
- downstream product definition quality
- research synthesis before later product-definition work

---

## Workflow Role

This workflow governs structured research as a real traversal step, not as decorative support.

When it is active, research must be materially traversed rather than merely mentioned.

That means:

- the research need must be explicit
- the relevant research specialists must participate
- evidence gathering must remain bounded and traceable
- findings must be synthesized explicitly
- a structured output must exist before downstream product-definition progression claims readiness

This workflow must not be treated as satisfied merely because benchmark need was recognized.

Recognizing research need is not the same as completing research traversal.

---

## When This Workflow Is Required

This workflow is required when one or more of the following is true:

- the current scope depends on external reference points
- competitive or benchmark understanding materially matters
- category patterns or UX conventions materially influence the product boundary
- the system needs better evidence before stabilizing product decisions
- the user explicitly wants deeper external grounding
- the project risks premature product-definition work without external context

For `New Project`, this workflow must be treated as required upstream traversal before PRD.

For non-`New Project` cases, this workflow remains materially required whenever safe downstream product definition still depends on external grounding.

Do not use it decoratively.

Do not open this workflow merely because research sounds rigorous.

But when research is materially required, silent bypass is not valid.

---

## Typical Governed Span

This workflow usually operates around:

- `context`
- `research`
- upstream product-definition readiness

It may produce or refine a `Research` artifact that informs downstream product-definition work.

This workflow may strengthen contextual discovery and later product-definition quality, but it must not silently collapse into PRD creation if research is still genuinely needed.

---

## Relationship To Product-Definition Workflow

This workflow is upstream to product-definition maturity when research is materially required.

It may operate as a required sub-traversal inside the broader `product-definition` path.

Accordingly:

- `discover-missing-context` may determine that structured research is required
- this workflow then governs the research traversal
- only after research materially completes may downstream domain readiness be reconsidered conservatively

This workflow must not be skipped merely because foundational context is already clear.

Foundational context clarity can make research bounded and meaningful.

It does not make research unnecessary when external grounding still materially matters.

For user-facing products, completion of this workflow should also leave the system able to state explicitly whether:

- `experience-direction`
- `growth-strategy`

now require material traversal before PRD.

Research completion must not be used as a silent shortcut around that evaluation.

This workflow may inform the broader upstream battery that precedes PRD.

It does not decide that battery unilaterally.

---

## Canonical Skills and Supporting Pieces

The canonical skill most directly associated with identifying the need for this workflow is:

- `discover-missing-context`

The canonical bounded traversal skill for the research pass itself is:

- `structured-research`

This workflow may also interact with:

- `define-prd`
- evidence-related policy discipline
- state coherence or auxiliary checks when research materially affects readiness

These bounded governed pieces do not replace this workflow.

They operate around it.

---

## Research Squad Usage

This workflow uses the research squad as defined in `system/agents/research/`.

The research squad provides structured sub-guidance layers for bounded research passes.

### How to Use the Research Squad

When this workflow governs a research pass:

1. **Load the research agent** — invoke `system/agents/core/research-agent.md` through the registry as `research`

2. **Select relevant modules** — based on the research question, load only the research sub-modules that are materially relevant. Not every research pass uses every layer.

3. **Apply bounded extraction** — the controlling bounded skill must not blindly read every research sub-file. Extract only the guidance relevant to the current bounded need.

4. **Produce decision-ready synthesis** — the research output should be decision-ready, not a raw dump of all findings.

### Module Selection Guidance

| Research target | Primary modules |
|-----------------|-----------------|
| Market positioning | framing, market-landscape, competitor-analysis, differentiation-analysis |
| UX/interface decisions | framing, journey-and-ux-signals, benchmark-patterns, insight-generation |
| Technical approach | framing, domain-operations, benchmark-patterns, decision-synthesis |
| Feature validation | framing, journey-and-ux-signals, competitor-analysis, insight-generation |
| Discovery clarification | framing, all layers often relevant |

Start with `framing.md` for every research pass to clarify the decision question before expanding investigation.

### Honest Outcome Reporting

This workflow must support honest reporting of research outcomes:

- **specialist materially succeeded** — canonical research agent invoked, relevant sub-guidance loaded, bounded extraction applied, synthesis produced
- **partial / behavioral specialist use** — some research activity happened, but bounded extraction or synthesis was incomplete
- **failed specialist execution** — research was attempted but routing, guidance loading, or synthesis failed
- **unavailable** — research is materially required but cannot be safely performed

Generic web search and synthesis alone do not automatically count as strong canonical research-specialist execution.

### Anti-Specialist-Bypass Rule

This workflow must not allow generic web search and synthesis to be treated as equivalent to canonical research-specialist execution.

If the research pass only performed generic search without:
- invoking `research` through the registry
- loading relevant research squad sub-guidance
- applying bounded extraction
- producing structured synthesis

Then the outcome must be reported as **partial / behavioral specialist use** at best.

---

## Research Execution Reporting Contract

When this workflow closes, the completion output should report research execution clearly enough to support downstream honesty.

At minimum, a correct research completion report should be able to state:

- which specialist was materially required
- which specialist was actually used
- whether the canonical `research` agent was invoked through the registry
- which research squad sub-guidance was materially loaded
- whether bounded extraction materially occurred
- whether the contribution was materially applied, partial / behavioral, failed, or unavailable
- whether the durable `Research` artifact was created in `project/research/active/`
- what the single next governed move is

This workflow must not describe research as strongly completed if those facts cannot be stated honestly.

If specialist execution remained partial, the closure report must say so conservatively rather than narrating strong specialist success.

---

## Specialist Recommendation Authority Rule

Research specialists may inform downstream readiness.

They do not control downstream progression.

That means:

- a research specialist may recommend implications
- a research specialist may suggest likely next areas of work
- a research specialist must not unilaterally declare `define-prd` as the next allowed step
- a research specialist must not override the workflow-level post-research readiness evaluation
- a research specialist must not collapse `research -> experience-direction`, `research -> growth-strategy`, or `research -> prd` by recommendation alone

The governing workflow remains responsible for deciding the single next allowed step after research closure.

If a research specialist output suggests PRD readiness but the workflow-level post-research evaluation still identifies materially required downstream workflow-domain work, the workflow decision wins.

In that situation, the research output must be treated as advisory rather than authoritative.

---

## Mandatory Specialist Participation

Relevant specialists may include:

- `research`
- `architect` when structural comparison matters
- selected design or growth specialists when the research target is domain-specific

These specialists remain bounded participants inside the workflow.

They are not workflow controllers.

However, when this workflow is active, the materially relevant research specialists must not be silently bypassed.

For `New Project`, the relevant research specialists required by the research package must participate before PRD readiness can be declared.

If a specialist is materially relevant but unavailable for safe traversal, the workflow must stop honestly with that limitation made explicit.

It must not pretend research is complete by approximation alone.

---

## Required Synthesis Behavior

This workflow must produce explicit research synthesis.

That synthesis should make clear, at minimum:

- what was investigated
- what evidence was gathered
- what was directly evidenced
- what remains inference
- what remains unknown
- what changed, narrowed, or was confirmed
- what downstream implications now exist for product definition

Raw findings alone are not enough.

Specialist fragments alone are not enough.

Research traversal is not mature until synthesis exists.

---

## Research Artifact Rule

When this workflow is materially required, a durable `Research` artifact should normally be produced.

For `New Project`, a durable `Research` artifact is required before PRD.

For non-`New Project` cases, a durable `Research` artifact is still required whenever:

- findings materially affect downstream PRD framing
- findings should remain reusable across later stages
- multiple later steps depend on the same research grounding
- evidence and inference separation needs durable traceability

Research must not be treated as complete for downstream PRD purposes if the workflow required durable grounding but no durable artifact was produced.

---

## Canonical Research Artifact Placement

When this workflow produces a durable `Research` artifact, that artifact must be materialized in the canonical active research location:

`project/research/active/`

It must not be created in:

- `project/`
- the root of `project/research/`
- another artifact family
- `done/` or `archived/` as an initial materialization path

A research pass that only writes findings into a non-canonical path must not be treated as operationally complete.

If research findings exist but the durable artifact was not materialized canonically, the workflow must stop and report lifecycle closure as incomplete.

---

## Research Closure Preconditions

This workflow must not report research as operationally closed unless all required closure conditions below are satisfied for the current pass:

- research synthesis exists
- the durable `Research` artifact was materialized in `project/research/active/` when required
- `PROJECT_STATE.md` was updated coherently to describe the post-research moment
- post-research evaluation for `experience-direction` and `growth-strategy` was explicitly completed
- the single next governed move was identified conservatively

If any required closure condition is missing, the workflow must report:

- research findings may exist
- research traversal may be partially completed
- lifecycle closure is incomplete

It must not narrate the workflow as fully complete by optimism.

---

## Failed Specialist Closure Rule

If canonical `research` routing or execution fails for the current pass, the workflow must treat specialist participation as failed unless a stricter policy explicitly allows a bounded fallback classification.

In that situation, the workflow must not:

- treat research as canonically closed
- promote `Next Expected Skill` to `define-prd`
- describe PRD readiness as unblocked by research
- narrate the durable `Research` artifact as proof of successful specialist traversal
- update `PROJECT_STATE.md` as though research materially completed

Provisional findings may still exist for audit or recovery purposes, but lifecycle closure remains incomplete until specialist execution is honestly resolved.

---

## Research Closure and Stop Rule

Research completion is a bounded workflow moment.

When this workflow materially completes, the system may:

- finalize research synthesis
- materialize the durable `Research` artifact when required
- update `PROJECT_STATE.md` coherently to reflect the research-complete moment

It must then stop and return control.

This workflow must not:

- treat research completion as permission to create the PRD in the same turn
- narrate PRD creation as already underway
- compress `research → prd` into one continuous move
- use a favorable research result as permission to skip the explicit next governed step

The correct result of this workflow is:

- research materially completed
- research artifact materially present when required
- one coherent post-research state
- explicit return of control

Nothing later.

---

## Post-Research Readiness Rule

Completion of this workflow does not automatically mean that PRD is now the next allowed step.

### New Project Upstream Battery Rule

For `New Project`, research completion alone should not normally open PRD immediately for user-facing products.

When the product is materially shaped by:
- surface quality
- template or interface expectations
- trust-sensitive interaction
- positioning clarity
- messaging clarity
- monetization framing
- discoverability or conversion significance

the workflow should normally keep PRD blocked until both:

- `experience-direction`
- `growth-strategy`

have been explicitly traversed or explicitly re-evaluated as non-blocking with conservative justification.

For these cases, `growth-strategy` should not be downgraded to "can wait" merely because MVP scope is still forming.

If commercial framing, value communication, or strategic differentiation materially shape the safe PRD boundary, `growth-strategy` remains upstream-blocking.

After research, the system must explicitly determine whether downstream workflow-domain work is now materially required before PRD.

At minimum, it must evaluate whether:

- `experience-direction` is materially required before PRD
- `growth-strategy` is materially required before PRD

A correct post-research outcome must be able to state one of the following:

- research is complete and no materially blocking downstream workflow-domain work remains, so `define-prd` is now the next allowed step
- research is complete, but `experience-direction` is materially required before PRD
- research is complete, but `growth-strategy` is materially required before PRD
- research is complete, but both `experience-direction` and `growth-strategy` are materially required before PRD

If either `experience-direction` or `growth-strategy` is materially required before PRD, PRD readiness remains blocked.

In that situation, this workflow must not:

- set `Next Expected Skill` to `define-prd`
- set `Next Allowed Action` to PRD creation
- narrate PRD as the next immediate move
- treat research completion as sufficient downstream maturity

Instead, the next allowed governed move must point to the materially required workflow-domain step.

For user-facing products, when research concludes that both surface quality and strategic communication materially shape safe product framing, this workflow should normally keep PRD blocked until both required downstream workflow-domain passes have been explicitly handled or explicitly re-evaluated as non-blocking.

Research completion is therefore a prerequisite boundary, not an automatic PRD gateway.

---

## Post-Research State Closure Rule

When this workflow closes successfully, the resulting `PROJECT_STATE.md` must describe one coherent post-research moment.

That state must align with the real research artifact and the real downstream readiness decision.

At minimum, the post-research state must not:

- describe the project as a neutral starting position
- say that no active governed artifact exists when `Active Research` is present
- say that optional domain artifacts are inactive when research is active
- point to `define-prd` as the next expected skill when materially required downstream workflow-domain work is still pending
- mix a completed research moment with a downstream PRD-ready moment unless the downstream readiness conditions are actually satisfied

A coherent post-research state should describe:

- `Current Phase = research`
- the active research artifact in `project/research/active/`
- research as materially completed for the current pass
- whether `experience-direction` is materially required
- whether `growth-strategy` is materially required
- the correct next governed step based on that evaluation
- explicit return of control

If the state cannot represent that post-research moment coherently, the workflow must stop and report lifecycle closure as incomplete rather than silently pointing to PRD by optimism.

---

## Expected Output

When this workflow is used correctly, it should materially produce:

- clearer research questions
- bounded evidence gathering
- explicit separation of evidence and inference
- explicit statements of unknowns or unresolved uncertainty
- a durable `Research` artifact when required
- research synthesis
- clearer downstream implications for product definition
- a clearer next governed move into product definition or further clarification

---

## Downstream Impact

When this workflow is used correctly, it should improve downstream work in explicit ways.

Typical impacts include:

- narrowing or correcting product assumptions before PRD definition
- clarifying what is benchmark-derived versus truly product-specific
- identifying when a proposed direction is still under-evidenced
- reducing premature solutioning
- making later PRD, validation, experience, or strategy decisions more grounded

If research produces no material change in downstream understanding, the workflow should say so explicitly rather than implying importance by ceremony.

For user-facing products, this workflow should normally improve not only PRD grounding but also the quality of later evaluation around:

- experience direction
- trust-sensitive interaction
- messaging and strategy significance

This does not mean those domains are always opened immediately.

It does mean their need should be more explicit after research, not less.

---

## Readiness Signal

This workflow is sufficiently mature for downstream PRD reconsideration only when the system can state, with bounded honesty:

- what was investigated
- what was found
- what remains unknown
- what changed, narrowed, or was confirmed
- which research specialists materially participated
- whether the required `Research` artifact exists in `project/research/active/`
- what the correct next governed step now is

Research closure does not require complete certainty.

It does require honest enough grounding to either:

- move into product definition with clearer footing

or

- remain blocked because materially important uncertainty still prevents safe stabilization

For `New Project`, PRD readiness must not be declared until this workflow has materially completed.

---

## Must Not

This workflow must not:

- become infinite exploration
- pretend weak evidence is strong evidence
- confuse identification of research need with completed research traversal
- silently bypass materially relevant research specialists
- silently move into PRD without required research synthesis
- treat optional wording as permission to skip required research in `New Project`
- silently jump into implementation-level solutioning
- replace the product-definition workflow
- create decorative research artifacts with no downstream role
- narrate research as complete when the current scope still lacks materially needed grounding
- create a research artifact outside `project/research/active/` and still treat the step as validly closed
- auto-open PRD work in the same turn after research closure
