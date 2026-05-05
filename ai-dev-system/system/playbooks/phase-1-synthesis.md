# PHASE 1 - SYNTHESIS

## Purpose

This playbook defines how the system turns Discovery into product direction.

Synthesis converges on a stable problem frame, product direction, scope logic, and decision basis.

It must preserve the truth labels from Discovery instead of polishing uncertainty away.

It must also follow `system/PRODUCT_SYNTHESIS.md`.

---

## Phase Objective

Produce a synthesis artifact strong enough for Planning.

Synthesis should clarify:

- primary user or actor
- problem statement
- job-to-be-done
- current workflow or journey that matters
- opportunity
- value proposition
- scope boundary
- non-goals
- success signals
- highest-risk assumptions
- validation needs
- planning implications

---

## Required Inputs

Typical inputs:

- Discovery artifact from `ai-dev-workspace/current/artifacts/discovery/`
- truth labels from Discovery
- `system/PRODUCT_SYNTHESIS.md`
- open questions
- validation needs
- relevant scenario runbook
- current project context and state

If no usable Discovery artifact exists, route back to Discovery.

If Discovery exists but truth labels are missing for important claims, route to Discovery repair or ask Reality Checker.

---

## Discovery Decision Preservation

Synthesis must preserve user decisions from Discovery before it narrows scope.

When Discovery contains a broad or ambiguous answer such as `all options`, `everything`, `todas`, or `complete suite`:

- do not silently convert it into a smaller feature list
- do not move one of those user-requested items into `Out-of-Scope` or `Non-Goals` without explicit rationale
- either keep the broad scope visible with a scope-risk warning, or stop for a prioritization decision
- if narrowing is necessary, label the narrowed slice as `recommended MVP slice`, not as confirmed user decision
- record what was deferred, why it was deferred, and whether deferral is a recommendation or a user decision

If the synthesis artifact contradicts a Discovery decision, the gate is `fail-repair` until the contradiction is fixed.
## Standard Sequence

### 1. Read Discovery Truth

Separate:

- direct evidence
- external evidence
- strong inference
- weak inference
- assumptions
- open questions
- decisions

Do not turn weak inference into product truth.

### 2. Frame The Problem

Define:

- primary actor
- problem statement
- current workaround
- pain or friction
- context of use
- why the problem matters now

If the problem statement still depends on unresolved core assumptions, do not advance.

### 3. Define Product Direction

Clarify:

- intended outcome
- value proposition
- core workflow direction
- experience principle if relevant
- business or adoption logic if relevant

This is direction, not a full feature spec.

### 4. Set Boundaries

Define:

- in-scope product slice
- out-of-scope areas
- non-goals
- deferred ideas
- decisions intentionally not made yet

This prevents Planning from absorbing every plausible feature.

### 5. Surface Risks And Validation Needs

List:

- highest-risk assumptions
- human validation needs
- technical unknowns
- adoption or market risks
- UX risks
- security or compliance risks when relevant

Risks should influence Planning.

### 6. Prepare Planning Implications

Translate synthesis into guidance for Planning:


- likely task families
- sequencing concerns
- specialist needs
- evidence requirements
- what must not be planned yet

Do not create detailed tasks here.

### 7. Check Planning Readiness

Before handing off to Planning, verify that Planning will not need to invent:

- the primary actor
- the basic workflow
- the problem being solved
- the current slice boundary
- the reason key items are deferred

If Planning would still need to invent these, continue Synthesis or route back to Discovery.

---

## Specialist Use

Useful specialists:

- `architectux` for product structure and workflow architecture
- `growth` for positioning, value, adoption, and market-facing clarity
- `ux-research` when user assumptions need sharper framing
- `research` when external evidence needs interpretation
- `prioritizer` when scope tradeoffs are load-bearing
- `reality-checker` when synthesis may be overstating evidence

Specialist activation must follow `system/control/AGENT_ACTIVATION_PROMPTS.md`.

---

## Synthesis Artifact

Create or update a synthesis artifact under:

`ai-dev-workspace/current/artifacts/synthesis/`

Recommended sections:

- source discovery artifact
- problem frame
- primary actor
- JTBD
- current workflow
- opportunity
- value proposition
- scope boundary
- non-goals
- evidence and inference summary
- highest-risk assumptions
- validation needs
- planning implications

---

The orchestrator or current executor must materialize the synthesis artifact. Analytical specialists may shape the content, but they do not own final artifact persistence.

If workspace writing is unavailable, report:

```text
Artifact path: pending - write unavailable
```

Stop instead of reconstructing the synthesis artifact through shell fallbacks.

## Synthesis Stop After Artifact

After creating or materially updating the Synthesis artifact, stop and report the Synthesis gate.

Do not create Planning artifacts or task contracts in the same response unless the user explicitly approved continuation across phase gates after seeing the Synthesis result.

A valid next movement after Synthesis completion is usually `stop-for-decision` or `advance-planning` as a recommendation, not immediate Planning execution.

## Gate

Synthesis may advance to Planning only when:

- the problem frame is coherent
- the primary actor is clear
- the core workflow or context is clear
- scope boundary is explicit
- non-goals are explicit
- assumptions and open questions remain visible
- planning can start without inventing product direction
- deferred items and non-goals are explicit enough to protect task boundaries

Gate result must be one of:

- `pass`
- `pass-with-warning`
- `fail-repair`
- `fail-stop`
- `recovery-required`

---

## Failure Patterns

Avoid:

- turning Discovery into a polished sales pitch
- hiding assumptions
- converting every insight into a feature
- writing detailed tasks too early
- handing Planning a scope that still hides core product decisions
- dropping non-goals
- treating external evidence as user validation
- advancing while the primary actor is still vague

---

## Output

A Synthesis completion report should include:

```markdown
## Synthesis

Artifact: [path]
Source Discovery: [path]
Specialists Used: [list or none]
Truth Quality: [strong | mixed | weak]
Scope Boundary: [clear | partial | unclear]
Highest-Risk Assumptions: [summary]
Gate: [pass | pass-with-warning | fail-repair | fail-stop | recovery-required]
Next Movement: [advance-planning | repair-synthesis | continue-discovery | stop-for-decision | route-recovery]
```

---

## Final Rule

Synthesis is successful when Planning can create executable work from a clear product direction without inventing what Discovery did not prove.


