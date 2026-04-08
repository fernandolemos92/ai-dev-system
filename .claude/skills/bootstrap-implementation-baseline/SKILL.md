---
name: bootstrap-implementation-baseline
description: Materialize the initial authorized application baseline so implementation can proceed on a real codebase rather than on abstract stack intent.
---

# SKILL: bootstrap-implementation-baseline

## Purpose

Perform the bounded governed step that creates the initial implementation baseline for a project whose technical approach is already defined but whose real codebase does not yet exist.

This skill exists to:

- materialize the authorized implementation baseline
- create the minimum viable project scaffold required for downstream implementation
- keep bootstrap separate from product feature implementation
- stop after the baseline codebase is materially established

This skill is not feature implementation.

It is not a substitute for technical-baseline definition.

It is not a license to expand scope.

---

## When To Use

Use this skill when all of the following are materially true:

- the technical baseline has already been explicitly governed
- implementation or handoff depends on a real codebase existing
- no compatible application baseline currently exists
- downstream feature work would otherwise be forced to scaffold implicitly

Typical triggers include:

- `define-technical-baseline` concluded that bootstrap is still required
- `prepare-handoff` is blocked because no compatible codebase exists
- `implement-approved-scope` cannot proceed because the repository has no implementation baseline

---

## When Not To Use

Do not use this skill when:

- the technical baseline is still open or not yet governed
- a compatible application baseline already exists
- the current need is to implement a bounded product feature
- the current need is to choose stack/framework/runtime rather than scaffold the already chosen baseline

This skill does not replace:

- `define-technical-baseline`
- `prepare-handoff`
- `implement-approved-scope`

---

## Core Responsibility

This skill is responsible for:

- creating the minimum real codebase required by the governed technical baseline
- scaffolding only what is necessary to establish the implementation baseline
- keeping bootstrap clean, minimal, and reusable
- stopping before product feature implementation begins

Bootstrap may include, when already authorized upstream:

- project initialization
- framework/app scaffold
- TypeScript baseline
- styling baseline
- UI baseline
- minimal config files
- minimal folder structure
- baseline package/dependency setup
- minimal run/build sanity

Bootstrap must not include:

- onboarding feature implementation
- guest flows
- dashboard flows
- business logic of the product
- hidden scope expansion

---

## Bootstrap Location Rule

This skill must not scaffold a new product codebase at the repository root by default.

Bootstrap must materialize the codebase in a governed implementation target location.

Location selection order:

1. If a governed implementation target path already exists in the active project state, baseline decision, handoff, or repository convention, use that exact target.
2. If the repository already contains a canonical workspace convention such as `apps/`, `services/`, or `packages/`, respect that convention.
3. If no governed implementation target exists yet, the default bootstrap location for a single modern product-facing application is:

- `apps/<project-slug>/`

4. If the project requires multiple bounded applications or services and that split is already governed, bootstrap may instead materialize:

- `apps/<project-slug>-web/`
- `services/<project-slug>-api/`

This skill must not invent a more complex monorepo layout unless that complexity is already justified by the governed baseline.

---

## Project Slug Rule

This skill must derive the project slug from the governed project identity.

The slug must be:

- lowercase
- kebab-case
- stable
- short
- descriptive

It must not use:

- spaces
- accents
- generic names such as `new-project`, `app`, or `test`
- unstable suffixes such as `final`, `v2`, `new`, or dates unless governance explicitly requires them

If no stable governed project identity exists yet, this skill must stop rather than invent a bootstrap location.

---

## Existing Workspace Respect Rule

If a compatible implementation workspace already exists for the active project, this skill must not create a parallel bootstrap location.

It must either:

- reuse the existing compatible workspace
- or stop and report the conflict clearly

This rule exists to prevent duplicate app roots and accidental split codebases.

---

## No Root Scaffolding by Default

Repository-root scaffolding is exceptional.

This skill must only bootstrap at repository root when:

- the repository is already explicitly governed as a single application repository
- and the baseline decision explicitly authorizes root-level materialization

Otherwise, root scaffolding is not allowed.

---

## Boundaries

This skill must not:

- decide the technical baseline on its own
- add new libraries beyond the governed baseline without surfacing the dependency explicitly
- implement product-facing features
- treat bootstrap as permission to continue into implementation in the same turn
- silently widen the app structure far beyond the minimum baseline

This skill must remain a bounded setup step.

---

## Context7 Discipline

If bootstrap depends on current or version-sensitive documentation for the already governed baseline, Context7-backed documentation lookup must be used materially before setup guidance or scaffold choices are applied.

Context7 here supports correct bootstrap of the authorized baseline.

It does not replace baseline definition.

---

## Output Modes

### Output Mode A — Bootstrap Blocked

Use when:

- the technical baseline is still not governed
- required bootstrap decisions are still open
- the repository context is insufficient to materialize the baseline safely

A correct output must include:

1. what blocks bootstrap
2. what is already governed vs still open
3. the correct next bounded move
4. a clear stop

### Output Mode B — Bootstrap Completed For Current Pass

Use when the initial baseline codebase has been materially established.

A correct output must include:

1. what baseline was materialized
2. what was scaffolded
3. what was intentionally left out
4. what downstream implementation can now rely on
5. the single next allowed governed move
6. a clear stop

---

## Canonical Output Shape

- Bounded Step: bootstrap-implementation-baseline
- Governed Baseline: [authorized baseline summary]
- Bootstrap Scope: [what was scaffolded]
- Explicit Exclusions: [what was not implemented]
- Context7 Usage: [materially used or not needed]
- Codebase Status: [baseline established or blocked]
- Next Allowed Step: [single governed move]
- Stop: yes

---

## Final Rule

A correct `bootstrap-implementation-baseline` must create the real initial codebase required for later implementation, without collapsing into product feature work.

It must stop after bootstrap closure.