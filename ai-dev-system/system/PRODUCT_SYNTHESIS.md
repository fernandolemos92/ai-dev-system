# PRODUCT_SYNTHESIS

## Purpose

`PRODUCT_SYNTHESIS.md` defines the quality bar for turning discovery into usable product direction.

It exists to prevent the system from jumping from raw discovery notes into planning or implementation with invented certainty.

This file complements `system/playbooks/phase-1-synthesis.md`.

---

## What Good Synthesis Must Do

Good synthesis must:

- preserve evidence strength instead of flattening it
- define a coherent problem frame
- identify the primary actor clearly enough for planning
- describe the current workflow or current workaround that matters
- state the intended outcome without turning it into a full spec
- define scope boundaries and non-goals
- surface the assumptions most likely to break execution later
- translate product direction into planning implications without creating tasks too early

---

## What Synthesis Is Not

Synthesis is not:

- a polished PRD
- a feature backlog
- a sales narrative
- an architecture proposal
- a UI spec
- a task list
- a substitute for real user validation

If the artifact starts pretending to be these things, synthesis has drifted.

---

## Core Questions

A synthesis artifact should answer:

1. Who is the primary actor?
2. What real problem or friction matters?
3. What do they do today?
4. Why does this matter now?
5. What direction seems justified from the evidence?
6. What is in scope now?
7. What is explicitly out of scope?
8. What remains uncertain?
9. What must planning avoid inventing?

If these questions cannot be answered cleanly, planning is not ready.

---

## Minimum Output Shape

A usable synthesis should usually contain:

- problem frame
- primary actor
- JTBD or equivalent job framing
- current workflow or workaround
- opportunity
- value proposition
- scope boundary
- non-goals
- assumptions and open questions
- validation needs
- planning implications

The exact shape may vary, but these truths should remain visible.

---

## Assumption Discipline

Synthesis must not hide weak truth.

Keep visible:

- what is direct evidence
- what is external evidence
- what is strong inference
- what is weak inference
- what is assumption
- what is open question
- what has already become an explicit decision

A clean document with hidden uncertainty is worse than a rough document with honest truth labels.

---

## Decision Preservation Discipline

Synthesis may narrow ambition, but it must not rewrite Discovery decisions.

Rules:

- direct user decisions remain direct decisions unless the user changes them
- ambiguous broad choices must stay visible as ambiguity or scope risk
- recommended narrowing must be labeled as recommendation, not fact
- out-of-scope items must not include user-requested items unless the artifact states a clear deferral rationale
- non-goals are for things the product should not be, not for requested features that merely need sequencing
- if a feature moves from requested/in-scope to deferred/out-of-scope, include the evidence or tradeoff that justifies the move

A synthesis that makes Planning easier by deleting inconvenient Discovery truth is invalid.
## Scope Discipline

A strong synthesis narrows the product slice.

It should make explicit:

- what belongs to the current slice
- what should be deferred
- what must stay out of scope for now
- what decisions are intentionally not made yet

Planning should inherit a smaller product truth, not a larger ambition.

---

## Planning Readiness Test

Synthesis is ready for planning only when planning can:

- choose a next slice without inventing the user
- define tasks without inventing product direction
- identify meaningful target surfaces without guessing the whole product
- set done criteria without making up the value logic
- defer unresolved questions instead of smuggling them into implementation

If planning still needs to invent any of these, synthesis is not ready.

---

## Failure Patterns

Watch for these signs of bad synthesis:

- actor is still generic or fuzzy
- current workflow is absent
- value proposition reads like marketing copy
- every insight becomes a feature
- non-goals are missing
- risks are listed but do not change the scope
- open questions are buried at the end
- planning implications are vague or over-detailed

---

## Final Rule

Good synthesis makes the next planning move smaller, truer, and harder to fake.

