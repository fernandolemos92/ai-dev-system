# Design System Architecture

## Purpose

This directory contains the global design architecture of the ai-dev-system.

It exists to define how design is governed at the system level, separately from project-level design artifacts.

---

## Layering

The design architecture is split into distinct layers:

- `project/experience/...`
  - upstream experience direction artifacts
  - defines quality bar, tone, and interaction priorities
  - does not replace a full design system

- `system/design/rules/...`
  - global constitutional design rules
  - governs tokens, accessibility, components, motion, and implementation-contract seriousness
  - applies across projects

- `project/design/...`
  - project-level design foundation artifacts
  - instantiates a concrete design system for a specific product
  - includes the project’s Implementation Contract

---

## Directory Responsibilities

### `system/design/rules/`
Contains the global rules capability for design.

### `project/design/`
Contains project-specific design foundation artifacts with lifecycle.

### `.claude/skills/define-design-foundation/`
Contains the skill responsible for generating a project-level design foundation.

---

## Core Rule

Global design rules live in `system/`.
Project-specific design system artifacts live in `project/`.

The system must not confuse global rules with project instantiation.

---

## Relationship To Governance

This layer must remain:

- explicit
- bounded
- state-aware
- lifecycle-aware
- governance-backed

Design is part of the architecture, not an informal frontend concern.