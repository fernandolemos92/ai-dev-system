# ARTIFACT LIFECYCLE POLICY

This file defines the transversal lifecycle discipline for governed artifacts.

It exists to keep artifact status, placement, and closure behavior consistent across the system.

---

## Canonical Lifecycle Directories

Governed artifact families should use these canonical lifecycle directories when applicable:

- `active/`
- `done/`
- `archived/`
- `templates/`

Interpretation:

- `active/` = artifact currently governs live work
- `done/` = artifact closed through valid governed completion
- `archived/` = artifact intentionally retired from active operational use
- `templates/` = reusable canonical structures, not live work

---

## Active Means Operationally Governing

An artifact in `active/` is not merely recent.

It is the artifact currently governing a real bounded operational step.

If `PROJECT_STATE.md` lists an artifact as active, that artifact must exist in its canonical `active/` location.

---

## Done Requires Honest Closure

Artifacts may move to `done/` only after valid governed closure.

Examples:

- a PRD after the project has legitimately moved beyond it as an active governing scope definition
- a validation artifact after its role in governing the current bounded flow is honestly closed
- a task and handoff only after review allows legitimate closure

Implementation alone does not authorize promotion to `done/`.

Task and handoff closure must not skip governed review.

---

## Archived Means Retired, Not Finished by Default

`archived/` is for artifacts intentionally retired from current use.

This may happen when:

- the artifact is obsolete
- the scope was superseded
- the artifact should be preserved for history but no longer govern work

Archived does not automatically mean successful completion.

---

## State Alignment Rule

Artifact lifecycle and `PROJECT_STATE.md` must agree.

At minimum:

- every active artifact referenced in state must exist in `active/`
- no active artifact should point to `done/` or `archived/`
- state must not describe closure while the artifact still lives ambiguously in `active/`

If lifecycle and state disagree, the system must stop and resolve the inconsistency before continuing governed work.

---

## Pre-Promotion Placement Verification

Before lifecycle promotion from `active/` to `done/` or `archived/`, the system must verify:

1. **Artifact Location Check**
   - the artifact physically exists in the canonical active directory
   - the canonical directory contains exactly what `PROJECT_STATE.md` claims is active

2. **State vs. Filesystem Consistency**
   - no active artifact claim in state references an artifact not in `active/`
   - `PROJECT_STATE.md` does not describe closure while artifacts remain in `active/`

3. **Lifecycle Path Verification**
   - for task and handoff families: the canonical `done/<PRD-id>/` or `archived/<PRD-id>/` structure exists or is being created
   - artifacts are not being moved to loose family-root `done/` or `archived/` paths when lineage grouping is required

If any verification fails:

- **STOP** and report the inconsistency
- do not proceed with lifecycle promotion
- do not update state to reflect "done" when artifact was never in `active/`

This rule applies to all artifact families: research, experience, strategy, prd, validation, tasks, handoff.

The system must not treat:
- non-canonical initial placement as valid active lifecycle
- partial lifecycle movement as valid closure
- intended movement as completed movement

---

## Canonical Active Placement Rule

Active artifacts must live only in their family’s canonical `active/` location.

Examples:

- PRD → `project/prd/active/`
- Validation → `project/validation/active/`
- Research → `project/research/active/`
- Experience → `project/experience/active/`
- Strategy → `project/strategy/active/`
- Task → `project/tasks/active/`
- Handoff → `project/handoff/active/`

The system must not treat root-level artifact placement or cross-family placement as valid active lifecycle truth.

Examples of invalid active placement include:

- a task artifact in `project/tasks/`
- a handoff artifact in `project/tasks/`
- a research artifact in `project/`
- an active artifact in `done/` or `archived/`

---

## Single Active Artifact Per Family Rule

Unless governance explicitly defines a family as multi-active, each artifact family must have at most one active artifact at a time.

This applies to:

- research
- experience
- strategy
- prd
- validation
- tasks
- handoff

If a newer artifact supersedes an older active artifact in the same family, the older artifact must not remain in `active/` by default.

The system must not treat multiple active artifacts in the same family as valid lifecycle truth unless that family is explicitly governed as multi-active.

When `PROJECT_STATE.md` includes lifecycle-status or baseline-status fields, lifecycle validation must consider those fields part of coherence judgment rather than optional decoration.

---

## Canonical Done and Archived Placement Rule

Closure placement must remain canonical and traceable.

For artifact families where repository convention benefits from lineage grouping, closure paths must preserve that grouping instead of dropping artifacts loosely into the family root.

At minimum, for task and handoff families:

- completed task artifacts should move to `project/tasks/done/<PRD-id>/`
- archived task artifacts should move to `project/tasks/archived/<PRD-id>/`
- completed handoff artifacts should move to `project/handoff/done/<PRD-id>/`
- archived handoff artifacts should move to `project/handoff/archived/<PRD-id>/`

This grouping exists to preserve execution-line traceability and prevent lifecycle sprawl.

The system must not treat these looser placements as canonically complete for task or handoff closure:

- `project/tasks/done/<task-file>.md`
- `project/tasks/archived/<task-file>.md`
- `project/handoff/done/<handoff-file>.md`
- `project/handoff/archived/<handoff-file>.md`

If closure grouping requires a PRD lineage directory and that directory is missing, the system must create the canonical directory rather than falling back to a flatter non-canonical path.

---

## Closure Must Remain Review-Governed

For execution artifacts, closure is not a filesystem action alone.

For task and handoff pairs, valid promotion to `done/` requires:

- implementation work completed for the active execution line
- governed review completed
- review outcome that honestly allows closure
- coherent state update representing the closure moment
- canonical artifact movement consistent with that state

Task and handoff must not move to `done/` directly from `implementation` without review-based justification.

---

## Closure Sequence Rule

When closure is valid, lifecycle updates must happen in a disciplined order.

A correct closure moment should follow this sequence:

1. determine the review outcome honestly
2. verify that closure is actually allowed
3. move artifacts to their canonical `done/` or `archived/` locations
4. update `PROJECT_STATE.md` so that state and filesystem describe the same closure moment
5. stop and return control

The system must not narrate closure before canonical artifact movement and coherent state closure both exist.

The system must not treat intended movement or partial movement as valid closure.

---

## Post-Closure Pause Rule

Closure of one bounded execution line ends that bounded moment.

It does not automatically open the next one.

Accordingly, after task/handoff closure the system must not automatically:

- promote a pending task into `Active Task`
- prepare the next handoff
- unlock the next implementation line
- continue implementation on the next slice
- compress closure into same-turn reentry

The resulting operational moment after closure must reflect closure only.

Further work requires governed reentry.

---

## Single Active Execution Boundary Rule

For serial execution, the system should preserve a single current execution boundary.

That means:

- one active task at a time
- one active handoff for that task at a time
- pending tasks should remain distinguishable from the single active task

Bounded task decomposition does not imply parallel execution.

Pending tasks are not auto-activated simply because a prior task closed.

---

## State Closure Integrity Rule

Lifecycle movement is not valid unless `PROJECT_STATE.md` can be updated coherently to describe the same operational reality.

At minimum, closure-related state must not:

- keep a moved task or handoff listed as active
- point an active artifact field to a `done/` or `archived/` location
- describe a next execution line as already active when no governed reentry has happened
- leave `Current Phase`, `Next Expected Skill`, `Primary Objective`, and `Next Allowed Action` anchored to contradictory lifecycle moments

If state cannot be updated coherently after artifact movement, the lifecycle transition remains operationally incomplete.

The system must stop and surface the inconsistency.

---

## Lifecycle Truth Over Momentum Rule

The system must prefer lifecycle truth over narrative momentum.

This means it must not:

- move artifacts early because the implementation “seems good enough”
- close the current line just because the next task looks obvious
- treat filesystem movement as permission to continue
- use eager closure language to hide unresolved state ambiguity

Artifact placement, status, and operational state must reflect the same bounded truth, not the most optimistic storyline.

---

## Must Not

Do not:

- create active artifacts in non-canonical locations
- treat implementation completion as enough to close task and handoff
- move lifecycle files without also checking state coherence
- describe an artifact as active when it is stored in `done/` or `archived/`
- leave closure semantically half-done across state and filesystem
- close one execution line and auto-open the next in the same turn
- flatten task or handoff closure into non-canonical `done/` or `archived/` family roots when lineage grouping is required

---

## Final Rule

Lifecycle discipline is part of governed truth.

Artifact placement, artifact status, and project state must describe the same operational reality.