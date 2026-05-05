# TASK CONTRACT

## Purpose

A task contract defines one bounded unit of executable work.

It exists to prevent implementation from drifting beyond the approved boundary.

A task is one delivery slice, not the whole MVP, unless Planning explicitly justifies that the MVP is truly one bounded executable unit.

A task is not a brainstorm, backlog note, PRD section, or implementation summary.

---

## Required Fields

Every task must include:

- `Task ID`
- `Title`
- `Scenario`
- `Phase`
- `Objective`
- `Why Now`
- `Owner Specialist`
- `Supporting Specialists`
- `Inputs`
- `Allowed Scope`
- `Out of Scope`
- `Target Project Root`
- `Target Surfaces`
- `Architecture Boundaries`
- `Design-System / Token Constraints` when UI, styling, tokens, or design-system work is touched
- `Standards Preflight`
- `Documentation Preflight`
- `Verification Plan`
- `Constraints`
- `Done Criteria`
- `Evidence Required`
- `Review Gate`
- `Drift Risks`

---

## Field Rules

### Task ID

Stable identifier.

Recommended format:

`TASK-001`

### Scenario

One of:

- `new-product`
- `existing-feature`
- `bugfix`
- `recovery`

### Phase

Usually:

- `planning`
- `build-review`

Do not create implementation tasks from unstable Discovery.

### Objective

One sentence describing the concrete outcome.

Avoid vague verbs like:

- improve
- polish
- enhance
- optimize

unless the measurable target is also stated.

A good objective says what will exist or change after the task is done.

### Why Now

Explain why this is the next correct unit of work and where it sits in the delivery sequence.

This should connect the task to sequencing, dependency order, risk reduction, or immediate product value.
## Tool Identity And Specialist Names

Task contracts must name canonical ai-dev-system specialists as owners, such as `design-system`, `frontend`, `backend`, `database`, `ui`, or `motion`.

Do not use external tool names such as `Stitch`, `MCP`, `Figma`, `v0`, or `design generator` as owner specialists.

External tools may appear only under constraints, allowed tooling, or handoff notes when explicitly approved by the user or required by the task. They are execution tools, not specialists.

If the user did not explicitly approve a downstream design/code generation tool, do not plan it into the active task.

### Owner Specialist

The primary specialist expected to shape execution.

Use exactly one canonical specialist name.

Composite values such as `frontend + motion`, `backend/frontend`, `ui, motion`, or tool names are invalid.

Use `none` only when direct general execution is intentionally sufficient.

### Supporting Specialists

Secondary specialists that may improve the task.

Use this field, not the owner field, to declare `motion`, `ui`, `design-system`, `backend`, `database`, or `security` support around a single owner specialist.

Use `none` when not needed.
Owner and supporting specialist fields must use canonical specialist names only.

Do not add inline decoration such as `ui (form UX)`, `frontend (owner)`, or `backend/security` in the specialist name fields.

Put rationale, specialization nuance, or role explanation in `Why Now`, `Constraints`, or a nearby bullet, not inside the specialist name.



### Inputs

List the artifacts, files, or decisions needed to execute safely.

Each input must be specific enough to locate.

Do not use vague inputs like `the repo` or `the PRD` when a narrower artifact can be named.

### Allowed Scope

The work that may be changed.

This is the implementation boundary.

List concrete surfaces, decisions, or behaviors that may move.

### Out of Scope

The work that must not be done, even if it is nearby or tempting.

This is the most important anti-drift field.

Use it to block adjacent refactors, neighboring features, speculative cleanup, or architecture expansion.


### Target Project Root

The product code root that may be edited.

This must be explicit for implementation tasks.

Do not confuse the private `ai-dev-workspace/current` with the product project root. The private workspace stores memory, artifacts, task contracts, ledgers, and reviews. It is not the default place for product code.

If the target project does not exist yet, the active task must be a bootstrap/setup task whose allowed scope explicitly includes creating the project root, package manifests, framework config, and initial route tree.
### Target Surfaces

Files, directories, screens, APIs, flows, or modules expected to be touched.

Use `unknown` only when the next step is investigation, not implementation.

If the task is implementation, target surfaces should be specific enough that an executor knows where to start.


### Architecture Boundaries

When the task touches frontend or backend architecture, the contract must name the expected boundary.

Frontend examples:

- page/route
- screen composition
- feature component
- shared component
- primitive
- hook/state
- utility/adapter

Backend examples:

- route/controller
- validation
- use case
- repository
- provider/gateway
- background worker

If the executor must invent these boundaries during Build/Review, the task is not ready for implementation.

## Specialist Standards Matrix

When a task declares an owner or supporting specialist, its `Standards Preflight` must include the specialist file plus the required standards for that specialist. The ledger must later show those same standards in `Standards Applied`, `Architecture Preflight`, or `Specialist Material Contribution`.

Minimum matrix:

| Specialist | Required Standards |
|---|---|
| `design-system` | `system/agents/design-system.md`, `system/design/DESIGN_SYSTEM_STANDARDS.md`, `system/design/DESIGN_MD_TEMPLATE.md` |
| `ui` | `system/agents/ui.md`, `system/design/DESIGN_SYSTEM_STANDARDS.md` |
| `motion` | `system/agents/motion.md`, `system/design/DESIGN_SYSTEM_STANDARDS.md` |
| `frontend` | `system/agents/frontend.md`, `system/engineering/CODING_STANDARDS.md`, `system/engineering/ARCHITECTURE_CONTRACTS.md` |
| `backend` | `system/agents/backend.md`, `system/engineering/CODING_STANDARDS.md`, `system/engineering/ARCHITECTURE_CONTRACTS.md` |
| `database` | `system/agents/database.md`, `system/engineering/CODING_STANDARDS.md`, `system/engineering/ARCHITECTURE_CONTRACTS.md` |
| `security` | `system/agents/security.md`, `system/engineering/CODING_STANDARDS.md`, `system/engineering/ARCHITECTURE_CONTRACTS.md` |
| `research` | `system/agents/research.md`, `system/research/DISCOVERY_STANDARDS.md` |
| `ux-research` | `system/agents/ux-research.md`, `system/research/DISCOVERY_STANDARDS.md` |

This matrix is enforced by `ai-dev-system/scripts/validate-ai-dev.mjs`.
### Design-System / Token Constraints

Required for tasks that touch UI, styling, tokens, visual components, themes, or design-system work.

State the token discipline explicitly. Examples:

- product components must consume semantic tokens
- raw values and direct hex usage are forbidden in product UI
- primitive tokens stay upstream unless the design system explicitly authorizes an exception
- state-aware semantic tokens are required for interactive families when interaction changes meaning

If the task touches UI/design and this section is missing, execution should stop and route back to planning.

### Standards Preflight

For implementation tasks, list the standards and specialist files execution must read before editing code.

Required when code is touched:

- `system/engineering/CODING_STANDARDS.md`
- `system/engineering/ARCHITECTURE_CONTRACTS.md` when frontend/backend/database/API/framework boundaries are touched
- `system/design/DESIGN_SYSTEM_STANDARDS.md` when UI, styling, tokens, or design-system work is touched
- owner specialist file and required supporting specialist files

Also name the anti-patterns that would make this task fail review, such as god component, route-handler dumping ground, mock persistence, design-system bypass, missing validation, or missing auth/ownership.

For bootstrap/setup tasks that create a web product, `Architecture Boundaries` or `Constraints` must either choose the recommended split (`src/app/(web)`, `src/app/api`, `src/web`, `src/server`, `src/db`, `src/shared`) or explicitly justify an equivalent convention.

### Documentation Preflight

For tasks that touch frameworks, libraries, SDKs, databases, auth, routing, styling engines, animation engines, generated clients, or external APIs, execution must identify the documentation source that will be consulted before implementation.

Preferred source order:

1. Context7 / project-configured docs provider when available.
2. Official framework, library, SDK, or vendor documentation.
3. Existing local project documentation when it is the authority for the stack.

Model memory is not sufficient for modern framework/library behavior. If docs cannot be consulted, the task must include an explicit waiver with the reason and the review must treat related implementation claims cautiously.

Examples:

- `Context7: Next.js App Router docs`
- `Context7: Tailwind CSS v4 docs`
- `Official docs: Prisma schema and migrations`
- `Docs waiver: localStorage-only prototype; no external framework behavior beyond existing project patterns`

### Verification Plan

List commands and manual checks required before the task can be called done.

Build output alone may verify compilation. It does not verify runtime UI, visual quality, server availability, API behavior, persistence, auth, responsiveness, or accessibility.

When a task needs to start a dev server, the Verification Plan must use `timeout 6 npm run dev` or explicitly describe a managed background process with cleanup (`Start-Process` plus `Stop-Process`, `kill`, or equivalent). A bare `npm run dev` is invalid because it can hang the runtime.
### Constraints

Technical, product, design, security, time, or compatibility constraints.

Constraints should block unsafe improvisation, not restate the whole system doctrine.

### Done Criteria

Observable conditions that prove the task outcome exists.

Done criteria must be reviewable.

Good done criteria describe an observable result, not an intention.

### Evidence Required

What the executor must produce or record.

Examples:

- changed files
- screenshots
- test command output
- manual verification steps
- before/after notes
- runtime behavior evidence

Evidence should let review inspect the task without trusting implementation narration.

### Review Gate

Which review posture applies.

Common values:

- `evidence-qa`
- `reality-checker`
- `code-review`
- `manual-review`

### Drift Risks

Known ways this task could accidentally widen.

Examples:

- touches adjacent feature
- may create duplicated component
- may alter product language
- may introduce persistence decisions
- may bypass design-system contract
- may require a schema decision not yet approved

---

## Template

```markdown
# TASK-[number]: [Title]

## Task ID
TASK-[number]

## Title
[Short title]

## Scenario
[new-product | existing-feature | bugfix | recovery]

## Phase
[planning | build-review]

## Objective
[One concrete sentence.]

## Why Now
[Why this task is the next correct unit of work and where it sits in the delivery sequence.]

## Owner Specialist
[specialist name or none]

## Supporting Specialists
- [specialist name or none]

## Inputs
- [artifact/file/decision]

## Allowed Scope
- [what may change]

## Out of Scope
- [what must not change]

## Target Project Root
[product code root or none for non-code task]

## Target Surfaces
- [file/dir/screen/API/module]

## Architecture Boundaries
- [frontend/backend layer ownership or none]

## Design-System / Token Constraints
- [semantic-token rule or not-applicable]

## Standards Preflight
- [standards file path]
- [owner specialist file path, for example system/agents/frontend.md]
- [supporting specialist file path or explicit waiver]
- [anti-patterns that fail review]

## Documentation Preflight
- [Context7 / official docs / local docs / explicit waiver]

## Verification Plan
- [command or manual check]
- [evidence expected]

## Constraints
- [constraint]

## Done Criteria
- [ ] [reviewable condition]

## Evidence Required
- [evidence item]

## Review Gate
[gate name]

## Drift Risks
- [risk]
```

---

## Validity Check

A task is valid only when:

- the objective is concrete
- why-now logic is stated
- the contract is clearly one slice of delivery rather than a hidden full-MVP plan
- allowed scope is clear
- out-of-scope is explicit
- target project root is explicit for implementation tasks
- target surfaces are known or investigation is the task
- architecture boundaries are explicit when frontend or backend architecture is touched
- standards preflight is explicit for implementation tasks
- documentation preflight is explicit when frameworks, libraries, SDKs, APIs, auth, styling engines, animation engines, or database tooling are touched
- verification plan is explicit and matches the task risk
- done criteria can be reviewed
- evidence required is listed
- Build/Review would not need to invent a major product, design, architecture, or security decision
- if the task appears to cover the whole MVP, Planning explicitly justifies why no further delivery slices are needed

If these are missing, route back to Planning.



