---
name: review-delivery
description: Review the outcome of an implemented delivery against the active task and handoff, and determine whether closure is accepted, accepted with follow-ups, or rejected.
---

# SKILL: review-delivery

## Purpose

Review the outcome of an implemented delivery and determine whether it is ready for governed closure.

This skill exists to prevent premature completion of implementation work.

It evaluates whether the delivered result is sufficiently aligned with:

- the active task
- the active handoff
- the intended scope of the current workflow step
- the expected done condition for closure
- the minimum implementation quality baseline expected by the system
- the implementation architecture canon applicable to the current change
- the governance and lifecycle discipline required for honest closure

This skill does not implement changes.

It evaluates the implementation outcome and decides whether the delivery can be:

- accepted
- accepted with follow-ups
- rejected as incomplete

This skill must not treat “the feature works” as sufficient by itself when structural or consistency alignment materially fails.

---

## Normative Relationship

This skill is bound by the implementation architecture policy and the applicable implementation canon documents.

The following documents are normative during review when applicable:

- `project/memory/implementation-architecture-policy.md`
- `project/memory/frontend-implementation-architecture.md` when frontend structure was touched
- `project/memory/backend-implementation-architecture.md` when backend structure was touched
- `project/memory/design-system-integration.md` when product UI consistency, shared UI semantics, recurring states, patterns, or visual contracts were touched

This means:

- closure must evaluate both functional correctness and structural alignment
- tasks, handoffs, implementation self-description, or specialist commentary do not override the canon
- under-specified execution history does not suspend the canon
- structurally meaningful misalignment must be surfaced even when implementation appears to work

This skill must not treat architectural quality as optional polish.

---

## When To Use

Use this skill when:

- implementation work has been completed for the current active task
- the system has reached the official `review` phase, or is coherently transitioning from completed implementation into governed review
- a task appears implementationally complete and needs closure decision
- task and handoff lifecycle promotion is being considered
- the system needs to decide whether work returns to implementation or can move to done

Typical workflow usage:

handoff  
↓  
implementation  
↓  
**review-delivery ← this skill**  
↓  
closure decision  
↓  
done or follow-up action

This skill is the formal governed review step for delivery closure.

---

## When Not To Use

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

## Required Inputs

This skill should read:

- `project/PROJECT_STATE.md`
- the active task from `project/tasks/active/`
- the active handoff from `project/handoff/active/`
- the related PRD from `project/prd/active/`
- `project/memory/implementation-architecture-policy.md`

Optional inputs:

- active validation artifact
- changed implementation files
- execution notes
- `project/memory/frontend-implementation-architecture.md`
- `project/memory/backend-implementation-architecture.md`
- `project/memory/design-system-integration.md`
- relevant auxiliary review outputs
- relevant optional domain artifacts when they materially govern the current execution line

Only retrieve what is necessary to review the current delivery.

Avoid broad repository scanning unless needed to verify the implemented outcome.

---

# Pre-Step Consistency Check

Before reviewing the delivery, verify that `PROJECT_STATE.md` is coherent with the filesystem.

Minimum checks:

- `Current Phase = review`, or a coherent implementation-to-review transition is explicitly represented and safe to interpret
- Active Task exists in `project/tasks/active/`
- Active Handoff exists in `project/handoff/active/`
- Active PRD exists when referenced
- no active artifact points to a done or archived location
- the active handoff still matches the current task boundary
- the implementation architecture policy exists
- any canon required by the reviewed change is available

If a mismatch is detected:

- STOP
- report the inconsistency clearly
- correct the inconsistency before continuing

This skill must not review closure on top of inconsistent state.

If `Current Phase` is still `implementation`, this skill must not silently treat that as harmless by default.

It may proceed only when the operational moment is clearly one of completed implementation awaiting governed review, and that interpretation does not conflict with the active artifact set or the rest of the state.

If that interpretation is not clearly safe, stop and require coherent state alignment first.

---

# Review Objective

The objective of this skill is to answer one bounded question:

**Is the current delivery outcome ready for governed closure, both functionally and structurally, inside the active execution boundary?**

That answer must be based on the currently active execution boundary, not on unrelated future improvements.

The review must focus on whether the delivery satisfies the current bounded task and handoff, not whether the whole product is perfect.

---

# Canon Applicability Check

Before evaluating the delivery, this skill must determine which implementation canon applies to the reviewed outcome.

It must classify the reviewed change as one or more of:

- frontend structural work
- backend structural work
- UI consistency / design-system-sensitive work
- cross-cutting work

## Frontend canon applies when the reviewed delivery touched:

- route/page structure
- screen composition
- feature component boundaries
- shared UI consumption or creation
- hooks and state ownership
- utility placement
- frontend adapters
- frontend file structure
- frontend anti-pattern boundaries

## Backend canon applies when the reviewed delivery touched:

- routes, handlers, or controllers
- use cases or application services
- repositories
- validation boundaries
- authentication flow
- ownership-sensitive behavior
- integrations
- error contracts
- backend structural anti-pattern boundaries

## Design system canon applies when the reviewed delivery touched:

- product UI consistency
- shared UI semantics
- recurring product states
- canonical patterns
- primitives
- token discipline
- product-level UI reuse
- consistency-sensitive visual or interaction behavior

## Rule

This skill must make an explicit canon applicability decision before classifying closure.

It must not review implementation as if “review is only functional QA.”
It must review against the applicable architectural canon.

---

# Review Dimensions

The skill must assess the delivery across the following dimensions.

## 1. Scope Alignment

Check whether the implementation outcome matches the active task and handoff.

Questions to evaluate:

- Was the intended bounded step actually delivered?
- Did implementation drift beyond the approved scope?
- Was important expected behavior left out?
- Did the implementation cross into pending-task or future-slice scope?

Scope drift is not a minor cosmetic issue in this system.

If implementation clearly included behavior that belongs to later tasks or later handoffs, that must be treated as a serious review finding.

The review must not call scope alignment successful when clear boundary overflow occurred.

---

## 2. Functional Outcome

Check whether the delivered behavior appears to work as intended for the current step.

Questions to evaluate:

- Does the implementation outcome satisfy the expected result?
- Are there visible gaps that prevent the step from being considered complete?
- Is the result materially usable for the bounded objective?

This dimension must stay bounded to the current task.

It must not excuse missing current-scope behavior by pointing to broader product progress.

---

## 3. Regression or Instability Risk

Check whether the delivery introduces visible instability, contradiction, or operational uncertainty.

Questions to evaluate:

- Did the change break or weaken related behavior?
- Is the implementation obviously fragile or inconsistent?
- Is there unresolved ambiguity that prevents safe closure?

If the review lacks sufficient evidence to assert stability confidently, it must speak conservatively.

It must not convert uncertainty into confident assurance.

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

The review must not simply repeat implementation self-description as evidence of quality.

If the implementation claimed quality attributes, this skill must still judge them independently.

---

## 5. Structural Alignment With Applicable Canon

Check whether the delivery remained aligned with the implementation architecture canon that applies to this execution line.

### Frontend structural review when frontend canon applies

Questions to evaluate:

- Is the page or route entry surface thin enough?
- Is the page mostly orchestration rather than concentration?
- Did a screen / feature composition layer absorb complexity where needed?
- Are feature components clearly separated?
- Did hooks remain focused on behavior and state orchestration?
- Did generic helpers leak into feature hooks?
- Was state ownership clear?
- Was shared UI reused where applicable?
- Did the delivery avoid overloaded page or component concentration?

### Backend structural review when backend canon applies

Questions to evaluate:

- Is the route/controller/handler thin enough?
- Is there a clear use case or action owner?
- Was a service used only where clearly justified?
- Did the implementation default to use case ownership for action-oriented behavior?
- Did repositories remain focused on persistence rather than business decisions?
- Are validation boundaries visible?
- Are authentication and ownership decisions visible and coherent?
- Is error behavior stable enough for continuation?

### Design-system structural review when design-system canon applies

Questions to evaluate:

- Did the delivery preserve token discipline where relevant?
- Were primitives reused appropriately?
- Were shared product components reused appropriately?
- Were recurring states or flows treated through canonical patterns rather than local improvisation?
- Did the implementation preserve product consistency?
- Did it avoid toolkit-as-design-system thinking?
- Did it avoid local reinvention of recurring product blocks?

### Rule

This dimension is mandatory whenever the reviewed change touches the relevant canon.

A functionally correct change may still fail honest closure if structural alignment is materially weak.

---

## 6. Governance and Lifecycle Integrity

Check whether the delivery outcome remains honest with respect to the governed execution line.

Questions to evaluate:

- Did the implementation stay inside the active execution boundary?
- Does the current active task and active handoff still represent the same real delivery slice?
- Is there any meaningful sign that lifecycle truth, artifact truth, or state truth have drifted apart?
- Would closure hide unresolved governance problems behind a merely functional outcome?
- Did upstream workflow omission, if materially relevant to this execution line, undermine honest closure now?

This dimension exists to prevent a review from becoming “the code exists, therefore closure is fine.”

A delivery is not cleanly reviewable if:

- the execution boundary was materially violated
- active artifacts and real work no longer line up
- closure would silently normalize workflow bypass that materially affected the current slice
- state and filesystem would not describe the same operational reality after closure

If governance and lifecycle integrity are materially compromised, this skill must downgrade or refuse closure even when some implementation work appears functionally successful.

---

## 7. Closure Readiness

Check whether the delivery is truly ready to leave the active lifecycle.

Questions to evaluate:

- Can the task honestly move from `active` to `done`?
- Can the handoff honestly move from `active` to `done` or otherwise close?
- Does `PROJECT_STATE.md` have enough clarity for coherent closure?
- Is another bounded follow-up required before closure can be accepted?

Closure readiness depends on honest bounded completion, not on narrative momentum.

If the current step is not honestly complete inside its approved scope, closure is not ready.

---

# Evidence Discipline

This skill must distinguish clearly between:

- what is directly supported by reviewed artifacts or implementation evidence
- what is a reasonable bounded inference
- what is still uncertain

It must not present uncertain claims as established facts.

Examples of claims that require real support before being stated confidently include:

- "code executes without errors"
- "works in the browser"
- "quality is clean"
- "responsibilities are well separated"
- "no regression was identified"
- "design-system alignment is strong"
- "structural boundaries are healthy"

If the evidence is partial or indirect, this skill must speak conservatively.

---

# Scope Drift Severity Rule

Clear implementation beyond the active task and handoff is a major review signal.

When the delivery includes work that materially belongs to:

- pending tasks
- later execution slices
- later handoffs
- future product behaviors not approved in the active handoff

the review must not classify the result as simple `Accepted` unless that additional work is clearly trivial, non-material, and does not compromise bounded closure integrity.

In most cases, meaningful scope drift should lead to one of:

- `Accepted With Follow-Ups` when the current bounded task is still honestly complete and the overflow can be handled explicitly afterward
- `Rejected / Incomplete` when the overflow materially breaks honest bounded closure or reveals unsafe task/handoff structure

This skill must not normalize boundary violation as “extra helpful completeness.”

---

# Workflow Bypass Awareness Rule

This skill must not silently ignore materially relevant workflow bypass when that bypass affects honest closure of the current execution line.

Examples include:

- missing experience-direction for a strongly user-facing and trust-sensitive execution line when that omission materially degraded safe execution framing
- missing strategy work when messaging, funnel logic, or positioning materially governed the delivered surface
- missing research grounding when the active task clearly depended on it and the current delivery reflects that gap
- missing architecture canon application when the active implementation line clearly depended on it

This skill does not reopen upstream workflow merely because an optional domain exists.

However, if upstream omission materially affects whether the current delivery can be closed honestly, the review must say so explicitly.

In those cases, a merely functional delivery outcome is not enough by itself to justify clean acceptance.

---

# Review Outcomes

The skill must classify the result into one of three outcomes.

## Accepted

Use when:

- the active task outcome is materially complete
- the handoff boundary was satisfied
- no blocking gap prevents closure
- no meaningful boundary overflow invalidates honest bounded completion
- no meaningful governance or lifecycle integrity problem makes closure misleading
- no meaningful structural misalignment remains against the applicable canon
- the delivery is ready for governed lifecycle completion

Implication:

- task may move to `project/tasks/done/`
- handoff may move to `project/handoff/done/` or otherwise close according to lifecycle policy
- `PROJECT_STATE.md` may be updated coherently for the next operational moment

## Accepted With Follow-Ups

Use when:

- the current bounded task is sufficiently complete to close
- but additional work is still needed afterward
- and that additional work does not invalidate honest closure of the current step

Typical examples include:

- small quality cleanup that should be represented explicitly later
- bounded structural debt that is visible and should not be normalized
- minor excess work that does not break honest closure but must not remain implicit
- non-blocking governance concerns that do not invalidate closure of the current bounded step but must be surfaced explicitly
- non-blocking design-system drift or structural debt that should become explicit follow-up rather than hidden acceptance

Implication:

- current task may still close
- current handoff may still close
- follow-up work must be represented explicitly as new bounded tasking or later review action
- follow-up work must not be hidden inside notes as if it were already done

## Rejected / Incomplete

Use when:

- the task outcome is not sufficiently complete
- the handoff boundary was not actually satisfied
- major gaps remain
- closure would be premature or misleading
- meaningful scope drift makes honest bounded closure unsafe
- quality or structural issues materially damage safe continuation
- governance or lifecycle integrity is materially broken
- the applicable canon was materially violated in a way that prevents honest closure

Implication:

- task must remain active
- handoff must remain active
- the system must return to implementation or another prior governed step
- no done promotion is allowed

---

# Structural Review Outcome Guidance

When structural alignment is especially load-bearing in the decision, this skill should use the following internal judgment model while still producing one of the three formal review outcomes above:

- `aligned`
- `aligned with debt`
- `rework required`
- `structurally blocked`

### Mapping guidance

- `aligned` usually supports `Accepted`
- `aligned with debt` usually supports `Accepted With Follow-Ups`
- `rework required` usually supports `Rejected / Incomplete`
- `structurally blocked` must support `Rejected / Incomplete`

This internal structural classification should help the review remain precise rather than binary or vague.

---

# Review Output Structure

The skill must produce a concise structured output.

## Delivery Summary

Short factual summary of what appears to have been delivered.

Do not inflate delivery language.

Do not rewrite the whole implementation as a success story.

---

## Canon Applied

State which canon was applied during review:

- `frontend canon`
- `backend canon`
- `design-system canon`
- `cross-cutting frontend + design-system canon`
- `cross-cutting frontend + backend canon`
- other accurate bounded combination as applicable

This must reflect the actual structural classification of the reviewed change.

---

## Review Findings

Structured findings across:

- Scope Alignment
- Functional Outcome
- Regression or Instability Risk
- Implementation Quality
- Structural Alignment With Applicable Canon
- Governance and Lifecycle Integrity
- Closure Readiness

Keep each short and concrete.

Where appropriate, findings must explicitly distinguish:

- confirmed strengths
- blocking concerns
- uncertain areas

---

## Structural Assessment

State one of:

- `aligned`
- `aligned with debt`
- `rework required`
- `structurally blocked`

This must reflect the architectural result of the review, not just the functional result.

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

The reasoning must explicitly reflect the most important deciding factor, especially if scope drift, lifecycle inconsistency, incompleteness, quality risk, or structural misalignment drove the result.

---

## Recommended Action

Examples:

- Accepted → close task and handoff coherently
- Accepted With Follow-Ups → close current task, then create follow-up tasking if needed
- Rejected / Incomplete → keep task and handoff active and return to implementation

Recommended action must reflect the actual classification honestly.

It must not auto-open the next execution line.

---

# Closure Discipline Rules

This skill exists to stop false closure.

Therefore it must apply the following rules:

- implementation output must not be treated as automatically complete
- visible gaps must not be ignored just because code was written
- a narrated claim of completion is not enough
- lifecycle closure must reflect the real delivery outcome
- follow-up work must not be hidden inside an accepted closure unless the current bounded objective is genuinely complete
- closure of the current task/handoff pair must not auto-activate the next pending task
- closure of the current task/handoff pair must not auto-start the next handoff or execution-unlock step

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
- sufficiently aligned with the applicable canon for honest closure

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

# Post-Closure Reentry Rule

If review-based closure succeeds for the current task/handoff pair, the resulting state must represent the closure moment only.

It must not automatically:

- promote a pending task into `Active Task`
- create or imply a new active handoff
- set execution in motion for the next task
- collapse closure into same-turn reentry

If more work remains in `Pending Tasks`, that remaining work must stay pending until a later governed reentry moment explicitly selects the next bounded direction.

Closure is not the same thing as opening the next execution line.

---

# Stop-After-Review Rule

After this skill finishes review and any valid closure/state update is complete, it must stop and return control.

This pause is mandatory.

This skill must not:

- prepare the next handoff inline
- recommend the next active task as if it is already activated now
- unlock the next execution line inline
- resume implementation on remaining pending work in the same turn

The correct result of this skill is:

- review classification completed
- lifecycle implications stated honestly
- any coherent closure applied
- explicit return of control

Nothing later.

---

# Escalation Rules

If the delivery reveals scope drift beyond the approved task:

- recommend returning to `plan-tasks`

If the implementation outcome reveals unresolved context ambiguity:

- recommend `discover-missing-context`

If the delivery crosses sensitive security boundaries not previously assessed:

- recommend `check-security-boundary`

If the delivery appears architecturally unsafe or structurally inconsistent:

- recommend architecture review before closure

If the delivery appears functionally usable but structurally misaligned:

- recommend explicit rework or bounded follow-up rather than silently accepting drift

If the current task appears complete but new work is clearly needed:

- recommend explicit follow-up task creation rather than reopening the already completed task dishonestly

If the main problem is post-closure reentry uncertainty:

- recommend a governed pause rather than automatic continuation

---

# Output Expectations

Produce a concise structured evaluation.

Example output:

Delivery Summary  
Playback controls were implemented and connected to the current UI flow.

Canon Applied  
Frontend canon

Review Findings  
Scope Alignment: The active task objective was delivered, but a later-scope synchronization behavior also appears partially implemented.  
Functional Outcome: The intended bounded controls appear present and usable for the current step.  
Regression or Instability Risk: No blocking regression is directly evident from the reviewed scope, but evidence is limited.  
Implementation Quality: The implementation is readable enough for continuation, though a follow-up would improve controller responsibility separation.  
Structural Alignment With Applicable Canon: The page remains somewhat overloaded, but the core feature boundary is still understandable.  
Governance and Lifecycle Integrity: Active artifacts still align to the reviewed execution boundary, but downstream follow-up must remain explicit rather than folded into closure.  
Closure Readiness: The current task can close honestly, but the later-scope overflow must be represented explicitly as follow-up awareness, not hidden.

Structural Assessment  
Aligned with debt

Outcome Classification  
Accepted With Follow-Ups

Reasoning  
The bounded delivery is materially complete, but the review identified non-blocking structural debt and minor spillover beyond the current slice. Closure can still be honest only if that debt and overflow are made explicit and future work remains governed separately.

Recommended Action  
Close the current task and handoff coherently if lifecycle state supports it, then represent follow-up work explicitly through new bounded tasking or later governed review.

---

# Safety Rules

This skill must never:

- implement fixes directly
- rewrite task scope during review
- hide incompleteness behind vague acceptance language
- close artifacts on top of inconsistent lifecycle state
- treat auxiliary review as a substitute for governed delivery review
- repeat implementation self-assessment as if it were verified evidence
- auto-open the next task or next execution line after review closure
- ignore the applicable canon because the feature appears usable
- normalize design drift, structural drift, or boundary drift as acceptable by default

Its role is to decide whether the implemented delivery is honestly ready for closure.

---

# Final Rule

This skill protects the integrity of the governed workflow.

Always prioritize:

- honest closure
- bounded judgment
- structural alignment with the applicable canon
- lifecycle consistency
- explicit follow-up work
- reliable state transition