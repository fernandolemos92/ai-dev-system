# AGENT EXECUTION RULES

This document defines how the system executes a successfully routed canonical project agent through a runtime-supported path.

It exists to bridge the gap between:

- a routed canonical project agent
- the actual runtime execution path available in the environment
- the bounded specialist behavior defined in the agent file

This layer is operational.

It is not governance.

It is not live project state.

It is not a skill.

---

## Purpose

Agent execution answers one bounded question:

**How does the system honestly execute a routed canonical project agent through the current runtime?**

Execution exists to make specialization:

- usable
- explicit
- bounded
- honest about runtime reality
- fail-closed rather than overclaimed when execution does not actually succeed

---

## Execution Preconditions

Execution may begin only after successful routing.

At minimum, execution requires:

- `canonical_agent`
- `agent_file`
- `runtime_type`
- `invocation_mode`
- `runtime_call_target`

If these elements are missing, execution must not proceed as if routing had succeeded.

If routing failed, execution must not “try something close enough.”

---

## Core Execution Principle

Execution must preserve a strict distinction between:

- canonical agent identity
- routed runtime type
- actual runtime call target
- adapted specialist guidance
- real execution outcome

These are related, but they are not interchangeable.

A correct execution layer must never collapse:

- routed canonical identity into raw runtime target
- runtime target into proof of specialist contribution
- an attempted call into a successful specialist execution

---

## What Execution Must Do

A correct execution layer must:

1. confirm that routing succeeded
2. read the routed agent file as the behavioral source of truth
3. identify the runtime-supported path from `runtime_type`
4. identify the exact runtime call target from `runtime_call_target`
5. interpret the declared `invocation_mode`
6. adapt the agent guidance to the active bounded need
7. execute only what is relevant to the current governed step
8. report honestly what kind of specialist use actually happened

---

## Runtime Call Target Discipline

Execution must call the runtime using the routed `runtime_call_target`, not the canonical agent name, unless both are explicitly the same.

Example:

- canonical agent: `research`
- runtime type: `general`
- runtime call target: `general`

In that case, the runtime must be called with `general`.

Calling the runtime with `research` in that case is an execution error, not a harmless variant.

If the runtime rejects the provided target, execution fails.

The system must not silently retry with another target unless an explicit governed retry/fallback policy exists.

---

## Adapter Execution Rule

The main supported execution mode in this system is:

- `adapter`

`adapter` means:

1. the canonical agent was already routed successfully
2. the corresponding agent file is read
3. only the guidance relevant to the current bounded need is extracted
4. that guidance is applied through the routed runtime call target
5. the bounded work is executed without pretending that the runtime natively understands the project-specific agent taxonomy

This is adapted specialist execution.

It is not the same as native runtime support for the canonical agent name.

It is also not the same as generic execution with no specialist adaptation.

---

## Adapter Invocation Recipe

When `invocation_mode = adapter`, execution must follow this exact pattern:

1. keep `canonical_agent` only as project identity
2. read the routed `agent_file`
3. extract bounded guidance relevant to the current governed need
4. call the runtime using `runtime_call_target`
5. execute the bounded work through that runtime-supported path
6. report whether the adapted guidance materially shaped the work

For adapted execution, the runtime call must never be made with the canonical agent name unless the routed `runtime_call_target` is exactly the same.

Example:

- canonical agent: `research`
- agent file: `system/agents/core/research-agent.md`
- runtime call target: `general`

Correct:
- call `general`
- apply research-agent guidance through that path

Incorrect:
- call `research` directly
- let the runtime reject the target
- continue generically while narrating specialist success

---

## Bounded Extraction Rule

During adapted execution, the system should extract only what is necessary for the current bounded task.

Useful extracted elements may include:

- agent mission
- when to use
- working style
- deliverable shape
- domain-specific caution
- must-not rules

The system must not dump the entire agent file into the active context blindly.

The system must not claim “specialist execution” if no materially relevant guidance was actually extracted and applied.

If the agent file is materially empty, placeholder-only, structurally thin, or too generic to shape the bounded need in a meaningful way, extraction is not materially sufficient.

In that situation, execution must not be reported as strong adapted specialist execution.

The outcome must be downgraded conservatively to either:

- partial / behavioral specialist use

or

- failed specialist execution

depending on whether any bounded specialist guidance actually shaped the work.

---

## Material Specialist Application Rule

For specialist execution to count as materially applied, all of the following should be true:

- canonical routing succeeded
- the routed agent file was actually read
- the routed agent file contained materially sufficient guidance for the bounded need
- bounded specialist guidance relevant to the current need was actually extracted
- the runtime call used the routed runtime call target
- the resulting bounded work was materially shaped by that extracted guidance

If one or more of these conditions is missing, the system must downgrade its claim accordingly.

Examples:

### Valid strong claim
- canonical agent resolved
- agent file loaded
- adapted guidance applied through the supported runtime path
- specialist contribution materially affected the bounded work

### Weaker claim
- canonical agent resolved
- agent file loaded
- some behavioral guidance informed the step
- but rich specialist execution could not be fully confirmed

### Invalid claim
- attempted to call the canonical agent name directly
- runtime rejected the call
- then generic work happened
- and the system narrated that the specialist executed successfully

That last case is not acceptable.

---

## Fail-Closed Execution Rule

If execution encounters any of the following:

- invalid runtime call target
- runtime rejection of the call target
- missing agent file
- invocation mode inconsistency
- inability to apply materially relevant extracted guidance

then execution must fail closed.

That means:

- do not narrate specialist execution as successful
- do not silently downgrade into undocumented generic execution
- do not treat a failed attempt as “good enough specialist participation”
- report the failure clearly and locally

If the governed step materially depends on that specialist, the governed step must stop honestly.

---

## No Silent Retry / Fallback Rule

The system must not hide execution failure behind silent retry behavior.

Examples of invalid behavior include:

- trying `research`, getting an invalid runtime error, then switching to `general` without explicit routed adaptation
- failing to execute a design specialist, then doing plain generic reasoning while narrating that the specialist contributed
- trying multiple runtime targets until something works, without surfacing that the original routed execution failed

If explicit retry behavior is ever allowed in the future, it must be:

- defined by policy
- bounded
- surfaced honestly
- distinguishable from first-pass successful execution

Until then, failed execution remains failed execution.

---

## Manual Fallback Classification Rule

If canonical specialist execution fails and the system continues with manual reasoning, web search, or generic runtime work, that continuation must not be classified as successful adapted specialist execution.

At best, such work may be reported as:

- partial / behavioral specialist use

only when:
- routing succeeded
- the agent file was materially read
- bounded specialist guidance still materially shaped the fallback work

Otherwise the outcome must remain:

- failed specialist execution

In either case, manual fallback after execution failure must not authorize:

- workflow closure as if specialist execution succeeded
- state promotion to the next stage by specialist-success logic
- PRD readiness claims that depended on the failed specialist

---

## Honesty About What Happened

When specialist support is used, the system should be able to state clearly:

- canonical agent resolved
- agent file used
- runtime-supported route used
- runtime call target used
- invocation mode used
- whether the contribution was materially applied
- whether the contribution was only documentary / behavioral guidance
- whether execution actually failed

If routing succeeded but runtime execution failed, the system must not overclaim execution richness.

If execution succeeded only partially, the system must say so conservatively.

---

## Execution Outcome Categories

A correct execution layer should be able to classify the result into one of these outcome types:

### 1. Successful Adapted Specialist Execution
Use when:

- routing succeeded
- runtime call target was valid
- agent guidance was materially applied
- bounded specialist contribution genuinely shaped the work

### 2. Partial / Behavioral Specialist Use
Use when:

- routing succeeded
- agent file was read
- some specialist guidance informed the work
- but full operational specialist execution could not be strongly confirmed

This should be described conservatively.

### 3. Failed Specialist Execution
Use when:

- routing failed
- runtime call failed
- wrong runtime target was used
- agent guidance could not be materially applied
- the step continued only generically or had to stop

This must not be narrated as specialist success.

---

## Boundary Rule

Agent execution remains subordinate to:

- governance
- project state
- active workflows and policies
- the controlling skill
- the active bounded artifact or task

Agents do not become workflow controllers through execution.

Successful specialist execution does not authorize:

- stage advancement
- workflow completion
- bypass of required artifacts
- same-turn continuation into later governed steps

---

## Reporting Rule for Workflow-Critical Specialists

When a workflow materially requires specialist participation, execution reporting should make the outcome explicit enough for downstream honesty.

A correct report should be able to say one of the following:

- specialist participation materially succeeded
- specialist participation only partially succeeded
- specialist participation failed and the workflow remains blocked
- specialist participation was not actually needed for this bounded step

The system must not compress these into the same narrative.

---

## Must Not

Do not:

- pretend adapted execution is native runtime support
- widen scope beyond the controlling skill
- treat agent execution as authorization to advance stages
- claim specialist execution happened when only naming or routing succeeded
- call the runtime with the canonical agent name when routing mapped execution to another target
- narrate a failed runtime call as if specialist participation still materially occurred
- silently fallback from failed specialist execution into undocumented generic work
- convert “agent was considered” into “agent executed successfully”

---

## Final Rule

Agent execution exists to make specialization useful without lying about how the runtime actually behaved.

If specialist execution did not actually succeed, the system must say so — or stop.