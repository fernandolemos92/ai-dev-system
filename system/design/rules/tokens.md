# Tokens

## Purpose

This document defines the global token architecture for the AI Dev System.

It does not define the final token values of a specific product.
Those belong to each project's design foundation.

This document defines the structural rules that govern how tokens must be modeled, named, evolved, and consumed across projects.

In practical terms:

- `design-rules` define the token constitution
- `design-foundation` instantiates project-specific tokens under that constitution
- implementation consumes project tokens through a controlled implementation contract

---

## Role in the Design Architecture

The token layer is the base semantic substrate of the design system.

It exists to prevent design drift, implementation reinterpretation, and uncontrolled stylistic entropy.

Tokens are not decorative labels.
They are the durable representation of design intent.

They must support:

- semantic clarity
- consistency across surfaces
- accessible theming
- scalable component composition
- controlled evolution over time

---

## Canonical Token Layers

The system uses four conceptual token layers.

### 1. Raw Tokens

Raw tokens represent primitive design values without direct product meaning.

Examples:

- color palettes
- spacing scale
- typography scale
- radius scale
- shadow/elevation scale
- motion duration/easing primitives

Raw tokens answer:

"What are the available physical values in the system?"

They should remain stable and reusable.
They should not directly encode product context.

Examples:

- `raw.color.blue.500`
- `raw.space.4`
- `raw.radius.md`
- `raw.font.size.300`
- `raw.shadow.2`

### 2. Semantic Tokens

Semantic tokens map raw values to design meaning.

They answer:

"What role does this value play in the interface?"

Semantic tokens are the preferred layer for product usage.
Components and surfaces should primarily consume semantic tokens, not raw tokens.

Examples:

- `color.surface.default`
- `color.surface.muted`
- `color.text.primary`
- `color.text.secondary`
- `color.border.subtle`
- `color.feedback.error`
- `space.stack.md`
- `radius.interactive.md`

### 3. Component Tokens

Component tokens bind semantic roles to reusable component families.

They answer:

"How does this component family express the semantic system?"

Examples:

- `button.primary.bg`
- `button.primary.fg`
- `button.primary.border`
- `input.default.border`
- `card.surface.bg`
- `badge.success.fg`

Component tokens are allowed only when they encode reusable component behavior or component-level expression.
They must not become a shortcut for arbitrary visual exceptions.

### 4. Surface Tokens

Surface tokens bind semantic roles to a specific product surface when a surface requires stable, repeated identity.

They answer:

"How does this surface express the system without becoming a disconnected design island?"

Examples:

- `landing.hero.bg`
- `dashboard.panel.bg`
- `editor.canvas.bg`
- `public-page.section.border`

Surface tokens are the most constrained layer.
They should be created only when semantic or component tokens are insufficient to express durable surface-specific behavior.

---

## General Token Principles

### Principle 1 — Semantic over raw consumption

Implementation should prefer semantic tokens over raw tokens.

Raw tokens may exist as foundation material, but direct raw-token usage in product implementation should be minimized.

### Principle 2 — Role before visual value

Tokens must be named by role, not by appearance, whenever they are expected to be consumed by products.

Prefer:

- `color.text.primary`
- `color.feedback.warning`

Avoid:

- `color.gray.900` as direct UI contract
- `color.blue.button`

### Principle 3 — Reuse before exception

A new token should not be created when an existing token already expresses the same semantic role with sufficient clarity.

### Principle 4 — Meaningful abstraction only

Abstraction is useful only when it creates:

- reuse
- clarity
- consistency
- adaptability

Tokens must not be invented just to increase formalism.

### Principle 5 — Accessibility is structural

Contrast, readability, state distinction, focus visibility, and non-color-only feedback must be supported through the token system itself.

Accessibility is not downstream paint.
It is upstream token logic.

---

## Canonical Token Domains

The following domains are globally recognized.

Not every project must instantiate every domain equally, but any project foundation should remain structurally compatible with them.

### Color

Color tokens should distinguish, at minimum:

- surface
- text
- border
- interactive
- feedback
- overlay
- brand
- data visualization, when relevant

#### Minimum semantic color roles

Examples of global semantic roles:

- `color.surface.default`
- `color.surface.subtle`
- `color.surface.elevated`
- `color.surface.inverse`
- `color.text.primary`
- `color.text.secondary`
- `color.text.inverse`
- `color.border.default`
- `color.border.subtle`
- `color.border.strong`
- `color.interactive.primary`
- `color.interactive.primary-hover`
- `color.interactive.secondary`
- `color.feedback.success`
- `color.feedback.warning`
- `color.feedback.error`
- `color.feedback.info`
- `color.focus.ring`
- `color.overlay.scrim`

Projects may refine these, but should not collapse them into vague or ambiguous roles.

### Typography

Typography tokens should distinguish, at minimum:

- font family
- font size
- line height
- font weight
- letter spacing
- role-based text hierarchy

Typography should support hierarchy, scannability, and readable rhythm across surfaces.

Examples:

- `font.family.base`
- `font.family.display`
- `font.size.100`
- `font.size.200`
- `font.weight.medium`
- `text.title.page`
- `text.title.section`
- `text.body.default`
- `text.body.compact`
- `text.label.sm`

### Spacing

Spacing tokens should represent a controlled scale, not ad hoc increments.

Examples:

- `space.1`
- `space.2`
- `space.3`
- `space.4`
- `space.6`
- `space.8`

Projects may additionally define semantic spacing roles such as:

- `space.stack.sm`
- `space.stack.md`
- `space.inline.sm`
- `space.section.lg`

### Radius

Radius should be intentionally scaled, not guessed per component.

Examples:

- `radius.none`
- `radius.sm`
- `radius.md`
- `radius.lg`
- `radius.full`

### Elevation / Shadow

Elevation must express information hierarchy and interaction state, not ornamental depth.

Examples:

- `shadow.0`
- `shadow.1`
- `shadow.2`
- `shadow.3`

### Motion

Motion tokens are optional at the system level but should be structured when motion is materially used.

Examples:

- `motion.duration.fast`
- `motion.duration.normal`
- `motion.easing.standard`
- `motion.easing.emphasized`

### Size / Dimension

When needed, systems may use size tokens for controls, icons, containers, and touch targets.

Examples:

- `size.control.sm`
- `size.control.md`
- `size.icon.sm`
- `size.icon.md`
- `size.target.min`

---

## Naming Rules

### Global naming expectations

Token names must be:

- semantic when consumed by products
- stable over time
- predictable across families
- readable by designers and developers
- implementation-friendly

### Naming structure

Recommended general structure:

- `{domain}.{role}.{variant}`
- `{family}.{variant}.{property}`
- `{surface}.{section}.{property}`

Examples:

- `color.text.primary`
- `color.surface.elevated`
- `button.primary.bg`
- `button.primary.fg`
- `dashboard.panel.bg`

### Naming rules to avoid

Avoid token names that are:

- visually descriptive without semantic meaning in product layers
- ambiguous
- tied to temporary screen labels
- overly abbreviated
- inconsistent across domains

Avoid examples such as:

- `blueMain`
- `grayThing`
- `ctaColor2`
- `landingSpecialPadding`

---

## Token Consumption Rules

### Rule 1 — Prefer semantic tokens in implementation

Product implementation should consume semantic tokens unless there is a justified component-level or surface-level need.

### Rule 2 — Raw tokens stay upstream

Raw tokens should mostly live in foundational layers, transformation layers, or token-export machinery.

### Rule 3 — Component tokens require reuse value

A component token should only exist when it improves repeatability, component clarity, or state management.

### Rule 4 — Surface tokens require strong justification

Surface tokens should not be used to create isolated visual islands.
They are allowed only when the surface has a durable and repeated structural identity.

### Rule 5 — Accessibility-critical roles cannot be implicit

Tokens that materially affect readability, focus, error visibility, warning clarity, or target sizing must be explicit enough to be enforced.

---

## Token Evolution Rules

### When to create a new token

A new token may be created when:

- a genuinely new semantic role exists
- reuse with existing tokens creates ambiguity
- a repeated pattern emerges across components or surfaces
- accessibility or state clarity requires explicit distinction
- a project-specific contract needs stable representation

### When not to create a new token

A new token should not be created when:

- the need is only one-off and local
- an existing token already expresses the same meaning
- the difference is only visual preference without systemic role
- the token exists only to bypass a stronger system rule

### When to promote a token

A token may be promoted upward when:

- it moves from one-off usage to repeated usage
- it becomes part of a component family contract
- it becomes relevant across multiple surfaces
- it starts to encode a stable semantic role

### When to deprecate a token

A token should be deprecated when:

- it duplicates another token's meaning
- it no longer maps to a real semantic role
- it causes confusion in implementation or design
- it survives only for backward compatibility and should be sunset deliberately

---

## Accessibility Implications of Tokens

The token system must support accessible design by construction.

This includes, at minimum:

- contrast-capable foreground/background pairing
- visible focus treatments
- distinguishable feedback roles
- non-color-only signaling support
- legible typography scales
- minimum target sizing support where dimension tokens are used
- reduced-motion compatible motion token strategy when motion exists

The token layer should make accessible expression easier, not optional.

---

## Relationship to Design Foundation

This file does not define a product's final token set.

Each project's `design-foundation` must:

- instantiate tokens under these rules
- define project-level semantic mappings
- define component and surface-specific token application where needed
- define implementation outputs through the implementation contract

In other words:

- this document defines the constitution
- the project foundation defines the instance

---

## Relationship to Implementation

This file is not an implementation file.
It does not define exact code output formats.

However, the token system must remain implementation-aware.

That means token naming and structure must be compatible with downstream outputs such as:

- CSS variables
- JSON tokens
- Tailwind theme mapping
- semantic design token export
- component theming contracts

Specific output decisions belong to:

- `implementation-contract-guidance.md` at the global rule layer
- the project's `Implementation Contract` at the design-foundation layer

---

## Anti-Entropy Rules

To keep the token system healthy over time:

- do not create visually named product tokens when semantic roles are expected
- do not create one-off component tokens without reuse evidence
- do not create surface tokens to justify inconsistency
- do not bypass semantic layers with raw values in implementation unless explicitly justified
- do not let temporary design exploration become canonical token architecture
- do not allow token naming divergence across teams or surfaces

A token system is healthy when it remains:

- semantically legible
- reusable
- adaptable
- accessible
- implementation-friendly
- resistant to arbitrary drift

---

## Closure Standard

A project token model is not considered structurally sound if it:

- depends primarily on raw values in product code
- lacks semantic role clarity
- uses inconsistent naming across domains
- creates uncontrolled component or surface exceptions
- fails to support accessibility-critical roles
- cannot be mapped cleanly into the implementation contract

If any of the above happens, the system is not operating under a valid token discipline.
