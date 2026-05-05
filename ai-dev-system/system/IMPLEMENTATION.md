# IMPLEMENTATION

## Purpose

`IMPLEMENTATION.md` defines the quality bar for execution work inside `ai-dev-system`.

It exists to keep implementation honest, bounded, and aligned with the task contract instead of letting execution silently absorb missing planning.

This file complements:

- `system/playbooks/phase-3-build-review.md`
- `system/engineering/CODING_STANDARDS.md`

---

## Core Rule

Implementation is not where the system discovers what the task meant.

Implementation should realize an already bounded task, surface execution truth, and stop when the task boundary is no longer safe.

---

## What Good Implementation Must Do

Good implementation must:

- follow the active task boundary
- respect out-of-scope constraints
- preserve existing structure unless change is justified
- follow local codebase patterns when they are sound
- record what actually happened
- consult best-practice references when framework, library, platform, accessibility, or maintainability guidance materially affects the implementation
- produce evidence that review can inspect
- stop when scope expansion or missing truth appears

---

## What Implementation Is Not

Implementation is not:

- planning by coding
- architecture discovery hidden inside refactoring
- UI redesign hidden inside a feature task
- schema invention without an explicit task boundary
- security decisions made implicitly because a route was touched
- feature expansion because adjacent work looked easy

If execution starts doing these things, the system has drifted.

---

## Boundary Discipline

Before changing code or product surfaces, implementation should be able to answer:

1. What exactly is the task objective?
2. What is allowed to change?
3. What is explicitly forbidden?
4. Which target surfaces are expected to move?
5. What evidence must exist before review?

If these answers are weak, implementation should stop and route back to planning or orchestration.

---

## Smallest Honest Change

Default implementation posture:

- prefer the smallest change that satisfies the task
- prefer local clarity over broad cleanup
- prefer explicit boundaries over clever reuse
- prefer boring code at interfaces and side effects
- prefer reversible changes when uncertainty remains

Small is not about number of lines. Small is about boundary control.

---

## Structure And Pattern Discipline

During implementation:

- reuse existing structures when they are still healthy
- introduce abstractions only when they remove real complexity
- do not introduce framework ideology that the task did not require
- keep related behavior together
- keep side effects visible
- keep validation near boundaries

If a larger structural correction is truly required, surface it as a planning issue or separate task.

---

## Structured File And Filesystem Discipline

When editing structured files such as `package.json`, JSON, YAML, TOML, environment templates, manifests, or framework config, preserve valid structure and verify the result after editing.

Do not leave duplicate keys, conflicting dependency versions, malformed syntax, or stale routes.

When creating framework-significant directories, dynamic routes, catch-all routes, or grouped routes, verify the resulting filesystem tree before continuing. If the shell syntax for special characters is uncertain, stop and use a safer path creation method instead of guessing.

For package and dependency changes, re-read the manifest after editing and run the smallest appropriate validation command before claiming success.

---
## Reference Discipline

When implementation depends on framework, library, platform, accessibility, usability, maintainability, animation runtime, theming, or token-serialization guidance, consult `context7` through the runtime when available.

If `context7` does not have the needed material or the runtime path is unavailable, fall back to official documentation or other primary sources.

Do not present remembered best practices as if they were verified references. Generic waiver language such as `well-established pattern` is not enough for runtime-sensitive work like Framer Motion, Lenis, reduced-motion behavior, scroll-linked behavior, or token/theme mapping.

Record which reference path was used whenever it materially shaped the implementation, handoff, ledger, or review.

---

## Evidence Discipline

Implementation should leave enough truth for review to inspect.

Typical evidence includes:

- changed files
- commands run
- test or build output
- screenshots
- manual verification notes
- examples of runtime behavior
- notes about what could not be verified
- consulted references when they materially affected the implementation
- structured file validation when manifests, config, or framework route paths were edited

When implementation claims responsive behavior, visual polish, accessibility behavior, reduced-motion support, or CLS cleanliness, evidence should match the claim. Build output and file inspection alone are not enough for those runtime-facing assertions.

Implementation summaries are not evidence.

---

## Scope Stop Signals

Stop implementation and route back when:

- the task boundary is no longer sufficient
- target surfaces are wrong or incomplete
- a hidden product decision appears
- a hidden architecture decision appears
- a hidden schema or security decision appears
- evidence requirements cannot be met from the current slice
- the work is turning into cleanup or redesign outside the task

Stopping early is better than shipping a flattering lie.

---

## Specialist Interaction

Implementation may use specialists for bounded support.

Common examples:

- `frontend`
- `backend`
- `database`
- `security`
- `ui`
- `design-system`
- `motion`

Specialists may improve execution quality, but they do not change the task boundary unless Planning or orchestration explicitly updates it.

For non-trivial implementation with a clear dominant surface, specialist use should be the default rather than an afterthought.

---

## Failure Patterns

Avoid:

- implementing from vague intent
- using code changes to answer unresolved product questions
- folding cleanup into every task
- changing adjacent flows because they are nearby
- claiming completion before evidence exists
- hiding uncertainty behind "should be fine" language

---

## Final Rule

Good implementation makes the task real without making the scope larger.


