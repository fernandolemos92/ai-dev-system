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
- route the session to the next allowed governed path

This skill is the operational entry point for new sessions and workflow resumptions.

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
- Active PRD
- Active Validation
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

## Objective Availability Rules

This skill must expose only objectives that are valid for the real current state.

### Start a new project

Show this only when the system is effectively in an empty governed starting position, such as:

- `Current Phase = context`
- no active PRD
- no active Validation
- no active Task
- no active Handoff

### Continue current work

Show this when governed project work already exists or planning is already in progress, such as:

- an active artifact exists
- the current phase is already beyond a blank starting context
- the state clearly indicates ongoing governed work

### Resume active execution

Show this when execution-relevant governed work is already in motion, such as:

- an active Task exists
- an active Handoff exists
- the current phase is `handoff`, `implementation`, or another clearly resumable later-stage state

### Review current project state

This option may always be shown.

### Request a bounded change inside an existing governed project

Show this only when an existing governed project basis already exists and the request can be safely treated as a bounded change rather than as a new uncontrolled workflow start.

This option must never authorize direct implementation from `start`.

### Empty-context validation rule

When all of the following are true:

- `Current Phase = context`
- `Execution Unlocked = no`
- `Active PRD = none`
- `Active Validation = none`
- `Active Task = none`
- `Active Handoff = none`

then the only valid session objectives are:

1. `Start a new project`
2. `Review current project state`

In this situation, this skill must not expose:

- `Continue current work`
- `Resume active execution`
- `Request a bounded change inside an existing governed project`

This rule takes priority over broader example interpretations for empty governed starting positions.

---

## Routing Rules

After the user selects a valid session objective, this skill must route to the next allowed governed path.

Routing must follow this order of authority:

1. `PROJECT_STATE.md`
2. the active artifact referenced by state, if one exists
3. governance constraints in `CLAUDE.md`
4. the valid session objective rules in this skill

### Routing behavior

- If the selected objective requires contextual discovery, route to `detect-context-gap`.
- If context is already stable enough for PRD work, route to `create-or-update-prd`.
- If a later governed phase is already active, route to the next valid step indicated by state.
- If the selected objective is only to review current state, provide a concise state summary and stop.
- If the selected objective depends on a dedicated bounded-change skill that does not exist, report the missing dependency and stop.
- Never route directly from `start` to implementation.

Routing must occur only after valid session objectives have been exposed clearly to the user.

This skill must not skip directly from loading to generic recommendations.

This skill must not auto-select a session objective on behalf of the user unless the user has already made an explicit choice in the current turn.

---

## Routing Safeguards

This skill must preserve workflow safety while routing.

It must not:

- skip official stages
- treat vague or high-level requests as sufficient readiness for PRD
- treat implementation intent as implementation authorization
- interpret auxiliary checks as macro stages
- continue into downstream execution inline after routing is determined

When `Current Phase = context`, this skill must behave conservatively.

If the request still requires guessing or discovering core product information such as:

- the real problem
- the main actor
- the primary workflow
- the system boundary

then routing must prefer:

- `detect-context-gap`

If there is doubt about contextual readiness, prefer safer discovery over premature planning.

---

## Boundaries

This skill must not:

- perform product discovery
- collect product requirements
- generate a PRD
- generate a Validation artifact
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

A non-error final response from this skill must always contain all of the following:

- initialization status
- current phase
- active artifact summary
- execution status
- valid session objectives or a concise state-review stop

The operational state summary must use canonical state fields and direct state values.

It must not replace them with inferred narrative summaries.

If the skill is waiting for user selection, it must present selectable valid objectives explicitly.

If the skill is stopping after state review, it must stop explicitly and return control clearly.

Recommended output style:

- Initialized: yes
- Current Phase: [value]
- Overall Status: [value]
- Active Artifacts: [summary]
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
- expose invalid objectives for an empty context state
- auto-select a session objective before the user explicitly chooses one

It must do nothing beyond that boundary.