---
name: check-motion-need
description: Decide whether motion is needed, what purpose it should serve, and whether GSAP is justified or simple CSS transitions are enough. Use for frontend work involving animation or interaction polish.
---

# SKILL: check-motion-need

## Purpose

Determine whether motion is actually needed and what level of motion is appropriate.

This skill exists to prevent unnecessary animation while still allowing purposeful motion that improves UX.

It helps the system:

- decide whether motion adds value
- decide whether GSAP is justified
- keep animation aligned with approved scope
- reduce decorative complexity
- support modern UI without motion abuse

This is an auxiliary frontend skill.

It does not approve UI scope, replace frontend design review, or introduce motion outside approved work.

---

# When To Use

Use this skill when:

- a frontend task includes animation or interaction polish
- a hero section, onboarding flow, or state transition may need motion
- GSAP is being considered
- the frontend or reviewer agent needs help deciding whether motion is purposeful

Typical examples:

- deciding whether a hero section should animate
- deciding whether form state transitions need motion
- deciding whether a loading transition should use CSS or GSAP
- deciding whether motion is unnecessary for a bounded UI task

---

# When Not To Use

Do not use this skill when:

- motion is not part of the approved scope
- the UI change is too small to justify dedicated motion analysis
- the decision is purely backend or architecture related
- no visual transition or interaction is under consideration

This skill must not:

- redefine UI scope
- replace review-frontend-experience
- create new requirements
- justify motion only for aesthetic reasons

If UI quality or structure is the real concern, use:

review-frontend-experience

---

# Required Inputs

Check the following when available:

- `project/PROJECT_CONTEXT.md`
- `project/PROJECT_STATE.md`
- relevant PRD files
- relevant task files
- relevant frontend artifact or description
- relevant design constraints
- the default frontend stack preference

This skill should avoid broad repository scanning.

Only use the minimum context necessary to decide whether motion is justified.

---

# Motion Principles

Motion should serve a real UX purpose.

Valid purposes include:

- clarifying state changes
- guiding attention
- reinforcing visual hierarchy
- improving continuity between UI states
- providing meaningful feedback

Motion should not:

- delay core interaction
- add decorative complexity with no UX value
- distract from primary user actions
- increase maintenance cost without clear benefit

Always prefer the simplest motion approach that achieves the UX goal.

---

# What To Evaluate

Assess:

1. whether motion serves a real UX purpose
2. whether motion improves feedback, emphasis, or flow
3. whether simple CSS or Tailwind transitions are sufficient
4. whether GSAP is justified by complexity or sequencing needs
5. whether motion would create unnecessary maintenance or distraction

---

# Motion Decisions

Use one of these:

### `no_motion_needed`
Use when motion adds no real value.

### `simple_transition_enough`
Use when basic CSS or Tailwind transitions are sufficient.

### `gsap_justified`
Use when richer sequencing, control, or advanced motion is clearly useful.

---

# Rules

- Motion must serve clarity, feedback, emphasis, or flow.
- Do not add motion just to look modern.
- Prefer the simplest approach that achieves the UX goal.
- Use GSAP only when the complexity really justifies it.
- Keep motion aligned with approved scope.
- Motion decisions must remain consistent with project frontend standards.

---

# Output Format

Always respond in this format:

Motion Decision:
[no_motion_needed | simple_transition_enough | gsap_justified]

Motion Scope:
[one short sentence describing the UI area or interaction]

Context Checked:
- [context source]
- [context source]

Why Motion Helps or Does Not Help:
[short explanation]

Recommended Motion Purpose:
- [feedback]
- [emphasis]
- [flow]
- [none]

Recommended Technical Approach:
[css_transition | tailwind_transition | gsap | none] — [short reason]

Risks or Tradeoffs:
- [real tradeoff]
- [real tradeoff]

Recommended Next Step:
[one bounded next action only]

---

# Anti-Patterns

Do not:

- recommend GSAP by default
- treat all motion as good UX
- ignore maintenance cost
- add animation with no real purpose
- confuse motion polish with actual usability improvement
- use motion to hide weak UX structure

---

# Final Rule

Motion should remain purposeful, minimal, and maintainable.

A good motion decision improves UX without increasing complexity unnecessarily.