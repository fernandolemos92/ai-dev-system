---
name: authorize-implementation
description: Governed transition gate that determines whether the active handoff is eligible to unlock execution and promote the project from handoff or execution-unlock into implementation.
---

# SKILL: authorize-implementation

## Purpose

This skill is the canonical governed transition gate between `handoff` and `implementation`.

Its role is to determine whether the currently active handoff is truly ready for bounded execution and whether the project may be formally promoted into implementation.

This skill does not implement the handoff.

This skill does not create a new handoff.

This skill does not choose stack, architecture, or baseline on its own.

This skill only decides whether execution may be formally unlocked through a coherent governed transition.

---

## When To Use

Use this skill when all of the following are materially true:

- the system is at the governed moment between handoff preparation and implementation
- an active task exists
- an active handoff exists
- the user is asking to proceed toward implementation
- the system needs to determine whether execution may be formally unlocked

Typical valid operational moments include:

- `Current Phase = handoff`
- or `Current Phase = execution-unlock` when the state already reflects that governed transition moment coherently

Do not use this skill to prepare a handoff.

Do not use this skill to implement a handoff.

Do not use this skill to review delivery outcomes.

---

## When Not To Use

Do not use this skill when:

- no active task exists
- no active handoff exists
- the current need is still task decomposition or handoff preparation
- implementation is already formally unlocked and the next real step is execution
- the current need is review, closure, or follow-up classification
- the current state is semantically too inconsistent to support a safe unlock decision

If handoff is not ready yet, return to:

`prepare-handoff`

If implementation is already formally authorized, return to:

`implement-approved-scope`

If the state is inconsistent enough to prevent safe judgment, stop and require explicit state/artifact correction before proceeding.

---

## Required Inputs

Before using this skill, Claude must read:

- `CLAUDE.md`
- `project/PROJECT_CONTEXT.md`
- `project/PROJECT_STATE.md`
- the active task artifact
- the active handoff artifact

Claude must also inspect relevant filesystem / artifact state when needed to verify that the declared active artifacts actually exist and are consistent with `PROJECT_STATE.md`.

Only retrieve what is necessary to determine whether formal execution unlock is justified.

This skill must not use broad repository scanning as a substitute for canonical state and active artifact loading.

---

## Core Question

This skill answers one governed question only:

**Is the active handoff ready to promote the project into implementation and unlock bounded execution?**

---

## Unlock Scope Boundary

This skill is a transition gate only.

It exists to decide whether implementation may begin.

It must not:

- implement code
- perform delivery work
- review implementation results
- rewrite task scope
- rewrite handoff scope
- create a new technical baseline on its own
- silently repair unrelated upstream ambiguity by improvisation
- treat handoff existence alone as sufficient authorization

This skill may only:

- validate readiness
- either authorize unlock or refuse it
- update `PROJECT_STATE.md` coherently when valid
- stop after the bounded transition decision

Unlock is not execution.

Unlock is not closure.

Unlock is not design authority.

---

## Pre-Step Consistency Check

Before judging unlock readiness, this skill must verify that `PROJECT_STATE.md` is coherent with the filesystem and the active artifact set.

Minimum checks:

- `Current Phase` is consistent with a pre-implementation moment
- `Execution Unlocked = no`
- `Active Task` exists in `project/tasks/active/`
- `Active Handoff` exists in `project/handoff/active/`
- no active artifact points to `done/` or `archived/`
- the active handoff still matches the active task boundary
- the overall state still describes one coherent operational moment

If a mismatch is detected:

- STOP
- report the inconsistency clearly
- require correction before continuing

This skill must not authorize unlock on top of inconsistent state.

A favorable subset of fields is not enough if the overall operational moment remains contradictory.

---

## Valid Pre-Implementation State Rule

This skill may operate only when the current state truthfully represents a pre-implementation moment.

Valid examples include:

- `Current Phase = handoff` with a prepared active handoff and `Execution Unlocked = no`
- `Current Phase = execution-unlock` with the same active boundary and `Execution Unlocked = no`

This skill must not reinterpret the following as already acceptable for unlock by default:

- a state that still materially reads like task decomposition
- a state that still materially reads like handoff preparation before handoff closure
- a state that already says implementation is active while unlock has not actually been decided
- a state where `Next Expected Skill`, `Primary Objective`, `Next Allowed Action`, and `STATE NOTES` point to different lifecycle moments

If the state does not already represent a coherent pre-implementation moment, this skill must stop rather than compensate for that incoherence by optimistic interpretation.

---

## What This Skill Must Validate

Claude must validate the following before authorizing execution unlock.

### 1. Lifecycle readiness

All of the following must be true:

- the current phase is a coherent pre-implementation phase
- `Execution Unlocked = no`
- an `Active Task` is declared
- an `Active Handoff` is declared
- the active artifacts referenced in state actually exist
- no state / filesystem inconsistency materially undermines execution readiness

### 2. Handoff readiness

The active handoff must be:

- bounded
- implementation-directed
- specific enough to execute
- narrow enough to avoid accidental scope expansion
- aligned to the active task
- free from hidden dependency on missing upstream decisions

### 3. Baseline readiness

Claude must verify whether the handoff materially depends on a structural baseline that has not yet been explicitly authorized upstream.

Examples include, but are not limited to:

- choosing a frontend framework
- choosing a backend framework
- choosing persistence strategy
- choosing session/auth model
- choosing a hosting/runtime model
- introducing a new architectural dependency that was not already authorized
- creating a new structural application baseline that is not already governed

If bounded implementation materially depends on such a baseline and that baseline is not already authorized by governance, project defaults, durable decisions, or existing repository continuity for the same execution line, execution must not be unlocked.

### 3A. State-declared baseline gate
This skill must explicitly honor the baseline flags declared in `project/PROJECT_STATE.md`.

Execution unlock must be rejected when:
- `Technical Baseline Status = open`
- `Implementation Baseline Status = missing`
- `Implementation Baseline Status = bootstrap-required`

These values are not passive descriptors.
They are blocking readiness signals.

This skill must not reinterpret governed defaults, partial repository continuity, or model convenience as sufficient grounds to override these blocking state values.

If any of the above values are present, this skill must:
- reject unlock
- keep `Execution Unlocked = no`
- keep the project in a coherent pre-implementation phase
- not promote `Current Phase` to `implementation`
- explain the exact blocking dependency
- identify the correct prior bounded step required to resolve the baseline dependency
- stop

### Execution orchestration readiness gate

This skill must not authorize implementation only on the basis of structural readiness.

In addition to phase, active task, active handoff, baseline status, blockers, and bounded scope, this skill must also verify that the active handoff is execution-orchestration-ready.

A handoff is not execution-orchestration-ready when one or more of the following is true:

- required implementation specialists are still implicit
- supporting specialists are still implicit when materially relevant
- Context7 requirement has not been explicitly evaluated
- Context7 is required but target surfaces are not preserved
- execution evidence requirements are missing
- allowed direct implementation surfaces are unclear where direct execution is being allowed
- forbidden shortcuts are missing when specialist-aware execution is materially required

If execution-orchestration readiness is not materially present in the active handoff, this skill must:

- reject unlock
- keep `Execution Unlocked = no`
- not promote `Current Phase` to `implementation`
- explain that structural readiness alone is insufficient
- identify the missing orchestration dependency in the handoff clearly
- point to `prepare-handoff` refinement as the next bounded move
- stop

### Context7 declaration rule

This skill must treat Context7 evaluation as part of execution-orchestration readiness whenever the active handoff touches library-, framework-, routing-, animation-, forms-, auth-, SDK-, infrastructure-, or similar implementation surfaces where official usage patterns materially affect execution quality.

This skill must not authorize implementation when Context7 is materially relevant but the active handoff leaves one of the following unresolved:

- whether Context7 is required
- which target surfaces Context7 must cover
- whether later implementation must consult Context7 before code work begins

Context7 may be declared as not required, but that decision must still be explicit and materially coherent with the selected execution line.

### 4. Blocker readiness

Claude must verify whether any current blocker explicitly prevents implementation.

If blockers exist that materially prevent safe bounded execution, execution must not be unlocked.

### 5. Boundary readiness

Claude must verify that the active handoff represents only the currently selected task boundary.

Execution must not be unlocked when the handoff is effectively trying to execute:

- multiple active tasks at once
- pending-task scope
- future execution slices
- implementation work that still depends on unresolved scope narrowing

If the smallest honest execution step would already spill beyond the current active task boundary, unlock must be refused.

---

## Baseline Sufficiency Rule

This skill must distinguish carefully between:

- one governed default that exists somewhere upstream
- a materially sufficient baseline for this exact handoff

Those are not always the same.

A project default such as a preferred frontend framework may contribute to readiness.

It does not, by itself, prove that the active handoff is baseline-ready when the same handoff still materially depends on unresolved decisions such as:

- authentication model
- persistence/storage model
- runtime or hosting model
- delivery boundary between frontend and backend
- application bootstrap or repository baseline required for the execution line

If the active handoff still lists such dependencies as unresolved prerequisites, this skill must not treat one partial governed default as enough to authorize full execution.

A handoff with unresolved structural prerequisites remains baseline-incomplete.

Execution must stay locked.

---

## New Baseline Bootstrap Rule

This skill must reject unlock when the active handoff would require bootstrapping a new structural application baseline that has not yet been explicitly authorized upstream.

Examples include:

- scaffolding a new application in an otherwise governance-only repository
- creating the first real implementation baseline for a new product line
- introducing a repository structure, runtime, persistence setup, or delivery architecture that does not already exist for the current execution line

In such cases, the missing baseline is not a small implementation detail.

It is an upstream decision dependency.

This skill must not treat:

- "we can start with the default"
- "we can scaffold something simple"
- "the repository prefers React"
- "the model can figure it out during implementation"

as valid substitutes for governed baseline authority.

If bootstrapping is materially required and not already governed, unlock must be rejected and the missing authority surfaced explicitly.

---

## Workflow Completeness Check

Before approving unlock, this skill must verify that the pre-implementation workflow path for the active execution line is materially complete enough for honest bounded execution.

This does not require decorative traversal of every optional domain.

It does require that:

- materially required upstream domains were either genuinely completed or explicitly and honestly determined to be unnecessary
- any omission that still materially affects safe execution has been surfaced rather than silently ignored
- the active handoff is not standing on top of upstream workflow gaps that would still force execution-time improvisation

If the active execution line is still materially undermined by missing upstream workflow work, unlock must be refused.

---

## Approval Rule

Claude may authorize execution unlock only if all required readiness conditions are satisfied.

If approved, Claude must treat this as a governed transition only.

Approval means:

- the active handoff is executable
- the required baseline is already sufficiently authorized
- the project may move from its coherent pre-implementation moment into `implementation`
- `implement-approved-scope` becomes the next expected skill

Approval does not mean:

- implementation already happened
- acceptance is implied
- closure is implied
- downstream review is unnecessary

A valid implementation authorization requires both:

- structural readiness
- execution-orchestration readiness

Structural readiness alone is not sufficient.

A correct approval decision must be able to state, truthfully and explicitly, that:

- the active handoff is bounded and canon-compatible
- the baseline is formally sufficient
- the execution mode is specialist-aware when materially required
- Context7 has been explicitly evaluated when materially relevant
- later implementation can begin without silently defaulting to generalist-first execution

---

## Rejection Rule

Claude must reject execution unlock if any of the following are true:

- the project is not currently in a coherent pre-implementation moment
- `Execution Unlocked` is not `no`
- no active task exists
- no active handoff exists
- the active task / handoff is missing or inconsistent with state
- the handoff is too vague, too broad, or not implementation-ready
- bounded execution depends on a baseline that has not been authorized upstream
- blockers or state inconsistencies materially prevent implementation readiness
- the handoff would require hidden widening into pending or future scope
- one partial project default is being used to mask broader unresolved baseline dependencies

If rejected, Claude must not promote the phase and must not set `Execution Unlocked = yes`.

Claude must clearly explain the blocking reason and return control to the correct prior governed step or explicit state-correction path.

---

## Coherent Approval State Update Rule

If unlock is approved, the resulting `PROJECT_STATE.md` update must represent one coherent implementation-ready moment.

At minimum, the update must align:

- `Overall Status`
- `Current Phase = implementation`
- `Current Focus`
- `Last Updated`
- `Active Research`
- `Active PRD`
- `Active Validation`
- `Active Experience`
- `Active Strategy`
- `Active Task`
- `Pending Tasks`
- `Active Handoff`
- `Execution Unlocked = yes`
- `Active Auxiliary Gates`
- `Current Blockers`
- `Next Expected Skill = implement-approved-scope`
- `Primary Objective`
- `Success Condition`
- `Next Allowed Action`
- `STATE NOTES`

If upstream governed artifacts remain the real active durable basis for the current execution line, the approval state must preserve them truthfully rather than silently dropping or stale-mixing them during promotion into implementation.

A valid unlock state must describe:

- the same active task as the current execution target
- the same active handoff as the execution boundary
- implementation as now formally authorized
- no claim that code has already been implemented
- no claim that review has already begun

This skill must not update only `Current Phase` and `Execution Unlocked` while leaving the rest of the state materially anchored to handoff preparation or an earlier stage.

If the new implementation-ready moment cannot be represented coherently across the whole file, this skill must stop and report lifecycle closure as incomplete.

It must not apply a partial unlock patch and then narrate success.

---

## Conservative Wording Rule for Approval

When unlock is approved, the resulting state and the completion message must describe implementation as:

- formally authorized
- bounded by the active handoff
- not yet executed

They must not imply:

- that implementation is already complete
- that review is already underway
- that task or handoff closure has already occurred

Examples of wording this skill must avoid even after approval include:

- "implementation completed"
- "task delivered"
- "ready to close"
- "handoff consumed"

Implementation authorization is not implementation outcome.

---

## Conservative Wording Rule for Rejection

When unlock is rejected, the resulting state and the completion message must remain equally conservative.

They may state that:

- execution remains locked
- the active handoff is not yet implementation-ready
- a blocker, ambiguity, or missing authority prevents unlock
- a prior governed step must be revisited

They must not imply:

- that implementation may begin anyway
- that the system is effectively already in implementation
- that user urgency overrides readiness requirements

A blocked unlock remains blocked until readiness is explicitly and coherently established.

---

## Materialization Order

A valid unlock decision must preserve this order:

1. verify the active state and filesystem consistency
2. verify handoff readiness, baseline readiness, blocker readiness, boundary readiness, and workflow completeness
3. decide approval or rejection
4. update `PROJECT_STATE.md` only if the resulting operational moment can be represented coherently
5. emit the completion message only after the decision and resulting state describe the same operational reality

This skill must not narrate unlock success before the state truthfully reflects that unlock.

This skill must not narrate unlock rejection as a soft warning if the system remains materially blocked.

---

## Required Output Behavior

### If approved

Claude must:

1. clearly state that execution unlock is authorized
2. update `project/PROJECT_STATE.md` coherently so that:
   - `Current Phase = implementation`
   - `Execution Unlocked = yes`
   - `Next Expected Skill = implement-approved-scope`
   - `Next Allowed Action` explicitly points to executing the currently active handoff
3. preserve consistency with the active task and active handoff
4. avoid introducing any implementation details beyond what is necessary to authorize the transition
5. stop after the bounded transition decision

### If rejected

Claude must:

1. clearly state that execution unlock is not authorized
2. keep:
   - a coherent pre-implementation phase
   - `Execution Unlocked = no`
3. explain the exact blocking reason
4. identify the correct prior governed step or correction path required before implementation can begin
5. stop after the refusal decision

---

## Stop-After-Unlock Rule

Whether approval or rejection is the outcome, this skill must stop after the bounded unlock decision and return control.

This pause is mandatory.

This skill must not:

- invoke `implement-approved-scope` inline after approval
- narrate implementation as already starting now
- compensate for user eagerness by collapsing unlock and execution
- continue automatically into code generation or delivery work

The correct result of this skill is:

- unlock decision completed
- coherent pre-implementation or implementation-ready state established
- explicit return of control

Nothing later.

---

## Constraints

Claude must not:

- implement code
- perform delivery work
- review implementation results
- create a new technical baseline on its own
- treat handoff existence alone as sufficient authorization
- silently promote the phase without explicitly validating readiness
- bypass governance because the user wants to move fast
- apply partial state updates and treat them as valid unlock closure
- narrate “implementation is next” as if that already meant “implementation is authorized now”

This skill is a transition gate, not an execution skill.

---

## Relationship To Other Skills

- `prepare-handoff` creates the bounded execution artifact
- `authorize-implementation` determines whether that handoff is truly ready for execution
- `implement-approved-scope` executes only after unlock is formally authorized
- `review-delivery` evaluates what was actually delivered

This ordering must remain explicit.

This skill must not collapse those steps into one another.

---

## Failure Handling

If the active task or handoff cannot be found canonically:

- stop
- report the state / filesystem inconsistency clearly
- require correction before continuing

If the handoff is too broad, too vague, or not execution-safe:

- stop
- explain why unlock is unsafe
- return control to `prepare-handoff` or the correct earlier bounded step

If the active handoff is structurally valid but not execution-orchestration-ready:

- do not authorize implementation
- do not treat the issue as a baseline problem unless baseline is also unresolved
- state that the handoff still lacks execution-orchestration readiness
- return control to `prepare-handoff`
- require refinement of the active handoff rather than bypassing the missing execution contract during implementation

If bounded implementation depends on missing technical authority:

- stop
- surface the missing baseline clearly
- keep execution locked

If the state is only partially favorable but semantically inconsistent overall:

- stop
- report the inconsistency clearly
- do not attempt optimistic unlock

If unlock decision logic succeeds but coherent lifecycle closure in `PROJECT_STATE.md` fails:

- stop
- report that unlock closure remains operationally incomplete
- do not treat execution as formally authorized on top of a partial state transition

There is no silent success state.

There is no soft unlock state.

---

## Success Condition

This skill succeeds only when one of the following happens:

- execution is formally authorized through a valid governed transition into `implementation`, with `Execution Unlocked = yes` and coherent state closure

or

- execution is explicitly refused with a truthful explanation of why readiness has not yet been achieved

---

## Final Rule

A correct `authorize-implementation` must answer:

- is the current handoff truly ready for bounded execution?
- is the active implementation boundary safe and authorized?
- may the project be formally promoted into `implementation` now?

It must not answer:

- how to implement the solution
- how to review the delivery
- how to invent missing baseline decisions
- how to bypass readiness constraints

Its job is to decide implementation unlock honestly, close that transition coherently when possible, and then stop.