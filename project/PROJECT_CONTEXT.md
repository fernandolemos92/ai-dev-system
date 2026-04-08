# PROJECT CONTEXT

This project is a governed AI-assisted development system.

It exists to make AI-supported engineering more predictable, traceable, reusable, and durable across sessions.

The system is designed to work reliably even when using low-capability or free models, without depending on improvisation as the main mechanism of continuity.

---

# PROJECT IDENTITY

This repository implements a governed, artifact-driven development system for AI-assisted engineering work.

It is not meant to be a loose prompt environment or an unconstrained code generation setup.

It is a structured system designed to help AI participate in engineering workflows with more discipline, clearer checkpoints, and stronger continuity over time.

---

# WHY THIS SYSTEM EXISTS

This system exists because unguided AI collaboration tends to drift toward:

- unstable reasoning
- uncontrolled generation
- ambiguous decisions
- loss of continuity across sessions
- excessive dependence on the current conversation

The project was created to reduce those risks and turn AI-supported work into a more governed engineering process.

Its goal is not to maximize generation speed.

Its goal is to improve engineering reliability.

---

# CORE PURPOSE

The purpose of this system is to transform AI development work into a flow that is:

- governed
- predictable
- artifact-driven
- reusable
- robust for low-context operation

The system is meant to support disciplined progress rather than improvisational output.

It aims to preserve decision quality, execution boundaries, and continuity as work moves from clarification to execution.

---

# PROJECT PHILOSOPHY

This project is guided by the following philosophy:

- clarity over cleverness
- structure over improvisation
- explicit decisions over implicit assumptions
- small controlled steps over large unstable jumps
- durable checkpoints over conversational drift
- stable reasoning over aggressive generation

The AI should behave as an engineering collaborator inside a governed system, not as an unconstrained autonomous generator.

---

# WHAT THE SYSTEM VALUES

The system favors:

- explicit workflow over informal progression
- durable artifacts over ephemeral conversational memory
- predictable transitions over heuristic shortcuts
- low ambiguity over broad interpretation
- bounded execution over uncontrolled expansion
- coherence across sessions over isolated turn-by-turn output
- disciplined extensibility over repeated core redesign

These values are especially important when operating with low-cost or free models, where context discipline and structural clarity matter even more.

---

# WHAT THE SYSTEM AVOIDS

The system is intentionally designed to avoid:

- structural improvisation
- stage skipping as a default behavior
- premature implementation
- hidden assumptions
- multiple competing sources of truth
- excessive dependence on the current conversation
- uncontrolled growth of the system core
- architectural drift between sessions

The project does not treat speed, convenience, or verbosity as substitutes for disciplined progression.

---

# OPERATING ARCHITECTURE

The system is organized into these main layers:

- `CLAUDE.md` for constitutional governance
- `project/PROJECT_STATE.md` for live operational state
- `system/workflows/` for macro workflow contracts
- `system/policies/` for transversal rule files
- `system/design/` for global design architecture, including constitutional design rules
- `.claude/skills/` for bounded governed execution units
- `system/agents/` for auxiliary specialization by domain
- `project/` artifact directories for durable workflow outputs
- `project/memory/` for durable decisions, patterns, and architecture notes

The project is intentionally moving toward a more explicit architecture where responsibility is distributed rather than concentrated in one oversized central file.

---

# ROLE OF ARTIFACTS

Artifacts are a core part of how this system creates durable progress.

They stabilize decisions, reduce ambiguity, and preserve continuity between stages of work.

The core progression artifacts are:

- PRD
- Design Foundation
- Validation
- Task
- Handoff

The optional domain artifacts are:

- Research
- Experience
- Strategy

Core progression artifacts support the minimum path from definition to governed execution.

Optional domain artifacts deepen the work when the project materially benefits from research grounding, experience direction, or growth strategy.

`Design Foundation` is the project-level design system artifact used when stabilized product direction must be translated into an implementation-capable design layer before downstream validation, task decomposition, and execution preparation.

Artifacts are not just outputs.

They are durable operational checkpoints.

---

# DESIGN ARCHITECTURE INTENT

The design architecture is intentionally layered.

It distinguishes between:

- `project/experience/...` for upstream experience direction
- `system/design/rules/...` for global constitutional design rules
- `project/design/...` for project-level design foundation artifacts

This separation exists so that the system does not confuse:

- direction with system definition
- global rules with project instantiation
- frontend implementation with design governance

The mandatory `Implementation Contract` lives inside a project-level design foundation rather than in the global rules layer.

---

# EXPANSION PHILOSOPHY

This system is intended to grow without losing coherence.

Its core should remain stable while new capabilities, domains, and specializations are added by fitting into existing contracts rather than redefining the foundation each time.

That means the system should be able to expand into areas such as product work, UX/UI, research, growth, analytics, or other domains without needing to reinvent its core identity every time it grows.

Expansion is expected.

Core instability is not.

---

# MACRO WORKFLOW INTENT

The repository defines a macro workflow layer with documents such as:

- `structured-research`
- `product-definition`
- `experience-direction`
- `growth-strategy`
- `governed-implementation`
- `review-and-closure`

These workflow files are meant to organize broader domains and stage clusters.

They do not replace the official governed stage model defined in `CLAUDE.md`.

They clarify how the system should operate across larger spans of work without turning every detail into central governance.

---

# PROJECT DEFAULTS FOR TECHNICAL BASELINES

This project may define official technical defaults that downstream governed steps may inherit when a bounded execution step requires an already authorized baseline.

These defaults do not override governance.

They exist to prevent repeated improvisation when the repository already has a preferred technical direction.

Current preferred defaults for modern product-facing frontend work are:

- React
- shadcn/ui
- Tailwind CSS

When relational persistence is needed and no stronger bounded decision overrides it, the preferred default is:

- PostgreSQL

These defaults apply only when:

- the current governed step legitimately requires a technical baseline
- no narrower upstream artifact has already defined a different authorized choice
- the step is not attempting to invent a new baseline outside governance

These defaults must not be treated as permission to skip workflow stages.

They are inheritance defaults, not improvisation licenses.

Repository-level defaults are not, by themselves, proof that the active execution line has a materially sufficient technical baseline.

They may contribute to baseline readiness, but they must not be treated alone as enough to:

- declare baseline readiness
- skip `define-technical-baseline`
- skip `bootstrap-implementation-baseline`
- prepare feature handoff on top of a codebase that does not yet materially exist
- authorize implementation unlock for an execution line that still depends on unresolved structural prerequisites

A downstream governed step must still evaluate whether the active execution line depends on additional unresolved baseline decisions such as:

- application bootstrap
- runtime / hosting model
- persistence / storage model
- auth model
- delivery boundary between frontend and backend
- repository implementation baseline for the current execution line

If such dependencies remain materially open, the step must not treat repository defaults as sufficient authorization.

If a bounded step still requires a technical decision that is not covered by official project defaults or by a narrower authorized artifact, that dependency must remain open and must not be silently decided by the executing skill.

---

# FINAL CONTEXT STATEMENT

This project is a governed, artifact-driven AI development system built to make engineering work with AI more reliable, structured, and durable.

It exists to replace improvisational collaboration with clearer checkpoints, stronger continuity, distributed architectural responsibility, and disciplined evolution over time.
