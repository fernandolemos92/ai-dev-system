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
- close the bounded experience-direction moment cleanly and stop

This skill is the canonical first-pass synthesis step for governed experience-direction work.

It is not a review helper.

It is not a frontend implementation step.

It is not a substitute for governance, live state, or workflow authority.

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

## Normative Relationship

This skill is bound by the implementation architecture policy and must remain compatible with downstream design and frontend architecture.

The following documents are materially relevant when this skill shapes later execution:

- `project/memory/implementation-architecture-policy.md`
- `project/memory/design-system-integration.md`
- `project/memory/frontend-implementation-architecture.md` when later frontend structure will materially consume the resulting direction

This means:

- this skill must not treat experience-direction as decorative design commentary
- this skill must not synthesize direction in a way that conflicts with the design-system canon
- this skill must not produce direction that would be structurally awkward for downstream frontend implementation to absorb
- this skill must not blur direction-level synthesis with implementation planning
- this skill must not narrate specialist success unless specialist execution materially happened

This skill may shape experience direction aggressively inside the authorized scope, but it must remain aligned with the governing canon.

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

Silent omission is not valid.

This skill must not pretend all specialists were equally needed.

It must identify:

- which specialists were materially required
- which specialists were actually used
- which specialists were non-blocking for this bounded pass
- whether any required specialist remained unavailable or only partially successful

---

## Stronger Default Material Relevance Rules

This skill must apply the following default relevance rules for web/desktop user-facing products unless there is a grounded reason not to.

### `design-system`
Must always be explicitly evaluated.

Should normally be treated as materially relevant unless a sufficiently stable governed equivalent already exists for the same execution line.

For meaningful user-facing digital surfaces, `design-system` should normally be treated as **load-bearing** unless a governed equivalent already exists.

### `ui`
Should normally be explicitly evaluated for user-facing product surfaces.

`ui` should usually be treated as materially relevant when one or more of the following is true:

- the bounded pass concerns a real screen, page, dashboard, onboarding surface, or product-facing flow
- hierarchy expression, state readability, or component application materially affects surface quality
- the product aims for premium, trust-sensitive, or polished interface quality
- downstream implementation would otherwise rely on vague surface-level guidance

Omission of `ui` should be treated as exceptional rather than default for meaningful digital surfaces.

For premium or strongly user-facing surfaces, `ui` should normally be treated as **load-bearing** unless the bounded pass is genuinely not surface-application-sensitive.

### `information-architecture`
Should normally be explicitly evaluated when one or more of the following is true:

- multiple sections, modules, screens, or flows need grouping logic
- global vs local structure is relevant
- navigation, findability, or disclosure materially affects comprehension
- the user-facing surface risks cognitive overload, ambiguity, or weak structure
- the product includes meaningful screen or page organization questions

If structure, grouping, prioritization, or findability materially affects the surface, silent omission of `information-architecture` is not valid.

When structural clarity is central to the bounded pass, `information-architecture` should normally be treated as **load-bearing**.

### `page-strategy`
Should normally be explicitly evaluated when one or more of the following is true:

- the product includes a landing page, showcase page, dashboard home, onboarding surface, acquisition surface, or any major page where progression matters
- the surface needs narrative pacing, surface progression, information release, trust timing, or CTA timing
- the product surface is experience-led, conversion-led, or hybrid in a way that materially depends on how the page unfolds

If surface progression materially affects understanding, trust, or action, silent omission of `page-strategy` is not valid.

When the bounded pass is strongly page-driven or progression-sensitive, `page-strategy` should normally be treated as **load-bearing**.

### `motion`
Should normally be explicitly evaluated when one or more of the following is true:

- the product or surface is premium, highly crafted, or reveal-led
- motion may materially affect state continuity, feedback, attention, pacing, or perceived product quality
- the surface contains meaningful transitions, progression, reward, or continuity questions
- the product line is motion-sensitive enough that stillness vs movement is itself a real design decision

`motion` does not need to be materially required in all passes.

But for motion-sensitive or premium user-facing surfaces, it must be explicitly evaluated rather than omitted by habit.

When stillness vs movement materially affects the quality or character of the surface, `motion` should normally be treated as **load-bearing**.

### `branding`
Should be explicitly evaluated when expressive identity, product feel, trust tone, or emotional tone materially affects the bounded pass.

It is not automatically required for every pass.

---

## Page-Strategy Reclassification Rule

For user-facing products, `page-strategy` must not be casually downgraded to supporting when the bounded pass includes a progression-sensitive guest or user flow.

`page-strategy` should normally be treated as **load-bearing** when one or more of the following is true:

- the surface unfolds through a sequence such as reveal → details → action → confirmation
- the quality of the experience depends on pacing, attention choreography, trust timing, or information release
- CTA timing materially affects the feel, trustworthiness, or effectiveness of the surface
- the product includes an emotionally meaningful or conversion-sensitive surface where progression is part of the value
- the guest or user journey depends on a bounded narrative or staged interaction flow

Examples include:

- invitation reveal → details → RSVP → confirmation
- premium onboarding or welcome flows
- emotionally staged landing or showcase surfaces
- RSVP or booking flows where timing and reassurance matter

In such cases, `page-strategy` must not be treated as merely supporting unless there is a strong, explicit, and grounded reason.

If the bounded pass includes a progression-sensitive flow and `page-strategy` is classified as non-load-bearing, the skill must explain that downgrade explicitly.

Silent downgrade is not valid.

---

## Load-Bearing Specialist Rule

For the purposes of this skill, the following specialists must be treated as potentially **load-bearing** rather than optional flavor when their domain is central to the bounded pass:

- `design-system`
- `ui`
- `information-architecture`
- `page-strategy`
- `motion`

If one of these is materially required and the bounded pass depends on that domain to produce honest experience direction, then it must not be downgraded into:

- `implied`
- `implicit`
- `considered`
- `assumed`
- `folded into generic synthesis`

Those are not valid execution outcomes for a load-bearing specialist.

For load-bearing specialists, the only valid execution outcomes are:

- `materially succeeded`
- `partial / behavioral`
- `failed`
- `unavailable`

This skill must not treat “the model synthesized something similar” as equivalent to specialist execution.

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

## Strong Specialist Execution Proof Rule

For a load-bearing specialist to be reported as `materially succeeded`, the bounded pass must have clear evidence of actual runtime-backed specialist execution.

At minimum, that means:

- the specialist was registry-resolved
- the specialist was actually invoked
- the invocation followed the expected runtime path
- specialist-specific guidance was materially produced
- that guidance materially shaped the bounded synthesis

This skill must not report `materially succeeded` merely because:

- the agent file was read
- the model could infer what the specialist would probably say
- the final prose resembles likely specialist guidance
- the synthesis was grounded in research + context alone
- a generic synthesis task absorbed specialist-shaped concerns without proving specialist-backed execution

If strong runtime-backed specialist execution cannot be shown clearly, `materially succeeded` is forbidden.

---

## Partial / Behavioral Execution Rule

`partial / behavioral` is a narrow classification.

It is allowed only when all of the following are true:

- the specialist was registry-resolved
- the specialist was actually invoked through the expected runtime path
- some specialist-specific guidance was materially extracted
- that guidance materially shaped the bounded synthesis
- the execution still fell short of strong specialist-backed completion

`partial / behavioral` must not be used when the system only:

- read the agent file
- inferred likely specialist output
- synthesized from general context or research alone
- relied on generic model reasoning without actual specialist invocation
- had unknown runtime execution status
- ran a broad synthesis task and later attributed parts of that synthesis back to specialists without execution proof

If specialist invocation did not actually occur, the result must not be labeled `partial / behavioral`.

In that case, the correct classification is typically:

- `failed`
- `unavailable`
- or `not invoked because not materially needed`

depending on the real circumstance.

This rule exists to prevent “agent file read + generic synthesis” from being misreported as specialist execution.

---

## Research-and-Context Synthesis Limitation Rule

Synthesis grounded in research, context, prior artifacts, or general reasoning may still be useful.

However, such synthesis must not be upgraded into specialist execution unless the specialist was actually executed through the expected runtime path.

Therefore:

- `research + context + agent file read` is not enough for `materially succeeded`
- `research + context + generic synthesis task` is not enough for `materially succeeded`
- `research + context + likely specialist-shaped output` is not enough for `materially succeeded`

If the bounded pass is materially informed by research and context but lacks actual runtime-backed specialist execution, the skill must classify the specialist outcomes conservatively.

Useful synthesis is allowed.

False specialist attribution is not.

---

## Specialist Resolution Ledger

For every specialist explicitly evaluated in the current bounded pass, this skill must maintain a specialist resolution ledger.

The ledger must include, at minimum:

- Specialist Canonical Name
- Materially Relevant? [yes/no]
- Materially Required? [yes/no]
- Contribution Strength [load-bearing | supporting | non-blocking | none]
- Registry Resolved? [yes/no]
- Runtime Type
- Runtime Target
- Invocation Attempted? [yes/no]
- Execution Outcome
- Blocking? [yes/no]

### Allowed values

#### Execution Outcome
- `materially succeeded`
- `partial / behavioral`
- `failed`
- `unavailable`
- `not invoked because not materially needed`

#### Contribution Strength
- `load-bearing`
- `supporting`
- `non-blocking`
- `none`

### Rule

The final synthesis must not claim stronger specialist participation than the ledger supports.

If a specialist was materially required but:

- was not registry-resolved
- was not actually invoked
- failed
- was unavailable

then the ledger must say so explicitly.

This skill must not compress a failed or absent specialist into a generic “experience specialists informed the result” narrative.

For load-bearing specialists, the ledger must never use non-outcomes such as:
- implied
- implicit
- assumed
- considered

Those are not valid ledger values.

---

## Ledger-to-Conclusion Consistency Rule

The specialist resolution ledger is authoritative for experience-direction completion strength.

This skill must not produce a conclusion stronger than the ledger allows.

Examples:

- if one or more load-bearing specialists are marked `failed` or `unavailable`, `Completion Strength` must not be `fully complete`
- if one or more load-bearing specialists are only `partial / behavioral`, `Completion Strength` must not be `fully complete`
- if a load-bearing specialist was materially required but not invoked, the pass must be blocked or explicitly degraded
- if only supporting or non-blocking specialists are partial, the pass may still complete if the bounded synthesis remains honest

The conclusion must follow the ledger.

The ledger must not be treated as decorative reporting.

---

## Ledger-Derived Completion Enforcement Rule

The final completion classification must be mechanically derived from the specialist resolution ledger.

This skill must not choose `Completion Strength` by prose quality, synthesis usefulness, or subjective confidence.

It must derive completion strength from the strongest valid conclusion supported by the ledger.

### Mandatory derivation rules

#### Rule 1 — Fully Complete
`Completion Strength = fully complete` is allowed only when all of the following are true:

- every materially required **load-bearing** specialist was registry-resolved
- every materially required **load-bearing** specialist was actually invoked
- every materially required **load-bearing** specialist has execution outcome = `materially succeeded`
- no materially required load-bearing specialist has execution outcome = `partial / behavioral`
- no materially required load-bearing specialist has execution outcome = `failed`
- no materially required load-bearing specialist has execution outcome = `unavailable`

If any one of those conditions is false, `fully complete` is forbidden.

#### Rule 2 — Materially Degraded
`Completion Strength = materially degraded` is required when:

- at least one materially required **load-bearing** specialist has execution outcome = `partial / behavioral`
- and no materially required load-bearing specialist is in a `failed` or `unavailable` state that would require blocking

In this case, the pass may continue only if the synthesis remains honest and useful enough for bounded downstream progression.

#### Rule 3 — Still Blocked
`Completion Strength = still blocked` is required when at least one materially required **load-bearing** specialist:

- was not registry-resolved
- was not actually invoked
- has execution outcome = `failed`
- has execution outcome = `unavailable`
- or otherwise did not materially participate in a way that satisfies the load-bearing requirement

In such cases, the pass must not be narrated as materially complete.

---

## Ledger-to-Narrative Consistency Rule

The prose summary must not claim more than the ledger proves.

This means the output must not include statements such as:

- `all load-bearing specialists materially succeeded`
- `specialist execution fully succeeded`
- `experience-direction fully completed with all required specialists`
- `all materially required specialists were successfully executed`

unless the ledger literally supports that statement.

If one load-bearing specialist is `partial / behavioral`, then any sentence implying universal material success is invalid.

If one load-bearing specialist failed or was unavailable, then any sentence implying complete specialist-backed synthesis is invalid.

The narrative must be downgraded to match the ledger.

---

## Forbidden Contradiction Rule

The following combinations are explicitly invalid and must never appear together in the same output:

- ledger contains `partial / behavioral` for any materially required load-bearing specialist
- and `Completion Strength = fully complete`

- ledger contains `failed` or `unavailable` for any materially required load-bearing specialist
- and `Completion Strength = materially degraded` or `fully complete`

- ledger shows a materially required load-bearing specialist was not invoked
- and the output still claims full specialist-backed completion

- the bounded pass explicitly states that the synthesis was based on research, context, or general reasoning in place of runtime-backed specialist execution
- and the output still claims `materially succeeded` or `fully complete` for the affected load-bearing specialists

If any such contradiction would occur, this skill must correct the completion classification downward before closing the pass.

---

## Load-Bearing Summary Rule

When summarizing specialist outcomes, the skill must separate:

- all materially required specialists
- all materially required load-bearing specialists
- all supporting specialists
- all non-blocking specialists

This skill must not produce a flattened summary that hides load-bearing partiality inside a broader success narrative.

A correct summary should be able to say things like:

- `Most specialists materially succeeded, but one load-bearing specialist was only partial, so the pass is materially degraded.`
- `All required specialists materially succeeded; the pass is fully complete.`
- `A required load-bearing specialist failed, so the pass remains blocked.`

Those are valid.

A summary like:
- `All load-bearing specialists materially succeeded`
when the ledger contradicts it is invalid.

---

## Completion Strength Output Check

Before finalizing the bounded pass, this skill must perform an explicit internal check:

1. Read the final specialist resolution ledger
2. Is any materially required load-bearing specialist `failed`, `unavailable`, unresolved, or not invoked?
   - If yes → `still blocked`
3. Else, is any materially required load-bearing specialist `partial / behavioral`?
   - If yes → `materially degraded`
4. Else
   - `fully complete`

This check is mandatory.

It must happen before:

- artifact finalization wording
- state closure wording
- final completion messaging

---

## Experience Artifact Consistency Rule

If this skill creates or updates a durable `Experience` artifact, the artifact body must use the same completion classification that the ledger requires.

The artifact must not say:

- `fully complete`
- `all load-bearing specialists materially succeeded`

if the ledger only supports:

- `materially degraded`

or

- `still blocked`

The artifact is not exempt from ledger discipline.

---

## State Closure Consistency Rule

If `PROJECT_STATE.md` is updated after this step, the state closure must also reflect the ledger-derived completion result.

Examples:

- if the pass is `materially degraded`, state notes and success condition must not imply clean full completion
- if the pass is `still blocked`, `Next Allowed Action` must not read like the project can safely move downstream as though experience-direction fully passed

State closure must not launder specialist partiality into clean progression language.

If the pass is `materially degraded`, the state should normally make that degraded status visible rather than only implying clean readiness.

---

## Final Enforcement Rule

For this skill, the specialist resolution ledger is not decorative reporting.

It is the authoritative control surface for:

- completion strength
- closure wording
- artifact wording
- state wording
- next-step honesty

If the ledger and the conclusion disagree, the ledger wins.

---

## Hard Rule Against Silent Fallback

This skill must not silently replace materially required specialist contribution with generic model synthesis while still narrating the pass as if specialist-backed synthesis occurred.

If a materially required specialist cannot be:

- resolved through the registry
- invoked through the expected runtime bridge
- or executed with at least partial usable output

then this skill must do one of the following explicitly:

1. **Block the pass**
2. **Degrade the synthesis claim and mark the pass incomplete or conservatively partial**

It must never:

- continue with strong confidence language
- present generic synthesis as if it were specialist-backed
- hide missing specialist execution behind broad design commentary
- mark experience-direction as materially complete when a load-bearing specialist failed without consequence

---

## Automatic Blocking Rule for Load-Bearing Specialist Failure

The following rule applies automatically.

If a **load-bearing** specialist is materially required for the bounded pass and its execution outcome is:

- `failed`
- `unavailable`

or if:

- registry resolution failed
- invocation was not actually attempted
- runtime execution did not actually occur
- the skill cannot honestly classify the result as at least `partial / behavioral`

then the pass must default to:

**Output Mode A — Experience Direction Continues / Still Blocked**

unless there is a very strong and explicitly stated reason why the missing specialist only degrades rather than blocks the pass.

The default is not optimism.

The default is blocking for load-bearing failure.

---

## Automatic Degradation Rule for Load-Bearing Partial Execution

If a load-bearing specialist is materially required and its best honest execution outcome is:

- `partial / behavioral`

then the pass must not be classified as `fully complete`.

The pass must be classified as:

- `materially degraded`

unless every load-bearing specialist materially succeeded and the bounded synthesis is otherwise honest.

This rule exists to prevent “good enough sounding” synthesis from being misclassified as strong specialist-backed direction.

---

## Consequence Rule for Required Specialist Failure

If a materially required specialist:

- fails
- is unavailable
- is not registry-resolved
- or cannot be honestly invoked

then this skill must apply an explicit consequence.

### Consequence options

#### A. Blocking consequence
Use when the missing specialist is load-bearing enough that honest synthesis cannot continue.

Examples:
- `design-system` failed on a digital surface where shared-system direction is materially required
- `ui` failed on a surface where screen-level application quality is a central part of the bounded pass
- `information-architecture` failed on a structurally ambiguous surface
- `page-strategy` failed on a progression-sensitive page
- `motion` failed on a motion-sensitive premium surface where stillness vs movement is materially load-bearing

In this case:
- the pass must be reported as still blocked or operationally incomplete
- downstream closure must not be narrated as materially complete

#### B. Degraded consequence
Use when the missing specialist does not completely block the pass, but materially weakens confidence, completeness, or downstream reliability.

In this case:
- the pass must be explicitly downgraded
- the synthesis must be labeled conservatively
- the output must clearly state what remains weak because of the missing specialist
- the next move must reflect that degradation honestly

### Rule

Required specialist failure must always have a visible consequence.

Silent resilience is not valid here.

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
4. the specialist resolution ledger
5. the synthesized direction
6. whether a durable `Experience` artifact is required and whether it was created
7. the correct next allowed governed move
8. a clear stop without executing that next move inline

If any materially required specialist only partially succeeded, failed, or was unavailable, the output must state whether the pass is:

- fully complete
- materially degraded
- or still blocked

---

## Completion Strength Rule

This skill may use only the following completion strength classifications:

- `fully complete`
- `materially degraded`
- `still blocked`

### `fully complete`
Allowed only when all load-bearing specialists that were materially required:

- were registry-resolved
- were actually invoked
- and materially succeeded

### `materially degraded`
Required when one or more materially required load-bearing specialists only reached:

- `partial / behavioral`

and the bounded synthesis is still honest enough to continue.

### `still blocked`
Required when one or more materially required load-bearing specialists:

- failed
- were unavailable
- were not invoked honestly
- were not registry-resolved
- or left the bounded pass unable to claim safe specialist-backed synthesis

This skill must not use `fully complete` merely because the resulting prose sounds usable.

---

## Canonical Output Shape

When this skill materially succeeds, the output should normally make explicit:

- Governing Workflow: experience-direction
- Bounded Step: define-experience-direction
- Surface Focus: [what needed direction]
- Material Specialists Required: [list]
- Specialists Actually Used: [list + honest outcome]
- Specialist Resolution Ledger: [full bounded ledger]
- Shared System Direction: [bounded synthesis]
- Structural / IA Direction: [bounded synthesis or not materially needed]
- Motion Stance: [use restrained | unnecessary | still open]
- Experience Artifact: [required and created | not required for this pass | blocked]
- Completion Strength: [fully complete | materially degraded | still blocked]
- Downstream Consequence: [what later work must now reflect]
- Next Allowed Step: [single bounded governed move]
- Stop: yes

For web/desktop user-facing products, the output should not omit explicit treatment of `design-system` evaluation.

The output must not use:
- implied
- implicit
- assumed

as substitutes for real execution outcomes for load-bearing specialists.

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
- record the failure in the specialist resolution ledger
- apply an explicit blocking or degrading consequence
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

If registry resolution succeeds but runtime invocation fails for a materially required specialist:

- do not treat registry success as specialist success
- do not let generic synthesis erase the failure
- explicitly state the loss of specialist-backed authority
- block or degrade the pass according to the consequence rule

If a load-bearing specialist was merely considered, inferred, or implicitly echoed through generic synthesis:

- do not classify that as specialist execution
- do not use that specialist to justify a strong completion claim
- block or degrade the pass according to the load-bearing rules above

If a specialist was only registry-resolved, had its file read, or had some of its likely guidance echoed through generic synthesis, but was not actually invoked through the expected runtime path, that specialist must not be reported as `partial / behavioral`.

That situation must be classified more conservatively according to the real execution facts.

If the bounded pass explicitly depends on research, context, or general reasoning in place of actual runtime-backed specialist execution, the skill must say so honestly and downgrade the affected specialist outcomes accordingly.

---

## Final Rule

A correct `define-experience-direction` must answer, in bounded synthesized form:

- what part of the surface needed direction?
- which experience specialists were materially relevant?
- which specialists were actually resolved and executed successfully?
- which specialists were only partial, failed, or unavailable?
- what reusable experience direction now exists?
- whether a durable `Experience` artifact is required?
- what is the single next allowed governed move?

It must then stop.

It must not turn experience-direction into review theater, implementation planning, or aesthetic improvisation without durable downstream value.

It must not allow load-bearing specialists to disappear into implied or implicit synthesis while still claiming strong completion.