# DISCOVERY_INTELLIGENCE

## Purpose

`DISCOVERY_INTELLIGENCE.md` defines how the system should think during discovery.

It exists to improve question quality, evidence quality, uncertainty handling, and problem framing before the system converges in Synthesis.

This file complements:

- `system/research/DISCOVERY_STANDARDS.md`
- `system/playbooks/phase-0-discovery.md`

---

## Core Idea

Discovery intelligence is not about collecting more information.

It is about finding the smallest set of truths that most improves downstream decisions.

Good discovery intelligence asks:

- what uncertainty matters most now
- what evidence would reduce that uncertainty
- what should be learned from humans
- what can be learned from artifacts or external evidence
- what should remain explicitly unresolved

---

## Discovery Priorities

When time or context is limited, discovery should prioritize:

1. primary actor clarity
2. problem clarity
3. current workflow or workaround clarity
4. risk-bearing constraints
5. evidence strength
6. validation needs
7. only then: solution-space exploration

Do not spend the best attention on low-impact curiosity.

---

## Good Discovery Questions

A strong discovery question usually does one of these:

- identifies the actor
- clarifies the current behavior
- surfaces pain or friction
- reveals the current workaround
- exposes a risky assumption
- identifies a hard constraint
- clarifies why the problem matters now
- separates evidence from imagination

Good questions are specific enough to change the next move.

Weak questions are broad, decorative, or answerable without affecting the workflow.

---

## High-Value Unknowns

The system should pay special attention to unknowns that would distort later phases:

- wrong actor
- wrong problem
- wrong current workflow
- fake urgency
- hidden trust or compliance issue
- hidden data dependency
- hidden accessibility need
- assumption disguised as demand
- competitor pattern mistaken for validated need

If one of these is still unstable, the system should slow down before Synthesis.

---

## Source Selection Logic

Use the narrowest source that can answer the current discovery question.

Priority order:

1. existing project artifacts
2. direct user or stakeholder input
3. observable product or workflow evidence
4. external research
5. bounded inference

Do not jump to external research when internal truth already exists.

Do not jump to inference when a direct source is available.

---

## Solution Pressure Control

Discovery naturally creates solution pressure.

The system must resist moving too early from:

- problem -> feature
- pain -> interface
- benchmark -> requirement
- idea -> scope commitment

Exploring solutions is allowed only when it helps reveal the problem, compare options, or prepare later synthesis.

Solution exploration must not erase uncertainty labels.

---

## Discovery Compression

Compressed discovery is allowed only when:

- the scenario is narrow
- the actor is already known
- the current workflow is already known
- the risk of misunderstanding is low enough
- the next phase will not need invented truth

Compression is not permission to skip uncertainty visibility.

---

## Human Validation Triggers

Mark human validation explicitly when discovery touches:

- motivation
- emotional stakes
- willingness to pay
- adoption likelihood
- trust behavior
- political or organizational friction
- accessibility constraints in real usage
- workflow frequency or severity not grounded in data

LLMs may structure these questions, but should not fake answers.

---

## Anti-Patterns

Avoid:

- asking many low-leverage questions
- collecting context without deciding why it matters
- turning every discovery session into competitor research
- solutioning because the user sounds excited
- polishing uncertainty into a confident narrative
- using discovery to justify a preferred implementation path

---

## Final Rule

Good discovery intelligence reduces the number of things the system must later pretend to know.
