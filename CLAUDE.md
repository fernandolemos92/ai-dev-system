# CLAUDE SYSTEM GOVERNANCE

This file defines the constitutional governance of the AI development workflow used in this repository.

Claude must follow these rules when interpreting project state, advancing workflow stages, generating artifacts, invoking specialization, or executing implementation work.

This file is the highest governance authority of the system.

It defines what the system may do, may not do, and under which conditions it may advance or must stop.

---

# PURPOSE OF THIS FILE

`CLAUDE.md` is the constitutional governance layer of the system.

It defines:

- the official stage model
- progression and blocking rules
- authority order
- the relationship between governance, state, workflows, policies, skills, agents, artifacts, memory, and external capability providers
- the global constraints that preserve predictable execution

It does not serve as:

- the live operational state
- the repository map
- a replacement for workflow contracts
- a replacement for policy files
- a replacement for runtime routing or execution rules
- a replacement for skill instructions

---

# OPERATIONAL MODEL

The official operational model of this system is:

**governance-first + state-aware + workflow-orchestrated + skill-executed execution**

This means:

- governance defines what is allowed
- project state defines the current operational moment
- workflows define the mandatory macro operating contracts for governed progression
- skills execute bounded work inside the currently governing workflow
- policies define transversal rules that apply across multiple steps
- artifacts materialize durable progress
- memory preserves durable architecture, decisions, and patterns
- agents provide bounded domain specialization inside an active workflow
- external capability providers may supply evidence or technical support without becoming workflow authority

If two layers appear to conflict, the higher authority layer wins.

The system must not behave as skill-first when a workflow-governed path is required.

For governed progression, workflow traversal is primary.

Skill execution happens inside the currently governing workflow rather than replacing it.

---

# AUTHORITY ORDER

The system is governed by these core layers in this order:

1. `CLAUDE.md`
2. `project/PROJECT_CONTEXT.md`
3. `project/PROJECT_STATE.md`
4. relevant active artifacts referenced by `PROJECT_STATE.md`
5. applicable `system/workflows/*.md`
6. applicable `system/policies/*.md`
7. the currently active skill
8. any attached agents or external evidence providers

These layers serve different purposes:

- `CLAUDE.md` defines constitutional rules
- `PROJECT_CONTEXT.md` defines identity, philosophy, and official defaults
- `PROJECT_STATE.md` defines the live operational situation
- active artifacts define bounded durable scope
- workflows define macro operating contracts
- policies define transversal discipline
- skills perform bounded work
- agents and external providers provide specialization or evidence only

Claude must preserve this separation of authority.

---

# OFFICIAL MICRO PIPELINE

All governed work must respect the official stage model:

`context → research → experience → strategy → prd → design → validation → tasks → handoff → execution-unlock → implementation → review`

Interpretation rules:

- `research`, `experience`, `strategy`, and `design` are governed optional domain stages
- optional stages must not be fabricated decoratively
- optional stages must be used when their corresponding domain work is materially needed
- required later stages must not be skipped just because an optional stage was not used
- `design` is the governed project-level design-system stage and belongs after `prd` when interface coherence, component/system integrity, or implementation-contract seriousness materially affect safe progression
- `execution-unlock` remains the governed transition between `handoff` and `implementation`

The macro workflow layer in `system/workflows/` organizes broader operating spans around this stage model.

Workflow files must not replace the official micro pipeline.

---

# WORKFLOW TRAVERSAL RULE

The official micro pipeline defines the governed stage order.

The macro workflow layer defines how those stages are traversed in a disciplined way.

For governed work, Claude must not treat workflows as decorative documentation.

Claude must traverse the relevant governing workflow before advancing through the bounded skill operating inside that workflow.

This means:

- workflow entry must be explicit
- the controlling workflow must be identifiable for the current bounded step
- the controlling skill must execute inside that workflow context
- workflow-required synthesis and structured outputs must be honored before advancing

A skill must not behave as though workflow traversal is optional when a governing workflow contract materially applies to the current bounded step.

If a workflow materially governs the current step, silent bypass is not allowed.

The system may still remain serial and bounded.

Workflow traversal does not authorize multi-step chaining.

It defines the mandatory macro operating contract that bounded skills must respect.

---

# PROGRESSION AND BLOCKING RULES

Claude may advance only to the single next valid governed step allowed by:

- the official micro pipeline
- the current live project state
- the active artifact set
- applicable workflow and policy constraints

Claude must stop when any required prerequisite is missing, unresolved, inconsistent, contradictory, or not yet stabilized.

Claude must not:

- skip required stages
- merge multiple governed stage transitions into one continuous step
- generate later-stage outputs before earlier-stage stabilization exists
- treat heuristic confidence as a substitute for required readiness
- narrate completion when the operational state is not coherently closed

If a governed step completes successfully, Claude must stop after that bounded step, report completion honestly, surface the active artifact set, indicate the next allowed action, and return control.

A stage transition is not complete if the corresponding `PROJECT_STATE.md` update is partial, contradictory, or still materially anchored to the prior operational moment.

---

# STEP COMPLETION PAUSE RULE

Successful completion of one bounded governed step always requires an explicit return of control before any later governed step begins.

This pause is mandatory even when the next step appears obvious.

State closure, artifact materialization, and completion messaging must all describe only the step that just closed.

They must not be used as a springboard for same-turn continuation.

The system must therefore not chain, in the same turn, across boundaries such as:

- `tasks → handoff`
- `handoff → execution-unlock`
- `execution-unlock → implementation`
- `implementation → review`
- `review / closure → activation of a new task block`

Narrating a later step, recommending a later step, or setting `Next Expected Skill` does not authorize performing that later step in the same turn.

A coherent step-closing state update is part of closure.

It is not permission to continue.

---

# ROLE OF PROJECT STATE

`project/PROJECT_STATE.md` is the live operational source of truth.

It defines:

- where the project currently is
- which artifacts are active
- which transitions are currently allowed
- which skill is expected next
- what the current bounded objective is

If conversation context conflicts with `PROJECT_STATE.md`, the project state takes priority.

However, `Next Expected Skill` is advisory for the next valid bounded step only.

It never authorizes automatic same-turn continuation.

`PROJECT_STATE.md` must describe one coherent operational moment.

Its major fields must not point to different stages of work at the same time.

---

# STATE AND ARTIFACT CONSISTENCY

Before executing a governed step or implementation step, Claude must verify that `PROJECT_STATE.md` is consistent with the real active artifacts.

Minimum consistency expectations:

- every active artifact referenced in `PROJECT_STATE.md` exists
- every active artifact lives in its canonical active directory
- no active artifact points to a done or archived location
- the active handoff, when present, matches the real execution boundary
- the recorded phase, objective, flags, and next allowed action describe the same operational moment

If a state or filesystem mismatch is detected:

- STOP
- report the inconsistency clearly
- correct the inconsistency before continuing

Claude must never continue governed execution on top of inconsistent operational state.

A valid stage-closing state update must align, at minimum:

- `Current Phase`
- `Current Focus`
- `Last Updated`
- active artifacts relevant to the new moment
- `Execution Unlocked`
- `Active Auxiliary Gates`
- `Next Expected Skill`
- `Primary Objective`
- `Success Condition`
- `Next Allowed Action`
- `STATE NOTES`

If Claude cannot update the live state coherently across the fields needed to represent the new operational moment, Claude must stop and report the transition as operationally incomplete.

Detailed lifecycle discipline belongs in:

`system/policies/artifact-lifecycle-policy.md`

---

# STATE UPDATE POLICY

After a governed step successfully creates or updates a canonical artifact, Claude may update `PROJECT_STATE.md` automatically as part of closing that same bounded step.

This is allowed only when all of the following are true:

- the step outcome is real and materialized
- the new operational moment is uniquely determined
- the resulting state can be updated coherently
- the update does not merge multiple governed transitions into one
- the update does not leave the file in a partial or contradictory condition

A state update is part of step closure.

It is not permission to continue into the next governed stage in the same turn.

If coherent state closure cannot be completed, Claude must stop, report the inconsistency, and return control.

---

# ROLE OF ARTIFACTS

This system uses artifact-driven workflow control.

Artifacts are durable checkpoints that stabilize decisions and reduce dependence on the current conversation.

Core progression artifacts are:

- PRD
- Design Foundation
- Validation
- Task
- Handoff

Optional domain artifacts are:

- Research
- Experience
- Strategy

Core progression artifacts drive the minimum product-to-execution path.

Optional domain artifacts deepen the work when the project materially requires research grounding, experience direction, or growth strategy.

`Design Foundation` is a core progression artifact for execution lines where interface coherence, design-system integrity, or implementation-contract seriousness materially affect safe downstream work.

Claude must not generate an artifact from a later stage before the earlier stage has been properly stabilized.

Artifacts must be created, stored, updated, and loaded from canonical locations.

Lifecycle directories are:

- `active/`
- `done/`
- `archived/`
- `templates/`

Claude must not reference a non-canonical path as active or continue work on top of ambiguous lifecycle state.

Detailed lifecycle rules belong in:

- `system/policies/artifact-lifecycle-policy.md`
- `system/policies/design-governance-policy.md`

---

# CONTEXT COMPLETENESS RULE

During `context`, Claude must not transition to PRD creation based only on a broad idea, conceptual framing, or loosely defined request.

Minimum operational clarity is required before PRD creation.

At minimum, context must include:

- at least one concrete workflow or interaction path
- a clear system boundary
- basic operational clarity about high-level behavior

If required context remains missing, vague, conceptual only, undecided, or still exploratory, Claude must remain in contextual discovery.

Heuristic confidence does not override this rule.

---

# NEW PROJECT ENTRY RULE

When the user selects or clearly requests `New Project`, the system must not route directly into an isolated downstream skill as though workflow context were optional.

A new project must first enter its governing macro workflow.

For a standard new product or software project start, the default governing workflow is:

`system/workflows/product-definition.md`

unless governance, project state, or an explicitly different valid starting condition clearly requires another workflow.

Accordingly:

- `New Project` must enter the governing workflow first
- only after workflow entry is established may the controlling bounded skill begin
- the system must not treat direct skill hopping as an acceptable substitute for workflow entry

For `New Project`, the system should not behave as though context discovery alone is the whole operating model.

It must treat discovery as a bounded operation inside the governing workflow.

If optional upstream domain work such as `research` is materially required by the governing workflow, that work must be handled through explicit workflow-aware progression rather than ad hoc skill improvisation.

---

# OPTIONAL DOMAIN STAGE RULE

The system may use governed optional domain stages when the project materially benefits from them.

These stages are:

- `research`
- `experience`
- `strategy`
- `design`

These domains are not decorative.

They are optional only in the sense that not every project requires all of them.

When a domain is materially relevant, its omission must not remain silent.

The controlling workflow and controlling skill must explicitly evaluate whether the domain is materially needed.

Examples:

- use `research` when benchmark, category, competitive, market, or external reference grounding materially affects safe product definition
- use `experience` when UI, information architecture, motion, trust-sensitive interaction, or surface-level experience direction materially affects safe progression upstream of product definition
- use `strategy` when positioning, messaging, CRO, SEO, discoverability, or analytics logic materially affects safe progression
- use `design` when project-level design-system definition, token/component/state/surface contracts, or implementation-contract seriousness materially affect safe progression between PRD and downstream validation/tasks

If such work is not genuinely needed, the system may proceed without opening that optional stage.

If such work is genuinely needed, Claude must not pretend the project is ready without it.

For user-facing products, when benchmark grounding and experience direction both materially affect PRD safety, the system should normally treat those as coupled domain needs rather than silently choosing only one.

For interface-heavy products, when PRD safety and downstream implementation depend materially on coherent design-system instantiation, the system should normally treat `design` as a real downstream requirement rather than a decorative extension.

The detailed operating span of each domain belongs in the relevant workflow file under:

`system/workflows/`

---

# DESIGN LAYER RULE

The design layer is a governed part of the system architecture.

It must not be treated as:

- a loose aesthetic extension
- an implicit frontend concern
- a substitute for experience direction
- a substitute for project-specific implementation handoff

The canonical layered design model is:

- `Experience Direction` for upstream guardrails
- `Design Rules` for global constitutional design rules
- `Design Foundation` for the project-level design system artifact
- `Implementation Contract` as a mandatory section inside a valid project-level design foundation

Canonical locations are:

- `project/experience/...`
- `system/design/rules/...`
- `project/design/...`

`Experience Direction` is not a full design system.

`Design Rules` are global and do not make project-specific design decisions.

`Design Foundation` is project-specific and must translate stabilized product direction into a materially implementable design layer.

When used, `design` belongs after `prd` and before downstream validation, task decomposition, and execution preparation.

Detailed design-layer integration discipline belongs in:

`system/policies/design-governance-policy.md`

---

# AUXILIARY GATES

The system may use auxiliary gates when needed for workflow safety and quality.

Auxiliary gates are conditional checks.

They are not official macro stages.

Examples include:

- scope alignment checks
- security boundary checks
- state coherence checks
- artifact lifecycle audits
- motion necessity checks

Auxiliary gates may validate readiness for advancement, but they must not redefine the pipeline.

When active, they should be reflected in `Active Auxiliary Gates` in `PROJECT_STATE.md`.

---

# ROLE OF SKILLS

Skills are bounded execution units of governed work.

Skills execute inside the currently controlling workflow or gate.

Skills must:

1. operate only within the currently allowed stage or gate
2. respect current project state
3. respect the currently governing workflow
4. use the relevant active artifact when one exists
5. stay within their own bounded scope
6. produce outputs compatible with governed progression

Skills do not invent workflow.

Skills do not redefine stages.

Skills do not authorize themselves outside governance, state, workflow, and policy constraints.

A skill must not behave as though workflow traversal is optional when a governing workflow contract materially applies to the current bounded step.

When a skill closes its bounded step, it must stop after:

- producing the bounded outcome or artifact
- applying coherent state closure when valid
- reporting completion and the next allowed action

A skill must never continue from one successful macro step into another macro step in the same turn.

A skill must not silently compensate for missing workflow traversal by improvising downstream progression.

When a skill materially depends on specialist participation, it must not treat “specialist considered” as equivalent to “specialist routed, executed, and materially applied.”

If the relevant workflow requires specialist participation, the controlling skill must enforce honest specialist handling through the canonical routing/execution bridge.

---

# ROLE OF AGENTS

Agents are bounded domain specialization layers.

They do not replace governance, state, workflows, or skills.

However, they are not merely decorative optional attachments when a governing workflow materially requires domain specialization.

Canonical project agents live under:

`system/agents/`

Agents must not:

- redefine the official pipeline
- override governance
- replace project state
- create a parallel governance model
- replace bounded skill execution as the workflow controller

The system remains workflow-orchestrated and skill-executed.

Accordingly:

- workflows determine when domain specialization is materially required
- skills execute bounded work inside that workflow
- agents provide the required domain specialization inside the active workflow context

When a relevant workflow requires specialist participation for safe progression, the controlling skill must not silently bypass that participation.

Canonical agent naming, registry discipline, routing, and execution behavior belong in:

- `system/agents/AGENTS.md`
- `system/agents/registry.yaml`
- `system/runtime/AGENT_ROUTING.md`
- `system/runtime/AGENT_EXECUTION_RULES.md`

---

# WORKFLOW SPECIALIZATION RULE

When a governing workflow materially depends on domain specialization, the system must not treat specialist participation as optional decoration.

In those cases, the controlling skill must explicitly ensure that the relevant specialists are invoked, resolved, or consciously handled according to the workflow contract.

This rule applies across governed progression up to implementation.

A correct governed step should therefore be able to state, honestly:

- which workflow is currently governing the step
- which specialists were materially required
- which specialists were actually used
- whether synthesis and structured output for that workflow were completed
- what the next allowed bounded step is

If materially required specialization was not performed, the system must not pretend the workflow step is fully mature.

Silent omission is not valid workflow completion.

When a workflow materially requires specialist participation, honest completion requires all of the following distinctions to remain visible:

- canonical specialist identity
- routing success
- runtime invocation success
- materially applied specialist contribution

These must not be collapsed into one overclaimed narrative.

---

# AGENT ROUTING AND EXECUTION DISCIPLINE

The canonical bridge for specialist use is:

- `system/agents/registry.yaml`
- `system/runtime/AGENT_ROUTING.md`
- `system/runtime/AGENT_EXECUTION_RULES.md`

Claude must preserve a strict distinction between:

- canonical project agent
- runtime-supported execution type
- invocation mode
- runtime call target
- actual execution outcome

Routing is not execution.

Execution is not proof of materially applied specialist contribution.

For specialist participation to count as strong, specialist-backed execution, the following must all be true:

- the canonical agent was resolved through the registry
- the referenced agent file was actually loaded
- the routed runtime type and runtime call target were actually honored
- invocation followed the approved invocation mode
- materially relevant specialist guidance was actually extracted
- that guidance materially shaped the bounded work

If one or more of these conditions is missing, the result must be downgraded honestly.

The system must not narrate specialist success based only on:

- naming the specialist
- reading the registry
- reading the agent file
- attempting a runtime call
- generic work that happened after specialist failure

---

# NO SILENT FALLBACK RULE FOR SPECIALISTS

If routing or execution of a materially required specialist fails, Claude must not silently continue generic reasoning while narrating specialist participation as if it materially succeeded.

Invalid behavior includes:

- routing failure followed by undocumented generic continuation
- runtime rejection followed by silent retry under another target without explicit policy support
- specialist failure followed by generic synthesis that is still narrated as specialist-backed
- partial behavioral guidance being presented as strong specialist execution

If a materially required specialist fails, the controlling skill must do one of the following explicitly:

- block the governed step
- degrade the synthesis claim and mark completion accordingly

Required specialist failure must always have a visible consequence.

Silent resilience is not valid workflow maturity.

---

# REQUIRED SPECIALIST FAILURE CONSEQUENCE RULE

When a materially required specialist is load-bearing for the active bounded step, failure or unavailability of that specialist must not be hidden.

Examples of load-bearing specialist situations include:

- `design-system` on a digital user-facing experience pass where shared surface logic materially matters
- `ui` on a bounded pass where surface-level application quality materially matters
- `information-architecture` when grouping, findability, or structural clarity materially affects the surface
- `page-strategy` when progression, information release, trust timing, or CTA timing materially affects the page
- `motion` when stillness vs movement is materially consequential for a premium or motion-sensitive surface
- `frontend` or `backend` when an implementation or design-foundation step materially depends on their boundary knowledge

In such cases, specialist failure must lead to one of:

- explicit blocking
- explicit degradation of the bounded outcome

It must never be erased by optimistic synthesis language.

---

# ROLE OF POLICIES

Policies are transversal rule files that apply across workflows, skills, stages, or domains.

They do not replace governance.

They do not replace project state.

They do not replace skills.

The main policy families in this system cover:

- naming discipline
- artifact lifecycle discipline
- design governance discipline
- evidence and inference discipline
- Context7 usage discipline
- implementation architecture discipline

Detailed transversal rules belong in:

`system/policies/`

Implementation architecture discipline is additionally grounded by:

- `project/memory/implementation-architecture-policy.md`
- `project/memory/frontend-implementation-architecture.md`
- `project/memory/backend-implementation-architecture.md`
- `project/memory/design-system-integration.md`

When implementation-facing work materially touches those concerns, those documents are binding complements to the policy layer.

---

# EXTERNAL DOCUMENTATION AND CONTEXT7

External documentation providers are auxiliary evidence layers.

They are not workflow authorities.

They must not:

- redefine the official pipeline
- override governance
- replace project state
- authorize technical baselines on their own
- justify stage advancement on their own

Context7 is an approved external documentation evidence provider when current or version-sensitive documentation is materially relevant to an already authorized bounded step.

Context7 is not a canonical project agent.

It is a policy-governed external capability.

Detailed usage discipline belongs in:

`system/policies/context7-policy.md`

---

# EVIDENCE DISCIPLINE

When the system performs research, external comparison, framework lookup, benchmark interpretation, or review reasoning that depends on evidence, Claude must distinguish clearly between:

- direct evidence
- strong inference
- weak inference
- unknown / not yet verified

Claude must not present inference as if it were directly evidenced.

Claude must not overstate certainty beyond what the available evidence supports.

Detailed evidence discipline belongs in:

`system/policies/evidence-policy.md`

---

# TECHNICAL BASELINE AUTHORITY RULE

Technical baseline decisions must not be improvised during governed execution.

Examples include:

- frontend stack
- backend stack
- framework choice
- storage choice
- persistence choice
- folder structure
- architectural baseline
- implementation foundation for a new codebase

A technical baseline is considered officially authorized only when it is materially grounded by one or more of:

- an explicit governance rule in `CLAUDE.md`
- an explicit project-level default in `project/PROJECT_CONTEXT.md`
- an explicit durable architecture decision in `project/memory/decisions/`
- an already existing repository implementation baseline that clearly governs the same execution line

If no such authority exists, the baseline remains an open dependency.

In that situation, Claude must not:

- choose a stack implicitly
- choose a framework implicitly
- choose structure implicitly
- choose persistence implicitly
- proceed as though the baseline were settled

“Simple”, “default”, “vanilla”, or “good enough for now” are not substitutes for governed technical authority.

If a bounded step depends materially on a missing baseline, Claude must stop, surface the dependency clearly, and return control to the correct prior decision layer.

External documentation, including Context7, may inform execution inside an already authorized baseline, but it must not create the baseline.

---

# EXECUTION-UNLOCK RULES

`execution-unlock` is the governed transition between `handoff` and `implementation`.

The existence of an active handoff does not, by itself, authorize implementation.

The canonical skill for this transition is:

`authorize-implementation`

At minimum, execution unlock requires:

- `Current Phase = handoff` or `Current Phase = execution-unlock` depending on the exact current closure moment reflected in state
- `Execution Unlocked = no`
- an active task exists
- an active handoff exists
- the active task and handoff are consistent with `PROJECT_STATE.md`
- active artifacts exist in canonical active locations
- no unresolved state or artifact inconsistency materially undermines readiness
- no missing technical baseline materially blocks execution
- no explicit blocker prevents safe bounded implementation

If unlock is approved, Claude may update `PROJECT_STATE.md` coherently to reflect the new implementation-ready moment, including:

- `Current Phase = implementation`
- `Execution Unlocked = yes`
- `Next Expected Skill = implement-approved-scope`
- a `Next Allowed Action` explicitly bounded to execution of the active handoff

If unlock is not approved, Claude must:

- keep `Execution Unlocked = no`
- avoid promoting the phase to `implementation`
- explain the blocking reason truthfully
- return control to the correct prior governed step

Execution unlock is a transition gate only.

It must not:

- implement the handoff
- invent new technical baselines
- silently promote the project into implementation

Even when unlock is approved, the system must stop after that bounded transition decision.

Approval of unlock does not authorize same-turn implementation execution.

Detailed operating span for this domain belongs in:

`system/workflows/governed-implementation.md`

---

# IMPLEMENTATION RULES

Implementation is a governed phase with strict entry conditions.

Implementation must not start unless all required conditions are true:

- `Current Phase = implementation`
- `Execution Unlocked = yes`
- an active task exists
- an active handoff exists
- no unresolved project state or artifact inconsistency exists

Formal authorization must come from the governed execution-unlock transition.

The canonical implementation skill is:

`implement-approved-scope`

Implementation is forbidden when the bounded execution step materially depends on a technical baseline that has not been explicitly authorized upstream.

Implementation is also forbidden when `PROJECT_STATE.md` remains semantically inconsistent.

When implementation depends on current or version-sensitive framework, library, SDK, API, or configuration knowledge, Claude should use the configured external documentation provider, including Context7 when available, before proposing code or configuration guidance.

Such usage must remain bounded to the already authorized execution step.

Implementation completion alone does not authorize task or handoff closure.

After implementation, governed work must pass through `review` before lifecycle promotion to `done` is allowed.

Implementation must satisfy not only functional correctness, but also structural alignment with the applicable implementation architecture canon.

At minimum, when materially relevant, implementation-facing work must remain aligned with:

- `project/memory/implementation-architecture-policy.md`
- `project/memory/frontend-implementation-architecture.md`
- `project/memory/backend-implementation-architecture.md`
- `project/memory/design-system-integration.md`

This means:

- working code is not sufficient by itself
- structurally weak frontend work is not acceptable merely because the UI works
- structurally weak backend work is not acceptable merely because the endpoint responds
- design-system-sensitive UI work must preserve product consistency rather than only local functionality

When a bounded implementation step materially touches frontend structure, backend structure, or UI consistency, the relevant canon must be treated as binding, not decorative.

---

# PRE-IMPLEMENTATION WORKFLOW COMPLETION RULE

Before the system may enter governed implementation, the pre-implementation workflow path must be materially complete for the active execution line.

This means, at minimum:

- the governing workflows up to implementation have been actually traversed rather than merely referenced
- required bounded skills have completed honestly
- materially relevant specialist participation has been handled according to workflow needs
- required synthesis and structured outputs have been produced
- the active handoff represents a truly bounded next execution step

Implementation readiness must not be claimed on the basis of artifacts alone if the upstream workflow path remained only partially materialized.

---

# TASK AND HANDOFF STRUCTURAL INTENT RULE

For implementation-facing execution lines, task and handoff artifacts must carry enough structural intent to preserve downstream architecture quality.

This does not mean turning tasks or handoffs into implementation plans.

It does mean they must not remain functionally clear but structurally careless when architecture materially matters.

Where applicable, implementation-oriented tasks and handoffs should make explicit enough direction to preserve:

- likely layer ownership
- what should remain thin
- what should be reused before creation
- what should not remain embedded locally
- which anti-patterns should be explicitly avoided

Examples include:

- overloaded page surfaces
- generic helpers trapped in feature hooks
- service-bucket drift
- repository-owned business rules
- shared component bypass
- ad hoc recurring state implementation

If a bounded execution line materially depends on such structural truth, tasking and handoff must not ignore it.

---

# REVIEW RULES

Review is the formal governed stage used to assess whether an implemented delivery outcome is ready for honest closure.

Review must not start unless all required conditions are true:

- `Current Phase = review`
- an active task exists
- an active handoff exists
- the active task and handoff still match the current execution boundary
- no unresolved project state or artifact inconsistency exists

The canonical review skill is:

`review-delivery`

Review must classify the outcome as one of:

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

Review and review-based closure are still one bounded governed step.

Even when review accepts closure and lifecycle promotion succeeds, the system must stop after that bounded review/closure moment.

Review closure must not automatically:

- activate the next pending task
- prepare the next handoff
- unlock the next execution line
- resume implementation on another scope slice

Review must assess both:

- functional correctness
- structural alignment with the applicable implementation canon

When materially relevant, review must remain aligned with:

- `project/memory/implementation-architecture-policy.md`
- `project/memory/frontend-implementation-architecture.md`
- `project/memory/backend-implementation-architecture.md`
- `project/memory/design-system-integration.md`

A functionally working result must not be accepted as fully healthy if structural misalignment remains materially significant.

Detailed review and closure behavior belongs in:

`system/workflows/review-and-closure.md`

---

# POST-TASK-BLOCK TRANSITION RULE

Closure of one bounded block of tasks does not, by itself, authorize automatic opening of another task block.

After such a closure, Claude must determine the dominant current need before advancing.

The next governed direction must be chosen deliberately from possibilities such as:

- validation, when the main need is to verify behavior
- stabilization, when the main need is to resolve fragility or inconsistency
- a new bounded task block, only when the prior block is honestly closed and the next bounded scope is clear
- a strategic decision pause, when multiple plausible directions exist and automatic continuation would introduce avoidable risk

Claude must not assume that task completion automatically implies further task decomposition as the next step.

Claude must not auto-promote a pending task into `Active Task` merely because the prior task just closed.

Such activation requires an explicit governed reentry moment reflected coherently in `PROJECT_STATE.md`.

---

# POST-IMPLEMENTATION REENTRY RULE

After implementation and review, the system must not reopen work through ad hoc continuation.

If further work is needed, the next governed direction must be chosen explicitly based on the dominant need.

Possible reentry directions include:

- return to review follow-up handling
- stabilization work
- a new bounded task block
- renewed validation
- renewed strategy or experience work if newly uncovered gaps materially require it
- a strategic decision pause

The system must not assume that implementation automatically implies new task generation.

New task creation after implementation must be justified through governed reentry rather than momentum.

Review-based closure of one task/handoff pair must not automatically select the next pending task as active execution focus in the same turn.

The post-closure operational moment must be represented honestly before any new execution line is opened.

---

# IMPLEMENTATION CONSTRAINTS

Implementation outputs must prioritize modularity, readability, and low-context maintainability.

## File size guidance

Maximum recommended file size for implementation code files:

`300 lines`

This guidance applies to implementation code outputs only.

It does not apply to governance files, workflow files, policy files, memory files, or artifact files.

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
- handoffs per execution line: maximum 1
- active implementation targets: maximum 1

Claude should prefer bounded outputs, low ambiguity, and low context expansion.

---

# SERIAL EXECUTION RULE

This system operates in strict serial execution mode.

At any given time, governed work should maintain only the minimum active set required for the current step.

Claude must not treat the system as parallel-first.

Claude must not open multiple concurrent implementation tracks unless the system is explicitly redesigned to allow it.

When multiple task artifacts exist, the state model should distinguish the single current active task from the remaining pending tasks.

Claude must not describe bounded task artifact creation as parallel execution when the system is still governed in serial mode.

---

# DURABLE MEMORY BOUNDARY

Durable decisions, structural notes, and reusable patterns belong in:

`project/memory/`

Claude must not overload governance with architecture memory, and must not overload project state with durable design knowledge.

The canonical skill for routing such updates is:

`route-memory-update`

---

# FAILURE HANDLING

If required context, required artifacts, required authority, or required consistency conditions are missing, Claude must stop and surface the missing prerequisite clearly.

Claude must never:

- invent requirements
- fabricate architecture
- assume system behavior without grounding
- continue governed execution on unresolved ambiguity

Safe blocking is preferred over invalid advancement.

If artifact creation succeeds but coherent lifecycle closure fails, Claude must report the step as operationally incomplete rather than pretending the governed transition fully passed.

If materially required specialist routing or execution fails, Claude must not narrate the bounded step as specialist-complete unless the workflow and controlling skill explicitly allow conservative degraded completion and that degradation is surfaced honestly.

---

# EXTENSIBILITY INVARIANTS

The spine of the system must remain stable while specialized capabilities grow by attachment to existing contracts.

Adding a new agent must not, by itself:

- alter the official stage model
- alter the central governance model
- alter the state model
- alter the structural role of artifacts
- invert the hierarchy between governance, state, workflows, policies, skills, agents, and external providers

Adding a new workflow, policy, or skill must not, by itself:

- create a competing constitution
- create a parallel governance model
- silently redefine stages
- require uncontrolled redesign of the state model
- compete with the official conceptual model

Domain expansion must happen through specialization, not repeated reinvention of the core.

The core must know contracts, not growing catalogs of special cases.

---

# EXPLICIT PROHIBITIONS

Claude must not:

- skip required governed stages
- treat auxiliary gates as macro stages
- maintain multiple competing workflow truths
- collapse governance, state, workflow, policy, skill, and agent responsibilities into one layer
- chain multiple governed stage transitions in one turn
- start implementation without formal entry conditions
- continue automatically after successful stage completion
- apply partial lifecycle state updates and then treat them as valid closure
- unlock execution on top of semantically contradictory state
- promote task or handoff to `done` directly from implementation without governed review closure
- treat external documentation evidence as workflow authorization
- treat Context7 or any external provider as a substitute for governed technical authority
- treat workflow traversal as optional during governed progression
- route `New Project` directly into an isolated downstream skill without first entering its governing workflow
- silently bypass materially required specialist participation
- confuse canonical project agents with skills or macro stages
- use specialist-shaped uncertainty as a reason to improvise downstream skill hopping
- reopen post-implementation work through ad hoc continuation instead of governed reentry
- auto-promote a pending task into active execution focus immediately after review closure
- treat review-based closure as permission to open the next execution line in the same turn
- treat successful routing as proof of successful specialist execution
- treat attempted specialist execution as proof of materially applied specialist contribution
- silently fallback from failed required specialist execution into undocumented generic synthesis

---

# FINAL RULE

This system exists to enable predictable, traceable, bounded, and reproducible AI-assisted engineering.

Claude must behave as a disciplined software engineer operating inside a governed workflow.

Every governed action must remain:

- clear
- bounded
- traceable
- reproducible