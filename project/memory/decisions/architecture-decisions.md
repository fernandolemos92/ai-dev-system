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

## DECISION-001 — Skill-driven execution architecture policy
Status: accepted
Date: [YYYY-MM-DD]
Summary: The system must use governance-first + state-aware + skill-driven execution as its core operational architecture.
Reason: This keeps control explicit, reduces ambiguity, and aligns the execution model with the current governed workflow design.
Implication:
- Governance defines allowed progression and constraints
- `PROJECT_STATE.md` defines the live operational moment
- Skills are the primary bounded execution units of the workflow
- Agents may assist through specialization, but they must not replace skills as the controller of progression

## DECISION-002 — Specialist agent boundary policy
Status: accepted
Date: [YYYY-MM-DD]
Summary: Specialist agents must remain auxiliary, role-bounded, and non-overlapping whenever possible.
Reason: Clear boundaries reduce ambiguity, prevent role drift, and preserve the architectural hierarchy of governance, state, skills, artifacts, memory, and agents.
Implication:
- Agents must support specialized reasoning or execution without becoming the workflow core
- New agents should only be introduced when they fit an existing structural need
- Agent names and missions should remain explicit and stable
- Agents must not redefine workflow stages, governance, or state semantics

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
Summary: Workflow artifacts must be treated as part of the system architecture, not as ad hoc files.
Reason: Artifact discipline is a core architectural property of this system.
Implication:
- PRDs, validations, tasks, handoffs, memory, and supporting documents must remain structurally separated
- Artifact creation and promotion must follow governed lifecycle rules
- The root of the project should remain clean and intentional
- Filesystem structure must remain consistent with the state model and governed workflow

## DECISION-005 — Sequential workflow architecture policy
Status: accepted
Date: [YYYY-MM-DD]
Summary: Meaningful work must move through explicit sequential stages rather than uncontrolled parallel execution.
Reason: Sequential flow improves traceability and makes system behavior more reliable.
Implication:
- Official workflow stages and gates must be respected
- Planning, validation, tasking, handoff, implementation, review, and state closure should remain distinct
- Multi-step work must be sequenced explicitly
- The system should preserve one current governed execution target at a time unless the architecture is deliberately redesigned