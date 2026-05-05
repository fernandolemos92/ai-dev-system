# CODING_STANDARDS

## Purpose

`CODING_STANDARDS.md` defines the technical quality baseline for code produced through `ai-dev-system`.

For layer-specific implementation boundaries, use `system/engineering/ARCHITECTURE_CONTRACTS.md`.

It is a cross-cutting engineering standard.

Technical specialists must follow this file unless a task, architecture decision, or existing codebase constraint explicitly justifies a narrower local choice.

This file is not a framework preference list. It defines how to think about maintainable code.

---

## Core Standard

Write code that is:

- clear in intent
- small enough to understand
- easy to change
- easy to test
- explicit at boundaries
- honest about errors
- aligned with existing project structure
- resistant to unnecessary coupling
- readable by a future low-context maintainer

The best solution is usually the simplest one that preserves correctness, boundaries, and future change.

---

## Clean Code Baseline

Prefer:

- names that reveal intent
- functions and components with one clear responsibility
- straightforward control flow
- explicit data shapes
- local reasoning
- meaningful errors
- low surprise
- comments only when they explain why, not what obvious code does

Avoid:

- cleverness without benefit
- vague names
- hidden side effects
- boolean flag explosions
- deeply nested logic
- large files that mix unrelated concerns
- duplicate behavior hidden under different names
- comments that compensate for unclear code

---

## SOLID As Heuristics

Use SOLID as a set of judgment tools, not as ceremony.

### Single Responsibility

A module, function, component, or class should have one primary reason to change.

Do not split everything prematurely. Split when responsibilities create real reading, testing, reuse, or change pressure.

### Open / Closed

Prefer extension-friendly structure when variation is real.

Do not introduce abstractions for imagined future variants.

### Liskov Substitution

If polymorphism exists, substitutable implementations must preserve expected behavior.

Avoid inheritance or shared interfaces that create surprising behavior.

### Interface Segregation

Consumers should not depend on fields, methods, props, or services they do not use.

Prefer narrow contracts at boundaries.

### Dependency Inversion

High-level behavior should not be trapped inside low-level implementation details.

Use inversion when it improves testability, integration flexibility, or boundary clarity. Do not add indirection for trivial code.

---

## Complementary Principles

### KISS

Prefer the simplest solution that meets the task and preserves maintainability.

### YAGNI

Do not build future features, extension points, configuration systems, or abstractions that the current task does not require.

### DRY With Judgment

Remove duplication when it represents the same concept or behavior.

Do not abstract coincidental similarity too early.

### Composition Over Inheritance

Prefer small composable units over inheritance hierarchies unless the project already has a strong reason otherwise.

### High Cohesion, Low Coupling

Keep related behavior together.

Avoid modules that know too much about unrelated layers.

---

## Architecture Judgment

Do not default to heavyweight architecture.

Choose the smallest structure that protects:

- clear ownership
- testability
- replaceable integrations
- stable boundaries
- maintainable growth

Useful patterns may include:

- vertical slices when feature ownership is the clearest boundary
- use cases when action-oriented backend behavior needs clear ownership
- functional core / imperative shell when it improves testability
- ports/adapters when external systems or persistence need isolation
- light DDD when domain language and rules are load-bearing
- Clean Architecture or Hexagonal Architecture when complexity justifies the layers

These are tools, not trophies.

---

## Structured Configuration Integrity

Structured files are code.

When editing package manifests, JSON, YAML, TOML, env templates, framework config, route trees, or generated metadata:

- preserve valid syntax
- avoid duplicate keys
- avoid conflicting dependency versions
- keep secrets out of committed templates
- verify the resulting file or tree before claiming completion
- prefer structured tooling when available

Do not treat a successful write as a successful edit.

---

## Frontend Structure Baseline

Frontend code should keep route entry files thin and move reusable structure into named components, hooks, utilities, or adapters.

For mixed web/API applications, prefer explicit product folders such as src/web/screens, src/web/features, src/web/components, src/web/hooks, and src/web/adapters unless the existing project has a stronger convention. Route folders should not become the home for reusable component systems or feature business behavior.

Avoid static visual design in inline JSX styles. Prefer design tokens, approved classes, theme variables, CSS modules, or established project styling patterns.

Do not hard-code colors, typography, spacing, shadows, or radii in component files when the design system defines them or the task should define them.

Animation timelines should not be mixed with unrelated rendering, data fetching, and business behavior. If motion is central, use the motion specialist and record reduced-motion behavior.

## Backend Structure Baseline

Backend code should keep transport handlers thin.

For mixed web/API applications, prefer explicit backend folders such as src/server/use-cases, src/server/repositories, src/server/schemas, src/server/gateways, src/db, and src/shared/contracts unless the existing project has a stronger convention. src/app/api route handlers should remain transport boundaries, not the place where business rules and persistence decisions accumulate.

Use cases own action-oriented business behavior. Repositories own persistence. Providers/gateways own external services. Validation and auth/ownership checks must be explicit at boundaries.

Do not put business logic, authorization, or persistence decisions directly in routes/controllers/server actions unless the task explicitly justifies a tiny throwaway prototype.

Do not create generic service dumping grounds.
## Boundary Rules

Make boundaries explicit around:

- user input
- API requests and responses
- validation
- authentication and authorization
- persistence
- external services
- environment variables and secrets
- time, randomness, and side effects
- UI state and server state

Boundary code should be boring, visible, and reviewable.

---

## Error Handling

Prefer explicit errors over silent failure.

Good error handling should:

- preserve useful debugging context
- avoid leaking sensitive details
- map internal failures to stable user/API-facing behavior
- make retry or recovery behavior clear when relevant
- avoid swallowing exceptions without a reason

Do not use broad catch blocks to hide uncertainty.

---

## Testing And Verification

Testing effort should match risk.

Prefer:

- unit tests for pure logic
- integration tests for boundaries and workflows
- component tests for important UI behavior
- regression tests for fixed bugs
- manual verification notes when automation is not practical

Do not add low-value tests that only mirror implementation details.

If tests are skipped, the ledger or review should say why.

---

## Security Baseline

All code should assume:

- inputs are untrusted
- authorization must be explicit
- secrets must not be logged or committed
- client-side checks are not sufficient for protection
- error messages can leak information
- dependencies and external services are trust boundaries

When security relevance is material, activate `security`.

---

## Performance Baseline

Prefer performance-conscious code without premature micro-optimization.

Watch for:

- avoidable repeated work
- unnecessary network calls
- excessive rendering
- unbounded loops or queries
- large payloads
- missing pagination or limits
- blocking work on critical paths

Optimize when the risk is real or evidence shows a problem.

---

## Maintainability Rule

A future developer with little context should be able to answer:

- where does this behavior live?
- who owns this decision?
- where are inputs validated?
- where are errors handled?
- what can change without breaking this?
- how can this be tested?

If the code makes those answers hard, improve the structure before calling it done.

---

## Anti-Patterns

Avoid:

- god files
- god components
- service dumping grounds
- utility junk drawers
- speculative abstraction
- hidden global state
- business logic in transport handlers
- business logic in persistence adapters
- design-system bypass
- copy-paste variants of the same behavior
- implementation that passes today by making tomorrow unclear

---

## Final Rule

Good code is not code that follows every pattern.

Good code makes the current behavior correct, the boundaries clear, and the next change safer.

