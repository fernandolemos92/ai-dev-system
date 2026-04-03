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
- bounded synthesis or clarification inside a valid workflow step

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
- bounded review work that already exists

Agents must not create an alternative workflow.

They must not become mandatory macro stages.

They must not redefine how progression works.

---

## Agent Invocation Rule

Agents should be invoked only when specialization would materially improve the current bounded step.

They are not automatic participants in every workflow action.

Agent invocation must remain:

- bounded
- relevant to the current governed step
- proportional to the real need
- subordinate to skill and state control

As a general rule:

- non-trivial domain-specific work should prefer the most relevant specialized agent
- trivial, clear, low-risk work may proceed without agent support
- invoking an agent must improve judgment, implementation quality, review quality, or decision clarity in a meaningful way
- invoking an agent must never replace governance, project state, or skill control

Agents should be attached when they help answer questions such as:

- which specialized implementation approach is most appropriate here?
- what domain-specific caution matters inside this bounded step?
- what specialist reasoning would reduce ambiguity or improve quality?
- what specialized direction would make the current step more reliable?

Agents must not be invoked as decorative participants.

They must not be used to inflate workflow complexity when specialization adds little or no real value.

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
- what specialized caution, synthesis, or implementation support may improve the work

Agents must not absorb the role of:

- contextual discovery
- PRD creation
- validation derivation
- task decomposition
- handoff generation
- scope gating
- security gating
- workflow routing
- lifecycle closure
- state authority

Those responsibilities belong to skills and gates.

---

## Types of Agents

This layer may include different kinds of specialization agents, such as:

- implementation specialists
- review-oriented specialists
- research or synthesis specialists
- boundary-specific specialists

These categories are descriptive only.

They must not become a parallel workflow system.

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
- practical in output and scope

Avoid:

- inflated taxonomies
- agent-centric orchestration
- duplicated workflow logic
- large overlapping catalogs of roles
- vague agents with no clear deliverable value

---

## Standard Structure for Agent Files

Each agent file should follow this structure whenever applicable:

1. Title
2. Identity
3. Core Mission
4. Use When
5. Supports
6. Typical Contribution
7. Working Style
8. Deliverables
9. Baseline (when relevant)
10. Must Not
11. Final Boundary

Not every agent needs a heavy baseline section, but all agents should be structurally explicit enough to remain clear, reusable, and low-ambiguity.

---

## Agent Quality Expectations

A healthy agent should:

- have a clear specialist identity
- support bounded governed work without redefining it
- produce practical outputs rather than vague opinion
- remain useful under low-context execution
- avoid hidden scope expansion
- stop after supporting the current bounded need

An unhealthy agent tends to:

- become too vague
- compete with skills
- inflate scope
- duplicate workflow logic
- behave like a controller instead of a specialist

---

## Success Condition

This layer is healthy when it is easy to answer:

- which agents provide real specialization value?
- how do they support governed work without replacing it?
- what kind of output does each one improve?
- how can the layer grow without forcing core redesign?

If the agents start competing with skills or redefining workflow, this layer has drifted and should be corrected.