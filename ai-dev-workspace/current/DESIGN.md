# DESIGN

Project-specific design memory for the current ai-dev workspace.

Use this file only when UI, visual language, interaction, design-system, or experience quality materially affects the work. If the project has no user-facing interface yet, keep this file light and mark assumptions clearly.

For reusable standards, use `system/design/`. This file is for the target project only.

## 1. Visual Theme And Atmosphere

- Audience:
- Usage context:
- Product tone:
- Density:
- Motion posture:
- What the interface should not feel like:

## 2. Color Palette And Roles

Use semantic roles. Do not add raw colors without purpose.

- **Canvas**:
- **Surface**:
- **Text Primary**:
- **Text Muted**:
- **Border**:
- **Accent**:
- **Danger**:
- **Success**:

## 3. Typography Rules

- Display/UI font:
- Body font:
- Mono font:
- Type scale:
- Line-height rules:
- Max text width:
- Numeric/data rules:

## 4. Spacing, Layout, And Grid

- Base spacing unit:
- Spacing scale:
- Container widths:
- Grid rules:
- Card usage rules:
- Mobile collapse rules:

## 5. Components And States

Document only components that exist or are planned by a concrete task.

- Component:
- Role:
- Variants:
- States:
- Accessibility notes:

Required state coverage for interactive UI:

- default
- hover
- focus
- active
- disabled
- loading
- empty
- error
- success

## 6. Motion And Interaction

- Purpose:
- Timing:
- Easing:
- Frequency:
- Reduced motion behavior:
- Performance constraints:

If motion has no functional purpose, do not add it.

## 7. Responsive Behavior

- Breakpoints:
- Mobile-first rules:
- Touch target rules:
- Overflow rules:
- Media behavior:

## 8. Accessibility Requirements

- Contrast:
- Keyboard navigation:
- Focus visibility:
- Semantic HTML:
- Alt text:
- Forms:
- Reduced motion:

## 9. Do And Do Not

### Do

- Keep project-specific design decisions here.
- Link to evidence when available.
- Mark assumptions as assumptions.
- Route reusable visual language to `design-system`.
- Route screen-level critique to `ui`.
- Route animation decisions to `motion`.

### Do Not

- Copy visual identity from references.
- Invent polish to hide unclear product behavior.
- Use this file as generic design theory.
- Duplicate standards already defined in `system/design/`.

## Agent Prompt Guide

When building UI:

1. Read this file.
2. Read relevant `system/design/` standards.
3. Reuse existing project design decisions.
4. Use semantic tokens.
5. Include visible states.
6. Check responsive behavior.
7. Record evidence when the design decision affects delivery.

## Evidence

- Product discovery:
- Screenshots:
- Token files:
- Component inventory:
- References:
- Open decisions:
