# REVIEW

## Purpose

`REVIEW.md` defines the quality bar for acceptance, retry, rejection, and recovery decisions inside `ai-dev-system`.

It exists to prevent the system from treating execution summaries, code existence, or confident narration as proof of delivery.

This file complements:

- `system/playbooks/phase-3-build-review.md`
- `system/contracts/REVIEW_REPORT.md`
- `system/contracts/LEDGER_ENTRY.md`

---

## Core Rule

Review is evidence-based judgment.

Review should decide whether the task result is acceptable, retryable, rejected, or in need of recovery.

Review is not a celebration step and not a formality after coding.

---

## What Good Review Must Do

Good review must:

- inspect the task contract
- inspect the ledger
- inspect evidence
- compare the result to done criteria
- check whether execution stayed in scope
- check whether specialist participation was described honestly
- choose an explicit allowed decision

---

## What Review Is Not

Review is not:

- rereading the implementation summary and trusting it
- accepting code because it compiles
- accepting UI because it looks polished
- accepting backend work because the happy path seems plausible
- accepting "almost done" work without naming the gap
- silently normalizing scope drift

If review does these things, acceptance becomes fiction.

---

## Review Questions

A strong review should answer:

1. What evidence was actually inspected?
2. Does the evidence match the task's required evidence?
3. Which done criteria passed, failed, or were not inspected?
4. Did execution stay within the task boundary?
5. Were specialist claims honest relative to the ledger?
6. Is the task acceptable now, or only flattering?

---

## Evidence Discipline

Evidence must be direct enough for the task.

Examples of stronger evidence:

- passing tests that match the changed behavior
- manual reproduction notes for a bugfix
- screenshots for UI changes
- request/response examples for API work
- file inspection when the task is structural or textual
- viewport-specific checks for responsive claims
- browser/runtime evidence for visual polish or reduced-motion claims
- accessibility-specific evidence for accessibility claims

Weak evidence should remain visible. If review says `responsive verified`, `accessibility verified`, `visual polish verified`, `no CLS`, or equivalent runtime-facing claims, the evidence should name the matching proof surface.

If review cannot inspect enough truth, the correct answer is not acceptance.

---

## Scope Discipline

Review must explicitly inspect scope.

Check for:

- changes outside the allowed boundary
- hidden follow-up bundled into the active task
- nearby behavior changed without approval
- architecture or design drift introduced for convenience
- cleanup or refactor work that was never approved

If scope drift exists, do not silently accept it.

---

## Specialist Honesty

If specialists were involved, review should compare claims against the ledger.

Do not describe work as full specialist execution when the ledger only supports:

- adapted guidance
- behavioral guidance
- specialist unavailable
- specialist failed
- specialist not needed

Specialist prestige is not acceptance evidence.
Review must also avoid promoting read-only analytical specialists into final artifact authorship unless the ledger or phase record explicitly shows that the orchestrator/current executor persisted the artifact and the authorship claim is truthful.



---

## Allowed Decisions

Review decisions must stay inside the allowed set:

- `accepted`
- `accepted-with-follow-up`
- `retry-required`
- `rejected`
- `recovery-required`

Choose the smallest honest decision.

Do not accept with follow-up when the missing work is actually blocking.

---

## Recovery Triggers

Prefer `recovery-required` when:

- the ledger is missing or unreliable
- evidence is missing for a critical claim
- scope drift makes the task truth unclear
- state and execution records contradict each other
- the system cannot tell what was actually completed

Recovery is not punishment. It is truth reconstruction.

---

## Failure Patterns

Avoid:

- rubber-stamp review
- summary-driven acceptance
- evidence-free optimism
- missing scope inspection
- treating follow-up as a bucket for blocking gaps
- rejecting without actionable retry guidance when retry is feasible

---

## Final Rule

Good review protects truth at the moment where the system most wants to say "done."
