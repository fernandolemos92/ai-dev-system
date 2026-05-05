# DESIGN SYSTEM STANDARDS

## Purpose

This document defines how `ai-dev-system` should reason about visual systems, UI craft, and design-system drift.

It is inspired by patterns found in:

- `impeccable`: strong craft references, explicit anti-patterns, multi-runtime skill packaging
- `taste-skill`: adjustable visual dials, anti-generic UI rules, redesign-first audits
- `skillui`: extracted design profiles, tokens, screenshots, component references, and agent-ready `DESIGN.md`
- `awesome-design-md`: compact semantic design systems that agents can actually read
- `emil-design-eng`: invisible polish, interaction timing, animation purpose, and component feel

This file is not a universal aesthetic law.

It is a discipline layer: make design decisions explicit, evidence-aware, reusable, and hard to fake.

---

## Design Authority Order

When design work is in scope, use this order:

1. Product and user context from Discovery/Synthesis
2. Existing product design system or project `DESIGN.md`
3. Existing code tokens, components, styles, and screenshots
4. This standard
5. External references and benchmarks
6. Taste suggestions from a specialist

Do not let a taste rule override user context, accessibility, product purpose, or existing system truth.

---

## Required Design Context

Before making major UI or design-system decisions, establish:

- user and usage context
- product/job-to-be-done
- brand personality or desired emotional tone
- visual references and anti-references
- accessibility requirements
- target surfaces and devices
- current system truth, if the project already exists

If these are missing, do not invent a design personality from the codebase alone.

Code can show what exists.

It cannot fully explain who the product is for, what it should feel like, or what the user needs to trust.

---

## Design Artifact Model

A project may use one or more of these artifacts:

| Artifact | Purpose |
|---|---|
| `DESIGN.md` | Agent-readable product design system |
| token files | machine-readable colors, type, spacing, radius, shadow, motion |
| visual references | screenshots, flows, or reference captures |
| component inventory | existing primitives, product components, variants, states |
| design debt report | current inconsistencies and drift risks |

For this system, `DESIGN.md` should be semantic and agent-friendly.

It should define what the product should feel like, what tokens mean, how components behave, and what must not be done.

Use `system/design/DESIGN_MD_TEMPLATE.md` when creating a new `DESIGN.md`.

Use `system/design/DESIGN_WORKFLOWS.md` when deciding whether the next design move is `shape`, `extract`, `audit`, `critique`, `polish`, `harden`, or `animate`.

---

## Recommended DESIGN.md Shape

Use this structure when creating or revising a design-system artifact:

1. Visual Theme and Atmosphere
2. Token Architecture
3. Color Palette and Roles
4. Typography Rules
5. Spacing, Layout, and Grid
6. Component Stylings and States
7. Motion and Interaction
8. Responsive Behavior
9. Accessibility Requirements
10. Do and Do Not Rules
11. Agent Prompt Guide or Implementation Notes

Good `DESIGN.md` files combine:

- evocative direction
- exact values
- semantic roles
- component behavior
- anti-patterns
- responsive rules
- evidence links

Weak `DESIGN.md` files are just mood boards in markdown.

---


## Token Architecture

Design systems should separate atmosphere from implementable tokens.

Use the canonical chain:

`raw value -> primitive token -> semantic token -> component or surface usage`

Raw values should be present only at the foundation layer. Product components should not consume raw values directly, and they should not consume primitive tokens directly unless the design system explicitly authorizes an exception.

Use three token layers when the project is large enough to benefit:

### Primitive Tokens

Raw scales that are not usually used directly by product components.

Examples:

- `color.rose.1` through `color.rose.12`
- `space.1`, `space.2`, `space.3`
- `radius.1`, `radius.2`, `radius.full`
- `duration.fast`, `duration.normal`, `duration.slow`

### Semantic Tokens

Product meaning. These are the default implementation surface. Semantic tokens should describe category, functional role, hierarchy, and state when relevant.

Examples:

- `color.canvas`
- `color.surface`
- `color.surface.raised`
- `color.text.primary`
- `color.text.muted`
- `color.border.subtle`
- `color.accent.solid`
- `color.accent.contrast`
- `color.state.danger`
- `color.state.success`
- `focus.ring`

State-aware semantic examples:

- `color-bg-surface-primary-default`
- `color-bg-fill-primary-hover`
- `color-text-primary-disabled`
- `color-border-tertiary-default`

### Component Tokens

Component-specific tokens only when a component has stable variants or repeated complexity.

Examples:

- `button.primary.background`
- `button.primary.text`
- `input.border.focus`
- `card.shadow.rest`

Do not create component tokens for one-off styling.

### Color Format

Prefer `oklch()` for new modern web projects when browser support and tooling allow it, because it supports more perceptual scales and cleaner light/dark adaptation.

Hex is acceptable for compatibility, legacy systems, or when existing tooling requires it.

When using Radix-like color inspiration, record the idea as scale discipline, not brand copying:

- tonal steps
- semantic role mapping
- contrast pairings
- dark-mode readiness
- state behavior

Do not paste a palette without role, contrast, or usage rules.

### Token Usage Boundaries

A valid design system should explain operational token consumption boundaries:

- raw values stay in the foundation layer
- primitive tokens define scales and remain upstream unless a documented exception exists
- product components should consume semantic tokens by default
- state-aware semantic tokens should be used when interaction changes meaning
- component tokens are justified only for durable repeated component complexity
- surface tokens are acceptable only for durable repeated surfaces and should still resolve through semantic meaning
- dark mode, theming, and branding changes should happen through remapping, not through local component overrides

Anti-examples:

- `Button uses blue-400`
- `Card uses #FFFFFF`

## Design-System Extraction

For existing projects, audit before changing.

Inspect:

- global CSS, Tailwind config, theme files, CSS variables, tokens
- UI primitive libraries and wrappers
- component directories
- typography imports and font usage
- spacing/radius/shadow patterns
- states: loading, empty, error, disabled, success, focus, hover, active
- responsive breakpoints and mobile behavior
- screenshots or actual rendered UI when available

Label findings as:

- `system-truth`: clearly established by code or docs
- `system-pattern`: repeated enough to be trusted
- `system-drift`: inconsistent with the apparent system
- `missing-system`: needed but not defined
- `taste-risk`: likely generic, weak, or off-brand
- `accessibility-risk`: likely to harm usability or compliance

Do not redesign an existing product from scratch unless the task explicitly authorizes that move.

---

## Core Craft Principles

### Intent Before Decoration

Every visual decision should answer:

- What does this help the user understand?
- What hierarchy does it create?
- What state or relationship does it communicate?
- Does it fit the product's context?

If the answer is only "it looks cool", reduce or remove it unless the product context supports expressive delight.

### Tokens Before Local Styling

Prefer named tokens and reusable patterns over one-off values.

Tokens should cover:

- color roles
- typography roles
- spacing scale
- radius scale
- elevation/depth
- motion duration/easing
- z-index layers

Avoid magic values unless they solve a local optical problem and are documented by context.

### Components Before Repetition

Before creating a new component:

1. Check existing primitives.
2. Check product components.
3. Check variants.
4. Check whether the new need is genuinely distinct.

Duplicated components are design drift disguised as speed.

### States Are Part Of The Design

Every interactive or data-driven component should consider:

- default
- loading
- empty
- error
- disabled
- success
- focus
- hover
- active/pressed

A UI with only the happy path is unfinished.

### Responsive Is A Contract

Responsive behavior is not post-polish.

Define:

- mobile collapse rules
- touch targets
- content wrapping behavior
- breakpoint strategy
- overflow constraints
- image/media behavior

Horizontal scroll on mobile is a critical failure unless it is an intentional, accessible interaction pattern.

---

## Visual Quality Heuristics

Use these as review heuristics, not absolute taste law.

### Typography

- Use hierarchy through size, weight, spacing, and color together.
- Keep body line length around `65-75ch`.
- Avoid flat type scales where everything has similar weight.
- Use tabular numbers for data-heavy interfaces.
- Do not default to common fonts because they are familiar.
- Do not ban a font globally without product reason, but challenge default monoculture.

### Color

- Use semantic roles, not random palette names.
- Prefer one primary accent unless the product genuinely needs more.
- Use accents sparingly.
- Avoid pure black/white for large surfaces unless the brand intentionally requires stark contrast.
- Test contrast for text, icons, placeholders, and controls.
- Do not rely on color alone to communicate state.

### Layout

- Use spacing to group related elements.
- Avoid putting everything in cards.
- Never nest cards unless the nested boundary has a real functional meaning.
- Prefer grid for structural layout.
- Avoid repeated equal card rows when the content needs hierarchy.
- Align optically, not only mathematically.

### Motion

- Animate only when it improves state clarity, continuity, feedback, or delight.
- Keep frequent interactions fast or instant.
- Use `transform` and `opacity` for most animation.
- Respect `prefers-reduced-motion`.
- Avoid animating layout properties unless using a deliberate, tested technique.
- Test motion in slow mode when it matters.

### Interaction

- Buttons and pressable elements need visible focus and pressed feedback.
- Loading states should match the shape of the content when possible.
- Empty states should guide the user toward the next useful action.
- Error states should be specific, recoverable, and local to the problem.

---

## Anti-Patterns To Challenge

Challenge these when seen:

- generic purple/blue AI gradients without brand reason
- gradient text as the main source of impact
- excessive glow, glass, blur, or shadow decoration
- side stripe cards/callouts used as generic visual interest
- repeated three-card feature rows with identical structure
- centered hero by reflex rather than purpose
- "Inter everywhere" or default system typography as a taste substitute
- fake round metrics like `99.99%` and `50%`
- generic placeholders like `John Doe`, `Acme`, `Nexus`, `SmartFlow`
- AI copy cliches like "elevate", "seamless", "unleash", "next-gen"
- icon libraries mixed without stroke/weight discipline
- loading spinners where skeletons would better preserve context
- missing focus states
- hidden mobile functionality
- arbitrary `z-index: 9999`
- `height: 100vh` for mobile full-screen layouts where `100dvh` is safer

Do not treat this list as theater.

If a banned-looking pattern is justified by the product, keep it and record the reason.

---

## Design Specialist Routing

Use `design-system` when the work touches:

- tokens
- visual language
- component standards
- `DESIGN.md`
- consistency across multiple surfaces
- extraction from existing UI

Use `ui` when the work touches:

- screen-level UI quality
- hierarchy
- layout
- interaction states
- responsive behavior
- visual polish within an existing task

Use `motion` when the work touches:

- animation purpose
- timing and easing
- gestures
- page transitions
- reduced-motion behavior
- motion performance

Use `frontend` when implementation architecture, code ownership, state, accessibility, and performance are central.

These specialists can collaborate, but each must have a distinct reason to be activated.

---

## Evidence Expectations

Design claims need evidence.

Useful evidence includes:

- screenshots before/after
- token diff
- component inventory
- list of reused primitives
- responsive viewport notes
- accessibility notes
- rendered-state checks
- visual regression output

Do not claim "design-system aligned" unless the changed values trace back to defined tokens, components, or explicit decisions.

---

## Final Rule

Good AI design work is not louder.

It is more intentional, more contextual, more consistent, more inspectable, and harder to accidentally drift.
