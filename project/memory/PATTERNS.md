# PATTERNS

This file stores reusable patterns for the system.

Patterns are repeatable, reusable, and relatively stable ways of working that improve consistency, clarity, and output quality across sessions.

This file is not a governance document.
This file is not the live project state.
This file is not the full architecture of the system.
This file is not a decision log.

Use this file to record patterns that are likely to remain useful across multiple situations.

Decisions belong in:
`project/memory/decisions/`

Architecture overview belongs in:
`project/memory/ARCHITECTURE.md`

---

# PURPOSE OF THIS FILE

`PATTERNS.md` exists to capture recurring conventions and reusable good practices that help the system behave more consistently over time.

A good pattern should help make work:

- clearer
- more reusable
- less ambiguous
- easier to continue across sessions
- more reliable for low-cost or free models

---

# WHAT QUALIFIES AS A PATTERN

A pattern belongs here when it is:

- repeatable across multiple situations
- useful beyond a single task or refactor
- likely to improve consistency
- stable enough to be reused later
- specific enough to guide behavior without becoming governance

A pattern does not belong here when it is:

- a central workflow rule
- current project state
- a one-time decision
- a repository-wide architectural explanation
- a temporary note
- a loose observation with no repeatable value

---

# PATTERN ENTRY FORMAT

Use this structure for each pattern entry:

## PATTERN-XXX — [short title]
Type: [operational | artifact | handoff | state | memory | skill | extensibility | other]
Status: [active | deprecated]
Summary: [short explanation]

Use When:
- [situation]
- [situation]

Pattern:
- [repeatable convention]
- [repeatable convention]
- [repeatable convention]

Avoid:
- [anti-pattern]
- [anti-pattern]

---

# OPERATIONAL PATTERNS

## PATTERN-001 — One current bounded action
Type: operational
Status: active
Summary: Prefer one clearly bounded current action at a time.

Use When:
- handling multi-step work
- reducing ambiguity for low-cost models
- deciding what should happen now

Pattern:
- identify the main current action
- keep secondary work as later follow-ups
- express the action in a bounded and concrete way

Avoid:
- multiple simultaneous primary actions
- vague execution like "do everything"

## PATTERN-002 — Small task decomposition
Type: operational
Status: active
Summary: Break larger work into smaller executable units before execution.

Use When:
- scope touches multiple concerns
- execution order matters
- a single step would be too broad

Pattern:
- identify the main objective
- split work into narrow executable units
- give each unit a clear done condition

Avoid:
- one task that represents an entire feature
- tasks with unclear completion boundaries

## PATTERN-003 — Simplify for low-cost model reliability
Type: operational
Status: active
Summary: Prefer the simplest safe structure when multiple valid approaches exist.

Use When:
- uncertainty is high
- scope is expanding
- the next action is still broad

Pattern:
- reduce unnecessary scope
- choose one safe next action
- prefer explicit structure over flexibility
- keep outputs predictable

Avoid:
- overly abstract next steps
- broad uncontrolled changes
- unnecessary fragmentation

## PATTERN-004 — Completion after meaningful checking
Type: operational
Status: active
Summary: Treat meaningful work as complete only after checking it against the intended result.

Use When:
- finishing implementation work
- reviewing a task outcome
- assessing whether a bounded step is truly done

Pattern:
- compare the output against the intended outcome
- identify visible gaps or missing checks
- mark the step complete only after the result is meaningfully verified

Avoid:
- treating generated output as automatically complete
- declaring completion without checking expected results

---

# ARTIFACT AND HANDOFF PATTERNS

## PATTERN-005 — Bounded handoff
Type: handoff
Status: active
Summary: A handoff works best when it contains only the context needed for the next bounded step.

Use When:
- moving from planning to execution
- passing work from one bounded step to another
- reducing context overload

Pattern:
- state the immediate objective
- include only relevant context
- define the expected output
- define the completion condition

Avoid:
- vague handoffs
- large context dumps with unclear purpose

## PATTERN-006 — Artifact minimalism
Type: artifact
Status: active
Summary: Create or update artifacts only when they serve a real structural purpose.

Use When:
- deciding whether a new artifact is needed
- choosing between updating and creating
- reducing artifact sprawl

Pattern:
- confirm the artifact has a real purpose
- prefer the smallest adequate artifact move
- avoid duplicate artifacts with overlapping meaning
- keep artifact creation intentional

Avoid:
- creating artifacts by habit
- duplicate files with overlapping purpose
- placeholder artifacts with no real role

## PATTERN-007 — PRD-to-task shaping
Type: artifact
Status: active
Summary: Convert stabilized scope into bounded execution units rather than turning the PRD itself into the execution plan.

Use When:
- scope has already been stabilized
- execution is approaching
- work needs to become actionable

Pattern:
- extract the main executable concerns
- shape small bounded tasks from the stabilized scope
- keep tasks linked to the broader scope they came from

Avoid:
- using the PRD itself as the task list
- creating tasks that merely restate scope without action

## PATTERN-008 — Template-first consistency
Type: artifact
Status: active
Summary: Use canonical templates to reduce ambiguity when writing recurring artifacts or operational documents.

Use When:
- creating a new artifact
- updating a structured recurring document
- improving consistency for low-cost models

Pattern:
- start from the canonical template when one exists
- preserve the intended structure unless a real change is needed
- keep the output aligned with the template’s purpose

Avoid:
- inventing ad hoc document structures unnecessarily
- over-customizing recurring artifacts without reason

---

# STATE AND MEMORY HYGIENE PATTERNS

## PATTERN-009 — Concise live state updates
Type: state
Status: active
Summary: Keep live state updates short, situational, and focused on the present operational snapshot.

Use When:
- updating `PROJECT_STATE.md`
- recording the current operational moment
- cleaning stale state content

Pattern:
- record only the current phase, active artifacts, operational flags, objective, blockers, next step, and short notes when needed
- keep the state factual and current
- remove stale or no-longer-relevant noise

Avoid:
- narrative logs
- decision history inside state
- architecture notes inside state
- backlog-style lists inside state

## PATTERN-010 — Durable memory filtering
Type: memory
Status: active
Summary: Store only durable knowledge in memory.

Use When:
- deciding whether something belongs in memory
- updating decisions, architecture, or patterns
- separating temporary execution noise from reusable knowledge

Pattern:
- store only knowledge that is likely to matter later
- choose the memory location that matches the content purpose
- keep memory entries concise and durable

Avoid:
- temporary thoughts
- daily execution noise
- duplicate content from tasks or state

---

# SKILL AND SPECIALIZATION PATTERNS

## PATTERN-011 — Bounded skill scope
Type: skill
Status: active
Summary: A skill works best when it operates inside a clearly bounded scope instead of trying to absorb adjacent responsibilities.

Use When:
- designing a new skill
- reviewing a skill that feels too broad
- keeping workflow operations predictable

Pattern:
- define the skill around one bounded job
- keep adjacent responsibilities outside the skill unless truly necessary
- make outputs compatible with governed progression

Avoid:
- skills that absorb multiple stages at once
- skills with unclear boundaries
- skills that behave like mini-governance systems

## PATTERN-012 — Specialization by attachment, not core rewrite
Type: extensibility
Status: active
Summary: New specializations should fit into existing contracts instead of forcing repeated redesign of the system core.

Use When:
- adding a new skill
- adding a new specialization layer
- expanding into a new domain

Pattern:
- preserve the stable spine
- add specialization through existing structural contracts
- keep extensions compatible with current governance, state, and artifact logic

Avoid:
- reinterpreting the core for every new domain
- coupling the spine to concrete specializations
- expanding by structural drift

---

# PATTERN MAINTENANCE

A pattern should be added only when it is genuinely reusable.

A pattern should be updated when:

- the current version causes confusion
- the system discovers a better repeatable approach
- the pattern has become too broad or outdated

A pattern should be deprecated when:

- it no longer reflects recommended repeatable practice
- it has been replaced by a stronger reusable pattern

---

# LOW-COST MODEL NOTE

Patterns are especially useful for low-cost or free models because they reduce interpretation burden and increase consistency across sessions.

Patterns should remain practical, compact, and reusable.

If a pattern becomes too abstract, too verbose, or too situational, it loses value.

---

# SUCCESS CONDITION

This file is working well when it helps answer:

- What repeatable good pattern fits this kind of work?
- Which reusable convention should be followed here?
- What should usually be avoided?
- How can future work remain consistent without redefining the core?