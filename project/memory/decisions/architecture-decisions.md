# ARCHITECTURE_DECISIONS

This file stores durable architecture decisions for the project.

Architecture decisions define structural rules, boundaries, and long-term technical direction that should remain stable unless deliberately changed.

This file must remain concise and should only include decisions that affect future architecture or technical organization across sessions.


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

## DECISION-001 — Central orchestrator policy
Status: accepted
Date: [YYYY-MM-DD]
Summary: The system must use a central orchestrator as the execution controller.
Reason: Centralized control improves consistency, routing discipline, and workflow enforcement.
Implication:
- The orchestrator is responsible for classification, routing, and bounded next actions
- Specialist agents must remain role-bounded
- Execution should not bypass the orchestrator for meaningful work

## DECISION-002 — Specialist agent boundary policy
Status: accepted
Date: [YYYY-MM-DD]
Summary: Specialist agents must have bounded roles and should not overlap unnecessarily.
Reason: Clear boundaries reduce ambiguity and agent misuse.
Implication:
- Planning, architecture, implementation, testing, review, security, memory, and task management remain distinct responsibilities
- Agent names must remain stable and explicit
- New agent names should not be invented casually

## DECISION-003 — Low-cost model optimization policy
Status: accepted
Date: [YYYY-MM-DD]
Summary: The system must optimize for low ambiguity, small steps, and deterministic structure.
Reason: The project is explicitly designed to work well with low-cost or free models.
Implication:
- Narrow steps should be preferred over broad flexible execution
- Predictable naming and artifact placement must be maintained
- Simpler safe paths should be chosen when uncertainty is high

## DECISION-004 — Controlled artifact architecture policy
Status: accepted
Date: [YYYY-MM-DD]
Summary: Project artifacts must be treated as part of the system architecture, not as ad hoc files.
Reason: Artifact discipline is a core architectural property of this system.
Implication:
- PRDs, tasks, memory, and docs must remain structurally separated
- Artifact creation rules must be enforced by the orchestrator and workflow
- The root of the project should remain clean and intentional

## DECISION-005 — Sequential workflow architecture policy
Status: accepted
Date: [YYYY-MM-DD]
Summary: Meaningful work must move through explicit sequential stages rather than uncontrolled parallel execution.
Reason: Sequential flow improves traceability and makes system behavior more reliable.
Implication:
- Workflow gates must be respected
- Planning, architecture, execution, validation, review, and state update should remain distinct
- Multi-step work must be sequenced explicitly