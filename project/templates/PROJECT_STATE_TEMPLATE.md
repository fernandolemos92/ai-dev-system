# PROJECT_STATE_TEMPLATE

This template defines the canonical structure for `project/PROJECT_STATE.md`.

`PROJECT_STATE.md` is the live operational state of the system.
It must contain real current values, not placeholders used as if they were real state.

This template exists to show how live operational state should be recorded.

------------------------------------------------------------
OPERATIONAL SNAPSHOT
------------------------------------------------------------

Current Phase: [context | prd | validation | tasks | handoff | implementation | review]

Overall Status: [active | blocked | paused | completed]

Current Focus: [short description of the current operational focus]

Last Updated: [YYYY-MM-DD HH:MM]

------------------------------------------------------------
ACTIVE ARTIFACTS
------------------------------------------------------------

Active PRD: [PRD-id | none]

Active Validation: [VALIDATION-id | none]

Active Task: [TASK-id | none]

Active Handoff: [HANDOFF-id | none]

------------------------------------------------------------
OPERATIONAL FLAGS
------------------------------------------------------------

Execution Unlocked: [yes | no]

Active Auxiliary Gates: [none | check-scope-alignment | assess-security-boundary | multiple]

Next Expected Skill: [skill-name | none]

------------------------------------------------------------
CURRENT OBJECTIVE
------------------------------------------------------------

Primary Objective:
[one sentence describing the current bounded operational goal]

Success Condition:
[one sentence describing what must be true for the current objective to be considered complete]

------------------------------------------------------------
CURRENT BLOCKERS
------------------------------------------------------------

- [blocker or "none"]
- [blocker or "none"]

------------------------------------------------------------
NEXT STEP
------------------------------------------------------------

Next Allowed Action:
[one bounded next action]

------------------------------------------------------------
STATE NOTES
------------------------------------------------------------

- [short factual operational note]
- [short factual operational note]

------------------------------------------------------------
NOTES FOR MAINTAINING THE LIVE STATE
------------------------------------------------------------

- Treat `project/PROJECT_STATE.md` as the source of truth for current operational state.
- Keep entries concise, factual, and current.
- Update the file when a meaningful workflow transition happens.
- Record live operational state only.
- Use `Active Auxiliary Gates` only when a gate is actually active.
- Keep `State Notes` short and operational.
- Do not use this template as a substitute for governance, architecture, memory, or project philosophy.