---
name: structured-research
description: Execute a bounded, governed research traversal when external grounding is materially required before safe downstream product
---

# SKILL: structured-research

## Purpose

Execute a bounded, governed research traversal when external grounding is materially required before safe downstream product definition.

This skill exists to:

- operationalize the `structured-research` workflow as a real bounded step
- resolve and execute the canonical `research` specialist through the registry-backed runtime path
- produce a durable `Research` artifact in the canonical active location
- support explicit post-research evaluation of `experience-direction` and `growth-strategy`
- stop cleanly after research closure without collapsing into PRD creation

This skill is not PRD creation.

It is not generic browsing.

It is not decorative benchmarking.

It is not implementation work.

---

## When To Use

Use this skill when one or more of the following is true:

- `discover-missing-context` concluded that structured research is required
- the user explicitly requests market, benchmark, category, or external reference grounding
- the current scope depends materially on external players, conventions, patterns, or category signals
- `New Project` requires upstream research before PRD
- downstream product framing is unsafe without better evidence

For `New Project`, this skill should normally be the first upstream research traversal before PRD.

---

## When Not To Use

Do not use this skill when:

- foundational context is still too weak or too vague for bounded research
- the current step is already PRD creation, validation, task planning, handoff, implementation, or review
- research already materially completed for the same bounded need and the next governed move is elsewhere
- the user is asking for internal brainstorming without external grounding
- the work only needs design synthesis, growth synthesis, or PRD writing without new research need

This skill must not be used as a disguised shortcut into PRD.

---

## Preconditions

Before this skill begins, the following should already be true:

- the session is initialized
- the current work is inside the governed product-definition path or another research-compatible path
- foundational context is bounded enough to define the research question
- the research need is explicit
- the current governed step materially allows research traversal

If foundational context is still too weak to define what should be researched, return control to `discover-missing-context`.

---

## Governing Inputs

This skill should anchor on:

- `CLAUDE.md`
- `project/PROJECT_CONTEXT.md`
- `project/PROJECT_STATE.md`
- `system/workflows/structured-research.md`
- `system/agents/registry.yaml`
- `system/runtime/AGENT_ROUTING.md`
- `system/runtime/AGENT_EXECUTION_RULES.md`

If the active state or routing chain is inconsistent with safe research execution, this skill must stop honestly.

---

## Core Research Responsibility

A correct use of this skill must do all of the following:

1. confirm that structured research is materially required
2. define the bounded research target
3. resolve the canonical `research` agent through the registry
4. execute the research specialist through the correct runtime-supported path
5. load only the materially relevant research squad modules
6. produce bounded synthesis with evidence / inference / unknown separation
7. create a durable `Research` artifact in `project/research/active/` when required
8. explicitly evaluate whether `experience-direction` is required before PRD
9. explicitly evaluate whether `growth-strategy` is required before PRD
10. update `PROJECT_STATE.md` coherently
11. stop and return control

Nothing later.

---

## Research Question Framing Rule

This skill must begin by making the research question bounded enough to execute safely.

At minimum, it should clarify:

- what product or scope is being researched
- what decision this research should support
- what comparisons or benchmarks materially matter
- what should be excluded from the research pass
- what output shape is needed for downstream work

A research pass without a bounded decision question is not mature enough to begin.

---

## Canonical Specialist Resolution Rule

This skill must treat `research` as a canonical project agent, not as a native runtime agent type.

That means:

- first resolve `research` through `system/agents/registry.yaml`
- then load the referenced agent file
- then identify `runtime_type`
- then identify `invocation_mode`
- then compute `runtime_call_target`
- then execute through the runtime-supported path

This skill must never call the runtime directly with `research` unless the routed `runtime_call_target` is explicitly also `research`.

If the registry maps:

- canonical agent: `research`
- runtime type: `general`
- invocation mode: `adapter`
- runtime call target: `general`

then the runtime must be called with `general`, adapted by `research-agent` guidance.

Calling the runtime with `research` directly in that situation is an execution error.

---

## Adapter Invocation Rule

When `invocation_mode = adapter`, this skill must execute research using the following discipline:

1. preserve `research` as canonical identity
2. read `system/agents/core/research-agent.md`
3. extract only the guidance relevant to the current bounded research need
4. identify the relevant research squad modules
5. load only those relevant sub-guidance layers
6. call the runtime using `runtime_call_target`
7. execute the bounded research pass through that runtime-supported path
8. report honestly whether specialist contribution materially shaped the work

For the current OpenCode runtime, adapted execution through `runtime_call_target = general` should normally be performed by spawning a runtime-backed `task` using the routed target `general`.

That means this skill should not treat "general" as an abstract concept only.

It should hand off the bounded research pass through the concrete runtime-backed task mechanism when available.

In practice, for this environment, the expected adapted handoff path is:

- resolve canonical specialist: `research`
- load `research-agent.md`
- extract bounded research guidance
- select relevant research squad modules
- spawn a `task` using the routed runtime call target `general`
- pass the adapted research brief into that runtime-backed general task
- wait for the bounded research result
- only then continue with artifact/state closure

If this task-backed handoff does not visibly start, canonical specialist execution must not be treated as materially succeeded.

This skill must not pretend the runtime natively understands the project-specific canonical agent taxonomy.

---

## Runtime-Backed Subagent Handoff Rule

When the routed runtime call target is `general`, this skill must hand off the bounded research pass to a runtime-backed general subagent instead of continuing the research manually in the parent flow.

That handoff must happen only after:

- canonical `research` was resolved through the registry
- `research-agent.md` was read
- relevant research squad modules were selected
- bounded guidance was extracted for the current research need

The general subagent handoff must carry, at minimum:

- canonical specialist identity: `research`
- routed runtime call target: `general`
- invocation mode: `adapter`
- bounded research objective
- relevant benchmark targets
- relevant research squad modules
- output shape requirements
- artifact expectations
- post-research evaluation requirements
- stop rule

The parent flow must not continue with manual web research if this runtime-backed handoff has not been attempted first.

If the runtime-backed general subagent does not visibly start, this skill must stop and report failed specialist execution for the current pass.

For this environment, visible evidence of correct handoff normally includes a spawned `General Task` or equivalent runtime-backed child execution trace.

If no such task-backed child execution appears, the parent flow must not assume that adapted specialist execution actually occurred.

---

## Relevant Research Squad Usage

This skill uses the research squad in `system/agents/research/`.

It must not blindly read every sub-file.

It should select only the modules materially relevant to the current research target.

Typical guidance:

### Market positioning
- `framing.md`
- `market-landscape.md`
- `competitor-analysis.md`
- `differentiation-analysis.md`

### UX / interface decisions
- `framing.md`
- `journey-and-ux-signals.md`
- `benchmark-patterns.md`
- `insight-generation.md`

### Feature validation
- `framing.md`
- `journey-and-ux-signals.md`
- `competitor-analysis.md`
- `insight-generation.md`

### Technical approach
- `framing.md`
- `domain-operations.md`
- `benchmark-patterns.md`
- `decision-synthesis.md`

Start with `framing.md` for every pass.

---

## Bounded Extraction Rule

This skill must extract only what is necessary for the current research pass.

Useful extracted elements may include:

- mission
- when to use
- working style
- output structure
- caution rules
- evidence discipline
- must-not rules

It must not dump the entire agent or research squad into active context blindly.

If guidance was not materially extracted and applied, specialist execution must not be reported as strong.

---

## Execution Failure Rule

If any of the following occurs:

- registry lookup fails
- the referenced agent file is missing
- `runtime_type` is missing or unsupported
- `runtime_call_target` is missing or unsupported
- the runtime rejects the attempted call target
- invocation mode is inconsistent
- materially relevant guidance could not be applied

then canonical specialist execution fails.

In that situation, this skill must:

- report failed specialist execution honestly
- avoid narrating research as canonically complete
- avoid promoting `Next Expected Skill` to a later stage
- avoid treating fallback work as strong specialist success
- stop if the governed step materially depends on research specialist participation

If explicit adapted runtime invocation did not actually occur, this skill must not classify the outcome as materially succeeded.

Evidence of adapted runtime invocation should be visible in the execution trace, such as:
- registry-backed resolution completed
- runtime call target identified
- runtime called through the adapted supported target
- bounded specialist task execution actually started

If those signals are absent, the skill must treat the outcome as:
- failed specialist execution

or, at best:
- partial / behavioral specialist use

It must not self-upgrade manual web research into strong specialist execution.

---

## Parent Flow Non-Substitution Rule

The parent flow must not substitute itself for the adapted research subagent when runtime-backed execution is expected for the current pass.

That means the parent flow must not:

- continue with manual web search
- create the Research artifact
- update PROJECT_STATE.md
- report strong research completion

unless the runtime-backed general subagent actually started and returned control with bounded research output.

If the parent flow proceeds without that visible subagent execution, the outcome must not be treated as canonically completed research.

---

## Manual Fallback Classification Rule

If canonical specialist execution fails and the system continues with manual reasoning, web search, or generic runtime work, that continuation must not be classified as successful adapted specialist execution.

At best, it may be reported as:

- partial / behavioral specialist use

only when all of the following are true:

- routing succeeded
- the agent file was materially read
- relevant research squad guidance was materially loaded
- bounded specialist guidance still materially shaped the fallback work

Otherwise the outcome remains:

- failed specialist execution

In either case, manual fallback after failed execution must not authorize:

- canonical research closure
- optimistic state promotion
- PRD readiness claims based on strong specialist success

---

## Required Research Output Behavior

A correct research pass must produce explicit synthesis.

That synthesis should make clear, at minimum:

- what was investigated
- what sources or evidence types were used
- what was directly evidenced
- what remains inference
- what remains unknown
- what changed, narrowed, or was confirmed
- what downstream implications now exist for product definition

Raw search findings are not enough.

Research is not mature until synthesis exists.

---

## Canonical Artifact Rule

For `New Project`, this skill must create a durable `Research` artifact before PRD.

The artifact must be created in:

`project/research/active/`

It must not initially be created in:

- `project/`
- `project/research/`
- another artifact family
- `done/`
- `archived/`

If the artifact is not materialized canonically, research closure remains incomplete.

---

## Post-Research Evaluation Rule

Completion of the research pass does not automatically make PRD the next allowed step.

After research, this skill must explicitly evaluate:

- whether `experience-direction` is materially required before PRD
- whether `growth-strategy` is materially required before PRD

For `New Project`, and especially for user-facing products, this skill should normally keep PRD blocked when:

- surface quality materially shapes product framing
- template or interface expectations materially matter
- emotional or trust-sensitive interaction matters
- positioning, messaging, monetization, or discoverability materially shape the safe PRD boundary

In those cases, `growth-strategy` must not be downgraded to “can wait” merely because the MVP is still forming.

A correct post-research result must be able to state one of the following:

- no materially blocking downstream workflow-domain work remains, so `define-prd` is next
- `experience-direction` is required before PRD
- `growth-strategy` is required before PRD
- both `experience-direction` and `growth-strategy` are required before PRD

If either domain remains materially required, PRD readiness remains blocked.

---

## State Closure Rule

This skill must update `PROJECT_STATE.md` only when research closure is honest and coherent.

A coherent post-research state should reflect:

- `Current Phase = research`
- the active research artifact in `project/research/active/`
- the real research completion status for the current pass
- whether `experience-direction` is required
- whether `growth-strategy` is required
- the correct next governed step
- explicit return of control

This skill must not update state as though research materially completed when:

- specialist execution failed
- artifact creation failed
- post-research evaluation was not completed
- lifecycle closure remains incomplete

---

## Stop Rule

This skill is bounded.

When the research pass reaches an honest closure point, it must:

- finalize research synthesis
- materialize the durable `Research` artifact when required
- update state coherently when valid
- identify the single next governed move
- stop

It must not:

- create the PRD in the same turn
- narrate PRD creation as underway
- compress `research -> experience-direction`, `research -> growth-strategy`, or `research -> prd` into one continuous move
- use favorable research findings as permission to auto-open later stages

---

## Output Contract

A correct completion from this skill should be able to report:

- Research Need: confirmed
- Canonical Specialist: `research`
- Registry Resolution: succeeded / failed
- Agent File Loaded: yes / no
- Runtime Type: [value]
- Invocation Mode: [value]
- Runtime Call Target: [value]
- Relevant Research Modules Loaded: [list]
- Specialist Outcome: materially succeeded / partial / failed / unavailable
- Research Artifact: [path or not created]
- Experience-Direction Evaluation: required / not required
- Growth-Strategy Evaluation: required / not required
- PRD Readiness: blocked / unblocked
- Next Allowed Step: [single step]
- Stop: yes

This skill must not overclaim strong specialist execution if those facts cannot be stated honestly.

---

## Failure Handling

If canonical `research` routing or execution fails:

- stop and report failed specialist execution
- do not narrate research as canonically complete
- do not promote `Next Expected Skill` to `define-prd`
- do not promote `Next Expected Skill` to a later stage based on failed specialist execution
- do not treat a provisional artifact as proof of valid closure
- do not update `PROJECT_STATE.md` as though the research pass materially completed

If provisional findings already exist, they may be described as provisional only.

They must not be treated as a valid canonical research closure.

This skill must not replace failed adapted specialist execution with self-executed manual web research while still reporting canonical research success.

If the runtime-backed research execution does not visibly start, the skill must stop and report the failure instead of completing the research pass by itself.

---

## Boundaries

This skill must not:

- perform discovery in place of `discover-missing-context`
- create the PRD
- create validation artifacts
- plan tasks
- prepare handoff
- authorize implementation
- perform implementation work
- act as governance
- act as live state by itself
- treat research specialist execution as authorization to advance stages automatically

---

## Final Rule

A correct `structured-research` skill must make the research workflow operationally real.

That means:

- research need is explicit
- canonical `research` is resolved through the registry
- execution happens through the correct runtime-supported target
- relevant research guidance materially shapes the pass
- a durable `Research` artifact exists when required
- post-research evaluation is explicit
- state closure is honest
- the skill stops before PRD