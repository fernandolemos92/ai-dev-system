# AGENTS

## Purpose

This folder contains the canonical specialists for `ai-dev-system`.

Specialists are inspired by the reusable role pattern from `agency-agents`: each specialist should have a clear identity, mission, activation purpose, deliverables, and boundaries.

This system adds one stricter rule:

**specialist participation must be honest and recordable.**

Naming a specialist is not the same as using one.

---

## Specialist Role

Specialists support bounded work inside the orchestrated delivery flow.

They may help with:

- discovery depth
- product and UX structure
- task shaping
- implementation quality
- risk analysis
- verification
- reality-checking

They do not own:

- doctrine
- scenario resolution
- phase progression
- project truth
- task acceptance

The orchestrator conducts. Specialists contribute.

---

## Registry

All specialists must be registered in:

`system/agents/registry.yaml`

The registry defines:

- canonical name
- specialist file
- domain
- runtime target
- OpenCode agent name
- invocation mode

If a specialist is not registered, it is not part of the runtime system.

---

## Specialist File Standard

Each specialist file should include:

- `Role`
- `Use When`
- `Do Not Use When`
- `Core Mission`
- `Inputs It Needs`
- `Outputs It Produces`
- `Process`
- `Evidence Discipline`
- `Boundaries`
- `Anti-Drift Rules`
- `Ledger Notes`

Keep specialists dense and useful.

Avoid bloated doctrine. Avoid placeholders.

---

## Current Specialist Set

| Specialist | Primary Use |
|---|---|
| `orchestrator` | runtime conduction and next movement |
| `project-manager` | sequencing, dependencies, delivery shape |
| `prioritizer` | scope slicing and next-best-task logic |
| `architectux` | product/UX/technical structure |
| `research` | external research and benchmarks |
| `ux-research` | user behavior and usability signals |
| `growth` | positioning, conversion, adoption logic |
| `frontend` | frontend implementation and UI structure |
| `ui` | screen-level UI craft, states, responsive behavior, and visual drift |
| `design-system` | DESIGN.md, tokens, component standards, and reusable visual language |
| `motion` | interaction motion, animation timing, reduced-motion, and performance |
| `backend` | API, service, validation, server behavior |
| `database` | persistence, schema, migrations, data modeling |
| `security` | trust boundaries and exposure risks |
| `evidence-qa` | task-level verification evidence |
| `reality-checker` | anti-fake-progress review and recovery signals |

---


## Specialist Execution Rubric

A specialist is useful only when it changes the artifact, decision, implementation, or review.

Each specialist file must make these answers explicit:

- minimum inputs needed before it can operate
- concrete output it produces
- stop conditions that route back to orchestration, planning, or recovery
- evidence required to prove it was materially used
- anti-patterns it blocks
- ledger notes that distinguish native, adapted, behavioral, unavailable, failed, or not-needed use

A specialist should behave like a senior human in that domain:

- inspect the relevant source of truth before advising
- refuse to guess hidden architecture or product decisions
- produce bounded, reviewable output
- name tradeoffs and failure modes
- leave enough evidence for another agent to continue

If a specialist cannot answer what changed because it participated, it was nominal and should not be counted as invoked.

## Activation Rule

Specialists should be activated only when they materially improve the next bounded move.

When activated, their participation should be recorded in:

- task contract when planned
- handoff when required for execution
- ledger when used during execution
- review report when used during acceptance or rejection

---

## Final Rule

A good specialist makes the next action clearer, safer, and harder to fake.
