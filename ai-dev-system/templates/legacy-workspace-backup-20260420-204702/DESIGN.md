# Design System: ai-dev-system

## 1. Visual Theme And Atmosphere

`ai-dev-system` is a documentation-first operating system for AI-assisted software delivery.

The primary audience is a solo builder or small product team using an LLM agent as an execution partner. The secondary audience is the agent itself, which needs stable product language, reusable constraints, and clear visual rules before creating interfaces or design artifacts.

The product should feel calm, precise, operational, and trustworthy. It should reduce cognitive load, make handoffs obvious, and keep decision-making visible. It should not feel like a flashy landing page, a generic AI dashboard, a decorative portfolio, or an overbuilt design-system showcase.

Recommended posture:

- **Density:** medium; compact enough for operator workflows, never cramped.
- **Visual variance:** low to medium; enough contrast to show hierarchy, not enough to create noise.
- **Tone:** clear, pragmatic, senior, and quietly opinionated.
- **Motion:** functional only; motion exists to clarify state changes, not to impress.
- **Priority:** readability, scanability, state clarity, and evidence over visual novelty.

## 2. Color Palette And Roles

These values are an initial recommendation, not extracted truth. Replace them when a real product interface, brand direction, or screenshot evidence exists.

- **Canvas** (`#F7F8FA`) - page background and quiet documentation surfaces.
- **Surface** (`#FFFFFF`) - grouped content, panels, tables, forms, and repeated items.
- **Surface Subtle** (`#EEF1F4`) - secondary bands, code-adjacent metadata, and low-emphasis containers.
- **Text Primary** (`#171A1F`) - headings and primary body text.
- **Text Muted** (`#667085`) - helper copy, metadata, secondary labels.
- **Border** (`#D9DEE7`) - dividers, table boundaries, and low-emphasis outlines.
- **Accent** (`#2563EB`) - links, primary actions, focus rings, active navigation.
- **Accent Soft** (`#DBEAFE`) - selected backgrounds and low-emphasis active states.
- **Danger** (`#C2410C`) - destructive actions, critical warnings, failed checks.
- **Danger Soft** (`#FFEDD5`) - warning backgrounds and non-blocking risk callouts.
- **Success** (`#15803D`) - completed checks, accepted handoffs, positive state.
- **Success Soft** (`#DCFCE7`) - success backgrounds and stable completion states.

Rules:

- Use semantic roles, not raw color decisions, in implementation prompts.
- Do not introduce local one-off colors without updating this file.
- Keep the interface from becoming monochrome. Accent should guide action, not dominate the page.
- Reserve danger colors for real risk, blocked work, or destructive operations.

## 3. Typography Rules

Use a practical system-font stack unless the product later gets a dedicated brand layer.

- **Display and UI:** Inter, system-ui, Segoe UI, Arial, sans-serif.
- **Body:** Inter, system-ui, Segoe UI, Arial, sans-serif.
- **Mono:** JetBrains Mono, SFMono-Regular, Consolas, monospace.

Type scale:

- **Page title:** 32px, 1.15 line-height, 700 weight.
- **Section title:** 22px, 1.25 line-height, 650 weight.
- **Subsection title:** 17px, 1.35 line-height, 650 weight.
- **Body:** 15px or 16px, 1.55 line-height, 400 weight.
- **Small text:** 13px, 1.45 line-height, 400 or 500 weight.
- **Code and metadata:** 13px or 14px, 1.45 line-height.

Rules:

- Max body text width should usually stay between 68 and 82 characters.
- Use mono text for file paths, commands, agent names, IDs, states, and structured contracts.
- Do not reduce letter spacing below `0`.
- Do not scale font size directly with viewport width.
- Avoid long all-caps labels; they reduce scanability in dense workflows.

## 4. Spacing, Layout, And Grid

Use an 8px spacing base.

- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64.
- **Content max width:** 1120px for app/workflow screens.
- **Reading max width:** 760px for long-form documentation.
- **Dense tables/logs:** may use full available width when scanability improves.
- **Radius:** 8px or less for buttons, cards, panels, and inputs.

Layout rules:

- Use full-width sections with constrained inner content for documentation and dashboards.
- Use cards only for repeated items, task records, review findings, examples, or genuinely framed tools.
- Do not place cards inside cards.
- Keep workflow controls stable as states change.
- Prefer left-aligned layouts for operational screens.
- Avoid decorative backgrounds, gradient blobs, and visual effects that compete with task state.

Mobile rules:

- Collapse side-by-side layouts into a single column.
- Preserve task order and evidence visibility.
- Keep critical actions reachable without hiding them behind ambiguous icons.
- Use horizontal scrolling only for code blocks, tables, and structured matrices where wrapping would destroy meaning.

## 5. Components And States

Future UI work should define components only after there is a concrete screen or workflow need.

Baseline components:

- **Navigation:** shows current phase, active deliverable, and relevant system area.
- **Task Card:** summarizes goal, phase, owner, status, risk, and next action.
- **Agent Handoff:** displays requested specialist, scope, inputs, expected output, and completion evidence.
- **Review Finding:** shows severity, location, rationale, and required decision.
- **Evidence Panel:** links screenshots, commands, logs, files, or user notes used to justify a decision.
- **Decision Record:** captures choice, tradeoff, rejected alternatives, and follow-up trigger.
- **Status Badge:** marks state such as draft, active, blocked, reviewed, accepted, or superseded.
- **Command/Code Block:** shows runnable commands, file paths, snippets, and output summaries.

Required states for interactive components:

- default
- hover
- focus
- active
- disabled
- loading
- empty
- error
- success

Accessibility notes:

- All focus states must be visible.
- Status must not rely on color alone.
- Actions need descriptive labels.
- Empty and error states should explain recovery, not just report absence.

## 6. Motion And Interaction

Motion should clarify state changes, preserve spatial continuity, or provide feedback.

- Frequent operator actions should be instant or nearly instant.
- Use transform and opacity for most motion.
- Respect `prefers-reduced-motion`.
- Avoid decorative motion in documentation-heavy or keyboard-heavy workflows.
- Never use motion to hide latency, missing state, or unclear hierarchy.

Timing guidance:

- **Button press:** 100-160ms.
- **Tooltip/popover:** 125-200ms.
- **Dropdown/select:** 150-250ms.
- **Modal/drawer:** 200-500ms.
- **Status update:** 150-300ms when a visible transition helps the user notice change.

Motion must have an explicit purpose before implementation:

- feedback
- continuity
- hierarchy
- attention
- orientation

If no purpose is named, do not animate.

## 7. Responsive Behavior

Breakpoints:

- **Small:** 0-639px.
- **Medium:** 640-1023px.
- **Large:** 1024-1439px.
- **Wide:** 1440px and above.

Rules:

- Design mobile-first for reading and task review.
- Use at least 44px touch targets for primary interactive controls.
- Do not let labels, file paths, or agent names overflow their containers.
- Long paths and commands may wrap or scroll depending on context.
- Keep phase, status, and next action visible across viewport sizes.
- Preserve evidence links near the decision they support.

## 8. Accessibility Requirements

- Target WCAG AA contrast for text and interactive states.
- Use semantic HTML before custom interaction patterns.
- Preserve keyboard navigation for all controls.
- Make focus state visible and consistent.
- Use labels for every input.
- Provide useful alt text for meaningful images.
- Treat screenshots as evidence; include surrounding text that explains what matters.
- Respect reduced motion preferences.
- Do not communicate severity, success, or failure with color alone.

## 9. Do And Do Not

### Do

- Use this file before creating UI prompts, screens, or interface components.
- Reuse semantic tokens and documented component roles.
- Keep operator workflows readable and evidence-linked.
- Prefer clear hierarchy over decoration.
- Record open product/design decisions instead of silently inventing them.
- Route reusable visual language to `design-system`.
- Route screen-level critique to `ui`.
- Route animation decisions to `motion`.

### Do Not

- Copy visual identity from reference repositories.
- Invent a brand-heavy UI before product behavior is stable.
- Add decorative gradients, blobs, or motion without a functional reason.
- Turn every section into a card.
- Hide uncertainty behind polished language.
- Create components that do not map to a real workflow.
- Let design-system work bypass discovery, engineering constraints, or accessibility.

## 10. Agent Prompt Guide

When building UI for this project:

1. Read this file first.
2. Check `system/design/DESIGN_SYSTEM_STANDARDS.md`.
3. Use `system/design/DESIGN_WORKFLOWS.md` to choose the right design move.
4. Reuse existing roles before creating new components.
5. Use semantic tokens only.
6. Include visible states for interactive components.
7. Check responsive behavior.
8. Capture evidence when design choices affect workflow, accessibility, or implementation.

## Evidence

- **Product discovery:** `README.md`, `ENGINE.md`, `project/PROJECT_CONTEXT.md`, `project/PROJECT_STATE.md`.
- **System standards:** `system/design/DESIGN_SYSTEM_STANDARDS.md`, `system/design/DESIGN_WORKFLOWS.md`, `system/design/DESIGN_MD_TEMPLATE.md`.
- **Reference influence:** audited patterns from `agency-agents`, `impeccable`, `npxskillui`, `taste-skill`, `awesome-design-md`, and `emilkowalski/skill`.
- **Screenshots:** none yet.
- **Token files:** none yet.
- **Component inventory:** none yet.
- **Open decisions:** product UI surface, final brand direction, typography package, implementation framework, real screenshots, and validated user workflows.
