# AGENT RESOLUTION

This document defines how the system resolves a **canonical project agent** into a **runtime-usable invocation path**.

It exists to bridge the gap between:

- project-defined agents in `system/agents/*.md`
- the agent registry in `system/agents/registry.yaml`
- the real runtime execution path available in the current environment

This layer is operational.

It is not the source of truth for agent identity.

It is not workflow governance.

It is not a skill.

It only defines how agent resolution works before invocation.

---

## Purpose

The purpose of agent resolution is to answer one bounded question:

**How does the system turn a canonical project agent name into a valid runtime-ready invocation target?**

Resolution exists to make agent usage:

- explicit
- repeatable
- low-ambiguity
- compatible with runtimes that may not support custom project agent names natively

Without this layer, agent files may exist only as documentation.

---

## What Resolution Receives

Agent resolution receives:

- a canonical project agent name  
  for example:
  - `research`
  - `frontend`
  - `design-direction`
  - `architect`
  - `context7-docs`

Optional contextual inputs may also exist, such as:

- the current governed step
- the active skill
- the current artifact being worked on
- the type of bounded work that needs specialization

But the minimum input is always:

- `canonical_agent`

---

## What Resolution Consults

The resolution layer must consult:

1. `system/agents/registry.yaml`
2. the corresponding canonical agent file in `system/agents/*.md`

The registry is the lookup layer.

The agent file is the specialization-definition layer.

Resolution must not guess agent identity from filename scanning alone when a registry entry exists.

The registry must be treated as the canonical operational lookup source.

---

## What Resolution Must Return

A successful resolution must return an operationally usable result containing, at minimum:

- `canonical_agent`
- `agent_file`
- `runtime_type`
- `invocation_mode`

It may also return supporting metadata such as:

- domain
- short description
- use context
- resolution status

But the minimum operational output is:

- enough information to identify the correct agent file
- enough information to identify the runtime-supported execution path

For runtime types that depend on environment support, the resolution result should also make it clear whether runtime availability is:

- confirmed
- unconfirmed
- unavailable

Resolution must not overclaim operational readiness when only registry-level mapping has succeeded.

---

## Canonical Resolution Rule

The system must treat the project agent name as canonical at project level.

Examples:

- `research`
- `frontend`
- `design-direction`
- `architect`
- `context7-docs`

These names are the agent identities recognized by the project itself.

However, a canonical project agent name must not be assumed to be a natively valid runtime invocation type.

The resolution layer exists precisely because:

- project-level canonical identity
- runtime-level invocable identity

may differ.

This distinction must remain explicit.

---

## Registry Rule

When resolving an agent, the system must first consult:

`system/agents/registry.yaml`

A valid registry entry should provide, at minimum:

- canonical name
- file path
- runtime type
- invocation mode

Example conceptual structures:

- `research -> system/agents/research.md -> general -> adapter`
- `context7-docs -> system/agents/context7-docs.md -> mcp -> optional-mcp`

If the requested canonical agent is not present in the registry:

- resolution fails
- invocation must not proceed as if the agent had been resolved
- the failure must be reported clearly

The system must not silently invent registry entries.

---

## Agent File Rule

After a successful registry lookup, the system must read the corresponding agent definition file.

For example:

- `system/agents/research.md`
- `system/agents/context7-docs.md`

The agent file remains the source of truth for:

- agent identity
- mission
- intended usage
- working style
- contribution shape
- deliverables
- boundaries
- must-not rules

The resolution layer must not redefine those elements.

It only locates the correct file and prepares the next operational step.

---

## Runtime Type Rule

The runtime type is the execution-compatible target supported by the current runtime environment.

This may be:

- a native runtime agent type
- a built-in subagent type
- a generic runtime type such as `general`
- an MCP-backed capability such as `mcp`
- another supported path explicitly recognized by the environment

The runtime type is not the canonical identity of the project agent.

It is the runtime-compatible execution path selected for that canonical agent.

Resolution must not silently replace the canonical project agent with the runtime type as if they were the same thing.

The correct model is:

- canonical project agent = specialization identity
- runtime type = execution-compatible path

When the runtime type is environment-dependent, such as `mcp`, successful registry lookup does not by itself prove that the runtime path is operationally usable in the current environment.

That distinction must remain visible in the resolution result.

---

## Invocation Mode Rule

The invocation mode defines how the resolved agent is expected to be executed.

The minimum supported mode for this system is:

- `adapter`

This system may also use explicitly documented modes such as:

- `optional-mcp`

`adapter` means:

- the canonical agent is resolved through the registry
- the agent file is read
- the runtime type is used as the execution path
- the runtime invocation is adapted using the project agent's guidance

`optional-mcp` means:

- the canonical agent is resolved through the registry
- the agent file is read
- the intended runtime path is MCP-backed
- runtime usability may still depend on current environment support, configuration, provider compatibility, and live availability
- failure of operational MCP availability does not erase successful canonical resolution, but it must prevent overclaiming invocation readiness

If a future mode is introduced, it must be explicitly documented.

Resolution must never invent unsupported invocation modes on the fly.

---

## Resolution Output Contract

A successful resolution should produce an output shaped conceptually like this:

- `canonical_agent: research`
- `agent_file: system/agents/research.md`
- `runtime_type: general`
- `invocation_mode: adapter`

or, for MCP-backed documentation evidence:

- `canonical_agent: context7-docs`
- `agent_file: system/agents/context7-docs.md`
- `runtime_type: mcp`
- `invocation_mode: optional-mcp`

Optional fields may be included, but only when useful, such as:

- `runtime_availability: confirmed`
- `runtime_availability: unconfirmed`
- `runtime_availability: unavailable`

This output is sufficient for the next layer:

- invocation

Resolution ends there.

It does not execute the agent itself.

---

## Resolution Boundaries

The resolution layer must not:

- decide workflow stage transitions
- decide whether a skill should progress
- create or modify core artifacts
- act as a skill
- redefine governance
- rewrite agent definitions
- invent missing registry entries
- silently downgrade missing agent resolution into generic execution without disclosure
- execute the agent task itself
- treat MCP-configured capability presence as proof of operational runtime availability

Its role is limited to:

- locating the canonical agent
- loading the operational mapping
- identifying the runtime-compatible path
- reporting any runtime-availability uncertainty that materially affects invocation honesty
- preparing a clean handoff into invocation

---

## Resolution Failure Conditions

Resolution must fail clearly when any of the following happens:

- the canonical agent is missing from the registry
- the registry entry is malformed
- the referenced agent file does not exist
- the runtime type is missing
- the invocation mode is missing
- the registry and agent file materially contradict each other
- the runtime type is known to be unsupported and no valid adapter path exists

When resolution fails:

- do not pretend the agent was resolved
- do not continue into invocation as if nothing happened
- report the failure explicitly
- identify what is missing or inconsistent

Resolution failure must remain honest and local.

If the canonical mapping is valid but runtime availability remains unconfirmed, resolution should succeed with explicit availability disclosure rather than being falsely reported as full operational readiness.

---

## No Silent Fallback Rule

If canonical resolution fails, the system must not silently do one of the following:

- pick a different agent by similarity
- fall back to generic execution without saying so
- infer the runtime type from guesswork
- treat the registry as optional when it is required
- behave as though reading some markdown file is equivalent to successful operational resolution

If fallback is ever allowed in the future, it must be explicit, documented, and visible in the output.

For the current model, fallback must not be silent.

A runtime-availability uncertainty for an already resolved entry is not the same thing as silent fallback.

That uncertainty must be surfaced explicitly and handed off to invocation honestly.

---

## Resolution and Runtime Reality

This system must distinguish between:

- **agent resolved operationally**
- **agent merely known/documented**
- **agent resolved canonically but runtime availability still unconfirmed**

A documented agent is not necessarily operationally invocable.

Operational resolution requires:

- registry lookup success
- file lookup success
- runtime type presence
- invocation mode presence

For runtime paths that are stable and locally supported, that may be enough to hand off confidently into invocation.

For runtime paths that depend on external capability support, such as MCP, resolution must additionally distinguish whether runtime availability is:

- confirmed
- unconfirmed
- unavailable

Even after resolution succeeds, real runtime invocation may still fail later.

That later failure belongs to the invocation layer, not the resolution layer.

---

## Interaction with Invocation

Resolution and invocation are separate layers.

Resolution answers:

- what canonical agent was requested?
- what file defines it?
- what runtime type should be used?
- what invocation mode applies?
- is runtime availability already known, unknown, or unavailable?

Invocation answers:

- how that resolved result is actually executed in the current runtime

This document defines only the first layer.

---

## Minimal Healthy Behavior

A healthy resolution flow looks like this:

1. receive `canonical_agent`
2. consult `system/agents/registry.yaml`
3. locate registry entry
4. read the referenced `system/agents/*.md` file
5. determine whether runtime availability is confirmed, unconfirmed, or unavailable when that distinction matters
6. return resolved operational mapping
7. stop and hand off to invocation

Nothing more.

---

## Success Condition

Agent resolution is healthy when it is easy to answer:

- what canonical project agent was requested?
- where is its source definition file?
- what runtime-compatible path should be used?
- was the agent actually resolved or not?
- is the intended runtime path confirmed, unconfirmed, or unavailable?

If the system can only say “the agent file exists” but cannot produce a runtime-usable resolved mapping, then resolution is incomplete.

If the system can produce that resolved mapping clearly and repeatably, then resolution is operationally valid.

If the system produces a registry-valid MCP mapping but hides runtime uncertainty, then resolution is still semantically incomplete.

---

## Final Rule

A correct resolution layer must answer:

- which canonical agent was requested?
- where is the corresponding definition file?
- what runtime type should be used?
- what invocation mode applies?
- is runtime availability confirmed, unconfirmed, or unavailable when that distinction matters?

It must not answer:

- whether the workflow should advance
- how the skill should behave
- whether the delivery is accepted
- how the agent task result should be judged
- how governance should change

Its job is to resolve canonical project agents into runtime-usable invocation mappings honestly and stop.