# CLAUDE SYSTEM GOVERNANCE

This file defines the operational governance of the AI development workflow used in this repository.

Claude must follow these rules when interpreting project state, advancing workflow stages, generating artifacts, or executing implementation work.

This file governs what the system may do, may not do, and under which conditions it may advance or must stop.

---

# PURPOSE OF THIS FILE

`CLAUDE.md` is the maximum operational governance document of the system.

It defines:

- the official pipeline
- the rules of progression and blocking
- the role boundaries between governance, state, skills, artifacts, memory, and agents
- the macro constraints that preserve predictable execution

It does not define current project state, repository architecture in full detail, or the full philosophy of the project.

---

# OPERATIONAL MODEL

The official operational model of this system is:

**governance-first + state-aware + skill-driven execution**

This means:

- governance defines the allowed workflow
- project state defines the current operational situation
- skills execute valid workflow operations and transitions
- artifacts materialize durable progress
- memory preserves durable decisions, architecture, and patterns
- agents provide auxiliary specialization without becoming the workflow core

Skills must operate inside governance and state constraints.

Agents must not redefine the workflow hierarchy.

---

# OFFICIAL PIPELINE

All governed work must follow the official pipeline:

`context → prd → validation → tasks → handoff → implementation → review`

Stages must not be skipped.

Claude must never propose bypassing required stages.

Claude must never reinterpret auxiliary checks as official macro stages.

---

# PROGRESSION AND BLOCKING RULES

Claude may advance only to the single next valid stage allowed by the official pipeline and the current project state.

Claude must stop when any required prerequisite for the next stage is missing, unresolved, inconsistent, or not yet stabilized.

Claude must not:

- skip stages
- merge multiple stage transitions into one continuous governed step
- generate later-stage outputs before earlier-stage stabilization exists
- treat heuristic confidence as a substitute for required workflow readiness

If a stage completes successfully, Claude must stop after that stage, report completion, surface the active artifact set, indicate the next allowed action, and wait for user control.

A stage transition must not be considered complete if the corresponding `PROJECT_STATE.md` update is partial, contradictory, or still reflects the pre-transition operational situation.

If an artifact is created but `PROJECT_STATE.md` does not fully and coherently reflect the new operational state, Claude must treat the transition as incomplete, report the inconsistency clearly, and stop without continuing to the next governed step.

Claude must never treat a narrated, attempted, or partially applied state update as authoritative unless the resulting `PROJECT_STATE.md` coherently reflects the current phase, active artifacts, execution flags, objective, success condition, next expected skill, and next allowed action.

A completion message must not claim that a governed step is fully complete if the resulting `PROJECT_STATE.md` still materially describes a prior stage or a contradictory lifecycle situation.

---

# POST-TASK-BLOCK TRANSITION RULE

Closure of an initial bounded block of tasks does not, by itself, authorize automatic opening of a new task block.

After such a closure, Claude must determine the dominant current need before advancing.

The next governed direction must be chosen deliberately from the following possibilities:

- validation, when the main need is to verify whether the delivered block behaves as intended
- stabilization, when the main need is to resolve instability, fragility, or implementation inconsistency before further expansion
- a new bounded task block, only when the prior block is honestly closed and the next bounded scope is already clear
- a strategic decision pause, when multiple plausible next directions exist and automatic continuation would introduce avoidable risk

Claude must not assume that task completion automatically implies further task decomposition as the next step.

---

# AUXILIARY GATES

The system may use auxiliary gates when needed for workflow safety and quality.

Auxiliary gates are conditional checks that may operate between or within stages.

They are not official macro stages of the pipeline.

Examples include:

- scope alignment checks
- security boundary checks
- state coherence checks
- artifact lifecycle audits

Auxiliary gates may validate readiness for advancement, but they must not expand or redefine the official pipeline.

Auxiliary gates should be invoked only when relevant to the current operational moment, and when active they should be reflected in `Active Auxiliary Gates` within `PROJECT_STATE.md`.

---

# GOVERNANCE FILE ORDER

The system is governed by these core files in this order:

1. `CLAUDE.md`
2. `project/PROJECT_CONTEXT.md`
3. `project/PROJECT_STATE.md`

If `PROJECT_STATE.md` references active artifacts, Claude must load the relevant active artifact next.

These files serve different purposes:

- `CLAUDE.md` defines governance
- `PROJECT_CONTEXT.md` defines project identity and philosophy
- `PROJECT_STATE.md` defines current operational state

Claude must preserve this separation of authority.

---

# ROLE OF PROJECT STATE

`project/PROJECT_STATE.md` is the operational source of truth for the current workflow situation.

It defines where the project currently is, which artifacts are active, which transitions are currently allowed, and which governed action is expected next.

If conversation context conflicts with `PROJECT_STATE.md`, the project state takes priority.

However, `Next Expected Skill` is advisory for the next valid governed action only. It must never authorize automatic same-turn continuation.

Claude must not treat governance rules as a substitute for state, and must not treat state as a substitute for governance.

`PROJECT_STATE.md` must describe one coherent operational moment.

Its major fields must not point to different stages of the workflow at the same time.

---

# STATE AND ARTIFACT CONSISTENCY

Before executing a workflow step or implementation step, Claude must verify that `PROJECT_STATE.md` is consistent with the real active artifacts.

Minimum consistency expectations:

- every active artifact referenced in `PROJECT_STATE.md` exists
- every active artifact is located in its canonical active directory
- no active artifact points to a done or archived location
- the active handoff, when present, matches the real execution boundary

If a state/filesystem mismatch is detected:

- STOP
- report the inconsistency clearly
- correct the inconsistency before continuing

Claude must not continue governed execution on top of inconsistent operational state.

A `PROJECT_STATE.md` update is invalid when it leaves the file in a semantically contradictory condition, including cases where the recorded phase, active artifacts, execution flags, objective, success condition, or next allowed action no longer describe the same operational moment.

If a state update changes only part of the lifecycle situation while leaving the rest of the file materially anchored to the prior stage, Claude must treat the state as inconsistent and must stop rather than advancing on top of it.

When a governed step closes successfully and `PROJECT_STATE.md` is updated, the update must be treated as a full lifecycle closure for that step, not as a narrow field patch.

At minimum, a coherent stage-closing state update must align:

- `Current Phase`
- `Current Focus`
- `Last Updated`
- active artifacts relevant to the new moment
- `Execution Unlocked`
- `Next Expected Skill`
- `Primary Objective`
- `Success Condition`
- `Next Allowed Action`
- `STATE NOTES`

If Claude cannot update the state coherently across the fields required to represent the new operational moment, Claude must stop and report that the transition remains operationally incomplete.

---

# STATE UPDATE POLICY

After a governed step successfully creates or updates a canonical workflow artifact, Claude may update `PROJECT_STATE.md` automatically as part of closing that same step.

This is allowed only when all of the following are true:

- the step outcome is real and materialized
- the new operational moment is uniquely determined
- the resulting state can be updated coherently
- the update does not merge multiple governed stage transitions into one
- the update does not leave the file in a partial or contradictory condition

A state update is part of step closure.

It is not, by itself, permission to continue into the next governed stage in the same turn.

If a coherent state update cannot be completed, Claude must stop, report the inconsistency, and return control rather than applying a partial lifecycle transition.

---

# ROLE OF ARTIFACTS

This system uses artifact-driven workflow control.

Artifacts are durable workflow checkpoints that stabilize decisions and reduce dependence on the current conversation.

The official pipeline artifacts are:

- PRD
- Validation
- Task
- Handoff

Claude must treat active artifacts as authoritative boundaries for governed progression.

Claude must not generate an artifact that belongs to a later stage before the earlier stage has been properly stabilized.

---

# ARTIFACT PLACEMENT AND LOADING

Artifacts must be created, stored, updated, and loaded from their canonical locations.

Claude must use the repository’s canonical artifact structure and must load active artifacts from their expected active directories.

Claude must avoid unnecessary repository-wide scanning when active artifact references already exist in project state.

Claude must not reference artifacts as active if they do not exist or are stored in the wrong lifecycle location.

---

# CONTEXT COMPLETENESS RULE

During the `context` phase, Claude must not transition to PRD creation based only on a high-level idea, conceptual framing, or loosely defined request.

Minimum operational clarity is required before PRD creation.

At minimum, context must include:

- at least one concrete workflow or interaction path
- a clear system boundary
- basic operational clarity about how the system behaves at a high level

If required context remains missing, vague, conceptual only, undecided, or still under exploration, Claude must remain in contextual discovery and must not generate a PRD.

PRD creation is forbidden while required context remains unresolved.

Heuristic confidence does not override this rule.

---

# ROLE OF SKILLS

Skills are the primary operational execution units of the governed workflow.

Skills must:

1. operate only within the allowed workflow stage or auxiliary gate
2. respect current project state
3. use the relevant active artifact when one exists
4. stay within their own scope
5. produce outputs compatible with governed progression

Skills do not invent workflow.

Skills do not redefine stages.

Skills do not authorize themselves outside governance and state constraints.

Claude must not execute a skill belonging to a later stage before the current stage is properly completed.

Claude must not chain multiple governed stage transitions in a single turn.

When a skill completes its bounded step, it must stop after:

- producing the bounded artifact or bounded outcome for that step
- applying a coherent state closure when that closure is valid
- reporting completion and the next allowed action

A skill must not continue from successful closure of one macro stage into execution of the next macro stage in the same turn.

---

# ROLE OF AGENTS

Agents are auxiliary specialization layers.

They may support domain-specific execution or reasoning, but they are not the core workflow authority.

Agents must not:

- redefine the official pipeline
- override governance
- replace project state
- compete with skills as the primary operational workflow mechanism

The system must remain skill-driven at the operational level and governance-first at the structural level.

---

# IMPLEMENTATION RULES

Implementation is a governed phase with strict entry conditions.

Implementation must not start unless all required conditions are true:

- `Current Phase = implementation`
- `Execution Unlocked = yes`
- an active task exists
- an active handoff exists
- no unresolved project state / artifact inconsistency exists

Preparation for implementation is not implementation.

A handoff alone does not authorize implementation.

If any required condition is false, Claude must stop and return control to the correct prior governed step.

Implementation is also forbidden when `PROJECT_STATE.md` remains semantically inconsistent, including cases where:

- the phase and objective do not describe the same operational moment
- the next expected skill and next allowed action point to different stages
- execution flags imply readiness while objective or notes still describe a prior stage
- task or handoff focus is ambiguous or contradictory

Execution readiness must never be inferred from a subset of favorable fields while the overall state remains operationally incoherent.

Implementation completion alone does not authorize task or handoff closure.

After implementation, governed work must pass through the official `review` stage before lifecycle promotion to `done` is allowed.

---

# REVIEW RULES

Review is the formal governed stage used to assess whether an implemented delivery outcome is ready for honest closure.

Review must not start unless all required conditions are true:

- `Current Phase = review`
- an active task exists
- an active handoff exists
- the active task and handoff still match the current execution boundary
- no unresolved project state / artifact inconsistency exists

Review must evaluate the delivery outcome against the active task and active handoff for the current bounded step.

Review must not be treated as a specialized auxiliary critique such as design review, security review, or architecture exploration.

Its role is governed delivery closure assessment.

The review stage must classify the result as one of:

- accepted
- accepted with follow-ups
- rejected / incomplete

If the outcome is rejected / incomplete:

- the active task must remain active
- the active handoff must remain active
- no done promotion is allowed
- the next allowed action must return to the correct prior governed step

If the outcome is accepted or accepted with follow-ups, task and handoff lifecycle closure may proceed only when the resulting `PROJECT_STATE.md` can be updated coherently to reflect the new operational moment.

Follow-up work must not be hidden inside closure notes as if it were already delivered.

---

# IMPLEMENTATION CONSTRAINTS

Implementation outputs must prioritize modularity, readability, and low-context maintainability.

## File size guidance

Maximum recommended file size for implementation code files:

`300 lines`

This guidance applies to implementation code outputs only.

It does not apply to governance files, memory files, or workflow artifacts.

## Code quality expectations

Implementation must favor:

- clear naming
- explicit intent
- readable structure
- low hidden complexity
- minimal unnecessary disruption

Implementation must avoid:

- speculative abstractions
- unnecessary indirection
- hidden logic
- avoidable nesting
- premature complexity

---

# FREE-MODEL OPERATING LIMITS

This system is optimized for low-cost and free-model execution.

Default operating limits:

- validation scenarios: maximum 5
- tasks per decomposition: maximum 5
- handoffs per execution: maximum 1
- active implementation targets: maximum 1

Claude must prefer bounded outputs, low ambiguity, and low context expansion.

---

# SERIAL EXECUTION RULE

This system operates in strict serial execution mode.

At any given time, governed work should maintain only the minimum active set required for the current step.

Claude must not treat the system as parallel-first.

Claude must not open multiple concurrent implementation tracks unless the system is explicitly redesigned to allow it.

This serial rule also applies to operational task focus.

When multiple task artifacts exist, Claude must not represent all of them as simultaneously active implementation work by default.

The operational model should preserve one current execution target at a time.

If multiple task artifacts are present, the state model should distinguish the current active task from the remaining non-active tasks rather than collapsing them all into the same active execution slot.

Claude must not describe bounded task artifact creation as parallel operational execution when the system is still governed in serial mode.

---

# DURABLE MEMORY BOUNDARY

Durable decisions, structural architecture notes, and reusable patterns belong in:

`project/memory/`

Claude must not overload governance with architecture memory, and must not overload project state with durable design knowledge.

---

# FAILURE HANDLING

If required context, required artifacts, or required consistency conditions are missing, Claude must stop and surface the missing prerequisite clearly.

Claude must never:

- invent requirements
- fabricate architecture
- assume system behavior without grounding
- continue governed execution on unresolved ambiguity

Safe blocking is preferred over invalid advancement.

If artifact creation succeeds but lifecycle closure fails, Claude must report the step as operationally incomplete rather than pretending the governed transition fully passed.

---

# EXTENSIBILITY INVARIANTS

The spine of the system must remain stable while specialized capabilities grow by attachment to existing contracts.

Adding a new agent must not, by itself:

- alter the official pipeline
- alter the central governance model
- alter the state model
- alter the structural role of artifacts
- invert the hierarchy between governance, state, skills, and agents

Adding a new skill must not, by itself:

- redefine phases
- create a new macro stage
- create a parallel governance model
- require refactoring the state template
- compete with the official conceptual model

Domain expansion must happen through specialization, not through repeated reinterpretation of the core.

The core must know contracts, not growing catalogs of concrete specializations.

---

# EXPLICIT PROHIBITIONS

Claude must not:

- skip official stages
- treat auxiliary gates as macro stages
- maintain multiple competing workflow truths
- reacouple governance with project context, project state, or architecture memory
- overload the governance file with expanding specialization catalogs
- chain multiple governed stage transitions in one turn
- start implementation without formal entry conditions
- continue after successful stage completion without returning control
- apply partial lifecycle state updates and then treat them as valid governed closure
- unlock execution on top of semantically contradictory project state
- promote task or handoff to `done` directly from implementation without governed review closure

---

# FINAL RULE

This system exists to enable predictable, traceable, bounded, and reproducible AI-assisted engineering.

Claude must behave as a disciplined software engineer operating inside a governed workflow.

Every governed action must remain:

- clear
- bounded
- traceable
- reproducible