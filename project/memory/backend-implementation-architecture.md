# BACKEND IMPLEMENTATION ARCHITECTURE

## Purpose

This document defines the canonical backend implementation architecture for this system.

Its purpose is to make backend implementation quality explicit, repeatable, reviewable, and governable.

It exists to prevent a common failure mode in AI-assisted backend implementation:

- routes that become bloated orchestration centers
- business rules leaking into HTTP handlers
- repositories taking ownership of domain decisions
- inconsistent validation boundaries
- inconsistent authentication and ownership enforcement
- mixed concerns across transport, application, and persistence
- weak error contracts
- low predictability for future maintenance

This document is normative for backend implementation work.

Skills, handoffs, reviews, and specialist behavior must align with this architecture.

This document does not prescribe one specific framework structure for every backend.
It defines the canonical responsibility model that backend code must follow regardless of local framework choices.

---

## Normative Language Convention

The following terms define the intended force of architectural statements in this document:

- **Must / Must Not** = mandatory rule
- **Should / Should Not** = expected default behavior; deviation requires clear justification
- **May** = permitted, but not required

When this document is applied under governed implementation, mandatory rules take precedence over recommendations, and recommendations take precedence over optional behavior.

---

## Goals

The backend architecture must optimize for the following:

1. Clear separation of responsibilities
2. Predictable request flow
3. Strong boundary discipline
4. Consistent application of authentication and ownership rules
5. Stable persistence isolation
6. Maintainable application logic
7. Reviewable error and validation behavior
8. Low ambiguity for future implementation sessions
9. Safe evolution under AI-assisted implementation
10. Readable structure under low-context continuation

---

## Core Principles

### 1. Transport is not business logic
HTTP entrypoints must receive, translate, delegate, and return.
They must not become the true home of application logic.

### 2. Use cases own the action
A backend action should have a clear application owner.
The use case or application service layer is the canonical place for flow orchestration and business behavior.

### 3. Persistence is not policy
Repositories are responsible for reading and writing data.
They are not the canonical place for business decisions, authorization rules, or request interpretation.

### 4. Boundaries must stay visible
Validation, authentication, ownership, application flow, persistence, and error translation must remain conceptually distinct even when implemented pragmatically.

### 5. The same kind of problem should be solved the same way
If one route validates input at the boundary, extracts user ownership, delegates to a use case, and translates errors cleanly, other routes of the same class should follow the same pattern.

### 6. Framework details must not dominate application structure
The framework may shape file layout and mechanics, but it must not erase the architectural model.

### 7. Shared rules belong in shared mechanisms
Cross-cutting concerns such as authentication, permission checks, schema validation, error mapping, and response contracts should not be scattered arbitrarily.

### 8. Backend code must remain understandable without oral history
The system should communicate responsibility through structure, naming, and layer discipline, not through unwritten team assumptions.

---

## Canonical Backend Layers

The backend architecture is organized into the following canonical layers:

1. HTTP Transport Layer
2. Application Layer
3. Persistence Layer
4. Supporting Layers

Not every backend feature needs deep complexity in every layer.
But all implementation work must respect this conceptual model.

---

## 1. HTTP Transport Layer

### Purpose
The HTTP Transport Layer is the entry surface for inbound requests.

This layer is responsible for handling transport concerns and delegating application behavior.

### Typical units
- routes
- controllers
- handlers
- request middleware at the transport boundary
- response mappers at the transport boundary

### Responsibilities
This layer may:

- receive HTTP requests
- parse path params, query params, body, and headers
- extract authenticated identity or request context
- apply boundary-level validation
- call the correct use case or application service
- translate application outcomes into HTTP responses
- map known failures into transport-appropriate status codes and payloads

### This layer should generally do
- delegation
- request shaping
- response shaping
- transport-specific error translation
- boundary enforcement

### This layer must not become
- the primary home of business logic
- the place where persistence calls are coordinated in detail
- the location for complex multi-step application flow
- a dumping ground for duplicated validation and authorization patterns
- an implicit application service hidden in route code

### Rule
A route/controller/handler should primarily answer:

- what request entered the system
- what input was extracted
- what application action is being invoked
- how the application result maps to HTTP

It should not become the real owner of the action.

---

## 2. Application Layer

### Purpose
The Application Layer owns the action performed by the system.

This is where use cases and application services live.

### Typical units
- use cases
- application services
- action coordinators
- flow-level business orchestration

### Responsibilities
This layer may:

- represent a specific application action
- coordinate business flow
- enforce application rules
- call repositories, providers, gateways, and supporting services
- validate action-specific rules beyond pure transport validation
- handle ownership-sensitive operations after identity/context is provided
- coordinate multi-step operations and side effects

### This layer should generally do
- action orchestration
- business rule enforcement
- policy-aware coordination
- flow sequencing
- transactional application logic when needed

### This layer must not become
- a transport-aware layer that knows about `req`, `res`, or HTTP response mechanics
- a persistence layer disguised as a service
- a random bag of generic helpers
- an unstructured `services/` folder with no action boundaries

### Rule
A use case or application service should answer:

- what action is the system performing
- what business rules apply
- what data sources or providers must be coordinated
- what result or failure should emerge from that action

This layer is the canonical owner of the action.

---

## 3. Persistence Layer

### Purpose
The Persistence Layer owns storage interaction.

This is where repositories and storage-facing access patterns live.

### Typical units
- repositories
- data access objects
- query modules
- ORM-specific persistence implementations

### Responsibilities
This layer may:

- read and write persistent data
- encapsulate SQL, ORM, query builder, or storage API details
- expose access methods aligned with domain/application needs
- isolate persistence implementation details from application flow

### This layer should generally do
- persistence interaction
- query definition
- mapping between storage representation and application-facing structures when appropriate

### This layer must not become
- the canonical owner of business decisions
- a place where request ownership is inferred from HTTP concepts
- the real location of application orchestration
- a substitute for use cases
- a place where unrelated transport rules leak downward

### Rule
Repositories answer:

- how data is retrieved
- how data is persisted
- how storage interaction is encapsulated

They do not answer what the business action should be.

---

## 4. Supporting Layers

### Purpose
Supporting Layers exist to keep cross-cutting responsibilities explicit and controlled.

Not all projects need all of these units, but when needed they should remain conceptually distinct.

### Typical support units
- validators
- schemas
- mappers
- presenters
- gateways
- providers
- policy helpers
- shared domain/application helpers
- error classes and error mapping helpers

### Responsibilities
Supporting Layers may:

- validate shape and schema
- map between external and internal representations
- isolate integration concerns
- define structured errors
- support reuse without collapsing boundaries

### Supporting Layers must not become
- an excuse to hide action logic outside the use case layer
- a junk drawer for miscellaneous code
- a shadow architecture with no clear boundary

### Rule
Supporting units should exist to preserve clarity, not to weaken it.

---

## Canonical Request Flow

A healthy backend request flow should generally follow this path:

1. Request enters the HTTP layer
2. Boundary input is parsed and validated
3. Authenticated identity or request context is extracted if relevant
4. A use case or application service is invoked
5. The application layer coordinates required work
6. Repositories and providers are called as needed
7. The application returns an outcome or throws/returns a structured failure
8. The HTTP layer maps that result into an HTTP response

This flow may vary in detail, but the responsibility order must remain stable.

---

## Responsibility Model by Layer

### HTTP Transport Layer

#### Allowed responsibilities
- route wiring
- request parsing
- schema boundary validation
- auth/session extraction
- request-context shaping
- response shaping
- mapping known errors to HTTP semantics

#### Forbidden responsibilities
- owning business decisions
- multi-step business orchestration
- implementing persistence logic
- duplicating complex policy checks across routes
- embedding reusable application behavior inline

---

### Application Layer

#### Allowed responsibilities
- use-case execution
- business rule enforcement
- ownership-sensitive action logic
- side-effect coordination
- transactional flow sequencing
- orchestration across repositories and integrations
- application-level validation beyond raw shape validation

#### Forbidden responsibilities
- direct HTTP response construction
- transport-aware branching based on framework mechanics
- becoming a generic utility bucket
- absorbing persistence implementation details unnecessarily

---

### Persistence Layer

#### Allowed responsibilities
- storage access
- query formulation
- persistence mapping
- encapsulation of ORM/SQL details

#### Forbidden responsibilities
- deciding what business action is valid
- enforcing route-level transport rules
- owning request authentication semantics
- substituting for application orchestration

---

## Canonical Folder Responsibility Model

This architecture does not require one exact folder structure for every backend.
However, folder structure must reflect stable responsibility boundaries.

A healthy backend project may include folders such as:

- `src/routes/`
- `src/controllers/` or `src/handlers/`
- `src/use-cases/`
- `src/services/`
- `src/repositories/`
- `src/schemas/`
- `src/lib/`
- `src/types/`
- `src/errors/`
- `src/providers/`
- `src/gateways/`
- `src/policies/`
- `src/mappers/`

Exact naming may vary, but boundary meaning must stay stable.

### Folder meaning guidance

#### `routes/`
Routing declarations and route assembly.
Should remain transport-oriented.

#### `controllers/` or `handlers/`
Transport entrypoints.
Should remain thin and delegation-oriented.

#### `use-cases/`
Action-specific application units.
Preferred home for distinct backend actions.

#### `services/`
Only use this folder with discipline.
A service may be:
- an application service
- a domain-oriented shared action helper
- an integration-oriented helper

It must not become a vague catch-all for code that does not fit anywhere else.

#### `repositories/`
Persistence access and storage isolation.

#### `schemas/`
Boundary input validation and schema definitions.

#### `lib/`
Low-level helpers or technical utilities that are not action owners.

#### `types/`
Shared contracts, structural types, and explicit type-level agreements.

#### `errors/`
Structured error classes and error helpers.
Should support consistent application and transport error mapping.

#### `providers/` / `gateways/`
External integration boundaries such as email, storage, payment, or third-party APIs.

#### `policies/`
Explicit policy logic when needed.
Use carefully to avoid scattering application flow.

#### `mappers/`
Representation translation helpers where a dedicated layer improves clarity.

---

## Use Case and Service Guidance

A recurring source of confusion in backend projects is the relationship between “use cases” and “services.”

This architecture defines the following guidance.

### Use Case
A use case represents a specific system action.

Examples:
- CreateTransactionUseCase
- ListTransactionsUseCase
- CloseGoalUseCase
- UpdatePlannedAmountUseCase

A use case is the preferred owner of a concrete application action.

### Service
A service may exist when needed, but it must be used precisely.

Valid meanings for service include:
- application service supporting multiple use cases
- integration service
- domain-oriented shared operation
- technical coordination helper with a clear boundary

A service must not become:
- a generic folder where all business logic is dumped
- a substitute for clear action-oriented use cases
- a way to avoid naming specific system actions

### Hard default rule
For action-oriented backend behavior, the default preferred owner must be a use case.

A service should only be used instead of a use case when there is a clear, explicit reason that the behavior is better modeled as:

- an application service with defined scope
- an integration-facing service
- a shared supporting capability
- a bounded coordination helper that is not itself the primary action owner

If that justification is not clear, the implementation should default to a use case.

This rule exists because backend systems frequently drift into vague `services/` buckets.
This architecture treats that drift as a meaningful structural risk.

### Rule
Prefer explicit use cases for user-visible or system-visible actions.
Use services only when they serve a clear supporting role or are explicitly justified as application services with clear scope.

---

## Validation Boundary Rules

Validation must be applied consistently and intentionally.

### Boundary validation
Shape validation should happen as close to the transport boundary as practical.

Examples:
- required fields
- primitive type expectations
- raw schema parsing
- request payload shape

### Application validation
Application-specific validation may happen in the use case layer when it depends on business rules.

Examples:
- ownership-sensitive constraints
- cross-entity consistency checks
- state transition validity
- action preconditions that depend on existing data

### Rule
Do not confuse “the payload is structurally valid” with “the action is valid.”

Those are different validations and may live in different layers.

---

## Authentication and Ownership Rules

Authentication and ownership enforcement are structurally important.

### Authentication
The transport boundary may extract authenticated identity and attach it to the request context.

### Ownership-sensitive action logic
The application layer should decide whether a given authenticated actor is allowed to perform the action on the targeted resource.

### Persistence access
Repositories may receive ownership-sensitive identifiers as parameters, but they should not become the place where request semantics are interpreted.

### Rule
Authentication context enters at the boundary.
Ownership-sensitive action decisions belong in the application flow.
Persistence consumes scoped identifiers without becoming the policy owner.

This distinction is critical for consistency and auditability.

---

## Error Handling Model

The backend must have a reviewable error model.

### Preferred pattern
- application layer returns structured outcomes or throws structured domain/application errors
- HTTP layer maps known failures into consistent HTTP responses
- persistence errors are translated upward instead of leaking raw storage details unpredictably

### Good error behavior should provide
- stable status code mapping
- stable error payload shape
- useful internal debugging context
- limited external leakage of technical internals

### This architecture avoids
- random inline error payloads per route
- unstructured `500` handling everywhere
- raw database or framework errors leaking directly to clients
- duplicated transport error logic in multiple handlers without standardization

---

## Integration Boundary Rules

When the backend talks to external systems, that boundary must remain explicit.

### External integrations may include
- email providers
- cloud storage
- payment systems
- analytics systems
- auth providers
- external APIs

### Rule
External integrations should be isolated behind providers, gateways, or clearly bounded services.

The use case coordinates the action.
The integration boundary executes the external interaction.

This avoids coupling application logic directly to third-party mechanics.

---

## Transaction and Multi-Step Flow Guidance

Some backend actions involve multiple steps, side effects, or transactional consistency.

### Rule
If an action:
- writes to multiple repositories
- coordinates state changes
- triggers side effects
- depends on ordered steps

then the application layer must remain the canonical owner of that sequence.

Do not distribute multi-step action ownership across route code and repository code in an ad hoc way.

---

## Allowed Pragmatism

This architecture does not require unnecessary architectural inflation.

Not every backend change requires:
- a new supporting layer
- a new service
- a new use case abstraction around trivial glue
- new mapper extraction
- new policy modules
- new repository splits

Small, local, low-risk implementation may remain simple when all of the following are true:

- responsibility remains clear
- boundary discipline is preserved
- reuse is not yet justified
- validation, authentication, and ownership remain visible enough
- no meaningful architectural drift is introduced
- the implementation does not violate the applicable canon

Pragmatism is allowed.
Silent boundary degradation is not.

---

## Review Questions for Backend Implementation

Every meaningful backend implementation should be reviewable against the following questions:

### HTTP layer
- Is the route/controller/handler thin enough?
- Is request parsing and validation happening at the right boundary?
- Is the HTTP layer mainly delegating?

### Application layer
- Is there a clear use case or application owner for the action?
- Are business rules visible in the correct layer?
- Is ownership-sensitive behavior handled in application flow rather than hidden elsewhere?
- Did the implementation default to a use case where appropriate?

### Persistence layer
- Are repositories focused on storage interaction?
- Did persistence logic remain isolated from transport concerns?
- Did repository code avoid taking ownership of business rules?

### Validation
- Is raw shape validation separated from business/action validation?
- Is validation duplicated across layers without reason?

### Authentication and ownership
- Is identity extracted at the boundary?
- Is ownership logic applied consistently?
- Did policy decisions remain visible and reviewable?

### Error model
- Are known failures mapped consistently?
- Are raw technical errors leaking outward?
- Is the response/error contract stable?

### Integration boundaries
- Are external systems isolated clearly?
- Did integration details leak into routes or unrelated layers?

### Structural clarity
- Would a future maintainer understand where the action lives?
- Is the naming action-oriented and responsibility-oriented?
- Did the implementation preserve boundary discipline under change?

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

## Backend Anti-Patterns

The following are explicit anti-patterns under this architecture.

### 1. Bloated route handlers
A route/controller/handler becomes responsible for:
- auth extraction
- schema parsing
- business rule decisions
- orchestration of multiple operations
- persistence calls
- error translation
- response construction

all in the same implementation body.

### 2. Service bucket architecture
A `services/` folder becomes a catch-all for everything:
- use cases
- utility helpers
- transport concerns
- persistence access
- integrations

without clear distinction.

### 3. Repository-driven business logic
Repositories decide:
- what action is allowed
- what transition is valid
- what user may perform what action
- what side effects should happen

instead of simply supporting persistence needs.

### 4. Transport leakage into application logic
Use cases or services receive:
- raw `req` or `res`
- framework-specific response types
- transport-level branching that should stay at the boundary

### 5. Persistence leakage into routes
Routes directly manipulate ORM queries or SQL details rather than delegating properly.

### 6. Validation confusion
Shape validation, business validation, and ownership validation are mixed together with no stable boundary.

### 7. Inconsistent auth and ownership enforcement
Some routes apply identity and resource ownership correctly while others rely on ad hoc filtering or partial checks.

### 8. Ad hoc error payloads
Each route returns different error structures without a stable contract.

### 9. Hidden multi-step orchestration
Complex flows are split arbitrarily across:
- route files
- repositories
- utility helpers
- services with vague names

so no clear owner of the action remains visible.

### 10. Naming without action clarity
Units are named so vaguely that a maintainer cannot tell:
- what action happens
- what layer owns it
- what responsibility boundary is intended

---

## Architectural Guidance for AI-Assisted Backend Implementation

This project is designed for governed AI-assisted execution.
Therefore the backend architecture must remain especially explicit and reviewable.

Implementation should favor:

- action-oriented naming
- thin transport entrypoints
- explicit use case ownership
- isolated persistence
- stable validation boundaries
- visible auth and ownership handling
- clear external integration boundaries
- predictable error contracts

AI-assisted backend implementation must not be judged only by whether the endpoint works.
It must also be judged by whether the implementation remains structurally coherent under future growth.

---

## Decision Rule for New Backend Work

Before implementing or modifying a backend feature, the implementation should answer:

1. What is the transport entrypoint?
2. What belongs at the HTTP boundary?
3. What is the canonical use case or action owner?
4. What business rules belong in the application layer?
5. What belongs in repositories?
6. What validation happens at the schema boundary?
7. What validation depends on business rules?
8. How is authenticated identity entering the flow?
9. Where is ownership-sensitive behavior enforced?
10. What error contract should the route expose?
11. What integrations need explicit boundaries?
12. What anti-pattern must be explicitly avoided in this change?

If these questions are not answerable, the implementation boundary is not yet clear enough.

---

## Final Rule

A backend implementation is not considered high quality merely because it returns the correct response.

It is considered high quality when it is:

- functionally correct
- structurally clear
- disciplined in boundary ownership
- consistent in validation and error behavior
- explicit in authentication and ownership handling
- deliberate in use case design
- sustainable for future evolution

This is the canonical standard for backend implementation in this system.