---
name: prepare-handoff
description: Prepare a canonical handoff artifact from a bounded task by producing a short, clear, execution-friendly transfer aligned with the handoff template.
---

# SKILL: prepare-handoff

## Purpose

Prepare a canonical handoff artifact from a bounded task.

This skill exists to:

- verify that the selected task is ready enough for handoff
- verify that any materially required design-foundation dependency for the selected execution line is already sufficient
- transform that task into a short, clear, execution-friendly handoff
- preserve only the context needed for the next bounded execution step
- preserve the structural intent necessary for later implementation to remain aligned with the applicable canon
- produce output aligned with the canonical handoff template

This skill prepares controlled execution transfer.

It does not generate a full implementation plan, an execution report, or implementation work itself.

---

## Normative Relationship

This skill is bound by the implementation architecture policy and must prepare handoffs that remain compatible with the applicable implementation canon documents.

The following documents are materially relevant when the selected execution line depends on them:

- `project/memory/implementation-architecture-policy.md`
- `project/memory/frontend-implementation-architecture.md` when the selected execution line materially shapes frontend structure
- `project/memory/backend-implementation-architecture.md` when the selected execution line materially shapes backend structure
- `project/memory/design-system-integration.md` when the selected execution line materially shapes UI consistency, shared UI semantics, recurring product states, or product patterns

This skill must not turn handoff into implementation.

However, it must prepare handoff in a way that does not silently weaken the canon that later implementation will be required to uphold.

This means:

- handoff must not be functionally clear but structurally careless when architecture matters for the selected task
- handoff must not leave obvious layer ownership, reuse expectations, or anti-pattern avoidance completely implicit when those concerns are materially load-bearing
- handoff must not ignore design-system-sensitive requirements when UI consistency materially governs the selected execution line
- handoff must not compensate for weak tasking by inventing hidden execution structure

This skill must preserve bounded execution transfer with enough structural truth to keep the next step honest.

---

## When To Use

Use this skill when:

- a specific task has already been selected
- the task is bounded enough to support controlled handoff
- the task objective is clear enough that the next execution step can be framed without redefining scope
- any materially required design-foundation dependency for the selected execution line is already sufficient
- the next safe governed step is handoff preparation

---

## When Not To Use

Do not use this skill when:

- no specific task has been selected
- the task is still too broad, vague, or unstable
- the task still depends on unresolved scope definition
- the task still depends on missing validation-relevant clarity
- the current need belongs to task decomposition, implementation, or execution reporting
- the selected execution line still depends on unresolved design-foundation questions that materially affect safe execution transfer

If the task itself is not yet well bounded, return to:

`plan-tasks`

If the basis for the task is still unstable at PRD or validation level, return control to the earlier skill that must stabilize that layer first.

If handoff preparation is still blocked by unresolved project-level design-system dependencies for the active execution line, return to:

`define-design-foundation`

---

## Task Readiness for Handoff

Before preparing a handoff, this skill must verify that the selected task is ready enough for controlled transfer.

At minimum, the task must provide enough clarity about:

- the immediate objective
- the execution boundary
- the relevant prerequisites
- the required references
- the expected output
- the completion condition

If these elements are still materially unclear, missing, or unstable:

- stop
- do not generate a handoff
- return control to the earlier skill that must refine the task or its upstream basis

Handoff must not compensate for a weak or oversized task.

The selected task must also be operationally unambiguous.

This skill must not prepare a handoff on top of a state situation where multiple tasks are being treated as simultaneously active execution targets.

---

## Oversized Task Rejection Rule

This skill must refuse handoff preparation when the selected active task is still too broad to support one honest bounded execution transfer.

A task is not handoff-ready if it still behaves like:

- a subsystem container
- a milestone bundle
- a multi-slice platform block
- a bootstrap umbrella for several distinct execution lines
- an execution package that would obviously need another decomposition pass before implementation could start safely

If the smallest honest handoff would still need to cover multiple materially distinct behaviors, multiple pending-task concerns, or a broad platform baseline, this skill must not widen the handoff to compensate.

Instead it must:

- stop
- state that the task is not yet handoff-ready
- return control to `plan-tasks`

This skill must not convert a broad task into a handoff by quietly turning the handoff into the real decomposition layer.

---

## Design-Foundation Sufficiency Gate

Before preparing a handoff, this skill must explicitly evaluate whether the selected execution line still depends on a materially required `design-foundation`.

This gate becomes materially relevant when one or more of the following is true for the selected task:

- the implementation step depends on shared visual or interaction consistency across multiple surfaces or states
- reusable component-state logic materially affects the bounded execution
- accessibility should already be materialized structurally rather than improvised during implementation
- the execution step depends on tokens, theming, component mapping, or surface rules that should be stable before execution transfer
- the task is meaningfully frontend-facing, premium, trust-sensitive, or differentiated enough that implementation-facing design contracts materially affect safe handoff quality

A correct handoff-readiness decision must be able to state one of the following:

- a governed `design-foundation` exists and is materially sufficient for the selected execution line
- a governed equivalent already exists and remains valid for the selected execution line
- `design-foundation` is genuinely unnecessary for this bounded handoff
- design readiness is still materially unresolved, so handoff preparation remains blocked

If handoff preparation would still depend on unresolved design-foundation questions, this skill must stop.

It must not compensate by stuffing those missing decisions into the handoff itself.

---

## Experience vs Design Non-Substitution Rule

This skill must preserve the architectural distinction between:

- `experience-direction`
- `design-foundation`

A durable `Experience` artifact may improve direction.

It does not automatically satisfy the project-level design system layer that a bounded execution transfer may materially depend on.

Accordingly, this skill must not treat:

- completed `experience-direction`
- an active `Experience` artifact
- direction-level design-system guidance

as automatic proof that a task is handoff-ready.

If the selected execution line still depends on implementation-facing design contracts, this skill must return to `define-design-foundation` rather than treating direction alone as sufficient.

---

## Canon Applicability Check

Before preparing the handoff, this skill must determine which implementation canon will materially govern the selected execution line.

It must classify the selected handoff line as one or more of:

- frontend-structural
- backend-structural
- UI consistency / design-system-sensitive
- cross-cutting

### Frontend canon relevance

Frontend canon is materially relevant when the selected execution line will shape:

- route/page structure
- screen composition
- feature component boundaries
- shared UI reuse or creation
- hooks and state ownership
- utility placement
- frontend adapter placement
- frontend concentration risks

### Backend canon relevance

Backend canon is materially relevant when the selected execution line will shape:

- routes, handlers, or controllers
- use case ownership
- service vs use case distinction
- repository boundaries
- validation boundaries
- authentication / ownership behavior
- integration boundaries
- error contract behavior

### Design-system canon relevance

Design-system canon is materially relevant when the selected execution line will shape:

- recurring UI states
- shared product components
- canonical patterns
- token-sensitive surfaces
- UI consistency-critical blocks
- consistency-sensitive product behavior

### Rule

This skill must make an explicit canon applicability decision when those canons materially affect what the next bounded execution step must preserve.

This does not mean turning handoff into implementation.

It means the handoff must not be blind to the structural requirements that are already governing safe execution.

---

## Controlled Context Transfer

A handoff in this system is a controlled transfer of only the context needed for the next bounded execution step.

It must:

- include what downstream execution needs now
- remain short and targeted
- preserve scope clarity
- reduce guessing without turning into a long execution package
- preserve enough structural intent for later implementation to stay honest

It must not:

- restate the full PRD
- restate the full validation artifact
- restate the full task decomposition set
- restate the full design-foundation artifact
- dump large architecture summaries
- include context that belongs in upstream artifacts rather than the handoff itself
- become a disguised implementation plan

The handoff must function as a precise bridge, not as a context dump.

---

## Handoff Preparation Role

Once task readiness is established, this skill must transform the selected task into a bounded handoff artifact.

The handoff should clearly capture:

- the immediate objective
- the execution boundary
- the relevant prerequisites
- the required references
- the expected output
- the completion condition
- the canon that materially governs the execution line when relevant
- the structural boundary that later implementation must preserve when relevant

These elements must remain focused on the selected task.

The handoff must support the next execution step without drifting into:

- detailed implementation strategy
- architectural redesign
- new requirements
- re-decomposition of scope
- execution reporting

Preparing a handoff does not mean implementation has started.

Preparing a handoff only establishes the bounded execution transfer for a single selected task.

---

## Execution-Boundary Discipline

The handoff must describe **what may be executed now** and **what remains outside the boundary** for this selected task.

It must not blur the boundary between:

- the selected active task
- pending tasks
- future handoffs
- future implementation slices

If the next bounded execution step would require touching clearly pending-task scope, this skill must stop and surface that the task boundary is not yet safe for handoff.

This skill must not “solve” oversized scope by quietly widening the handoff.

---

## Structural Boundary Discipline

When canon relevance is material, the handoff must preserve the minimum structural truth needed for later implementation to remain aligned.

This may include explicitly framing:

- what layer should likely own the action
- what should remain thin
- what should be reused before creating new local structure
- what should not remain embedded locally
- what anti-pattern should be explicitly avoided during execution

Examples of acceptable handoff-level structural framing:

- "Keep the page layer thin; place feature coordination in a feature composition unit if the page would otherwise overload."
- "Default action ownership to a use case rather than route logic."
- "Reuse canonical shared state and feedback patterns rather than introducing local approximations."
- "Do not place generic formatting or parsing logic inside a feature-local hook."
- "Do not let repository code absorb business rule ownership."

Examples of forbidden implementation-plan detail:

- exact class/method decomposition
- exact endpoint definitions
- exact folder pathing for every file
- exact schema implementation detail
- exact package/library wiring
- detailed code choreography

### Rule

The handoff must preserve bounded structural intent without becoming the real implementation plan.

---

## Design Reference Discipline

When a governed `design-foundation` is materially relevant to the selected execution line, this skill should treat it as a required bounded reference rather than as optional background.

In that situation, the handoff may:

- reference the active design-foundation artifact canonically
- rely on already-governed tokens, component families, state logic, surface contracts, or implementation-contract guidance that materially constrain the selected task
- state clearly which aspects of the design basis are relevant to the bounded execution step

It must not:

- rewrite the design-foundation into the handoff
- duplicate the design-foundation contents at length
- turn the handoff into a design artifact
- silently omit a materially governing design-foundation from the execution transfer

The handoff should preserve reference integrity without becoming a second design document.

---

## Reuse Expectation Rule

When the selected execution line clearly touches reusable structures, the handoff should explicitly preserve reuse expectations.

This may include reuse expectations around:

- shared UI primitives
- shared product components
- recurring product patterns
- existing hooks or adapters
- shared utility functions
- use cases
- repositories
- providers / gateways

The handoff must not force creation of new units where compatible existing units should be reused.

It also must not demand reuse when that reuse would clearly distort the boundary.

### Rule

Reuse should be expected when it materially preserves consistency, structure, or boundedness.

This expectation must be preserved in the handoff when it is load-bearing for honest implementation.

---

## Technical Decision Containment

This skill must not silently introduce new technical decisions.

It must not decide, recommend, or imply as settled inside the handoff:

- frontend stack
- backend stack
- framework choice
- storage choice
- persistence choice
- package/library choice
- folder structure
- implementation architecture
- hosting/deployment structure

unless those decisions are already materially grounded by one or more of:

- governed project defaults
- stabilized upstream artifacts
- existing canonical continuity of the same execution line
- governed implementation canon already adopted for the same execution line

If a technical choice is still unresolved, this skill may only:

- note it conservatively as a prerequisite or dependency, or
- inherit the official project default when that default is already explicitly governed elsewhere

It must not invent stack inside the handoff.

---

## Technical-Baseline Blocking Rule

This skill must not prepare a handoff as though execution packaging were safe when the active execution line still depends on an unresolved technical baseline.

A technical baseline is materially unresolved when the next bounded execution step would still require one or more of the following to be chosen or stabilized:

- frontend approach
- backend/service approach
- persistence approach
- runtime/platform family
- framework family
- major architectural baseline for the active execution line

In that situation, this skill must not:

- package the handoff as though implementation direction were already safe
- quietly inherit a habitual stack by convenience
- treat a missing baseline as a minor note inside an otherwise execution-ready handoff
- imply that the handoff is ready for formal execution packaging

Instead, it must:

- stop
- state that the handoff is baseline-blocked
- identify the unresolved baseline dependency clearly
- point to `define-technical-baseline` as the next bounded governed move

This rule exists to prevent handoff preparation from becoming the place where the system silently decides the technical approach by habit.

---

## Official Default Inheritance

When the repository already has an official governed default for a domain such as frontend or data stack, this skill may inherit that default without re-debating it.

However:

- inherited defaults must not be presented as if this handoff newly decided them
- inherited defaults must remain concise
- inherited defaults must not expand the handoff into a design document

If no official default is clearly governed upstream, this skill must not improvise one.

In that case, unresolved technical dependency must remain explicitly unresolved.

---

## Agent Consideration Rule

This skill remains skill-driven and does not depend on agents.

However, for a bounded task whose execution quality could materially benefit from specialist support, this skill should consciously evaluate whether a specialist would help the next execution step.

Typical examples include:

- `frontend` for UI-heavy bounded execution
- design-related specialist support when shared states, shared product patterns, consistency-sensitive UI, or product interaction quality materially affect the selected task
- `backend` or `database` for bounded server/data concerns when those are already inside the selected task boundary
- `architect` when structural tradeoffs or boundary shape are materially load-bearing

This skill should either:

- explicitly note that specialist support is worth attaching for the next bounded execution step, or
- explicitly decide that direct execution can proceed without it

It must not invoke agents decoratively.

It also must not ignore obviously relevant specialist support without any evaluation.

---

## Specialist Expectation Rule

When specialist support is materially beneficial for the selected execution line, the handoff should preserve that expectation explicitly.

Examples:

- `frontend specialist recommended`
- `backend specialist recommended`
- `design-system-sensitive execution; design-related specialist recommended`
- `architect support recommended due to cross-layer boundary risk`

This does not force agent usage automatically.

It preserves an execution expectation that later implementation must consciously uphold or consciously decline.

---

## Template Adherence

This skill must produce output aligned with the canonical handoff template located at:

`project/handoff/templates/HANDOFF_TEMPLATE.md`

The template defines the canonical artifact structure.

This skill must use that template as the structural anchor rather than recreating a parallel handoff format inside the skill.

The result should be:

- clear
- bounded
- concise
- execution-friendly
- suitable for low-context operation

---

## Handoff Content Guidance

When the handoff artifact is materialized, it should stay concise, but it should still carry enough information to preserve downstream structural honesty.

Handoff content should usually make clear:

- what bounded outcome must be delivered now
- what stays outside the boundary when exclusion is important
- what upstream references materially govern the step
- what canon applies when canon relevance is load-bearing
- what structural boundary matters for later execution
- what should remain thin
- what should be reused
- what should not be embedded locally
- what anti-pattern should be explicitly avoided when that concern materially governs the selected execution line
- whether specialist support is expected or not

This does not require a full implementation plan.

It requires the minimum execution-facing structure needed to keep later implementation honest.

---

## Artifact Cleanliness Rule

The handoff artifact must be structurally clean and semantically coherent.

This skill must not leave behind:

- placeholder leftovers
- duplicated filler
- stray `none` lines
- contradictory scope statements
- malformed bullets
- accidental partial planning fragments
- noisy technical suggestions that were not grounded upstream

Every populated section must read as intentional final handoff content.

Every omitted section must remain omitted according to the template convention, not filled with noise.

---

## Canonical Artifact Placement

This skill must create the handoff artifact in the canonical active handoff location:

`project/handoff/active/`

It must not:

- create the handoff in `project/tasks/`
- create the handoff in the root of `project/handoff/`
- place the handoff under the task artifact domain
- treat a non-canonical handoff path as valid closure

If the artifact cannot be materialized in the canonical active handoff location, this skill must stop and report that handoff preparation remains operationally incomplete.

---

## Task Mutation Restrictions

Preparing a handoff does not start implementation.

Because of that, this skill must not mutate the selected task as if execution had already begun.

This skill must not:

- change task status to `in_progress`
- rewrite the task into an execution artifact
- add implementation-progress language to the task
- add execution notes that imply work has already started
- replace bounded task content with handoff content

At most, this skill may add a minimal canonical reference to the created handoff artifact if that reference is part of the repository convention.

That reference must remain short and must not change the task into an execution record.

---

## Materialization Order

This skill must preserve strict closure order.

A valid handoff closure must happen in this sequence:

1. confirm task readiness and design-readiness sufficiency for the selected execution line
2. confirm canon applicability when materially relevant
3. create the handoff artifact in the canonical active handoff location
4. confirm the handoff artifact is materially present and represents the selected task coherently
5. update `PROJECT_STATE.md` only if the new operational moment can be represented coherently
6. emit the completion message only after the artifact and resulting state describe the same operational moment

This skill must not narrate handoff completion before the material handoff artifact exists.

This skill must not claim implementation readiness on the basis of intended or attempted artifact creation.

---

## State Closure Discipline

If this skill successfully creates a canonical handoff artifact, it may participate in closing the handoff preparation step by updating `PROJECT_STATE.md`.

This is allowed only when the resulting operational moment is clear and can be reflected coherently.

A valid state closure for this step must not:

- unlock execution while the rest of the state still materially describes an earlier stage
- point `Next Expected Skill` toward implementation while `Primary Objective`, `Next Allowed Action`, or `STATE NOTES` still point to validation or task decomposition
- keep multiple tasks represented as simultaneously active execution work when the handoff is prepared for one selected task
- treat handoff preparation as if implementation had already begun
- point `Active Handoff` to a non-canonical path or to the task artifact domain

When `PROJECT_STATE.md` is updated after handoff creation, the resulting state must coherently align at minimum:

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

For this step, a coherent post-handoff state should describe:

- handoff as prepared
- one active task as the current execution target
- active design foundation truthfully preserved when one materially governs the selected execution line
- the applicable execution canon truthfully preserved through the selected handoff framing
- remaining tasks as pending when applicable
- implementation as the next governed stage
- no claim that implementation has already started

Execution may be unlocked only when the resulting state is semantically coherent as a whole and the active handoff artifact exists in:

`project/handoff/active/`

`Implementation` being the next governed stage is not, by itself, the same as formal implementation readiness.

This skill must distinguish clearly between:

- implementation as the next pipeline stage
- implementation as formally unlocked execution

If `Execution Unlocked` remains `no`, the resulting state and the completion message must describe implementation only as a later governed step, not as work that may now begin.

This skill must not emit completion language such as:

- implementation may begin
- execution may now start
- the task is ready for implementation now

unless the resulting `PROJECT_STATE.md` coherently and explicitly reflects formal implementation readiness.

A favorable subset of fields is not enough.

If this skill cannot close the state coherently, it must stop and report that lifecycle closure remains incomplete.

It must not treat a partial or contradictory state patch as a valid completed transition.

---

## Locked-Execution Wording Rule

When the handoff artifact is successfully created but `Execution Unlocked` remains `no`, the resulting live state must remain explicitly centered on **handoff prepared, implementation pending formal readiness**.

In that situation:

- `Primary Objective` must describe the current live objective conservatively at the handoff-prepared moment
- `Success Condition` must describe what still needs to become true before implementation can start safely
- `Next Allowed Action` must not read like execution is already authorized now
- `State Notes` must not imply that implementation has started or may begin immediately

Examples of wording that this skill must avoid when `Execution Unlocked = no` include:

- "execute the active handoff now"
- "start implementation"
- "run the implementation step now"
- "implementation is ready to begin now"
- "execute TASK-001 through the prepared handoff"

When execution remains locked, implementation may be referenced only as:

- the next governed stage
- a later governed step pending formal readiness
- a future step that still depends on coherent implementation authorization

This skill must prefer conservative live-state wording over eager transition wording.

---

## Completion Message Discipline for Locked Execution

If the resulting state reflects handoff prepared but execution still locked, the completion message must remain equally conservative.

It may say that:

- the handoff artifact was created
- the handoff preparation step is complete
- implementation remains the next governed stage
- formal execution readiness is still pending

It must not compress "next stage" into "authorized now."

The completion message must mirror the actual state exactly.

If the state does not formally authorize implementation, the message must not imply that the user may now execute the handoff.

---

## Governed Pause After Handoff Closure

After the handoff artifact is created and any coherent handoff-stage state update is complete, this skill must stop and return control.

This pause is mandatory.

This skill must not:

- invoke `authorize-implementation` inline
- narrate unlock evaluation as already underway
- imply that implementation may begin immediately because handoff now exists
- continue automatically into `execution-unlock`
- treat handoff closure as implicit permission to advance

The correct result of this skill is:

- handoff prepared
- one coherent post-handoff state
- explicit return of control

Nothing later.

---

## Boundaries

This skill must not:

- behave like workflow governance
- behave like live project state
- generate an implementation report
- generate a full implementation plan
- redesign architecture in detail
- decompose scope into tasks
- generate code or pseudo-code
- instantiate a design foundation
- depend on concrete agent or role taxonomies
- continue into implementation inline after handoff preparation
- claim that handoff-stage closure is complete if the resulting `PROJECT_STATE.md` still reflects an earlier stage or a contradictory lifecycle situation

Its role is limited to producing a canonical handoff artifact from a bounded task and already-sufficient upstream basis.

---

## Output Contract

This skill produces one bounded handoff artifact.

The output must be:

- aligned with the canonical handoff template
- based on the selected task and its upstream references
- short enough to remain usable for low-context execution
- clear enough to reduce guessing in the next bounded execution step
- controlled enough to avoid becoming a hidden implementation plan or context dump
- structurally honest enough to support later implementation against the applicable canon

After the handoff artifact is produced, this skill must stop.

If lifecycle closure is valid and coherent, that closure may include a complete `PROJECT_STATE.md` update for the handoff step.

It must not continue automatically into `implementation` or any later stage.

A narrated next step is not sufficient by itself.

The material handoff artifact, the resulting `PROJECT_STATE.md`, and the completion message must all describe the same operational moment.

The completion message must mirror the final state exactly.

If the resulting state reflects handoff prepared but execution still locked, the completion message must say only that handoff preparation is complete and that implementation remains a later governed step pending formal readiness.

It must not compress "next stage" into "authorized now".

Preparing a handoff may establish readiness for a later implementation step.

It does not authorize same-turn implementation execution.

---

## Bootstrap Blocking Rule

This skill must not prepare a feature handoff as though execution were ready when the selected execution line still lacks a compatible implementation baseline codebase.

If technical direction is governed but no compatible codebase yet exists, this skill must:

- stop
- state that the execution line is bootstrap-blocked
- point to `bootstrap-implementation-baseline` as the next bounded governed move

It must not package a feature handoff on top of an application baseline that does not yet materially exist.

---

## Failure Handling

If the selected task is not ready enough for handoff:

- stop handoff preparation
- identify the missing or unstable basis clearly
- return control to the earlier skill that must refine the task or upstream artifact

If preparing the handoff would require hidden redesign, broad contextual recovery, or premature implementation planning:

- stop
- surface that risk clearly
- return to the earlier stage that must restore boundedness and clarity

If the selected task is otherwise handoff-ready but execution packaging still depends on an unresolved technical baseline:

- stop handoff preparation
- state that the task is baseline-blocked rather than handoff-ready
- identify the missing baseline question clearly
- return control to `define-technical-baseline`
- do not create a handoff artifact that implies technical direction is already settled

If the selected task is otherwise handoff-ready but execution packaging still depends on an unresolved design-foundation dependency:

- stop handoff preparation
- state that the task is design-blocked rather than handoff-ready
- identify the missing design dependency clearly
- return control to `define-design-foundation`
- do not create a handoff artifact that implies design readiness is already settled

If the selected task is otherwise handoff-ready but the handoff would still be structurally careless against the applicable canon:

- stop handoff preparation
- identify what structural boundary is still too weak
- return control to `plan-tasks` or the appropriate earlier step
- do not create a handoff artifact that would force later implementation to improvise critical structure

If handoff artifact creation succeeds but coherent lifecycle closure fails:

- stop
- surface the state inconsistency clearly
- treat the governed transition as operationally incomplete
- do not authorize implementation on top of the partial closure

In that situation, the completion language must remain conservative.

It may acknowledge that the handoff artifact was created, but it must explicitly state that lifecycle closure is still incomplete and that implementation is not yet authorized.

This skill must never compensate for weak task definition by inventing execution structure.

---

## Final Rule

A correct `prepare-handoff` must answer:

- is the selected task ready for handoff?
- is any materially required design-foundation dependency already sufficient?
- what canon materially governs the selected execution line?
- what is the next bounded execution step?
- what structural boundary must later implementation preserve?
- how should that step be framed as a short, clear, canonical handoff?

It must not answer:

- how to implement the solution
- how to govern the whole workflow
- how to decompose the project into tasks
- what has already been executed
- how to instantiate the design foundation itself

Its job is to prepare a canonical handoff artifact from a bounded task and already-sufficient upstream basis, preserve enough structural truth for later governed execution, close the handoff step coherently when possible, and then stop.