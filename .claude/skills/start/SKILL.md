---
name: start
description: Initialize the governed workflow by loading core authority files in the correct order, interpreting current operational state, and exposing only valid next session objectives.
---

# SKILL: start

## Purpose

Initialize the governed session for this repository.

This skill exists to:

- load the core authority files in the correct order
- interpret the current operational state
- identify the valid session objectives for the current situation
- route the session to the next allowed governed workflow entry or bounded path

This skill is the operational entry point for new sessions and workflow resumptions.

For `New Project`, this skill must establish governing workflow entry before downstream bounded skill execution begins.

It does not perform product discovery, artifact generation, or implementation work.

---

## When To Use

Use this skill when:

- a new session begins
- work is being resumed after interruption
- the repository baseline has not yet been loaded in the current session
- the system needs to re-anchor the current governed workflow position

---

## When Not To Use

Do not use this skill when:

- governance, context, and state have already been loaded in the current session
- another skill is already actively handling the current governed step
- the system is already operating inside a known stage and does not need re-initialization

This skill must not be used as a general routing tool in the middle of active execution.

---

## Required Loading Order

This skill must load repository context in the following order:

1. `CLAUDE.md`
2. `project/PROJECT_CONTEXT.md`
3. `project/PROJECT_STATE.md`
4. the active artifact referenced by `PROJECT_STATE.md`, if one exists

This order is mandatory.

The skill must complete the required loading sequence before producing user-facing output, unless a required file is missing, malformed, or operationally inconsistent.

This skill must never stop after loading alone.

After the required loading sequence completes successfully, it must always produce a final user-facing output block.

---

## Loading Constraints

This system is optimized for low-context, deterministic execution.

Therefore this skill must:

- avoid scanning the full repository without need
- prioritize authority and operational files first
- read only the active artifact referenced by `PROJECT_STATE.md`, when applicable
- avoid loading unrelated files by default
- avoid loading templates, memory files, or specialization layers unless required by the next governed step

If no active artifact is referenced in `PROJECT_STATE.md`, no additional artifact loading is required.

---

## State Interpretation

After reading `project/PROJECT_STATE.md`, this skill must determine:

- Current Phase
- Overall Status
- Current Focus
- Execution Unlocked
- Next Expected Skill
- Active Research
- Active PRD
- Active Validation
- Active Experience
- Active Strategy
- Active Design Foundation
- Active Task
- Active Handoff
- whether a state/artifact inconsistency exists that prevents safe routing

`PROJECT_STATE.md` is the authoritative source of live operational coordination.

If conversation context conflicts with `PROJECT_STATE.md`, the state takes priority for routing purposes.

This skill must not invent missing operational facts.

This skill must summarize the operational state using canonical state fields and their real values.

It must not replace canonical state fields with inferred narrative substitutes such as:
- "repository baseline not yet loaded"
- "phase: context (empty)"
- other equivalent paraphrases that are not actual state fields

When `Next Expected Skill = start`, this must be treated as confirmation that initialization is the current valid entry action.

It must not create circular user-facing wording such as instructing the user to begin `/start` when `/start` is already the current running skill.

When `Current Phase = design`, this skill must treat that as a real governed phase rather than paraphrasing it away into generic wording such as “design work maybe pending.”

If `Active Design Foundation` exists, it must be reported as a real active artifact in the operational summary rather than being omitted or collapsed into `Active Experience`.

---

## State Classification Before Objective Exposure

Before exposing session objectives, this skill must classify the current state into one of the following routing situations:

1. **neutral empty governed start**
2. **structural/core maintenance state**
3. **active governed workflow state**
4. **later-stage resumable execution state**
5. **state/artifact inconsistency state**

This classification must be grounded in canonical state fields and real state text.

This classification step is mandatory.

### Neutral empty governed start

Treat the state as a neutral empty governed start only when all of the following are true:

- `Current Phase = context`
- `Execution Unlocked = no`
- `Active PRD = none`
- `Active Validation = none`
- `Active Design Foundation = none`
- `Active Task = none`
- `Active Handoff = none`

and the state does **not** indicate ongoing structural, governance, audit, stabilization, alignment, repair, migration, lifecycle cleanup, or other core-system work in fields such as:

- `Current Focus`
- `Primary Objective`
- `Next Allowed Action`
- `State Notes`

### Structural/core maintenance state

Treat the state as structural/core maintenance when:

- the system is still in `context`
- no workflow artifact is active
- and the state text clearly indicates that current work is about the system itself rather than about starting a new governed product workflow

Typical signals include wording such as:

- stabilization
- audit
- alignment
- governance work
- lifecycle cleanup
- repair
- migration
- core refactor follow-up
- template/state/governance consolidation

In this situation, the state must not be treated as a neutral new-project starting position.

### Active governed workflow state

Treat the state as active governed workflow when one or more active artifacts already exist, or when the phase clearly indicates governed work already in motion.

This includes cases such as:

- `Current Phase = research`
- `Current Phase = experience`
- `Current Phase = strategy`
- `Current Phase = prd`
- `Current Phase = design`
- `Current Phase = validation`
- an active Research artifact exists
- an active Experience artifact exists
- an active Strategy artifact exists
- an active Design Foundation exists
- an active PRD exists

### Later-stage resumable execution state

Treat the state as later-stage resumable execution when:

- an active Task exists
- an active Handoff exists
- or the current phase is `handoff`, `execution-unlock`, `implementation`, or `review`

### State/artifact inconsistency state

Treat the state as inconsistent when an active artifact is referenced but cannot be loaded from its canonical active location, or when the active artifact set conflicts with the described live operational state in a way that prevents safe routing.

---

## Session Objective Model

After initialization, this skill must expose only the session objectives that are valid for the current operational state.

This is session routing, not product discovery.

Typical valid objectives may include:

- Start a new project
- Continue current work
- Resume active execution
- Review current project state
- Request a bounded change inside an existing governed project

When structured interactive questioning is supported, this skill should prefer a guided objective selection experience over unstructured free typing.

When downstream skills need to collect structured product information, the system should also prefer guided interactive questioning when supported, in order to reduce typing burden and improve usability.

Structured product questioning belongs to the downstream skill that owns that responsibility, not to `start`.

If guided interaction is unavailable, fails, or does not visibly render, this skill must fall back to a plain-text objective selection block.

It must not replace valid session objectives with generic advice, process commentary, or best-practice reminders.

---

## Workflow Entry Rule

This skill must not treat session routing as downstream skill selection only.

When the selected objective is `Start a new project`, this skill must first establish the governing workflow entry required by governance.

For a standard new product or software project start, the governing workflow is normally:

`system/workflows/product-definition.md`

unless state or governance clearly requires another valid workflow entry.

Accordingly:

- `Start a new project` must not route directly into an isolated downstream skill as though workflow context were optional
- workflow entry must be made explicit first
- only after workflow entry is established may the controlling bounded skill for that workflow begin

This skill may still name the controlling next skill, but it must do so as part of workflow entry rather than as a skill-only shortcut.

---

## Objective Availability Rules

This skill must expose only objectives that are valid for the real current state.

### Start a new project

Show this only when the system is in a **neutral empty governed start**.

Do not show this as the primary objective when the state is actually a structural/core maintenance state.

### Continue current work

Show this when governed project work already exists or planning is already in progress, such as:

- an active artifact exists
- the current phase is already beyond a blank starting context
- the state clearly indicates ongoing governed work
- the state is a structural/core maintenance state that is still active

This option is valid both for product workflow continuation and for active system/core alignment work, when that is what the state actually describes.

### Resume active execution

Show this when execution-relevant governed work is already in motion, such as:

- an active Task exists
- an active Handoff exists
- the current phase is `handoff`, `execution-unlock`, `implementation`, `review`, or another clearly resumable later-stage state

### Review current project state

This option may always be shown.

### Request a bounded change inside an existing governed project

Show this only when an existing governed project basis already exists and the request can be safely treated as a bounded change rather than as a new uncontrolled workflow start.

This option must never authorize direct implementation from `start`.

### Neutral-empty-context rule

When the state is classified as a **neutral empty governed start**, then the only valid session objectives are:

1. `Start a new project`
2. `Review current project state`

In this situation, this skill must not expose:

- `Continue current work`
- `Resume active execution`
- `Request a bounded change inside an existing governed project`

This rule applies only after the mandatory state classification step has already determined that the current situation is truly a neutral empty governed start.

It must not be applied blindly to every `context + no artifacts` state.

### Structural/core-maintenance rule

When the state is classified as a **structural/core maintenance state**, the valid session objectives must be limited to options compatible with that maintenance situation, such as:

1. `Continue current work`
2. `Review current project state`

In this situation, this skill must not pretend that the repository is in a neutral new-product starting position.

It must not force `Start a new project` as the default objective when the state text clearly indicates ongoing system/core work.

---

## Routing Rules

After the user selects a valid session objective, this skill must route to the next allowed governed workflow entry or bounded path.

Routing must follow this order of authority:

1. `PROJECT_STATE.md`
2. the active artifact referenced by state, if one exists
3. governance constraints in `CLAUDE.md`
4. the valid session objective rules in this skill

### Routing behavior

- If the selected objective is `Start a new project`, establish entry into the governing workflow first rather than routing directly to an isolated downstream skill.
- For a standard new project start, the governing workflow should normally be `product-definition`.
- Once workflow entry is established, the controlling bounded skill for that workflow should be identified.
- If the governing workflow entry for `New Project` is `product-definition`, the controlling bounded skill must normally be `discover-missing-context`.
- A later bounded skill may be selected only when `PROJECT_STATE.md` already reflects that contextual discovery has materially completed inside the governing workflow and no governing workflow-domain prerequisite still blocks later progression.
- `Start a new project` must not rely on optimistic interpretation of the current request alone as sufficient proof that contextual discovery has already been completed. `discover-missing-context` must be used unless context is already genuinely stable enough for later bounded progression.
- If a later governed phase is already active, route to the next valid bounded step indicated by state.
- If the selected objective is only to review current state, provide a concise state summary and stop.
- If the selected objective depends on a dedicated bounded-change skill that does not exist, report the missing dependency and stop.
- Never route directly from `start` to implementation.

Routing must occur only after valid session objectives have been exposed clearly to the user.

This skill must not skip directly from loading to generic recommendations.

This skill must not auto-select a session objective on behalf of the user unless the user has already made an explicit choice in the current turn.

When the state is classified as structural/core maintenance, routing must remain faithful to the maintenance situation described by state.

It must not reinterpret that state as a new product workflow opening unless the user explicitly chooses a valid objective that changes the session direction and such a change is compatible with governance.

---

## Routing Safeguards

This skill must preserve workflow safety while routing.

It must not:

- skip official stages
- treat vague or high-level requests as sufficient readiness for PRD
- treat implementation intent as implementation authorization
- interpret auxiliary checks as macro stages
- continue into downstream execution inline after routing is determined
- treat workflow entry as optional for `New Project`
- route `New Project` directly into an isolated downstream skill without first entering its governing workflow
- collapse workflow entry and downstream execution into one uncontrolled routing shortcut

When `Current Phase = context`, this skill must behave conservatively.

If the request still requires guessing or discovering core product information such as:

- the real problem
- the main actor
- the primary workflow
- the system boundary

then routing must prefer:

- `discover-missing-context`

If there is doubt about contextual readiness, prefer safer discovery over premature planning.

---

## Boundaries

This skill must not:

- perform product discovery
- collect product requirements
- generate a PRD
- generate a Validation artifact
- generate a Design Foundation artifact
- generate Tasks
- generate a Handoff
- produce implementation instructions
- execute implementation work
- act as a replacement for governance
- act as live project state
- treat agents as the core workflow authority
- scan the repository broadly without operational need

This skill is strictly limited to:

- initialization
- state interpretation
- valid session objective exposure
- safe routing

---

## Interaction Rules

This skill must remain compact, operational, and user-facing.

It must:

- avoid narrating internal loading steps
- avoid dumping internal reasoning
- present only valid objective options
- keep wording short and clear
- prefer guided objective selection when supported
- use a compact fallback when structured interaction is unavailable

User-facing output must begin only after the required loading sequence is complete, unless the skill is stopping due to a fatal failure.

This skill must not expose internal loading narration such as:
- "I will now load..."
- "Proceeding to read..."
- "Now loading context and state..."

This skill may present a brief transition after routing is determined, but it must not begin discovery, collect product context, or simulate the downstream skill inline.

---

## Failure Handling

If `CLAUDE.md` is missing:

- stop and report the missing governance file

If `project/PROJECT_CONTEXT.md` is missing:

- stop and report the missing project context file

If `project/PROJECT_STATE.md` is missing or malformed:

- stop and report that state must be corrected before safe routing

If the state conflicts with the referenced active artifact in a way that prevents safe routing:

- report the inconsistency clearly
- recommend resolving the state/artifact mismatch first
- stop

If the selected objective depends on a required downstream skill that is missing:

- report the missing dependency clearly
- stop

If guided interaction is unavailable, fails, or does not visibly render:

- fall back to a plain-text objective selection block
- preserve only valid session objectives
- ask for a short direct selection such as `1`, `2`, or the exact objective label
- stop after presenting the fallback block

If loading completes successfully but no final user-facing block has yet been produced:

- emit the required plain-text fallback output immediately
- do not stop silently
- do not end with loading-only behavior

This skill must never guess the current governed position.

---

## Output Contract

This skill does not create artifacts.

It must produce:

1. a concise initialization header
2. a short operational state summary
3. a valid session objective selection
4. a routing decision or safe stop

For `Start a new project`, the routing decision must make the governing workflow entry visible, not only the downstream skill name.

A non-error final response from this skill must always contain all of the following:

- initialization status
- current phase
- overall status
- current focus
- active artifact summary
- execution status
- valid session objectives or a concise state-review stop
- explicit governing workflow entry when `Start a new project` is selected

The operational state summary must use canonical state fields and direct state values.

It must not replace them with inferred narrative summaries.

If the skill is waiting for user selection, it must present selectable valid objectives explicitly.

If the skill is stopping after state review, it must stop explicitly and return control clearly.

Recommended output style:

- Initialized: yes
- Current Phase: [value]
- Overall Status: [value]
- Current Focus: [value]
- Active Artifacts:
  - Research: [value]
  - PRD: [value]
  - Validation: [value]
  - Experience: [value]
  - Strategy: [value]
  - Design Foundation: [value]
  - Task: [value]
  - Handoff: [value]
- Execution Unlocked: [yes/no]
- Next Expected Skill: [value]
- Valid Session Objectives:
  1. ...
  2. ...
- Select your objective:
  - [1] ...
  - [2] ...

The message should remain compact and should not expose internal chain-of-thought or internal loading narration.

---

## Final Rule

A correct `start` must:

- initialize the session
- interpret the current state
- expose only valid session objectives
- route safely
- stop after routing

A correct `start` must never:

- stop after loading alone
- replace valid session objectives with generic advice
- end without a final user-facing output block
- produce circular instructions that tell the user to run `/start` while `/start` is already the active entry skill
- invent narrative state summaries in place of canonical state fields
- expose invalid objectives for a neutral empty governed start
- treat every `context + no artifacts` state as a new-project opening
- auto-select a session objective before the user explicitly chooses one
- route `Start a new project` directly into an isolated downstream skill without first establishing the governing workflow
- present skill-only routing as if workflow entry had already been satisfied

It must do nothing beyond that boundary.
