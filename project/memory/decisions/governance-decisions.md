# GOVERNANCE_DECISIONS

This file stores durable governance decisions for the project.

Governance decisions define how the system should be organized, how artifacts should be handled, and which structural rules must remain stable over time.

This file must remain concise and should only include decisions that affect future execution across sessions.

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

## DECISION-001 — Canonical artifact placement policy
Status: accepted
Date: [YYYY-MM-DD]
Summary: Official workflow artifacts must be created only in their canonical artifact domains and lifecycle folders.
Reason: This prevents file sprawl, lifecycle ambiguity, and inconsistent workflow state.
Implication:
- PRDs must be stored under `project/prd/`
- Validations must be stored under `project/validation/`
- Tasks must be stored under `project/tasks/`
- Handoffs must be stored under `project/handoff/`
- Active workflow artifacts must live only in their canonical `active/` folders
- Completed workflow artifacts must be promoted only to their canonical `done/` folders
- Archived or superseded workflow artifacts must be moved only to their canonical `archived/` folders
- Decision records must be stored in `project/memory/decisions/`
- General supporting docs must not compete with official workflow artifact domains

## DECISION-002 — Memory structure policy
Status: accepted
Date: [YYYY-MM-DD]
Summary: Durable memory must be separated by purpose instead of being stored in a single generic location.
Reason: This improves maintainability, searchability, and long-term project organization.
Implication:
- Decision records are grouped under `project/memory/decisions/`
- Architecture memory is stored in `project/memory/ARCHITECTURE.md`
- Reusable patterns are stored in `project/memory/PATTERNS.md`

## DECISION-003 — Decision grouping policy
Status: accepted
Date: [YYYY-MM-DD]
Summary: Decision records should be grouped by theme rather than split into one file per decision.
Reason: This balances scalability with low-cost model usability and avoids excessive fragmentation.
Implication:
- Governance decisions should be recorded in `governance-decisions.md`
- Workflow decisions should be recorded in `workflow-decisions.md`
- Architecture decisions should be recorded in `architecture-decisions.md`

## DECISION-004 — PRD lifecycle policy
Status: accepted
Date: [YYYY-MM-DD]
Summary: The system should prefer updating the active PRD before creating a new one when the scope remains the same.
Reason: This reduces scope overlap, redundant artifacts, and confusion during execution.
Implication:
- A PRD should not be recreated for small refinements of the same feature
- New PRDs should be created only for clearly separate functional scopes
- The system should prefer one active PRD at a time whenever possible

## DECISION-005 — Naming convention policy
Status: accepted
Date: [YYYY-MM-DD]
Summary: Durable project artifacts must use deterministic and readable naming conventions.
Reason: Predictable names improve traceability, maintenance, and low-cost model reliability.
Implication:
- PRDs must use `PRD-XXX-short-feature-name.md`
- Validations must use `VALIDATION-XXX-short-scope-name.md`
- Tasks must use `TASK-XXX-short-task-name.md`
- Handoffs must use `HANDOFF-XXX-short-scope-name.md`
- Decision files must use stable thematic names