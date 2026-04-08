---
name: check-scope-alignment
description: Check whether the current scope artifacts remain coherent, bounded, and aligned enough to support a safe next governed step.
---

# SKILL: check-scope-alignment

## Purpose

Check whether the current scope artifacts are still **aligned enough for safe progression**.

This gate is used to detect meaningful scope drift, contradiction, or boundary expansion across the relevant active artifacts.

Its job is to answer:

- is the current scope aligned enough?
- what misalignment is actually blocking safe progression?
- should the system proceed, adjust an artifact, or return to an earlier skill?

This gate does not create or update artifacts.

It only evaluates scope alignment and recommends the correct next step.

---

## When To Use

Use this gate only when a scope alignment check is actually needed, such as when:

- there is uncertainty about whether the current artifacts still point to the same bounded scope
- a task or handoff appears to expand beyond what was previously stabilized
- a change request or late interpretation may have introduced drift
- the system needs to confirm that the next governed step is still safe

This is a **conditional auxiliary gate**, not a mandatory macro stage of the workflow.

---

## When Not To Use

Do not use this gate when:

- the system is still in discovery
- the scope is not yet stable enough to evaluate
- no relevant scope artifacts exist yet
- the required issue is artifact creation or correction rather than alignment checking

If context is still missing, use:

`discover-missing-context`

If the PRD must be created or corrected, use:

`define-prd`

If validation is missing or insufficient, use:

`define-success-scenarios`

If task decomposition is missing or incorrect, use:

`plan-tasks`

If the handoff must be regenerated, use:

`prepare-handoff`

---

## Required Inputs

Read only what is necessary for the current check.

Minimum inputs:

- `project/PROJECT_STATE.md`
- active PRD artifact when one exists
- active validation artifact when one exists
- active task artifact(s) when relevant
- active handoff artifact when relevant

Avoid broad repository scanning.

Use the active artifacts referenced by state whenever possible.

If state and active artifacts are inconsistent, stop and surface the inconsistency clearly before evaluating alignment.

---

## What To Check

Evaluate only short, observable alignment signals.

### 1. Scope consistency across artifacts

Check whether the relevant artifacts still describe the same bounded problem and intended outcome.

Look for:

- new behavior introduced without support from earlier stabilized artifacts
- contradiction between artifacts about what must be done
- boundary expansion that changes the original scope shape

### 2. PRD to validation alignment

Check whether validation still reflects the behaviors and outcomes defined by the PRD.

Look for:

- validation covering behavior not supported by the PRD
- missing validation for critical PRD behavior
- contradictory expectations between PRD and validation

### 3. PRD and validation to tasks alignment

Check whether tasks still represent bounded work that supports the stabilized scope.

Look for:

- tasks adding features or concerns outside the stabilized scope
- tasks missing necessary scope coverage
- tasks redefining behavior already stabilized elsewhere

### 4. Task to handoff alignment

When a handoff exists, check whether it stays inside the task boundary.

Look for:

- handoff instructions that expand task scope
- new functionality introduced in the handoff
- implementation-oriented detail that changes the intended task boundary

---

## Decision Output

Return a short, structured result.

### Aligned

The current artifacts are coherent enough for safe progression.

Recommended action:
- proceed to the next governed step

### Partially Aligned

There is a real but limited mismatch.
Safe progression should pause until the responsible artifact is corrected.

Recommended action:
- identify the responsible artifact
- route back to the skill that owns that correction

### Not Aligned

There is blocking drift, contradiction, or scope expansion.
Safe progression must stop.

Recommended action:
- return to the correct earlier skill before continuing

---

## Output Format

## Alignment Status

`Aligned | Partially Aligned | Not Aligned`

## Blocking Findings

List only the findings that materially affect safe progression.

For each finding, include:

- affected artifact
- short issue description
- why it blocks or risks the next step

## Recommended Next Step

Provide only the minimal next action.

Examples:

- proceed to the next governed step
- return to `define-prd`
- return to `define-success-scenarios`
- return to `plan-tasks`
- return to `prepare-handoff`

Do not perform the correction inside this gate.

---

## Routing Rules

Route to the skill that owns the detected problem.

- missing or unstable context → `discover-missing-context`
- PRD misalignment or outdated scope definition → `define-prd`
- validation misalignment or missing coverage → `define-success-scenarios`
- task misalignment or invalid decomposition → `plan-tasks`
- handoff misalignment or scope expansion in handoff → `prepare-handoff`

---

## Final Boundary

This gate must remain a **short conditional check**.

It must not:

- become a mandatory macro stage by default
- redefine the official workflow
- act as mini-governance
- perform discovery
- create or update PRD
- decompose tasks
- generate or rewrite handoffs
- correct the misalignment directly

Its role is only to verify alignment and route the system back to the correct bounded step when needed.