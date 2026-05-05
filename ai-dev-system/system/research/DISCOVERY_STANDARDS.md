# DISCOVERY_STANDARDS

## Purpose

`DISCOVERY_STANDARDS.md` defines what good discovery means inside `ai-dev-system`.

It adapts the spirit of the Double Diamond for LLM-supported product work.

This file defines the method and quality bar for discovery.

It does not decide phases, invoke specialists, or replace `system/playbooks/phase-0-discovery.md`.

---

## Core Principle

Discovery is not feature collection.

Discovery is uncertainty reduction.

The goal is to understand the problem, actor, context, workflow, constraints, evidence, assumptions, and open questions well enough to avoid building plausible fiction.

---

## Evidence Diamond

The Evidence Diamond adapts Double Diamond for LLM workflows.

```text
Discover Reality -> Define Problem -> Explore Solutions -> Commit Scope
     diverge            converge           diverge           converge
```

The key adaptation is truth labeling.

Every important statement should be classified as one of:

- `direct-evidence`
- `external-evidence`
- `strong-inference`
- `weak-inference`
- `assumption`
- `open-question`
- `decision`

LLMs are good at making plausible connections. This system must prevent plausible connections from being treated as facts.

---

## 1. Discover Reality

Purpose:

Open the problem space without prematurely solving it.

Look for:

- actors and stakeholders
- current workflow
- user jobs
- pains and friction
- existing alternatives
- workarounds
- context of use
- frequency and severity
- constraints
- business context
- technical or operational limits
- unknowns

Output should clarify:

- what is known
- what is inferred
- what is assumed
- what requires human validation
- what external evidence exists

---

## 2. Define Problem

Purpose:

Converge on a problem frame strong enough to guide product decisions.

Define:

- primary actor
- problem statement
- job-to-be-done
- current workaround
- pain severity
- opportunity
- success signal
- non-goals
- highest-risk assumptions
- validation needs

The problem frame must not include features as if they are already the answer.

---

## 3. Explore Solutions

Purpose:

Explore possible solution paths while preserving traceability to the problem.

For each option, capture:

- solution idea
- user value
- evidence link
- assumption link
- complexity
- risk
- what it validates
- why it might fail

Do not let solution exploration erase uncertainty labels.

---

## 4. Commit Scope

Purpose:

Converge on a slice that can move into planning or validation.

Commit:

- selected slice
- why this slice
- included features
- excluded features
- success criteria
- validation plan
- evidence required
- open risks
- next planning implications

Scope commitment must be honest about unresolved assumptions.

---

## Truth Labels

### direct-evidence

Information provided directly by users, stakeholders, analytics, interviews, support tickets, observed behavior, or project artifacts.

### external-evidence

Information from public sources, benchmark research, competitor analysis, documentation, market data, or credible references that were actually inspected during the current run or explicitly cited from a prior project artifact.

Model memory alone is not `external-evidence`.

### strong-inference

A likely conclusion supported by multiple pieces of evidence.

### weak-inference

A plausible conclusion with limited support.

### assumption

Something accepted temporarily to keep moving.

Assumptions must not be disguised as evidence.

### open-question

Something that needs validation, user input, stakeholder decision, technical proof, or external research.

### decision

A conscious choice made despite known uncertainty.

Decisions should record what uncertainty remains.

---

## Minimum Discovery Artifact

A useful discovery artifact should include:

- problem context
- primary actor
- current workflow or journey
- pains and friction
- evidence table
- assumptions
- open questions
- opportunity framing
- non-goals
- validation needs
- recommendation for next phase

If these cannot be filled honestly, Discovery is not ready to advance.

When competitor, market, benchmark, or category claims matter, the artifact should also make visible whether real external research was performed or not performed.

---

## Human Validation Boundary

LLMs can help structure discovery, but they cannot replace real human evidence.

Mark human validation needs explicitly when the work depends on:

- user motivation
- pain severity
- willingness to pay
- workflow frequency
- emotional context
- organizational politics
- accessibility needs
- trust concerns
- adoption behavior

The system may proceed with assumptions only when the risk is explicit and acceptable.

---

## Specialist Use

Discovery standards may inform these specialists:

- `research`
- `ux-research`
- `growth`
- `architectux`
- `reality-checker`

This file does not activate them.

The orchestrator decides activation.

---

## Anti-Patterns

Avoid:

- feature-first discovery
- pretending assumptions are evidence
- labeling model recall as external evidence
- generating personas without grounding
- inventing user journeys from vibes
- treating competitor features as user needs
- skipping current workaround analysis
- ignoring non-goals
- moving to planning with unresolved core problem ambiguity
- using polished language to hide weak evidence

---

## Exit Criteria

Discovery may advance when:

- the primary actor is clear
- the problem frame is clear
- the current workflow or context is clear enough
- key pains are identified with truth labels
- assumptions and open questions are explicit
- the next phase can synthesize without inventing the problem

If the next phase would need to invent core product truth, stay in Discovery.

---

## Final Rule

Good discovery does not make the idea sound smarter.

Good discovery makes the uncertainty visible enough to make better decisions.
