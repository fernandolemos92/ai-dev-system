# PHASE 0 - DISCOVERY

## Purpose

This playbook defines how the system runs Discovery.

Discovery exists to reduce uncertainty before synthesis, planning, and implementation.

It must follow:

- `system/control/DELIVERY_DOCTRINE.md`
- `system/control/ORCHESTRATOR.md`
- `system/research/DISCOVERY_STANDARDS.md`
- `system/DISCOVERY_INTELLIGENCE.md`

This playbook defines phase execution. `DISCOVERY_STANDARDS.md` defines discovery quality. `DISCOVERY_INTELLIGENCE.md` defines how discovery should think under uncertainty.

---

## Phase Objective

Produce a discovery artifact strong enough for Synthesis to operate without inventing core product truth.

Discovery should clarify:

- problem
- primary actor
- current workflow or context
- pains and friction
- constraints
- evidence
- assumptions
- open questions
- non-goals
- validation needs

---

## Discovery Method

Use the Evidence Diamond:

```text
Discover Reality -> Define Problem -> Explore Solutions -> Commit Scope
```

During Discovery, the system primarily works through the first two movements:

1. `Discover Reality`
2. `Define Problem`

`Explore Solutions` may be lightly used to identify possible directions, but solution commitment belongs later unless scenario pressure justifies compression.

`Commit Scope` should normally prepare the handoff to Synthesis, not replace Synthesis or Planning.

---

## Truth Label Requirement

Important discovery claims must be labeled as one of:

- `direct-evidence`
- `external-evidence`
- `strong-inference`
- `weak-inference`
- `assumption`
- `open-question`
- `decision`

If a statement cannot be labeled, it is not ready to drive downstream decisions.

---
## User Input Truth Labels

Product claims directly provided by the user are `direct-evidence` of stakeholder intent.

Examples:

- user says "SaaS para casamento" -> `direct-evidence` for product intent
- user says "hero romântico" -> `direct-evidence` for desired experience
- user says "Brasil" -> `direct-evidence` for intended market focus

This does not mean the claim is validated market truth. Market size, competitor gaps, willingness to pay, and adoption behavior still require external evidence or must remain inference/assumption.

Do not label user-provided product intent as `assumption` unless the user is explicitly speculating or uncertain.

## Entry Conditions

Discovery may begin when:

- a new product or initiative enters the system
- an existing feature has unclear user/problem/workflow context
- a bugfix needs enough context to avoid solving the wrong issue
- recovery shows upstream understanding is stale or unreliable
- the orchestrator identifies material ambiguity before Synthesis or Planning

Discovery does not require a blank slate.

It may start from user prompts, existing artifacts, product context, analytics, support notes, stakeholder input, or prior execution traces.

---

## Intensity Levels

### Strong Discovery

Use for new products, unclear problem spaces, unclear users, or high product risk.

### Focused Discovery

Use for existing features or bounded enhancements with known context but important missing pieces.

### Compressed Discovery

Use for bugfixes or narrow changes where only minimal context is needed.

### Recovery Discovery

Use when prior context exists but cannot be trusted without reconstruction.

The orchestrator chooses intensity based on scenario and risk.

---
## Discovery Start Behavior

When the resolved scenario is `new-product` and the actual phase is `discovery`, Discovery is the canonical next move.

Do not ask generic permission such as "Do you want me to proceed with Discovery?" when the user already asked to start from zero or follow the system flow.

Instead, start Discovery directly and do one of these bounded actions:

- create/update an initial discovery artifact from the known prompt truth, then ask only the smallest set of missing high-impact questions; or
- if writing is not allowed yet, present the initial discovery frame and ask the smallest set of missing high-impact questions.

Stop only when a real user decision changes direction, such as target audience ambiguity, target project root choice, evidence/research spend, or incompatible product directions.

Discovery kickoff output should include:

```text
Discovery intensity:
Initial truth labels:
Known product context:
Critical gaps:
Next discovery questions:
Artifact path: [created path or pending]
```

The question set should be compact. Prefer 3-4 questions that materially affect Synthesis over a broad checklist.
## Artifact-First Kickoff

When the workspace is writable and `artifacts/discovery/` exists or can be created, Discovery kickoff must create or update a small initial artifact before asking follow-up questions.

The initial artifact may be intentionally incomplete, but it must capture:

- known user-provided product context
- initial truth labels
- current critical gaps
- focused discovery questions
- whether external research is needed
- current gate status

Recommended name:

```text
ai-dev-workspace/current/artifacts/discovery/DISCOVERY-initial-[short-product-name-or-date].md
```

If the runtime cannot write files, the report must say:

```text
Artifact path: pending - write unavailable
```

Do not leave Discovery kickoff only in chat when workspace writing is available.
Discovery specialists such as `research`, `ux-research`, `growth`, or `architectux` may contribute bounded evidence or framing, but the orchestrator/current executor must persist the Discovery artifact.

If persistence fails after specialist contribution, stop with the pending artifact path state instead of reconstructing the artifact through shell fallbacks.



## Default Sequence

### 1. Interpret The Request

Identify:

- likely scenario
- initial problem claim
- initial actor or audience
- apparent desired outcome
- obvious missing context

Do not treat the first request as complete truth.

### 2. Inspect Continuity

Read only relevant existing context:

- `ai-dev-workspace/current/MEMORY.md`
- `ai-dev-workspace/current/STATE.md`
- current discovery artifacts
- active planning/execution artifacts if recovery or continuation is involved

If state and artifacts disagree, route to Recovery.

### 3. Map Discovery Gaps

Identify which gaps matter most for downstream quality:


- problem ambiguity
- actor ambiguity
- workflow ambiguity
- pain severity uncertainty
- constraint uncertainty
- evidence weakness
- solution-risk assumptions

Do not ask questions simply because they are interesting.

Prefer the smallest set of questions or evidence requests that would most improve Synthesis readiness.

### 4. Activate Specialists If Needed

If discovery claims will rely on competitors, market patterns, benchmark products, public references, or category norms, activate `research` or explicitly keep those claims out of `external-evidence`.

Typical Discovery specialists:

- `research` for external evidence and benchmarks
- `ux-research` for actor, journey, JTBD, pain, and validation needs
- `growth` for positioning, adoption, market, and conversion assumptions
- `architectux` for product/workflow structure when meaning needs shape
- `security` for trust or risk-sensitive discovery
- `reality-checker` when discovery evidence may be overstated

Specialist activation must follow `system/control/AGENT_ACTIVATION_PROMPTS.md`.
## External Evidence Source Discipline

Competitor, market, pricing, benchmark, adoption, and category claims require source-backed evidence when they are used to shape Discovery or Synthesis.

If external research is performed, the discovery artifact must include a source table with:

| Claim | Truth Label | Source URL | Source Type | Date Accessed | Notes |
|---|---|---|---|---|---|

Rules:

- A web search query is not itself evidence. Record the actual pages, reports, docs, pricing pages, or articles used.
- If a source URL is not recorded, the claim must be labeled `strong-inference`, `weak-inference`, `assumption`, or `open-question`, not `external-evidence`.
- Do not claim `research` specialist usage unless the research specialist was actually invoked through native or adapted specialist execution.
- If only a web search/tool was used directly by the orchestrator, report it as `external research via tool`, not `research specialist used`.
- Pricing and percentage claims must include source notes or remain assumptions.
- If research quality is insufficient, Discovery may still continue, but the gate should be `pass-with-warning` or `fail-repair`, not clean `pass`.

### 5. Build The Discovery Artifact

Create or update a discovery artifact under:

`ai-dev-workspace/current/artifacts/discovery/`

The artifact should include:

- problem context
- primary actor
- current workflow or journey
- pains and friction
- evidence table with truth labels
- source table with URLs, source type, date accessed, and notes when external evidence is used
- assumptions
- open questions
- non-goals
- validation needs
- recommendation for Synthesis
## Artifact Update Integrity

Discovery artifacts are structured phase records, not append-only scratchpads.

When updating a discovery artifact after user answers:

- update the relevant existing sections instead of inserting new sections in the middle of old unanswered gaps
- remove or revise stale questions that have been answered
- do not leave an old blocked gate and a new passing gate as simultaneous final truth
- keep one current gate status section
- preserve open questions only if they remain genuinely open
- re-read the artifact after editing and verify it has no contradictory final state

If the edit tool cannot safely update in place, rewrite the artifact cleanly from the current known truth instead of accumulating contradictory blocks.

### 6. Apply Discovery Gate

Before advancing, answer:


- Is the primary actor clear enough?
- Is the problem frame clear enough?
- Is the current workflow or context clear enough?
- Are important pains and constraints visible?
- Are assumptions and open questions explicit?
- Are truth labels present for important claims?
- Are any competitor, market, or benchmark claims backed by real external sources if they are labeled `external-evidence`?
- Can Synthesis proceed without inventing the problem?
- Have high-value unknowns been reduced enough for the current scenario?

If not, continue Discovery or stop for user input.

---
## Discovery Question Limit

The first Discovery question set should contain at most four grouped questions.

Ask only questions that materially affect Synthesis readiness. Prefer grouped decisions such as:

- primary user and buyer
- core pain/current workaround
- first MVP value slice
- research/evidence requirement or target project root when it changes planning

Avoid broad checklists of optional features, visual references, pricing models, and naming questions in the first turn unless those answers are the current blocker.

If many unknowns remain, record them as open questions in the artifact instead of asking them all at once.

## Questioning Discipline

Ask fewer, better questions.

Prefer grouped questions that resolve high-impact ambiguity.

Good Discovery questions target:

- actor
- workflow
- pain
- current workaround
- desired outcome
- constraints
- evidence source
- validation risk

Avoid interrogation theater.

If the next question would not change Synthesis quality, do not ask it.

---

## Human Validation Boundary

Mark human validation needs when Discovery depends on:

- motivation
- pain severity
- willingness to pay
- frequency
- emotional context
- trust
- adoption behavior
- accessibility needs
- organizational politics

LLMs can structure uncertainty. They cannot replace real user evidence.

---
## Discovery Answer Handling Boundary

When the user answers Discovery questions, treat that response as Discovery input only.

Allowed in the same response:

- update the Discovery artifact cleanly
- update `STATE.md` with short operational truth
- report the Discovery gate
- recommend the next movement

Not allowed in the same response unless the user explicitly said to continue unattended across phase gates:

- create a Synthesis artifact
- create a Planning artifact
- create a task contract
- execute code or design work

User answers such as "sim", feature choices, pricing choices, or target-user choices do not count as approval to advance phases. Approval to advance must be explicit after the Discovery gate is shown.

## Discovery Stop After Artifact

After creating or materially updating the Discovery artifact, stop and report the Discovery gate.

Do not create Synthesis, Planning, or task contracts in the same response unless the user explicitly asked for unattended continuation across phase gates.

A valid next movement after Discovery completion is usually `stop-for-decision` or `advance-synthesis` as a recommendation, not immediate Synthesis execution.

## Exit Criteria

Discovery may advance to Synthesis when:

- a discovery artifact exists
- important claims have truth labels
- actor/problem/workflow are clear enough
- assumptions and open questions are explicit
- validation needs are visible
- the next phase can synthesize from grounded context

If Synthesis would need to invent core truth, Discovery is not complete.

---

## Failure Patterns

Avoid:

- feature-first discovery
- invented personas
- competitor-feature-as-user-need
- research theater
- simulated competitor knowledge without actual research
- question theater
- premature architecture
- stack selection
- planning from weak evidence
- polished language hiding weak truth

---

## Output

A Discovery completion report should include:

```markdown
## Discovery

Intensity: [strong | focused | compressed | recovery]
Artifact: [path]
Specialists Used: [list or none]
External Sources: [count and source table path/section when used]
Truth Quality: [strong | mixed | weak]
Open Questions: [count and summary]
Human Validation Needed: [yes | no]
Gate: [pass | pass-with-warning | fail-repair | fail-stop | recovery-required]
Next Movement: [continue-discovery | recommend-advance-synthesis | stop-for-decision | route-recovery]
```

---

## Final Rule

Discovery should make uncertainty visible enough to make better decisions.

If Discovery only makes the idea sound more polished, it failed.











