# TECHNICAL_PLANNING

## Purpose

`TECHNICAL_PLANNING.md` defines the quality bar for translating product direction into executable technical work.

It exists to prevent planning from becoming either a vague backlog or a premature architecture document.

This file complements:

- `system/playbooks/phase-2-planning.md`
- `system/contracts/TASK.md`
- `system/control/HANDOFF_TEMPLATES.md`

---

## Core Rule

Technical planning is successful when implementation can execute the next task without inventing structure, scope, evidence, or ownership.

Planning should reduce ambiguity, not hide it.

---

## What Good Technical Planning Must Do

Good technical planning must:

- define the next bounded slice
- identify the target surfaces likely to change
- make allowed scope and out-of-scope explicit
- expose hidden product, architecture, design, database, or security decisions
- define evidence requirements before execution starts
- identify the right owner specialist and supporting specialists
- sequence work so the next task is both meaningful and executable

---

## What Technical Planning Is Not

Technical planning is not:

- a feature wishlist
- an architecture manifesto
- a roadmap disguised as executable work
- implementation by prose
- a place to bury unresolved decisions
- a handoff factory when no handoff is needed

If planning starts doing these things, build/review will pay for it later.

---

## Planning Questions

A strong technical plan should answer:

1. What is the next meaningful slice?
2. Why is this slice next?
3. What exactly may change?
4. What must not change?
5. Which surfaces are expected to move?
6. What evidence will prove the task is done?
7. Which unknowns are still too risky to hide inside execution?
8. Which specialist, if any, materially improves this task?

If these questions cannot be answered cleanly, the task is not ready.

---

## Hidden Decision Detection

Planning must look for hidden decisions before execution begins.

Typical hidden decisions:

- product behavior still not resolved
- actor/workflow still unclear
- visual language still undefined for a UI-heavy task
- schema design still undefined for a persistence-heavy task
- trust boundary still undefined for a sensitive task
- API contract still undefined for an integration-heavy task
- evidence expectations still unclear

These must be resolved, bounded away, or turned into a smaller prior task.

---

## Task Sizing Rule

A task should be:

- small enough to execute honestly
- large enough to create meaningful progress
- narrow enough to review from evidence
- clear enough that out-of-scope is believable

A task is too large when it contains multiple major decisions or multiple loosely related surfaces.

A task is too small when it creates bookkeeping without reducing real delivery risk.

---

## Surface Discipline

Target surfaces should be specific enough that execution knows where to start.

Good target surfaces may include:

- files
- directories
- screens
- routes
- endpoints
- handlers
- repositories
- components
- migrations
- contracts

If implementation would still start by searching the whole codebase blindly, planning is weak.

---

## Evidence Planning

Evidence should be planned before execution.

Choose evidence that matches the task type.

Examples:

- screenshots for UI
- request/response examples for API work
- test output for logic or regression-sensitive work
- migration notes for schema changes
- manual verification notes when automation is impractical

If review cannot tell what to inspect, planning is incomplete.

---

## Handoff Discipline

A handoff is optional.

Use it only when it makes execution safer and narrower than the task contract alone.

Use `not-needed` when the task contract already provides enough execution truth.

Handoff should reduce reinterpretation, not add ceremony.

---

## Specialist Planning

Planning should involve specialists only when they materially change the next task.

Typical uses:

- `prioritizer` for cutting scope
- `project-manager` for ordering and sequencing
- `architectux` for structural product boundaries
- `frontend` or `backend` for target-surface realism
- `database` for persistence-heavy tasks
- `security` for trust-sensitive tasks
- `design-system`, `ui`, or `motion` for design-heavy work
- `reality-checker` when readiness may be overstated

Specialists should reduce hidden decisions, not decorate the plan.

---

## Failure Patterns

Avoid:

- planning broad slices like "build dashboard"
- hiding optional work inside the active task
- vague target surfaces
- weak evidence expectations
- handoff creation by default
- unresolved design, schema, or security decisions pushed into implementation
- candidate tasks presented as if they are execution-ready

---

## Final Rule

Good technical planning makes the next implementation step smaller, clearer, and harder to reinterpret.
