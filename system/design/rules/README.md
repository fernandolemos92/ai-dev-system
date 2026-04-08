# Design Rules

## Purpose

`system/design/rules/` is the global design governance capability of the ai-dev-system.

This layer exists to define the structural rules that govern how design systems should be formed across projects.
It is not a project artifact, not a UI spec, not a screen-by-screen deliverable, and not an implementation handoff.

Its role is to provide the global constitution that project-level design work must follow.

In practical terms:

- `design-rules` defines **global structural rules**
- `design-foundation` defines the **project-specific design system instance**
- implementation consumes the project foundation without reinterpreting the system from scratch

---

## What this layer is

This layer is:

- global
- reusable across projects
- governance-oriented
- system-shaping
- implementation-aware
- accessibility-aware
- anti-entropy by design

It defines the rules that should remain stable even when individual projects differ in brand, tone, surface mix, or product category.

---

## What this layer is not

This layer is not:

- a project artifact
- a replacement for `experience-direction`
- a replacement for `design-foundation`
- a mockup library
- a component implementation folder
- a UI kit export
- a generic inspiration document
- a backlog of frontend tasks

It must not collapse into aspirational language, visual preference notes, or implementation details disguised as design governance.

---

## Relationship to the design architecture

The canonical design architecture is:

1. **Experience Direction**  
   Defines the intended quality bar, tone, experiential priorities, and directional guardrails for the project.

2. **Design Rules**  
   Defines the global structural rules that govern token logic, accessibility constraints, component behavior expectations, motion boundaries, and implementation guidance.

3. **Design Foundation**  
   Defines the project-specific design system instance derived from the project context, PRD, experience direction, growth strategy when material, and these global rules.

This means:

- direction does **not** replace system rules
- system rules do **not** replace project instantiation
- project foundation does **not** replace implementation

Each layer has a distinct responsibility.

---

## Canonical location

This capability lives at:

- `system/design/rules/`

Its current module set is:

- `README.md`
- `tokens.md`
- `accessibility.md`
- `components.md`
- `motion.md`
- `implementation-contract-guidance.md`

The folder itself is the capability.
The `README.md` file is the canonical entrypoint and index.

---

## Module responsibilities

### `tokens.md`

Defines the global rules for:

- raw tokens vs semantic tokens
- semantic color role logic
- typography scales
- spacing scales
- radius and elevation logic
- token naming discipline
- token evolution rules

This file governs how tokens should be structured before a project-specific foundation instantiates them.

### `accessibility.md`

Defines accessibility as a structural constraint, not a late checklist.

It governs rules such as:

- contrast requirements
- focus visibility
- keyboard flow expectations
- minimum target sizes
- feedback clarity
- reduced motion support
- not depending on color alone
- typographic legibility

### `components.md`

Defines the global rules for component system structure.

It governs:

- component families
- variant logic
- state expectations
- composition rules
- wrapper vs primitive boundaries
- consistency rules across surfaces
- when to create a new component vs reuse an existing pattern

### `motion.md`

Defines motion as a governed tool, not decoration.

It governs:

- when motion is appropriate
- when motion should be reduced or avoided
- acceptable intensity and rhythm
- transition purpose
- reduced motion behavior
- anti-distraction boundaries

### `implementation-contract-guidance.md`

Defines global guidance for how project foundations should express implementation-ready contracts.

It governs expectations for:

- output formats
- naming conventions
- theming strategy
- component mapping logic
- surface contracts
- accessibility enforcement in implementation
- change policy and anti-entropy expectations

Important: this file does **not** replace the project-level `Implementation Contract` inside each `design-foundation`.  
It defines the global guidance that those project contracts should follow.

---

## How this layer should be used

This layer should be read by:

- the skill that defines project-level `design-foundation`
- relevant design specialists
- frontend specialists acting as co-authors of the project implementation contract
- governance logic that needs to validate whether a project foundation is structurally sound

Typical flow:

1. project context stabilizes
2. experience direction is defined
3. PRD is defined
4. project design foundation is created
5. the foundation derives concrete design decisions from project context while respecting these global rules
6. implementation consumes the foundation instead of improvising the system

---

## Core governance rule

`design-rules` is global.  
`design-foundation` is project-specific.

This separation must remain explicit.

Never collapse the two.

If the global rules start carrying project-specific decisions, the layer becomes polluted.
If the project foundation ignores the global rules, the system becomes inconsistent.

---

## Design Rules vs Design Foundation

### Design Rules

Scope:

- cross-project
- stable structural guidance
- system constitution
- reusable governance

Questions answered:

- How should semantic tokens be structured?
- What accessibility constraints are non-negotiable?
- How should motion be bounded?
- What makes a component family coherent?
- What should an implementation contract contain?

### Design Foundation

Scope:

- one project
- concrete system instance
- applied tokens, components, states, surfaces, and contracts
- implementation-ready design architecture

Questions answered:

- Which semantic roles does this project use?
- What are the active component families for this product?
- What are the dominant surfaces and their constraints?
- How does this project map to Tailwind / shadcn / Radix / other approved substrate?
- What are the exact implementation-facing contracts for this product?

---

## Relationship to frontend

Frontend is not the owner of global `design-rules`.

However, frontend is a critical consumer of this layer and a formal co-author of the project-level `Implementation Contract` inside `design-foundation`.

This is necessary because implementation viability depends on:

- naming discipline
- token export strategy
- theming compatibility
- component mapping feasibility
- state model clarity
- risk of downstream drift

So the relationship is:

- `design-rules` defines global implementation-aware guidance
- `design-foundation` materializes project-specific implementation contracts
- frontend helps ensure those contracts are executable, not merely descriptive

---

## Anti-entropy principle

This capability exists partly to reduce entropy.

Without it, systems tend to drift through:

- ad hoc naming
- duplicated tokens
- inconsistent states
- surface-by-surface visual divergence
- accessibility regressions
- overuse of motion
- uncontrolled component proliferation
- repeated reinterpretation during implementation

Every module in this folder should contribute to preventing that drift.

---

## Evolution rule

This folder may grow over time, but it should grow conservatively.

New files should only be added when they represent a durable, reusable governance concern that does not belong inside:

- `experience-direction`
- `design-foundation`
- project artifacts
- frontend implementation docs

Modularization is allowed, but fragmentation without clear role separation should be avoided.

---

## Minimum quality bar for this capability

This capability is only healthy if it remains:

- structurally clear
- reusable across projects
- sufficiently concrete to guide foundations
- sufficiently abstract to avoid project pollution
- implementation-aware without becoming implementation-owned
- explicit about accessibility and anti-entropy

If it becomes vague, it loses force.  
If it becomes overly project-specific, it loses legitimacy.  
If it becomes purely technical, it stops acting as design governance.

---

## Immediate next steps

The next expected step for this folder is to define the initial content of:

- `tokens.md`
- `accessibility.md`
- `components.md`
- `motion.md`
- `implementation-contract-guidance.md`

Those files should be written as real governance modules, not placeholders.

