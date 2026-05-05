# DESIGN WORKFLOWS

## Purpose

This file defines reusable design workflows for `ai-dev-system`.

It translates the strongest reference-player patterns into bounded moves:

- Impeccable contributes `shape`, `extract`, `audit`, `critique`, `polish`, `harden`, and `animate`.
- SkillUI contributes extraction evidence: tokens, components, screenshots, layout, interactions, and generated references.
- Taste Skill contributes visual dials and anti-generic UI pressure.
- Emil design engineering contributes motion purpose, timing, interruptibility, and invisible polish.
- awesome-design-md contributes the semantic `DESIGN.md` artifact shape.

These workflows are not phases.

They are design moves that can be used inside Discovery, Planning, or Build/Review when the task needs them.

---

## Workflow Selection

| Need | Workflow | Primary Specialist |
|---|---|---|
| define visual direction before implementation | `shape` | `design-system` |
| extract reusable system from existing UI | `extract` | `design-system` |
| inspect accessibility/performance/responsive/theming issues | `audit` | `ui` |
| critique hierarchy, clarity, tone, cognitive load, and user feeling | `critique` | `ui` |
| final alignment and visual quality pass | `polish` | `ui` |
| stress-test UI against edge cases and resilience | `harden` | `ui` |
| design or review motion/interactions | `animate` | `motion` |

Do not run all workflows because they exist.

Pick the smallest workflow that protects the next movement.

---

## Shared Workflow Rules

Every design workflow must state:

- active task or artifact
- target surface
- design-system source used
- evidence inspected
- in scope
- out of scope
- output expected
- review/evidence requirement

Every design workflow must avoid:

- redesigning beyond task scope
- inventing product personality from code alone
- treating another brand's system as a template to copy
- hiding product uncertainty behind visual polish
- claiming visual quality without screenshots or inspectable evidence when the result is user-facing

---

## Shape Workflow

Use `shape` when the system needs visual direction before building.

### Inputs

- Discovery/Synthesis context
- target audience and use case
- brand/tone notes
- references and anti-references
- constraints
- target surfaces

### Steps

1. Confirm the product/user context.
2. Identify desired emotional tone.
3. Define 2-4 design principles.
4. Choose visual posture.
5. Set design dials only if useful:
   - visual variance
   - motion intensity
   - visual density
6. Define anti-goals.
7. Produce a short design brief or `DESIGN.md` update.

### Output

```markdown
## Design Shape

Context:
Target Surface:
Audience / Use:
Tone:
Design Principles:
Visual Dials:
References:
Anti-References:
Constraints:
Open Decisions:
Next Workflow:
```

---

## Extract Workflow

Use `extract` when an existing project has visual patterns worth turning into reusable system truth.

### Inputs

- existing UI files
- global CSS/theme/token files
- component directories
- screenshots if available
- existing `DESIGN.md` if present

### Steps

1. Discover design-system surfaces.
2. Identify patterns repeated 3+ times.
3. Identify local values that should become tokens.
4. Identify duplicate component implementations.
5. Identify state patterns.
6. Identify motion/timing patterns.
7. Classify each finding:
   - `system-truth`
   - `system-pattern`
   - `system-drift`
   - `missing-system`
   - `taste-risk`
   - `accessibility-risk`
8. Recommend extraction or consolidation only where reuse is real.

### Output

```markdown
## Design Extraction

Inspected:
System Truth:
Repeated Patterns:
Drift:
Missing System:
Extraction Candidates:
Token Candidates:
Component Candidates:
Migration Notes:
Risks:
```

---

## Audit Workflow

Use `audit` when checking whether UI is technically and visually safe.

### Checks

- accessibility
- contrast
- keyboard/focus
- semantic HTML
- responsive behavior
- touch targets
- theming/dark mode
- performance
- animation cost
- token usage
- anti-patterns

### Severity

| Severity | Meaning |
|---|---|
| `P0` | blocks task completion or core user flow |
| `P1` | significant usability, accessibility, or release risk |
| `P2` | meaningful quality issue with workaround |
| `P3` | polish issue |

### Output

```markdown
## UI Audit

Target:
Evidence:
Health:
Findings:
- [P?] [Issue]
  Location:
  Category:
  Impact:
  Recommendation:
Systemic Issues:
Positive Findings:
Next Action:
```

---

## Critique Workflow

Use `critique` when the question is not only "does it work?" but "does this experience make sense and feel right?"

### Checks

- visual hierarchy
- cognitive load
- emotional tone
- clarity of primary action
- information scent
- trust and anxiety points
- first impression
- ending/confirmation moment
- persona or context mismatch
- content specificity

### Output

```markdown
## UI Critique

Target:
Intended Tone:
Actual Impression:
What Works:
Priority Issues:
Persona / Context Risks:
Questions:
Recommended Direction:
```

---

## Polish Workflow

Use `polish` after implementation exists and the goal is final alignment.

### Checks

- spacing and alignment
- typography hierarchy
- token consistency
- hover/focus/active/disabled states
- loading/empty/error/success states
- copy consistency
- icon/image consistency
- responsive behavior
- cleanup of dead/ad hoc code

### Output

```markdown
## Polish Pass

Target:
Design System Source:
Issues Fixed:
Issues Deferred:
Evidence:
Remaining Drift Risk:
```

---

## Harden Workflow

Use `harden` when the UI might fail outside the happy path.

### Test With

- very long text
- missing data
- empty data
- large data
- network errors
- rapid repeated clicks
- narrow mobile viewport
- keyboard-only navigation
- reduced motion
- high text zoom
- localization/longer language strings when relevant

### Output

```markdown
## UI Hardening

Target:
Stress Cases Checked:
Failures:
Fixes:
Evidence:
Remaining Risks:
```

---

## Animate Workflow

Use `animate` when motion or interaction behavior is material to the task.

Route to `motion`.

### Decision Questions

1. Should this animate at all?
2. What purpose does the motion serve?
3. How often will users see it?
4. What should happen for reduced motion?
5. Can it run through `transform` and `opacity`?
6. Does it remain responsive under load?

### Output

```markdown
## Motion Plan

Target:
Purpose:
Frequency:
Motion Decision:
Timing:
Easing:
Reduced Motion:
Performance Risk:
Evidence Required:
```

---

## Final Rule

Design workflows exist to make design decisions more inspectable.

If a workflow only creates more words, do not use it.
