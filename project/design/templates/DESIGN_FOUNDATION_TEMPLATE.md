# DESIGN_FOUNDATION_TEMPLATE

This template defines the canonical structure for a project-level design foundation artifact.

A design foundation is not a moodboard, not a UI spec, and not a component implementation plan.

It is the concrete design-system contract for one project.

It must translate stabilized product direction into an implementable design foundation that can guide frontend work without repeated reinterpretation.

It is expected to be derived from:

- a stabilized PRD
- a valid experience-direction artifact
- a growth-strategy artifact when materially relevant
- global design rules defined by the system

The design foundation must stay specific to the project.

It must not become a generic framework document.

It must not introduce new product scope.

It must not assume implementation details that were not already authorized upstream.

If the project does not yet have stable enough inputs, stop and return to the correct earlier step.

---

# Minimum Validity Rule

A design foundation is only valid if it contains, at minimum:

- design intent grounded in real project context
- a token system applied to the project
- component families and state rules
- surface contracts for relevant surfaces
- accessibility materialized as structural constraints
- a mandatory Implementation Contract
- versioning and change policy
- anti-entropy rules

If these elements are missing, the artifact is not a valid design foundation.

It is only a direction artifact.

---

# Canonical Header

Artifact ID: DESIGN-FOUNDATION-XXX  
Project: [project name]  
Status: [draft | active | done | archived]  
Version: [v0.1.0]  
Last Updated: [YYYY-MM-DD]  
Derived From: [list core input artifacts]  
Related PRD: [PRD-XXX]  
Related Experience Direction: [EXPERIENCE-XXX]  
Related Growth Strategy: [STRATEGY-XXX or none]  
Co-Authors: [design-system, ui, information-architecture, frontend, others if material]  

---

# 1. Purpose

State what this foundation governs for this project.

This section must explain:

- what part of the product experience it is intended to stabilize
- what kinds of downstream reinterpretation it is meant to prevent
- how it relates to the PRD and experience direction

Keep this project-specific.

Do not write a generic design-system manifesto.

---

# 2. Design Intent Summary

Summarize the experience and system qualities this foundation is trying to materialize.

Cover only what is materially relevant to the project, such as:

- clarity
- trust
- density
- calmness vs energy
- conversion pressure vs reassurance
- editorial vs utility feel
- product differentiation through interaction or visual hierarchy

This section must stay anchored to the project.

It must not become branding prose without operational consequence.

---

# 3. Design Principles Applied

List the principles that actively shape the foundation for this project.

For each principle, include:

- the principle name
- what it means in practice
- where it applies
- what it explicitly prevents

Principles should be concrete enough to influence tokens, components, surfaces, and interaction choices.

---

# 4. Token System

Define the token model for this project.

This section should include only tokens that materially support the product.

## 4.1 Raw Token Logic

Document the base scales and raw primitives that exist before semantic mapping.

Typical areas:

- base color values
- type scale
- spacing scale
- radius scale
- elevation/shadow scale
- motion timing scale when material

## 4.2 Semantic Token Logic

Map raw values into semantic roles.

Typical areas:

- brand roles
- surface roles
- content roles
- border roles
- feedback roles
- emphasis roles
- interaction roles

## 4.3 Token Naming Expectations

Document the naming pattern used in this project.

Prefer stable semantic naming over one-off local names.

Examples:

- color.brand.primary
- color.surface.default
- color.feedback.error
- type.heading.lg
- space.4
- radius.md

## 4.4 Token Usage Boundaries

Clarify:

- which tokens are foundational
- which tokens are surface-specific
- which tokens are temporary exceptions
- what may not be hardcoded downstream

---

# 5. Typography and Content Hierarchy

Define the typography system as applied to the product.

Include:

- text roles
- hierarchy levels
- readability expectations
- density expectations
- tone implications when materially relevant

Clarify where typography is strict and where controlled flexibility is allowed.

---

# 6. Component Families

Describe the main component families used in the project.

For each family, include:

- family name
- role in the system
- expected usage pattern
- when to reuse existing composition
- when a new component is justified

Examples of families:

- actions
- inputs
- navigation
- data display
- feedback
- overlays
- layout primitives
- editorial blocks
- transactional blocks

This section defines system shape, not pixel-perfect implementation.

---

# 7. Variant and State Model

For each relevant component family, define:

- allowed variants
- required states
- optional states
- forbidden or discouraged states
- consistency rules across similar families

Minimum state coverage should normally include:

- default
- hover
- focus
- active
- disabled
- loading
- success
- error

Add domain states only when needed, for example:

- selected
- pending
- confirmed
- declined
- published
- unpublished

State definitions must be specific enough to prevent downstream improvisation.

---

# 8. Surface Contracts

Define the contract for each relevant surface.

A surface contract must explain how the design system behaves inside a real product surface.

Each surface should normally declare:

- surface name
- purpose
- hierarchy expectations
- key component families
- dominant interaction patterns
- expected states
- responsiveness expectations
- accessibility notes
- relationship to other surfaces

Examples of surfaces when relevant:

- landing
- dashboard
- editor
- public page
- RSVP flow
- checkout
- settings
- transactional flows

Surface contracts must prevent the product from drifting into multiple inconsistent mini-systems.

---

# 9. Accessibility Materialization

Accessibility must be expressed here as a generation constraint, not as a late validation checklist.

Define how accessibility is materially enforced in this project.

Cover at minimum when relevant:

- contrast expectations
- visible focus rules
- keyboard interaction expectations
- minimum target area expectations
- readable hierarchy and text sizing
- reduced motion behavior
- feedback that does not rely only on color
- error, help, and success clarity

This section must state what is mandatory.

It must not read like optional advice.

---

# 10. Motion Rules

Include this section only when motion is materially relevant.

Define:

- when motion should be used
- when motion should not be used
- acceptable intensity and pacing
- transitions that reinforce hierarchy or feedback
- reduced motion fallback behavior

If motion is not materially relevant, state that explicitly.

---

# 11. Implementation Contract

This section is mandatory.

It defines how the design foundation becomes implementation without repeated reinterpretation.

If this section is weak or missing, the artifact is incomplete.

## 11.1 Purpose

Define how the foundation is consumed by implementation.

It must answer:

How does this system move from artifact to code without losing semantic consistency?

## 11.2 Co-Authorship

List the co-authors responsible for implementation viability.

Minimum expected roles:

- design-system
- ui
- information-architecture
- frontend

Conditional contributors:

- motion
- branding
- page-strategy
- other roles when materially required

## 11.3 Output Formats

Declare the official implementation-facing outputs for this foundation.

Examples when relevant:

- CSS variables
- JSON tokens
- semantic token maps
- Tailwind theme mappings
- component contract descriptors
- theme export structure

## 11.4 Naming Convention

Define canonical naming expectations for implementation outputs.

Cover:

- raw tokens
- semantic tokens
- component variants
- state tokens
- surface tokens

State what naming styles are allowed and what naming drift is forbidden.

## 11.5 Theme Strategy

Define the theming model for the project.

Examples of decisions to document:

- light-only vs multi-theme
- dark mode expectations when relevant
- neutral base vs brand-accent strategy
- semantic color roles
- contrast preservation rules
- theme switching rules when applicable

## 11.6 Component Mapping Strategy

Explain how the foundation maps onto the chosen implementation substrate.

When relevant, define:

- what becomes token/theme structure
- what becomes shared product wrappers
- what maps to shadcn variants or compositions
- what relies on Radix primitives
- what must remain product-specific component contracts

Do not assume a framework unless that substrate is already authorized upstream.

## 11.7 State Model in Implementation

Explain how required states are expected to appear in implementation.

This section must preserve consistency between design state intent and coded component behavior.

## 11.8 Surface Contracts in Implementation

Explain how each major surface consumes tokens, component families, and interaction patterns.

This section should help frontend avoid inventing local rules per screen.

## 11.9 Accessibility Enforcement

State the non-negotiable implementation expectations for accessibility.

Document what must be preserved in code.

## 11.10 Implementation Constraints

State what downstream implementation is not allowed to reinterpret.

Typical examples:

- semantic color roles
- typography hierarchy
- spacing scale
- component state behavior
- motion boundaries
- surface hierarchy

## 11.11 Versioning and Change Policy

Document how implementation-impacting changes are classified.

At minimum, define:

- patch
- minor
- major
- what counts as breaking

Typical breaking areas include:

- semantic token renaming
- state model changes
- component contract changes
- surface contract changes
- theming model changes

## 11.12 Anti-Entropy Rules

Document how the system avoids long-term drift.

At minimum, define:

- when a new token may be created
- when reuse is preferred
- when a new component family is justified
- how exceptions are named and scoped
- how temporary exceptions are retired or formalized

This section must actively prevent the system from devolving into surface-by-surface improvisation.

---

# 12. Controlled Exceptions and Open Decisions

List exceptions or unresolved decisions that are known, bounded, and intentionally visible.

Each item should include:

- decision or exception name
- reason
- scope affected
- temporary or permanent status
- next review trigger

Do not hide instability inside other sections.

---

# 13. Completion Gate

This artifact may only be treated as a valid design foundation if all of the following are materially present:

- project-specific purpose
- token system
- component families
- state model
- surface contracts
- accessibility materialization
- mandatory Implementation Contract
- versioning and change policy
- anti-entropy rules

If these conditions are not met, the artifact must not be represented as complete.

---

# 14. Changelog

Version: [v0.1.0]  
Date: [YYYY-MM-DD]  
Change Type: [initial | patch | minor | major]  
Summary: [what changed]  
Expected Impact: [who is affected and how]  
Breaking: [yes | no]  

Repeat as the artifact evolves.

