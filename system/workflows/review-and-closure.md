# WORKFLOW: review-and-closure

This workflow defines how the system should assess a delivered bounded outcome and decide whether closure is honest.

---

## Purpose

Use this workflow to separate implementation work from closure judgment.

This workflow exists to improve:

- honest acceptance decisions
- lifecycle discipline
- traceable closure
- follow-up visibility
- resistance to premature “done” claims
- governed reentry after closure rather than ad hoc continuation

---

## Typical Governed Span

This workflow covers:

- `review`
- downstream lifecycle closure of the active task and handoff when warranted
- the bounded post-closure moment immediately after that closure, when applicable

This workflow ends at honest closure or honest refusal of closure.

It does not continue automatically into a new execution line.

---

## Canonical Skills

The main bounded skill associated with this workflow is:

- `review-delivery`

Lifecycle updates after review must still remain coherent with state and artifact placement.

The skill may support closure only when the review outcome genuinely permits it.

---

## Likely Specialists

Relevant specialists may include:

- `qa`
- `security`
- `architect`
- selected design or growth agents when the bounded review genuinely requires that lens

These specialists support review.

They do not replace it.

They do not create closure authority on their own.

---

## Expected Output

When this workflow is used correctly, the system should produce:

- an explicit review classification
- clear reasoning for acceptance, follow-ups, or rejection
- honest lifecycle implications for the active task and handoff
- a coherent next action when closure is not yet justified
- a coherent post-closure pause when closure is justified

---

## Readiness Signal

This workflow is sufficiently complete when the system can say, with bounded honesty:

- whether the delivery is accepted, accepted with follow-ups, or rejected
- whether lifecycle closure is justified now
- what remains active if closure is not yet justified
- whether the system is now paused at a closure moment awaiting governed reentry

---

## Review Is Not Decorative

This workflow must not be treated as a light confirmation step after implementation.

Its job is to determine whether closure is true, not merely whether code exists.

A delivery is not honestly closed just because:

- files were created
- code compiled
- implementation claims success
- the next task looks obvious
- the user is eager to continue

Review must judge bounded completion, boundary integrity, and lifecycle truth.

---

## Closure Discipline

Closure is valid only when all of the following are true:

- the active task was materially satisfied
- the active handoff boundary was materially satisfied
- no major gap makes closure misleading
- no major lifecycle inconsistency remains
- task and handoff can move to canonical closed locations honestly
- `PROJECT_STATE.md` can be updated coherently to describe the closure moment

Closure must remain review-governed.

It must not be reduced to a filesystem move.

---

## Closure Does Not Open the Next Line

Closure of one task/handoff pair ends that bounded execution line.

It does not automatically:

- activate the next pending task
- prepare the next handoff
- unlock the next implementation slice
- reopen implementation on a different scope unit
- skip directly into a new task block

If further work is still available, that work must remain pending until a later governed reentry moment explicitly selects it.

This workflow must therefore preserve a post-closure pause.

---

## Post-Closure Reentry

After successful closure, the next governed direction must be chosen deliberately.

Possible post-closure directions include:

- governed pause
- follow-up task creation
- activation of an already pending task through explicit reentry
- renewed validation
- renewed experience or strategy work when newly uncovered gaps materially require it
- stabilization work
- strategic decision pause

The correct next move depends on the dominant need.

It must not be auto-inferred from momentum alone.

---

## Canonical Lifecycle Expectations

When closure is justified:

- the active task may move from `project/tasks/active/` to its canonical closed location
- the active handoff may move from `project/handoff/active/` to its canonical closed location
- `PROJECT_STATE.md` must stop describing them as active
- `Pending Tasks`, if any remain, must stay pending rather than silently promoted

Closure movement must follow canonical lifecycle policy.

Non-canonical closure paths or partial state closure are not acceptable substitutes.

---

## Honest Refusal of Closure

When closure is not justified, this workflow must preserve lifecycle truth.

That means:

- the active task remains active
- the active handoff remains active
- the state remains centered on the still-open execution line
- the next allowed action returns to the correct prior governed step

This workflow must not soften real incompleteness into ambiguous acceptance language.

---

## Governance and Lifecycle Sensitivity

This workflow must be sensitive not only to functional delivery, but also to whether closure would hide deeper governed problems.

Examples include:

- material scope drift beyond the active execution line
- active artifacts no longer matching real work
- lifecycle placement that would become inconsistent after closure
- upstream workflow omissions that materially invalidate honest closure of the current slice
- premature selection of the next task before reentry is governed

A merely functional outcome is not enough when closure would normalize a governance failure.

---

## Coherent Post-Closure State

If closure is accepted, the resulting `PROJECT_STATE.md` should describe one coherent post-closure moment.

That moment should usually include:

- the just-closed task no longer active
- the just-closed handoff no longer active
- `Execution Unlocked = no` unless a different coherent state is explicitly required
- no implied implementation already in motion for the next line
- `Pending Tasks` still pending when applicable
- `Next Expected Skill` or `Next Allowed Action` written conservatively
- wording that reflects pause, reentry need, or the next governed decision point

The post-closure state must not describe “closure + new active task + next handoff + implementation readiness” all at once.

That is not one coherent operational moment.

---

## Output Expectations

A correct workflow traversal should leave the system able to state clearly:

- what was reviewed
- what the classification was
- what lifecycle consequence followed
- whether closure happened
- whether further work remains pending
- that the system has now returned control rather than silently continuing

---

## Must Not

This workflow must not:

- act like a decorative polish pass only
- hide follow-up work inside vague closure language
- promote artifacts to `done` without real review-based justification
- treat review acceptance as permission to auto-open the next execution line
- collapse closure and reentry into one continuous move
- normalize “task-to-task momentum” as governed progression