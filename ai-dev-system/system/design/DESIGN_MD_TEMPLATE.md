# DESIGN.md TEMPLATE

## Purpose

Use this template when a project needs an agent-readable design system.

This is a template, not the final design system.

Fill it with product-specific context, extracted system truth, and intentional decisions.

---

# Design System: [Project Name]

## 1. Visual Theme And Atmosphere

Describe the product's visual posture in concrete terms.

Include:

- audience and usage context
- emotional tone
- density
- visual variance
- motion posture
- what the interface should never feel like

## 2. Token Architecture

Separate visual atmosphere from implementable tokens.

Use the canonical chain:

`raw value -> primitive token -> semantic token -> component or surface usage`

Define:

- primitive tokens when useful: raw color scales, spacing, radius, shadow, duration, easing
- semantic tokens as the default implementation API: `color.canvas`, `color.surface`, `color.text.primary`, `color.accent.solid`, `color.accent.contrast`, `color.border.subtle`, `color.state.danger`
- state-aware semantic tokens when interaction changes meaning: `color-bg-fill-primary-hover`, `color-text-primary-disabled`, `color-border-tertiary-default`
- component tokens only for stable repeated components: `button.primary.background`, `input.border.focus`
- surface tokens only for durable repeated surfaces

Product components must not consume raw values directly. Product components should not consume primitive tokens directly unless the design system explicitly authorizes the exception.

Prefer `oklch()` for new modern web projects when supported. Use hex when compatibility or existing tooling requires it.

If using Radix-like inspiration, document tonal scale, contrast pairs, state mapping, and dark-mode readiness rather than copying palette names blindly.

## 3. Color Palette And Roles

List semantic colors.

Do not list colors without roles.

```markdown
- **Canvas** (`#...`) - page background
- **Surface** (`#...`) - panels and grouped content
- **Text Primary** (`#...`) - headings and primary body text
- **Text Muted** (`#...`) - secondary labels, helper copy
- **Border** (`#...`) - dividers and low-emphasis boundaries
- **Accent** (`#...`) - CTAs, links, focus rings, active states
- **Danger** (`#...`) - destructive actions and errors
- **Success** (`#...`) - confirmations and positive state
```

## 4. Typography Rules

Define:

- display font
- body font
- mono font if needed
- type scale
- line-height rules
- max text width
- numeric/data rules

## 5. Spacing, Layout, And Grid

Define:

- base spacing unit
- spacing scale
- container widths
- grid rules
- card usage rules
- mobile collapse rules

## 6. Components And States

Document common components and required states.

Each component should include:

- visual role
- variants
- token usage
- interaction states
- accessibility notes

Required state coverage:

- default
- hover
- focus
- active
- disabled
- loading
- empty
- error
- success

## 7. Motion And Interaction

Define motion purpose and limits.

```markdown
- Motion should clarify state changes, preserve spatial continuity, or provide feedback.
- Frequent actions should be instant or nearly instant.
- Use transform and opacity for most motion.
- Respect prefers-reduced-motion.
- Do not animate keyboard-heavy workflows unless there is a strong reason.
```

Include timing:

```markdown
- Button press: 100-160ms
- Tooltip/popover: 125-200ms
- Dropdown/select: 150-250ms
- Modal/drawer: 200-500ms
```

## 8. Responsive Behavior

Define:

- breakpoints
- mobile-first rules
- touch target rules
- overflow rules
- image/media behavior

## 9. Accessibility Requirements

Include:

- contrast targets
- keyboard navigation
- focus visibility
- semantic HTML
- alt text rules
- reduced motion
- form labeling

## 10. Do And Do Not

Make the system easy for agents to follow.

```markdown
### Do

- Use existing tokens.
- Reuse existing components.
- Keep states complete.
- Verify mobile behavior.

### Do Not

- Invent local colors.
- Duplicate components without need.
- Add decorative motion without purpose.
- Hide missing product decisions behind visual polish.
```

## 10.5 Token Usage Boundaries

Make token consumption operational, not decorative.

Define:

- who may consume primitive tokens
- who must consume semantic tokens
- when component tokens are justified
- when surface tokens are acceptable
- what may not be hardcoded downstream
- how dark mode, branding, or theme changes are resolved through token remapping

Include at least one explicit anti-example, such as:

- `Button uses blue-400`
- `Card uses #FFFFFF`

## 11. Agent Prompt Guide

Give implementation agents a quick guide.

```markdown
When building UI:

1. Read this file first.
2. Reuse existing components before creating new ones.
3. Use semantic tokens only in product components.
4. Do not use raw values or primitive tokens directly in product UI unless the design system explicitly allows it.
5. Include visible states.
6. Check responsive behavior.
7. Record evidence with screenshots or viewport notes when required.
```

---

## Evidence

List the source of truth used to create or update this document:

- product discovery:
- screenshots:
- token files:
- component inventory:
- references:
- open decisions:
