# AGENT ROUTING

This document defines how the system resolves and routes a **canonical project agent** into a **runtime-usable execution path**.

It bridges the gap between:

- project-defined agents in `system/agents/`
- the agent registry in `system/agents/registry.yaml`
- the real runtime execution path available in the current environment

This layer is operational.

It is not constitutional governance.

It is not live project state.

It is not a skill.

---

## Purpose

Agent routing answers one bounded question:

**How does the system turn a canonical project agent name into a valid runtime-ready execution route?**

Routing exists to make agent usage:

- explicit
- repeatable
- low-ambiguity
- compatible with runtimes that may not support custom project agent names natively
- fail-closed rather than fail-open when routing is uncertain

---

## Core Routing Principle

The system must preserve a strict distinction between:

- the **canonical project agent**
- the **runtime-supported execution type**
- the **invocation mode**
- the **actual runtime call target**

These are related, but they are not the same thing.

Example:

- canonical agent: `research`
- runtime type: `general`
- invocation mode: `adapter`
- actual runtime call target: `general`

In this case, the runtime must be called with `general`, not `research`.

The canonical agent identity must still be preserved in routing metadata and in the adapted execution framing.

---

## What Routing Receives

Routing receives, at minimum:

- `canonical_agent`

Optional contextual inputs may also exist, such as:

- the current governed step
- the active skill
- the current artifact being worked on
- the type of bounded work that needs specialization

These may help validate whether routing is contextually appropriate.

They do not replace registry lookup.

---

## What Routing Consults

The routing layer must consult:

1. `system/agents/registry.yaml`
2. the corresponding canonical agent file referenced by the registry

The registry is the lookup layer.

The agent file is the specialization-definition layer.

Routing must not guess agent identity from ad hoc filename scanning when a registry entry exists.

Routing must not infer runtime compatibility by intuition when the registry already defines it.

---

## What Routing Must Return

A successful routing result must contain, at minimum:

- `canonical_agent`
- `agent_file`
- `runtime_type`
- `invocation_mode`
- `runtime_call_target`

It may also include:

- domain
- description
- routing status
- routing notes

The result must be enough to:

- identify the correct agent file
- identify the runtime-supported execution path
- identify the exact runtime call target that should actually be used
- make incorrect runtime invocation less likely

---

## Registry Rule

A valid registry entry should provide, at minimum:

- canonical name
- file path
- runtime type
- invocation mode

If the requested canonical agent is not present in the registry:

- routing fails
- execution must not proceed as if the agent had been routed successfully
- the failure must be reported clearly

The system must not silently invent registry entries.

The system must not silently substitute another canonical agent.

The system must not downgrade to “some generic specialist” without an explicit registry-backed route.

---

## Agent File Rule

After a successful registry lookup, the system must read the referenced agent file.

The agent file remains the source of truth for:

- identity
- mission
- intended use
- working style
- deliverables
- boundaries
- must-not rules

Routing does not redefine those elements.

It only locates the correct file and prepares execution.

A registry lookup without loading the referenced agent file is not sufficient for adapted specialist execution.

A loaded file is also not automatically sufficient merely because it exists.

If the referenced agent file is materially empty, placeholder-only, structurally incomplete, or too thin to provide bounded specialist guidance for the current need, routing must not present that agent as specialist-ready by default.

In that situation, routing must either:

- fail closed when the governed step materially depends on real specialist guidance

or

- succeed only with an explicit note that specialist execution richness remains limited by insufficient agent guidance and must be reported conservatively downstream.

---

## Runtime Type Rule

The runtime type is the execution-compatible target supported by the current runtime environment.

Typical values may include:

- `general`
- another explicitly supported runtime type if the environment evolves

The runtime type is not the canonical identity of the agent.

Routing must not silently replace canonical identity with runtime type as if they were the same thing.

Routing must not send the canonical agent name to the runtime when the runtime only supports the mapped runtime type.

If the registry says:

- canonical agent = `research`
- runtime type = `general`

then the runtime call target must be `general`.

Calling the runtime with `research` in that case is a routing error, not a harmless variation.

---

## Invocation Mode Rule

The invocation mode describes how the project agent guidance is applied through the runtime-supported path.

Current default mode in this system is typically:

- `adapter`

That means the canonical project agent is resolved first, then its bounded guidance is applied through a runtime-supported route.

Adapter mode does **not** mean:

- pretend the runtime natively supports the canonical name
- skip the agent file
- collapse specialist identity into raw generic execution
- freeform fallback from a failed canonical call into a generic call

Adapter mode means:

- preserve the canonical agent identity
- load the canonical agent file
- use the registry-approved runtime type as the actual runtime call target
- frame the execution through the loaded agent guidance honestly

---

## Runtime Call Target Rule

Routing must explicitly compute the runtime call target.

This field exists to remove ambiguity at execution time.

Rules:

- if `runtime_type` is supported by the environment, `runtime_call_target = runtime_type`
- if `runtime_type` is not supported, routing fails
- the runtime call target must never be guessed from the canonical agent name
- the runtime call target must never be silently rewritten by fallback intuition

For example:

- canonical agent: `research`
- runtime type: `general`
- runtime call target: `general`

A later execution layer may then invoke a `general` runtime task **adapted with research-agent guidance**.

That is valid adapted execution.

Invoking `research` directly as the runtime call target in that case is invalid.

---

## Adapter Resolution Sequence

When a canonical agent is routed with `invocation_mode: adapter`, the system must resolve execution in this exact order:

1. read the canonical agent entry from `system/agents/registry.yaml`
2. load the referenced agent file
3. read `runtime_type`
4. compute `runtime_call_target`
5. confirm that the environment supports that runtime call target
6. preserve the canonical agent only as routing identity and adapted guidance source
7. invoke the runtime using `runtime_call_target`, not the canonical agent name

Example:

- canonical agent: `research`
- runtime type: `general`
- invocation mode: `adapter`
- runtime call target: `general`

Correct behavior:
- load `research-agent.md`
- adapt execution through `general`

Invalid behavior:
- call the runtime with `research` directly
- treat canonical identity as native runtime target
- skip registry-backed mapping because the canonical name looks descriptive enough

If this sequence is not completed successfully, routing must fail closed and execution must not begin.

---

## Fail-Closed Routing Rule

If any of the following is missing, inconsistent, or unsupported:

- canonical registry entry
- referenced agent file
- runtime type
- invocation mode
- runtime call target compatibility

then routing must fail closed.

That means:

- do not attempt execution as though routing succeeded
- do not silently fallback to another canonical agent
- do not silently fallback to a generic runtime path without adapted identity
- do not narrate specialist participation as if it occurred

The failure must be reported clearly and locally.

If the governed step materially depends on that specialist, the governed step must stop honestly.

---

## No Silent Fallback Rule

The system must not treat agent routing failure as permission for silent fallback.

Examples of invalid behavior include:

- attempting `research`, getting an invalid runtime error, then switching to `general` without explicit routed adaptation
- failing to resolve a design specialist, then informally using “general reasoning” while narrating that the specialist participated
- substituting one growth specialist for another because they seem related

If a fallback path is ever allowed in the future, it must be:

- explicitly defined in the registry or runtime policy
- surfaced honestly as fallback
- distinguishable from normal successful routing

Until such a policy exists, routing failure is routing failure.

---

## Output Honesty Rule

Successful registry lookup does not automatically prove that rich live specialist execution occurred.

The system should distinguish clearly between:

- successful routing
- successful runtime invocation
- successful adapted specialist execution

Execution behavior belongs to:

`system/runtime/AGENT_EXECUTION_RULES.md`

Routing must not overclaim what happened.

Examples:

- registry lookup succeeded → true
- agent file loaded → true
- runtime call target identified → true
- specialist execution definitely happened → not yet proven by routing alone

---

## Required Routing Summary

A correct routing summary should be able to state, honestly:

- which canonical agent was requested
- which registry entry was used
- which agent file was loaded
- which runtime type was approved
- which runtime call target should actually be used
- whether routing succeeded or failed
- whether execution still remains pending

This summary may be implicit in internal machinery, but the logic must remain this disciplined.

---

## Must Not

Do not:

- invent registry mappings
- pretend routing equals execution
- claim native runtime support for the canonical agent name when only adapted routing exists
- bypass the registry when the registry is the expected lookup source
- call the runtime with the canonical agent name when the registry maps it to a different runtime type
- silently fallback from failed canonical routing into generic execution
- narrate specialist participation when routing or execution did not actually succeed
- treat “general” as a substitute canonical identity for every unresolved agent

---

## Final Rule

Routing exists to make project-defined specialization operationally reachable without pretending that project taxonomy and runtime taxonomy are the same thing.

A correct routing result must make the next execution step more precise, not more ambiguous.