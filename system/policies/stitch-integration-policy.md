# STITCH INTEGRATION POLICY

This file defines how the system should use Stitch as an optional external design capability provider.

It exists to enable visual design support without turning Stitch into workflow authority.

---

## Role of Stitch

Stitch is an approved optional external design capability provider for:

- reading and synthesizing existing UI designs
- capturing visual baseline from existing projects
- generating and editing high-fidelity screens via Stitch MCP
- converting visual designs into implementation-ready frontend code
- enhancing UI generation prompts with professional design vocabulary

Stitch is not:

- constitutional governance
- live project state
- a workflow controller
- a canonical project agent
- artifact lifecycle authority
- a substitute for PRD, validation, task decomposition, or handoff
- a substitute for governed review

---

## Activation Rule

Stitch is **not active by default**.

Stitch should only be used when the user explicitly indicates one or more of:

- an existing Stitch project or design exists
- Stitch should be used as visual reference
- implementation must respect existing Stitch screens
- new screen generation or editing via Stitch MCP is desired

If the user does not mention Stitch, the governed pipeline proceeds without it.

Stitch must never be auto-injected into every project.

---

## Local Skill Inventory

The following Stitch skills are installed in the workspace at `.claude/skills/`:

| Folder | Upstream `name:` | Description | Status |
|---|---|---|---|
| `design-md/` | `design-md` | Analyze Stitch projects and synthesize a semantic design system into DESIGN.md | default |
| `enhance-prompt/` | `enhance-prompt` | Transform vague UI ideas into Stitch-optimized prompts | default |
| `stitch-design/` | `stitch-design` | Unified entry point for Stitch design work (prompt enhancement + DESIGN.md + screen gen/edit) | default |
| `react-components/` | `react:components` | Convert Stitch designs into modular React/Vite components | optional |
| `stitch-loop/` | `stitch-loop` | Autonomous baton-passing page builder loop | advanced/opt-in |

### Naming note: `react:components`

The upstream skill identity uses `react:components` (with colon) in its YAML frontmatter `name:` field.
The local workspace folder is `react-components/` (with hyphen) because filesystem paths cannot contain colons.
This is an intentional upstream convention, not a local drift.

### Default vs optional skills

The default recommended Stitch setup for this repository includes: `design-md`, `enhance-prompt`, and `stitch-design`.

Optional skills installed but not active by default:

- **`react-components`** — Stitch-to-React conversion accelerator. See "react-components usage conditions" below.
- **`stitch-loop`** — Advanced autonomous builder. See "stitch-loop" section below.

### Skills not installed locally

The following capabilities exist in the upstream Stitch ecosystem but are **not currently installed** in this workspace:

- **`shadcn-ui`** — Stack-specific implementation companion for shadcn/ui. Not a Stitch integration skill (has zero Stitch MCP coupling). Its documentation role is largely covered by Context7 at implementation time. Only justified if the governed technical baseline explicitly selects shadcn/ui AND the shadcn MCP server is configured.
- **`remotion`** — Generates walkthrough videos from Stitch projects. Not relevant to the governed pipeline.
- **`taste-design`** — Available upstream but not evaluated for this project.

---

## What Stitch Captures

When Stitch is used correctly, it should capture the full visual baseline, not just colors:

- hierarchy of information
- layout patterns and grids
- navigation structure
- card patterns and component families
- charts and data visualization
- forms and input patterns
- feedback states (loading, error, empty, success)
- spacing and rhythm
- typography scale and usage
- color semantics and functional roles
- interaction patterns
- tone and feel of the experience

---

## Stitch Working Files

The Stitch ecosystem uses `.stitch/DESIGN.md` (or `DESIGN.md`) as a design reference for consistent screen generation.

In this project:

- `.stitch/DESIGN.md` or `DESIGN.md` is a **working draft / source of truth for Stitch generation**
- It is **not** a governed artifact of the ai-dev-system
- It does **not** replace `project/design/active/` artifacts
- It does **not** replace experience direction or design foundation artifacts
- It is an **input** that can feed into governed design foundation work

The governed design system artifact lives in `project/design/active/` and follows the standard artifact lifecycle.

---

## Skill Relationships

### `stitch-design` vs `design-md`

These are complementary, not equivalent:

- **`design-md`**: Specialized for analyzing existing Stitch projects/screens and synthesizing a reusable `DESIGN.md` from what already exists. Prefer this when the goal is to **read** and **capture** an existing visual baseline.

- **`stitch-design`**: Unified entry point for broader Stitch design work — prompt enhancement, DESIGN.md synthesis, and screen generation/editing via MCP. Use this when the goal is to **generate**, **edit**, or **expand** design in Stitch.

In the governed pipeline:
- Prefer `design-md` during experience direction / design foundation to capture existing visual state
- Use `stitch-design` when actively creating or editing screens

### `react-components` usage conditions

**Optional — not part of the default recommended Stitch setup.**

`react-components` is a Stitch-to-React conversion accelerator. It is **not redundant** with Context7 — they serve materially different roles:

- **`react-components`** fetches Stitch screens via MCP, downloads HTML/screenshots, and converts them into modular React component structures with AST-based validation.
- **Context7** provides current framework/library documentation and best practices. It does not fetch Stitch screens, parse Stitch HTML, or generate component scaffolds.

However, `react-components` carries stack assumptions (React + Vite + Tailwind + TypeScript) and imposes architectural patterns (`src/hooks/`, `src/data/mockData.ts`, component templates). These decisions must come from the governed technical baseline, not from a skill.

`react-components` may only be used when **all** of the following are true:

1. The project technical baseline has been explicitly authorized (via `define-technical-baseline` or `project/memory/decisions/`) as compatible with the skill's stack assumptions (React + Vite + Tailwind + TypeScript)
2. The user explicitly requests Stitch-to-React conversion
3. An active task and handoff exist (governed implementation prerequisites)

`react-components` must **never** be used to implicitly define or establish the project technical baseline.

When `react-components` is used, Context7 should still be consulted for current React/Tailwind/framework best practices — the two are complementary, not competing.

### `stitch-loop`

**Advanced / opt-in only.**

- Not part of the governed pipeline
- Autonomous baton-passing can bypass handoff and review
- Depends on `.stitch/DESIGN.md`, `.stitch/SITE.md`, and `.stitch/next-prompt.md`
- Should only be used for rapid prototyping outside governed implementation
- Must never be used as a substitute for governed serial execution

---

## Research and Design Relationship

Research does not redesign screens automatically.

When research evidence suggests changes to existing design:

1. **Research** evaluates market, benchmarks, risks, opportunities, and implications
2. **Stitch** represents the current visual baseline
3. **Experience direction / design foundation** reconciles:
   - product problem and objectives
   - research evidence
   - existing design from Stitch
4. **PRD** consolidates the official direction

When tension exists between research findings and existing Stitch design:

- Research registers implications and evidence
- Design foundation decides whether to maintain, adapt, or change
- PRD locks the official direction

Neither Stitch alone nor research alone dictates the product direction.

---

## Pipeline Integration

### When each Stitch skill fits

| Skill | Pipeline Phase | Use Case |
|---|---|---|
| `design-md` | experience direction / design foundation | Read existing Stitch project, synthesize reusable DESIGN.md as visual baseline input |
| `stitch-design` | experience direction / design foundation / implementation | Generate, edit, or refine screens in Stitch when visual work is needed |
| `enhance-prompt` | any phase needing Stitch generation | Improve prompts before Stitch screen generation (not required by default) |
| `react-components` | implementation only | Optional Stitch-to-React conversion (requires authorized baseline + active task + handoff) |
| `stitch-loop` | outside governed pipeline | Rapid prototyping only, opt-in, not for governed implementation |

### How Stitch fits the governed flow

```
context/discovery
  └─ (user mentions existing Stitch designs)
       │
research
  └─ evaluates market/benchmarks
  └─ does NOT redesign screens
       │
experience direction
  └─ design-md reads existing Stitch project
  └─ synthesizes visual baseline
  └─ DESIGN.md becomes input to direction
       │
design foundation
  └─ reconciles research + Stitch baseline + product goals
  └─ produces governed design artifact in project/design/active/
       │
PRD
  └─ consolidates official product direction
       │
validation / tasks / handoff
  └─ normal governed progression
  └─ Stitch does not skip or replace any of these
       │
implementation
  └─ Context7 provides technical best practices (always)
  └─ react-components converts Stitch baseline to code (optional, if baseline is compatible)
  └─ both serve implementation, different roles — not redundant
       │
review
  └─ normal governed review
  └─ Stitch does not bypass review
```

---

## Relationship with Context7

Stitch and Context7 serve different roles in implementation:

- **Stitch** provides visual direction and UI materialization
- **Context7** provides current technical documentation and best practices for the active stack

They do not replace each other:

| Concern | Provider |
|---|---|
| Visual baseline and UI structure | Stitch |
| Framework/library API and patterns | Context7 |
| Design token extraction | Stitch (design-md) |
| Current dependency documentation | Context7 |
| Screen generation | Stitch (stitch-design) |
| Implementation best practices | Context7 |
| Stitch-to-React component conversion | react-components (optional, when baseline is compatible) |

Context7 enters during implementation as a consultation layer for technical accuracy.
Stitch enters earlier as a visual baseline and design support layer.

---

## Governance Boundary

Stitch must not:

- substitute governance
- redefine PROJECT_STATE semantics
- redefine artifact lifecycle
- substitute PRD
- substitute validation
- substitute task decomposition
- create a parallel execution workflow
- authorize implementation
- skip handoff
- bypass governed review
- conflict with serial execution rules

Stitch outputs (screens, DESIGN.md, HTML exports) are **working materials** that feed into governed artifacts.

They are never the governed artifacts themselves.

---

## Practical Examples

### Example 1: Capturing existing design

> User: "I have a Stitch project with the dashboard already designed. Let's use it as baseline."

Pipeline response:
1. Use `design-md` to read the Stitch project and synthesize `.stitch/DESIGN.md`
2. During experience direction, use the synthesized DESIGN.md as visual baseline input
3. Design foundation reconciles this baseline with research and product goals
4. Governed artifacts go to `project/design/active/` as usual

### Example 2: Implementation with Stitch baseline (optional react-components)

> User: "Convert the Stitch dashboard screens to React components."

Pipeline response:
1. Verify active task and handoff exist (governed prerequisites)
2. Verify technical baseline is authorized and compatible (React + Vite + Tailwind + TS)
3. Use `react-components` to convert Stitch HTML to modular React code
4. Use Context7 for current React/Tailwind best practices during implementation
5. Submit to governed review as usual

If technical baseline is not yet authorized or is incompatible with the skill's assumptions, do not use `react-components` — implement manually using governed design artifacts and Context7.

### Example 3: No Stitch mentioned

> User: "Let's build the onboarding flow."

Pipeline response:
1. Proceed with normal governed pipeline
2. No Stitch skills are activated
3. Design work uses standard governed skills (`define-design-foundation`, etc.)

---

## Operational Notes

### `react-components` dependencies

The `react-components` skill includes `package.json` with npm dependencies for AST-based validation.
When using this skill, run `npm install` inside `.claude/skills/react-components/` if `node_modules` is not present.
This is a skill-level dependency, not a project-level dependency.

### `.stitch/` directory

When Stitch skills are used, they may create a `.stitch/` directory in the project root containing:
- `DESIGN.md` — synthesized design system reference
- `SITE.md` — site vision and roadmap (stitch-loop)
- `next-prompt.md` — baton file (stitch-loop)
- `designs/` — downloaded HTML and screenshot assets

This directory contains Stitch working files, not governed artifacts.
