# IMPLEMENTATION ARCHITECTURE POLICY

## Purpose

This document defines the normative implementation architecture policy for this system.

Its purpose is to establish a single binding policy that connects:

- frontend implementation architecture
- backend implementation architecture
- design system integration

This document is intentionally short.

It does not restate the full architectural content of those documents.
Instead, it declares their normative role, defines their precedence, and establishes how implementation work must relate to them.

---

## Normative Documents

The following documents are normative for implementation work in this system:

- `project/memory/frontend-implementation-architecture.md`
- `project/memory/backend-implementation-architecture.md`
- `project/memory/design-system-integration.md`

All implementation work must align with the applicable architecture defined in those documents.

---

## Normative Language Convention

The following terms define the intended force of architectural statements in this policy and in the connected implementation canon documents:

- **Must / Must Not** = mandatory rule
- **Should / Should Not** = expected default behavior; deviation requires clear justification
- **May** = permitted, but not required

When implementation work faces ambiguity, mandatory rules take precedence over recommendations, and recommendations take precedence over optional behavior.

---

## Normative Precedence

This policy is the binding policy layer for implementation architecture.

The normative precedence is:

1. `implementation-architecture-policy.md`
2. `frontend-implementation-architecture.md`
3. `backend-implementation-architecture.md`
4. `design-system-integration.md` for UI consistency, visual contracts, recurring product patterns, and product-level design behavior

This precedence must be interpreted as follows:

- this policy binds implementation work to the architecture canon
- the frontend canon governs frontend structural implementation
- the backend canon governs backend structural implementation
- the design-system canon governs UI consistency and product-level design behavior
- a task, handoff, specialist suggestion, or local implementation convenience must not override the applicable canon
- when a task or handoff is under-specified, the applicable canon still remains binding
- when frontend convenience conflicts with required UI consistency, the design-system canon remains binding for UI behavior

This precedence model exists to prevent silent structural drift.

---

## Policy Scope

This policy applies to:

- implementation skills
- review skills
- task decomposition for implementation work
- handoff preparation for implementation work
- specialist behavior attached to implementation work
- direct implementation activity performed under governed execution

This policy applies whether the work is performed by:
- a human contributor
- an AI assistant
- a specialist agent
- a governed implementation flow

---

## Core Policy Rule

Implementation is not considered acceptable merely because it is functionally correct.

Implementation is considered acceptable only when it is also structurally aligned with the applicable architectural canon.

This means:

- frontend work must align with the frontend implementation architecture
- backend work must align with the backend implementation architecture
- UI work must align with design system integration requirements

Functional correctness without structural alignment is insufficient.

---

## Binding Behavior

### Frontend work
Any implementation that touches frontend structure, UI composition, state ownership, shared UI, hooks, route surfaces, utilities, or frontend feature organization must follow:

- `frontend-implementation-architecture.md`

If it also touches product UI consistency, recurring states, primitives, shared components, patterns, or visual system behavior, it must also follow:

- `design-system-integration.md`

### Backend work
Any implementation that touches routes, handlers, controllers, use cases, services, repositories, validation boundaries, authentication flow, ownership rules, integrations, or error behavior must follow:

- `backend-implementation-architecture.md`

### Cross-cutting work
If a change spans frontend and backend, each side must be evaluated against its respective canon.

If a change touches UI behavior and structural frontend code at the same time, both the frontend canon and the design system integration canon apply.

---

## Implementation Requirement

Before meaningful implementation work begins, the implementation must be clear enough to answer:

- which architecture canon applies
- which boundaries are affected
- what structural rules must be preserved
- what anti-patterns must be explicitly avoided

If that cannot be answered, implementation readiness is not yet strong enough.

---

## Review Requirement

Implementation review must evaluate both:

1. functional correctness
2. structural alignment with the applicable architecture canon

Review must not treat architectural quality as optional polish.

If the implementation violates the applicable canon in a meaningful way, the work must not be treated as fully acceptable even if it technically works.

---

## Task and Handoff Requirement

Implementation-oriented tasks and handoffs must carry enough structural intent to preserve architecture quality.

This means they should not describe only what must work.
They should also describe the relevant architectural boundaries that must be respected.

Where applicable, they should make explicit:

- what layer owns the action
- what should remain thin
- what should be reused
- what should not be embedded locally
- what consistency contract must be preserved

---

## Specialist Requirement

When specialists are attached to implementation work, they must operate in support of the applicable architecture canon.

Specialists must not introduce patterns that contradict:

- frontend implementation architecture
- backend implementation architecture
- design system integration

Specialist usefulness does not override architectural policy.

---

## Allowed Pragmatism

This policy does not require unnecessary architectural inflation.

Not every change requires:
- new layers
- new abstractions
- promotion to shared structures
- file extraction
- architectural expansion

Small, local, low-risk implementation may remain local when all of the following are true:

- responsibility remains clear
- reuse is not yet justified
- consistency is preserved
- no meaningful architectural drift is introduced
- the implementation does not violate the applicable canon

Pragmatism is allowed.
Silent structural degradation is not.

---

## Anti-Drift Rule

No implementation should silently drift away from the canonical architecture through convenience, local improvisation, under-specified tasks, or partial reuse.

The following are policy violations when they meaningfully affect quality:

- functionally correct but structurally weak frontend work
- functionally correct but boundary-inconsistent backend work
- UI work that uses components without preserving product consistency
- task or handoff instructions that ignore architecture-critical boundaries
- review outcomes that ignore structural problems because the feature appears to work
- specialist suggestions that weaken canonical implementation discipline
- convenience-based deviations with no clear justification

---

## Final Rule

The canonical standard for implementation in this system is:

- functional correctness
- structural clarity
- architectural alignment
- consistency preservation
- maintainable evolution

The normative architecture documents define what this means in practice.

This policy binds implementation work to those documents.