# ARCHITECTURE

This file describes the living architecture of the system as it is meant to be understood and maintained today.

It explains how the core layers of the system relate to each other, how the repository translates the official conceptual model, and how the system grows without breaking its core spine.

This file is not a governance document.
This file is not the live project state.
This file is not a philosophy manifesto.
This file is not a catalog of every specialization.

Architecture decisions should be recorded in:
`project/memory/decisions/architecture-decisions.md`

---

# PURPOSE OF THIS DOCUMENT

`ARCHITECTURE.md` exists to describe the real structural organization of the system.

Its purpose is to make it easy to understand:

- which layers make up the system
- what role each layer plays
- how those layers connect
- how the repository expresses the architectural model
- how the system can grow without repeatedly redefining its core

---

# ARCHITECTURAL MODEL

The official architectural model of this system is:

**governance-first + state-aware + skill-driven execution**

This means:

- governance defines the allowed workflow and structural constraints
- project state defines the current operational situation
- skills perform the main governed operations of the workflow
- artifacts materialize durable progress between stages
- templates reduce ambiguity and standardize recurring artifact structures
- memory preserves durable architecture, decisions, and reusable patterns
- agents provide auxiliary specialization without becoming the workflow core

This model replaces older interpretations that over-centered orchestrators, engine layers, or agent-first execution.

---

# CORE LAYERS OF THE SYSTEM

## 1. Governance Layer

The governance layer defines the official workflow boundaries and execution constraints.

Its main authority file is:

- `CLAUDE.md`

This layer answers:
what the system may do, may not do, and under which conditions it may advance or must stop.

## 2. Project Context Layer

The context layer defines the identity, purpose, and philosophy of the project.

Its main file is:

- `project/PROJECT_CONTEXT.md`

This layer answers:
what the system is, why it exists, and which philosophy guides its construction.

## 3. Project State Layer

The state layer records the current live operational situation of the project.

Its main file is:

- `project/PROJECT_STATE.md`

Its template lives in:

- `project/templates/PROJECT_STATE_TEMPLATE.md`

This layer answers:
where the project is now, what is active, what can happen next, and what the next expected step is.

## 4. Skills Layer

The skills layer contains the main operational execution units of the governed workflow.

Its main location is:

- `.claude/skills/`

Skills are the primary mechanism used to perform bounded workflow actions inside governance and state constraints.

Skills do not define governance.
Skills do not replace state.
Skills do not become the architecture by themselves.

## 5. Artifact Layer

The artifact layer materializes durable progress through the official workflow.

Its main domains are:

- `project/prd/`
- `project/validation/`
- `project/tasks/`
- `project/handoff/`

Artifacts provide durable checkpoints that reduce dependence on the current conversation and stabilize transitions between workflow stages.

## 6. Template Layer

The template layer provides canonical structures for recurring operational artifacts and documents.

Templates live alongside their artifact domains, such as:

- `project/prd/templates/`
- `project/validation/templates/`
- `project/tasks/templates/`
- `project/handoff/templates/`
- `project/templates/`

Templates standardize structure.
They do not govern the system by themselves.

## 7. Memory Layer

The memory layer stores durable system knowledge that should persist beyond the current operational moment.

Its main location is:

- `project/memory/`

This includes:

- architecture memory
- reusable patterns
- durable decisions grouped by theme

Memory preserves durable knowledge.
It does not replace governance or live state.

## 8. Agent Layer

Agents are auxiliary specialization layers.

They may support domain-specific execution or specialized reasoning, but they are not the core workflow authority and must not replace governance, state, or the skill-driven operational model.

---

# LAYER RELATIONSHIPS

The layers of the system are intentionally distinct but connected.

The relationship is:

- governance defines the permitted structure of work
- context defines system identity and intent
- state records the current operational snapshot
- skills execute the bounded workflow operations
- artifacts capture durable stage outputs
- templates standardize recurring structures
- memory preserves long-term architectural and operational knowledge
- agents support specialization when needed

This separation exists to reduce ambiguity, improve continuity between sessions, and keep the system reliable for low-context model execution.

---

# REPOSITORY TRANSLATION OF THE MODEL

The repository expresses the architectural model through a small number of stable structural anchors.

## Core authority and operational files

- `CLAUDE.md`
- `project/PROJECT_CONTEXT.md`
- `project/PROJECT_STATE.md`

## Main operational execution layer

- `.claude/skills/`

## Main artifact domains

- `project/prd/`
- `project/validation/`
- `project/tasks/`
- `project/handoff/`

## Shared and domain-specific templates

- `project/templates/`
- `project/prd/templates/`
- `project/validation/templates/`
- `project/tasks/templates/`
- `project/handoff/templates/`

## Durable memory

- `project/memory/`

This organization is intended to make the architecture inspectable, editable by humans, and resilient under low-context AI use.

---

# STABLE SPINE AND EXTENSIBLE LAYERS

A key architectural principle of this system is the distinction between the stable spine and extensible layers.

## Stable spine

The stable spine includes the parts of the system that should not change frequently:

- governance model
- official pipeline
- state model
- artifact model
- official terminology
- structural role of templates, memory, and agents
- relationship between governance, state, skills, and artifacts

## Extensible layers

The extensible layers include the parts that may grow with lower friction:

- skills
- auxiliary agents
- specialized patterns
- future playbooks
- domain-specific specializations

The system is designed so that growth happens by fitting into existing contracts rather than redefining the core each time.

---

# LEGACY AND TRANSITIONAL STRUCTURE

The repository may still contain legacy or transitional structures, including parts of `engine/`.

Those structures may remain temporarily during convergence, but they are not the canonical center of the architecture anymore.

The current architectural center is the combination of:

- governance in `CLAUDE.md`
- context in `project/PROJECT_CONTEXT.md`
- state in `project/PROJECT_STATE.md`
- skill-driven execution in `.claude/skills/`
- artifact domains under `project/`
- durable knowledge in `project/memory/`

Legacy files should be interpreted through this newer architecture, not the other way around.

---

# EXTENSIBILITY WITHOUT RE-COUPLING

The system is designed to allow new capabilities without repeatedly reopening the architectural core.

This means:

- adding a new skill should not redefine the governance model
- adding a new agent should not alter the workflow hierarchy
- adding a new specialization should not require changing the state model by default
- adding a new domain should not require new macro phases unless a true structural change has occurred

The architecture remains healthy when the core stays stable and specialization grows by attachment to existing contracts.

The core should know contracts, not growing catalogs of concrete specializations.

---

# ARCHITECTURAL BOUNDARIES

The architecture depends on keeping certain boundaries clear.

- governance is not live state
- state is not memory
- context is not governance
- memory is not a task tracker
- templates are not architecture by themselves
- artifacts are not governance
- agents are not the workflow core
- skills are not allowed to redefine the system model

When these boundaries blur, the architecture becomes harder to trust, harder to evolve, and more expensive to operate with low-context models.

---

# ARCHITECTURE HEALTH CHECK

The architecture is healthy when it is easy to answer:

- What defines the workflow rules?
- What defines the current operational situation?
- What performs the main bounded workflow operations?
- Where do durable artifacts live?
- Where do templates live?
- Where does durable memory live?
- How do new specializations enter without changing the core?

If those answers become unclear, the architecture should be corrected before the system grows further.