# AGENT_ACTIVATION_PROMPTS

## Purpose

This file defines how the orchestrator activates specialists.

Specialist activation must be:

- explicit
- bounded
- scenario-aware
- phase-aware
- evidence-oriented
- recorded in the relevant task, handoff, ledger, or review

Do not activate specialists for ceremony.

---

## Registry Rule

Before activation, resolve the specialist through:

`system/agents/registry.yaml`

Use the registry to identify:

- canonical specialist name
- specialist file
- runtime
- OpenCode agent name
- invocation mode

If the specialist is not in the registry, activation fails.

---

## Adapter Mode Is First-Class

In this repository, `runtime_type: general` with `invocation_mode: adapter` is a valid specialist execution strategy.

It will not show a native subagent thinking panel. That is expected.

Adapter mode still must be material: read the specialist file, extract bounded guidance, apply it to architecture or implementation decisions, and record what changed. If the executor cannot name what changed, the specialist was not truly activated.
## Native-Or-Adapted Runtime Rule

When `registry.yaml` declares `runtime_type: opencode` and `invocation_mode: native-or-adapted`, use the native OpenCode subagent first.

Runtime procedure:

1. Read `system/agents/registry.yaml`.
2. Resolve the specialist block, for example `frontend`.
3. If `opencode_agent: frontend` exists and `.opencode/agents/frontend.md` exists, invoke the native subagent with `@frontend` using the Standard Activation Prompt shape below.
4. Use adapter fallback only if the native agent is unavailable or invocation fails.
5. Record the result as `native-specialist-execution` when the subagent returns a material result.

Do not merely write `@frontend` in prose. It must be invoked as an OpenCode subagent/task so the runtime creates a child agent execution.
## OpenCode Invocation

Native OpenCode invocation is allowed only when the registry explicitly provides a native OpenCode target and the corresponding agent definition exists in the configured native agent directory.

Do not infer native invocation from the canonical specialist name.

If `registry.yaml` says `invocation_mode: adapter`, do not call `@<specialist>`. Use adapted activation by reading the specialist file.

If `registry.yaml` says `invocation_mode: native-or-adapted`, native invocation is allowed only after confirming the OpenCode agent is registered. Otherwise use adapted activation.

When native OpenCode invocation is truly available, invoke it with:

`@<opencode_agent>`

When native OpenCode invocation is not available, use adapted activation:

1. read the specialist file
2. extract only guidance relevant to the bounded objective
3. apply it through the current runtime path
4. record the result strength in the ledger

Do not describe adapted activation as native execution.

## Artifact Persistence Authority

Specialists may shape the current step, but final Discovery, Synthesis, and Planning artifacts must be materialized by the orchestrator or current executor through the workspace write path.

Analytical or read-only specialists do not own final phase artifact persistence, even when they materially changed the artifact content.

If writing is unavailable, report:

```text
Artifact path: pending - write unavailable
```

Stop instead of reconstructing the artifact through ad hoc shell, heredoc, sed, or inline scripting fallbacks.

## Specialist Failure Stop Rule

If native invocation fails, adapted invocation fails, specialist output is unusable, or artifact persistence fails after specialist contribution, stop and record the failure honestly.

Do not blur a failed activation into generic reasoning or pretend the specialist completed the artifact.


---


## Material Contribution Requirement

Every activation must produce a domain contribution that can be pointed to later.

The orchestrator must record:

- what specialist was activated
- whether activation was native or adapted
- what source files/artifacts the specialist inspected
- what changed because of the specialist
- what evidence supports the claim

If the specialist only restated general doctrine, activation is not material. Record it as `behavioral-specialist-guidance` or `specialist-not-needed`, not full execution.

For implementation tasks, the owner specialist must either:

- produce implementation guidance before files change
- execute through a native/adapted path
- fail/unavailable and stop or downgrade with explicit justification

Do not let the orchestrator silently stand in for the owner specialist on non-trivial work.

## Standard Activation Prompt

Use this shape for any specialist:

```text
Activate specialist: <canonical_specialist>
Runtime target: <opencode_agent or adapted>

Scenario:
<new-product | existing-feature | bugfix | recovery>

Phase:
<discovery | synthesis | planning | build-review>

Why now:
<one or two sentences explaining why this specialist materially improves the current step>

Bounded objective:
<the specific contribution needed>

Current surface:
<artifact, task, handoff, code surface, review, or decision being supported>

Relevant context:
<only the minimum context needed>

In scope:
- <what the specialist should focus on>

Out of scope:
- <what the specialist must not solve or redefine>

Expected output:
<recommendation | critique | implementation guidance | evidence review | risk analysis | task shaping>

Evidence discipline:
- distinguish direct evidence from inference when relevant
- surface uncertainty
- do not claim completion beyond this bounded objective

Success condition:
<what makes this activation useful>
```

---

## Specialist Output Shape

Specialist output should usually include:

```markdown
## Specialist Result

Specialist: [name]
Result Type: [recommendation | critique | guidance | review | risk analysis]
Material Contribution: [what changed because this specialist was used]
Evidence: [direct evidence / inference / not applicable]
Risks: [risks or none]
Next Suggested Action: [bounded next action]
```

For implementation or review, the output must be usable by the ledger or review report.

---

## Activation Decision Guide

Use specialists when:

- the current step depends on domain judgment
- the task is risky or non-trivial
- a gate needs sharper scrutiny
- implementation quality would materially improve
- evidence quality would materially improve

Do not use specialists when:

- the step is simple and clear
- the specialist would duplicate the orchestrator
- no output would change the next action
- activation would add noise

---

## Common Specialist Mapping

| Need | Specialist |
|---|---|
| external research, benchmark, references | `research` |
| user behavior, journey, usability | `ux-research` |
| positioning, conversion, adoption | `growth` |
| product/UX/technical structure | `architectux` |
| scope slicing and priority | `prioritizer` |
| sequencing and delivery coordination | `project-manager` |
| frontend implementation | `frontend` |
| screen-level UI craft or visible-state review | `ui` |
| DESIGN.md, tokens, component standards, or reusable visual language | `design-system` |
| animation, gesture, interaction timing, or reduced-motion behavior | `motion` |
| backend implementation | `backend` |
| persistence and data modeling | `database` |
| trust boundary and exposure risk | `security` |
| task-level verification | `evidence-qa` |
| anti-fake-progress review | `reality-checker` |

---

## Anti-Patterns

Avoid:

- activating many specialists because they exist
- dumping broad context into a specialist
- asking a specialist to restate doctrine
- treating specialist output as phase completion
- claiming specialist execution when only the name was mentioned
- hiding failed specialist activation behind generic reasoning

---

## Final Rule

A specialist activation is successful only if it materially improves the bounded next move and can be recorded honestly.


