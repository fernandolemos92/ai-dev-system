---
name: assess-memory-destination
description: Determine whether new information should be persisted to project memory and identify the correct destination to preserve system knowledge without polluting the repository.
---

# SKILL: assess-memory-destination

## Purpose

Determine whether a piece of information should be persisted in project memory and identify the correct storage location.

This skill protects the system from **memory pollution** while ensuring that important decisions and knowledge are preserved.

It evaluates:

• whether information should be saved  
• where it should be stored  
• whether existing memory should be updated instead of duplicated

This skill does not modify memory directly.

It only determines the correct destination.

---

# When To Use

Use this skill when:

• a design or architecture decision is made  
• a workflow rule is introduced  
• a governance clarification occurs  
• a new project-level insight appears  
• the system evolves in a meaningful way

Typical workflow usage:

discussion  
↓  
decision emerges  
↓  
**assess memory destination ← this skill**  
↓  
persist decision (if needed)

---

# When Not To Use

Do NOT use this skill when:

• the information is temporary  
• the information is task-specific  
• the information is already captured elsewhere  
• the information does not affect future system behavior

Examples of information that should NOT enter memory:

• short-term debugging notes  
• one-time implementation details  
• temporary clarifications  
• conversational explanations

---

# Required Inputs

The skill should analyze:

• the information being considered for persistence  
• existing project memory files  
• relevant architecture or governance documents

Primary memory locations:

project/memory/

project/memory/decisions/

PROJECT_CONTEXT.md

PROJECT_STATE.md

The skill must avoid broad repository scanning.

Only read files necessary to determine memory placement.

---

# Memory Destination Categories

The skill must determine which memory location is appropriate.

---

## Architecture Decision

Store in:

project/memory/decisions/architecture-decisions.md

Use when:

• defining system architecture rules  
• introducing architectural constraints  
• defining system structure  
• defining cross-component interactions

Example:

"Frontend should default to shadcn/ui + Tailwind + GSAP."

---

## Governance Decision

Store in:

project/memory/decisions/governance-decisions.md

Use when:

• defining system governance rules  
• clarifying workflow behavior  
• defining how agents must operate  
• establishing operational constraints

Example:

"Validation must occur before task decomposition."

---

## Workflow Decision

Store in:

project/memory/decisions/workflow-decisions.md

Use when:

• changing pipeline order  
• introducing new workflow stages  
• clarifying interaction between skills  
• modifying process rules

Example:

"Security boundary assessment occurs before execution."

---

## General Knowledge

Store in:

project/memory/

Use when:

• capturing useful persistent project insights  
• recording known system patterns  
• documenting recurring observations

Avoid storing ephemeral knowledge here.

---

## Project Identity

Store in:

PROJECT_CONTEXT.md

Use when:

• defining system philosophy  
• describing long-term project identity  
• documenting fundamental design principles

Changes to this file should be rare.

---

## Operational State

Store in:

PROJECT_STATE.md

Use when:

• updating current workflow position  
• defining the active artifact  
• updating execution status

This file should only store **short-term operational information**.

---

# Duplicate Detection

Before recommending memory storage, the skill must check:

• whether similar information already exists  
• whether the decision is already documented  
• whether an existing entry should be updated instead

If a matching entry exists, recommend updating the existing memory rather than creating a new one.

Avoid duplicate decisions.

---

# Memory Discipline

Project memory must remain **small and high signal**.

Do not recommend storage for:

• speculative ideas  
• unfinished thoughts  
• conversational remarks  
• redundant knowledge

Only persist information that will remain relevant across multiple sessions.

---

# Output Structure

The skill must return a structured recommendation.

## Memory Decision

Store in memory  
or  
Do not store

---

## Recommended Destination

If storage is recommended, identify the exact file.

Example:

project/memory/decisions/workflow-decisions.md

---

## Reasoning

Short explanation of why the information belongs in this location.

Avoid long narrative.

---

## Suggested Entry

Provide a concise version of the text that could be stored.

This helps maintain consistent memory style.

---

# Example Output

Memory Decision

Store in memory

Recommended Destination

project/memory/decisions/architecture-decisions.md

Reasoning

The information defines a persistent frontend architecture rule.

Suggested Entry

Default frontend stack should prioritize shadcn/ui with Tailwind CSS and GSAP for modern UI systems unless technical constraints require alternatives.

---

# Safety Rules

This skill must never:

• directly write to memory files  
• override existing entries automatically  
• store speculative or incomplete ideas  
• pollute memory with temporary context

Memory persistence must remain deliberate.

---

# Escalation Rules

If the information affects system governance:

consider storing in governance-decisions.md

If the information affects architecture:

consider storing in architecture-decisions.md

If the information changes workflow behavior:

consider storing in workflow-decisions.md

If the information appears temporary:

do not store.

---

# Final Rule

Project memory must remain **small, precise, and durable**.

Every stored entry should answer a question that future sessions might ask.

Always optimize for:

• signal over volume  
• clarity  
• long-term usefulness