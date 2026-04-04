---
name: implement-handoff-scope
description: Execute the currently active implementation scope defined by the active task and handoff, using bounded changes and optional specialized agent support when beneficial.
---

# SKILL: implement-handoff-scope

## Purpose

Execute the currently active implementation scope defined by the active task and active handoff.

This skill is the formal governed execution unit for the `implementation` stage.

Its role is to:

- read the active execution boundary
- implement only the bounded scope that was handed off
- preserve implementation quality and maintainability
- use specialized agents when beneficial
- stop after implementation and hand off to governed review

This skill does not close task lifecycle by itself.

This skill does not decide acceptance.

It executes the approved bounded implementation scope only.

---

# When To Use

Use this skill when:

- `Current Phase = implementation`
- `Execution Unlocked = yes`
- an active task exists
- an active handoff exists
- the system is ready to execute the current bounded implementation step

Typical workflow usage:

tasks  
↓  
handoff  
↓  
**implement-handoff-scope ← this skill**  
↓  
review-delivery-outcome  
↓  
closure decision

This skill is the canonical implementation stage skill.

---

# When Not To Use

Do NOT use this skill when:

- the system is still in context, PRD, validation, or task decomposition
- no active task exists
- no active handoff exists
- execution is not unlocked
- the intended work is still ambiguous
- the goal is review, acceptance, or lifecycle closure
- the goal is an auxiliary critique such as security assessment, design critique, or architecture exploration

This skill is for bounded implementation only.

---

# Required Inputs

This skill should read:

- `project/PROJECT_STATE.md`
- the active task from `project/tasks/active/`
- the active handoff from `project/handoff/active/`
- the related PRD from `project/prd/active/`

Optional inputs:

- active validation artifact
- architecture guidance from `project/memory/ARCHITECTURE.md`
- reusable patterns from `project/memory/PATTERNS.md`
- relevant auxiliary review outputs
- implementation-relevant specialized agents

Only retrieve what is necessary to execute the current bounded scope safely.

Avoid broad repository scanning unless needed for the active implementation step.

---

# Pre-Step Consistency Check

Before implementation begins, verify that `PROJECT_STATE.md` matches the filesystem.

Minimum checks:

- `Current Phase = implementation`
- `Execution Unlocked = yes`
- Active Task exists in `project/tasks/active/`
- Active Handoff exists in `project/handoff/active/`
- Active PRD exists when referenced
- no active artifact points to a done or archived location
- the active handoff still matches the current task boundary

If a mismatch is detected:

- STOP
- report the inconsistency clearly
- return control to the correct earlier governed step or explicit state-correction action before continuing

This skill must not implement on top of inconsistent state.

---

# No Self-Authorization Rule

This skill must never satisfy its own entry conditions by mutating `PROJECT_STATE.md` merely to make implementation possible.

In particular, this skill must not:

- change `Current Phase` from `handoff` to `implementation` on its own just to begin execution
- change `Execution Unlocked` from `no` to `yes` on its own just to begin execution
- reinterpret “implementation is the next stage” as “implementation is now authorized”
- treat a favorable subset of fields as permission to start implementation while the overall state is still pre-implementation

If the pre-step consistency check shows that implementation is not yet formally authorized, the correct behavior is:

- STOP
- report exactly which entry conditions are false
- return control to the correct prior governed step or explicit state-correction path

This skill may only execute when formal implementation readiness is already materially reflected in the current state.

This skill must not self-authorize execution.

---

# Entry Failure Routing Discipline

When implementation cannot begin because entry conditions are not satisfied, this skill must remain conservative about the next move.

Typical safe outcomes include:

- returning control to handoff/state correction when the handoff exists but formal execution readiness is still not reflected coherently
- returning control to task decomposition when the active task boundary is too large or unsafe
- returning control to upstream clarification when the execution boundary is ambiguous

This skill must not convert a blocked implementation attempt into an implementation-start transition by itself.

A blocked implementation attempt remains blocked until readiness is explicitly and coherently established outside this skill.

---

# Implementation Objective

The objective of this skill is to answer one bounded question:

**What is the smallest honest implementation that fulfills the active handoff scope for the current task?**

This skill must implement the approved bounded step.

It must not silently widen scope into adjacent concerns unless the current active handoff explicitly includes them.

If the handoff is too vague to execute safely:

- STOP
- report the ambiguity clearly
- recommend returning to the correct prior governed step

---

# Scope Discipline

This skill must preserve bounded execution.

It must:

- implement only the active task and handoff scope
- avoid opportunistic redesign outside the current step
- avoid reopening planning unless truly necessary
- avoid hidden scope expansion
- keep the implementation tied to the current bounded objective

If the work needed is clearly larger than the current task boundary:

- STOP
- recommend returning to `break-scope-into-tasks`

If the handoff reveals unresolved ambiguity:

- recommend `detect-context-gap`

If the implementation would materially change approved scope:

- recommend PRD/task/handoff correction before proceeding

---

# Hard Boundary Rule

This skill must treat the active task and active handoff as the only approved implementation boundary.

It must not implement behavior that clearly belongs to:

- `Pending Tasks`
- future handoffs
- later execution slices
- adjacent features not included in the active handoff
- supportive capabilities that are convenient but not required by the active scope

It must not justify boundary expansion with reasoning such as:

- "this will help later"
- "this is already nearby"
- "this is small enough to include"
- "this improves completeness"
- "this makes the demo better"

If the smallest honest implementation would still spill into pending-task scope:

- STOP
- report that the task boundary is too broad or the handoff is unsafe
- recommend returning to the prior governed step

This skill must not implement future work “for convenience.”

---

# Pending Task Protection

When `Pending Tasks` exist, this skill must treat them as explicitly out of execution scope unless the active handoff itself materially includes a dependency that was already approved inside the current boundary.

This skill must not:

- partially implement pending-task behavior
- scaffold pending-task behavior beyond what is strictly required by the current task boundary
- silently include future task outcomes inside the active implementation

A reusable local seam is acceptable only when it is directly required by the active task and does not itself implement future behavior.

Preparing for future extensibility is not a license to implement future features.

---

# Technical Decision Containment

This skill must not silently introduce new technical decisions.

It must not decide, recommend, or treat as settled during implementation:

- stack choice
- framework choice
- storage choice
- persistence choice
- package choice
- folder structure
- architectural pattern

unless those decisions are already materially grounded by one or more of:

- governed project defaults
- stabilized upstream artifacts
- existing repository continuity for the same execution line

If a technical decision is still unresolved and materially blocks safe implementation:

- STOP
- report the blocking dependency clearly
- recommend returning to the appropriate prior step

This skill must not improvise stack or structure just to keep implementation moving.

When an official project default is explicitly defined in `project/PROJECT_CONTEXT.md`, this skill may inherit that default without re-deciding it.

Inherited defaults must be treated as already-governed project direction, not as a new implementation decision made by this skill.

---

# Existing Structure Preservation

This skill must preserve the existing project structure whenever possible.

It must not create a new structural baseline for the project unless that baseline is already explicitly grounded upstream or already materially present in the repository.

It must not silently decide:

- that code belongs in the repository root
- that a new app folder should be created
- that a new frontend structure should be introduced
- that a new persistence layer should be added

unless the active handoff explicitly and validly includes that structural move.

If implementation would require creating a new structural baseline that has not been governed upstream:

- STOP
- surface the structural dependency clearly
- recommend returning to the correct earlier step

A missing application scaffold, framework bootstrap, database layer, or package baseline is a structural dependency when those elements are not already materially present and governed for the same execution line.

This skill must not bootstrap a new application or persistence baseline merely because doing so appears to be the fastest path.

---

# Repository Inspection Discipline

This skill must inspect only the part of the repository needed for the active implementation step.

It must not use broad repository-wide scanning by default.

Examples of disallowed behavior unless clearly necessary:

- repository-wide globbing without a bounded reason
- scanning large unrelated directories
- exploring broad project structure just to infer a new baseline
- treating absence of code as permission to create a new structure

If bounded execution requires structural knowledge, inspect only the smallest relevant area.

---

# Implementation Quality Baseline

This skill must preserve a minimum implementation quality baseline even when it executes without specialized agent support.

Implementation quality is never optional.

The implementation must follow these principles:

## Clean Code Baseline

The implementation must favor:

- clear naming
- explicit intent
- readable structure
- low hidden complexity
- small, understandable units
- minimal necessary change
- maintainability for low-context continuation

The implementation must avoid:

- unclear shortcuts
- speculative abstractions
- broad rewrites without approval
- unnecessary refactoring
- hidden coupling
- avoidable nesting
- code that solves the current step by creating future maintenance debt

## SOLID-Oriented Baseline

The implementation should apply SOLID principles pragmatically, not dogmatically.

At minimum:

- **Single Responsibility Principle**: each file, module, function, or component should have one clear reason to change whenever reasonably possible
- **Open/Closed Principle**: prefer extension-friendly structure when needed, but do not introduce abstraction layers that the current scope does not justify
- **Liskov Substitution Principle**: do not create or preserve polymorphic structures that break expected behavior
- **Interface Segregation Principle**: avoid forcing consumers to depend on methods or props they do not need
- **Dependency Inversion Principle**: prefer clear boundaries and dependency direction when complexity justifies it, but do not add indirection for trivial work

SOLID must improve clarity and maintainability.

It must not be used to justify overengineering.

## Maintainability Rule

The skill must prefer implementations that are easier to continue, review, and modify later by another low-context session.

If two solutions are valid, prefer the one that is:

- simpler
- clearer
- more local
- easier to test and reason about
- less coupled to unrelated parts of the system

---

# File Discipline

This skill must preserve file discipline during implementation.

Rules:

- prefer small, local changes over broad rewrites
- preserve existing project structure unless change is necessary and already governed
- avoid unnecessary file creation
- avoid unnecessary file movement or renaming
- keep implementation files within the recommended readability boundary when possible
- respect the project preference for implementation files around `300 lines` maximum when feasible
- if a file would become bloated, split responsibilities only when that split is directly justified by the active scope

If the current change would force bloated files or unclear structure, prefer modularization that is directly justified by the active scope.

Do not introduce abstraction layers that are not needed for the current step.

---

# Specialist Evaluation Rule

This skill remains the controller of the implementation stage.

Specialized agents are auxiliary helpers.

Before implementing, this skill should make a conscious specialist decision.

It should either:

- attach the most relevant specialist because doing so would materially improve the bounded implementation step, or
- explicitly proceed without specialist because the change is small, clear, and low-risk

This evaluation should be based on the actual bounded task.

It must not be skipped by habit.

---

# Specialized Agent Usage Policy

Specialized agents are auxiliary helpers.

Agents should be invoked only when specialization would materially improve the current bounded implementation step.

They are not automatic participants in every implementation action.

## Preferred Agent Usage

This skill should prefer calling the most relevant specialized agent when:

- the task clearly belongs to a specialized domain
- the change is non-trivial
- specialized judgment would materially improve the implementation
- the risk of generic execution is meaningful
- the current bounded step would benefit from clearer domain-specific reasoning, structure, caution, or direction

Examples:

- frontend-heavy work → `frontend`
- backend-heavy work → `backend`
- schema, query, migration, or persistence work → `database`
- sensitive security implications or trust-boundary concerns → `security`
- structural tradeoffs, boundary shape, or component split questions → `architect`
- unclear UI/UX direction, visual style, or interaction tone → `design-direction`
- external reference comparison, benchmarking, or pattern investigation → `research`
- uncertainty about durable memory destination, pattern recording, or architecture-vs-state boundary → `memory`

## Direct Execution Without Specialist

This skill may execute directly without specialized agent support only when:

- the scoped change is small
- the expected behavior is clear
- the domain complexity is low for this step
- specialization would add overhead without meaningful benefit

Skipping specialization must not reduce the implementation quality baseline.

## Agent Boundary Rule

Agents may assist execution.

Agents must not:

- redefine scope
- override governance
- close task lifecycle
- close handoff lifecycle
- decide acceptance
- become the controller of the implementation stage

Skills control progression.

Agents support execution.

---

# Minimal Honest Implementation Rule

This skill must actively prefer the smallest honest implementation that satisfies the current active handoff.

It must not optimize for:

- demo impressiveness
- apparent completeness
- future convenience
- anticipatory extensibility
- adjacent feature readiness

when those goals would expand implementation beyond the current approved boundary.

If a more minimal implementation fully satisfies the active handoff, it must be preferred.

---

# Implementation Execution Rules

During implementation, this skill must:

1. confirm the active execution boundary
2. confirm whether specialist support is beneficial
3. identify the smallest honest implementation path
4. implement the bounded change
5. keep modifications as narrow as reasonably possible
6. avoid unrelated cleanup unless truly necessary for correctness
7. stop after implementation and return control to governed review

This skill must not pretend that “code was written” equals “the step is complete and accepted”.

Implementation completion is not closure.

---

# Output Expectations

When implementation is complete, the skill must produce a concise structured report.

## Implementation Summary

Short factual summary of what was implemented.

Do not include aspirational language.

Do not claim broader completion than the actual bounded change.

---

## Files Changed

List only the files that were actually created or modified.

Do not imply repository-wide completion.

---

## Scope Confirmation

State one of:

- `Bounded scope implemented as handed off`
- `Implementation stopped because bounded scope could not be honored safely`

If the implementation stopped early, say so clearly.

If bounded scope was exceeded, do not hide that fact.

---

## Specialist Usage

State one of:

- `Specialist agent used: [agent name]`
- `No specialist agent used: direct bounded implementation was sufficient`

If no specialist was used, that statement must reflect an actual conscious evaluation, not a silent default.

---

## Quality Notes

State briefly and factually how the implementation preserved:

- readability
- bounded scope
- maintainability
- file discipline

Do not self-award quality in broad terms that are not supported by the actual result.

Prefer factual notes over praise language.

---

## Notable Constraints or Follow-Up Risks

Short factual note on any limitation, risk, unresolved dependency, or follow-up worth carrying into review.

Do not hide incomplete work here as if it were already acceptable.

If pending-task boundary was approached but not crossed, this may be noted here.

---

## Recommended Next Action

Always point to:

- `review-delivery-outcome`

This skill must stop after implementation and recommend governed review.

---

# State and Lifecycle Rules

This skill executes implementation work.

It does not perform governed closure.

It must not mutate `PROJECT_STATE.md` merely to manufacture entry readiness for itself.

In particular, this skill must not update state from `handoff` to `implementation`, or from `Execution Unlocked: no` to `yes`, as a way to satisfy its own entry checks.

Those conditions must already be true before bounded implementation begins.

When implementation is complete:

- keep the official macro phase aligned with the real operational moment
- do not move task directly to `done`
- do not move handoff directly to `done`
- do not archive task or handoff
- do not claim acceptance
- do not skip the governed `review` stage

If state is updated after implementation, it must reflect a coherent move into the `review` moment only if that update can be completed honestly across the whole file.

If coherent state update is not possible:

- STOP
- report the inconsistency
- do not apply partial lifecycle progression

---

# Escalation Rules

If the implementation reveals the task is too large:

- recommend `break-scope-into-tasks`

If the implementation reveals unresolved context ambiguity:

- recommend `detect-context-gap`

If the change crosses a sensitive security boundary not previously assessed:

- recommend `assess-security-boundary`

If the implementation reveals architectural instability that prevents safe bounded execution:

- recommend architecture review before continuing

If the implementation appears complete but follow-up work is still needed:

- let governed review decide whether the outcome is accepted with follow-ups or rejected / incomplete

This skill must not make closure decisions that belong to review.

---

# Safety Rules

This skill must never:

- redefine workflow stages
- treat implementation as automatic acceptance
- close task or handoff lifecycle directly
- widen scope silently
- use specialized agents as workflow controllers
- hide incompleteness behind broad implementation claims
- self-authorize implementation by changing state to satisfy entry conditions
- bootstrap a new application or new project baseline when that structural move is not already governed upstream and explicitly inside the active handoff boundary

Its role is to execute the approved bounded implementation scope honestly and stop.

---

# Final Rule

This skill protects the integrity of the implementation stage.

Always prioritize:

- bounded execution
- readable and maintainable code
- minimal necessary change
- honest scope discipline
- governed review after implementation