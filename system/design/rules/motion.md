# Motion Rules

## Purpose

This document defines the global motion rules for the AI Dev System design layer.

`motion` is not decorative by default.
It is a constrained interaction capability that may improve clarity, orientation, continuity, emphasis, and perceived responsiveness when used with discipline.

These rules exist to ensure motion remains:

- meaningful
- accessible
- bounded
- system-consistent
- implementation-aware
- subordinate to product clarity

`motion` is a global capability rule.
It is **not** a project artifact.
Project-specific motion decisions must be materialized later inside the relevant `design-foundation`.

---

## Architectural Position

Within the design architecture:

- **Experience Direction** may signal the desired experiential tone or whether motion is materially useful
- **Design Rules** define global boundaries and principles for motion usage
- **Design Foundation** translates those principles into project-specific motion rules, states, surfaces, and implementation constraints
- **Implementation Contract** defines how those motion rules are exported without reinterpretation drift

Therefore:

- this file does **not** define the exact motion system of a product
- this file does define when motion is justified, how it should behave, and where constraints must apply

---

## Core Principle

Motion must serve comprehension before delight.

Motion is acceptable when it helps users:

- understand change
- maintain context
- perceive causality
- notice status transitions
- orient themselves across surfaces
- recover confidence during asynchronous behavior

Motion is not justified merely because animation is possible.

If motion does not improve comprehension, confidence, continuity, or interaction feedback, it should usually be omitted.

---

## Motion Is Optional, Not Mandatory

The system must be able to produce strong interfaces with minimal motion or no motion.

No project should be considered visually weak merely because it uses restrained motion.

Motion should be introduced only when at least one of the following is true:

- a state transition would otherwise feel ambiguous
- a structural relationship benefits from animated continuity
- loading or async behavior needs perceptible reassurance
- hierarchy or emphasis requires temporal reinforcement
- navigation or expansion would become harder to parse without transition

If none of those are materially true, static behavior is preferred.

---

## Accepted Motion Roles

Global motion roles may include:

### 1. Feedback Motion

Confirms that an interaction was registered.

Examples:

- pressed state response
- optimistic save acknowledgement
- inline validation reveal
- state confirmation

### 2. Continuity Motion

Preserves understanding across change.

Examples:

- accordion expansion
- sheet or dialog entrance/exit
- content replacement with continuity
- contextual swap between related views

### 3. Orientation Motion

Helps users understand where they are and what changed.

Examples:

- reveal of secondary navigation
- controlled entry of panels
- hierarchical expansion in dense interfaces

### 4. Status Motion

Communicates waiting, progress, or completion.

Examples:

- loading feedback
- pending to success transition
- async resolution acknowledgment

### 5. Emphasis Motion

Draws attention to priority without overwhelming the surface.

Examples:

- appearance of critical messaging
- guided emphasis of primary next step

Emphasis motion must be used sparingly.

---

## Motion Roles That Must Be Avoided

The following uses are discouraged or forbidden unless there is very strong product justification:

- constant ambient movement unrelated to user task
- decorative looping motion competing with content
- exaggerated transitions that delay task completion
- motion used as substitute for hierarchy clarity
- motion used to mask poor information architecture
- surprise movement that breaks spatial expectations
- motion that depends on fine perception to understand state
- motion that makes basic interactions feel slower

Motion must not compensate for weak structure.

---

## Global Constraints

### Clarity First

The interface must remain understandable even if all non-essential motion is removed.

### Restraint by Default

Prefer smaller, shorter, simpler transitions over larger, louder, longer ones.

### Local Meaning

Motion should be traceable to a local cause or a comprehensible system event.

### Temporal Consistency

Similar actions should produce similar transition behavior across the system unless a meaningful exception exists.

### Surface Respect

Motion must respect the purpose of each surface.
A high-focus workflow should not inherit the same motion intensity as a marketing-facing surface.

### Accessibility Preservation

Motion must never make the product less usable for people with vestibular sensitivity, attention constraints, or reduced-motion preferences.

---

## Intensity Model

Projects should use a bounded motion intensity model.
A `design-foundation` may define project-specific intensity language, but globally the system should preserve three broad bands:

### Low

Used for most utility transitions.

Examples:

- button feedback
- hover/focus-adjacent reinforcement
- inline state changes
- subtle list insertion/removal

### Medium

Used for structural continuity where change must be noticed.

Examples:

- drawers
- modals
- accordion sections
- panel transitions

### High

Reserved for rare, highly intentional moments.

Examples:

- important celebratory confirmations
- critical state completion in emotionally expressive products

High-intensity motion should be exceptional, not normative.

---

## Surface Sensitivity

Motion must be calibrated by surface type.

### Transactional Surfaces

Examples:

- checkout-like flows
- forms
- dashboards with repeated actions
- settings
- RSVP confirmation steps

Guidance:

- prefer low intensity
- prioritize predictability and speed
- avoid ornamental transitions
- use motion only where it reduces uncertainty

### Dense Productivity Surfaces

Examples:

- editors
- management interfaces
- multi-panel workspaces

Guidance:

- preserve spatial logic
- prefer continuity motion over decorative motion
- avoid transitions that delay iteration
- minimize repeated animation fatigue

### Narrative / Marketing Surfaces

Examples:

- landing pages
- promotional pages
- storytelling sections

Guidance:

- motion can contribute more to rhythm and emphasis
- still must not obscure clarity
- must remain compatible with reduced-motion expectations

### Public Read-Only Surfaces

Examples:

- event pages
- published experiences
- browseable content pages

Guidance:

- use motion for orientation and reveal only when useful
- ensure content remains legible and stable

---

## Entry and Exit Behavior

Motion involving appearance or removal of UI must preserve spatial and interaction logic.

Rules:

- entries should explain where content came from when that relationship matters
- exits should not feel like disappearance without cause
- overlays must preserve focus logic
- panels should not animate in ways that confuse origin or hierarchy
- collapsing/expanding structures must keep layout comprehension intact

---

## State Transition Guidance

Motion is especially useful at state transitions, but only if it strengthens understanding.

Valid state transition contexts include:

- idle → loading
- loading → success
- loading → error
- closed → open
- hidden → revealed
- pending → confirmed
- invalid → corrected
- draft → published

These transitions should feel:

- prompt
- coherent
- reversible where appropriate
- consistent with severity and context

---

## Feedback Timing Principle

Motion must not create a perception that the system is slower than it is.

Therefore:

- interaction acknowledgment should feel immediate
- loading feedback should appear early enough to reduce ambiguity
- completion feedback should not block the next action unnecessarily
- animation duration must not become a tax on repeated use

Frequent workflows require especially disciplined timing.

---

## Reduced Motion Requirement

Reduced motion is not optional.
It is a required global constraint.

Every project-level `design-foundation` must define how motion adapts when reduced motion is preferred.

At minimum:

- essential meaning must survive without animation
- large transforms should be minimized or removed
- parallax-like or exaggerated movement should be avoided
- status communication must still remain clear
- transitions may be shortened, simplified, or replaced by static state change

The system must not depend on animation to communicate critical meaning.

---

## Accessibility Requirements

Motion rules must align with accessibility constraints defined in `accessibility.md`.

Motion must not:

- trigger avoidable vestibular discomfort
- hide focus movement
- obscure state changes
- force temporal interpretation of critical content
- delay keyboard interaction feedback

Motion should support accessibility by:

- clarifying change
- reinforcing focus movement when appropriate
- improving comprehension of expansion/collapse
- reducing uncertainty during async states

---

## Relationship to Tokens

Global motion guidance may later be expressed in project-level token systems, but this document itself does not mandate a fixed token inventory.

A project `design-foundation` may define motion-relevant tokens such as:

- duration groups
- easing groups
- distance/offset conventions
- emphasis tiers
- reduced-motion overrides

However, those tokens must remain subordinate to clarity and accessibility.

A tokenized motion system is valid only when it improves consistency without inflating expressive noise.

---

## Relationship to Components

Motion should be defined in relation to component families and state models, not as isolated animation ideas.

Typical motion-bearing component families may include:

- dialogs
- drawers
- accordions
- dropdowns
- toasts
- tabs
- tooltips
- navigation panels
- inline validation patterns
- async feedback patterns

A project foundation should specify where motion belongs in these families and where static behavior is preferable.

---

## Relationship to Implementation Contract

Each project `design-foundation` must include an `Implementation Contract` that clarifies, when motion is material:

- output format expectations
- naming conventions for motion-relevant tokens or states
- theming implications, if any
- component mapping for animated vs static variants
- reduced-motion fallback behavior
- acceptable implementation boundaries
- what must not be reinterpreted downstream

The implementation layer must not invent expressive motion behavior that the foundation never authorized.

---

## Decision Heuristics

Before introducing motion, ask:

1. What user understanding problem does this motion solve?
2. Does removing the motion make the interface meaningfully harder to parse?
3. Is the motion improving confidence, continuity, or orientation?
4. Would a simpler visual/static solution solve the same problem?
5. Does this remain acceptable under reduced-motion conditions?
6. Will this still feel good under repeated use?

If those questions are not answered well, motion should probably be reduced or removed.

---

## Anti-Entropy Rules

### Do not create motion because a library makes it easy

Availability of animation tooling is not justification.

### Do not let each surface invent its own motion language

Projects need a bounded motion logic, not isolated flourishes.

### Do not let marketing motion leak into transactional interfaces by default

Surface purpose matters.

### Do not encode critical meaning exclusively in movement

Meaning must survive without temporal interpretation.

### Do not keep motion after its explanatory value disappears

Repeated workflows must stay efficient.

---

## What a Design Foundation Must Materialize

When motion is materially relevant, a valid project `design-foundation` should make explicit:

- which surfaces use motion
- which component families use motion
- which state transitions animate and why
- motion intensity expectations
- reduced-motion behavior
- what is forbidden
- how implementation maps these rules into code without drift

If motion is not materially relevant, the foundation may explicitly choose a minimal-motion or near-static posture.
That is a valid outcome.

---

## Closing Rule

Motion is a design tool, not a default entitlement.

The system should reward motion that improves comprehension and reject motion that merely performs aesthetic activity.

A mature design architecture does not ask:

"Where can we animate?"

It asks:

"Where does motion materially improve understanding without compromising accessibility, speed, or coherence?"
