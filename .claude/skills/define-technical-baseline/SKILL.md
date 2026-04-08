---
name: define-technical-baseline
description: Perform the bounded governed step that evaluates and recommends the best technical baseline for the active project when implementation cannot safely proceed on assumed defaults.
---

# SKILL: define-technical-baseline

## Purpose

Perform the explicit bounded decision step for technical baseline definition.

This skill exists to:

- identify when the active project still lacks an authorized technical baseline
- evaluate the most appropriate technical approach for the specific project
- use the `technical-baseline` specialist honestly through the registry/runtime bridge
- produce bounded technical-baseline direction without collapsing into implementation planning
- determine whether the current execution line now has enough baseline clarity for downstream governed steps
- stop after the bounded technical-baseline moment closes

This skill is not implementation.

It is not architecture theater.

It is not permission to start coding.

It is a bounded governed baseline-definition step.

---

## When To Use

Use this skill when all of the following are materially true:

- the project has enough product definition to support technical approach evaluation
- the technical baseline is still open or insufficiently authorized
- downstream governed work would otherwise rely on assumed defaults or convenience choices
- implementation, handoff, or execution preparation is materially blocked by missing baseline clarity

Typical triggers include:

- `prepare-handoff` cannot safely package execution because stack / runtime / persistence / architecture baseline is still open
- `implement-approved-scope` detects that implementation would depend on a missing or ungoverned technical baseline
- the active project is modern and product-facing, but no bounded technical approach has yet been stabilized
- the project risks silently defaulting to one habitual stack even though a better project-fit option may exist

---

## When Not To Use

Do not use this skill when:

- the technical baseline is already explicitly governed and stable
- the project is still too early in discovery to support informed technical selection
- the current need is direct implementation rather than baseline definition
- the current need is merely to look up framework/library docs for an already authorized baseline
- the project has not yet stabilized enough product or delivery constraints to make a bounded technical decision meaningful

This skill does not replace:

- `discover-missing-context`
- `define-prd`
- `define-experience-direction`
- `define-growth-strategy`
- `prepare-handoff`
- `implement-approved-scope`

---

## Governing Role

This skill performs a bounded governed step that may be required before safe execution preparation or implementation.

It remains subordinate to:

- governance
- project state
- the active workflow
- active artifacts
- technical-baseline authority rules

It must not behave as a freeform architecture consultation.

It must not decide implementation details beyond what is needed to establish the baseline.

---

## Core Responsibility

This skill is responsible for answering, in bounded synthesized form:

- whether the current project still lacks a governed technical baseline
- which technical choices are materially blocking downstream work
- what technical approach is most appropriate for this project class
- which trade-offs meaningfully matter
- what baseline is recommended vs. what remains open
- whether downstream governed work can now proceed more safely

This skill must stay at the level of:

- baseline
- approach
- major technical direction
- stack family
- persistence/runtime direction
- project-shape fit

It must not drift into:

- code generation
- folder scaffolding
- implementation steps
- configuration steps
- package installation instructions

---

## Specialist Requirement

This skill must explicitly evaluate and normally use:

- `technical-baseline`

When materially relevant, it may also use bounded support from adjacent specialists such as:

- `architect`
- `frontend`
- `backend`
- `database`

But it must not silently expand into a multi-specialist implementation planning session.

The main specialist for this bounded step is:

- `technical-baseline`

Specialist routing/execution must remain honest:
- canonical agent resolved
- runtime route honored
- execution outcome reported conservatively
- no overclaiming if guidance was only partial / behavioral

---

## Inputs This Skill Should Use

When available and materially relevant, this skill should ground its recommendation in:

- stabilized project context
- active PRD
- active validation
- active Experience artifact
- active Strategy artifact
- delivery constraints
- performance / scalability / reliability needs
- UX quality expectations
- maintainability expectations
- known team constraints
- known integration or domain constraints
- existing repository continuity when it clearly governs the same execution line

This skill must not invent missing upstream truth.

If context is still too weak to support informed baseline definition, this skill must stop and return control honestly.

---

## Modernity Requirement

For serious modern product-facing work, this skill should strongly favor:

- TypeScript for frontend-facing execution lines
- frameworked frontend approaches over vanilla HTML/CSS/JS
- modern, maintainable, ecosystem-strong approaches

For user-facing frontend work, this skill must not normalize:

- plain JavaScript
- plain HTML/CSS/JS
- vanilla frontend stacks

as the default answer unless there is a specific, grounded, governed reason.

Typical acceptable modern directions may include:

- Next.js + TypeScript
- React + TypeScript

For backend/service work, the skill may recommend options such as:

- Node.js / TypeScript
- Go

depending on execution fit.

This skill must not force the same stack every time.

It must choose the best bounded modern approach for the actual project.

---

## Output Modes

This skill has only two valid non-error output modes.

### Output Mode A — Technical Baseline Still Blocked

Use this mode when:

- product definition is still too weak for safe baseline selection
- a materially required specialist could not be used safely
- technical direction would still be mostly guesswork
- the current project needs a prior governed clarification first

A correct output in this mode must include:

1. what blocks safe baseline definition
2. what is known vs unresolved
3. why downstream work must not proceed on assumptions
4. the correct next bounded governed move
5. a clear stop

---

### Output Mode B — Technical Baseline Defined For Current Pass

Use this mode when bounded technical-baseline synthesis materially succeeded.

A correct output in this mode must include:

1. a concise statement that baseline direction materially completed for the current bounded pass
2. which specialists were materially relevant
3. which specialists were actually used and with what execution outcome
4. the recommended technical baseline
5. the main trade-offs
6. what remains open vs now governed enough
7. the correct next allowed governed move
8. a clear stop without executing that next move inline

---

## Canonical Output Shape

When this skill materially succeeds, the output should normally make explicit:

- Bounded Step: define-technical-baseline
- Project Class: [what kind of product/system this is]
- Baseline Question: [what needed to be decided]
- Material Specialists Required: [list]
- Specialists Actually Used: [list + honest outcome]
- Recommended Frontend Approach: [if relevant]
- Recommended Backend / Service Approach: [if relevant]
- Recommended Persistence / Data Direction: [if relevant]
- Key Trade-offs: [bounded synthesis]
- Baseline Truthfulness Notes: [what is grounded vs still open]
- Downstream Consequence: [what later work may now rely on]
- Next Allowed Step: [single bounded governed move]
- Stop: yes

---

## Anti-Premature Progression

This skill must not:

- auto-open implementation
- auto-open prepare-handoff inline
- auto-open execution-unlock
- generate code
- generate scaffolding
- generate package/config files
- produce framework setup instructions
- pretend the recommendation is already implementation authorization
- convert technical approach evaluation into full architecture planning
- force a fixed stack just because it is familiar
- treat Context7 lookup as a substitute for baseline definition

If this bounded step materially completes, it must stop after:

- producing explicit baseline synthesis
- identifying the next allowed governed move
- applying coherent state closure when valid

Nothing later.

---

## Context7 Boundary

This skill may identify which frameworks/libraries would later require Context7-backed verification during implementation.

It must not use Context7 as a substitute for choosing the baseline.

Baseline definition comes first.

Context7 becomes materially required later when implementation needs current/version-sensitive documentation for the already authorized baseline.

---

## State Closure Expectations

If this skill materially completes and coherent state closure is possible, the resulting `PROJECT_STATE.md` should describe one coherent post-baseline moment.

At minimum, that state should align with:

- the fact that baseline definition materially completed for the current pass
- whether downstream work is still blocked or now safer to continue
- the correct next governed move
- the fact that same-turn continuation is not authorized

If coherent state closure is not possible, this skill must report the closure as operationally incomplete rather than pretending the transition fully passed.

---

## Bootstrap Outcome Rule

This skill must distinguish between:

- baseline defined and compatible codebase already exists
- baseline defined but bootstrap is still required

If the technical baseline is materially established but no compatible implementation codebase yet exists, the correct next bounded move is:

- `bootstrap-implementation-baseline`

This skill must not treat baseline definition alone as proof that feature implementation can begin.

---

## Failure Handling

If a materially required specialist cannot be safely routed or executed:

- do not narrate that specialist as successfully used
- report the limitation clearly
- downgrade the synthesis claim conservatively
- stop if downstream work remains baseline-blocked

If the project context is too weak for safe baseline definition:

- do not compensate by guessing
- report the blocking ambiguity
- identify the correct prior governed step
- stop

If the recommendation would still depend mostly on habit, convenience, or ungrounded preference:

- do not present it as governed baseline direction
- report what remains open
- stop or downgrade closure conservatively as needed

---

## Final Rule

A correct `define-technical-baseline` must answer, in bounded synthesized form:

- what technical baseline question needed to be decided?
- which specialists were materially relevant?
- what modern, maintainable, project-fit technical direction now exists?
- what remains open vs governed enough?
- what is the single next allowed governed move?

It must then stop.

It must not turn baseline definition into implementation, scaffolding, architecture theater, or stack-by-habit behavior.