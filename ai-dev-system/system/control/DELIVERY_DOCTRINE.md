# DELIVERY_DOCTRINE

## Purpose

`DELIVERY_DOCTRINE.md` defines how `ai-dev-system` moves work from uncertainty to reviewed delivery.

It is the operating doctrine that the orchestrator applies. It should remain short, stable, and practical.

This file defines:

- entry situations
- canonical phases
- progression rules
- evidence gates
- specialist activation principles
- handoff and ledger discipline
- stop vs continue behavior

It does not define detailed phase steps, specialist internals, or task schemas. Those belong in playbooks, agents, and contracts.

---

## Core Doctrine

The system exists to make delivery more reliable without turning delivery into ritual.

Every runtime move must answer five questions:

1. **What scenario is this?**
2. **What phase are we actually in?**
3. **What evidence supports moving forward?**
4. **Which specialist, if any, materially improves this step?**
5. **What contract records the next truth?**

If those questions cannot be answered cleanly, the orchestrator should slow down or route to recovery.

---

## Entry Situations

The orchestrator must classify work into one of four entry situations.

### New Product

Use when the product, audience, workflow, and scope are not yet stable.

Default path:

`Discovery -> Synthesis -> Planning -> Build/Review`

Primary risk:

- premature solutioning
- shallow PRD
- building before the problem is understood

### Existing Feature

Use when a product or codebase already exists and the work changes or extends it.

Default path:

`Focused Discovery -> Synthesis or Planning -> Build/Review`

Primary risk:

- local change that conflicts with existing product, architecture, or UX reality

### Bugfix

Use when the goal is diagnosis, correction, validation, and regression confidence.

Default path:

`Diagnosis -> Task -> Build/Review`

Primary risk:

- fixing the symptom without proving the cause or validating the correction

### Recovery

Use when state, artifacts, execution, or review claims are stale, contradictory, partial, or uncertain.

Default path:

`Reality Reconstruction -> Re-entry Decision`

Primary risk:

- continuing from a flattering but false version of history

---

## Canonical Phases

### Discovery

Purpose:

Understand the real problem, actor, workflow, constraints, unknowns, and evidence needed for direction.

Exit condition:

The next phase can reason from grounded context instead of guesses.

### Synthesis

Purpose:

Convert discovery into product direction, scope shape, success logic, and tradeoffs.

Exit condition:

Planning can create executable work without inventing the product.

### Planning

Purpose:

Turn direction into bounded executable tasks, handoff expectations, specialist needs, and review criteria.

Exit condition:

At least one task is executable without hidden scope invention.

### Build/Review

Purpose:

Execute bounded work, record what actually happened, and review against evidence.

Exit condition:

The task is accepted, rejected with retry guidance, or routed to recovery.

---

## Phase Progression

A phase may advance only when:

- the minimum phase outcome exists
- the outcome is materially usable by the next phase
- major ambiguity has been resolved or explicitly bounded
- required contracts are present
- evidence supports the transition

The system must not advance because:

- an artifact exists by filename only
- a checklist was filled mechanically
- a specialist was named but not materially used
- the conversation feels long enough
- the user wants speed but the next step would be fake

Progression may be compressed when the scenario justifies it. Compression is valid only when it is explicit and evidence-backed.

---

## Evidence Gates

Evidence gates prevent fake progress.

A gate should check one of these:

- context sufficiency
- scope stability
- task executability
- specialist execution honesty
- implementation evidence
- review readiness
- state/artifact coherence

Gate failure must produce a repair path, not vague caution.

Valid repair paths include:

- continue Discovery
- revise Synthesis
- re-plan task
- rewrite handoff
- execute retry
- route to Recovery
- stop for user decision

---

## Specialist Doctrine

Specialists follow the `agency-agents` pattern: reusable expert roles with clear identity, mission, deliverables, and activation guidance.

This system adds stricter execution honesty.

A specialist is materially used only when:

- it exists in `system/agents/registry.yaml`
- its definition is read or adapted through the runtime
- the current step needs its expertise
- its guidance shapes the output
- the ledger records that participation

Do not activate specialists:

- for ceremony
- to make the workflow feel more advanced
- when the next move is already clear
- when they duplicate the orchestrator
- when their output cannot affect the decision or task

Specialists advise and execute bounded slices. They do not own the workflow.

---

## Handoff Doctrine

Handoff preserves continuity between intent and action.

A handoff must clarify:

- scenario
- phase
- objective
- current truth
- inputs
- constraints
- task boundary
- required deliverable
- acceptance criteria
- evidence required
- required and supporting specialists
- known risks or open questions

A handoff does not prove execution. It only makes execution safer.

If a handoff is too vague to execute, the orchestrator must route back to Planning.

---

## Ledger Doctrine

Every meaningful execution step must leave a ledger entry.

The ledger records what actually happened, not what should have happened.

At minimum, it should capture:

- task id
- owner specialist required
- owner specialist invoked
- supporting specialists invoked
- runtime target used
- files touched
- evidence produced
- result
- drift or scope warnings

Without a ledger, implementation may exist, but delivery truth is incomplete.

---

## Review Doctrine

Review is evidence-based acceptance control.

Review must not accept work only because:

- code exists
- the implementation summary sounds plausible
- the task was marked done
- a specialist claimed success

Review should decide one of:

- accepted
- accepted with follow-up
- retry required
- rejected
- recovery required

If review cannot inspect enough evidence, the correct decision is not acceptance.

---

## Stop vs Continue

The orchestrator should continue automatically when:

- the next move is canonical
- evidence is sufficient
- no real user decision is needed
- the scope remains bounded
- continuing reduces friction without increasing drift risk

The orchestrator must stop when:

- a product or technical tradeoff changes direction
- multiple valid paths exist
- required context is missing
- evidence is insufficient
- state and artifacts disagree
- specialist execution failed but was required
- continuation would create fake certainty

Do not stop for permission rituals. Do stop for real decisions.

---

## Recovery Doctrine

Recovery is a first-class scenario.

Use Recovery when:

- project state is stale or contradictory
- artifacts do not match claimed phase
- execution lacks a ledger
- review lacks evidence
- task scope drifted during execution
- the system cannot tell what is actually true

Recovery must reconstruct:

- current state
- valid artifacts
- completed execution
- missing evidence
- safest re-entry point

Resume from the safest true point, not from the most optimistic point.

---

## Artifact Discipline

Artifacts exist to improve delivery quality.

Create or update artifacts only when they improve:

- decision quality
- continuity
- execution safety
- review quality
- future maintainability

Avoid artifact theater.

The preferred durable records are:

- discovery and synthesis artifacts
- task contracts
- handoffs
- ledgers
- review reports
- concise project state

---

## Final Rule

The doctrine is successful when the system:

- moves faster with less ceremony
- stops earlier when reality is weak
- uses specialists only when they matter
- records execution truth
- reviews from evidence
- reduces drift between intention, code, and claims

When in doubt, prefer the smallest next move that preserves truth.
