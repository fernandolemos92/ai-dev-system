---
name: discover-missing-context
description: Detect and close contextual gaps during the context phase so the system only advances to PRD when minimum contextual readiness is truly established.
---

# SKILL: discover-missing-context

## Purpose

Detect when project context is still too weak, vague, or incomplete for safe PRD creation.

This skill exists to:

- identify the real contextual gaps that block safe progression
- clarify the missing information that actually matters
- improve the quality of the input during the `context` phase
- keep discovery bounded until PRD becomes justifiable
- explicitly determine when structured upstream workflow-domain work is still required before PRD readiness may be declared

This is the canonical skill for controlled contextual discovery.

It exists to understand the problem space more clearly, not to design the solution.

---

## When To Use

Use this skill when:

- the system is still in the `context` phase
- context is too vague or incomplete for safe PRD work
- advancing would require guessing important facts
- the request is high-level, conceptual, or structurally ambiguous
- core contextual elements are still missing or unstable

Typical triggers include:

- unclear problem definition
- unclear actor
- missing primary workflow
- missing system boundary
- unclear desired outcome
- unclear relevant constraints or priorities

---

## When Not To Use

Do not use this skill when:

- context is already sufficiently stable for PRD work
- a PRD already exists and only needs refinement
- the work is already operating in `validation`, `tasks`, `handoff`, `implementation`, or `review`
- the current need is solution refinement rather than contextual discovery

This skill does not replace `define-prd`, and it does not replace session routing handled by `/start`.

---

## Discovery-Only Boundary

This skill operates strictly in discovery-only mode.

It may:

- clarify ambiguity
- collect missing context
- narrow uncertainty
- improve contextual signal
- evaluate whether bounded optional-domain support is materially needed before PRD readiness

It must not:

- generate a PRD
- draft PRD sections or headings
- define MVP phases
- prioritize solution scope beyond contextual clarification
- design the solution
- define architecture
- propose implementation approaches
- recommend a tech stack
- suggest setup steps
- decompose work into tasks
- create validation artifacts
- create a handoff
- produce code or pseudo-code
- offer templates, scaffolds, or starter code

The goal is to understand what the system needs to know before PRD, not to decide how the solution should be built.

---

## Hard Stop for New Project Blocked-Ready Moment

For `New Project`, once foundational context becomes sufficiently clear, this skill must not slide into product refinement or downstream planning behavior.

When foundational context is clear but structured research is still required, this skill must stop at that governed diagnosis.

In that situation, it must not continue into content such as:

- MVP refinement
- scope cutting
- feature prioritization beyond contextual clarification
- product suggestions framed as downstream planning
- database modeling
- backend planning
- frontend planning
- implementation planning
- PRD drafting

A correct blocked-ready outcome for `New Project` is:

- foundational context is sufficiently clear
- structured research is required now
- PRD readiness remains blocked
- the next allowed move is the structured research step inside the governing workflow
- stop

This rule exists to prevent the skill from acting helpfully in ways that silently violate workflow discipline.

---

## Context Insufficiency Criteria

A context gap exists when one or more of the following are materially unclear, missing, contradictory, or too generic to support safe PRD work:

- the real problem
- the main actor
- the desired outcome
- the primary workflow
- the system boundary
- a relevant constraint or priority

High-level labels are not enough.

Answers such as:

- "performance"
- "security"
- "user experience"
- "dashboard"
- "login"
- "API"

must be treated as insufficient unless they are grounded in a real usage situation.

Configuration details are also not enough on their own.

Examples of insufficient signal by themselves include:

- platform choice
- feature list
- integrations
- delivery format
- data frequency

These details may matter later, but they do not replace contextual understanding.

A feature list must not be treated as contextual readiness by itself.

Examples such as:

- banner
- login
- dashboard
- delivery
- checkout
- upload
- search
- notification

do not, by themselves, establish:

- the real problem
- the primary workflow
- the system boundary
- the real actor outcome

This skill must actively distinguish between:

- what the user explicitly stated
- what is still unknown
- what would require inference

Unknown facts must remain unknown until clarified.

When the product has both a paying customer and a distinct primary end-user experience, this skill must not collapse those roles into a single actor label unless the user explicitly framed them that way.

---

## Minimum Contextual Readiness for PRD

PRD is justified only when all of the following are sufficiently clear at a high level:

- the core problem is explicitly understood
- the main actor is identified
- the desired outcome is clear
- the primary workflow is described in a meaningful end-to-end way
- the system boundary is understood at a high level
- at least one relevant constraint or priority is known

If any of these elements is still materially missing or unstable:

- remain in discovery
- do not generate PRD

Heuristic confidence does not override this boundary.

If all of these elements become sufficiently clear, this skill must still evaluate whether remaining blocking uncertainty is now materially domain-shaped rather than generic-question shaped.

That evaluation must be explicit.

This skill must not declare readiness merely because foundational context is present if remaining blocking uncertainty still materially depends on:

- benchmark grounding
- market expectation
- trust signals
- experience direction
- interaction tone
- likely UX interpretation of a cited product type or competitor set

When those uncertainties materially affect safe PRD definition, they must be consciously evaluated rather than silently bypassed.

If they are not materially relevant, that conclusion should also be explicit.

If readiness is justified after this evaluation:

- confirm contextual readiness
- identify the correct next allowed step according to workflow reality
- stop

This skill must not generate PRD content inline after readiness is reached.

---

## Workflow-Domain Requirement Rule

This skill may identify when workflow-domain work is materially required for safe contextual maturity.

However, this skill must not attempt to compensate for missing workflow traversal by improvising that traversal inline.

Its role here is to determine whether upstream workflow-domain work is required, not to force downstream progression or collapse workflow boundaries.

When this skill concludes that structured-research, experience-direction, or growth-strategy is required, it must stop with that governed diagnosis.

It must not:

- narrate downstream specialist participation as if already scheduled or guaranteed
- imply that registry resolution or runtime execution has already occurred
- present future specialist use as completed, pending execution, or materially underway inside the current step

---

## New Project Readiness Rule

For `New Project`, foundational contextual clarity is not enough by itself to declare PRD readiness.

Even when the core problem, actor, outcome, flow, boundary, and constraints are sufficiently clear, this skill must keep readiness blocked until the required structured research pass has materially completed inside the governing workflow.

Accordingly, for `New Project` this skill must distinguish clearly between:

- context clear enough to make research bounded and meaningful
- research materially completed
- PRD actually ready

These are different moments.

A correct outcome for `New Project` will often be:

- foundational context clear
- structured research required now
- PRD readiness still blocked

This skill must not name `define-prd` as the next allowed skill for `New Project` when the required research pass has not yet materially completed.

---

## Experience and Strategy Evaluation Rule

For user-facing products, once foundational context is sufficiently clear this skill must explicitly evaluate whether the remaining blocker is materially shaped by:

- experience direction
- growth / strategy direction
- both
- neither

Relevant `experience` signals include:

- trust-sensitive interaction
- interface clarity
- information architecture
- page or surface structure
- design tone
- motion tone
- design system or interaction coherence

Relevant `strategy` signals include:

- positioning
- messaging
- CTA clarity
- discoverability
- funnel logic
- SEO / CRO significance
- analytics significance

This skill does not itself traverse those domains.

It must, however, make their materiality explicit rather than silently leaving them out of the readiness decision.

A correct contextual diagnosis for a user-facing product should be able to state, honestly:

- `experience` materially required now
- `strategy` materially required now
- one of them can safely wait
- neither is materially blocking right now

Silent omission is not valid evaluation.

---

## Conservative Readiness Rule

This skill must behave conservatively.

If there is reasonable doubt about whether workflow or boundary are truly established:

- do not declare contextual readiness
- remain in discovery
- ask the smallest next clarification needed

This skill must prefer one more bounded clarification step over premature readiness.

It must not convert familiarity with a common product pattern into assumed readiness.

Recognizing a known pattern such as:

- marketplace
- dashboard
- menu
- booking flow
- chatbot
- admin panel

does not mean the actual context is sufficiently clear for PRD.

If the unresolved uncertainty is no longer mainly about raw problem definition, actor, or boundary, but instead about:

- what the market teaches users to expect
- what benchmark references actually imply
- what trust profile matters
- what direction of experience is likely appropriate
- what positioning or funnel logic materially shapes the product

this skill should not default to repeated generic questioning if bounded workflow-domain support would clarify the gap more safely.

For user-facing products with benchmark uncertainty and experience-direction uncertainty still open, this skill should normally treat those as coupled blockers unless there is a clear grounded reason not to.

---

## Gap Assessment

When a contextual gap is detected, this skill should identify the real blocking gap as clearly as possible.

Useful gap labels include:

- Problem Gap
- Actor Gap
- Outcome Gap
- Flow Gap
- Boundary Gap
- Constraint Gap
- Benchmark Grounding Gap
- Market Expectation Gap
- Trust Signal Gap
- Experience Direction Gap
- Strategy Direction Gap

The purpose of gap assessment is to keep discovery focused.

It must not turn into a broad diagnostic framework or a later-stage planning exercise.

When multiple gaps exist, this skill should identify:

- the blocking gap that most prevents safe PRD work
- any tightly coupled secondary gaps that must be clarified together

It must not pretend that all gaps are resolved just because some are partially known.

When foundational context is already sufficiently clear, this skill should explicitly identify whether the remaining blocking gap is now primarily generic-clarification shaped or workflow-domain shaped.

If it is workflow-domain shaped, the skill should prefer bounded workflow-domain support over further generic questioning when that is the safer next move.

---

## Benchmark and External Reference Handling

When the user cites a market player, competitor, benchmark, or inspiration source such as:

- "like X"
- "inspired by Y"
- "similar to Z"

this skill must treat that reference as contextual signal, not as full contextual closure.

A benchmark reference may clarify:

- quality bar
- interaction expectations
- perceived sophistication
- market positioning

But it does not automatically establish:

- the actual workflow
- the actual boundary
- the actual feature interpretation
- the actual scope

This skill must not convert a benchmark mention into assumed product structure.

If benchmark references remain materially important after the core problem, actor, and high-level flow are already sufficiently clear, this should be treated as a strong signal that bounded `research` support is now likely warranted.

If the product is user-facing and benchmark references also materially shape trust, scanning, or experience expectations, this should also be treated as a strong signal that bounded `experience` evaluation is likely warranted alongside `research`.

If the product is acquisition-sensitive, conversion-sensitive, or message-sensitive, this should also raise explicit `strategy` evaluation.

The absence of user insistence should not be treated as proof that the benchmark gap is unimportant when it materially affects safe PRD framing.

---

## Workflow-Domain Requirement Rule

This skill may identify when workflow-domain work is materially required for safe contextual maturity.

However, this skill must not attempt to compensate for missing workflow traversal by improvising that traversal inline.

Its role here is to determine whether upstream workflow-domain work is required, not to force downstream progression or collapse workflow boundaries.

Accordingly, a correct outcome should be explicit and conservative, for example:

- structured research is required before PRD
- experience-direction should be traversed before later progression
- growth-strategy should be traversed before later progression
- no materially blocking workflow-domain work remains

When such upstream work is required, this skill should stop with a governed diagnosis rather than treating that requirement as permission to improvise the next macro step inline.

---

## Canonical Agent Resolution Rule

This skill must preserve the distinction between:

- canonical project agents
- skills
- governing workflows
- runtime-supported execution paths

It must not confuse canonical project agents with skills or macro stages.

It must not treat workflow-domain requirement as permission to jump directly into downstream skill hopping.

If materially required upstream workflow work has not yet been safely materialized through the governing workflow, this skill must stop and report that requirement explicitly.

This skill may name the required upstream workflow-domain work.

It must not continue as though that work had already been successfully traversed when it has not.

---

## Structured Research Boundary

When this skill determines that `research` is materially required, that requirement remains subordinate to the governing workflow.

This skill does not itself perform the full structured research traversal.

Its role is to determine that structured research is still required before PRD readiness.

Accordingly, this skill may state that:

- structured research is now the required next governed move inside the active workflow
- PRD readiness remains blocked until that work materially completes
- foundational context is already clear enough to make that research bounded and meaningful

This skill must not treat the mere recognition of research need as equivalent to completed research traversal.

---

## Discovery Approach

This skill should collect only the information needed to close the current blocking gaps.

Use a focused clarification approach when the gap is narrow and isolated.

Use a grouped clarification approach when multiple core context elements are missing and depend on one another for meaning.

In all cases, discovery should remain:

- bounded
- relevant
- low-friction
- proportional to the uncertainty

This skill must avoid encyclopedic collection.

It should not ask for every possible detail up front.

It should ask only what is needed to make the next contextual decision safer.

After each clarification step, this skill must re-check whether minimum contextual readiness has actually been achieved.

When foundational context is in place and the remaining uncertainty is workflow-domain shaped, the discovery approach should shift from repeated generic clarification toward bounded workflow-domain support plus targeted follow-up questions.

For user-facing products, if market grounding, experience direction, and strategy direction remain materially open, the discovery approach should prefer explicit evaluation of those domains before PRD readiness is considered.

---

## Clarification Priorities

When multiple context elements are still weak, this skill should prefer clarification in this order:

1. real problem
2. main actor
3. desired outcome
4. primary workflow
5. system boundary
6. relevant constraint or priority

This is a priority guide, not a rigid script.

If workflow and boundary are the main unresolved blockers, they may be asked together.

If the user already gave one element clearly, do not ask it again.

After the core problem, actor, and primary workflow are sufficiently clear, the next priority may shift toward bounded workflow-domain evaluation if the remaining blockers are mainly about:

- competitor understanding
- market expectation
- trust signals
- experience direction
- strategy direction

For user-facing products, if these blockers span multiple materially relevant domains, this skill should prefer surfacing them explicitly before readiness is declared.

---

## Interaction Style

When the environment supports guided interaction well, this skill must prefer AskUserQuestion-style structured questioning to reduce user effort and improve clarity.

Preferred interaction style:

- use AskUserQuestion as the default guided interaction mode
- keep questions concise
- prefer selection-based guidance when it improves speed and comprehension
- allow short free-text only when needed
- group related contextual questions when that reduces friction
- avoid turning discovery into a large or exhausting questionnaire

AskUserQuestion is a usability aid, not the purpose of the skill.

This skill should use structured interaction to improve contextual clarity, not to create interface overhead.

When using AskUserQuestion with selectable options, the structured payload must follow the exact runtime schema expected by the environment.

This skill must not guess option schema.

If schema certainty is not high, this skill must prefer a plain-text guided question block over a speculative structured payload.

If AskUserQuestion is unavailable, fails, or does not visibly render, this skill must fall back to a concise plain-text guided question block.

The fallback must still remain:

- structured
- bounded
- low-friction
- focused only on the current blocking gaps

The fallback should usually ask no more than:

- one question when there is one dominant blocking gap
- up to three tightly grouped questions when multiple coupled gaps must be clarified together

Workflow-domain support should not replace this interaction style, but it may reduce the number of generic questions needed when the remaining uncertainty is better answered through bounded research, experience, or strategy work.

---

## Anti-Premature Progression

This skill must actively prevent premature movement toward PRD or solutioning.

It must not:

- treat a vague idea as sufficient context
- treat a feature request as a complete problem definition
- treat configuration details as contextual readiness
- treat partial answers as authorization to design the solution
- infer that recognition of a familiar pattern means discovery is complete
- jump from near-readiness into PRD drafting
- mix discovery with MVP planning, solution framing, architecture, implementation setup, or coding
- simulate the behavior of `define-prd`
- invoke `define-prd` inline after declaring readiness
- continue into any downstream macro stage in the same turn after contextual readiness is established
- treat identification of workflow-domain need as equivalent to completed workflow traversal
- attempt to compensate for missing upstream workflow work by jumping across downstream skills
- treat required structured research as if it had already happened merely because the need was recognized
- move from foundational-context clarity into MVP refinement, scope cutting, product suggestions, database modeling, backend planning, frontend planning, or implementation planning when `structured research` is still the real next governed move

After each clarification step, the skill must re-check whether minimum contextual readiness has actually been achieved.

Discovery completion must be earned through clarity, not assumed through momentum.

If readiness is not achieved:

- remain in discovery
- ask only the next best clarification step

If readiness is achieved:

- declare readiness concisely
- name the correct next allowed step according to workflow reality
- stop without generating PRD content inline
- return control cleanly to the user without calling the downstream skill in the same turn

This skill must not declare readiness merely because the core problem, actor, and flow are clear if a still-material blocking gap remains around:

- benchmark grounding
- market expectation
- trust profile
- experience direction
- strategy direction

and materially relevant workflow-domain support has not yet been explicitly evaluated.

For user-facing products, if benchmark grounding and experience direction are both still materially relevant and only one has been explored, this skill should normally keep readiness unconfirmed.

---

## Readiness Decision Discipline

Before declaring `Context Ready for PRD`, this skill must be able to state, in grounded form:

- what the real problem is
- who the main actor is
- what successful outcome matters for that actor
- what the main end-to-end workflow is
- what the system is and is not at a high level
- which relevant constraint or priority is known

If one or more of those would still need guessing, assumption, or pattern completion:

- do not declare readiness

The skill must not treat its own inferred interpretation as if the user had already confirmed it.

If workflow-domain support was used, workflow-derived insight must not be treated as contextual closure unless it was either:

- directly evidenced and relevant to the blocking gap, or
- explicitly confirmed by the user when confirmation is still needed

If the remaining uncertainty is materially about benchmark meaning, market expectation, trust profile, experience direction, or strategy direction, this skill should not declare readiness without first explicitly evaluating whether bounded `research`, `experience`, and/or `strategy` work is needed.

If such support is clearly relevant and has not yet been attempted, readiness should normally remain unconfirmed.

For `New Project`, if structured research has not yet been materially completed, readiness must remain unconfirmed even when foundational context is clear.

When the product has a distinct buyer and a distinct primary end-user experience, the readiness summary must preserve that distinction instead of flattening both roles into a single actor statement.

A correct grounded summary in those cases should make clear, at minimum:

- who buys or adopts the product
- who is the primary user of the experience being optimized

The readiness decision should also be able to state, explicitly, one of the following:

- foundational context is still incomplete
- foundational context is clear, but structured research is still required before PRD
- foundational context is clear, but experience-direction is still materially required before later progression
- foundational context is clear, but growth-strategy is still materially required before later progression
- foundational context is clear, required upstream workflow work has materially completed, and PRD readiness is now established

---

## Boundaries

This skill must not:

- perform session objective routing that belongs to `/start`
- behave like system governance
- behave like live project state
- generate a PRD
- draft PRD sections, headings, or structure
- define MVP phases
- design the solution
- define architecture
- recommend a stack
- suggest technical setup steps
- decompose tasks
- produce implementation instructions
- generate code
- offer starter templates or scaffolds
- move the system into later-stage outputs prematurely
- call downstream macro-stage skills inline after declaring readiness

Its role is limited to:

- detecting contextual insufficiency
- identifying blocking gaps
- clarifying relevant missing context
- improving readiness for later PRD work
- declaring readiness when the minimum threshold is actually met

This includes deciding when bounded workflow-domain support is the right next move inside discovery.

It does not include surrendering workflow control to that domain.

---

## Failure Handling

If user input is vague, contradictory, weak, or low-signal:

- do not treat it as sufficient context
- do not compensate by guessing
- do not drift into solutioning
- continue discovery with a more focused clarification

If the context remains incomplete after a clarification step:

- stay in discovery
- surface the remaining blocking gap clearly
- ask only the next relevant question or grouped set of questions

If AskUserQuestion is unavailable, fails, or does not visibly render:

- fall back to a concise plain-text guided question block
- preserve only the questions needed for the current blocking gaps
- avoid broad questionnaires
- stop after presenting the fallback question block

If AskUserQuestion returns a schema, validation, or runtime interaction error:

- treat the guided interaction attempt as failed
- do not treat the failed attempt as successful clarification
- fall back immediately to a concise plain-text guided question block
- preserve only the questions needed for the current blocking gaps
- stop after presenting the fallback question block

If guided interaction fails and the fallback question block is presented, this skill must wait for the user answer before performing another readiness decision.

It must not continue as though the failed guided interaction had already produced a valid clarification step.

If workflow-domain support remains only documentary / behavioral:

- do not present it as operational traversal
- do not overclaim workflow completion
- use only the grounded portions of that support
- preserve clear separation between direct evidence, inference, and remaining unknowns

If workflow-domain support was materially appropriate but could not be traversed, the skill should continue discovery honestly and treat the unresolved benchmark / trust / experience / strategy gap as still open unless it can be closed safely through user clarification alone.

If minimum contextual readiness is reached:

- do not continue into PRD drafting
- do not continue into MVP planning
- do not continue into architecture or implementation suggestions
- report the correct readiness diagnosis
- identify the next allowed step according to workflow reality
- stop

Safe discovery is preferred over premature progression.

---

## Output Contract

This skill does not create artifacts.

It has only two valid non-error output modes.

### Output Mode A — Discovery Continues

Use this when one or more contextual gaps still block safe PRD creation.

A correct output in this mode must include:

1. a short context gap assessment
2. the real blocking gap or gaps
3. the next clarifying question or grouped guided question block
4. a clear indication that discovery continues

The assessment must distinguish between:

- confirmed context
- unresolved context
- context that would still require inference

If workflow-domain support was materially relevant but has not yet been attempted, the output should make that need visible rather than silently continuing as though generic questioning were still the only reasonable path.

When foundational context is already clear but structured upstream workflow work is still required, this mode must make that blocked-ready state explicit.

For `New Project`, this should normally mean stating that structured research is now required before PRD readiness.

### Output Mode B — Context Ready for Next Governed Step

Use this only when minimum contextual readiness is actually established for the correct next governed move.

A correct output in this mode must include:

1. a concise readiness confirmation
2. a short summary of why that readiness is sufficient
3. identification of the correct next allowed skill or workflow move
4. a clear stop that returns control without executing that next move inline

When the next allowed move is a workflow-domain traversal such as structured-research, experience-direction, or growth-strategy, this skill must present that move only as the next allowed governed step.

It must not describe that downstream traversal as already started, already routed, or already invoking specialists.

It must not use wording such as:

- "routing to"
- "now invoking"
- "these specialists will be invoked"

unless that downstream bounded step has actually begun in a later governed turn.

### Canonical Blocked-Ready Format for New Project

When the current situation is:

- `New Project`
- foundational context sufficiently clear
- structured research still required
- PRD readiness still blocked

the output must use an explicit blocked-ready diagnosis.

Recommended format:

- Foundational Context: sufficient
- PRD Readiness: blocked
- Blocking Reason: structured research required for New Project
- Experience Evaluation: [required now | can wait | not materially blocking now]
- Strategy Evaluation: [required now | can wait | not materially blocking now]
- Next Allowed Step: structured-research
- Stop: yes

This blocked-ready format is mandatory for the classic `New Project → context clear → research required now` situation.

In that situation, this skill must not replace the blocked-ready diagnosis with downstream helpfulness such as MVP refinement, product suggestions, database modeling, backend planning, frontend planning, or PRD-like structuring.

---

## Final Rule

A correct `discover-missing-context` must answer:

- what is still missing?
- why does it block safe PRD work?
- what is the next best clarification step or next required workflow-domain step?

When readiness is reached, it may answer:

- foundational context is established
- the correct next allowed move inside the governing workflow

It must not answer:

- how the solution should be designed
- how the system should be implemented
- how the work should be decomposed
- how the later workflow should be executed
- what the MVP phases should be
- which stack should be used
- how to set up the project
- whether to generate starter code

Its job is to close contextual gaps until the next governed move becomes genuinely justifiable, then stop and hand off the next step cleanly.

When structured research or other upstream workflow work is materially required, a correct next step is to stop with that requirement made explicit rather than improvising downstream progression.