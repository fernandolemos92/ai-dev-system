# PROJECT_STATE_TEMPLATE

This template defines the canonical structure for `project/PROJECT_STATE.md`.

`PROJECT_STATE.md` is the live operational state of the system.

It must contain real current values, not placeholders used as if they were real state.

This template exists to show how live operational state should be recorded.

It must describe one coherent operational moment.

------------------------------------------------------------
OPERATIONAL SNAPSHOT
------------------------------------------------------------

Current Phase: [context | prd | validation | tasks | handoff | implementation | review]

Overall Status: [active | blocked | paused | completed]

Current Focus: [short description of the current operational focus]

Last Updated: [YYYY-MM-DD] [HH:MM]

------------------------------------------------------------
ACTIVE ARTIFACTS
------------------------------------------------------------

Active PRD: [PRD-id | none]

Active Validation: [VALIDATION-id | none]

Active Task: [TASK-id | none]

Pending Tasks: [TASK-id, TASK-id | none]

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

Primary Objective: [one sentence describing the current bounded operational goal]

Success Condition: [one sentence describing what must be true for the current objective to be considered complete]

------------------------------------------------------------
CURRENT BLOCKERS
------------------------------------------------------------

- [blocker or "none"]

------------------------------------------------------------
NEXT STEP
------------------------------------------------------------

Next Allowed Action: [one bounded next action]

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
- Record one coherent operational moment only.
- Update the file when a governed step closes coherently or when the live operational situation materially changes.
- Do not treat partial, contradictory, or premature state updates as valid closure.
- Use `Active Auxiliary Gates` only when a gate is actually active.
- Use `Pending Tasks` to distinguish queued task artifacts from the single current active task.
- During `review`, keep `Active Task` and `Active Handoff` active until closure is explicitly accepted.
- Do not promote task or handoff directly from `implementation` to `done` without first reflecting the governed `review` stage.
- Keep `State Notes` short and operational.
- Record live operational state only.
- Do not use this template as a substitute for governance, architecture, memory, or project philosophy.