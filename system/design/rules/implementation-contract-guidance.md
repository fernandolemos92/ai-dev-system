# Implementation Contract Guidance

## Purpose

This document defines the **global guidance** for how an `Implementation Contract` should be shaped inside a project-level `design-foundation`.

It does **not** replace the project-specific contract.

It exists to ensure that every project-level `Implementation Contract` is:

- structurally comparable
- implementation-aware
- aligned with system-wide design rules
- resistant to naming drift, theming drift, component drift, and surface drift

In this architecture:

- `system/design/rules/` defines the **global constitutional layer**
- `project/design/...` defines the **project-specific instantiated layer**
- the `Implementation Contract` itself lives **inside the project’s design-foundation artifact**

So this file is part of **rules** because it governs **how implementation contracts should be designed**, not because it is itself the final contract for a product.

---

## Boundary Clarification

### This file **is**
- a global guidance layer
- a structural reference for project-level implementation contracts
- a consistency and anti-entropy mechanism
- a bridge between design rules and implementation serialization

### This file **is not**
- a project artifact
- a ready-to-use implementation contract for a specific product
- a substitute for `design-foundation`
- a handoff document
- a code-generation spec by itself

---

## Why This Belongs to `rules`

`Design Rules` are the system’s global design constitution. They already govern:

- tokens
- accessibility
- components
- motion

The `Implementation Contract` was also explicitly established as a critical part of turning design into code without reinterpretation drift.

Because of that, the system needs a **global rule layer** that defines what a valid project-level implementation contract must cover.

This file exists for that purpose.

---

## Relationship To `design-foundation`

The correct layering is:

- `Experience Direction` → upstream guardrails
- `Design Rules` → global system constitution
- `Design Foundation` → project-level concrete design system
- `Implementation Contract` → mandatory section inside the project-level foundation

This means:

- `rules/implementation-contract-guidance.md` defines the **global expected shape**
- `project/design/active/DESIGN-FOUNDATION-XXX.md` contains the **project-specific implementation contract**

The project artifact must follow this guidance, but must still materialize concrete decisions for the product.

---

## Global Expectations For Any Implementation Contract

Any valid project-level `Implementation Contract` should define, at minimum:

1. Purpose
2. Co-authorship
3. Inputs
4. Output Formats
5. Naming Convention
6. Theme Strategy
7. Component Mapping Strategy
8. State Model
9. Surface Contracts
10. Accessibility Enforcement
11. Change Policy
12. Anti-Entropy Rules

If one of these areas is missing, the contract is considered incomplete.

---

## 1. Purpose

A project-level implementation contract must explicitly answer:

> How does this design system become code without requiring downstream reinterpretation of tokens, components, states, surfaces, and interaction patterns?

A weak contract talks only about appearance.

A valid contract defines how the system is:

- serialized
- named
- themed
- mapped to implementation substrate
- constrained over time

---

## 2. Co-authorship

The contract must not be authored as a pure design artifact.

Minimum expected authorship:

- design-system
- ui
- information-architecture
- frontend

Conditional contributors:

- motion
- branding
- page-strategy
- accessibility specialists, if present in the system later

The reason is structural: implementation decisions around naming, theming, mapping, and viability affect long-term system integrity.

---

## 3. Inputs

A project-level implementation contract should normally be derived from:

- stabilized PRD
- experience direction artifact
- growth strategy artifact, when materially relevant
- the project’s design foundation draft
- the global design rules capability
- approved technical baseline, when already formalized

It must not invent product scope or technical scope by itself.

---

## 4. Output Formats

The contract must define which outputs are considered canonical for implementation.

Possible output forms include:

- CSS variables
- semantic token map
- JSON token definitions
- Tailwind theme mapping
- component contract descriptors
- state model descriptors
- surface-level implementation references

The contract must not leave output serialization ambiguous.

It should be explicit about what downstream implementation is expected to consume.

---

## 5. Naming Convention

A valid contract must declare naming rules for all relevant implementation-facing layers.

Expected naming domains include:

- raw tokens
- semantic tokens
- component families
- component variants
- state tokens
- surface tokens
- motion tokens, when applicable

Naming must optimize for:

- clarity
- semantic stability
- predictability
- low ambiguity across design and frontend

A contract must avoid ad hoc naming that changes from surface to surface or component to component.

---

## 6. Theme Strategy

The contract must define the theme logic that the project expects implementation to preserve.

This includes, when relevant:

- supported theme modes
- semantic role strategy
- neutral vs brand surfaces
- contrast preservation
- theme switching behavior
- rules for inversion or emphasis
- restrictions on per-surface overrides

A contract is incomplete if theme behavior is left to implementation improvisation.

---

## 7. Component Mapping Strategy

A valid contract must explain how the project-level design system maps into the implementation substrate.

Examples of mapping targets:

- what becomes theme/token infrastructure
- what becomes component variants
- what depends on behavioral primitives
- what becomes project wrappers
- what becomes domain composites
- what must remain stable across surfaces

This is one of the most important areas for avoiding drift between design and frontend.

---

## 8. State Model

The contract must define the required state logic for each relevant component family.

Expected core states include:

- default
- hover
- focus
- active
- disabled
- loading
- success
- error

When relevant, the contract should also define domain-specific states such as:

- selected
- pending
- confirmed
- declined
- published
- unpublished

The goal is to stop each implementation surface from inventing its own local state model.

---

## 9. Surface Contracts

The contract must define the minimum system-level expectations for each important surface.

Typical surfaces may include:

- landing
- editor
- public page
- authenticated dashboard
- transactional flow
- settings or administrative areas

Each surface contract should clarify at minimum:

- role of the surface
- hierarchy expectations
- dominant component families
- dominant interaction patterns
- state expectations
- responsiveness expectations
- accessibility notes

The project-level artifact must materialize these per project.
This guidance only defines the requirement that they must exist.

---

## 10. Accessibility Enforcement

Accessibility must not appear as a soft suggestion inside the implementation contract.

It must be treated as output enforcement.

At minimum, a valid contract must preserve:

- contrast requirements
- visible focus expectations
- keyboard flow support
- minimum target sizing
- non-color-only feedback
- reduced motion behavior
- legibility expectations
- error clarity and recovery support

If the implementation contract does not constrain accessibility explicitly, it is incomplete.

---

## 11. Change Policy

A valid implementation contract must define how change is classified and controlled.

It should make clear what counts as:

- non-breaking refinement
- minor expansion
- breaking contract change

Breaking changes commonly include modifications to:

- semantic token meaning
- naming patterns
- theme structure
- component variant contract
- state model
- surface contract logic

This protects both the design system and the downstream implementation line.

---

## 12. Anti-Entropy Rules

The contract must declare how the system resists uncontrolled growth and inconsistency.

This should include rules for:

- when to create a new token
- when to reuse an existing token
- when to create a new component
- when a variant is enough
- how to declare exceptions
- how to scope exceptions
- how to document temporary vs durable divergence

Without these rules, every new implementation phase tends to fragment the system.

---

## Signs Of A Weak Implementation Contract

A weak contract usually has one or more of these traits:

- it is mostly descriptive rather than operational
- it has no clear output formats
- it leaves naming open-ended
- it leaves theming to implementation interpretation
- it does not define component mapping
- it does not define state expectations
- it does not define surface contracts
- it treats accessibility as optional guidance
- it does not define change handling
- it does not prevent entropy

A project-level foundation should not be considered complete if its contract is weak in these ways.

---

## Design Rules vs Project Decisions

This file must remain in the global rules layer.

Therefore it should define:

- required categories
- quality thresholds
- structural expectations
- anti-entropy expectations

It should **not** define product-specific decisions like:

- concrete brand colors of a project
- exact component names for a specific SaaS
- exact theme mappings for a specific app
- exact surface list for a specific product

Those belong inside the project-level `design-foundation`.

---

## Enforcement Expectation

A project-level `define-design-foundation` step should treat this guidance as a required input.

A project-level foundation should not close as valid unless its `Implementation Contract` materially satisfies the expectations described here.

This does not require rigid formatting, but it does require structural completeness.

---

## Final Rule

This file exists so that the system does not stop at “good design language”.

It forces the architecture to produce a design system that can cross the boundary into code with:

- less reinterpretation
- less drift
- more consistency
- better long-term maintainability

The global rule is simple:

A project may vary in expression, but it must not vary in structural seriousness.
