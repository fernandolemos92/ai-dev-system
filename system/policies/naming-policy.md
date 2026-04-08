# NAMING POLICY

This file defines the naming discipline used across the ai-dev-system.

It exists to reduce ambiguity, lower drift, and preserve contract clarity between governance, state, workflows, policies, skills, agents, runtime, memory, and artifacts.

---

## Purpose

Naming must support:

- predictability
- low ambiguity
- easy routing
- durable continuity across sessions
- clear layer separation

Naming should clarify role, not decorate it.

---

## General Rule

A name should communicate:

- what kind of thing it is
- what responsibility it owns
- whether it is constitutional, macro, transversal, bounded, or specialized

Names should be clear before they are clever.

---

## Layer-Specific Naming

### Governance

- `CLAUDE.md` is the constitutional governance file.
- It should not be mirrored by alternative “master governance” names elsewhere.

### Live project state

- use `PROJECT_CONTEXT.md`
- use `PROJECT_STATE.md`
- use `PROJECT_STATE_TEMPLATE.md`

These names are stable anchors and should not be casually renamed.

### Workflows

Workflow files should use concise domain or macro-operation names.

Current approved pattern:

- `structured-research`
- `product-definition`
- `experience-direction`
- `growth-strategy`
- `governed-implementation`
- `review-and-closure`

Workflow names should describe a macro operating span, not a tiny step.

### Policies

Policy files should use explicit rule-domain names ending in `-policy`.

Examples:

- `naming-policy`
- `artifact-lifecycle-policy`
- `evidence-policy`
- `context7-policy`

### Skills

Skill names should describe a bounded governed action.

Preferred style:

- verb-led
- concrete
- scoped to one main responsibility

Examples:

- `define-prd`
- `define-success-scenarios`
- `plan-tasks`
- `prepare-handoff`
- `authorize-implementation`
- `implement-approved-scope`
- `review-delivery`

Avoid names that are:

- overly broad
- vague
- duplicative of workflow names
- legacy when the contract has already changed

### Agents

Agent files should end with `-agent.md`.

Canonical agent names in the registry should remain short and role-based.

Examples:

- `architect`
- `research`
- `security`
- `ui`
- `branding`
- `frontend`
- `qa`

The file path may be more explicit than the canonical registry name.

### Artifacts

Artifact families should use stable singular domains in folder names.

Examples:

- `prd`
- `validation`
- `tasks`
- `handoff`
- `research`
- `experience`
- `strategy`

Artifact IDs should remain uppercase and type-prefixed.

Examples:

- `PRD-001`
- `VALIDATION-001`
- `TASK-001`
- `HANDOFF-001`
- `RESEARCH-001`
- `EXPERIENCE-001`
- `STRATEGY-001`

---

## Rename Discipline

When a canonical name changes, the project should update all contract-bearing references that materially depend on that name, including where applicable:

- `CLAUDE.md`
- `PROJECT_STATE.md`
- `PROJECT_STATE_TEMPLATE.md`
- workflow files
- policy files
- skill files
- agent files
- registry entries
- runtime documents

The project should avoid long periods where old and new names coexist in contract-bearing locations unless the coexistence is explicitly transitional and documented.

---

## Must Not

Do not:

- use multiple names for the same canonical responsibility without an explicit migration reason
- use a workflow name as if it were a skill name
- use a skill name as if it were a stage name without intent
- use agent names to describe policies or workflows
- keep legacy names in contract documents after the canonical rename is settled

---

## Final Rule

Naming is part of governance quality.

When in doubt, prefer the name that makes the layer and responsibility most obvious.
