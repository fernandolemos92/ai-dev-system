# Design Governance Policy

## Purpose

This policy defines how the new design layer is integrated into the ai-dev-system governance model.

It exists to prevent the design architecture from being treated as:

- a loose creative extension
- an implicit frontend concern
- an ungoverned design sprint
- a runtime capability that is "already everywhere" before the core governance files are updated

This policy establishes the canonical relationship between:

- Experience Direction
- Design Rules
- Design Foundation
- Implementation Contract
- project state
- artifact lifecycle
- workflow traversal
- downstream implementation

---

## Why This Policy Exists

The system has already converged on an important architectural reality:

- `experience-direction` is not a full design system
- `design-rules` are global system constitution
- `design-foundation` is the project-level design system artifact
- `Implementation Contract` is a mandatory section inside the project-level foundation

That architecture is strong, but it introduces a governance risk:

If the design layer is partially modeled in skills and artifacts but not recognized in the core governance layer, the system can start narrating capabilities it does not yet formally support.

This policy prevents that drift.

---

## Canonical Design Layer

The design layer is composed of three distinct levels.

### 1. Experience Direction

Purpose:
- define upstream experience guardrails
- articulate quality bar, tone, interaction priorities, and surface-level tension

It is direction-first.  
It is not a complete design system.

Canonical location:
- `project/experience/...`

---

### 2. Design Rules

Purpose:
- define the global constitutional rules of design across the system
- establish how tokens, accessibility, components, motion, and implementation-contract seriousness are governed

It is global.  
It is not project-specific.  
It is not a product artifact.

Canonical location:
- `system/design/rules/`

---

### 3. Design Foundation

Purpose:
- instantiate the design system for a specific project
- translate product direction into an implementation-capable design layer

It is project-specific.  
It is an artifact family with lifecycle.

Canonical location:
- `project/design/...`

---

## Implementation Contract

The `Implementation Contract` is not a separate macro-stage.

It is a mandatory section inside a valid project-level `design-foundation`.

Its purpose is to answer:

> How does this design system become code without downstream reinterpretation drift?

The system-wide expectations for this contract are governed in:

- `system/design/rules/implementation-contract-guidance.md`

The project-specific contract lives inside:

- `project/design/active/DESIGN-FOUNDATION-XXX.md`

---

## Canonical Filesystem Responsibilities

### Global layer
- `system/design/rules/README.md`
- `system/design/rules/tokens.md`
- `system/design/rules/accessibility.md`
- `system/design/rules/components.md`
- `system/design/rules/motion.md`
- `system/design/rules/implementation-contract-guidance.md`

### Project layer
- `project/design/templates/DESIGN_FOUNDATION_TEMPLATE.md`
- `project/design/active/`
- `project/design/done/`
- `project/design/archived/`

### Skill layer
- `.claude/skills/define-design-foundation/SKILL.md`

---

## Pipeline Position

The canonical intended pipeline is:

- `discover-missing-context`
- `structured-research`
- `define-experience-direction`
- `define-growth-strategy`
- `define-prd`
- `define-design-foundation`
- `define-success-scenarios`
- `plan-tasks`
- `prepare-handoff`
- `authorize-implementation`
- `bootstrap-implementation-baseline`
- `implement-approved-scope`
- `review-delivery`

This preserves the rule that:

- PRD remains the canonical product-definition artifact
- design-foundation comes after PRD
- validation/tasks/handoff should not be derived before the design layer is sufficiently concrete when interface coherence is materially relevant

---

## Governance Rule: Design Is Real, But Must Be Introduced Honestly

The design layer should be treated as a real governed layer.

However, until the core governance files are updated, the system must not pretend that every runtime and state artifact already recognizes it automatically.

This means:

- a skill may already exist
- a project artifact family may already exist
- a rules capability may already exist

But the system must still remain honest about whether:

- `CLAUDE.md` formally recognizes the layer
- `PROJECT_STATE_TEMPLATE.md` supports it canonically
- `PROJECT_STATE.md` is already using it coherently
- workflows are already updated to traverse it formally
- runtime routing/reporting recognizes it without workaround logic

This policy rejects "silent retroactive governance".

---

## Transitional Rule

Until the core governance files are updated, the system should operate under the following transitional rule:

### Allowed
- create and use `design-foundation` artifacts
- use `define-design-foundation`
- treat design-rules as real system capability
- reference the design layer in bounded, explicit, documented ways

### Not allowed
- narrate design as fully integrated if core governance still lacks it
- write state as if design support is universally canonical when that is not yet true
- skip honesty about transitional behavior
- let downstream steps assume the layer without explicit upstream availability

This rule preserves trust during adoption.

---

## Project State Integration

Once the governance update is performed, the state model should be able to represent design explicitly.

### Recommended canonical additions
- `Current Phase: design`
- `Active Design Foundation: DESIGN-FOUNDATION-001`
- `Next Expected Skill: define-success-scenarios`

### Design-state rule
If `Current Phase` is `design`, the state should not simultaneously imply that validation, handoff, or implementation is already the immediate active focus.

### Artifact truth rule
If a design foundation is active, it must be represented as a real active artifact, not implied informally through notes or memory.

---

## Artifact Lifecycle Rules For Design

The design family should follow the same conservative lifecycle discipline as the other project artifact families.

### Required lifecycle states
- `active`
- `done`
- `archived`

### Governance expectations
- only one active design foundation per project line unless a later governance decision explicitly allows otherwise
- promotion must be conservative
- design foundation should not be marked done before its implementation-contract seriousness is materially sufficient
- design artifacts must not be confused with experience artifacts

### Important distinction
- `experience` and `design` are not synonyms
- `experience-direction` should not be promoted or re-labeled as foundation without material transformation

---

## Closure Criteria For A Valid Design Foundation

A design foundation must not close as valid unless it materially includes:

- design intent summary
- token system
- component families
- variant and state model
- surface contracts
- accessibility materialization
- motion rules when relevant
- Implementation Contract
- versioning / change policy
- anti-entropy rules

If these are absent, the artifact may still be useful, but it should not be treated as a completed design foundation.

---

## Specialist Expectations

`define-design-foundation` should not operate as a purely aesthetic specialist call.

Minimum expected contributors:
- design-system
- ui
- information-architecture
- frontend

Conditional contributors:
- motion
- branding
- page-strategy

Frontend is not merely a downstream validator.  
Frontend is a co-author of the implementation seriousness of the foundation, especially in:

- naming
- output format
- theming feasibility
- component mapping
- drift reduction

---

## Anti-Drift Rules

The design layer exists partly to prevent these specific failure modes:

### 1. Direction Drift
`experience-direction` keeps being asked to do the work of design-foundation.

### 2. Product Drift
Product behavior and design structure diverge because the design layer was skipped.

### 3. Frontend Drift
Frontend reinterprets tokens, variants, states, and surfaces ad hoc during implementation.

### 4. Surface Drift
Landing, dashboard, editor, and transactional flows begin to feel like different products.

### 5. Accessibility Drift
Accessibility appears as a downstream correction instead of upstream design constraint.

### 6. Governance Drift
The system narrates a formal design layer that has not yet been canonically integrated.

This policy should be used to resist all six.

---

## What This Policy Does Not Do

This policy does not:

- replace `CLAUDE.md`
- replace `PROJECT_STATE_TEMPLATE.md`
- replace `PROJECT_STATE.md`
- replace workflow contracts
- replace the project-specific design foundation artifact
- define product-specific design decisions

It exists to align those later updates and reduce integration error.

---

## Recommended Next Governance Updates

After this policy exists, the next canonical updates should be:

1. update `CLAUDE.md`
   - recognize the design layer explicitly
   - place `define-design-foundation` in the pipeline
   - define what design can and cannot do

2. update `project/templates/PROJECT_STATE_TEMPLATE.md`
   - add canonical support for design phase
   - add `Active Design Foundation`

3. update live `project/PROJECT_STATE.md`
   - only if and when the project is actually at that operational moment

4. update workflow definitions where necessary
   - especially product-definition / downstream handoff boundaries

5. review state/routing honesty
   - ensure the runtime does not overclaim full design integration before those updates land

---

## Final Rule

Design is now part of the system architecture.

But in this system, architecture only becomes trustworthy when it is:

- explicit
- bounded
- lifecycle-aware
- state-aware
- governance-backed

So the global rule is:

A design layer may be introduced incrementally, but it may never be introduced ambiguously.