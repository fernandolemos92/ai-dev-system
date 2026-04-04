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

---

## Agent Consideration Rule

This skill remains skill-driven and discovery-only.

However, when the user explicitly cites an external benchmark, competitor, or market reference that could materially improve contextual understanding, this skill should consciously evaluate whether auxiliary specialist support would help.

Typical examples include:

- competitor benchmarking
- market comparison
- feature interpretation based on a named product
- understanding what a cited player likely represents

When such a case appears, this skill should either:

- explicitly note that auxiliary `research` support could help contextual grounding, or
- explicitly decide that current discovery can proceed without it

This skill must not invoke agents decoratively.

But it also must not ignore obviously useful specialist support without any evaluation.

---

## Canonical Agent Resolution Rule

When this skill determines that auxiliary `research` support would materially improve contextual grounding, it must not assume that `research` is natively invocable by the current runtime.

Instead, it must treat `research` as a **canonical project agent** and resolve it through:

1. `system/agents/registry.yaml`
2. `system/runtime/AGENT_RESOLUTION.md`
3. `system/runtime/AGENT_INVOCATION.md`

This skill must distinguish clearly between:

- canonical project agent: `research`
- runtime-supported invocation type resolved for the current environment

It must not attempt direct invocation of `research` as a native runtime type unless that support is explicitly real in the current environment.

If agent resolution or invocation remains only documentary / behavioral, this skill must not overclaim operational runtime invocation.

It must remain honest about whether `research` was:

- natively invoked
- adaptively invoked through a runtime-supported path
- applied only behaviorally / documentarily

---

## Research Support Boundary

If this skill uses auxiliary `research` support, that support remains subordinate to discovery.

`research` may help with:

- understanding a cited benchmark at a high level
- clarifying likely market positioning
- identifying plausible interpretation ranges for a referenced product
- distinguishing direct evidence from inference when external references are involved

`research` must not be used here to:

- define architecture
- recommend stack
- generate PRD content
- convert benchmark familiarity into assumed scope closure
- replace missing user clarification with speculative product design
- perform decorative competitor analysis with no effect on the current blocking gap

This skill must only use `research` when it materially helps reduce the actual blocking contextual uncertainty.

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

If auxiliary `research` support was used, benchmark-derived insight must not be treated as contextual closure unless it was either:

- directly evidenced and relevant to the blocking gap, or
- explicitly confirmed by the user when confirmation is still needed

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

If auxiliary `research` resolution fails:

- do not pretend `research` was used operationally
- continue discovery without false invocation claims
- use a plain bounded clarification path instead
- keep the failure local to specialist support rather than derailing the whole skill

If auxiliary `research` invocation remains only documentary / behavioral:

- do not present it as operational runtime invocation
- do not overclaim adapter success
- use only the grounded portions of that support
- preserve clear separation between direct evidence, inference, and remaining unknowns

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

If auxiliary `research` support was used in this mode, the output should remain honest about whether that support was:

- adapted operationally invoked
- or applied only behaviorally / documentarily

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