---
name: check-state-coherence
description: Verify whether PROJECT_STATE.md still represents a single coherent operational moment and matches the real active artifact lifecycle before sensitive workflow continuation.
---

# SKILL: check-state-coherence

## Purpose

Verify whether `project/PROJECT_STATE.md` still represents a single coherent operational moment.

This gate exists to prevent governed work from continuing on top of:

- partial state updates
- contradictory lifecycle situations
- mismatches between state and filesystem
- stale operational flags
- misleading next-step guidance

This gate does not implement work.

This gate does not create or close workflow artifacts.

This gate only evaluates whether the current operational state is coherent enough for safe continuation.

---

# When To Use

Use this gate when:

- a sensitive stage transition is about to happen
- a workflow artifact was just created, promoted, or closed
- implementation readiness is being evaluated
- review readiness is being evaluated
- task or handoff lifecycle closure is being considered
- the current state appears suspicious, stale, contradictory, or incomplete

Typical workflow usage:

artifact or lifecycle change  
↓  
**check-state-coherence ← this gate when needed**  
↓  
continue only if coherent

This gate is especially useful before:

- implementation
- review
- done promotion
- reopening or redirecting workflow

---

# When Not To Use

Do NOT use this gate when:

- no relevant workflow state exists yet
- the system is still in very early discovery with no meaningful operational structure
- the goal is domain-specific reasoning rather than operational consistency

This gate is not a substitute for:

- scope alignment
- security assessment
- implementation
- review closure
- strategic planning

It is only for operational state coherence.

---

# Required Inputs

This gate should read:

- `project/PROJECT_STATE.md`

And, when referenced by the state:

- active PRD from `project/prd/active/`
- active Validation from `project/validation/active/`
- active Task from `project/tasks/active/`
- active Handoff from `project/handoff/active/`

Optional inputs:

- lifecycle folders under the official artifact domains when needed to verify drift
- recently changed workflow artifacts relevant to the suspected inconsistency

Avoid unnecessary repository-wide scanning.

Only verify what is required to determine whether the current state is coherent.

---

# What This Gate Must Check

This gate must check the following dimensions.

## 1. Phase Coherence

Questions:

- Does `Current Phase` match the actual operational moment?
- Do `Current Focus`, `Primary Objective`, and `Next Allowed Action` describe the same phase?
- Does `Next Expected Skill` point to a valid next governed action for this same moment?

A state is incoherent if different fields describe different stages at once.

---

## 2. Active Artifact Coherence

Questions:

- Does each active artifact referenced in `PROJECT_STATE.md` actually exist?
- Is each referenced active artifact stored in its canonical `active/` directory?
- Does any active reference incorrectly point to `done/` or `archived/` material?
- Does `Pending Tasks` remain distinct from the single current active task?

A state is incoherent if active references do not match the real lifecycle location.

---

## 3. Lifecycle Coherence

Questions:

- Does the lifecycle situation described by the state match the actual artifact lifecycle?
- Was any task or handoff already promoted while still described as active?
- Was execution unlocked on top of an unresolved lifecycle situation?
- Was a step narratively “completed” while the state still materially reflects the prior moment?

A state is incoherent if lifecycle closure is partial, premature, or contradictory.

---

## 4. Operational Flag Coherence

Questions:

- Does `Execution Unlocked` match the real implementation readiness?
- Are `Active Auxiliary Gates` accurate for the current moment?
- Is `Next Expected Skill` advisory for the real next valid action rather than a stale or premature pointer?

A state is incoherent if flags suggest readiness or progression that the rest of the file does not support.

---

## 5. Single-Moment Integrity

This gate must answer one final question:

**Does the full file describe one honest operational moment?**

If the file reads like a mixture of:

- previous phase
- current phase
- intended future phase
- partial lifecycle closure

then the state is not coherent enough for governed continuation.

---

# Outcome Classification

This gate must classify the result as one of:

## Coherent

Use when:

- the file describes one clear operational moment
- active artifacts and lifecycle status match the filesystem
- flags, phase, objective, and next action align
- no blocking contradiction is present

Implication:

- the system may continue to the next valid governed step

---

## Coherent With Minor Notes

Use when:

- the state is operationally usable
- no blocking contradiction exists
- small cleanup or wording improvements may still be beneficial

Implication:

- governed continuation may proceed
- minor improvements should not be confused with blocking inconsistency

---

## Incoherent / Blocking

Use when:

- the file materially describes conflicting phases or lifecycle situations
- active artifacts do not match their real lifecycle positions
- execution readiness is implied on top of contradiction
- the next action cannot be trusted because the operational moment is unclear

Implication:

- governed continuation must stop
- state must be corrected before further workflow progression

---

# Output Structure

This gate must produce a concise structured output.

## State Summary

Short summary of the current operational moment as described by the file.

---

## Findings

Structured findings across:

- Phase Coherence
- Active Artifact Coherence
- Lifecycle Coherence
- Operational Flag Coherence
- Single-Moment Integrity

Keep findings short and concrete.

---

## Outcome Classification

One of:

- Coherent
- Coherent With Minor Notes
- Incoherent / Blocking

---

## Reasoning

Brief explanation of why this classification was chosen.

Avoid long narrative.

---

## Recommended Action

Examples:

- Coherent → proceed to the next valid governed step
- Coherent With Minor Notes → proceed, but clean up the noted state wording later if useful
- Incoherent / Blocking → stop and correct `PROJECT_STATE.md` before continuing

---

# Gate Discipline Rules

This gate exists to protect workflow integrity.

Therefore:

- it must prefer honest blocking over optimistic continuation
- it must not treat partial alignment as full coherence when lifecycle is still contradictory
- it must not authorize continuation just because one or two favorable fields look correct
- it must evaluate the full operational moment, not isolated fragments

If in doubt between “probably okay” and “materially inconsistent,” prefer material inconsistency.

---

# State Update Rule

This gate may recommend correcting `PROJECT_STATE.md`.

It must not treat the recommendation itself as a successful correction.

It must not silently rewrite lifecycle truth through interpretation.

If the state is blockingly incoherent:

- STOP
- require explicit correction before continuation

---

# Escalation Rules

If the inconsistency is caused by artifact lifecycle mismatch:

- recommend verifying artifact placement and lifecycle before continuing

If the inconsistency suggests premature closure:

- recommend returning to the correct prior governed step

If the inconsistency reveals that the current task boundary itself is unclear:

- recommend reviewing task/handoff alignment before continuation

If the inconsistency is small and non-blocking:

- classify as `Coherent With Minor Notes` rather than inflating it into a major issue

---

# Safety Rules

This gate must never:

- create a new macro stage
- replace governance
- replace review
- replace implementation readiness rules
- close artifacts by itself
- unlock execution by itself

Its role is to verify whether the current state can be trusted enough for governed continuation.

---

# Final Rule

Operational state must remain honest, coherent, and bounded.

When `PROJECT_STATE.md` stops describing a single real moment, governed execution must stop until coherence is restored.