---
name: plan-tasks
description: Break stabilized and validated scope into a small bounded set of canonical task artifacts aligned with the task template, without generating handoff or implementation planning.
---

# SKILL: plan-tasks

## Purpose

Break stabilized and validated scope into a small bounded set of canonical task artifacts.

This skill exists to:

- verify that the active PRD and active validation are ready enough to support task decomposition
- verify that no materially unresolved design dependency still makes honest task boundaries impossible for the active execution line
- transform validated scope into clear bounded task units
- keep task artifacts small, understandable, and downstream-friendly
- preserve task boundaries that will support structurally honest implementation later
- produce output aligned with the canonical task template

This skill defines task units.

It does not generate handoff, instantiate design, implementation planning, or later-stage execution detail.

---

## Normative Relationship

This skill is bound by the implementation architecture policy and must preserve downstream compatibility with the applicable implementation canon documents.

The following documents are materially relevant when task decomposition shapes future implementation boundaries:

- `project/memory/implementation-architecture-policy.md`
- `project/memory/frontend-implementation-architecture.md` when task boundaries will shape frontend structure
- `project/memory/backend-implementation-architecture.md` when task boundaries will shape backend structure
- `project/memory/design-system-integration.md` when task boundaries will shape UI consistency, shared UI semantics, recurring product states, or product patterns

This skill must not turn tasks into handoffs or implementation plans.

However, it must shape tasks in a way that does not silently undermine the applicable canon.

This means:

- tasking must not be functionally clear but structurally vague when structure is materially important
- tasking must not rely on future implementation to “figure out” obvious layer boundaries that are already important enough to preserve now
- tasking must not ignore product consistency when the change is clearly UI-sensitive
- tasking must not harden implementation drift into the task layer

This skill must preserve task-level structural intent without collapsing into implementation detail.

---

## When To Use

Use this skill when:

- an active PRD exists
- an active validation artifact exists
- both are stable enough to support bounded task decomposition
- any materially required design layer for the current execution line is already sufficient or genuinely non-blocking
- the next safe governed step is to create task artifacts from that validated scope

---

## When Not To Use

Do not use this skill when:

- context is still unstable
- the PRD is missing or materially incomplete
- validation has not been derived yet or is too weak to support decomposition
- scope is still ambiguous enough that task boundaries would be guessed
- the current execution line still depends materially on unresolved design-foundation questions
- the current need already belongs to `handoff`, `implementation`, or `review`

If context is still weak, return to:

`discover-missing-context`

If the PRD is missing or unstable, return to:

`define-prd`

If validation is missing or unstable, return to:

`define-success-scenarios`

If task decomposition still depends on unresolved design-foundation work, return to:

`define-design-foundation`

---

## Readiness for Task Decomposition

Before decomposing scope into tasks, this skill must verify that the basis is materially stable.

At minimum, task decomposition requires:

- a stabilized PRD
- a derived validation artifact
- scope that is clear enough to separate into bounded work units
- validation that is clear enough to indicate what the work must support without guessing

If these conditions are not met:

- stop
- do not generate tasks
- return control to the earlier skill that must stabilize the missing layer

Task decomposition must not compensate for unstable scope or weak validation.

---

## Design-Foundation Sufficiency Gate

PRD and validation alone are not always enough to justify honest task decomposition.

Before generating tasks, this skill must explicitly evaluate whether the current execution line still depends on a materially required design-foundation layer.

This gate becomes materially relevant when one or more of the following is true:

- task boundaries would depend on shared user-facing surface rules that are not yet durably defined
- task boundaries would implicitly assume reusable component-state logic that has not been materially stabilized
- accessibility expectations would need structural UI/system decisions that still remain unresolved
- decomposition would otherwise rely on implicit assumptions about tokens, theming, component mapping, or surface contracts
- premium, trust-sensitive, or differentiated interface quality materially affects how scope should be sliced into bounded execution work

A correct design-sufficiency evaluation must be able to state one of the following:

- an active `Design Foundation` artifact exists and is materially sufficient for the current execution line
- a governed equivalent already exists and remains valid for the current execution line
- design-foundation is genuinely unnecessary for this bounded tasking pass
- design readiness is still materially unresolved, so task decomposition must remain blocked

If honest task boundaries still depend on unresolved design-foundation questions, this skill must stop.

It must not decompose scope by silently filling that gap.

---

## Recheck Against Upstream Ambiguity

Even if upstream artifacts exist, this skill must still recheck whether decomposition would require hidden interpretation.

This skill must not proceed when task boundaries would depend on:

- guessed workflow meaning
- guessed scope exclusions
- guessed feature coupling
- inferred technical structure that was never established upstream
- invented quantitative or operational precision
- unresolved design-system or surface-structure assumptions that should already be governed upstream

If task decomposition would still require silent assumption or hidden design completion:

- stop
- do not generate tasks
- return control to the earlier skill that must stabilize the ambiguity

Tasking must not harden upstream ambiguity into false execution structure.

---

## Experience vs Design Non-Substitution Rule

This skill must preserve the architectural distinction between:

- `experience-direction`
- `design-foundation`

A durable `Experience` artifact may improve direction.

It does not automatically satisfy the project-level design layer that task decomposition may materially depend on.

Accordingly, this skill must not treat:

- completed `experience-direction`
- an active `Experience` artifact
- direction-level design-system guidance

as automatic proof that task boundaries are now safe.

If decomposition still depends on a concrete implementation-facing design layer, this skill must return control to `define-design-foundation` rather than continuing by optimistic interpretation.

---

## Canon Applicability Check

Before generating tasks, this skill must determine which implementation canon will materially shape future execution boundaries.

It must classify the active decomposition line as one or more of:

- frontend-structural
- backend-structural
- UI consistency / design-system-sensitive
- cross-cutting

### Frontend canon relevance

Frontend canon is materially relevant when task boundaries will later shape:

- route/page structure
- screen composition
- feature component boundaries
- shared UI reuse or creation
- hooks and state ownership
- utility placement
- frontend adapter placement
- frontend file concentration risks

### Backend canon relevance

Backend canon is materially relevant when task boundaries will later shape:

- routes, handlers, or controllers
- use case ownership
- service vs use case distinction
- repository boundaries
- validation boundaries
- authentication / ownership behavior
- integration boundaries
- error contract behavior

### Design-system canon relevance

Design-system canon is materially relevant when task boundaries will later shape:

- recurring UI states
- shared product components
- canonical patterns
- token-sensitive surfaces
- UI consistency-critical blocks
- consistency-sensitive product behavior

### Rule

This skill must make an explicit canon applicability decision when those canons materially affect how work should be sliced.

This does not mean turning tasks into implementation plans.

It means the task set must not be blind to the structural reality the canon is already governing.

---

## Bounded Task Unit Definition

A good task in this system is one bounded unit of work.

Each task should have:

- a clear objective
- a clear boundary
- a clear done condition
- enough focus to remain understandable without internal re-planning
- enough separation to avoid absorbing the whole feature or workflow
- enough structural intent to support honest later handoff and implementation

A task must not be:

- a full feature dump
- a milestone-level label
- a subsystem-sized container
- a vague placeholder for future thinking
- a bundle of unrelated concerns unless the coupling is unavoidable
- functionally clear but structurally careless when architecture matters for the execution line

Tasks should be small enough to support controlled downstream execution later, but they must not become mini implementation plans.

---

## Task Breadth Rejection Rule

This skill must reject candidate tasks that are still too broad to support honest downstream handoff and execution.

A candidate task is too broad when it effectively represents:

- a full application baseline
- an end-to-end product slice containing multiple distinct execution boundaries
- a subsystem or platform container rather than one bounded unit
- one task that would obviously need to be re-decomposed before execution could start safely

Warning signs include task phrasing such as:

- "core platform"
- "base app"
- "all remaining behavior"
- "authentication + wizard + templates + publishing"
- "UI + backend + persistence + final flow"

If a candidate task resembles a subsystem, milestone, or bootstrap container rather than one bounded execution target:

- stop
- narrow the decomposition
- do not materialize that oversized task artifact as if it were execution-ready

This skill must prefer one honest bounded task over one impressive but unsafe macro-task.

---

## Decomposition Discipline

This system is optimized for bounded, low-context operation.

Therefore this skill should produce a small, high-value task set.

Preferred range:

- 4 to 8 tasks

Maximum in one response:

- 8

Decomposition should:

- preserve traceability to the active PRD and validation artifact
- preserve traceability to the active design-foundation basis when that basis materially shapes task boundaries
- preserve compatibility with the applicable implementation canon when canon relevance is material
- create the smallest sufficient set of meaningful task units
- avoid inventing new requirements or new scope
- avoid embedding execution detail that belongs to a later handoff
- avoid overloading tasks with surrounding context that should stay in upstream artifacts

Each generated task should make later work clearer without collapsing `tasks` into `handoff` or `implementation`.

Task generation may produce multiple task artifacts in one bounded decomposition step.

However, this does not make the system parallel-first.

The existence of multiple task artifacts must not be described as simultaneous active execution.

Task creation remains one governed decomposition step inside a serial operational model.

If safe decomposition would require more than 8 tasks, this skill should prefer one of the following instead of producing an oversized task list:

- narrow the active decomposition scope
- keep only the first bounded execution block in the current task set
- return control with the remaining scope left for a later governed decomposition pass

---

## Task Shaping Rule

Each task should usually represent one of the following:

- one bounded user-visible behavior slice
- one bounded enabling slice directly required by that behavior
- one tightly coupled pair of concerns only when separating them would create artificial fragmentation

A task should not become architecture-shaped merely because the eventual implementation will require technical structure.

If decomposition would only make sense by first assuming framework, database, API, hosting, or bootstrap choices that are not yet governed, this skill must keep those dependencies open rather than turning them into task content.

A task should not combine multiple broad behaviors just because they are adjacent in the eventual product flow.

If a candidate task would require phrases like:

- "base app + navigation + cart + checkout"
- "UI + backend + persistence + final flow"
- "all remaining behavior"

then it is likely too broad and must be narrowed before creation.

---

## Structural Intent Rule

Tasks must remain implementation-neutral at the detailed level, but they must still preserve the structural truth required for honest downstream execution.

When canon relevance is material, each task should make explicit enough structural intent to answer questions such as:

- what layer should be the likely owner of the action?
- what should remain thin?
- what should probably be reused rather than recreated?
- what should not remain embedded locally?
- what structural anti-pattern should be explicitly avoided?

Examples of acceptable structural intent:

- "Keep page-level responsibility thin; place feature coordination in feature-level composition."
- "Default action ownership to a use case rather than route logic."
- "Reuse canonical shared state patterns rather than introducing local approximations."
- "Avoid placing shared formatting or parsing logic inside feature-local hooks."

Examples of forbidden implementation-shaped detail:

- exact endpoint design
- exact folder pathing
- exact framework component tree
- exact database schema shape
- exact package decisions
- exact class/method implementation detail

### Rule

Task artifacts should preserve structural intent without becoming handoff or implementation plans.

---

## Technical Decision Containment

This skill must not silently convert task decomposition into technical decision-making.

It must not introduce as if already decided:

- stack choices
- framework choices
- storage choices
- persistence choices
- package choices
- folder structure choices
- implementation architecture choices
- API shape choices
- auth model choices
- runtime or hosting choices
- bootstrap structure choices

unless those decisions are already materially grounded upstream by:

- stabilized user-provided context
- a governed technical-baseline decision for the same execution line
- durable project decisions already established for the same execution line

Repository-level technical defaults are not, by themselves, sufficient reason to shape task artifacts as though those technical decisions were already settled.

This skill must not treat repository defaults alone as enough to:

- name React / Next.js / Vue / Svelte in a task
- name shadcn/ui or other UI libraries in a task
- name PostgreSQL or another persistence choice in a task
- define API endpoints, schema shape, or auth approach in a task
- define hosting/runtime expectations in a task
- describe bootstrap or codebase structure as if it were already authorized

If a task depends on a technical decision that is still unresolved, that dependency may be noted conservatively as an open dependency only.

It must not be silently resolved inside the task artifact.

Task scope is not the place to improvise stack, architecture, bootstrap, or execution-shaping implementation detail.

---

## Repository Default Non-Sufficiency Rule

Repository-level defaults may inform later technical-baseline evaluation.

They must not, by themselves, be treated as enough to make task decomposition implementation-shaped.

Task artifacts must stay behavior-bounded and execution-relevant without turning repository preferences into execution-line facts.

If the active execution line still lacks a governed technical-baseline decision, this skill must prefer:

- product-facing task boundaries
- behavior slices
- dependency notes kept explicitly open

rather than:

- architecture-shaped tasking
- stack-shaped tasking
- backend/frontend split chosen by assumption
- bootstrap or infrastructure assumptions framed as settled task scope

---

## Traceability Discipline

Each task must remain traceable to the upstream basis.

A task should be explainable in terms of:

- which part of the active PRD it supports
- which validation scenario or validation axis it materially contributes to
- which design-foundation rule or surface contract materially shapes it, when such a basis exists for the current execution line
- which implementation canon materially shapes its future execution boundary, when canon relevance is load-bearing

This skill must avoid loose or decorative traceability.

It must not attach a task to upstream artifacts that do not materially justify that task.

It must also not produce tasks whose relationship to validation is so weak that later execution would require reinterpretation.

If traceability is weak, decomposition is not ready.

---

## Active vs Pending Task Discipline

When multiple tasks are created, this skill must preserve the serial operational model.

It must determine:

- one current `Active Task`
- the remaining generated tasks as `Pending Tasks`

The chosen `Active Task` should usually be the one that:

- best unlocks later downstream work
- is currently most foundational without being artificially over-broad
- is coherent as the first bounded execution focus
- does not force unsafe structural assumptions too early

This choice must not be arbitrary.

This skill must not describe all created tasks as equally active.

It must not imply concurrent execution.

Pending Tasks are queued possibilities, not implicitly pre-activated execution lines.

---

## Template Adherence

This skill must produce output aligned with the canonical task template located at:

`project/tasks/templates/TASK_TEMPLATE.md`

The template defines the canonical artifact structure.

This skill must use that template as the structural anchor rather than recreating a parallel task format inside the skill.

The result should be:

- clear
- bounded
- template-compatible
- easy to review
- suitable for low-context operation

---

## Task Content Guidance

When task artifacts are materialized, they should stay concise, but they should still carry enough information to preserve downstream structural honesty.

Task content should usually make clear:

- what bounded outcome is expected
- what the task does not include when exclusion is important
- what upstream basis it traces to
- what structural boundary matters for later execution when that boundary is materially load-bearing
- what anti-pattern should not be normalized in later handoff or implementation, when relevant

This does not require adding a full implementation plan to the task.

It requires preserving the minimum structural truth needed to keep later work honest.

---

## Artifact Cleanliness Rule

Each task artifact must be structurally clean and semantically coherent.

This skill must not leave behind:

- placeholder leftovers
- duplicated filler
- stray `none` lines
- malformed bullets
- mixed structural fragments
- accidental contradictory sections
- noisy references that do not correspond to real artifact state

Each populated field must read as intentional final task content.

Omitted content must remain omitted according to template convention, not filled with filler noise.

---

## Canonical Artifact Placement

This skill must create or update task artifacts in the canonical active task location:

`project/tasks/active/`

It must not:

- create or update active task artifacts in the root of `project/tasks/`
- place active task artifacts in `done/` or `archived/`
- treat a non-canonical task path as valid step closure

If one or more task artifacts cannot be materialized in the canonical active task location, this skill must stop and report that task-stage closure remains operationally incomplete.

---

## Upstream Artifact Mutation Restrictions

This skill may update upstream references only when that update is minimal, canonical, and does not reinterpret the upstream artifact.

This skill must not:

- rewrite the active PRD beyond minimal task reference maintenance
- rewrite the active validation artifact into a downstream planning artifact
- rewrite the active design-foundation artifact into a downstream planning artifact
- mutate upstream artifacts as if handoff or implementation had already started
- add execution language to the PRD or validation artifact

At most, this skill may add or refresh minimal canonical task references when that reference maintenance is part of the repository convention.

Those updates must remain short and must not alter the role of the upstream artifacts.

---

## Materialization Order

This skill must preserve strict closure order.

A valid task-stage closure must happen in this sequence:

1. confirm PRD, validation, and design sufficiency for honest decomposition
2. confirm canon applicability when materially relevant
3. create the task artifacts in the canonical active task location
4. confirm the task artifacts are materially present and coherently reflect the active PRD and validation basis
5. update upstream references only when that update is minimal and canonically appropriate
6. update `PROJECT_STATE.md` only if the new operational moment can be represented coherently
7. emit the completion message only after the artifacts and resulting state describe the same operational moment

This skill must not narrate task-stage completion before the material task artifacts exist.

This skill must not claim that task-stage closure is complete on the basis of intended or attempted artifact creation.

---

## State Closure Discipline

If this skill successfully creates canonical task artifacts, it may participate in closing the task decomposition step by updating `PROJECT_STATE.md`.

This is allowed only when the resulting operational moment is clear and can be reflected coherently.

A valid state closure for this step must not:

- populate `Active Task` with multiple simultaneously active tasks
- describe bounded task artifact creation as parallel operational execution
- update only a narrow subset of task-related fields while leaving the rest of the state materially anchored to a prior stage
- point `Active Task` to a non-canonical path

When multiple tasks are generated, the state model should preserve one current active task and distinguish the remaining non-active tasks separately.

The preferred operational model is:

- `Active Task` = the current task in execution focus
- `Pending Tasks` = the remaining generated tasks that are not yet active

If `PROJECT_STATE.md` is updated after task generation, the resulting state must coherently align at minimum:

- overall status
- current phase
- current focus
- last updated
- active research
- active PRD
- active validation
- active experience
- active strategy
- active design foundation
- active task
- pending tasks
- active handoff
- execution flags
- current blockers
- next expected skill
- primary objective
- success condition
- next allowed action
- state notes

For this step, a coherent post-task state should describe:

- PRD and validation as active and stable enough for downstream work
- active design foundation truthfully preserved when one exists
- one active task as the current execution focus
- remaining generated tasks as pending when applicable
- handoff preparation as the next allowed governed step when applicable
- no claim that handoff or implementation has already started

If this skill cannot close the state coherently, it must stop and report that lifecycle closure remains incomplete.

It must not treat a partial state patch as a valid completed transition.

---

## Conservative Next-Step Wording Rule

When this skill closes successfully, it may identify handoff preparation as the next governed step.

However, the resulting state and completion message must remain strictly centered on:

- task decomposition completed
- one active task selected
- remaining tasks pending
- handoff not yet prepared
- execution not yet under preparation beyond that live moment

This skill must not use wording that compresses:

- "next allowed step" into "proceed now"
- "handoff is next" into "handoff is already in motion"
- "active task selected" into "execution line already advancing"

The state may point to `prepare-handoff` as the next expected skill.

That does not authorize same-turn continuation.

---

## Governed Pause After Task Closure

After task artifacts are created and any coherent state closure is complete, this skill must stop and return control.

This pause is mandatory.

This skill must not:

- create a handoff inline
- narrate handoff preparation as already underway
- activate implementation-readiness language
- continue automatically into `prepare-handoff`
- treat task-stage closure as implicit permission to advance

The correct result of this skill is:

- task decomposition completed
- one coherent post-task state
- explicit return of control

Nothing later.

---

## Boundaries

This skill must not:

- behave like workflow governance
- behave like live project state
- generate a Handoff
- create an implementation plan
- define architecture in detail
- redesign product scope
- generate code or pseudo-code
- instantiate a design foundation
- introduce role taxonomies or agent-specific routing
- continue into later stages inline after task generation
- claim that task-stage closure is complete if the resulting `PROJECT_STATE.md` still reflects an earlier stage or a contradictory lifecycle situation

Its role is limited to producing canonical task artifacts from stabilized and validated scope.

---

## Output Contract

This skill produces a small bounded set of task artifacts.

The output must be:

- aligned with the canonical task template
- based on the active PRD and active validation artifact
- clear enough to support later handoff safely
- bounded enough to avoid becoming a hidden implementation plan
- concise enough to remain reliable for low-context execution
- structurally honest enough to support later implementation against the applicable canon

After the task set is produced, this skill must stop.

If lifecycle closure is valid and coherent, that closure may include a complete `PROJECT_STATE.md` update for the task decomposition step.

It must not continue automatically into `handoff`, `implementation`, or `review`.

A narrated next step is not sufficient by itself.

The material task artifacts, the resulting `PROJECT_STATE.md`, and the completion message must all describe the same operational moment.

The completion message must mirror that moment conservatively.

If the resulting state says handoff is merely the next allowed governed step, the message must not imply that handoff preparation is already happening now.

---

## Failure Handling

If the PRD or validation artifact is not stable enough to support safe decomposition:

- stop task generation
- identify the missing or unstable basis clearly
- return control to the earlier skill that must stabilize the problem

If materially required design sufficiency is still unresolved for the active execution line:

- stop task generation
- identify the missing design dependency clearly
- return control to `define-design-foundation`
- do not decompose scope on top of unresolved design assumptions

If decomposition reveals that task boundaries would only be possible through guessing, hidden design work, or premature execution planning:

- stop
- surface the ambiguity clearly
- return to the earlier stage that must clarify scope or validation

If decomposition reveals that the active scope would later force canon-breaking implementation boundaries unless task shaping is improved:

- stop
- narrow the decomposition or reshape the task set
- do not materialize structurally careless tasks as execution-ready

If task artifact creation succeeds but coherent lifecycle closure fails:

- stop
- surface the state inconsistency clearly
- treat the governed transition as operationally incomplete
- do not authorize the next stage on top of the partial closure

This skill must never compensate for weak upstream artifacts by inventing hidden structure.

---

## Final Rule

A correct `plan-tasks` must answer:

- is the scope ready for bounded task decomposition?
- is any materially required design layer already sufficient for honest task boundaries?
- what are the smallest meaningful task units?
- what structural intent must be preserved so later implementation can remain honest?
- how should they be recorded as canonical tasks?

It must not answer:

- how to make handoff
- how to implement the solution
- how to govern the entire workflow
- how to rediscover context from zero
- how to instantiate the design foundation itself

Its job is to decompose validated scope into a small bounded set of canonical task artifacts, preserve enough structural intent for later governed execution, close the task decomposition step coherently when possible, and then stop.