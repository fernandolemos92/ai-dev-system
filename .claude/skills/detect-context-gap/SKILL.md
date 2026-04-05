---
name: detect-context-gap
description: Detect and close contextual gaps during the context phase so the system only advances to PRD when minimum contextual readiness is truly established.
---

# SKILL: detect-context-gap

## Purpose

Detect when project context is still too weak, vague, or incomplete for safe PRD creation.

This skill exists to:

- identify the real contextual gaps that block safe progression
- clarify the missing information that actually matters
- improve the quality of the input during the `context` phase
- keep discovery bounded until PRD becomes justifiable

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

This skill does not replace `create-or-update-prd`, and it does not replace session routing handled by `/start`.

---

## Discovery-Only Boundary

This skill operates strictly in discovery-only mode.

It may:

- clarify ambiguity
- collect missing context
- narrow uncertainty
- improve contextual signal

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

If all of these elements become sufficiently clear:

- confirm contextual readiness
- identify `create-or-update-prd` as the next allowed skill
- stop

This skill must not generate PRD content inline after readiness is reached.

Minimum contextual readiness alone does not justify skipping obviously relevant bounded specialist support.

If the remaining blocking uncertainty is materially about:

- market expectations
- benchmark grounding
- trust signals
- experience direction
- interaction tone
- likely UX interpretation of a cited product type or competitor set

this skill should prefer bounded auxiliary specialist support before declaring `Context Ready for PRD`, as long as the core problem, actor, and high-level flow are already sufficiently clear to make that specialist support meaningful.

For user-facing products, if the remaining blocking uncertainty materially depends on both:

- what the market teaches users to expect
- and what direction of experience is likely appropriate

this skill should normally prefer using both `research` and `design-direction` in bounded form before declaring readiness.

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

this skill should not default to repeated generic questioning if bounded specialist support would clarify the gap more safely.

For user-facing products with both benchmark uncertainty and experience-direction uncertainty still open, this skill should not treat one of those gaps as optional if both materially affect PRD safety.

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

The purpose of gap assessment is to keep discovery focused.

It must not turn into a broad diagnostic framework or a later-stage planning exercise.

When multiple gaps exist, this skill should identify:

- the blocking gap that most prevents safe PRD work
- any tightly coupled secondary gaps that must be clarified together

It must not pretend that all gaps are resolved just because some are partially known.

When the foundational context is already sufficiently clear, this skill should also identify whether the remaining blocking gap is now primarily:

- a benchmark grounding gap
- a market expectation gap
- a trust signal gap
- an experience direction gap

If so, the skill should evaluate bounded specialist support instead of continuing with generic clarification by default.

If the product is clearly user-facing and the remaining blockers span both market expectation and experience direction, this skill should treat those as a coupled gap set rather than prematurely choosing only one.

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

If benchmark references remain materially important after the core problem, actor, and high-level flow are already sufficiently clear, this should be treated as a strong signal that bounded `research` support may now be justified.

If the product is user-facing and benchmark references also materially shape trust, scanning, or experience expectations, this should also be treated as a signal that bounded `design-direction` may be justified alongside `research`.

---

## Agent Consideration Rule

This skill remains skill-driven and discovery-only.

However, when the user explicitly cites an external benchmark, competitor, or market reference that could materially improve contextual understanding, or when discovery would materially benefit from bounded specialist support, this skill should consciously evaluate whether auxiliary specialist support would help.

Typical examples include:

- competitor benchmarking
- market comparison
- feature interpretation based on a named product
- understanding what a cited player likely represents
- clarifying likely UI/UX direction at a discovery level when product type, trust profile, or interaction style is still ambiguous

When such a case appears, this skill should either:

- explicitly note that auxiliary specialist support could help contextual grounding, or
- explicitly decide that current discovery can proceed without it

This skill must not invoke agents decoratively.

But it also must not ignore obviously useful specialist support without any evaluation.

Once the following are sufficiently clear at a high level:

- the core problem
- the main actor
- the main workflow

and the remaining blocking uncertainty is materially about benchmark grounding, market expectation, trust profile, or experience direction, this skill should prefer bounded auxiliary specialist support over continued generic questioning.

In those cases, the preferred activation logic is:

- use `research` when the blocking uncertainty is mainly about competitors, market patterns, benchmark grounding, or what users have likely been taught to expect
- use `design-direction` when the blocking uncertainty is mainly about trust-sensitive UX direction, interaction tone, scanning behavior, interface direction, or anti-pattern risk
- use both, in bounded form, when benchmark grounding and experience direction are both materially blocking safe contextual closure

For user-facing products, if benchmark grounding and experience direction are both material to PRD safety, this skill should normally prefer invoking both rather than treating one as optional.

This preference exists to improve discovery quality before PRD, not to replace the skill as the main driver.

This evaluation must not depend on whether the specialist appears in an available skill list.

Auxiliary specialist support here must be treated as a canonical project agent question, not as a downstream skill availability question.

The absence of `research` or `design-direction` from a skill menu is not, by itself, a valid reason to skip canonical agent resolution.

---

## Canonical Agent Resolution Rule

When this skill determines that auxiliary specialist support would materially improve contextual grounding, it must not assume that a canonical project agent is natively invocable by the current runtime.

Instead, it must treat the needed specialist as a **canonical project agent** and resolve it through:

1. `system/agents/registry.yaml`
2. `system/runtime/AGENT_RESOLUTION.md`
3. `system/runtime/AGENT_INVOCATION.md`

This skill must distinguish clearly between:

- canonical project agent
- runtime-supported invocation type resolved for the current environment

It must not attempt direct invocation of a canonical project agent as a native runtime type unless that support is explicitly real in the current environment.

It must not substitute “available skill list” reasoning for canonical agent resolution.

A specialist may be unavailable as a skill while still being available as a canonical project agent resolved through registry and adapter logic.

If agent resolution or invocation remains only documentary / behavioral, this skill must not overclaim operational runtime invocation.

It must remain honest about whether the auxiliary specialist support was:

- natively invoked
- adaptively invoked through a runtime-supported path
- applied only behaviorally / documentarily

When specialist support is materially needed for the remaining blocking gap, this skill should prefer actually attempting canonical resolution and bounded invocation rather than merely mentioning that a specialist could help.

If both `research` and `design-direction` are materially relevant, this skill should normally attempt canonical resolution for both rather than only one.

---

## Research Support Boundary

If this skill uses auxiliary specialist support, that support remains subordinate to discovery.

Examples:

- `research` may help with understanding a cited benchmark at a high level
- `research` may help with clarifying likely market positioning
- `research` may help with identifying plausible interpretation ranges for a referenced product
- `research` may help with distinguishing direct evidence from inference when external references are involved
- `design-direction` may help with clarifying likely UI/UX direction at a discovery level
- `design-direction` may help with clarifying trust-sensitive interaction expectations
- `design-direction` may help with clarifying likely interface tone or anti-patterns to avoid when the product type is still ambiguous

Auxiliary specialist support must not be used here to:

- define architecture
- recommend stack
- generate PRD content
- convert benchmark familiarity into assumed scope closure
- replace missing user clarification with speculative product design
- perform decorative specialist analysis with no effect on the current blocking gap

This skill must only use auxiliary specialist support when it materially helps reduce the actual blocking contextual uncertainty.

If specialist support is used, the skill should continue to own the discovery state and integrate the bounded findings back into contextual clarification.

It must not hand over the session to the specialist as though the specialist were now the workflow controller.

When both `research` and `design-direction` are used, they should be treated as complementary inputs:

- `research` grounds the market and benchmark reality
- `design-direction` grounds the likely experience and trust direction

Neither alone should be treated as full contextual closure when both dimensions materially matter.

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

When the foundational context is in place and the remaining uncertainty is specialist-shaped, the discovery approach should shift from repeated generic clarification toward bounded specialist support plus targeted follow-up questions.

When the product is user-facing and both market expectation and experience direction remain materially open, the discovery approach should normally prefer a coupled `research` + `design-direction` pass before PRD readiness is considered.

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

After the core problem, actor, and primary workflow are sufficiently clear, the next priority may shift toward bounded specialist grounding if the remaining blockers are mainly about:

- competitor understanding
- market expectation
- trust signals
- experience direction

For user-facing products, if these blockers span both benchmark understanding and experience direction, this skill should normally prefer both specialist inputs before readiness is declared.

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

Specialist support should not replace this interaction style, but it may reduce the number of generic questions needed when the remaining uncertainty is better answered through bounded benchmark or design-direction input.

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
- simulate the behavior of `create-or-update-prd`
- invoke `create-or-update-prd` inline after declaring readiness
- continue into any downstream macro stage in the same turn after contextual readiness is established

After each clarification step, the skill must re-check whether minimum contextual readiness has actually been achieved.

Discovery completion must be earned through clarity, not assumed through momentum.

If readiness is not achieved:

- remain in discovery
- ask only the next best clarification step

If readiness is achieved:

- declare readiness concisely
- name `create-or-update-prd` as the next allowed skill
- stop without generating PRD content inline
- return control cleanly to the user without calling the downstream skill in the same turn

This skill must not declare readiness merely because the core problem, actor, and flow are clear if a still-material blocking gap remains around:

- benchmark grounding
- market expectation
- trust profile
- experience direction

and bounded specialist support has not yet been meaningfully evaluated or attempted.

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

If auxiliary specialist support was used, specialist-derived insight must not be treated as contextual closure unless it was either:

- directly evidenced and relevant to the blocking gap, or
- explicitly confirmed by the user when confirmation is still needed

If the remaining uncertainty is materially about benchmark meaning, market expectation, trust profile, or experience direction, this skill should not declare readiness without first evaluating whether bounded `research` and/or `design-direction` support is needed.

If such support is clearly relevant and has not yet been attempted, readiness should normally remain unconfirmed.

For user-facing products, if both market grounding and experience direction materially shape the safety of the PRD, this skill should normally prefer both `research` and `design-direction` before declaring readiness.

When the product has a distinct buyer and a distinct primary end-user experience, the readiness summary must preserve that distinction instead of flattening both roles into a single actor statement.

A correct grounded summary in those cases should make clear, at minimum:

- who buys or adopts the product
- who is the primary user of the experience being optimized

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

This includes deciding when bounded specialist support is the right next move inside discovery.

It does not include surrendering workflow control to the specialist.

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

If auxiliary specialist resolution fails:

- do not pretend auxiliary specialist support was used operationally
- continue discovery without false invocation claims
- use a plain bounded clarification path instead
- keep the failure local to specialist support rather than derailing the whole skill

If auxiliary specialist invocation remains only documentary / behavioral:

- do not present it as operational runtime invocation
- do not overclaim adapter success
- use only the grounded portions of that support
- preserve clear separation between direct evidence, inference, and remaining unknowns

If specialist support was materially appropriate but could not be invoked, the skill should continue discovery honestly and treat the unresolved benchmark / trust / experience-direction gap as still open unless it can be closed safely through user clarification alone.

If both `research` and `design-direction` were materially appropriate but only one could be invoked, the skill should normally keep contextual closure conservative rather than treating the single specialist as sufficient by default.

If minimum contextual readiness is reached:

- do not continue into PRD drafting
- do not continue into MVP planning
- do not continue into architecture or implementation suggestions
- report that contextual readiness is established
- identify `create-or-update-prd` as the next allowed skill
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

If auxiliary specialist support was used in this mode, the output should remain honest about whether that support was:

- adapted operationally invoked
- or applied only behaviorally / documentarily

If auxiliary specialist support was materially relevant but has not yet been attempted, the output should make that need visible rather than silently continuing as though generic questioning were still the only reasonable path.

For user-facing products, if both `research` and `design-direction` are materially relevant and only one has been attempted, the output should make the remaining specialist-shaped gap explicit.

### Output Mode B — Context Ready for PRD

Use this only when minimum contextual readiness is actually established.

A correct output in this mode must include:

1. a concise readiness confirmation
2. a short summary of why readiness is sufficient
3. identification of `create-or-update-prd` as the next allowed skill
4. a clear stop that returns control without drafting PRD inline

The readiness summary must be grounded in clarified context, not in unverified inference.

The output must stay focused on contextual understanding and readiness.

It must not drift into:

- PRD drafting
- MVP planning
- architecture definition
- technical stack recommendation
- setup instructions
- task decomposition
- implementation suggestions
- code or template offers
- downstream skill execution inline

This mode should not be used if materially relevant benchmark/trust/experience-direction gaps remain unresolved and bounded specialist support has not yet been meaningfully evaluated.

For user-facing products, this mode should not normally be used if both benchmark grounding and experience direction materially matter and only one of those has been explored.

If the product has a distinct buyer and a distinct primary end-user experience, the readiness summary should preserve both roles explicitly instead of collapsing them into a single actor label.

---

## Final Rule

A correct `detect-context-gap` must answer:

- what is still missing?
- why does it block safe PRD work?
- what is the next best clarification step?

When readiness is reached, it may answer:

- contextual readiness is established
- `create-or-update-prd` is the next allowed skill

It must not answer:

- how the solution should be designed
- how the system should be implemented
- how the work should be decomposed
- how the later workflow should be executed
- what the MVP phases should be
- which stack should be used
- how to set up the project
- whether to generate starter code

Its job is to close contextual gaps until PRD becomes genuinely justifiable, then stop and hand off the next step cleanly.

When benchmark grounding or experience direction is a material blocker after the foundational context is already clear, a correct next step may be bounded specialist support through `research` and/or `design-direction` before PRD readiness is declared.

For user-facing products, when market expectation and experience direction are both materially relevant to PRD safety, a correct next step will often be bounded support from both before closure.