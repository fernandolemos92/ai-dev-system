---
name: frontend-design-review
description: Evaluate a proposed frontend design or UI implementation plan against modern UX principles, project standards, and frontend architecture guidelines.
---

# SKILL: frontend-design-review

## Purpose

Evaluate the quality and consistency of a proposed frontend design or UI implementation plan.

This skill performs a **design and architecture review** focused on:

• usability  
• design consistency  
• frontend architecture alignment  
• maintainability  
• modern UI practices

It helps ensure that frontend work follows established standards and avoids poor UI decisions.

This skill does not generate UI implementations.

It provides **structured design feedback and recommendations**.

---

# When To Use

Use this skill when:

• a new UI feature is being designed  
• a frontend implementation plan exists  
• a design proposal needs evaluation  
• reviewing a UI before implementation begins  
• ensuring consistency with project design standards

Typical workflow usage:

PRD  
↓  
validation  
↓  
tasks  
↓  
design proposal  
↓  
**frontend design review ← this skill**

---

# When Not To Use

Do NOT use this skill when:

• the request is purely backend  
• no UI elements are involved  
• the change affects only data or infrastructure  
• the system is still in early discovery

If UI requirements are still unclear, return to:

create-or-update-prd

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

Execution may proceed with recommended adjustments.

---

## Weak Design

The design introduces usability or architecture risks.

Implementation should pause until improvements are made.

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

It only evaluates and recommends improvements.

---

# Escalation Rules

If the PRD itself lacks UI clarity:

return to create-or-update-prd

If design decisions conflict with architecture:

recommend architecture review.

If UI structure conflicts with existing component patterns:

recommend updating the design before implementation.

---

# Final Rule

Frontend design should prioritize:

• clarity  
• consistency  
• maintainability  
• accessibility  
• performance

A good UI is not only visually appealing but also predictable and scalable.