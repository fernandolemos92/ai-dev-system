---
name: assess-security-boundary
description: Evaluate whether a planned change or task crosses a security, data, or architectural risk boundary before implementation begins.
---

# SKILL: assess-security-boundary

## Purpose

Evaluate whether a proposed task or implementation change crosses a **security or architectural risk boundary**.

This skill helps prevent unsafe modifications to critical areas such as:

• authentication systems  
• authorization rules  
• sensitive data handling  
• infrastructure configuration  
• external integrations  
• security-critical APIs  

It acts as a **risk classification step** before implementation begins.

This skill does not implement security changes.

It only evaluates risk and determines whether additional safeguards are required.

---

# When To Use

Use this skill when:

• preparing execution handoff  
• reviewing a task that modifies sensitive components  
• introducing new external integrations  
• modifying authentication or authorization logic  
• handling user or financial data  
• exposing new APIs or endpoints  

Typical workflow usage:

tasks  
↓  
handoff  
↓  
scope-check  
↓  
**security boundary assessment ← this skill**  
↓  
implementation

This skill should normally run as a mandatory gate after scope alignment
and before implementation starts.

---

# When Not To Use

Do NOT use this skill when:

• the task is purely cosmetic  
• documentation changes are being made  
• internal refactoring has no behavioral impact  
• no sensitive components are involved  

If the change only affects formatting, comments, or UI styling, security assessment is unnecessary.

---

# Required Inputs

This skill should read:

PROJECT_STATE.md

The selected task artifact from:

project/tasks/active/

The related PRD from:

project/prd/active/

Relevant architecture guidance from:

ARCHITECTURE.md  
PATTERNS.md  

Optional inputs:

execution handoff artifact  
validation scenarios

Only retrieve information necessary to assess the change safely.

Avoid scanning the entire repository.

---

# Pre-Step Consistency Check

Before assessing risk, verify that PROJECT_STATE.md matches the filesystem.

Minimum checks:

• Active Task exists in project/tasks/active/  
• Active PRD exists in project/prd/active/  
• Active Handoff exists in project/handoff/active/ when referenced  

If a mismatch is detected:

STOP  
report the mismatch clearly  
correct the inconsistency before continuing  

---

# Security Boundary Categories

The skill must check whether the change affects any of the following boundaries.

### Authentication Boundary

Changes involving:

• login flows  
• identity verification  
• credential handling  
• session creation or tokens  

---

### Authorization Boundary

Changes involving:

• role permissions  
• access control rules  
• resource ownership  
• privilege escalation paths  

---

### Sensitive Data Boundary

Changes involving:

• personal user data  
• financial information  
• authentication secrets  
• tokens or API keys  
• internal logs containing sensitive fields  

---

### External Integration Boundary

Changes involving:

• third-party APIs  
• external services  
• payment providers  
• external data ingestion  

---

### Infrastructure Boundary

Changes involving:

• environment configuration  
• service deployment settings  
• database access rules  
• networking configuration  

---

# Risk Classification

The skill must classify the change into one of three categories.

---

## Low Risk

The change does not interact with security-sensitive areas.

Examples:

• UI updates  
• logging improvements  
• internal refactoring  
• documentation changes  

Execution may proceed to implementation once the governed gate is opened.

---

## Medium Risk

The change touches components that may affect security but does not directly modify security logic.

Examples:

• new endpoint exposing existing data  
• integration with internal services  
• modification of request validation  
• changes affecting data flow  

Execution may proceed only with explicit review expectations recorded in the handoff or review stage.

---

## High Risk

The change directly modifies security-critical systems.

Examples:

• authentication logic changes  
• authorization rule modifications  
• token handling changes  
• credential storage or verification  
• infrastructure access policies  

Execution must pause until explicit review or confirmation.

---

# Risk Analysis Output

The skill must produce a structured analysis.

## Security Boundary Summary

Which boundaries are involved.

---

## Risk Classification

Low Risk  
Medium Risk  
High Risk

---

## Reasoning

Brief explanation of why the change falls into this category.

Avoid long narrative.

---

## Recommended Action

Suggested next step.

Examples:

Low Risk → move to implementation gate evaluation  
Medium Risk → execution allowed with explicit review  
High Risk → require explicit confirmation or architecture review

---

# Security Awareness Rules

The skill must treat the following areas as **high sensitivity by default**:

• authentication flows  
• password handling  
• session tokens  
• payment processing  
• API credential storage  
• encryption logic  

If a task touches these areas, classify at least as **Medium Risk** unless clearly safe.

---

# Scope Discipline

This skill must not modify tasks or requirements.

It must not introduce new implementation details.

Its role is evaluation only.

If the task itself appears unsafe or incorrectly scoped, recommend returning to:

break-scope-into-tasks

---

# Escalation Rules

If the PRD introduces sensitive behavior not previously evaluated:

use check-scope-alignment

If the task attempts to introduce new security behavior outside PRD scope:

pause execution and recommend PRD update.

If context is insufficient to determine risk:

use detect-context-gap

---

# State Update Rule

This skill does not create a new artifact, but when the security assessment is complete
and risk is Low or acceptable Medium with required review noted, PROJECT_STATE.md should move to the implementation gate.

Required next state:

Current Phase:
security-check

Current Governing Skill:
assess-security-boundary

Next Expected Skill:
implementation

Execution Unlocked:
no

Execution remains locked until the explicit implementation gate is satisfied.

---

# Output Expectations

Produce a concise structured evaluation.

Example output:

Security Boundary Summary

Authentication Boundary: no  
Authorization Boundary: no  
Sensitive Data Boundary: yes  
External Integration Boundary: no  
Infrastructure Boundary: no  

Risk Classification

Medium Risk

Reasoning

The task introduces a new endpoint that exposes user profile data.

Recommended Action

Proceed with implementation but require validation of response filtering.

---

# Safety Rules

This skill must never:

• implement security features  
• modify system architecture  
• change project artifacts  
• bypass governance rules  

Its role is to **detect risk before execution**.

---

# Final Rule

Security boundaries exist to protect the system from unintended consequences.

Always prioritize:

• data protection  
• controlled system access  
• safe integration behavior  
• predictable execution
