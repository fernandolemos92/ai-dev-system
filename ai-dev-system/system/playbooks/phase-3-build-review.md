# PHASE 3 - BUILD/REVIEW

## Purpose

This playbook defines how the system executes and reviews bounded tasks.

Build/Review exists to implement one task, record execution truth, inspect evidence, and decide whether the task is accepted, retried, rejected, or routed to recovery.

It must follow:

- `system/contracts/TASK.md`
- `system/contracts/LEDGER_ENTRY.md`
- `system/contracts/REVIEW_REPORT.md`
- `system/control/HANDOFF_TEMPLATES.md`
- `system/engineering/CODING_STANDARDS.md` when code is touched
- `system/engineering/ARCHITECTURE_CONTRACTS.md` when architecture boundaries are touched
- `system/design/DESIGN_SYSTEM_STANDARDS.md` when UI or design-system work is touched

---

## Phase Objective

Execute the active task without scope drift and review it from evidence.

Build/Review should produce:

- implementation or bounded execution result
- ledger entry
- evidence package
- review report
- next movement decision

---

## Required Inputs

Typical inputs:

- active task contract
- handoff when needed
- relevant synthesis/planning artifacts
- relevant code or project surface
- specialist plan
- evidence requirements

If no valid task contract exists, route back to Planning.

A candidate task from a planning artifact is not executable. It must first be materialized as a full task contract under execution/tasks/ and pass automatic Node validation.

If task scope is unclear, route back to Planning.

---

## Standard Sequence

### 1. Confirm Task Readiness

Check:

- task exists as a materialized contract under `ai-dev-workspace/current/execution/tasks/`
- allowed scope is clear
- out-of-scope is clear
- target project root is explicit and is not the private workspace unless explicitly approved
- target surfaces are known
- done criteria are reviewable
- evidence required is explicit
- owner specialist is declared
- review gate is declared

If this fails, do not execute.


### Product Root Safety

Before changing product files, confirm the target project root from the task contract or workspace config.

Stop and route back to Planning when:

- the target project root is missing
- the target project root is ambiguous
- the target project root points at `ai-dev-workspace/current/` without explicit approval
- the product project does not exist and the active task is not a bootstrap/setup task
- the active task is a feature task but requires creating package manifests, framework config, or initial scaffold

Do not create product code in the private workspace by convenience.

### Architecture And Standards Preflight

Before code is touched, Build/Review must confirm that execution has read and applied the relevant standards:

- `system/engineering/CODING_STANDARDS.md` for all code tasks
- `system/engineering/ARCHITECTURE_CONTRACTS.md` for frontend/backend/database/API/framework boundaries
- `system/design/DESIGN_SYSTEM_STANDARDS.md` for UI, styling, tokens, and component visual systems
- relevant owner/supporting specialist files when specialists are declared

The executor must name the implementation layers and anti-patterns being blocked before editing files.

Gate is `fail-repair` when a task would require the executor to invent architecture boundaries, or when a task allows:

- backend logic directly inside route handlers beyond transport mapping
- persistence without repository/data access boundary where persistence is meaningful
- API input without validation/schema
- auth/ownership behavior without explicit boundary
- frontend god pages/components mixing data fetching, animation, forms, styling, and business behavior
- design-system bypass through ad hoc inline/static styling when tokens or theme should own it
- mock persistence pretending to be production architecture without explicit task approval
### Documentation Preflight

Before product code edits, Build/Review must consult documentation when implementation depends on modern framework/library/SDK/API/database/styling/animation behavior.

Preferred order:

1. Context7 or project-configured documentation provider.
2. Official framework/library/vendor docs.
3. Existing local project docs when authoritative.

If documentation cannot be consulted, record an explicit waiver and review related claims cautiously. Model memory is not a documentation source.
### 2. Confirm Handoff

If handoff is required, verify:

- it references the task
- execution boundary is clear
- specialist plan is explicit
- external docs requirement is explicit
- acceptance criteria are present

If handoff is weak, route back to Planning.

### Native Subagent First Rule

When a task declares an owner specialist and `registry.yaml` maps it to a native OpenCode agent, Build/Review must invoke the native subagent before code edits. Example: owner `frontend` with `opencode_agent: frontend` should be invoked as `@frontend` with the bounded task context.

If native invocation is available but skipped, the task cannot be accepted as `implemented` unless the task contract explicitly approved direct execution or the ledger records a valid specialist failure/downgrade.
### Adapter Specialist Rule

When `registry.yaml` declares `runtime_type: general` and `invocation_mode: adapter`, this is the expected specialist path. Do not look for a native agent thinking panel in that case.

Adapted specialist execution is valid only when the executor reads the specialist file before editing code and uses it to make concrete implementation decisions. The Build/Review report and ledger must distinguish:

- native specialist execution
- adapted specialist execution
- behavioral guidance
- unavailable/failed specialist

A name-only citation is invalid.
### 3. Activate Specialists

Activate the owner specialist and account for every declared supporting specialist. Supporting specialists are invoked when their domain is material, otherwise explicitly waived or marked not-needed with a reason.

For non-trivial implementation, the declared owner specialist must be invoked through native or adapted execution before files are changed. If the owner is not invoked, execution must stop or the orchestration must explicitly downgrade to direct execution with a reason.

Specialist activation must follow:

`system/control/AGENT_ACTIVATION_PROMPTS.md`

Record whether specialist use is:

- native
- adapted
- behavioral guidance
- not needed
- unavailable
- failed

This must later appear in the ledger.

Do not treat the orchestrator executing directly as the same thing as owner specialist execution.
### Supporting Specialist Accountability

Every supporting specialist declared in the task must be accounted for in execution and ledger records.

Allowed statuses:

- `invoked-native`
- `invoked-adapted`
- `waived-with-reason`
- `not-needed-after-owner-analysis`
- `unavailable`
- `failed`

A supporting specialist can be waived only with a concrete reason tied to the task scope. If the task materially depends on that domain, waiver should usually lead to `retry-required`, `accepted-with-follow-up`, or a narrower task split rather than silent acceptance.
### Tool And Specialist Boundary

Do not call Stitch, MCP design generators, or new specialist tools during Build/Review unless the active task contract or handoff explicitly names that route.

If a required tool or specialist fails, record the failure and produce retry guidance. Do not pivot into manual implementation of another task.

### Package Manager And Tooling Discipline

Use the package manager, scripts, and commands required by the task contract or existing project.

If the required package manager is unavailable, do not silently substitute another tool. Record the downgrade or route to user decision before using a substitute.

Examples:

- `pnpm` required but unavailable -> record `tooling-downgrade: pnpm unavailable, npm used with approval or explicit retry reason`
- build script missing -> route back to Planning or repair the setup task if in scope

Tooling changes can affect lockfiles, dependency trees, and reproducibility, so they are execution truth.

### 4. Automatic Validator Gate

Before product code edits, Build/Review must automatically run the local Node validator when `ai-dev-system/scripts/validate-ai-dev.mjs` exists.

This is an internal system gate. Do not ask the user to remember or manually run a command.

Required behavior:

- validate the active task contract before editing product code
- stop with `fail-repair` when validation fails
- repair task, state, config, ledger, or review records as appropriate, then rerun validation
- record validator execution and result in the ledger evidence

Manual validator commands may be documented for debugging only; they are not the normal workflow.

### 5. Execute The Smallest Honest Change

Implement only the active task boundary.

When code is touched:

- follow `system/engineering/CODING_STANDARDS.md`
- follow `system/design/DESIGN_SYSTEM_STANDARDS.md` when UI or design-system quality is in scope
- prefer small clear changes
- preserve existing structure unless the task justifies change
- avoid speculative abstractions
- avoid hidden future work
- validate structured files after edits, especially package manifests, JSON, YAML, env examples, and framework route paths

If execution would require scope expansion, stop and route back to Planning or user decision.

### 6. Create Ledger Entry

After execution attempt, create a ledger using:

`system/contracts/LEDGER_ENTRY.md`

Legacy summary ledgers are invalid. The ledger must use system/contracts/LEDGER_ENTRY.md sections exactly; fields such as Status, Task Title, or summary-only ledgers do not support review.

The ledger must record what actually happened, including:

- specialist truth
- supporting specialist status
- documentation evidence or waiver
- runtime target used
- files touched
- commands run
- evidence produced
- scope confirmation
- drift warnings
- result

Review must not happen without a ledger, unless the movement is Recovery.

### 7. Collect Evidence

Use `evidence-qa` when evidence collection benefits from specialist verification.

Evidence may include:

- tests
- typecheck/lint/build output
- screenshots
- API examples
- manual verification notes
- changed file inspection
- reproduction notes

Evidence should match the task's required evidence.


### Evidence Specificity

Evidence must match the claim.

A successful build can support claims about compilation, type checking, and route generation. It does not prove:

- responsive behavior
- visual quality
- animation timing
- reduced-motion behavior
- accessibility
- browser console cleanliness
- API runtime correctness
- authentication behavior

Those claims require direct evidence such as screenshots, browser/runtime checks, accessibility checks, request/response examples, logs, or manual verification notes.

If evidence is missing, mark the related done criterion as `partial`, `not-inspected`, or `fail`. Do not upgrade it to pass because nearby evidence exists.

### 8. Review

Create a review report using:

`system/contracts/REVIEW_REPORT.md`

Review must inspect:

- task contract
- architecture preflight and standards used
- handoff when present
- ledger
- evidence
- concrete files or source surfaces touched for code tasks
- acceptance criteria
- scope result
- specialist honesty
- architecture compliance with CODING_STANDARDS and ARCHITECTURE_CONTRACTS
- whether every done criterion is satisfied or explicitly partial

Review decision must be one of:

- `accepted`
- `accepted-with-follow-up`
- `retry-required`
- `rejected`
- `recovery-required`


### Ledger And Review File Reality

A Build/Review report may not claim `ledger-completeness -> pass`, `review-readiness -> pass`, or task completion unless the ledger and review files exist at concrete paths and were re-read after writing.

If implementation happened but no ledger exists, choose `recovery-required` or create a reconstruction ledger before review.

If a review was not written, the task is not accepted, even if code appears to work.
### Final Automatic Validation

After ledger, review, and state records are written and re-read, Build/Review must automatically run the validator with full workspace checks when available. A task cannot be reported as accepted while this final validation fails.

### Final Consistency Check

Before closing Build/Review, re-read the ledger, review, and state after edits.

Confirm:

- the ledger has exactly one `Result`
- the review has exactly one `Decision`
- old failed and new passing statements do not coexist as final truth
- done criteria status matches the review decision
- `STATE.md` contains only short operational state
- bug logs, issue lists, or long histories are written under `artifacts/review/`, not `STATE.md`

If contradictions remain, choose `recovery-required` or repair the records before advancing.
### One Task Per Build/Review Pass

Build/Review may close or retry the active task. It must not begin the next task in the same execution pass.

After review, report the decision and next recommended movement. Starting the next task requires a new orchestration decision and, if needed, user approval.

A successful build is not permission to proceed to the next feature.

A dev server is not considered running unless the process remains alive and an HTTP request to the reported URL succeeds. If the tool session cannot keep the server alive, report the limitation instead of claiming a working localhost URL.

Foreground dev-server commands must be bounded with a default 6-second timeout, for example `timeout 6 npm run dev` in Git Bash. A plain foreground `npm run dev` is not valid verification because it can hang the agent session.

### 9. Decide Next Movement

Based on review:

| Review Decision | Next Movement |
|---|---|
| `accepted` | close task or advance to next planned task |
| `accepted-with-follow-up` | close task and create follow-up candidate |
| `retry-required` | retry same task with bounded guidance |
| `rejected` | route to Planning or user decision |
| `recovery-required` | route to Recovery |

Do not silently start the next task unless the orchestrator explicitly decides it is safe.

---

## Specialist Use

Common specialists:

- `frontend` for UI/frontend work
- `ui` for screen-level hierarchy, visible states, responsive behavior, and visual drift
- `design-system` for DESIGN.md, tokens, component standards, and reusable visual language
- `motion` for animation, gestures, timing, easing, reduced-motion behavior, and motion performance
- `backend` for server/API behavior
- `database` for persistence/schema work
- `security` for trust-sensitive work
- `evidence-qa` for evidence collection
- `reality-checker` for inflated completion or continuity doubts

Specialists do not accept the task. Review accepts or rejects.

---

## Ledger Location

Ledger entries should live under:

`ai-dev-workspace/current/execution/ledgers/`

Recommended naming:

`LEDGER-TASK-001-short-title.md`

---

## Review Location

Review reports should live under:

`ai-dev-workspace/current/execution/reviews/`

Recommended naming:

`REVIEW-TASK-001-short-title.md`

---

## Gate

Build/Review may close a task only when:

- task contract was valid
- execution stayed in scope or approved expansion is recorded
- ledger exists
- evidence exists
- review report exists
- decision is explicit
- state can be updated coherently

Gate result must be one of:

- `pass`
- `pass-with-warning`
- `fail-repair`
- `fail-stop`
- `recovery-required`

---

## Failure Patterns

Avoid:

- implementing without a task contract
- executing from vague handoff
- skipping ledger
- reviewing without evidence
- claiming specialist execution without registry/ledger support
- accepting code because it compiles
- marking a task implemented when any done criterion is still pending
- updating state by appending duplicate fields
- creating framework special directories without verifying the resulting tree
- expanding scope for convenience
- starting the next task before closing the current truth
- treating review as a rubber stamp

---

## Output

A Build/Review completion report should include:

```markdown
## Build/Review

Task: [path]
Handoff: [path or not-needed]
Ledger: [path]
Review: [path]
Specialists Used: [list or none]
Specialist Result Strength: [summary]
Evidence: [summary]
Validator Preflight: [PASS | FAIL | NOT-RUN]
Validator Final: [PASS | FAIL | NOT-RUN]
Decision: [accepted | accepted-with-follow-up | retry-required | rejected | recovery-required]
Gate: [pass | pass-with-warning | fail-repair | fail-stop | recovery-required]
Next Movement: [next-task | retry | repair-planning | stop-for-decision | route-recovery]
```

---

## Final Rule

Build/Review is successful only when implementation truth, evidence, and review decision all line up.

Code without a ledger is not delivery truth.

Review without evidence is not acceptance.








