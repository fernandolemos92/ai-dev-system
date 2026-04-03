---
name: review-delivery-outcome
description: Review the outcome of an implemented delivery against the active task and handoff, and determine whether closure is accepted, accepted with follow-ups, or rejected.
---

# SKILL: review-delivery-outcome

## Purpose

Review the outcome of an implemented delivery and determine whether it is ready for governed closure.

This skill exists to prevent premature completion of implementation work.

It evaluates whether the delivered result is sufficiently aligned with:

- the active task
- the active handoff
- the intended scope of the current workflow step
- the expected done condition for closure
- the minimum implementation quality baseline expected by the system

This skill does not implement changes.

It evaluates the implementation outcome and decides whether the delivery can be:

- accepted
- accepted with follow-ups
- rejected as incomplete

---

# When To Use

Use this skill when:

- implementation work has been completed for the current active task
- the system has reached the official `review` phase
- a task appears implementationally complete and needs closure decision
- task and handoff lifecycle promotion is being considered
- the system needs to decide whether work returns to implementation or can move to done

Typical workflow usage:

handoff  
↓  
implementation  
↓  
**review-delivery-outcome ← this skill**  
↓  
closure decision  
↓  
done or follow-up action

This skill is the formal governed review step for delivery closure.

---

# When Not To Use

Do NOT use this skill when:

- the system is still in discovery or planning
- implementation has not actually happened yet
- there is no active task
- there is no active handoff for the current execution boundary
- the goal is a specialized auxiliary review such as:
  - UI critique
  - brand/design review
  - security risk classification
  - architecture exploration

This skill is not a substitute for auxiliary reviews.

It is the formal governed review of implementation outcome.

---

# Required Inputs

This skill should read:

- `project/PROJECT_STATE.md`
- the active task from `project/tasks/active/`
- the active handoff from `project/handoff/active/`
- the related PRD from `project/prd/active/`

Optional inputs:

- active validation artifact
- changed implementation files
- execution notes
- relevant auxiliary review outputs

Only retrieve what is necessary to review the current delivery.

Avoid broad repository scanning unless needed to verify the implemented outcome.

---

# Pre-Step Consistency Check

Before reviewing the delivery, verify that `PROJECT_STATE.md` is coherent with the filesystem.

Minimum checks:

- `Current Phase = review`
- Active Task exists in `project/tasks/active/`
- Active Handoff exists in `project/handoff/active/`
- Active PRD exists when referenced
- no active artifact points to a done or archived location
- the active handoff still matches the current task boundary

If a mismatch is detected:

- STOP
- report the inconsistency clearly
- correct the inconsistency before continuing

This skill must not review closure on top of inconsistent state.

---

# Review Objective

The objective of this skill is to answer one bounded question:

**Is the current delivery outcome ready for governed closure?**

That answer must be based on the currently active execution boundary, not on unrelated future improvements.

The review must focus on whether the delivery satisfies the current bounded task and handoff, not whether the whole product is perfect.

---

# Review Dimensions

The skill must assess the delivery across the following dimensions.

## 1. Scope Alignment

Check whether the implementation outcome matches the active task and handoff.

Questions to evaluate:

- Was the intended bounded step actually delivered?
- Did implementation drift beyond the approved scope?
- Was important expected behavior left out?

---

## 2. Functional Outcome

Check whether the delivered behavior appears to work as intended for the current step.

Questions to evaluate:

- Does the implementation outcome satisfy the expected result?
- Are there visible gaps that prevent the step from being considered complete?
- Is the result materially usable for the bounded objective?

---

## 3. Regression or Instability Risk

Check whether the delivery introduces visible instability, contradiction, or operational uncertainty.

Questions to evaluate:

- Did the change break or weaken related behavior?
- Is the implementation obviously fragile or inconsistent?
- Is there unresolved ambiguity that prevents safe closure?

---

## 4. Implementation Quality

Check whether the implementation respected the system’s minimum engineering baseline.

Questions to evaluate:

- Is the code readable and maintainable for low-context continuation?
- Are naming and structure reasonably clear?
- Is responsibility separation acceptable for the bounded scope?
- Is there unnecessary complexity, indirection, or speculative abstraction?
- Did the implementation keep changes reasonably local and bounded?
- Did the implementation preserve file discipline, including the project preference for implementation files around `300 lines` maximum when feasible?

This dimension should apply Clean Code and SOLID-oriented judgment pragmatically, not dogmatically.

The review should prefer:

- clarity over cleverness
- simple maintainable structure over overengineering
- bounded modularization when justified
- explicit intent over hidden behavior

The review should not reject a delivery merely because it is not academically perfect.

It should reject or downgrade closure when quality problems materially hurt maintainability, readability, boundedness, or safe continuation.

---

## 5. Closure Readiness

Check whether the delivery is truly ready to leave the active lifecycle.

Questions to evaluate:

- Can the task honestly move from `active` to `done`?
- Can the handoff honestly move from `active` to `done` or otherwise close?
- Does `PROJECT_STATE.md` have enough clarity for coherent closure?
- Is another bounded follow-up required before closure can be accepted?

---

# Review Outcomes

The skill must classify the result into one of three outcomes.

## Accepted

Use when:

- the active task outcome is materially complete
- the handoff boundary was satisfied
- no blocking gap prevents closure
- the delivery is ready for governed lifecycle completion

Implication:

- task may move to `project/tasks/done/`
- handoff may move to `project/handoff/done/` or otherwise close according to lifecycle policy
- `PROJECT_STATE.md` may be updated coherently for the next operational moment

---

## Accepted With Follow-Ups

Use when:

- the current bounded task is sufficiently complete to close
- but additional work is still needed afterward
- and that additional work should not invalidate honest closure of the current step

Implication:

- current task may still close
- current handoff may still close
- follow-up work must be represented explicitly as new bounded tasking or later review action
- follow-up work must not be hidden inside notes as if it were already done

---

## Rejected / Incomplete

Use when:

- the task outcome is not sufficiently complete
- the handoff boundary was not actually satisfied
- major gaps remain
- closure would be premature or misleading

Implication:

- task must remain active
- handoff must remain active
- the system must return to implementation or another prior governed step
- no done promotion is allowed

---

# Review Output Structure

The skill must produce a concise structured output.

## Delivery Summary

Short summary of what appears to have been delivered.

---

## Review Findings

Structured findings across:

- Scope Alignment
- Functional Outcome
- Regression or Instability Risk
- Implementation Quality
- Closure Readiness

Keep each short and concrete.

---

## Outcome Classification

One of:

- Accepted
- Accepted With Follow-Ups
- Rejected / Incomplete

---

## Reasoning

Brief explanation of why this classification was chosen.

Avoid long narrative.

---

## Recommended Action

Examples:

- Accepted → close task and handoff coherently
- Accepted With Follow-Ups → close current task, then create follow-up tasking if needed
- Rejected / Incomplete → keep task and handoff active and return to implementation

---

# Closure Discipline Rules

This skill exists to stop false closure.

Therefore it must apply the following rules:

- implementation output must not be treated as automatically complete
- visible gaps must not be ignored just because code was written
- a narrated claim of completion is not enough
- lifecycle closure must reflect the real delivery outcome
- follow-up work must not be hidden inside an accepted closure unless the current bounded objective is genuinely complete

If in doubt between optimistic closure and honest incompleteness, prefer honest incompleteness.

---

# Quality Review Rules

This skill must evaluate implementation quality pragmatically.

It must not require perfection.

It must check whether the implementation is:

- readable enough to continue later
- structured clearly enough to maintain
- bounded enough to trust within the current scope
- disciplined enough to avoid unnecessary future rework

Clean Code and SOLID-oriented judgment should be applied as practical review lenses, not as decorative doctrine.

If quality issues are small and do not invalidate honest closure, prefer:

- Accepted With Follow-Ups

If quality issues materially damage maintainability, clarity, boundedness, or safe continuation, prefer:

- Rejected / Incomplete

---

# State and Lifecycle Rules

This skill is allowed to support governed closure decisions.

It must not create a new macro phase.

When review is complete:

## If Outcome = Accepted

The system may:

- move the active task to `project/tasks/done/`
- move the active handoff to `project/handoff/done/` if the handoff is fully consumed and complete
- update `PROJECT_STATE.md` coherently to reflect the next operational moment

Only do this if the state update can be completed coherently across the whole file.

## If Outcome = Accepted With Follow-Ups

The system may:

- close the current task if the bounded delivery is honestly complete
- close the current handoff if consumed
- keep the next operational step explicit
- recommend new tasking or follow-up review

Do not leave follow-up work implicit.

## If Outcome = Rejected / Incomplete

The system must:

- keep the task active
- keep the handoff active
- keep the current lifecycle open
- return to implementation or the correct prior governed step
- avoid any done promotion

This skill must never close task or handoff on top of a contradictory or partial `PROJECT_STATE.md`.

---

# Escalation Rules

If the delivery reveals scope drift beyond the approved task:

- recommend returning to `break-scope-into-tasks`

If the implementation outcome reveals unresolved context ambiguity:

- recommend `detect-context-gap`

If the delivery crosses sensitive security boundaries not previously assessed:

- recommend `assess-security-boundary`

If the delivery appears architecturally unsafe or structurally inconsistent:

- recommend architecture review before closure

If the current task appears complete but new work is clearly needed:

- recommend explicit follow-up task creation rather than reopening the already completed task dishonestly

---

# Output Expectations

Produce a concise structured evaluation.

Example output:

Delivery Summary  
Playback controls were implemented and connected to the current UI flow.

Review Findings  
Scope Alignment: The active task objective was delivered.  
Functional Outcome: The controls appear present and usable for the intended bounded step.  
Regression or Instability Risk: No blocking regression was identified in the reviewed scope.  
Implementation Quality: The implementation is readable and sufficiently bounded, but a follow-up would improve separation of responsibilities in the playback controller.  
Closure Readiness: The current task is ready for closure, but a separate follow-up is needed for edge-case playback synchronization.

Outcome Classification  
Accepted With Follow-Ups

Reasoning  
The bounded delivery is complete enough to close honestly, and the remaining quality improvements should be represented as explicit follow-up scope rather than hidden inside the current closure.

Recommended Action  
Close the current task and handoff coherently, then create a new bounded follow-up task for playback synchronization and controller responsibility cleanup.

---

# Safety Rules

This skill must never:

- implement fixes directly
- rewrite task scope during review
- hide incompleteness behind vague acceptance language
- close artifacts on top of inconsistent lifecycle state
- treat auxiliary review as a substitute for governed delivery review

Its role is to decide whether the implemented delivery is honestly ready for closure.

---

# Final Rule

This skill protects the integrity of the governed workflow.

Always prioritize:

- honest closure
- bounded judgment
- lifecycle consistency
- explicit follow-up work
- reliable state transition