---
name: audit-artifact-lifecycle
description: Verify whether workflow artifacts are stored, promoted, and referenced in the correct lifecycle locations before sensitive continuation or closure.
---

# SKILL: audit-artifact-lifecycle

## Purpose

Verify whether workflow artifacts are currently in the correct lifecycle state and canonical filesystem location.

This gate exists to prevent governed work from continuing on top of artifact lifecycle drift such as:

- active artifacts stored outside canonical `active/` folders
- premature promotion from `active/` to `done/`
- premature movement to `archived/`
- state references that no longer match real artifact placement
- task or handoff closure that occurred before honest review completion

This gate does not implement work.

This gate does not create, rewrite, or close artifacts by itself.

It only audits whether the artifact lifecycle is materially consistent enough for safe governed continuation.

---

# When To Use

Use this gate when:

- a workflow artifact was just created
- a workflow artifact was just promoted or closed
- task lifecycle closure is being considered
- handoff lifecycle closure is being considered
- review has just completed and done promotion may happen
- a state/filesystem mismatch is suspected
- artifact lifecycle drift is suspected from previous execution

Typical workflow usage:

artifact lifecycle action  
↓  
**audit-artifact-lifecycle ← this gate when needed**  
↓  
continue only if lifecycle integrity is real

This gate is especially useful before:

- promoting task to `done`
- promoting handoff to `done`
- archiving artifacts
- trusting state references after lifecycle transitions

---

# When Not To Use

Do NOT use this gate when:

- the system is still in early discovery with no meaningful workflow artifacts yet
- the concern is phase logic, objective coherence, or next-step guidance rather than artifact placement
- the goal is implementation, review, or strategic planning

This gate is not a substitute for:

- `check-state-coherence`
- scope alignment
- security assessment
- implementation review
- roadmap decisions

It is only for artifact lifecycle integrity.

---

# Required Inputs

This gate should read:

- `project/PROJECT_STATE.md`

And, when relevant:

- `project/prd/active/`
- `project/prd/done/`
- `project/prd/archived/`
- `project/validation/active/`
- `project/validation/done/`
- `project/validation/archived/`
- `project/tasks/active/`
- `project/tasks/done/`
- `project/tasks/archived/`
- `project/handoff/active/`
- `project/handoff/done/`
- `project/handoff/archived/`

Only inspect the artifact domains needed to verify the current suspected lifecycle situation.

Avoid unnecessary broad scanning when the relevant artifact set is already clear.

---

# What This Gate Must Check

This gate must check the following dimensions.

## 1. Canonical Placement Integrity

Questions:

- Does each active artifact referenced by the current workflow actually exist?
- Is each artifact stored in the correct canonical domain?
- Is each artifact stored in the correct lifecycle folder for its current role?
- Is any artifact misplaced across PRD, Validation, Task, or Handoff domains?

A lifecycle situation is invalid if an artifact exists but is stored in the wrong domain or wrong lifecycle folder for the current moment.

---

## 2. Active Artifact Integrity

Questions:

- Are artifacts referenced as active actually stored in `active/`?
- Is any supposedly active artifact already in `done/` or `archived/`?
- Does the current active handoff still exist as an active handoff?
- Does the current active task still exist as an active task?

A lifecycle situation is invalid if active work is materially no longer active.

---

## 3. Promotion Integrity

Questions:

- Was an artifact promoted only after the required governed step was honestly completed?
- Was a task moved to `done/` only after formal review closure supported that move?
- Was a handoff moved to `done/` only after it was truly consumed and no longer active?
- Was any artifact promoted based on narrated completion rather than lifecycle truth?

A lifecycle situation is invalid if promotion was premature, partial, or unsupported.

---

## 4. Archive Integrity

Questions:

- Was any artifact moved to `archived/` before it was truly obsolete, superseded, or cold-history?
- Was an artifact archived while still referenced as current or active?
- Was archive used as a cleanup shortcut instead of a true lifecycle state?

A lifecycle situation is invalid if `archived/` is being used to hide unresolved active work.

---

## 5. Task Queue Integrity

Questions:

- Does `Pending Tasks` remain distinct from the single current active task?
- Are multiple tasks being treated as simultaneously active implementation work in violation of serial execution?
- Is the current active task clearly distinguished from queued tasks?

A lifecycle situation is invalid if queue and active execution are collapsed into the same operational slot.

---

## 6. Handoff Consumption Integrity

Questions:

- Is the active handoff still the real current execution boundary?
- Was the handoff closed before review confirmed honest closure?
- Was the handoff left active even though it was fully consumed and superseded by the next moment?
- Is the handoff lifecycle consistent with the current task lifecycle?

A lifecycle situation is invalid if handoff lifecycle does not match the real execution boundary.

---

# Outcome Classification

This gate must classify the result as one of:

## Lifecycle Integrity Confirmed

Use when:

- artifacts are in their correct lifecycle folders
- active references match real active placement
- promotion and archive decisions appear materially correct
- no blocking lifecycle contradiction exists

Implication:

- governed continuation may proceed

---

## Lifecycle Integrity Confirmed With Minor Notes

Use when:

- lifecycle is materially usable
- no blocking placement or promotion contradiction exists
- small cleanup improvements may still be helpful later

Implication:

- governed continuation may proceed
- minor cleanup must not be confused with blocking lifecycle failure

---

## Lifecycle Integrity Broken / Blocking

Use when:

- active artifacts are stored in the wrong lifecycle location
- done or archived artifacts are still being treated as active
- promotion occurred prematurely
- archive use is misleading
- task/handoff lifecycle no longer matches the true operational boundary

Implication:

- governed continuation must stop
- lifecycle placement must be corrected before further workflow progression

---

# Output Structure

This gate must produce a concise structured output.

## Lifecycle Summary

Short summary of the current artifact lifecycle situation.

---

## Findings

Structured findings across:

- Canonical Placement Integrity
- Active Artifact Integrity
- Promotion Integrity
- Archive Integrity
- Task Queue Integrity
- Handoff Consumption Integrity

Keep findings short and concrete.

---

## Outcome Classification

One of:

- Lifecycle Integrity Confirmed
- Lifecycle Integrity Confirmed With Minor Notes
- Lifecycle Integrity Broken / Blocking

---

## Reasoning

Brief explanation of why this classification was chosen.

Avoid long narrative.

---

## Recommended Action

Examples:

- Lifecycle Integrity Confirmed → proceed to the next valid governed step
- Lifecycle Integrity Confirmed With Minor Notes → proceed, but clean up lifecycle hygiene later if useful
- Lifecycle Integrity Broken / Blocking → stop and correct artifact placement or promotion before continuing

---

# Gate Discipline Rules

This gate exists to protect lifecycle truth.

Therefore:

- it must prefer honest blocking over optimistic continuation
- it must not treat narrated completion as equivalent to real promotion integrity
- it must not allow active references to silently drift into done/archive
- it must evaluate real artifact placement, not only expected intent

If in doubt between “probably fine” and “materially premature lifecycle movement,” prefer material lifecycle concern.

---

# Lifecycle Correction Rule

This gate may recommend correcting artifact placement or lifecycle references.

It must not treat the recommendation itself as a successful correction.

It must not silently reinterpret misplaced artifacts as valid.

If lifecycle integrity is broken:

- STOP
- require explicit correction before continuation

---

# Escalation Rules

If lifecycle mismatch appears together with contradictory state fields:

- recommend running `check-state-coherence`

If the broken lifecycle suggests premature task or handoff closure:

- recommend returning to the correct prior governed step

If queue and active task usage are confused:

- recommend restoring serial execution clarity before proceeding

If lifecycle issues are small and non-blocking:

- classify as `Lifecycle Integrity Confirmed With Minor Notes` rather than inflating them into blocking failure

---

# Safety Rules

This gate must never:

- create a new macro stage
- replace governance
- replace review
- replace implementation readiness rules
- close artifacts by itself
- unlock execution by itself
- reinterpret premature lifecycle promotion as valid merely because the intended next step seems plausible

Its role is to verify whether artifact lifecycle truth can be trusted enough for governed continuation.

---

# Final Rule

Workflow artifacts must remain in the correct domain, lifecycle folder, and operational role.

When artifact lifecycle truth is broken, governed execution must stop until lifecycle integrity is restored.