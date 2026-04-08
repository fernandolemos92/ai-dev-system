# PROJECT_STATE_TEMPLATE

This template defines the canonical structure for `project/PROJECT_STATE.md`.

`PROJECT_STATE.md` is the live operational state of the system.

It must contain real current values, not placeholders used as if they were real state.

This template exists to show how live operational state should be recorded.

It must describe one coherent operational moment.

------------------------------------------------------------
OPERATIONAL SNAPSHOT
------------------------------------------------------------

Current Phase: [context | research | experience | strategy | prd | design | validation | tasks | handoff | execution-unlock | implementation | review]

Overall Status: [active | blocked | paused | completed]

Current Focus: [short description of the current operational focus]

Last Updated: [YYYY-MM-DD] [HH:MM]

------------------------------------------------------------
ACTIVE ARTIFACTS
------------------------------------------------------------

Active Research: [canonical path | none]

Active Experience: [canonical path | none]

Active Strategy: [canonical path | none]

Active PRD: [canonical path | none]

Active Design Foundation: [canonical path | none]

Active Validation: [canonical path | none]

Active Task: [canonical path | none]

Pending Tasks: [canonical path, canonical path | none]

Active Handoff: [canonical path | none]

------------------------------------------------------------
OPERATIONAL FLAGS
------------------------------------------------------------

Execution Unlocked: [yes | no]

Lifecycle Closure Status: [coherent | blocked-ready | partial-closure | inconsistent]

Technical Baseline Status: [open | governed | not-needed]

Implementation Baseline Status: [missing | bootstrap-required | present | not-needed]

Active Auxiliary Gates: [none | check-scope-alignment | check-security-boundary | check-state-coherence | audit-artifact-lifecycle | check-motion-need | multiple]

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
- `Pending Tasks` are not automatically active merely because they exist.
- During `review`, keep `Active Task` and `Active Handoff` active until closure is explicitly accepted.
- Do not promote task or handoff directly from `implementation` to `done` without first reflecting the governed `review` stage.
- Use `execution-unlock` when the active handoff exists and the system is performing the governed readiness decision that may promote execution to `implementation`.
- Optional domain artifacts (`Research`, `Experience`, `Strategy`) may remain active when they are still the current durable basis for the execution line, even if their original bounded traversal step has already completed.
- `Active Design Foundation` may remain active when the design foundation is still the current durable basis for downstream validation, task decomposition, handoff preparation, or implementation review.
- Do not set optional domain artifacts or `Active Design Foundation` to `none` merely because the workflow has moved forward, if those artifacts still materially govern downstream work.
- If `Current Phase = design`, `Active Design Foundation` should not be `none`.
- `Next Expected Skill` is advisory for the next valid bounded step only. It never authorizes same-turn continuation by itself.
- `Next Allowed Action` must describe only the next governed step. It must not be written as if that step is already underway.
- After a successful bounded step, the state should usually represent a closure moment, not a compressed multi-step progression.
- After review-based closure of a task/handoff pair, prefer representing a governed pause or explicit reentry moment rather than auto-activating the next pending task.
- Do not let `Active Task`, `Pending Tasks`, `Active Handoff`, `Execution Unlocked`, `Current Phase`, and `Next Allowed Action` point to different lifecycle moments.
- Keep `State Notes` short and operational.
- Record live operational state only.
- Do not use this template as a substitute for governance, architecture, memory, or project philosophy.
- Each artifact family must have at most one active artifact at a time.
- Do not keep multiple active artifacts in the same family unless governance explicitly defines that family as multi-active.
- If a newer artifact supersedes an older one in the same family, the older one must not remain active by default.
