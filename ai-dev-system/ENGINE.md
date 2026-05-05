# ENGINE

## Purpose

`ENGINE.md` is the small operating constitution for `ai-dev-system`.

The system exists to turn product uncertainty, technical planning, implementation, and review into a guided delivery flow that produces better code with less drift.

This file defines the runtime model. It does not contain phase choreography, specialist instructions, or task-level procedure. Those belong in playbooks, runbooks, contracts, and agents.

---

## Operating Model

The system is:

1. **orchestrator-first**
   - one conductor resolves scenario, phase, next action, specialist need, and gates

2. **playbook-driven**
   - each phase has a concrete operating playbook

3. **scenario-aware**
   - new product, existing feature, bugfix, and recovery do not follow the same weight of process

4. **agent-assisted**
   - specialists improve bounded work, but they do not own workflow authority

5. **contract-backed**
   - tasks, handoffs, ledgers, and reviews must use explicit contracts

6. **evidence-gated**
   - progress is based on artifacts, execution traces, and review evidence, not confident narration

7. **OpenCode-native first**
   - the primary runtime target is OpenCode; Claude-compatible assets may exist as secondary exports

---

## Authority Order

When files conflict, use this order:

1. `ENGINE.md`
2. `system/control/ORCHESTRATOR.md`
3. `system/control/DELIVERY_DOCTRINE.md`
4. `ai-dev-workspace/current/STATE.md`
5. current phase playbook in `system/playbooks/`
6. current scenario runbook in `system/runbooks/`
7. contracts in `system/contracts/`
8. specialist definitions in `system/agents/`
9. generated runtime adapters such as `.opencode/agents/`

The orchestrator is responsible for applying this order without turning every step into ceremony.

---

## Canonical Flow

The default delivery flow is:

`Discovery -> Synthesis -> Planning -> Build/Review`

The flow may be compressed when the scenario justifies it, but it must not be faked.

- New product usually starts in Discovery.
- Existing feature may start in partial Discovery, Synthesis, or Planning.
- Bugfix may start in diagnosis and move quickly to Build/Review.
- Recovery starts by reconstructing reality before continuing.

---

## Non-Negotiables

- No fake progress.
- No orchestration pass without loading `system/control/ORCHESTRATOR.md`.
- Explicit `ai-dev-system` intent routes to `orchestrate` first, before any design, code, research, Stitch, or product-specific tool.
- No orchestration pass without root status: operational root, system root, workspace root, target project root, active phase, active task, and next action.
- No phase advancement without enough evidence for the next phase to operate.
- No specialist theater.
- No hidden fallback from failed specialist execution into generic work.
- No task execution without a task contract.
- No implementation claim without a ledger entry.
- No acceptance claim without review evidence.
- No broad repository scanning when bounded reads are enough.
- No process weight that does not improve delivery quality.

---

## Runtime Core

The runtime is conducted through:

- `system/control/ORCHESTRATOR.md`
- `system/control/DELIVERY_DOCTRINE.md`
- `system/control/AGENT_ACTIVATION_PROMPTS.md`
- `system/control/HANDOFF_TEMPLATES.md`
- `system/playbooks/*`
- `system/runbooks/*`
- `system/contracts/*`
- `system/agents/registry.yaml`

These files must remain small enough to be usable and strong enough to prevent drift.

---
## Shell Runtime Preference

The preferred command shell for this system on Windows is Git Bash when available.

Workspace config may declare:

```yaml
runtime:
  primary: opencode
  preferred_shell: git-bash
  shell_executable: "C:/Program Files/Git/bin/bash.exe"
  shell_fallback: powershell
  command_style: bash-portable
```

Agents should prefer portable Bash-style commands for project work when the configured shell exists.

If the host runtime only exposes PowerShell, execution may use PowerShell, but the ledger should record meaningful tooling deviations when command behavior affects evidence, scripts, paths, or reproducibility.

## Specialist Model

Specialists are reusable expert roles, inspired by the `agency-agents` pattern, but with stricter execution honesty.

A specialist may contribute only when:

- the orchestrator or active playbook identifies a material need
- the specialist exists in `system/agents/registry.yaml`
- the specialist definition is read or adapted through the active runtime
- the ledger records whether the specialist actually shaped the work

Naming a specialist is not the same as using one.

---

## Artifact Model

Durable progress must land in the current private workspace, not in the product repository by default.

- `ai-dev-workspace/current/MEMORY.md` for curated long-lived memory
- `ai-dev-workspace/current/STATE.md` for the current operating moment
- `ai-dev-workspace/current/DESIGN.md` for project-specific design memory
- `ai-dev-workspace/current/artifacts/` for discovery, synthesis, planning, design, architecture, decisions, and review artifacts
- `ai-dev-workspace/current/execution/tasks/` for executable task definitions
- `ai-dev-workspace/current/execution/ledgers/` for execution truth
- `ai-dev-workspace/current/execution/reviews/` for acceptance or retry decisions

State is not memory. Memory is not raw history. Artifacts are not state. Ledgers are not review.

---

## Final Rule

The system should feel lighter than a governance maze and stricter than an informal prompt pack.

If a rule does not help the orchestrator make a better next move, produce better code, preserve continuity, or prevent drift, it probably belongs outside the core.

