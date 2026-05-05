# LEDGER ENTRY CONTRACT

## Purpose

A ledger entry records execution truth.

It answers:

**What actually happened during this task?**

The ledger is not a plan, review, or success claim.

It is the factual bridge between task intent and review.

---

## Required Fields

Every ledger entry must include:

- `Ledger ID`
- `Task ID`
- `Scenario`
- `Execution Date`
- `Executor`
- `Owner Specialist Required`
- `Owner Specialist Invoked`
- `Supporting Specialists Invoked`
- `Supporting Specialist Status`
- `Runtime Target Used`
- `Specialist Result Strength`
- `Specialist Material Contribution`
- `Architecture Preflight`
- `Standards Applied`
- `Documentation Preflight`
- `Inputs Used`
- `Files Touched`
- `Commands Run`
- `Tooling Deviations`
- `Evidence Produced`
- `Done Criteria Status`
- `Scope Confirmation`
- `Drift Warnings`
- `Result`
- `Review Handoff`

---

## Supporting Specialist Status

Every supporting specialist declared by the task must be accounted for, even when not invoked.

Use one status per specialist:

- `invoked-native`
- `invoked-adapted`
- `waived-with-reason`
- `not-needed-after-owner-analysis`
- `unavailable`
- `failed`

A supporting specialist may not disappear from the ledger. If task execution claims implementation for an area owned by a supporting specialist, the status should normally be `invoked-native` or `invoked-adapted`; otherwise the waiver must explain why review can still trust the result.
## Specialist Material Contribution

Describe the concrete contribution from the owner specialist and any supporting specialists.

For adapted specialist execution, this must cite the specialist file path that was read, such as `system/agents/frontend.md`, and explain what changed because of that specialist guidance.

A ledger may not claim `implemented` for a non-trivial task with an owner specialist unless this section contains material evidence. Naming a specialist without file/path evidence or contribution detail is not enough.
## Artifact Persistence Honesty

If a read-only or analytical specialist contributed to Discovery, Synthesis, or Planning, the ledger must distinguish between:

- specialist contribution
- final artifact persistence by the orchestrator or current executor

Do not imply that a read-only specialist authored or persisted the final artifact unless the runtime record explicitly shows that it owned the write path.



## Specialist Result Strength

Use one:

- `native-specialist-execution`
- `adapted-specialist-execution`
- `behavioral-specialist-guidance`
- `specialist-not-needed`
- `specialist-unavailable`
- `specialist-failed`

### Definitions

`native-specialist-execution`

The runtime directly executed the relevant specialist agent.

`adapted-specialist-execution`

The specialist file was read and materially applied through a supported runtime path.

`behavioral-specialist-guidance`

Some specialist guidance informed the work, but execution was not strong enough to claim full adapted specialist execution.

`specialist-not-needed`

The task was small and clear enough for direct execution, and this was explicit before execution.

`specialist-unavailable`

The specialist was required or useful, but could not be resolved or invoked.

`specialist-failed`

Specialist execution was attempted but did not materially succeed.

---

## Result Values

Use one:

- `implemented`: all done criteria were satisfied and required evidence exists.
- `partially-implemented`: some work was completed, but at least one done criterion, evidence requirement, or required specialist condition remains unmet.
- `blocked`
- `stopped-scope-risk`
- `stopped-missing-input`
- `stopped-specialist-failure`
- `stopped-recovery-required`

---


## Scope Confirmation

Use one:

- `within-task-boundary`
- `boundary-approached-not-crossed`
- `scope-expanded-with-approval`
- `scope-risk-stopped`
- `scope-unclear-stopped`

If scope expanded, explain why and where approval came from.

---
## External Research Evidence In Ledgers

When execution or discovery uses external research, the ledger or phase artifact must distinguish:

- native/adapted `research` specialist execution
- direct web/search tool use by the orchestrator
- unsourced inference

External research evidence must include source URLs or durable source identifiers. Do not record market/pricing/benchmark claims as evidence if only the query, summary, or model memory is available.

## Architecture Preflight

Record the architecture plan that was used before code changes:

- standards read
- specialist files read or invoked
- frontend/backend/database/design layers touched
- allowed architecture shape
- prohibited anti-patterns for this task

If this section is missing for a code task, the ledger cannot support review.

## Specialist Standards Matrix

When a task declares an owner or supporting specialist, its `Standards Preflight` must include the specialist file plus the required standards for that specialist. The ledger must later show those same standards in `Standards Applied`, `Architecture Preflight`, or `Specialist Material Contribution`.

Minimum matrix:

| Specialist | Required Standards |
|---|---|
| `design-system` | `system/agents/design-system.md`, `system/design/DESIGN_SYSTEM_STANDARDS.md`, `system/design/DESIGN_MD_TEMPLATE.md` |
| `ui` | `system/agents/ui.md`, `system/design/DESIGN_SYSTEM_STANDARDS.md` |
| `motion` | `system/agents/motion.md`, `system/design/DESIGN_SYSTEM_STANDARDS.md` |
| `frontend` | `system/agents/frontend.md`, `system/engineering/CODING_STANDARDS.md`, `system/engineering/ARCHITECTURE_CONTRACTS.md` |
| `backend` | `system/agents/backend.md`, `system/engineering/CODING_STANDARDS.md`, `system/engineering/ARCHITECTURE_CONTRACTS.md` |
| `database` | `system/agents/database.md`, `system/engineering/CODING_STANDARDS.md`, `system/engineering/ARCHITECTURE_CONTRACTS.md` |
| `security` | `system/agents/security.md`, `system/engineering/CODING_STANDARDS.md`, `system/engineering/ARCHITECTURE_CONTRACTS.md` |
| `research` | `system/agents/research.md`, `system/research/DISCOVERY_STANDARDS.md` |
| `ux-research` | `system/agents/ux-research.md`, `system/research/DISCOVERY_STANDARDS.md` |

This matrix is enforced by `ai-dev-system/scripts/validate-ai-dev.mjs`.
## Standards Applied

Name the concrete standards that shaped the implementation. Do not write generic claims such as `followed best practices`.
## Documentation Preflight

Record the documentation actually consulted before implementation when modern framework/library/API behavior is touched.

Acceptable evidence includes Context7 references, official documentation URLs/names, local docs paths, or an explicit waiver. Do not write `known from memory` as documentation evidence.
## Template

```markdown
# LEDGER: [Task ID] - [Short Title]

## Ledger ID
LEDGER-[Task ID]-[date-or-sequence]

## Task ID
[TASK-###]

## Scenario
[new-product | existing-feature | bugfix | recovery]

## Execution Date
[YYYY-MM-DD]

## Executor
[runtime / agent / human]

## Owner Specialist Required
[specialist name or none]

## Owner Specialist Invoked
[yes | no]

## Supporting Specialists Invoked
- [specialist name or none]

## Supporting Specialist Status
- [specialist]: [invoked-native | invoked-adapted | waived-with-reason | not-needed-after-owner-analysis | unavailable | failed] - [evidence or reason]

## Runtime Target Used
[opencode agent name / adapted runtime target / direct]

## Specialist Material Contribution
- [specialist file read/invoked, for example system/agents/frontend.md]
- [material decision or implementation change produced by specialist]

## Specialist Result Strength
[native-specialist-execution | adapted-specialist-execution | behavioral-specialist-guidance | specialist-not-needed | specialist-unavailable | specialist-failed]


## Architecture Preflight
- [standards read]
- [specialist files read/invoked]
- [layers touched]
- [anti-patterns blocked]

## Standards Applied
- [specific standards applied]

## Documentation Preflight
- [Context7 / official docs / local docs / explicit waiver]

## Inputs Used
- [artifact/file/decision]

## Files Touched
- [file path or none]

## Commands Run
- [command or none]

## Tooling Deviations
[package manager/script/tool substitution or none]

## Evidence Produced
- [evidence item]

## Done Criteria Status
- [ ] [done criterion] - [pass | fail | partial | not-inspected]

## Scope Confirmation
[within-task-boundary | boundary-approached-not-crossed | scope-expanded-with-approval | scope-risk-stopped | scope-unclear-stopped]

## Drift Warnings
- [warning or none]

## Result
[implemented | partially-implemented | blocked | stopped-scope-risk | stopped-missing-input | stopped-specialist-failure | stopped-recovery-required]

## Review Handoff
[path to review handoff or next review instruction]
```

---

## Validity Check

A ledger is valid only when:

- it names the task
- it states specialist truth
- if an owner specialist is required, it includes Specialist Material Contribution with the specialist file path and concrete contribution
- code tasks include architecture preflight and standards applied
- it lists files touched or says none
- it lists evidence produced
- it classifies scope
- it states a result

If implementation happened without a valid ledger, route to Recovery or create a reconstruction ledger before review.

A ledger must not use `implemented` when any done criterion is unmet, evidence is missing, or a required owner specialist was not invoked without an approved downgrade.





## Final Consistency Rule

A ledger must contain exactly one final `Result` section and one final result value.

Do not leave old and new result lines in the same ledger after retry or repair.

Before review, re-read the ledger and verify:

- every done criterion has a status
- `implemented` is used only when every done criterion is pass and required evidence exists
- tooling deviations are recorded
- specialist claims match what was actually read, invoked, waived, or executed
- every task-declared supporting specialist has a status and evidence/reason
- documentation claims are backed by Context7, official docs, local docs, or an explicit waiver
- no contradictory result statements remain


