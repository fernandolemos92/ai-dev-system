# AGENTS LAYER

This directory contains **auxiliary specialization agents** for the ai-dev-system.

Agents are not the core workflow mechanism.

They exist to provide specialized support when governed work requires deeper domain-specific reasoning or execution help.

The system remains:

**governance-first + state-aware + workflow-orchestrated + skill-executed execution**

That means:

- governance defines what is allowed
- state defines the current operational situation
- workflows define the macro operating contracts and govern traversal
- skills execute the bounded governed operations inside the active workflow or gate
- artifacts preserve durable progress
- agents provide specialized support without becoming the workflow core

Agents do not weaken workflow authority.

They exist to deepen bounded governed work, not to replace the active workflow or the controlling skill.

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

## Taxonomy

Canonical project agents are organized by domain:

### `core/`

- `architect-agent.md`
- `memory-agent.md`
- `research-agent.md`
- `security-agent.md`
- `technical-baseline-agent.md`

### `design/`

- `branding-agent.md`
- `design-system-agent.md`
- `information-architecture-agent.md`
- `motion-agent.md`
- `page-strategy-agent.md`
- `ui-agent.md`

### `growth/`

- `analytics-agent.md`
- `copy-messaging-agent.md`
- `cro-agent.md`
- `positioning-agent.md`
- `seo-agent.md`

### `implementation/`

- `backend-agent.md`
- `database-agent.md`
- `frontend-agent.md`
- `qa-agent.md`

These files define the canonical project specialists.

The registry maps them to runtime-usable execution paths.

---

## How Agents Fit the System

Agents must enter by **attachment** to governed work that already exists.

An agent may support:

- a skill already in progress
- a gate already in use
- an active artifact that needs specialized interpretation
- implementation work that is already authorized by governance and state
- bounded review work that already exists

Agents must not create an alternative workflow.

They must not become mandatory macro stages.

They must not redefine how progression works.

---

## Invocation Rule

Agents should be invoked only when specialization would materially improve the current bounded step.

They are not automatic participants in every workflow action.

Agent invocation must remain:

- bounded
- relevant to the current governed step
- proportional to the real need
- subordinate to governance, state, workflow, and skill control

Agents must not be invoked as decorative participants.

When multiple agents appear adjacent, the system must prefer the one whose bounded responsibility most directly matches the active question.

The runtime must not treat nearby agents as interchangeable merely because they operate in the same domain.

---

## Invocation Heuristics by Domain

These heuristics exist to reduce ambiguity during agent selection.

They do not replace governance, workflow contracts, or the registry.

They are a bounded operational aid for choosing the most relevant specialist when a workflow materially requires domain support.

### Design-domain heuristics

Use `branding` when the active need is primarily about:

- identity
- felt tone
- visual personality
- trust or emotional signal through expression
- coherence of how the product should feel

Use `design-system` when the active need is primarily about:

- reusable interface rules
- tokens
- shared primitives
- cross-surface consistency
- component and pattern coherence
- stable visual and interaction rules that must survive across multiple screens, sections, or states

For web/desktop user-facing products, `design-system` should normally be treated as a default materially relevant design specialist unless a governed equivalent already exists for the same execution line.

In those cases, the runtime should prefer explaining why `design-system` is non-blocking rather than silently omitting it.

Use `ui` when the active need is primarily about:

- surface-level interface clarity
- visual hierarchy
- component application
- state readability
- composition of an actual screen or interface

Use `information-architecture` when the active need is primarily about:

- grouping
- hierarchy of meaning
- navigation logic
- structural comprehension
- what belongs together, what is primary, and what should be deferred

Use `page-strategy` when the active need is primarily about:

- section order
- page unfolding
- scan rhythm
- narrative progression across a surface
- CTA placement in relation to page sequence

Use `motion` when the active need is primarily about:

- whether motion should exist at all
- how movement should support clarity, hierarchy, feedback, or tone
- restrained transition behavior
- when stillness is preferable to animation

### Growth-domain heuristics

Use `positioning` when the active need is primarily about:

- what the product is
- who it is for
- what value angle should be emphasized
- market-facing meaning
- differentiation framing

Use `copy-messaging` when the active need is primarily about:

- how the value should be expressed in words
- headline / support copy direction
- CTA wording direction
- trust-building language
- message clarity

Use `seo` when the active need is primarily about:

- discoverability
- search intent
- search-facing structure
- topical emphasis for findability
- organic visibility direction

Use `cro` when the active need is primarily about:

- friction reduction
- action readiness
- commitment hesitation
- CTA effectiveness at decision level
- improving the path from understanding to action

Use `analytics` when the active need is primarily about:

- what should be measured
- which behaviors or milestones matter
- funnel observability
- signal vs noise
- measurement logic for later learning

### Cross-domain boundary heuristics

When the ambiguity is between `branding` and `positioning`:

- prefer `branding` for felt identity and expressive coherence
- prefer `positioning` for market-facing meaning and value framing

When the ambiguity is between `ui` and `copy-messaging`:

- prefer `ui` for visual emphasis and interface readability
- prefer `copy-messaging` for verbal emphasis and wording clarity

When the ambiguity is between `page-strategy` and `cro`:

- prefer `page-strategy` for sequence and surface unfolding
- prefer `cro` for friction, hesitation, and commitment quality

When the ambiguity is between `information-architecture` and `seo`:

- prefer `information-architecture` for understandability
- prefer `seo` for findability

If the active need still spans multiple specialists materially, the controlling workflow or skill may use more than one specialist.

But the system must still report, honestly and explicitly:

- which specialists were materially required
- which were actually used
- whether each contribution was strong, partial, or unavailable

---

## Registry and Runtime Bridge

The project maintains an operational registry in:

`system/agents/registry.yaml`

That registry maps:

- canonical project agent name
- actual agent file path
- domain
- runtime type
- invocation mode

Runtime routing and execution behavior are defined separately in:

- `system/runtime/AGENT_ROUTING.md`
- `system/runtime/AGENT_EXECUTION_RULES.md`

The registry is the lookup layer.

The agent file remains the specialization-definition layer.

---

## Boundary with Skills

Skills answer:

- what governed step is being performed
- what artifact should be created or updated
- what the correct workflow transition is

Agents answer:

- what specialized support can help inside that bounded step
- what domain-specific reasoning or execution approach is useful
- what specialist caution or synthesis may improve the work

Agents must not absorb the role of:

- workflow routing
- stage authority
- lifecycle closure authority
- state authority
- bounded skill execution itself

---

## Final Rule

Agents exist to deepen the system without redefining it.

They are specialists by attachment, not workflow controllers.
