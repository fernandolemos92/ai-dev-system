# AGENT INVOCATION

This document defines how the system executes a **resolved canonical project agent** through a **runtime-supported invocation path**.

It exists to bridge the gap between:

- a successfully resolved canonical project agent
- the real runtime execution path available in the current environment
- the specialist behavior defined in the corresponding agent file

This layer is operational.

It is not the source of truth for agent identity.

It is not workflow governance.

It is not a skill.

It only defines how invocation happens after resolution succeeds.

---

## Purpose

The purpose of agent invocation is to answer one bounded question:

**How does the system execute a resolved canonical project agent through the current runtime honestly and repeatably?**

Invocation exists to make agent usage:

- executable
- explicit
- honest
- compatible with runtimes that may support only fixed native types
- compatible with runtime capabilities whose live availability may vary by environment

Without this layer, resolution may succeed while execution remains only conceptual or documentary.

---

## Invocation Preconditions

Invocation may begin only after successful agent resolution.

That means invocation requires, at minimum:

- `canonical_agent`
- `agent_file`
- `runtime_type`
- `invocation_mode`

If those elements are missing, invocation must not proceed as if resolution had succeeded.

Invocation depends on resolution.

It does not replace it.

If resolution also reports runtime availability status, invocation must respect that status honestly.

Invocation must not silently upgrade:

- `unconfirmed`
into
- `confirmed`

without real operational evidence from the current runtime.

---

## What Invocation Receives

The invocation layer receives a resolved mapping from the resolution layer.

At minimum, it receives:

- `canonical_agent`
- `agent_file`
- `runtime_type`
- `invocation_mode`

It may also receive:

- `runtime_availability`

It may also receive bounded execution context such as:

- the current governed step
- the active skill
- the active artifact
- the exact user request or bounded task requiring specialization

But invocation must remain grounded in the resolved mapping first.

---

## What Invocation Must Do

A correct invocation layer must:

1. confirm that resolution succeeded
2. read the resolved agent file as the behavioral source of truth
3. identify the runtime-supported execution path from `runtime_type`
4. interpret the declared `invocation_mode`
5. determine whether live runtime execution is actually available for this invocation
6. adapt the project agent guidance into that runtime-supported path when applicable
7. execute the bounded work through that path when operationally possible
8. report honestly what kind of invocation actually happened

Invocation must make the bridge between:

- project agent identity
- runtime-supported execution

explicit and visible.

---

## Canonical Agent vs Runtime Type

Invocation must preserve the distinction between:

- **canonical project agent**
- **runtime-supported execution type**

Example:

- canonical project agent: `research`
- runtime-supported execution type: `general`

Another example:

- canonical project agent: `context7-docs`
- runtime-supported execution type: `mcp`

These are not the same thing.

The canonical project agent remains the specialization identity.

The runtime type is only the execution-compatible path available in the current environment.

Invocation must never blur these into a false claim such as:

- "the runtime natively invoked `research`"
- "the runtime natively invoked `context7-docs`"

when in reality the runtime only executed a supported type such as `general` with adapted `research` guidance, or attempted an MCP-backed capability path for `context7-docs`.

---

## Adapter Invocation Rule

One supported invocation mode for this system is:

- `adapter`

`adapter` means:

1. the canonical project agent is already resolved
2. the corresponding agent file is read
3. relevant guidance is extracted from that file
4. the guidance is injected into a runtime-supported path defined by `runtime_type`
5. the bounded task is executed through that runtime-supported path

This is an adapted invocation.

It is not the same as native runtime support for the canonical agent name.

The adapter must remain honest about that difference.

---

## Optional MCP Invocation Rule

This system may also use:

- `optional-mcp`

`optional-mcp` means:

1. the canonical project agent is already resolved
2. the corresponding agent file is read
3. the intended runtime path is MCP-backed
4. operational execution may depend on current runtime support, provider compatibility, tool configuration, and live availability
5. the system should attempt bounded MCP usage only when it is materially relevant to the current authorized step
6. if MCP execution is unavailable or fails, invocation must fall back honestly rather than pretending operational success

`optional-mcp` does not mean guaranteed operational MCP support.

It means:

- the project recognizes the capability
- the runtime may or may not make that capability operational for the current session
- invocation must disclose what actually happened

---

## What the Adapter Extracts

During adapter invocation, the system should extract only the guidance needed to execute the current bounded task safely.

Useful extracted elements may include:

- agent identity
- core mission
- when to use
- working style
- deliverable shape
- important domain-specific caution
- must-not rules
- final boundary

The adapter must not dump the entire agent file into execution context blindly.

It must keep invocation:

- bounded
- relevant
- low-noise
- proportional to the active need

This layer is not a context dump mechanism.

The same boundedness rule applies to MCP-backed capability usage.

Invocation must retrieve only what is needed for the current authorized step.

---

## Runtime Injection Rule

Invocation must adapt the agent guidance into the runtime-supported path defined by `runtime_type`.

That means:

- the runtime executes through a supported native path
- the project agent's specialist behavior shapes that execution
- the invocation remains grounded in the resolved agent file

If the runtime supports only fixed native types, invocation may still be valid through adaptation, as long as the system remains honest about what happened.

Invocation must not claim native support when only adapted support occurred.

If the runtime path is MCP-backed, invocation must additionally confirm whether the MCP path was actually operational for the current session before claiming operational invocation success.

---

## MCP Evidence Usage Rule

When the runtime type is `mcp`, invocation must treat the MCP-backed capability as a bounded evidence or tool support path, not as workflow authority.

That means invocation must not use MCP availability to:

- widen workflow scope
- bypass the active skill
- bypass project state
- authorize implementation
- invent a missing technical baseline
- transform an optional capability into a mandatory prerequisite unless governance explicitly says so

When MCP-backed support is used successfully, invocation should keep the retrieval:

- narrow
- relevant
- proportionate
- aligned to the exact bounded task

When MCP-backed support is not operationally available, invocation must continue only within the limits allowed by governance, resolution status, and honest fallback behavior.

---

## Bounded Invocation Rule

Invocation must remain bounded to the current governed need.

It must not use the presence of an agent to:

- widen workflow scope
- reopen planning unnecessarily
- introduce unrelated side work
- perform broad autonomous exploration beyond the active need
- behave like a parallel controller

The invoked agent supports the bounded task already in progress.

It does not create a new workflow.

The same rule applies when the invoked capability is MCP-backed.

---

## Invocation Output Contract

A correct invocation should be able to report, at minimum:

- `canonical_agent`
- `agent_file`
- `runtime_type`
- `invocation_mode`
- whether native runtime invocation was attempted
- whether native runtime invocation succeeded
- whether the execution happened through adapted runtime invocation
- whether MCP-backed operational invocation was attempted
- whether MCP-backed operational invocation succeeded
- whether the result was only documentary/behavioral application rather than operational runtime bridging

This contract exists so the system can distinguish clearly between:

- **native invocation**
- **adapted invocation**
- **MCP-backed operational invocation**
- **documentary/manual application only**

That distinction must remain visible.

---

## Native Invocation Honesty Rule

If the runtime truly supports the resolved runtime path as an executable agent/subagent mechanism, invocation may report that native runtime invocation occurred.

If the runtime does not support that path as a real operational agent/subagent call, invocation must not pretend otherwise.

It must instead report honestly that:

- native invocation was not available or not attempted
- adapted execution occurred through a supported path
or
- MCP-backed invocation was attempted and either succeeded or failed
or
- the result remained documentary/behavioral only

This honesty rule is critical.

The system must never perform “adapter theater.”

The system must also never perform “MCP theater.”

---

## No Adapter Theater Rule

The system must not merely say:

- `runtime_type used: general`
- `invocation_mode: adapter`

without there being a real operational difference in how execution was prepared and conducted.

If invocation is only:

- reading the agent file
- manually following its guidance
- and producing output without any real runtime bridge behavior

then the system must report that honestly as:

- documentary/behavioral application
or equivalent truthful wording

It must not overclaim that an operational adapter exists when it does not.

Likewise, if invocation is only:

- recognizing an MCP-backed capability in the registry
- knowing the intended MCP target
- but not actually using an operational MCP path in the runtime

then the system must not claim MCP-backed operational invocation.

That must also be reported honestly as unconfirmed, unavailable, failed, or documentary-only depending on what actually happened.

---

## Invocation Failure Conditions

Invocation must fail clearly when any of the following happens:

- resolution did not succeed
- the agent file cannot be read
- the runtime type is unsupported in the current environment
- the invocation mode is unsupported
- the runtime path cannot actually be executed
- the injection path is unavailable
- the MCP-backed runtime path is unavailable for the current session
- the system cannot honestly claim adapted, native, or MCP-backed operational invocation

When invocation fails:

- do not pretend the agent was invoked
- do not silently degrade without disclosure
- report the failure explicitly
- identify whether the failure is:
  - resolution failure
  - runtime-path failure
  - adapter-path absence
  - MCP-path absence or failure
  - documentary-only fallback

Invocation failure must remain explicit and local.

---

## Explicit Fallback Rule

If real native, adapted, or MCP-backed operational invocation is not possible, the system may still choose to apply the agent guidance manually for the current bounded task.

However, that is a fallback.

It must be reported explicitly as such.

A valid fallback description may say, in substance:

- the canonical agent was resolved
- the runtime bridge was not operationally available
- the MCP-backed path was unavailable or unconfirmed
- the agent guidance was applied behaviorally/documentarily instead

This fallback must not be confused with operational adapter success.

This fallback must not be confused with successful MCP-backed runtime invocation.

Fallback is allowed only with honest disclosure.

---

## Invocation and Workflow Boundary

Invocation does not decide workflow progression.

Invocation does not:

- advance stages
- close lifecycle
- decide acceptance
- rewrite project state by itself
- replace skill authority

Invocation only supports execution inside the current governed boundary.

If the invoked agent output suggests follow-up action, workflow control still belongs to skills, gates, governance, and state.

This remains true for MCP-backed capabilities as well.

---

## Minimal Healthy Invocation Behavior

A healthy invocation flow looks like this:

1. receive resolved agent mapping
2. confirm the mapping is complete
3. read the referenced agent file
4. extract bounded relevant guidance
5. determine whether the declared runtime path is actually operational for the current session
6. apply that guidance through the runtime-supported path when available
7. otherwise fall back honestly within bounded governance limits
8. execute the bounded task
9. report honestly what kind of invocation actually occurred
10. stop

Nothing more.

---

## Healthy Success Levels

The invocation layer should distinguish clearly between these success levels:

### Level 1 — Native Invocation Confirmed
The runtime truly supported the needed execution path and the invocation happened natively.

### Level 2 — Adapted Invocation Operationally Confirmed
The runtime did not natively support the canonical agent name, but the system successfully used a real runtime-supported path with explicit adapter behavior.

### Level 3 — MCP-Backed Operational Invocation Confirmed
The canonical capability was resolved, the MCP-backed runtime path was actually operational in the current session, and the bounded task used that path successfully.

### Level 4 — Documentary / Behavioral Application Only
The canonical agent was resolved and its guidance was applied manually or behaviorally, but no real operational bridge was confirmed.

These levels must not be conflated.

---

## Recommended Reporting Language

The invocation layer should prefer explicit reporting such as:

- `Adapter operacional real confirmado`
- `MCP operacional real confirmado`
- `Registry resolvido, mas adapter operacional real não confirmado`
- `Registry resolvido, mas MCP operacional real não confirmado`
- `Agent resolvido apenas em nível documental/comportamental`

The exact wording may vary, but the meaning must remain explicit.

This reporting discipline is part of invocation correctness.

---

## Success Condition

Agent invocation is healthy when it is easy to answer:

- was the canonical agent successfully resolved?
- what runtime-supported path was used?
- did native runtime invocation actually happen?
- did adapted operational invocation actually happen?
- did MCP-backed operational invocation actually happen?
- or was the agent applied only behaviorally/documentarily?

If the system cannot answer those questions clearly, invocation is still ambiguous.

If it can answer them honestly and repeatably, invocation is operationally healthy.

---

## Final Rule

A correct invocation layer must answer:

- how was the resolved canonical agent actually executed?
- what runtime-supported path was used?
- was the invocation native, adapted, MCP-backed, or documentary-only?
- what specialist guidance was applied?

It must not answer:

- whether the workflow should advance
- whether the delivery is accepted
- whether governance should change
- whether lifecycle closure should happen

Its job is to execute resolved project agents through a runtime-usable path honestly, report what really happened, and stop.