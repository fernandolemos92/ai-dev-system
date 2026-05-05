# ARCHITECTURE CONTRACTS

## Purpose

This file defines minimum architecture boundaries for implementation tasks.

It prevents agents from turning route files, page files, or generic services into dumping grounds.

---

## Universal Rule

Implementation tasks that touch architecture must name the target layer before execution.

If the task does not name the owning layer, route back to Planning.

---

## Recommended Product Layout

For web products that combine frontend, API, server behavior, and persistence, prefer an explicit directory split unless the existing repository has a stronger established convention:

```text
src/
  app/
    (web)/              # route entries, layouts, metadata, server components for web surfaces
    api/                # HTTP route handlers only
  web/
    screens/            # screen composition
    features/           # feature-specific UI and behavior
    components/         # shared product UI
    primitives/         # design-system building blocks
    hooks/              # browser/UI state
    adapters/           # client adapters and data mappers
  server/
    use-cases/          # action-oriented business behavior
    repositories/       # persistence access only
    schemas/            # validation and typed input/output contracts
    gateways/           # external services and SDKs
  db/                   # database client, schema helpers, migrations ownership notes
  shared/
    types/              # cross-boundary types
    contracts/          # API/domain contracts shared by web and server
```

Names may vary by framework, but the responsibility split should remain explicit: web renders and owns browser state; API maps transport; server owns business behavior; repositories own persistence; shared contracts carry stable shapes.

A task that touches both frontend and backend/API must name both sides of this split in `Architecture Boundaries`. If it cannot, route back to Planning.

---
## Frontend Contract

Default frontend layers:

- page/route: metadata, route entry, layout handoff, data-loading boundary
- screen composition: page-level composition of sections and flows
- feature component: feature-specific rendering and behavior
- shared component: reusable product component with stable props
- primitive: design-system building block
- hook/state: stateful browser or UI behavior
- utility/adapter: pure transformation or integration adapter

Rules:

- Pages/routes stay thin.
- Prefer `src/web/...` (or an established equivalent) for screen composition, features, shared components, hooks, and client adapters. Avoid dumping reusable UI directly under route folders.
- Static visual styling should use tokens/classes/theme, not ad hoc inline styles.
- Do not mix detailed styling, animation, data fetching, validation, and business behavior in one component.
- Motion-heavy work must involve `motion` or record an explicit downgrade.

---

## Backend Contract

Default backend/API layers:

- route/controller: transport, auth context, request/response mapping
- schema/validator: boundary validation and typed input
- use-case: user-intent behavior and business rules
- repository: persistence reads/writes only
- presenter/mapper: stable response shape when needed
- provider/gateway: external SDK/service boundary

Rules:

- Route handlers must not own business behavior.
- Prefer `src/server/...` (or an established equivalent) for use cases, schemas, repositories, and gateways.
- `src/app/api/...` route handlers should map transport, auth context, validation result, and response only.
- Repositories must not own product decisions.
- Authorization and ownership checks must be visible.
- Generic services are allowed only with a specific coordination reason.

---

## Database Contract

Database work must identify:

- entities/tables/documents touched
- ownership model
- migration or schema change
- indexes/constraints relevant to correctness or performance
- query safety and limits
- rollback or recovery note when risky

Schema design belongs to `database`, not incidental backend implementation.

---

## Design-System Contract

Design-system work must identify:

- primitive tokens when useful
- semantic tokens as implementation API
- component tokens only when repeated variants justify them
- component states
- accessibility and contrast requirements
- evidence source: existing system, screenshots, references, or product decisions

A moodboard without tokens, states, and usage rules is not a design system.