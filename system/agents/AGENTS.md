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

## Runtime Invocation Model

Agent files in `system/agents/*.md` define the **canonical project agents**.

These files are the source of truth for:

- agent identity
- specialist role
- intended usage
- working style
- boundaries
- expected contribution

However, agent files are not assumed to be natively invocable by every runtime.

When the active runtime does not support project-defined agent names directly, agent invocation must happen through an operational resolution layer.

That layer should:

- resolve the canonical project agent name
- locate the corresponding agent file
- determine the supported runtime invocation mode
- adapt the project agent to a runtime-supported execution path when necessary

This means the system may distinguish between:

- **canonical project agent**  
- **runtime-supported agent invocation type**

The project agent remains the specialization source of truth.

The runtime invocation path is only the execution bridge.

Agents must therefore be understood as:

- canonical at the project level
- potentially adapted at runtime level

This distinction must not change the role of agents in the governed workflow.

---

## Agent Registry Rule

The project may maintain an operational registry for agents.

When present, that registry should function as the explicit mapping layer between:

- canonical project agent name
- agent file path
- intended domain
- runtime invocation mode or runtime-supported type

The registry exists to make agent resolution explicit and repeatable.

It must not redefine the agent itself.

The agent file remains the specialization definition.

The registry only supports operational lookup and runtime adaptation.

If a registry exists, skills or execution layers that attach agents should prefer resolving agents through that registry rather than inferring agent identity ad hoc.

---

## Adapter Rule

If the runtime only supports fixed native agent types, the system may use an adapter layer.

The adapter may:

- resolve the canonical project agent from the registry
- read the corresponding agent definition file
- select a runtime-supported invocation type
- pass the agent guidance into that runtime-supported path

This allows the system to preserve project-defined specialization without pretending that the runtime natively recognizes custom project agent names.

The adapter is an execution bridge.

It is not the source of truth for agent identity.

The adapter must not:

- redefine the agent's purpose
- mutate governance
- replace skill control
- invent agent behavior that is not grounded in the agent file

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

If the project uses a registry or adapter layer, adding a new agent may require:

- a new canonical agent file
- a new registry entry
- a compatible runtime adaptation path when needed

That operational requirement must remain lightweight.

It must not turn the agents layer into a heavy platform.

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

If a registry or adapter is used, it should remain equally lightweight and low-ambiguity.

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

A healthy operational agent model should also make it clear:

- how the canonical project agent is resolved
- whether runtime invocation is native or adapted
- where the source of truth for the agent lives
- how invocation remains consistent across sessions

---

## Success Condition

This layer is healthy when it is easy to answer:

- which agents provide real specialization value?
- how do they support governed work without replacing it?
- what kind of output does each one improve?
- how can the layer grow without forcing core redesign?
- how is a canonical project agent resolved into a runtime-usable invocation path?

If the agents start competing with skills or redefining workflow, this layer has drifted and should be corrected.

If agent files exist but cannot be resolved into a runtime-usable path, the layer is only partially operational and still needs an explicit registry and/or adapter bridge.