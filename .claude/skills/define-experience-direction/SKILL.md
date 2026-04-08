---
name: define-experience-direction
description: Perform the bounded synthesis step that traverses the experience-direction workflow, evaluates materially relevant experience specialists, and produces explicit experience direction without collapsing into review or implementation.
---

# SKILL: define-experience-direction

## Purpose

Perform the explicit bounded synthesis step for the `experience-direction` workflow.

This skill exists to:

- enter the governed experience-direction workflow through a real bounded traversal step
- identify which experience specialists are materially relevant for the active execution line
- resolve and use those specialists honestly through the registry/runtime bridge
- synthesize bounded experience direction that can guide downstream work
- determine whether a durable `Experience` artifact is required
- close the bounded experien#ce-direction moment cleanly and stop

This skill is the canonical first-pass synthesis step for governed experience-direction work.

It is not a review helper.

It is not a frontend implementation step.

It is not a substitute for governance, live state, or workflow authority.

---

## When To Use

Use this skill when all of the following are materially true:

- the active execution line is inside a governed path where `experience-direction` has been explicitly evaluated as materially required
- the system needs surface-level direction before safe downstream progression
- the current need is to synthesize experience direction rather than review an already proposed frontend
- the bounded step still belongs to direction, not implementation

Typical triggers include:

- `discover-missing-context` or `structured-research` concluded that experience-direction is materially required
- `product-definition` or another governing workflow needs explicit experience synthesis before safe PRD or later progression
- the product includes meaningful user-facing surfaces and needs more than vague quality language
- downstream tasking, handoff, or frontend work would otherwise rely on shallow aesthetic assumptions

---

## When Not To Use

Do not use this skill when:

- the current need is still raw contextual discovery
- structured research is still materially required and has not yet completed
- the current need is review of an existing frontend proposal rather than first-pass synthesis
- implementation is already authorized and the need is to build components or screens
- the scope is purely backend or non-surface work
- experience direction is already sufficiently governed for the same execution line and no new bounded synthesis is needed

This skill does not replace:

- `discover-missing-context`
- `define-prd`
- `plan-tasks`
- `prepare-handoff`
- `review-frontend-experience`
- implementation skills

---

## Governing Workflow Relationship

This skill executes inside the governing workflow:

`system/workflows/experience-direction.md`

It is the canonical bounded traversal entry for first-pass governed experience-direction synthesis.

Accordingly, this skill must:

- treat the workflow as real authority, not decorative context
- remain subordinate to governance, project state, active artifacts, and the controlling workflow
- honor the workflow requirement that experience-direction be materially synthesized rather than merely acknowledged
- stop after the bounded experience-direction moment closes

This skill must not behave as though specialist naming alone satisfies workflow traversal.

It must not use `review-frontend-experience` as the default entry for first-pass experience-direction work.

---

## Core Responsibility

This skill is responsible for answering, in bounded synthesized form:

- what aspect of the surface needs direction now
- which experience specialists are materially relevant
- what shared surface rules, hierarchy, structure, or trust-sensitive direction should guide downstream work
- whether motion is useful, unnecessary, or still open
- whether a durable `Experience` artifact is required
- what the correct next governed move becomes after this experience-direction moment closes

This skill must produce explicit synthesis.

It must not stop at:

- generic design commentary
- mood or taste language only
- unsynthesized specialist fragments
- review-style critique
- implementation planning

---

## Discovery vs Direction Boundary

This skill assumes that foundational context is already sufficiently clear for a bounded experience-direction pass.

It may use existing context, research, PRD, validation, and active workflow signals.

It must not reopen broad contextual discovery unless a blocking inconsistency prevents safe synthesis.

If a blocking inconsistency exists, this skill must stop honestly and return control rather than compensating by guessing.

---

## Mandatory Specialist Evaluation

This skill must explicitly evaluate which of the following specialists are materially relevant for the current bounded pass:

- `ui`
- `branding`
- `design-system`
- `information-architecture`
- `motion`
- `page-strategy`

For web/desktop user-facing products, `design-system` must always be explicitly evaluated.

For web/desktop user-facing products, `design-system` should normally be treated as materially relevant unless a sufficiently stable governed equivalent already exists for the same execution line.

In those cases, this skill must be able to state explicitly one of the following:

- `design-system` was materially required and used
- `design-system` was explicitly evaluated and a governed equivalent already exists
- `design-system` was evaluated and found genuinely non-blocking for this bounded pass

Silent omission is not valid.

This skill must not pretend all specialists were equally needed.

It should identify:

- which specialists were materially required
- which specialists were actually used
- which specialists were non-blocking for this bounded pass
- whether any required specialist remained unavailable or only partially successful

---

## Specialist Invocation Discipline

When a specialist is materially required, this skill must preserve the canonical registry/runtime bridge.

That means:

- resolve the canonical project agent first
- use the registry-approved runtime type and runtime call target
- do not send the canonical agent name directly as the runtime call target when registry mapping says otherwise
- report specialist participation honestly as:
  - materially succeeded
  - partial / behavioral
  - failed
  - unavailable
  - not materially needed for this bounded pass

This skill must not narrate specialist participation as materially complete when routing or execution failed.

It must not collapse:

- routed specialist identity
- runtime target
- attempted specialist use
- successful specialist contribution

into one overclaimed narrative.

---

## Inputs This Skill Should Use

When available and materially relevant, this skill should ground its synthesis in:

- `project/PROJECT_STATE.md`
- the currently governing workflow context
- stabilized contextual understanding
- research findings
- active PRD
- active validation
- an active `Experience` artifact if one already exists for the same execution line
- relevant upstream branding or page-structure direction when already governed
- existing repository continuity for the same product line when clearly governing the same execution line
- known product constraints and trust profile
- authorized technical defaults only when they are already upstream-authorized and relevant at direction level

This skill must not invent missing upstream authority.

If a supposedly governing input is absent, contradictory, or insufficient for safe synthesis, this skill must stop honestly rather than fabricate direction.

---

## Minimum Useful Direction for Digital Product Surfaces

For web/desktop user-facing products, a minimally useful contribution from this skill should normally leave behind at least a bounded shared-system foundation such as:

- typography hierarchy direction
- spacing or density direction
- component-family consistency expectations
- state-behavior consistency expectations
- surface-treatment logic
- trust-sensitive consistency rules when relevant

A contribution that improves mood or taste but does not materially improve reusable surface logic should be reported conservatively.

---

## What This Skill Should Synthesize

A strong bounded pass from this skill should usually synthesize some combination of:

### 1. Surface intent
- what the product surface should feel like at direction level
- what quality bar matters
- what trust or confidence profile matters
- what should feel clear, premium, restrained, fast, serious, calm, or energetic

### 2. Structural clarity
- information hierarchy direction
- grouping logic
- page/screen structure direction
- scan rhythm or section logic when materially relevant

### 3. Shared system logic
- typography hierarchy
- spacing rhythm or density
- component consistency expectations
- state consistency expectations
- surface treatment rules
- reusable UI primitives at principle level

### 4. Motion stance
- motion materially useful and restrained
- motion unnecessary and absent
- motion still genuinely open and conservative by default

### 5. Downstream relevance
- what later tasking, handoff, PRD, or implementation wording should now reflect
- what must remain consistent across downstream work
- what is decided vs still open

This skill must remain direction-level.

It must not drift into implementation-level precision unless that precision is already materially grounded upstream.

---

## Artifact Decision Rule

This skill must explicitly determine whether a durable `Experience` artifact is required.

A durable `Experience` artifact is usually required when one or more of the following is true:

- multiple later steps will depend on the same experience-direction decisions
- conversational direction would be too fragile for the current surface complexity
- downstream tasking, handoff, or implementation quality would materially benefit from durable experience guidance
- the execution line aims for premium or differentiated surface quality that should not remain implicit
- information architecture, motion stance, or design-system direction needs to remain stable across later steps

If a durable `Experience` artifact is required, this skill must produce output compatible with canonical materialization in:

`project/experience/active/`

This skill must not treat a durable artifact as complete if it was only implied conversationally and not materially created when required.

If an artifact is not required for the current bounded pass, this skill must say so explicitly.

---

## Single Active Experience Artifact Rule

When a durable `Experience` artifact is required for the current execution line, this skill must preserve a single active artifact truth for the `experience` family.

This skill must not leave multiple active `Experience` artifacts in `project/experience/active/` for the same execution line by default.

If an older active `Experience` artifact is being superseded by a newer bounded synthesis for the same execution line, this skill must do one of the following coherently:

- update the existing active artifact in place
- replace the active artifact and retire the older one from `active/`
- stop and report lifecycle closure as incomplete if supersession cannot be handled cleanly

This skill must not treat “new artifact created” as valid closure when the result leaves parallel active `Experience` artifacts that claim to govern the same execution line.

---

## Output Modes

This skill has only two valid non-error output modes.

### Output Mode A — Experience Direction Continues / Still Blocked

Use this mode when:

- a blocking prerequisite is still missing
- a materially required specialist could not be safely used
- the bounded pass cannot yet produce honest synthesis
- durable closure would be fake or incomplete

A correct output in this mode must include:

1. a short assessment of what blocks safe experience-direction synthesis
2. which specialist or prerequisite is blocking
3. what remains decided vs unresolved
4. the correct next bounded move
5. a clear stop

This mode must not compensate for the blockage with vague design advice.

---

### Output Mode B — Experience Direction Defined For Current Pass

Use this mode when bounded synthesis materially succeeded for the current pass.

A correct output in this mode must include:

1. a concise statement that experience-direction materially completed for the current bounded pass
2. which specialists were materially relevant
3. which specialists were actually used and with what execution outcome
4. the synthesized direction
5. whether a durable `Experience` artifact is required and whether it was created
6. the correct next allowed governed move
7. a clear stop without executing that next move inline

---

## Canonical Output Shape

When this skill materially succeeds, the output should normally make explicit:

- Governing Workflow: experience-direction
- Bounded Step: define-experience-direction
- Surface Focus: [what needed direction]
- Material Specialists Required: [list]
- Specialists Actually Used: [list + honest outcome]
- Shared System Direction: [bounded synthesis]
- Structural / IA Direction: [bounded synthesis or not materially needed]
- Motion Stance: [use restrained | unnecessary | still open]
- Experience Artifact: [required and created | not required for this pass | blocked]
- Downstream Consequence: [what later work must now reflect]
- Next Allowed Step: [single bounded governed move]
- Stop: yes

For web/desktop user-facing products, the output should not omit explicit treatment of `design-system` evaluation.

---

## Anti-Premature Progression

This skill must actively prevent experience-direction from collapsing into later-stage work.

It must not:

- auto-open `growth-strategy`
- auto-open `plan-tasks`
- auto-open `prepare-handoff`
- auto-open implementation
- continue into `review-frontend-experience`
- treat improved design clarity as permission for same-turn downstream continuation
- generate code
- choose implementation baselines on its own
- produce framework-specific frontend plans as though implementation were already authorized
- invent token precision, breakpoints, timings, inventories, or component counts as settled fact
- substitute review-style critique for first-pass synthesis
- treat specialist consideration as equivalent to specialist success

If this bounded step materially completes, it must stop after:

- producing explicit synthesis
- creating the durable `Experience` artifact when required
- applying coherent state closure when valid
- identifying the next allowed governed move

Nothing later.

---

## State Closure Expectations

If this skill materially completes and coherent state closure is possible, the resulting `PROJECT_STATE.md` should describe one coherent post-experience moment.

At minimum, that state should align with:

- `Current Phase = experience`
- the real `Active Experience` artifact when one exists
- whether experience-direction materially completed for the current pass
- the correct next governed move
- the fact that same-turn continuation is not authorized

The resulting state must not point to an `Active Experience` artifact while another competing active artifact remains in `project/experience/active/` for the same execution line.

If artifact supersession is unresolved, closure remains operationally incomplete.

If coherent state closure is not possible, this skill must report the closure as operationally incomplete rather than pretending the transition fully passed.

---

## Boundaries

This skill must not:

- behave like `/start`
- reopen broad discovery by default
- create a PRD
- create validation scenarios
- plan tasks
- prepare a handoff
- authorize implementation
- implement anything
- perform governed review of an existing frontend proposal by default
- replace governance, live state, or workflow authority

Its role is limited to:

- bounded experience-direction synthesis
- honest specialist evaluation and use
- durable direction decision for the current pass
- clean closure of the bounded experience-direction moment

---

## Failure Handling

If a materially required specialist cannot be safely routed or executed:

- do not narrate that specialist as successfully used
- report the limitation clearly
- downgrade the synthesis claim conservatively
- stop if the workflow remains materially blocked

If inputs are too weak or contradictory for safe synthesis:

- do not compensate by inventing direction
- report the blocking ambiguity
- identify the correct prior or adjacent governed step
- stop

If a durable `Experience` artifact is materially required but cannot be created canonically:

- do not narrate experience-direction as fully closed
- report lifecycle closure as incomplete
- stop

If motion remains unclear and materially consequential:

- use `check-motion-need` only as an auxiliary gate when genuinely relevant
- do not force motion by default
- do not use motion uncertainty as permission to continue into later workflow stages

---

## Final Rule

A correct `define-experience-direction` must answer, in bounded synthesized form:

- what part of the surface needed direction?
- which experience specialists were materially relevant?
- what reusable experience direction now exists?
- whether a durable `Experience` artifact is required?
- what is the single next allowed governed move?

It must then stop.

It must not turn experience-direction into review theater, implementation planning, or aesthetic improvisation without durable downstream value.