# DESIGN SYSTEM INTEGRATION

## Purpose

This document defines how the design system must integrate with implementation architecture in this system.

Its purpose is to ensure that design consistency is produced by structure, contracts, reusable primitives, patterns, review rules, and implementation discipline — not by isolated good intentions.

This document exists to prevent a common failure mode in product implementation:

- a component library exists, but product consistency does not
- shared components exist, but are bypassed casually
- visual patterns drift across features
- identical interaction states are implemented differently
- third-party UI building blocks are treated as the design system itself
- teams implement “similar enough” UI without a stable product contract
- design system decisions do not reliably shape implementation

This document is normative for frontend implementation work that touches product UI.

Skills, handoffs, reviews, specialist behavior, and frontend implementation must align with this document.

This document does not define every visual decision of a product.
It defines the structural integration model that makes consistency possible and sustainable.

This document does not replace `project/memory/frontend-implementation-architecture.md`.
It defines how consistency contracts must flow through the frontend layers established there.

---

## Normative Language Convention

The following terms define the intended force of architectural statements in this document:

- **Must / Must Not** = mandatory rule
- **Should / Should Not** = expected default behavior; deviation requires clear justification
- **May** = permitted, but not required

When this document is applied under governed implementation, mandatory rules take precedence over recommendations, and recommendations take precedence over optional behavior.

---

## Goals

The design system integration model must optimize for the following:

1. Consistency across screens, flows, and features
2. Stable translation from design intention into implementation
3. Reuse of product-approved patterns
4. Clear distinction between primitives, shared components, and feature UI
5. Strong coupling between design system and frontend architecture
6. Reduced visual drift during ongoing implementation
7. Scalable adoption across future product surfaces
8. Reviewable design consistency decisions
9. Safe use of third-party UI foundations without losing product identity
10. Maintainable growth under AI-assisted implementation

---

## Core Principle

A design system is not merely a component library.

A real design system includes:

- foundations
- tokens
- semantic rules
- interaction rules
- accessibility rules
- reusable primitives
- shared product components
- recurring patterns
- promotion rules
- implementation guidance
- review criteria
- enforcement discipline

This system adopts that broader view.

A UI toolkit may support implementation.
A component library may accelerate implementation.
But neither one is the design system by itself.

---

## Relationship to Frontend Implementation Architecture

This document is structurally coupled to `project/memory/frontend-implementation-architecture.md`.

The frontend canon defines:
- route and page structure
- screen composition structure
- feature component boundaries
- shared UI boundaries
- hooks and utility placement
- state ownership expectations
- architectural anti-patterns for frontend code

This document defines:
- how consistency must be preserved across those frontend layers
- how foundations, primitives, shared product components, and patterns must influence implementation
- how product UI should be promoted, reused, and reviewed
- how visual and interaction drift must be prevented

This means:

- the frontend canon defines **where** UI concerns live
- this document defines **how** consistency must flow through those places
- feature implementation must not use frontend structural freedom as a reason to bypass the design system
- design-system discipline must be enforced through the frontend structure rather than treated as a separate parallel concern

Whenever frontend work touches:
- visual contracts
- recurring product states
- shared UI semantics
- shared product patterns
- product-level consistency behavior

this document remains binding in addition to the frontend canon.

---

## Design System Integration Model

This architecture recognizes five integration layers:

1. Foundations
2. Primitives
3. Shared Product Components
4. Product Patterns
5. Feature-Specific UI

These layers must remain conceptually distinct.

---

## 1. Foundations

### Purpose
Foundations define the non-negotiable visual and interaction base of the product system.

### Foundations include
- design tokens
- color system
- typography system
- spacing scale
- sizing logic
- border radius rules
- elevation or depth rules
- icon usage rules
- motion rules
- accessibility constraints
- semantic state rules

### Foundations are responsible for
- visual coherence
- theming discipline
- semantic stability
- accessibility baseline
- predictable implementation inputs

### Foundations must not become
- scattered constants hidden across the codebase
- arbitrary local styling choices repeated in feature files
- undocumented visual assumptions that only exist in design tools

### Rule
If a value or rule is meant to remain consistent across the product, it belongs to the foundation layer rather than local feature implementation.

---

## 2. Primitives

### Purpose
Primitives are the base implementation units that embody foundation decisions in reusable form.

Examples:
- Button
- Input
- Select
- Textarea
- Checkbox
- Radio
- Switch
- Dialog
- Sheet
- Tooltip
- Badge
- Card
- Tabs
- Alert
- Spinner
- Skeleton

### Responsibilities
Primitives may:

- encode foundational styling rules
- encode interaction affordances
- provide accessibility-aware structural UI
- expose controlled variants and sizes
- serve as building blocks for more complex components

### Primitives must not become
- visually uncontrolled one-off components
- an unbounded variant explosion
- a place where feature-specific semantics are hardcoded without reuse value
- a second, hidden feature layer

### Rule
Primitives should remain broad enough for reuse, but narrow enough to preserve consistency and semantic discipline.

---

## 3. Shared Product Components

### Purpose
Shared Product Components are reusable components that represent product-level UI contracts above primitives.

Examples:
- MetricCard
- SectionHeader
- EmptyState
- ConfirmDestructiveDialog
- FeedbackBanner
- SummaryStatBlock
- FilterBar
- FormSection
- DataStateBlock
- InlineValidationMessage
- OverviewTile

### Responsibilities
Shared Product Components may:

- combine primitives into product-specific building blocks
- encode canonical layout and content behavior
- normalize recurring product interactions
- reduce visual drift across features

### Shared Product Components should exist when
- a structure repeats across multiple features
- the product needs a stable contract for a recurring block
- consistency is more important than local improvisation
- features would otherwise reimplement similar blocks differently

### Shared Product Components must not become
- random wrappers with no product-level contract
- premature abstractions without clear reuse or semantic value
- a dumping ground for feature-specific code mislabeled as shared

### Rule
A shared product component exists to preserve product continuity, not merely to avoid duplication.

---

## 4. Product Patterns

### Purpose
Patterns represent recurring interaction or presentation structures that go beyond a single component.

Patterns define how multiple UI elements work together in a repeatable product-approved way.

Examples:
- Empty state pattern
- Loading state pattern
- Error state pattern
- Success feedback pattern
- Destructive confirmation pattern
- Filter + summary + results pattern
- Form submission + validation feedback pattern
- Drawer-based edit pattern
- Inline edit pattern
- KPI overview pattern
- Detail + actions modal pattern

### Responsibilities
Patterns may:

- normalize multi-component behavior
- define recurring state transitions
- reduce ambiguity in screen-level UI decisions
- preserve coherence across flows and feature boundaries

### Patterns must not become
- vague design aspirations with no implementation consequence
- optional references ignored during feature implementation
- duplicated screen-level structures rebuilt from scratch each time

### Rule
If a recurring UI structure involves multiple elements, state transitions, or feedback flows, it should be treated as a pattern rather than left to per-feature improvisation.

---

## 5. Feature-Specific UI

### Purpose
Feature-Specific UI contains interface pieces whose semantics belong only to a given feature.

Examples:
- TransactionInstallmentBreakdown
- GoalContributionComposer
- InvestmentPerformanceChartLegend
- CategoryTransferPanel

### Responsibilities
Feature-Specific UI may:

- solve feature-local UI needs
- compose primitives, shared product components, and product patterns
- implement semantics that do not justify system-wide promotion

### Feature-Specific UI must not become
- the place where recurring product patterns are silently reinvented
- a justification for bypassing shared product contracts
- a hidden second design system

### Rule
Feature-specific UI is valid and necessary.
But it must consume the design system correctly rather than replacing it.

---

## Design System Layer Relationship

The design system should be understood as a flow:

**Foundations → Primitives → Shared Product Components → Product Patterns → Feature-Specific UI**

This means:

- feature UI must not bypass foundations casually
- patterns must not ignore shared components when those components already exist
- shared product components should be built on primitives
- primitives should encode foundational decisions
- foundations should drive consistent product implementation inputs

If this chain breaks, consistency degrades.

---

## Foundations and Token Discipline

### Purpose
Tokens are the canonical vehicle for portable, repeatable visual decisions.

### Token categories may include
- color tokens
- spacing tokens
- typography tokens
- radius tokens
- shadow/elevation tokens
- motion tokens
- semantic state tokens
- surface tokens
- border tokens

### Rule
Implementation should prefer semantic tokens over arbitrary local values whenever a semantic token exists.

### Examples
Use:
- semantic text color token
- semantic destructive color token
- semantic spacing scale
- canonical radius token

Avoid:
- arbitrary hex values in local feature code
- random spacing values chosen ad hoc
- one-off border radius values
- feature-local shadow improvisation without contract support

### Why this matters
Tokens make consistency portable, reviewable, and themeable.
Without token discipline, shared components still drift over time.

---

## Theming Rules

### Purpose
Theming allows brand expression or contextual variation without breaking structural consistency.

### Theming must preserve
- semantic meaning
- accessibility
- visual hierarchy
- pattern continuity
- product recognizability

### Theming must not allow
- uncontrolled local overrides
- arbitrary per-feature reinterpretation of product states
- redefinition of interaction semantics without design-system intent

### Rule
Themes may change presentation within approved system boundaries.
Themes must not silently break product contracts.

### Practical implication
Branding and product identity may vary through tokens and approved theme layers.
But the system should still preserve:
- recognizable state behavior
- readable hierarchy
- consistent component semantics
- stable accessibility

---

## Accessibility Integration

Accessibility is not a post-implementation enhancement.
It is part of the design system contract.

### Accessibility must influence
- color contrast
- focus visibility
- interaction targets
- state communication
- error feedback
- keyboard interaction
- screen-reader-friendly structure
- semantic role usage

### Rule
A shared component or pattern is not fully valid unless its accessibility behavior is part of its contract.

### Consequence
Implementation must not treat accessibility as a separate later pass when defining design system primitives or shared product components.

---

## Motion Integration

Motion is part of product consistency when applicable.

### Motion rules must define
- when motion is used
- when motion is reduced or avoided
- what kinds of transitions are canonical
- what interaction states require feedback
- what should remain static

### Motion must not become
- decoration layered on top of structure without product meaning
- inconsistent screen-level improvisation
- gratuitous animation that weakens clarity or performance

### Rule
Motion belongs to the design system when it affects product continuity, user understanding, or interaction feedback.

---

## State Pattern Standardization

Consistency often breaks most visibly in UI states.

This system standardizes the need to define canonical patterns for at least the following recurring states:

- empty state
- loading state
- error state
- success state
- destructive confirmation state
- validation error state
- disabled state
- selected or active state
- informational notice state
- partial data state, when relevant

### Rule
If a product repeatedly expresses the same kind of state, that state must not be reinvented independently in each feature.

### Practical implication
If a product has a canonical empty state or destructive confirmation dialog, new features should consume that pattern rather than creating local approximations.

---

## Promotion Rules

A central cause of inconsistency is unclear promotion logic.

This system defines the following promotion rules.

### Keep something in Feature-Specific UI when
- it solves a truly local need
- it does not express a recurring product contract
- reuse is not yet justified
- promoting it would create abstraction noise

### Promote to Product Pattern when
- the same multi-element interaction or state flow recurs
- multiple features need the same composition logic
- a shared interaction standard improves product continuity

### Promote to Shared Product Component when
- a reusable block appears in multiple places
- a stable product-level contract is needed
- local reinvention is already creating drift risk

### Promote to Primitive only when
- the concern is foundational enough
- the semantics are broad
- it serves as a reusable base rather than a product-specific composite

### Rule
Promotion should be driven by semantic recurrence and consistency needs, not by abstraction for its own sake.

---

## Third-Party UI Toolkit Rules

This system may use third-party UI foundations such as shadcn, Radix, or similar tools.

### Rule
A third-party toolkit is an implementation substrate, not the design system itself.

### Allowed role of third-party tools
- accelerate accessible primitive construction
- reduce low-level implementation burden
- provide reliable interaction mechanics
- support the foundation-to-primitive layer

### Forbidden misuse
- treating toolkit defaults as final product language
- bypassing product contracts because the library already has a component
- allowing different features to use the same toolkit in incompatible ways
- assuming imported components automatically preserve product consistency

### Practical implication
If a library provides a dialog, button, or card, those units must still be adapted to the product’s design system contract before becoming canonical shared usage.

---

## Design System and Frontend Architecture Coupling

The design system does not float independently from frontend architecture.

It must map clearly into frontend implementation layers.

### Foundation layer maps into
- tokens
- theme variables
- semantic visual rules
- motion and accessibility rules

### Primitive layer maps into
- shared UI primitives
- design-aware wrappers
- stable variant contracts

### Shared Product Components map into
- composed shared UI blocks
- canonical reusable product-level interface units

### Product Patterns map into
- repeated UI flows
- recurring feature structures
- section composition standards
- state flow guidance

### Feature-Specific UI maps into
- feature components
- screen-specific composed UI
- local UI blocks that still consume the system correctly

### Rule
Frontend architecture and design system integration must reinforce each other.
If they diverge, consistency becomes accidental rather than reliable.

---

## Consistency Enforcement Surfaces

Consistency must be reinforced through explicit surfaces, not left to personal taste or best effort.

The primary enforcement surfaces in this system are:

- foundations and token discipline
- primitive contracts
- shared product component contracts
- canonical product patterns
- promotion rules
- implementation constraints
- review criteria
- anti-pattern awareness
- future tooling such as linting, Storybook checks, visual review, token enforcement, or design-system conformance checks when adopted

### Rule
If consistency depends only on memory, intention, or taste, it is not yet strongly enforced enough.

### Practical implication
A design system becomes reliable when the implementation environment repeatedly pushes work back toward:
- tokens instead of arbitrary values
- canonical primitives instead of ad hoc base elements
- shared product components instead of repeated reinvention
- patterns instead of local flow improvisation
- reviewable contracts instead of subjective approximation

---

## Implementation Rules

Every implementation touching UI should follow these rules.

### 1. Reuse before invention
Before creating a new UI block, check:
- is there an existing primitive?
- is there an existing shared product component?
- is there an existing pattern?
- is the desired variation already supported by the design contract?

### 2. Prefer semantic extension over ad hoc duplication
If a shared pattern exists but needs small adaptation, prefer extending it within the design contract over rebuilding it locally.

### 3. Do not bypass product states casually
If empty, loading, error, success, or destructive states are already normalized, features must use them.

### 4. Do not mix multiple visual languages in the same product surface
A feature must not combine:
- raw toolkit defaults
- local improvised styling
- shared product components
- inconsistent spacing or state conventions

without clear system intent.

### 5. New shared units require clear justification
Promoting a component or pattern upward should answer:
- what recurring contract does it represent?
- where is reuse expected?
- what drift or inconsistency does it prevent?

### 6. Shared units must be actually consumable
A shared component that no feature can realistically consume is not a successful shared abstraction.

---

## Review Questions for Design System Integration

Every meaningful UI implementation should be reviewable against the following questions:

### Foundations
- Did the implementation use canonical token logic?
- Did it introduce arbitrary visual values that should have come from the system?
- Did semantic styling remain clear?

### Primitives
- Did the feature reuse existing primitives where appropriate?
- Did it stretch primitive variants beyond healthy limits?
- Should a newly created base unit really exist as a primitive?

### Shared Product Components
- Did the feature reuse shared product-level components?
- Did it locally reimplement a repeated product block?
- Should a newly introduced block be promoted upward?

### Patterns
- Did the implementation follow established product patterns?
- Did it improvise recurring states differently from the rest of the system?
- Should the interaction be codified as a pattern for future reuse?

### Feature-Specific UI
- Is the feature-local implementation truly feature-specific?
- Is it consuming the system properly?
- Is it hiding a recurring need that should be promoted?

### Accessibility
- Is accessibility part of the component or pattern contract?
- Did focus, contrast, semantics, and feedback remain consistent?

### Theming and consistency
- Did the implementation preserve semantic meaning under the theme?
- Did local overrides weaken product continuity?

### Third-party integration
- Is the feature using the toolkit as substrate or mistaking it for the product system?
- Were toolkit components adapted to product conventions?

---

## Review Outcome Guidance

A review against this canon may conclude one of the following:

- **aligned**
- **aligned with debt**
- **rework required**
- **structurally blocked**

### Meaning guidance

#### aligned
The implementation is consistent with the applicable design-system contracts and does not introduce meaningful visual or interaction drift.

#### aligned with debt
The implementation is acceptable, but carries bounded design-system debt that should remain visible and should not be normalized into future work.

#### rework required
The implementation works, but violates the design-system canon in a meaningful enough way that correction is required before the work should be treated as healthy.

#### structurally blocked
The implementation is not acceptable as delivered because consistency breakdown is severe enough that continued work on top of it would reinforce product drift and weaken the design system.

---

## Anti-Patterns

The following are explicit anti-patterns under this architecture.

### 1. Component library without product contract
A set of components exists, but there is no stable guidance for:
- how they are used
- when they are used
- what patterns they support
- how they preserve consistency

### 2. Shared component bypass
A reusable product component exists, but a feature reimplements it locally with slightly different spacing, states, or semantics.

### 3. Toolkit-as-design-system thinking
A team imports a library component and treats that as sufficient product consistency.

### 4. Local visual improvisation
A feature uses arbitrary colors, spacing, states, or feedback patterns when canonical system rules already exist or should exist.

### 5. Variant explosion
A primitive accumulates too many variants because the system is compensating for weak product patterns.

### 6. Premature promotion
A feature-specific block is promoted to shared too early, creating noise and fake consistency.

### 7. Repeated pattern without codification
The same empty/loading/error/confirmation structure appears in several features, but remains unstandardized.

### 8. Accessibility as afterthought
A component is visually shared but behaviorally inconsistent or inaccessible.

### 9. Theme drift
Local theming overrides break semantic state meaning or visual hierarchy.

### 10. Dual design language
One product surface mixes:
- local custom styling
- raw toolkit defaults
- shared product patterns
- unrelated spacing/state logic

without a controlled contract.

---

## AI-Assisted Implementation Guidance

This system is designed for governed AI-assisted implementation.

Therefore design system integration must remain especially explicit.

AI-assisted implementation should not be trusted to preserve consistency through vague intention alone.

It must be guided by:

- stable foundational inputs
- reusable primitives
- explicit product-level components
- defined recurring patterns
- promotion rules
- review criteria
- anti-pattern awareness

When AI is asked to implement UI, it must not simply create a plausible interface.
It must align with the system’s established consistency model.

---

## Decision Rule for New UI Work

Before implementing or modifying a UI surface, the implementation should answer:

1. What foundations apply here?
2. What tokens or semantic styling rules should be used?
3. What primitives already exist for this need?
4. What shared product components already exist?
5. Is this a recurring product pattern?
6. Is this UI truly feature-specific?
7. What state patterns must remain consistent?
8. Does theming need to be preserved here?
9. What accessibility requirements are part of the contract?
10. Is a third-party toolkit being used as substrate or being mistaken for the design system?
11. What should remain local?
12. What should be promoted?
13. What anti-pattern must be explicitly avoided in this change?

If these questions are not answerable, the design-system integration boundary is not yet clear enough.

---

## Final Rule

A UI is not considered design-system-aligned merely because it uses shared components.

It is considered aligned when it is:

- grounded in foundations
- disciplined in token usage
- built from appropriate primitives
- consistent in shared product components
- faithful to recurring patterns
- deliberate about promotion
- accessible by contract
- theme-safe
- resistant to visual drift
- sustainable for future evolution

This is the canonical standard for design system integration in this system.