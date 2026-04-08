---
name: review-frontend-experience
description: Evaluate a proposed frontend design or UI implementation plan against modern UX principles, project standards, and frontend architecture guidelines.
---

# SKILL: review-frontend-experience

## Purpose

Evaluate the quality and consistency of an already-existing frontend design proposal, UI proposal, or frontend implementation plan.

This skill performs a **review-oriented design and architecture evaluation** focused on:

• usability  
• design consistency  
• frontend architecture alignment  
• maintainability  
• modern UI practices

It helps ensure that frontend work follows established standards and avoids poor UI decisions.

This skill does not generate UI implementations.

It provides **structured design feedback and recommendations**.

It is not the primary skill for first-pass experience-direction synthesis.

It should review an existing proposal, not stand in for the initial traversal of the `experience-direction` workflow.

---

# When To Use

Use this skill when:

• a frontend design proposal already exists  
• a UI proposal or surface-direction proposal needs critique  
• a frontend implementation plan exists and needs evaluation  
• a bounded pre-implementation frontend review is needed  
• a later-stage experience or frontend-facing artifact needs structured review against project standards

Typical workflow usage:

PRD  
↓  
validation  
↓  
tasks  
↓  
design proposal or frontend implementation plan  
↓  
**frontend design review ← this skill**

This skill is review-oriented.

It is not the default first-pass traversal step for entering the `experience-direction` workflow.

---

# When Not To Use

Do NOT use this skill when:

• the request is purely backend  
• no UI elements are involved  
• the change affects only data or infrastructure  
• the system is still in early discovery  
• the system is entering `experience-direction` for first-pass synthesis and no frontend design proposal, UI proposal, or implementation plan yet exists

If UI requirements are still unclear, return to:

define-prd

If the system needs initial experience-direction synthesis rather than review, return to:

define-experience-direction

---

# Hard Preconditions

This skill requires at least one real review target such as:

• an existing frontend design proposal  
• an existing UI proposal  
• an existing frontend implementation plan  
• an existing frontend-facing artifact that can be meaningfully reviewed

If no such target exists:

• stop  
• do not improvise surrogate direction  
• do not generate a first-pass experience synthesis inside this skill  
• return control to the correct bounded step

If first-pass experience synthesis is still needed, use:

define-experience-direction

This skill must not be used to compensate for the absence of a real review target.

---

# Required Inputs

This skill may analyze:

• PRD describing the feature  
• frontend implementation plan  
• UI mockups or descriptions  
• existing design system rules  
• project frontend architecture guidelines

Relevant references:

ARCHITECTURE.md  
PATTERNS.md

Optional:

design tokens  
component library guidelines

Avoid scanning the full repository.

Focus only on UI-related context.

---

# Project Frontend Standard

The default frontend stack for this system prioritizes:

• shadcn/ui  
• Tailwind CSS  
• GSAP for motion when needed

Alternative stacks may be used only when justified by:

• platform constraints  
• architecture compatibility  
• specific project requirements

Design decisions should align with these standards whenever possible.

---

# Review Areas

The skill must evaluate the design across the following areas.

---

## UX Clarity

Assess whether the interface clearly communicates its purpose.

Check for:

• clear user actions  
• understandable flows  
• intuitive interaction patterns  
• minimal cognitive load

Problems to detect:

• confusing layout  
• unclear primary action  
• inconsistent navigation

---

## Design Consistency

Evaluate whether the design follows consistent patterns.

Check for:

• component reuse  
• consistent spacing  
• consistent typography  
• consistent interaction behavior

Problems to detect:

• custom UI elements where standard components should exist  
• inconsistent visual hierarchy  
• duplicated UI patterns

---

## Component Architecture

Assess whether the UI structure is maintainable.

Check for:

• reusable components  
• separation of concerns  
• logical component hierarchy  
• avoidance of monolithic UI components

Problems to detect:

• oversized components  
• duplicated UI logic  
• poor state management structure

---

## Accessibility Awareness

Check whether the design considers accessibility.

Important aspects:

• readable typography  
• adequate contrast  
• keyboard navigation  
• meaningful interaction feedback

Accessibility improvements should be recommended where applicable.

---

## Performance Considerations

Assess potential performance risks.

Check for:

• unnecessary animation complexity  
• excessive DOM structure  
• inefficient rendering patterns

Motion effects using GSAP should remain lightweight and purposeful.

---

# Design Quality Classification

The skill must classify the design into one of three categories.

---

## Strong Design

The design is well structured and consistent.

No major concerns.

Minor suggestions may be provided.

---

## Acceptable Design

The design is functional but has areas that could be improved.

The reviewed proposal does not, by itself, block downstream governed progression, but recommended adjustments should be reflected before later delivery steps rely on it.

---

## Weak Design

The design introduces usability or architecture risks.

Downstream governed work should not rely on this proposal until the most important issues are corrected.

---

# Output Structure

The review must return a structured evaluation.

## Design Summary

Short description of the design being reviewed.

---

## Strengths

Positive aspects of the design.

---

## Issues Detected

List problems discovered during the review.

Each issue should include:

• description  
• impact on usability or maintainability

---

## Recommendations

Concrete improvements that would strengthen the design.

Avoid vague feedback.

Provide actionable guidance.

---

## Overall Classification

Strong Design  
Acceptable Design  
Weak Design

---

# Safety Rules

This skill must never:

• generate implementation code  
• modify project artifacts  
• introduce new requirements outside the PRD  
• override architectural constraints  
• authorize execution or same-turn downstream progression

It only evaluates and recommends improvements.

---

# Escalation Rules

If the PRD itself lacks UI clarity:

return to define-prd

If design decisions conflict with architecture:

recommend architecture review

If UI structure conflicts with existing component patterns:

recommend updating the design before implementation

If the real need is first-pass experience synthesis rather than review:

return to define-experience-direction

---

# Workflow Boundary Rule

This skill may support the broader experience layer, but only in a review capacity.

It must not be used as:

• the default entry point for `experience-direction`  
• a substitute for specialist-based experience synthesis  
• a way to skip explicit experience-direction traversal when the workflow still needs first-pass direction

If no proposal, plan, or frontend-facing artifact yet exists to review, this skill must not be treated as the correct first bounded step.

In that situation, the correct bounded traversal step is:

define-experience-direction

This skill must not convert review into synthetic direction just because a user-facing product exists.

---

# Final Rule

Frontend design should prioritize:

• clarity  
• consistency  
• maintainability  
• accessibility  
• performance

A good UI is not only visually appealing but also predictable and scalable.

This skill reviews an existing frontend-facing proposal.

It does not replace first-pass experience-direction synthesis.