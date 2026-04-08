# Accessibility

## Purpose

This document defines accessibility as a structural design rule of the AI Dev System.

It does not exist to provide a late-stage checklist, a QA appendix, or a compliance afterthought.
It exists to ensure that accessibility is treated as a generative constraint that shapes tokens, components, surfaces, motion, and implementation contracts from the beginning.

In practical terms:

- `design-rules` define accessibility expectations globally
- `design-foundation` materializes those expectations for a specific project
- implementation must consume those expectations without silently weakening them

---

## Role in the Design Architecture

Accessibility is not downstream polish.
It is upstream system logic.

That means accessibility must influence:

- token structure
- contrast logic
- typography choices
- component states
- focus treatment
- motion boundaries
- interaction flow
- feedback design
- surface contracts
- implementation constraints

A design system that adds accessibility only after visual decisions have already hardened is already structurally late.

---

## Core Rule

Accessibility is a design constraint, not a remediation layer.

This means:

- accessible behavior should be designed in, not patched in
- component contracts should express accessible states explicitly
- surfaces should assume keyboard and assistive-technology navigation from the start
- semantic structure should be reflected visually and behaviorally
- reduced-motion and non-color-only feedback should be part of the system, not optional niceties

---

## What this document governs

This document governs global expectations for:

- contrast and legibility
- focus visibility
- keyboard flow
- target sizing and interaction tolerance
- feedback clarity
- semantic structure
- motion sensitivity support
- error prevention and recovery cues
- accessible state distinction
- accessibility-related anti-entropy rules

It does not prescribe exact implementation code for a project.
That responsibility belongs to the project-level design foundation and its implementation contract.

---

## Accessibility as a system property

Accessibility must be understood as a property of the system, not of isolated UI elements.

A button may be individually accessible and the surrounding flow may still fail.
A color token may pass contrast in isolation and the surface hierarchy may still confuse the user.
A modal may support focus trapping and the task flow may still be cognitively hostile.

Because of that, accessibility must be considered across multiple layers simultaneously:

- token layer
- component layer
- surface layer
- interaction layer
- motion layer
- implementation layer

---

## Global Accessibility Principles

### Principle 1 — Perceivable by more than one signal

Important meaning must not depend on a single perceptual channel.

This means:

- color should not be the sole indicator of status or change
- icons should not be the sole carrier of critical meaning without supporting cues
- motion should not be the sole explanation of system state
- visual hierarchy should be supported by structure, not just styling

### Principle 2 — Operable without precision-dependent behavior

The system should not assume ideal motor precision, ideal cursor behavior, or a mouse-first interaction model.

Design must account for:

- keyboard-only navigation
- touch interaction
- limited precision
- visible and recoverable interaction states

### Principle 3 — Understandable under load

Accessibility includes comprehension, not only operability.

The system should reduce avoidable ambiguity by making:

- purpose clear
- state clear
- next actions clear
- error causes understandable
- recovery paths visible

### Principle 4 — Robust through system change

Accessibility must survive theming changes, component expansion, surface growth, and implementation iteration.

If accessibility depends on fragile one-off decisions, it will decay.

### Principle 5 — Structural before aesthetic exception

When aesthetic preference conflicts with accessibility, the system must preserve accessibility unless the exception is explicitly justified and tightly bounded.

---

## Contrast and Legibility

### Global rule

Text, controls, boundaries, focus indicators, and critical feedback must remain visually distinguishable under realistic usage conditions.

Contrast decisions must be supported by token logic, not left to ad hoc per-screen styling.

### The system must ensure

- primary text is clearly readable against its intended surface
- secondary text remains readable without becoming faint decoration
- borders used as meaningful separators remain perceivable
- interactive elements remain distinguishable across default, hover, focus, active, disabled, and error states
- feedback surfaces maintain sufficient clarity for success, warning, info, and error conditions
- inverse or overlay contexts do not silently erode readability

### Structural implications

- semantic color roles must account for contrast at the token level
- the project foundation must not rely on vague surface naming that hides contrast responsibility
- muted states must still preserve understanding
- disabled states must communicate non-interactivity without collapsing into illegibility

---

## Focus Visibility

### Global rule

Keyboard focus must always have a deliberate, visible, and reliable treatment.

Focus must not be hidden, replaced with subtle decoration, or treated as optional noise.

### The system must ensure

- focus is visible on all keyboard-operable interactive elements
- focus styling remains perceivable across light, dark, elevated, inverse, and branded surfaces
- focus does not depend on browser defaults being preserved by accident
- focus treatment is compatible with semantic roles and component variants
- nested or composite interactions have understandable focus progression

### Structural implications

- focus appearance must be represented in token logic or component contract logic
- project foundations should declare focus behavior as part of the state model
- component families must not invent incompatible focus treatments without justification

---

## Keyboard Flow

### Global rule

Primary tasks must remain operable through keyboard interaction in a coherent order.

Keyboard support is not limited to whether tab technically works.
It includes whether flow order, visibility, traps, exits, and state changes remain understandable.

### The system must ensure

- logical navigation order
- visible focus progression
- no hidden keyboard dead ends
- overlays, menus, dialogs, and disclosures have predictable entry and exit behavior
- shortcuts, when present, do not replace baseline operability
- composite components do not become navigation puzzles

### Structural implications

- component rules must account for keyboard expectations before implementation details are written
- surface contracts must acknowledge keyboard behavior for critical flows
- interactions that rely on hover-only discovery should be treated as suspect by default

---

## Target Size and Interaction Tolerance

### Global rule

Interactive targets must be reasonably operable without requiring high precision.

The system should prefer forgiving target areas and clear hit logic over tightly packed interaction patterns that technically function but are fragile in real use.

### The system must ensure

- interactive targets are large enough to be intentionally activated
- grouped controls do not create accidental activation zones
- dense layouts still preserve reliable interaction
- icon-only actions receive sufficient area and clarity
- critical actions are not placed in ambiguous or collision-prone arrangements

### Structural implications

- spacing rules and component density rules must support interaction tolerance
- compact variants must not silently become hostile variants
- component families should define density boundaries, not just visual compression

---

## State Clarity and Feedback

### Global rule

System state changes must be communicated clearly and accessibly.

Users should not need to infer success, error, loading, warning, selection, or completion from vague visual changes alone.

### The system must ensure

- status changes are communicated through more than color when critical
- loading states are distinguishable from idle states
- disabled states are distinguishable from unavailable content or broken UI
- selected, active, pending, and completed states are semantically differentiated
- errors explain what happened, where relevant, and how to recover
- validation feedback is placed where it can be understood and acted on

### Structural implications

- state models in project foundations must be explicit
- component rules must define required states, not only default visuals
- feedback roles must be reflected in semantic tokens and implementation mapping

---

## Typography and Readability

### Global rule

Typography must support comprehension, scanning, and sustained reading without relying on visual style alone.

### The system must ensure

- hierarchy is clear across page, section, label, body, caption, and feedback roles
- line height supports readability rather than visual tightness alone
- compact typography remains readable, not merely space-efficient
- text roles remain semantically differentiated across surfaces
- long-form or dense content surfaces do not inherit decorative hierarchy patterns that harm reading

### Structural implications

- typography tokens must be role-based, not just size-based
- project foundations should define text roles by usage context
- overly compressed text styles should be treated as exceptions that require justification

---

## Semantic Structure and Meaning

### Global rule

Accessible interfaces should reflect meaningful structure in both behavior and presentation.

Users must be able to understand what is primary, secondary, grouped, related, expanded, selected, or invalid.

### The system must ensure

- hierarchy is not purely decorative
- grouped content appears and behaves like grouped content
- disclosures, tabs, accordions, dialogs, and menus express clear structure
- helper text, errors, descriptions, and labels maintain relationship clarity
- navigation landmarks and critical transitions are not visually flattened into ambiguity

### Structural implications

- IA and component rules must support meaningful grouping and labeling
- surface contracts should call out structural expectations where they materially affect comprehension

---

## Motion Sensitivity and Reduced Motion

### Global rule

Motion must never be required for comprehension of critical state or navigation.

Where motion is used, the system must provide reduced-motion behavior that preserves understanding without imposing the same movement load.

### The system must ensure

- motion is purposeful, not decorative by default
- transitions do not obscure state change timing
- animated feedback is not the only feedback
- reduced motion preserves orientation and state clarity
- high-intensity movement is avoided in core flows unless materially justified

### Structural implications

- motion rules must coordinate with accessibility rules, not diverge from them
- project foundations should declare reduced-motion behavior explicitly where motion is material

---

## Error Prevention and Recovery

### Global rule

Accessible systems reduce avoidable mistakes and make recovery paths visible.

Accessibility is not limited to whether an error message exists.
It includes whether the flow helps the user avoid confusion in the first place.

### The system must ensure

- critical actions are clearly distinguishable from secondary ones
- destructive actions are not disguised by visual similarity
- ambiguous form expectations are reduced through labels, examples, and helper text when necessary
- errors identify the affected input or surface area clearly
- recovery actions are discoverable
- retry, correction, and fallback paths are understandable

### Structural implications

- component and surface contracts should distinguish destructive, primary, secondary, and passive actions clearly
- validation patterns must not depend only on late global banners or distant summaries

---

## Cross-Surface Consistency

### Global rule

Accessibility expectations must remain stable across surfaces.

The same product should not feel keyboard-friendly in one area, motion-heavy in another, and visually ambiguous in a third unless that difference is explicitly justified by context.

### The system must ensure

- focus treatments remain recognizably consistent
- state signaling stays coherent across surfaces
- typography roles do not radically change meaning between contexts
- reduced-motion expectations are not surface-specific accidents
- dense or specialized surfaces still inherit baseline accessibility principles

### Structural implications

- project-level surface contracts must not override core accessibility rules casually
- exceptions must be declared and bounded

---

## Accessibility Requirements for Project Foundations

Every valid project-level `design-foundation` must materialize accessibility at least through:

- semantic color roles that support contrast and state clarity
- explicit focus treatment expectations
- keyboard behavior expectations for critical flows and composite interactions
- readable typography roles
- non-color-only feedback for critical states
- reduced-motion handling where motion is used materially
- state models that include accessible distinctions
- surface contracts that do not undermine baseline accessibility
- implementation contract guidance that preserves these constraints downstream

If a project foundation does not materialize these, it is incomplete.

---

## Accessibility and Implementation Contract

Accessibility must be reflected in the project `Implementation Contract`, not left behind in design prose.

At minimum, the implementation contract should declare:

- how focus treatment is represented in the system
- how semantic feedback roles map to implementation
- how state distinctions remain perceivable
- how theme strategy preserves readability and contrast
- how reduced-motion behavior is handled
- which behaviors are non-negotiable across surfaces

The contract must help prevent the common failure mode where accessible intent exists in artifacts but is diluted during implementation.

---

## Anti-Entropy Rules

### Rule 1 — Do not hide meaning in aesthetics

If a distinction matters, it must survive beyond styling taste.

### Rule 2 — Do not create inaccessible compactness as a default

Dense layouts, smaller targets, lighter text, and quieter states should be treated as constrained choices, not neutral defaults.

### Rule 3 — Do not treat browser or library behavior as sufficient by assumption

A primitive or framework may help, but the system still needs explicit accessibility expectations.

### Rule 4 — Do not create one-off exceptions without bounded scope

Any accessibility exception must:

- be named
- be justified
- declare scope
- declare duration or permanence
- declare compensating behavior where relevant

### Rule 5 — Do not let accessibility become a separate track

Accessibility should not drift into a disconnected QA-only stream.
It must remain embedded in tokens, components, surfaces, motion, and implementation contracts.

---

## Review Questions

When evaluating a project foundation against these rules, useful questions include:

- Can critical states be understood without relying only on color?
- Is keyboard focus visible and reliable across surfaces?
- Do the typography roles support readable hierarchy?
- Are target sizes and density choices forgiving enough for real interaction?
- Does reduced motion preserve understanding rather than merely removing animation?
- Are errors, warnings, success, and pending states clearly differentiated?
- Do surface contracts preserve accessibility instead of introducing local drift?
- Does the implementation contract protect these expectations from reinterpretation?

---

## Final rule

Accessibility must be preserved as a first-class system property.

If it is treated as a later validation pass, the design system will eventually drift.
If it is treated as a constitutive rule, the system becomes more understandable, more resilient, and more implementable across change.
