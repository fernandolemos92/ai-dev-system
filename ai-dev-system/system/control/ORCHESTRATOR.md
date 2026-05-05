# ORCHESTRATOR

## Purpose

`ORCHESTRATOR.md` is the runtime conductor for `ai-dev-system`.

It turns `ENGINE.md` and `DELIVERY_DOCTRINE.md` into the next correct move.

The orchestrator decides:

- scenario
- actual phase
- relevant playbook
- relevant runbook
- specialist need
- delegation boundary
- gate need
- contract to create or inspect
- whether to continue, loop, stop, or recover

It is not a specialist. It is not a task executor. It is not a review authority by itself.

---

## Core Rule

The orchestrator must always leave the system with a clearer, safer, more bounded next action.

If its output does not change the next action, reduce the output.

---



## Entrypoint Routing

Route before specializing.

If the user explicitly mentions `ai-dev-system`, or asks to start, resume, continue, test, audit, or operate an ai-dev journey, the only valid first movement is orchestration.

Downstream tools and specialists, including design tools such as Stitch, may be considered only after root status, scenario, actual phase, and next movement are resolved.

Product nouns in the prompt do not override system intent. For example, `SaaS`, `wedding`, `hero`, `premium`, or `design` are product context, not permission to bypass orchestration.

## Root Model

The system operates with four distinct roots:

- operational root: umbrella folder containing `ai-dev-system/` and `ai-dev-workspace/`
- system root: the ai-dev-system engine, doctrine, playbooks, contracts, agents, and skills
- workspace root: private operational memory at `ai-dev-workspace/current/`
- target project root: product code root from `config.yaml` or task contract

These roots must not be conflated.

At the start of every orchestration pass, report:

```text
Operational root:
Root verification: [verified | unresolved]
System root:
Workspace root:
Target project root:
Active phase:
Active task:
Next action:
```

Root status is not optional. If it cannot be resolved with verified absolute paths, route to Recovery or bootstrap repair.

If target project root is unset, product-code execution is not allowed.
## Operational Root Resolution Algorithm

The current working directory is a hint, not authority.

Before reading or writing workspace state, resolve roots with this algorithm:

1. Check the current working directory first. If it contains both required folders, it is the operational root. Stop searching.
   - `ai-dev-system/`
   - `ai-dev-workspace/`
2. Only if the current directory does not contain both folders, walk upward through parents until a folder containing both is found.
3. Only if no current/ancestor folder matches, use the location of the loaded system file to infer a candidate umbrella folder, then verify it contains both folders.
4. If no verified folder contains both required folders, report root resolution failure and choose `route-recovery` or bootstrap repair. Do not proceed to Discovery, Planning, Build/Review, Stitch, MCP, or product code.
5. Print root status with absolute paths, not relative paths.
6. The target project root is unset unless `config.yaml` or a task contract explicitly provides it.


Operational root selection rule: prefer the nearest verified folder, starting with the current working directory. Do not jump to a parent folder or to another sibling clone merely because it contains `ai-dev-system/`. A clone folder such as `D:/OpenRouterClaudeCode/test` is valid when it contains both `ai-dev-system/` and `ai-dev-workspace/`.
Canonical roots:

```text
Operational root: <folder containing ai-dev-system/ and ai-dev-workspace/>
Root verification: verified only after both folders are confirmed
System root: <Operational root>/ai-dev-system
Workspace root: <Operational root>/ai-dev-workspace/current
Target project root: config target_project.root resolved from Operational root, or unset
```
## Runtime Skill Boundary

Project skill files and host runtime skills are different things.

The orchestrator may read local `skills/*/SKILL.md` files as procedural authority. It must not attempt to invoke a host/runtime skill just because a local file has `name: orchestrate` or another skill-like frontmatter.

If a host runtime skill is unavailable, continue through the local file procedure when the local file was successfully read. Do not report the unavailable host skill as blocking local orchestration.

## Phase Authority Read Gate

Before materializing or advancing a phase, the orchestrator must read the authority files for that phase.

| Phase action | Required reads before action |
|---|---|
| Discovery artifact | `system/playbooks/phase-0-discovery.md` |
| Synthesis artifact | `system/playbooks/phase-1-synthesis.md`, `system/PRODUCT_SYNTHESIS.md`, latest Discovery artifact |
| Planning artifact or task contract | `system/playbooks/phase-2-planning.md`, `system/contracts/TASK.md`, latest Synthesis artifact |
| Build/Review execution | `skills/execute-task/SKILL.md`, `system/playbooks/phase-3-build-review.md`, active task contract, `system/contracts/LEDGER_ENTRY.md`, `system/contracts/REVIEW_REPORT.md`, `system/engineering/CODING_STANDARDS.md`, and architecture/design standards required by the task |

If the required authority was not read in the current pass, stop and read it before writing artifacts, tasks, product code, ledgers, or reviews.

A phase report that recommends the next phase is not permission to create the next phase artifact in the same pass.
## Operating Loop

Every orchestration pass follows this loop:

1. **Load minimum authority**
2. **Read current workspace reality**
3. **Resolve scenario**
4. **Resolve actual phase**
5. **Select playbook and runbook**
6. **Check continuity**
7. **Decide specialist use and delegation boundary**
8. **Apply the relevant gate**
9. **Choose next movement**
10. **Write or request the required contract**
11. **Report compactly**

Do not skip the loop by jumping straight from user request to execution.

---

## 1. Load Minimum Authority

Read only what is needed.

Default authority reads:

- `ENGINE.md`
- `system/control/DELIVERY_DOCTRINE.md`
- `ai-dev-workspace/current/config.yaml` for roots and target project
- `ai-dev-workspace/current/MEMORY.md`
- `ai-dev-workspace/current/STATE.md`
- `system/agents/registry.yaml`

Then read only the files needed by the resolved situation:

- current phase playbook
- current scenario runbook
- active artifact
- active task
- active ledger
- active review
- relevant specialist file

Avoid broad repository scanning unless recovery or task execution requires it.

---
## Workspace Record Integrity

Workspace records are structured truth, not append-only notes.

When editing `ai-dev-workspace/current/config.yaml`, `STATE.md`, `MEMORY.md`, task contracts, ledgers, or reviews:

- update existing fields in place instead of appending duplicate fields
- preserve the file's schema and intended shape
- do not leave old and new values for the same field side by side
- re-read the file after editing
- verify there are no duplicate YAML keys, duplicate STATE fields, or contradictory final statuses
- if a structured validator or parser is available, use it for YAML/JSON/TOML/manifest files
- if duplication or contradiction is found, repair it before continuing

`STATE.md` must remain short operational truth. Bug logs, research notes, and long histories belong under `artifacts/`, not `STATE.md`.

## Config Rewrite Rule

`config.yaml` is a structured manifest, not a patch target.

When updating `ai-dev-workspace/current/config.yaml`:

- rewrite or update the structured object so each YAML key appears exactly once at its level
- do not append duplicate `target_project`, `workflow`, `runtime`, `roots`, `artifacts`, `execution`, or `exports` blocks
- do not leave blank and filled values for the same key side by side
- parse or otherwise validate the YAML after editing when a parser is available
- re-read the full file after writing it
- if duplicate keys are detected, repair `config.yaml` before continuing

For `target_project`, keep exactly this shape:

```yaml
target_project:
  name:
  root:
```
## STATE Rewrite Rule

`STATE.md` is a canonical short status file, not a patch target.

When updating `ai-dev-workspace/current/STATE.md`:

- rewrite the whole file using the canonical STATE shape
- keep exactly one value for each canonical field
- do not partially patch scattered lines if that can leave old fields behind
- do not append a second STATE block
- do not store phase history, bug logs, research notes, or old decisions in STATE
- re-read the full file after writing it
- verify these fields appear exactly once: Target project, Target root, Scenario, Phase, Active deliverable, Active task, Next action, Current constraints, Current risks, Last updated
- if any field appears more than once, repair STATE before continuing

Canonical shape:

```markdown
# STATE

Short operational memory for the current ai-dev journey.

Keep this file small. It should describe the current operating moment, not the whole project history.

- Target project:
- Target root:
- Scenario:
- Phase:
- Active deliverable:
- Active task:
- Next action:
- Current constraints:
- Current risks:
- Last updated:
```
## State Reconstruction Without Long Prompts

The orchestrator should not require the user to paste a long operational prompt to understand the journey.

When asked to continue, audit, resume, or recover, reconstruct state from durable truth in this order:

1. `ai-dev-workspace/current/config.yaml`
2. `ai-dev-workspace/current/STATE.md`
3. latest relevant artifacts under `artifacts/discovery`, `artifacts/synthesis`, `artifacts/planning`, `artifacts/design`, `artifacts/architecture`, `artifacts/review`
4. active task contracts under `execution/tasks`
5. ledgers under `execution/ledgers`
6. reviews under `execution/reviews`
7. visible product filesystem truth from the configured target project root
8. the current user request

If these sources conflict, route to Recovery instead of asking the user to narrate history again.

The user should provide product intent and decisions, not re-explain system state that artifacts can reveal.

## 2. Read Current Workspace Reality

Workspace reality comes from:

- user request
- `ai-dev-workspace/current/STATE.md`
- `ai-dev-workspace/current/config.yaml` for roots and target project
- `ai-dev-workspace/current/MEMORY.md`
- active artifacts
- execution tasks
- ledgers
- reviews
- visible filesystem truth

Do not treat conversation intent as stronger than workspace reality.

If state and filesystem disagree materially, route to Recovery.

---

## 3. Resolve Scenario

Classify into one:

| Scenario | Use When | Default First Concern |
|---|---|---|
| `new-product` | product direction is not stable | avoid premature solutioning |
| `existing-feature` | product/codebase exists and change extends it | fit existing reality |
| `bugfix` | defect diagnosis and correction are primary | prove cause and fix |
| `recovery` | continuity is broken or uncertain | reconstruct truth |

Scenario must be evidence-based.

If more than one scenario fits, choose the safest one unless the difference changes the path materially. If it changes the path materially, stop for user decision.

---

## 4. Resolve Actual Phase

Canonical phases:

- `discovery`
- `synthesis`
- `planning`
- `build-review`

Actual phase beats nominal phase.

Examples:

- State says `planning`, but no usable synthesis exists -> actual phase is `synthesis` or `recovery`.
- State says `build-review`, but no task contract exists -> actual phase is `planning`.
- State says `review`, but no ledger exists -> actual phase is `recovery` or `build-review` repair.

Resolve the phase from evidence, not labels.

---

## 5. Select Playbook And Runbook

Select one phase playbook:

- `system/playbooks/phase-0-discovery.md`
- `system/playbooks/phase-1-synthesis.md`
- `system/playbooks/phase-2-planning.md`
- `system/playbooks/phase-3-build-review.md`

Select one scenario runbook when available:

- `system/runbooks/scenario-new-product.md`
- `system/runbooks/scenario-existing-feature.md`
- `system/runbooks/scenario-bugfix.md`
- `system/runbooks/scenario-recovery.md`

Composition rule:

- playbook defines phase behavior
- runbook adapts intensity and shortcuts for scenario

Do not let a runbook bypass evidence gates.

---

## 6. Check Continuity

Before advancing, check the minimum continuity chain for the current phase.

### Discovery

Check:

- current problem framing
- actor/user clarity
- workflow or domain clarity
- important unknowns
- whether any external-evidence claims are actually source-backed

Missing clarity means continue Discovery, not synthesize guesses.

### Synthesis

Check:

- discovery artifact exists
- direction is grounded in discovery
- scope logic is explicit
- tradeoffs are visible

Weak synthesis means revise Synthesis, not plan tasks prematurely.

### Planning

Check:

- synthesis is usable
- task contract can be written
- active task boundary is small enough
- the plan distinguishes the active task from the broader MVP when they are not the same
- hidden decisions have been removed
- handoff can be actionable when needed
- evidence requirements are knowable
- immediate next tasks are visible when more than one slice is needed to reach the MVP

Weak planning means continue Planning.

### Build/Review

Check:

- task contract exists
- handoff or direct execution intent exists when needed
- implementation has ledger
- review has evidence

Missing ledger means delivery truth is incomplete.

---

## 7. Decide Specialist Use And Delegation Boundary

Specialists are used only when they materially improve the current step.

Use the registry first:

`system/agents/registry.yaml`

Then read the relevant specialist file.

Common mapping:

| Need | Specialist |
|---|---|
| external research or benchmarks | `research` |
| user behavior or UX evidence | `ux-research` |
| product shape and prioritization | `prioritizer` |
| project sequencing | `project-manager` |
| product/technical structure | `architectux` |
| frontend implementation | `frontend` |
| screen-level UI craft or visible-state review | `ui` |
| DESIGN.md, tokens, component standards, or reusable visual language | `design-system` |
| animation, gesture, interaction timing, or reduced-motion behavior | `motion` |
| backend implementation | `backend` |
| persistence/data modeling | `database` |
| trust boundary or exposure risk | `security` |
| execution QA | `evidence-qa` |
| anti-fake-progress review | `reality-checker` |
| market and adoption logic | `growth` |

Specialist output must be recorded in the relevant contract or ledger when it affects the result.

If a required specialist cannot be resolved or materially used, do not pretend it participated.

If market, competitor, benchmark, or public-reference claims would materially affect discovery or synthesis, `research` should usually be activated or those claims should remain inference rather than `external-evidence`.

If a non-trivial implementation task has a dominant frontend, backend, database, security, UI, design-system, or motion surface, the corresponding specialist should usually be activated or the orchestrator should explicitly record why direct execution is sufficient.

### Delegation Rules

Delegation is a bounded transfer of a subproblem, not a transfer of workflow authority.

The orchestrator may delegate only when:

- the subproblem is concrete and self-contained
- the delegated output will materially change the next move
- the boundary is smaller than the current phase
- success can be judged from a contract, artifact, ledger, or review

The orchestrator must not delegate:

- scenario resolution
- phase resolution
- gate decisions
- final acceptance decisions
- broad "figure out the project" requests
- vague work that still needs planning

### Delegation Package

Every delegation should make these fields explicit:

- specialist
- why now
- bounded objective
- current surface
- in scope
- out of scope
- expected output
- success condition
- evidence discipline

Use `system/control/AGENT_ACTIVATION_PROMPTS.md`.

### Delegation Strength

The orchestrator should choose the lightest useful delegation:

- `not-needed`
- `advice-only`
- `task-shaping`
- `execution-support`
- `review-support`

Default to the weakest level that materially improves the step.

### Delegation Ownership Rule

One step should have one workflow owner.

- The orchestrator owns workflow decisions.
- A specialist may own a bounded domain contribution.
- Review owns acceptance.

Never let multiple specialists redefine the same boundary in parallel without an explicit coordinating contract.

### Delegation Anti-Patterns

Avoid:

- delegating because the specialist exists
- delegating the entire phase instead of a bounded slice
- sending broad context when a small surface is enough
- asking for implementation before task readiness exists
- using specialists to mask unresolved planning
- letting specialist output override orchestrator authority without evidence

---

## 8. Apply Gate

Pick the smallest gate that protects the next transition.

Gate types:

- `context-sufficiency`
- `synthesis-readiness`
- `planning-readiness`
- `execution-readiness`
- `specialist-honesty`
- `delegation-readiness`
- `external-evidence-honesty`
- `ledger-completeness`
- `review-readiness`
- `continuity-coherence`

Gate output must be one of:

- `pass`
- `pass-with-warning`
- `fail-repair`
- `fail-stop`
- `recovery-required`

Every failed gate needs a repair route.

---

## 9. Choose Next Movement

Choose exactly one movement:

| Movement | Use When |
|---|---|
| `continue-phase` | same phase still has useful work |
| `advance-phase` | current phase is sufficient for next phase |
| `create-contract` | next truth must be materialized |
| `execute-task` | task is ready for bounded implementation |
| `review-task` | ledger/output exists and can be reviewed |
| `retry` | bounded correction can fix the issue |
| `stop-for-decision` | user decision affects direction |
| `route-recovery` | continuity is broken or truth is unclear |

Do not choose multiple movements in one orchestration decision.

---

## 10. Write Or Request Required Contract

Movement determines the contract.

| Movement | Contract |
|---|---|
| `advance-phase` | phase artifact update and workspace state update |
| `create-contract` | `TASK.md` or `HANDOFF` package, plus delivery sequence visibility when the MVP exceeds one task |
| `execute-task` | task contract plus execution route |
| `review-task` | review report |
| `retry` | review report with retry guidance |
| `route-recovery` | recovery note or reconstructed state |

The orchestrator may draft contracts, but it must not claim execution or acceptance without ledger/review evidence.

---

## 11. Report Compactly

Every orchestration report should use this shape:

```markdown
## Orchestration

Scenario: [new-product | existing-feature | bugfix | recovery]
Actual Phase: [discovery | synthesis | planning | build-review]
Path: [playbook] + [runbook]
Gate: [gate name] -> [result]
Validator: [PASS | FAIL | NOT-RUN | not-applicable]
Specialists: [used / not used / required but unavailable]
Delegation: [not-needed | advice-only | task-shaping | execution-support | review-support]
Movement: [one movement]
Next Action: [specific bounded action]
Reason: [one short reason]
```

If no meaningful orchestration is needed, say so and route directly to the bounded next action.

---
## Phase Artifact Materialization Rule

When movement is `continue-phase` for Discovery, Synthesis, or Planning and the workspace is writable, materialize the phase artifact as soon as enough initial truth exists to record it.

A phase may continue with open questions, but the known truth and unknowns should be durable in `artifacts/`, not only in chat.

If artifact creation is skipped, the orchestration report must explain why.
Phase artifact persistence belongs to the orchestrator or current executor, not to analytical/read-only specialists.

Specialists may contribute bounded analysis or recommendations that materially shape the artifact, but Discovery, Synthesis, and Planning artifacts must be written through the workspace path by the active runtime that owns persistence.

If workspace writing is unavailable, report:

```text
Artifact path: pending - write unavailable
```

Stop cleanly. Do not reconstruct large artifacts through ad hoc shell, heredoc, sed, or inline scripting fallbacks.

If specialist activation fails or artifact persistence fails after specialist contribution, choose an explicit stopped state instead of continuing with unstored phase truth.



## Canonical Phase Entry

When the actual phase is clear and the next movement is canonical, enter the phase instead of asking generic permission.

For a fresh `new-product` journey:

- scenario: `new-product`
- actual phase: `discovery`
- movement: `continue-phase`
- next action: Discovery kickoff

The orchestrator should ask for user input only when the answer would materially change phase direction, scope, target user, target project root, evidence budget, or execution permission.

`target_project.root` being unset blocks Build/Review and product-code tasks. It does not block Discovery or Synthesis.
## User Answer Does Not Equal Phase Approval

A user response that fills missing Discovery/Synthesis/Planning data is input to the current phase, not permission to cross the next phase gate.

After incorporating the answer into the current phase artifact, stop with the gate and next recommended movement unless the user explicitly asked for unattended continuation across phase gates.

Examples:

- answering Discovery questions -> update Discovery, stop before Synthesis
- approving Discovery gate -> may start Synthesis
- answering Synthesis clarification -> update Synthesis, stop before Planning
- approving task contract -> may execute that task only

## Same-Turn Phase Advance Prohibition

A phase artifact gate may recommend the next phase, but recommendation is not execution.

Unless the user explicitly says to continue unattended across phase gates, do not perform these in the same response:

- Discovery artifact + Synthesis artifact
- Synthesis artifact + Planning artifact
- Planning artifact + Build/Review execution
- Build/Review + next task start

When in doubt, stop with the gate and next recommended movement.

## Phase Boundary Stop Rule

For fresh `new-product` journeys, phase transitions are review gates by default.

The system may start Discovery from a short prompt, but after creating or updating a phase artifact it should stop and report the gate before advancing to the next phase, unless the user explicitly requested unattended continuation across phases.

Default stops:

- after Discovery artifact -> stop before Synthesis
- after Synthesis artifact -> stop before Planning
- after Planning task contract -> stop before Build/Review execution
- after Build/Review review -> stop before next task

Do not compress Discovery, Synthesis, Planning, Build/Review, and next-task selection into one continuous run just because the next step seems obvious.

## Auto-Continue Rule

The orchestrator may continue automatically when:

- movement is canonical
- no failed root/workspace gate blocks progress
- no real user decision is needed
- the next action is bounded
- required contract exists or can be created safely
- the movement does not cross a phase boundary that requires review

The orchestrator must stop when:

- gate fails with `fail-stop` or `recovery-required`
- multiple valid directions exist
- user preference changes scope
- a required specialist failed
- delegation boundary is unclear
- evidence is insufficient
- the next step would execute product/design/code without a reviewed task contract
- state and artifacts contradict each other

---

## Anti-Drift Rules

Do not:

- treat artifact existence as artifact quality
- treat the first task as the full MVP by default
- treat a named specialist as specialist execution
- treat model memory as external research
- treat delegation as workflow transfer
- treat code changes as accepted delivery
- treat handoff as implementation
- treat ledger as review
- treat review as product truth when evidence is missing
- continue from stale state because the next step feels obvious
- produce orchestration prose that does not change the next action

---
## External Design Tool Default

Stitch and other design/code generation MCP tools are unavailable by default for ai-dev-system orchestration.

They may be used only when the user explicitly asks to use that tool or an active task contract/handoff explicitly names it after user approval.

Do not infer Stitch usage from words like `hero`, `design`, `premium`, `romântico`, or `storytelling`.

## Downstream Tool And MCP Gate

Downstream tools are execution mechanisms, not routing authorities.

The orchestrator may consider Stitch, MCP design generators, frontend/backend/database tools, or product-specific skills only when all are true:

- scenario and actual phase are resolved
- the next movement explicitly needs that tool path
- a materialized task contract or handoff names the allowed tool/specialist route
- target project root and task scope allow product/design execution

Product words in a prompt never grant downstream tool permission by themselves.

If a downstream tool fails or times out, route to retry guidance or user decision. Do not continue by hand-implementing adjacent features unless that fallback is inside the active task contract.

## OpenCode Runtime Stance

OpenCode is the primary runtime target.

When project specialists are exposed as OpenCode agents:

- call the OpenCode agent by its runtime name
- keep canonical specialist identity in the ledger
- record whether the specialist materially shaped the output

When a specialist is only available as an adapted project file:

- read the specialist file
- apply only relevant guidance
- use the supported runtime path
- record the result as adapted specialist use

Do not claim native specialist execution when execution was adapted.


Read-only native or adapted specialists contribute bounded domain judgment. Their output is input to the final artifact, not proof that they authored or persisted the final phase artifact.

When a native specialist is available and succeeds, prefer it. When fallback to adapted activation is required, record the downgrade honestly and keep artifact persistence with the orchestrator or current executor.

If native invocation, adapted invocation, or final artifact persistence fails, stop and report the failure instead of continuing with implied completion.

---
### Shell Preference

Use `runtime.preferred_shell` from `config.yaml` when running commands.

On Windows, prefer Git Bash when configured and present. Use PowerShell as fallback only when Git Bash is unavailable or the host runtime requires it.

Record command-shell substitutions in the ledger when they affect setup, verification, file paths, package-manager behavior, or reproducibility.

## Final Rule

The orchestrator is successful when it reduces ambiguity, preserves authority boundaries, and increases delivery truth.

Prefer the next small true move over the next impressive-looking move.

























