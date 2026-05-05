# HANDOFF_TEMPLATES

## Purpose

Handoff transfers bounded intent from planning to execution or review.

It exists to preserve continuity and reduce reinterpretation drift.

A handoff is not execution. It is the bridge to execution.

A handoff is optional. Use it only when it makes execution safer and narrower than the task contract alone.

---

## When To Create A Handoff

Create a handoff when:

- specialist coordination matters
- execution boundaries are easy to misread
- external docs or version-specific references matter
- the task is risky enough that execution should not infer missing intent
- review/evidence expectations need explicit operational translation

Do not create a handoff when it merely restates the task without adding execution safety.

In those cases, record `not-needed` and execute from the task contract.

---

## Standard Handoff Package

```markdown
# HANDOFF: [Task ID] - [Short Title]

## Metadata

From: [phase / agent / orchestrator]
To: [executor / specialist / review gate]
Scenario: [new-product | existing-feature | bugfix | recovery]
Phase: [discovery | synthesis | planning | build-review]
Task ID: [TASK-###]
Created: [YYYY-MM-DD]

## Current Truth

[What is already known, approved, or materially true.]

## Objective

[What the receiver must accomplish.]

## Inputs

- [artifact/file/decision]

## Execution Boundary

Allowed:
- [what may be changed or decided]

Forbidden:
- [what must not be changed or decided]

## Target Surfaces

- [file/dir/screen/API/module]

## Specialist Plan

Owner Specialist: [name or none]
Supporting Specialists:
- [name or none]

Specialist Use Requirement:
[required | optional | not-needed]

If required, explain why:
[short reason]

## Context / Documentation Requirement

External Docs Required: [yes | no]
Target Docs:
- [framework/library/API/version if known]
Docs Waiver Justification:
- [reason or none]

## Design-System Requirement

Design-System Required: [yes | no]
Semantic Token Contract:
- [product components consume semantic tokens or not-applicable]
- [raw values and direct hex usage forbidden in product UI or not-applicable]
- [primitive tokens remain upstream unless explicitly authorized or not-applicable]

## Acceptance Criteria

- [ ] [criterion]

## Evidence Required

- [evidence item]

## Risks And Drift Warnings

- [risk]

## Receiver Instruction

Execute only this boundary.
If the boundary is insufficient, stop and route back to Planning or Recovery.
```

---

## Handoff Validity Check

A handoff is valid only when:

- it references a valid task
- the objective is clear
- allowed and forbidden scope are explicit
- target surfaces are listed
- specialist requirement is explicit
- evidence requirements are listed
- acceptance criteria are reviewable
- it adds execution clarity beyond the task contract

If any required element is missing, do not execute. Route back to Planning.

---

## PASS Handoff To Review

Use after execution when routing to review.

```markdown
# REVIEW HANDOFF: [Task ID]

## Execution Summary

[What was implemented.]

## Ledger

[Path to ledger entry]

## Files Changed

- [file]

## Evidence Available

- [evidence]

## Known Limitations

- [limitation or none]

## Review Request

Review against the task contract and evidence.
Do not accept work that is unsupported by the ledger or observable evidence.
```

---

## Failed Handoff Pattern

Use when a receiver cannot safely execute the handoff.

```markdown
# HANDOFF BLOCKED: [Task ID]

## Blocking Reason

[What prevents safe execution.]

## Missing Or Unsafe Element

- [missing task field / unclear target / scope conflict / missing specialist / missing evidence expectation]

## Recommended Route

[Planning | Recovery | User Decision]

## Notes

[Short factual note.]
```

---

## Rule

Handoff should make execution safer and narrower.

If handoff makes the work broader, vaguer, more ceremonial, or no more executable than the task contract already does, do not use it.
