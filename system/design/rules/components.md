# Components

## Purpose

This document defines the global structural rules for component systems in the AI Dev System.

It does not define the final component inventory of a specific project.
That belongs to each project's design foundation.

This document exists to govern how component families should be structured, how variants and states should be modeled, how primitives and wrappers should relate, and how consistency should be preserved across surfaces as a system grows.

In practical terms:

- `design-rules` define the global component constitution
- `design-foundation` instantiates the project-specific component system
- implementation consumes the project component contracts without improvising the system from scratch

---

## Role in the Design Architecture

Components are the reusable behavioral and visual building blocks of the system.

They are where tokens, accessibility expectations, motion boundaries, and surface needs begin to converge into concrete interface structure.

A token system without component rules remains too abstract.
A surface system without component discipline becomes inconsistent.
An implementation without component contracts drifts quickly.

Because of that, component rules exist to preserve:

- reusable structure
- predictable interaction patterns
- consistent state behavior
- scalable composition
- controlled variation
- implementation alignment

---

## Core Rule

A component is not defined only by how it looks.
It is defined by:

- its role
- its interaction model
- its state model
- its composition boundaries
- its accessibility expectations
- its reuse value across surfaces

This means a component system must not be treated as a pile of styled elements.
It must be treated as a governed interface language.

---

## What this document governs

This document governs global expectations for:

- component families
- component responsibilities
- variant modeling
- state modeling
- composition rules
- primitive vs wrapper boundaries
- cross-surface consistency
- creation vs reuse decisions
- exception handling
- component-related anti-entropy rules

It does not prescribe exact JSX, framework APIs, or implementation code.
Those belong to the project-level design foundation and its implementation contract.

---

## Components as system contracts

A component system should be understood as a contract layer between design intention and implementation.

That contract should answer:

- what this thing is for
- where it can be used
- how it behaves
- which states are required
- which variants are allowed
- how it composes with other system parts
- what may not be reinterpreted downstream

A component that has no clear role or no clear boundary should be considered suspicious by default.

---

## Global Component Principles

### Principle 1 — Role before shape

Components should be defined by role, not by superficial appearance.

Prefer:

- action components
- input components
- feedback components
- navigation components
- layout/support components

Avoid creating components whose identity is merely a visual snapshot.

A component called `BlueCardWithIcon` is structurally weaker than a component defined by role and governed variants.

### Principle 2 — Reuse before invention

New components should not be created simply because a screen looks slightly different.

A new component is justified when there is a stable, reusable behavioral or structural pattern that existing families cannot express clearly.

### Principle 3 — Variants before forks

When the same family supports a stable range of legitimate expressions, that difference should usually be expressed through controlled variants rather than cloned components.

However, variants must remain meaningful.
A component with an uncontrolled explosion of variants is usually hiding missing family boundaries.

### Principle 4 — Composition before duplication

When a pattern can be expressed by composing existing system parts without harming clarity, accessibility, or maintainability, composition is preferred over creating a redundant component.

### Principle 5 — State is part of the component, not an afterthought

A component is incomplete if its required states are undefined.

Default-only thinking leads to fragile systems.
Every reusable component family must be governed with explicit state expectations.

### Principle 6 — Accessibility is inseparable from component identity

A component cannot be considered valid if its role, states, or interaction pattern are inaccessible by design.

Accessibility is part of component definition, not a post hoc review attribute.

### Principle 7 — Surface consistency without forced sameness

Different surfaces may express the system differently, but they should not feel like unrelated products.

Component systems must preserve family identity while allowing surface-appropriate expression.

---

## Canonical Component Families

Projects may refine their inventory, but the global system should recognize at least these canonical families.

### 1. Action Components

Purpose:

- trigger actions
- submit intent
- confirm or cancel decisions
- expose high-salience operations

Examples:

- buttons
- icon buttons
- segmented actions
- inline action controls

### 2. Input Components

Purpose:

- collect, edit, or refine user input
- expose system-editable state
- support validation and recovery

Examples:

- text inputs
- textareas
- selects
- comboboxes
- date/time inputs
- toggles
- checkboxes
- radios
- sliders

### 3. Feedback Components

Purpose:

- communicate status, result, warning, error, guidance, or system response

Examples:

- alerts
- banners
- toasts
- inline validation messages
- empty states
- progress indicators
- skeletons
- badges when status-bearing

### 4. Navigation Components

Purpose:

- support orientation, movement, discovery, hierarchy, or scope change

Examples:

- tabs
- breadcrumbs
- side navigation
- pagination
- step navigation
- command menus
- menus and disclosures

### 5. Display Components

Purpose:

- present structured information in reusable, legible formats

Examples:

- cards
- lists
- tables
- key-value blocks
- stat blocks
- avatars
- chips when informational

### 6. Overlay Components

Purpose:

- temporarily interrupt, focus, layer, or contextualize interaction

Examples:

- dialogs
- drawers
- popovers
- tooltips
- context menus

### 7. Layout and Support Components

Purpose:

- define reusable structural patterns that support composition and rhythm

Examples:

- containers
- stacks
- clusters
- section shells
- panel shells
- dividers
- empty layout frames

These families are not meant to freeze creativity.
They exist to provide structural discipline and shared language.

---

## Family identity rules

Each component family should have a stable identity.
That identity should include, at minimum:

- family name
- core purpose
- valid usage contexts
- invalid usage contexts
- state requirements
- accessibility expectations
- composition relationships

If a family cannot explain its own boundary, it will likely accumulate drift.

---

## Variants

### What a variant is

A variant is a controlled expression of the same component family.

Variants may represent changes such as:

- emphasis
- density
- tone
- size
- layout mode
- interaction mode

Variants are valid only when the component keeps the same core role and interaction identity.

### What a variant is not

A variant is not:

- a disguised new component
- an excuse to encode one-off screen styling
- a dumping ground for every downstream exception

### Variant rules

A valid variant set should be:

- finite
- understandable
- semantically named
- stable enough for reuse
- compatible with the family state model

Prefer names such as:

- `primary`
- `secondary`
- `destructive`
- `ghost`
- `compact`
- `comfortable`
- `inline`
- `stacked`

Avoid names that encode appearance without role, such as:

- `blue`
- `rounded`
- `homepage`
- `special`

### Variant restraint rule

If a family keeps accumulating variants to serve unrelated contexts, reassess whether:

- the family boundary is wrong
- a new family is needed
- the surface contract is absorbing too much product-specific behavior

---

## States

### Global rule

Every reusable component family must define its required state model.

A component that has no explicit state model is not foundation-ready.

### Common required states

When relevant, families should govern at least:

- `default`
- `hover`
- `focus`
- `active`
- `disabled`
- `loading`
- `success`
- `error`

### Domain-specific states

Some projects may require domain states such as:

- `selected`
- `pending`
- `confirmed`
- `declined`
- `draft`
- `published`
- `archived`

These are valid when they represent durable system meaning, not incidental screen logic.

### State rules

States must be:

- semantically distinct
- visually and behaviorally understandable
- accessible beyond color alone when critical
- compatible with keyboard and assistive-technology interaction
- consistently modeled across variants

### Invalid state behavior

Avoid systems where:

- disabled and loading look indistinguishable
- selected and active are conflated without reason
- error state exists only as border color
- focus disappears in branded or inverse surfaces

---

## Composition Rules

### Composition over ad hoc assembly

A reusable component system should encourage deliberate composition.

Composition means components are combined through stable patterns, not arbitrarily stacked until a screen "looks right."

### Composition should preserve

- role clarity
- hierarchy clarity
- accessibility integrity
- token consistency
- state coherence

### Composition boundaries

A component should know:

- what it owns internally
- what can be slotted into it
- what must remain external
- what state it is responsible for
- what state belongs to the parent flow

### Wrapper vs primitive boundary

The system should distinguish between:

- low-level primitives
- reusable product wrappers
- domain-specific composites

#### Primitives

Primitives provide low-level behavior or structure.
They should remain generic and stable.

Examples:

- dialog primitives
- popover primitives
- checkbox primitives
- tabs primitives

#### Wrappers

Wrappers express product-aligned system behavior in a reusable way.
They bind primitives, tokens, state logic, and accessibility patterns into a product-consumable family.

Examples:

- product button
- product modal shell
- product form field wrapper
- product toast wrapper

#### Domain-specific composites

These represent project-level repeated patterns that are meaningful within a domain.
They should usually be governed in the project foundation, not in global rules.

Examples:

- RSVP summary panel
- invitation status card
- dashboard metric strip
- editor action rail

### Rule

Global rules should define how these layers relate.
Project foundations should define the actual component inventory under those rules.

---

## Cross-Surface Consistency

### Global rule

Surfaces may differ in tone, density, and emphasis, but the component system must preserve recognizability and behavioral coherence.

This means:

- a button family should still feel like the same family across landing, dashboard, editor, and transactional flows
- input logic should not change arbitrarily between surfaces
- feedback patterns should remain legible and trustworthy
- overlays should not invent contradictory behavior per surface without explicit justification

### Allowed surface expression

Surfaces may adapt:

- density
- layout context
- emphasis
- background relationship
- content rhythm

### Disallowed surface drift

Surfaces should not silently reinvent:

- family semantics
- state meaning
- focus treatment
- success/error language patterns
- interaction expectations

---

## Creation vs Reuse Rules

### Create a new component only when

- existing families cannot represent the role clearly
- composition is no longer enough without harming clarity
- a new reusable behavioral pattern has emerged
- the pattern is expected to recur meaningfully

### Reuse an existing component when

- the role is the same
- the difference is mostly emphasis or density
- the state model remains the same
- the behavioral contract remains the same

### Suspicion signals

A new component proposal should be treated as suspect when it exists mainly because:

- a screen wants a slightly different shape
- a stakeholder asked for a “special version”
- naming is surface-specific rather than role-specific
- the component would likely be used once
- the change could have been handled by variant or composition

---

## Naming Guidance

Component names should be:

- role-based
- stable
- semantically legible
- not tied to one page
- not tied to raw appearance

Prefer:

- `Button`
- `IconButton`
- `FormField`
- `AlertBanner`
- `StatusBadge`
- `ModalShell`
- `SectionCard`

Avoid:

- `HomepageBlueButton`
- `FancyCard`
- `NewModal2`
- `BigInput`
- `PurpleWarning`

Variant and state naming should also preserve semantic clarity.

---

## Accessibility Implications

The component layer must align with the global accessibility rules.

This means components should be designed with explicit expectations for:

- focus visibility
- keyboard operability
- semantic labeling
- state clarity
- target sizing
- error and validation feedback
- reduced-motion compatibility when motion is used

A component family that cannot support accessible interaction in a stable way should not be promoted into the reusable system.

---

## Relationship to Design Foundation

This document does not define the project component inventory.

The project-level `design-foundation` must derive from these rules and specify, for that product:

- which families exist
- which variants are allowed
- which states are mandatory
- which wrappers are canonical
- which composites are surface-level or domain-specific
- how component mapping works in the implementation contract

In other words:

- this file defines the constitutional rules
- the project foundation instantiates the actual component language

---

## Relationship to the Implementation Contract

The implementation contract inside each project foundation should translate component rules into implementation-ready expectations.

That contract should clarify:

- component naming conventions
- allowed variant APIs
- state exposure expectations
- wrapper vs primitive mapping
- substrate mapping boundaries
- surface-specific adaptation rules
- what downstream implementation may not reinterpret

This document does not replace that contract.
It defines the global rules that the project contract must respect.

---

## Anti-Entropy Rules

### Rule 1 — Do not promote one-offs into the system casually

A pattern used once is not automatically a reusable component.

### Rule 2 — Do not let variants absorb unrelated product behavior

When a component family becomes a catch-all, refactor the boundary.

### Rule 3 — Do not let surfaces fork the component language silently

Surface adaptation must remain controlled and explainable.

### Rule 4 — Do not treat wrappers as arbitrary styling shells

Wrappers exist to express stable product behavior, not to hide inconsistency.

### Rule 5 — Do not let implementation invent state semantics downstream

If a state matters, it must exist in the system contract.

### Rule 6 — Do not create components whose names describe screenshots

Names must survive surface evolution and visual refresh.

---

## Minimum Expectation for a Valid Project Foundation

A project-level `design-foundation` should not be considered structurally valid if it fails to define, at minimum:

- primary component families
- allowed variant logic
- required state models
- wrapper vs primitive expectations
- cross-surface consistency rules
- accessibility implications for components
- implementation mapping guidance

Without these, the project does not yet have a real component system.
It has, at most, a partial UI direction.
