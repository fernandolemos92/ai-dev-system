# FRONTEND IMPLEMENTATION ARCHITECTURE

## Purpose

This document defines the canonical frontend implementation architecture for this system.

Its purpose is to make frontend implementation quality explicit, repeatable, reviewable, and governable.

It exists to prevent a common failure mode in AI-assisted implementation:

- functionally correct screens
- weak structural quality
- low reuse
- poor separation of responsibilities
- inconsistent design system usage
- inflated page files
- duplicated UI patterns
- scattered state ownership

This document is normative for frontend implementation work.

Skills, handoffs, reviews, and specialist behavior must align with this architecture.

This document does not define visual identity in full detail.
It defines how frontend code should be structured so that visual consistency, reuse, maintainability, and evolution remain possible.

Whenever frontend work touches visual contracts, recurring product states, shared patterns, shared UI semantics, or product-level consistency, `project/memory/design-system-integration.md` is also binding.

---

## Normative Language Convention

The following terms define the intended force of architectural statements in this document:

- **Must / Must Not** = mandatory rule
- **Should / Should Not** = expected default behavior; deviation requires clear justification
- **May** = permitted, but not required

When this document is applied under governed implementation, mandatory rules take precedence over recommendations, and recommendations take precedence over optional behavior.

---

## Goals

The frontend architecture must optimize for the following:

1. Clear separation of responsibilities
2. Reusable and scalable UI composition
3. Strong continuity with design system and product patterns
4. Predictable state ownership
5. Minimal duplication
6. Low ambiguity for future implementation sessions
7. Maintainable code under low-context execution
8. Safe growth from simple features to more complex product surfaces

---

## Core Principles

### 1. Composition over concentration
Frontend screens should be composed from focused units.
They should not become large concentration points for layout, business rules, modal logic, formatting logic, state orchestration, and API coupling at the same time.

### 2. Reuse before creation
Before creating a new UI structure, utility, or interaction pattern, implementation must check whether an equivalent or compatible unit already exists.

### 3. Locality with discipline
Logic should remain close to where it is used when that improves clarity.
But locality must not justify duplication, architectural leakage, or hidden shared concerns.

### 4. Shared concerns belong in shared places
Formatting, parsing, repeated interaction patterns, reusable visual blocks, and cross-feature behavior must not remain embedded in feature-specific files when they are genuinely shared.

### 5. Pages orchestrate, they do not own everything
Route files and page files are composition and wiring surfaces.
They are not the canonical place for concentrated UI and logic complexity.

### 6. State must have a clear owner
State should live at the lowest level that preserves correctness and clarity.
When sibling components depend on shared behavior or coordinated updates, state must move upward to a clearer owner.

### 7. Design system is an implementation dependency, not decoration
The design system is not optional polish.
It is a structural input to how UI is built, reused, and kept consistent.

### 8. Frontend structure must remain legible to future maintainers
The architecture must help future contributors understand where things belong without relying on tribal knowledge.

---

## Relationship to Design System Integration

This document defines structural frontend architecture.

It defines how route surfaces, screen composition, feature components, shared UI, hooks, utilities, adapters, and contracts should be organized.

It does not replace `design-system-integration.md`.

Whenever frontend work touches:

- visual contracts
- recurring product states
- shared product patterns
- shared UI semantics
- canonical primitives
- product-level consistency behavior

`project/memory/design-system-integration.md` remains binding in addition to this document.

This means:

- frontend structure must not bypass design-system requirements
- feature implementation must not use structural freedom as a reason to ignore consistency contracts
- design-system integration must flow through the frontend layers defined here rather than existing as a separate parallel concern

---

## Canonical Frontend Layers

The frontend architecture is organized into the following canonical layers:

1. Route / Page Layer
2. Screen / Feature Composition Layer
3. Feature Component Layer
4. Shared UI Layer
5. Hooks and State Orchestration Layer
6. API Adapter Layer
7. Utility and Formatting Layer
8. Domain Types and Contracts Layer

Not every feature requires deep complexity in every layer.
But all implementation work must respect this conceptual structure.

---

## 1. Route / Page Layer

### Purpose
The Route / Page Layer is the entry surface for a route.

### Responsibilities
This layer may:

- define page-level entry structure
- read route parameters
- connect route context to screen composition
- coordinate top-level page assembly
- attach route-level guards or wrappers
- mount the main feature screen or route composition

### This layer should generally do
- light orchestration
- route-specific setup
- high-level assembly

### This layer must not become
- the primary owner of complex modal logic
- the main home of repeated formatting/parsing helpers
- a large container for transformation-heavy logic
- the place where many unrelated UI blocks are directly implemented inline
- the default home for complex feature state

### Rule
A page file should primarily answer:

- what screen is being mounted
- what route context is being provided
- what top-level wrappers or providers are required

It should not become the implementation center of the feature.

### Hard overload rule
A page must be treated as structurally overloaded when it accumulates multiple responsibilities such as:

- route entry handling
- layout composition
- modal ownership
- transformation logic
- shared utility logic
- mutation orchestration
- repeated rendering blocks
- feature-specific state coordination across multiple sections

When this happens, extraction is not optional polish.
It is part of correct implementation.

If a page is carrying too many responsibilities, the correct response is to redistribute ownership into the appropriate layers defined in this document.

---

## 2. Screen / Feature Composition Layer

### Purpose
This layer represents the composed feature surface for a route or major product area.

Examples:
- TransactionsScreen
- PlannedVsActualScreen
- InsightsScreen
- InvestmentsScreen

### Responsibilities
This layer may:

- compose feature-specific sections
- connect major hooks to feature components
- distribute props into feature-level building blocks
- coordinate layout structure for the feature screen
- define the high-level section architecture of the screen

### This layer is the preferred home for
- feature composition
- section ordering
- high-level interaction wiring
- feature-focused orchestration that would overburden the page file

### This layer must not become
- a disguised page file with everything embedded
- a dumping ground for generic reusable UI
- a hidden location for general-purpose utilities

### Rule
If a page is becoming too large or is coordinating too many elements directly, the implementation should move that responsibility into a screen / feature composition component.

---

## 3. Feature Component Layer

### Purpose
This layer contains components specific to a feature or product flow.

Examples:
- TransactionList
- TransactionFilters
- TransactionSummarySection
- DeleteTransactionDialog
- GoalProgressBlock

### Responsibilities
This layer may:

- implement UI blocks that are specific to a single feature
- consume shared UI primitives and product-level components
- receive prepared data and callbacks from composition or hooks
- contain view-specific rendering logic that is not broadly reusable

### This layer should be used when
- the component is specific to one feature
- the component has clear semantic meaning in that feature
- extracting it improves clarity, reuse inside the feature, or reviewability

### This layer must not become
- a place for broad cross-product primitives
- a place for repeated generic components that should live in shared UI
- a place for data-fetching sprawl or broad API responsibility

### Rule
A feature component may be specific.
It does not need to be shared across the whole product to be valid.
But it must be extracted when that makes structure clearer and prevents page concentration.

---

## 4. Shared UI Layer

### Purpose
This layer contains reusable UI primitives and product-wide composed components.

This is where design system continuity becomes real in code.

### Shared UI includes
- primitives
- wrappers around primitives
- shared feedback states
- shared layout patterns
- shared cards
- shared dialog patterns
- shared form elements
- shared state visuals such as empty, loading, error, and success patterns

### Responsibilities
This layer may:

- provide stable reusable UI building blocks
- implement shared visual contracts
- centralize recurring interaction patterns
- preserve consistency across features

### This layer must not become
- a random collection of components with no semantic discipline
- a place to prematurely promote feature-specific UI
- a graveyard of unused “shared” components no feature actually consumes

### Rule
Something belongs in Shared UI when it satisfies one or more of the following:

- it is reused across multiple features
- it represents a product-wide UI contract
- consistency is more important than local freedom
- visual drift would become costly if implemented repeatedly

---

## 5. Hooks and State Orchestration Layer

### Purpose
Hooks encapsulate behavior, state orchestration, and reusable interaction logic.

### Responsibilities
Hooks may:

- coordinate local and shared state
- encapsulate feature behavior
- manage interaction flows
- expose computed state for the UI
- wrap data-fetching or mutation behavior
- provide stable interfaces to composition and components

### Hooks should be the home for
- behavior orchestration
- derived interaction state
- feature-level state coordination
- reusable behavioral contracts for UI layers

### Hooks must not become
- dumping grounds for generic utility functions
- a hiding place for formatting/parsing logic that belongs in utilities
- a place where unrelated responsibilities accumulate
- a replacement for shared domain modules or utility layers

### Rule
If a function is generic enough to be reused outside the feature, it should not live only inside a feature hook.

Examples of things that usually do **not** belong only in a feature hook:
- generic currency formatting
- generic input parsing
- broadly reusable date formatting
- generic transformation utilities
- cross-feature validation helpers

---

## 6. API Adapter Layer

### Purpose
The API Adapter Layer isolates communication with backend services or external APIs.

### Responsibilities
This layer may:

- send requests
- receive responses
- map backend payloads into frontend-friendly structures when needed
- isolate HTTP/client details
- centralize endpoint-specific interaction code

### This layer must not become
- a second home for business logic
- a UI state manager
- a substitute for hooks or composition
- a place where component concerns leak into transport code

### Rule
UI code should not scatter transport concerns across multiple screen and component files when those concerns can be isolated in adapters.

---

## 7. Utility and Formatting Layer

### Purpose
This layer contains shared pure utilities that do not belong to hooks, pages, or feature-specific components.

### Examples
- formatCurrency
- parseCurrencyInput
- normalizeDateValue
- clampPercentage
- semantic label mapping helpers
- reusable sorting or grouping helpers

### Responsibilities
This layer may:

- provide pure functions
- centralize formatting and parsing
- host shared calculations that are not feature-owned
- reduce duplication across hooks and components

### This layer must not become
- a junk drawer of unreviewed helpers
- a place for hidden feature logic disguised as generic utilities
- a substitute for domain contracts or application behavior

### Rule
If multiple features would need the same pure helper, it belongs in a shared utility layer rather than inside a feature hook or screen file.

---

## 8. Domain Types and Contracts Layer

### Purpose
This layer defines the types, contracts, and structural agreements used across the frontend implementation.

### Responsibilities
This layer may:

- define domain entities for frontend use
- define DTO-like contracts when needed
- define enums and shared type aliases
- define interfaces for reusable feature contracts

### This layer must not become
- a place for UI rendering logic
- a place for transport implementation
- a place for unrelated constants with no structural value

### Rule
Types that shape multiple parts of a feature or multiple layers of the frontend should not remain buried in a single page or component file.

---

## Folder Responsibility Model

This architecture does not require one exact folder layout for every project.
However, folder structure must reflect responsibility clearly.

A healthy frontend project may include folders such as:

- `app/`
- `components/`
- `components/ui/`
- `components/shared/`
- `features/`
- `hooks/`
- `lib/`
- `api/`
- `types/`
- `contexts/`
- `providers/`

Exact naming may vary, but responsibility must stay stable.

### Folder meaning guidance

#### `app/`
Route entry surfaces.
Should remain thin and orchestration-oriented.

#### `features/`
Feature-level screens, composition components, and feature-specific UI blocks.

#### `components/ui/`
Primitives and reusable shared visual building blocks.

#### `components/shared/`
Composed shared product components with cross-feature reuse.

#### `hooks/`
Behavior and state orchestration.
Not general utility dumping ground.

#### `lib/`
Shared pure helpers, formatting, parsing, and general-purpose utility code.

#### `api/`
Transport isolation and endpoint-level adapters.

#### `types/`
Shared contracts, entities, and structural type definitions.

#### `contexts/` or `providers/`
Cross-cutting state or application wrappers with clear scope.
Should not be created casually when simpler state ownership would suffice.

---

## Component Promotion Rules

A recurring problem in growing frontends is uncertainty about when to keep something local and when to promote it upward.

This architecture defines the following promotion rules.

### Keep a component local to a feature when
- it is clearly feature-specific
- reuse is not yet justified
- promoting it would create noise without meaningful value
- its semantics are tightly coupled to that feature alone

### Promote a component to shared UI when
- it appears in multiple features
- it represents a recurring product pattern
- consistency is important across contexts
- visual drift would be costly
- multiple teams or sessions are likely to recreate it

### Promote a helper to shared utilities when
- it is pure
- it is reused or likely to be reused
- it solves a generic formatting/parsing/calculation problem
- keeping it local would create hidden duplication

### Promote a state pattern when
- multiple screens repeat the same interaction or feedback structure
- the same modal, loading, empty, error, or form-feedback flow appears repeatedly
- product continuity matters more than local improvisation

### Rule
Promotion should be driven by semantic recurrence and consistency needs, not by extraction for its own sake.

---

## State Ownership Rules

State must always have a clear owner.

### Keep state local when
- it is truly local to a single component
- no sibling or parent coordination is required
- lifting it would add indirection without benefit

### Lift state up when
- multiple sibling components depend on the same data or control flow
- duplicated local state creates inconsistency risk
- the UI flow depends on coordinated updates
- the current location hides ownership and causes confusion

### Avoid fragmented ownership when
- modal open state lives in one place
- selected entity lives in another
- pending mutation state lives in a third
- validation or confirmation state is spread across unrelated blocks

That pattern creates fragile UI behavior and poor maintainability.

### Rule
State should be moved upward when doing so makes ownership more coherent and interaction behavior easier to understand.

This architecture does not adopt “lift state up everywhere.”
It adopts “lift state up when it reduces ambiguity, duplication, or coordination risk.”

---

## Design System Touchpoints

The frontend architecture must remain structurally aligned with the design system.

This means:

- shared UI must implement design system contracts
- feature components must consume shared UI where applicable
- route and screen layers must not bypass the design system casually
- recurring states must be normalized into reusable patterns
- shadcn or any base UI toolkit is not the design system by itself
- third-party building blocks must be adapted to the product’s design contracts

### Practical implications
If a project already has:
- a canonical confirm dialog pattern
- a canonical empty state pattern
- a canonical metric card pattern
- a canonical form feedback pattern

then new features must prefer those patterns over ad hoc local alternatives.

---

## Allowed Pragmatism

This architecture does not require unnecessary extraction or architectural inflation.

Not every frontend change requires:
- a new layer
- a new shared component
- a new hook
- a new feature folder
- state lifting
- promotion to shared UI
- screen-level decomposition

Small, local, low-risk implementation may remain local when all of the following are true:

- responsibility remains clear
- reuse is not yet justified
- consistency is preserved
- no meaningful architectural drift is introduced
- the implementation does not violate the applicable canon
- the page or component does not become structurally overloaded

Pragmatism is allowed.
Silent structural degradation is not.

---

## Review Questions for Frontend Implementation

Every meaningful frontend implementation should be reviewable against the following questions:

### Page and composition
- Is the page thin enough?
- Is the page mostly orchestration?
- Should some logic move into a screen / feature composition component?
- Is the page structurally overloaded?

### Feature structure
- Are feature-specific blocks clearly separated?
- Did the implementation avoid concentrating too much in one file?
- Are screen sections composed from focused units?

### Shared UI and reuse
- Did the implementation reuse existing shared UI where appropriate?
- Did it create a new component unnecessarily?
- Should any newly created component have been promoted to shared UI?

### Hooks and utilities
- Are hooks focused on behavior and state orchestration?
- Did generic helpers leak into feature hooks?
- Are pure shared helpers located in an appropriate utility layer?

### State ownership
- Does state have a clear owner?
- Was state lifted when necessary?
- Is there duplicated or fragmented state across siblings or distant components?

### Design system continuity
- Does the implementation reinforce or bypass product consistency?
- Are recurring patterns treated consistently?
- Did the feature create visual drift through ad hoc local implementation?

---

## Review Outcome Guidance

A review against this canon may conclude one of the following:

- **aligned**
- **aligned with debt**
- **rework required**
- **structurally blocked**

### Meaning guidance

#### aligned
The implementation is functionally correct and structurally aligned with this canon.

#### aligned with debt
The implementation is acceptable, but carries bounded structural debt that should remain visible and should not be normalized into future work.

#### rework required
The implementation works partially or fully, but violates this canon in a meaningful enough way that correction is required before the work should be treated as healthy.

#### structurally blocked
The implementation is not acceptable as delivered because structural misalignment is severe enough that continued progress on top of it would reinforce architectural drift.

---

## Frontend Anti-Patterns

The following are explicit anti-patterns under this architecture.

### 1. Inflated page files
A `page.tsx` or equivalent file becomes the home for:
- full layout
- state orchestration
- modal definitions
- repeated helper functions
- business transformations
- event wiring
- visual rendering of many unrelated blocks

### 2. Hooks as utility dumping grounds
Feature hooks contain:
- generic formatters
- input parsers
- reusable helpers
- unrelated transformations

just because the hook already exists.

### 3. Shared component avoidance
A reusable component exists but the feature reimplements the same structure locally.

### 4. Premature “shared” promotion
A highly specific feature component is moved to shared UI without real justification, creating noise and poor abstraction.

### 5. Scattered state ownership
Selection state, modal state, mutation state, and derived view state are split across unrelated nodes without a coherent owner.

### 6. Ad hoc design system bypass
A feature directly creates local markup and styling for a recurring pattern instead of using or extending the shared design contract.

### 7. Utility misplacement
Generic helpers are imported from feature hooks or page files because they were never moved to a proper shared utility location.

### 8. Ambiguous responsibility boundaries
Files or folders exist, but their role is unclear:
- screen file behaving like a page
- hook behaving like a service
- shared component behaving like a feature block
- utility file hiding domain behavior

### 9. Over-concentration in a single component
One component becomes responsible for:
- rendering
- transformation
- state ownership
- modal flow
- mutation handling
- error feedback
- formatting

when decomposition would clearly improve structure.

---

## Architectural Guidance for AI-Assisted Implementation

This project is designed for governed AI-assisted execution.
Therefore the frontend architecture must remain especially legible and explicit.

Implementation should favor:

- clearly named files
- stable responsibility boundaries
- minimal hidden coupling
- explicit extraction when a unit becomes overloaded
- reuse of canonical product patterns
- future readability under reduced context

AI-assisted implementation must not be judged only by whether the UI works.
It must also be judged by whether the code structure remains coherent under continued evolution.

---

## Decision Rule for New Frontend Work

Before implementing or modifying a frontend feature, the implementation should answer:

1. What is the route entry surface?
2. What should remain in the page layer?
3. What should move into screen / feature composition?
4. What UI is feature-specific?
5. What UI is shared?
6. What behavior belongs in hooks?
7. What logic belongs in shared utilities?
8. What state needs a clearer owner?
9. Which design system patterns must be reused?
10. What anti-pattern must be explicitly avoided in this change?

If these questions are not answerable, the implementation boundary is not yet clear enough.

---

## Final Rule

A frontend implementation is not considered high quality merely because it works.

It is considered high quality when it is:

- functionally correct
- structurally clear
- consistent with product patterns
- disciplined in state ownership
- deliberate in reuse
- sustainable for future evolution

This is the canonical standard for frontend implementation in this system.