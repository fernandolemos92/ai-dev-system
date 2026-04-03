# WORKFLOW_DECISIONS

This file stores durable workflow decisions for the project.

Workflow decisions define how work moves through the system, which gates must be respected, and how execution should remain controlled over time.

This file must remain concise and should only include decisions that affect future workflow behavior across sessions.

------------------------------------------------------------
ENTRY FORMAT
------------------------------------------------------------

Use this structure for each decision entry:

## DECISION-XXX — [short title]
Status: [accepted | superseded | rejected]
Date: [YYYY-MM-DD]
Summary: [short decision statement]
Reason: [why this decision was made]
Implication:
- [practical implication]
- [practical implication]

------------------------------------------------------------
DECISIONS
------------------------------------------------------------

## DECISION-001 — Planning-before-implementation policy
Status: accepted
Date: [YYYY-MM-DD]
Summary: The system must prefer planning before implementation whenever scope is unclear or multi-step work is likely.
Reason: This reduces rushed execution, hidden assumptions, and uncontrolled changes.
Implication:
- New or ambiguous work should route to planning first
- Implementation should not begin before scope is sufficiently bounded
- Multi-layer work should not skip planning

## DECISION-002 — One-primary-skill policy
Status: accepted
Date: [YYYY-MM-DD]
Summary: The system must route governed work through exactly one primary workflow skill at a time.
Reason: This keeps execution narrow, traceable, and aligned with the governance-first + state-aware + skill-driven operating model.
Implication:
- The system must not execute multiple primary workflow skills in parallel
- Multi-stage work must progress through explicit serial transitions
- The currently governing workflow skill should remain clear at each operational moment
- Agents may assist, but they must not replace the primary workflow skill as the controller of progression

## DECISION-003 — One-current-action policy
Status: accepted
Date: [YYYY-MM-DD]
Summary: The system must define exactly one current bounded action at a time.
Reason: This prevents scope expansion and improves execution control.
Implication:
- Responses should not contain multiple active implementation actions
- Broad tasks must be split into smaller steps
- The current action must remain concrete and reviewable

## DECISION-004 — Small-task preference policy
Status: accepted
Date: [YYYY-MM-DD]
Summary: The system should prefer multiple small tasks over one large vague task.
Reason: Smaller tasks improve clarity, state tracking, validation, and handoff quality.
Implication:
- Task breakdown should happen when work exceeds one bounded step
- Tasks should remain narrow and executable
- Large requests should be decomposed before implementation

## DECISION-005 — Validation-before-completion policy
Status: accepted
Date: [YYYY-MM-DD]
Summary: Meaningful work must be validated before being considered complete.
Reason: This prevents false completion and improves reliability.
Implication:
- Acceptance criteria or done conditions must be checked before completion
- Meaningful work should not be marked complete without validation
- Review should be included when risk or scope justifies it

## DECISION-006 — State traceability policy
Status: accepted
Date: [YYYY-MM-DD]
Summary: Meaningful governed progress must be reflected in `PROJECT_STATE.md`.
Reason: The system needs a reliable operational snapshot across sessions without turning state into history, intention, or partial lifecycle narration.
Implication:
- Active work and the current operational moment must stay visible
- State should be updated when a governed step closes coherently or when the live operational situation materially changes
- Partial, contradictory, or premature state updates must not be treated as valid closure
- The state file must remain concise and operational

## DECISION-007 — Task lifecycle must be folder-based
Status: accepted
Date: 2026-03-12
Summary: Tasks must be organized by lifecycle stage using `project/tasks/active`, `project/tasks/done`, and `project/tasks/archived`.
Reason: Prevents operational overload, reduces ambiguity in large projects, and ensures Claude prioritizes active work instead of scanning historical tasks as if they were current.
Implication:
- New tasks must be created in `project/tasks/active`
- Completed tasks must be moved to `project/tasks/done`
- Cold-history, obsolete, canceled, or superseded tasks must be moved to `project/tasks/archived`
- `PROJECT_STATE.md` must point to the active task and short active queue
- Claude should prefer active tasks first and consult done/archived only when necessary for traceability or historical context

## DECISION-008 — Post-initial-task-block transition policy
Status: accepted
Date: [YYYY-MM-DD]
Summary: After the closure of an initial bounded block of tasks, the system must deliberately choose the next workflow direction instead of automatically opening a new task block.
Reason: Initial task completion does not, by itself, determine whether the system should expand scope, stabilize implementation, validate outcomes, or pause for a strategic decision.
Implication:
- The system must not automatically generate a new task block immediately after closing an initial bounded task set
- The next step must be chosen based on the dominant current need: validation, stabilization, new bounded tasking, or strategic decision
- Validation should be preferred when the main need is to test whether the delivered block behaves as intended
- Stabilization should be preferred when the main need is to resolve instability, fragility, or implementation inconsistency before expansion
- A new task block should be opened only when the previous block is honestly closed and the next bounded scope is already clear
- A strategic decision pause should be used when multiple plausible next directions exist and automatic continuation would introduce avoidable risk