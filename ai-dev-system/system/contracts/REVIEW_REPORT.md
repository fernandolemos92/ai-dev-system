# REVIEW REPORT CONTRACT

## Purpose

A review report decides whether executed work should be accepted, retried, rejected, or routed to recovery.

Review is evidence-based.

Review does not trust implementation summaries by default.

---

## Required Fields

Every review report must include:

- `Review ID`
- `Task ID`
- `Ledger Reviewed`
- `Reviewer`
- `Review Date`
- `Evidence Inspected`
- `Acceptance Criteria Result`
- `Scope Result`
- `Specialist Honesty Result`
- `Documentation Evidence Result`
- `Architecture Compliance Result`
- `Issues Found`
- `Decision`
- `Retry Guidance`
- `Follow-Up Notes`
- `State Recommendation`

---

## Decision Values

Use one:

- `accepted`
- `accepted-with-follow-up`
- `retry-required`
- `rejected`
- `recovery-required`

### accepted

Use when the task meets acceptance criteria and evidence is sufficient.

### accepted-with-follow-up

Use when the task is acceptable, but non-blocking follow-up exists.

### retry-required

Use when bounded correction is likely to fix the issue.

### rejected

Use when the result does not satisfy the task and retry is not the right immediate path.

### recovery-required

Use when execution truth is unclear, ledger is missing, scope drifted, or evidence cannot support review.

---

## Review Checks

### Evidence Check

Ask:

- What evidence was inspected?
- Is the evidence direct enough?
- Is anything important missing?


### Runtime Evidence Check

Match evidence to the claim being reviewed.

Build output alone may support build/typecheck claims. It is not sufficient evidence for responsive layout, visual quality, animation correctness, reduced-motion behavior, browser console cleanliness, API runtime behavior, auth behavior, or data persistence.

If a review claims `responsive verified`, `accessibility verified`, `visual polish verified`, `no CLS`, or equivalent runtime-facing confidence, the evidence should explicitly name the matching proof surface, such as screenshots, viewport notes, browser runtime checks, accessibility audit output, or trace/measurement artifacts.

If direct evidence is missing, mark that criterion as `not-inspected` or `partial` and choose a decision that reflects the missing evidence.

### Acceptance Check

Compare result against task done criteria.

Do not accept work because it merely sounds complete.

### Scope Check

Confirm the implementation stayed within task and handoff boundary.

If scope expanded without approval, do not silently accept.

### Specialist Honesty Check

Compare specialist claims against the ledger.

If the ledger says specialist failed, unavailable, or only behavioral guidance was used, the review must not describe the result as full specialist execution.


For every supporting specialist declared by the task, verify the ledger contains a status of invoked, waived, not-needed, unavailable, or failed. Missing supporting specialist status is `incomplete` and normally requires retry or recovery.

### Documentation Evidence Check

When framework, library, SDK, API, auth, database, styling, or animation behavior is implemented, verify the ledger records Context7, official documentation, local authoritative docs, or an explicit waiver.

If documentation evidence is missing, set `Documentation Evidence Result` to `missing` and do not accept framework/library-sensitive claims as fully reviewed.
### Architecture Compliance Check

For code tasks, compare implementation and ledger against:

- `system/engineering/CODING_STANDARDS.md`
- `system/engineering/ARCHITECTURE_CONTRACTS.md`
- `system/design/DESIGN_SYSTEM_STANDARDS.md` when UI/design is touched
- the task's `Architecture Boundaries`, `Standards Preflight`, and `Verification Plan`

Reject or require retry when architecture boundaries were bypassed, including route-handler dumping grounds, god components, ad hoc design-system bypass, mock persistence not approved by task, missing validation, missing auth/ownership, or missing error mapping where applicable.
### Regression / Drift Check

Look for:

- adjacent behavior changes
- design-system drift
- architecture drift
- duplicated structures
- missing tests or verification
- stale state assumptions

---


### Final Consistency Check

Before saving the review, re-read the review report and confirm:

- exactly one `Decision` section exists
- exactly one allowed decision value is present as final truth
- old retry/failure statements and new acceptance statements do not coexist
- acceptance criteria statuses align with the decision
- state recommendation aligns with the decision

If the review contains contradictory final truth, the correct decision is `recovery-required` until records are repaired.

## Template

```markdown
# REVIEW: [Task ID] - [Short Title]

## Review ID
REVIEW-[Task ID]-[date-or-sequence]

## Task ID
[TASK-###]

## Ledger Reviewed
[path]

## Reviewer
[reviewer / specialist / runtime]

## Review Date
[YYYY-MM-DD]

## Evidence Inspected
- [evidence item]
- [concrete file, route, component, schema, screenshot, request/response, or build output inspected when relevant]

## Acceptance Criteria Result
- [ ] [criterion] - [pass | fail | not-inspected]

## Scope Result
[within-boundary | approved-expansion | scope-drift | unclear]

## Specialist Honesty Result
[accurate | overstated | incomplete | not-applicable]

## Documentation Evidence Result
[pass | missing | waived | not-applicable]

## Architecture Compliance Result
[pass | fail | partial | not-applicable]

## Issues Found
- [issue or none]

## Decision
[accepted | accepted-with-follow-up | retry-required | rejected | recovery-required]

## Retry Guidance
[specific bounded guidance or none]

## Follow-Up Notes
- [note or none]

## State Recommendation
[close task | keep task active | create retry task | route recovery | stop for decision]
```

---

## Validity Check

A review is valid only when:

- a ledger was inspected
- evidence was inspected
- acceptance criteria were evaluated
- scope was evaluated
- specialist honesty was evaluated when relevant
- documentation evidence was evaluated when modern framework/library/API behavior is touched
- architecture compliance was evaluated for code tasks
- the decision uses an allowed value

If review cannot inspect enough truth, choose `recovery-required`.

