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

## DECISION-002 — One-primary-agent policy
Status: accepted
Date: [YYYY-MM-DD]
Summary: The system must route work to exactly one primary agent at a time.
Reason: This keeps execution narrow, traceable, and easier for low-cost models to follow.
Implication:
- The orchestrator must not activate multiple primary agents simultaneously
- Multi-stage work must be executed through explicit sequential handoffs
- The selected primary agent must always be named clearly

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
Summary: Meaningful progress must be reflected in `PROJECT_STATE.md`.
Reason: The system needs a reliable operational snapshot across sessions.
Implication:
- Active work, priorities, and recent completions must stay visible
- State should be updated after meaningful planning or implementation progress
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