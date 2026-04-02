# AGENTS LAYER

This directory contains **auxiliary specialization agents** for the ai-dev-system.

Agents are not the core workflow mechanism.

They exist to provide specialized support when governed work requires deeper domain-specific reasoning or execution help.

The system remains:

**governance-first + state-aware + skill-driven execution**

That means:

- governance defines what is allowed
- state defines the current operational situation
- skills execute the main governed workflow operations
- artifacts preserve durable progress
- agents provide specialized support without becoming the workflow core

---

## Purpose of this Layer

The agents layer exists to make specialization extensible without forcing repeated redesign of the system core.

Agents may help with:

- specialized reasoning
- specialized implementation support
- specialized review support inside already authorized work

Agents do not define the official pipeline.

Agents do not replace skills.

Agents do not act as parallel governance.

---

## How Agents Fit the System

Agents must enter by **attachment** to governed work that already exists.

That means an agent may support:

- a skill already in progress
- a gate already in use
- an active artifact that needs specialized interpretation
- implementation work that is already authorized by governance and state

Agents must not create an alternative workflow.

They must not become mandatory macro stages.

They must not redefine how progression works.

---

## Boundary with Skills

Skills are the main operational units of the governed workflow.

Agents are optional specialization helpers.

Skills answer:

- what governed step is being performed
- what artifact should be created or updated
- what the correct workflow transition is

Agents answer:

- what specialized support can help inside that bounded step
- what domain-specific reasoning or execution approach is useful
- what specialized caution or implementation support may improve the work

Agents must not absorb the role of:

- contextual discovery
- PRD creation
- validation derivation
- task decomposition
- handoff generation
- scope gating
- security gating
- workflow routing

Those responsibilities belong to skills and gates.

---

## Extensibility Rule

This layer must remain extensible without pressuring the core.

Adding a new agent must not, by itself:

- change the official pipeline
- change governance
- change project state structure
- redefine the role of artifacts
- compete with skills as the main operational mechanism

Specialization must grow by attachment, not by core rewrite.

---

## Free-Model Compatibility

Agents should remain:

- short
- clear
- bounded
- low-ambiguity
- easy to invoke when needed

Avoid:

- inflated taxonomies
- agent-centric orchestration
- duplicated workflow logic
- large overlapping catalogs of roles

---

## Standard Structure for Agent Files

Each agent file should follow this structure:

1. Title
2. Purpose
3. Use When
4. Supports
5. Typical Contribution
6. Must Not
7. Final Boundary

This keeps the layer readable and structurally consistent.

---

## Success Condition

This layer is healthy when it is easy to answer:

- which agents provide real specialization value?
- how do they support governed work without replacing it?
- how can the layer grow without forcing core redesign?

If the agents start competing with skills or redefining workflow, this layer has drifted and should be corrected.