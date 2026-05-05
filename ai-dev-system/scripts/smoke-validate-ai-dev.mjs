#!/usr/bin/env node
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const validatorPath = path.join(repoRoot, "scripts", "validate-ai-dev.mjs");
const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "ai-dev-system-smoke-"));

function write(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, "utf8");
}

function runCase(name, setup, expectedExitCode) {
  const workspace = path.join(tmpRoot, name);
  fs.mkdirSync(workspace, { recursive: true });
  setup(workspace);
  write(path.join(workspace, "config.yaml"), "schema_version: 1\nsystem: ai-dev-system\nroots:\nworkspace:\ntarget_project:\nruntime:\nworkflow:\nartifacts:\nexecution:\nexports:\n");
  write(path.join(workspace, "STATE.md"), "- Target project:\n- Target root:\n- Scenario:\n- Phase:\n- Active deliverable:\n- Active task:\n- Next action:\n- Current constraints:\n- Current risks:\n- Last updated:\n");
  write(path.join(workspace, "execution", "tasks", "README.md"), "");
  write(path.join(workspace, "execution", "ledgers", "README.md"), "");
  write(path.join(workspace, "execution", "reviews", "README.md"), "");
  const result = spawnSync(process.execPath, [validatorPath, "--workspace", workspace, "--all"], { encoding: "utf8" });
  if (result.status !== expectedExitCode) {
    throw new Error(`${name} expected ${expectedExitCode} but got ${result.status}\nSTDOUT:\n${result.stdout}\nSTDERR:\n${result.stderr}`);
  }
}

runCase("task-missing-token-constraints", (workspace) => {
  write(path.join(workspace, "execution", "tasks", "TASK-001.md"), `# TASK

## Task ID
TASK-001

## Title
UI Task

## Scenario
new-product

## Phase
build-review

## Objective
Build a frontend component.

## Why Now
Needed now.

## Owner Specialist
frontend

## Supporting Specialists
- ui

## Inputs
- discovery

## Allowed Scope
- ui

## Out of Scope
- backend

## Target Project Root
app

## Target Surfaces
- src/components/Button.tsx

## Architecture Boundaries
- web/frontend: component

## Standards Preflight
- system/agents/frontend.md
- system/agents/ui.md
- system/engineering/CODING_STANDARDS.md
- system/engineering/ARCHITECTURE_CONTRACTS.md
- system/design/DESIGN_SYSTEM_STANDARDS.md

## Documentation Preflight
- Official docs: React

## Verification Plan
- npm run build

## Constraints
- use semantic tokens

## Done Criteria
- [ ] button exists

## Evidence Required
- changed files

## Review Gate
evidence-qa

## Drift Risks
- ui drift
`);
}, 1);

runCase("task-generic-motion-waiver", (workspace) => {
  write(path.join(workspace, "execution", "tasks", "TASK-001.md"), `# TASK

## Task ID
TASK-001

## Title
Motion Task

## Scenario
new-product

## Phase
build-review

## Objective
Implement motion.

## Why Now
Needed now.

## Owner Specialist
motion

## Supporting Specialists
- frontend

## Inputs
- discovery

## Allowed Scope
- animation

## Out of Scope
- backend

## Target Project Root
app

## Target Surfaces
- src/components/Hero.tsx

## Architecture Boundaries
- web/frontend: component

## Design-System / Token Constraints
- product components must consume semantic tokens
- raw values and direct hex usage are forbidden in product UI
- primitive tokens remain upstream unless explicitly authorized

## Standards Preflight
- system/agents/motion.md
- system/agents/frontend.md
- system/design/DESIGN_SYSTEM_STANDARDS.md
- system/engineering/CODING_STANDARDS.md
- system/engineering/ARCHITECTURE_CONTRACTS.md

## Documentation Preflight
- docs waiver: well-established pattern for Framer Motion and Lenis reduced-motion behavior

## Verification Plan
- npm run build

## Constraints
- Framer Motion
- Lenis
- reduced-motion

## Done Criteria
- [ ] motion exists

## Evidence Required
- changed files

## Review Gate
evidence-qa

## Drift Risks
- runtime drift
`);
}, 1);

runCase("review-weak-runtime-evidence", (workspace) => {
  write(path.join(workspace, "execution", "tasks", "TASK-001.md"), `# TASK

## Task ID
TASK-001

## Title
Reviewable UI Task

## Scenario
new-product

## Phase
build-review

## Objective
Ship UI.

## Why Now
Needed now.

## Owner Specialist
frontend

## Supporting Specialists
- ui

## Inputs
- discovery

## Allowed Scope
- ui

## Out of Scope
- backend

## Target Project Root
app

## Target Surfaces
- src/App.tsx

## Architecture Boundaries
- web/frontend: component

## Design-System / Token Constraints
- product components must consume semantic tokens
- raw values and direct hex usage are forbidden in product UI
- primitive tokens remain upstream unless explicitly authorized

## Standards Preflight
- system/agents/frontend.md
- system/agents/ui.md
- system/engineering/CODING_STANDARDS.md
- system/engineering/ARCHITECTURE_CONTRACTS.md
- system/design/DESIGN_SYSTEM_STANDARDS.md

## Documentation Preflight
- Official docs: React

## Verification Plan
- npm run build

## Constraints
- use semantic tokens

## Done Criteria
- [ ] ui exists

## Evidence Required
- screenshots

## Review Gate
evidence-qa

## Drift Risks
- ui drift
`);
  write(path.join(workspace, "execution", "ledgers", "LEDGER-TASK-001.md"), `# LEDGER

## Ledger ID
LEDGER-TASK-001

## Task ID
TASK-001

## Scenario
new-product

## Execution Date
2026-04-23

## Executor
opencode

## Owner Specialist Required
frontend

## Owner Specialist Invoked
adapted

## Supporting Specialists Invoked
- ui

## Supporting Specialist Status
- ui: invoked-adapted

## Runtime Target Used
opencode

## Specialist Result Strength
adapted-specialist-execution

## Specialist Material Contribution
- system/agents/frontend.md
- system/agents/ui.md

## Architecture Preflight
- system/engineering/CODING_STANDARDS.md
- system/engineering/ARCHITECTURE_CONTRACTS.md
- system/design/DESIGN_SYSTEM_STANDARDS.md

## Standards Applied
- system/agents/frontend.md
- system/agents/ui.md
- system/engineering/CODING_STANDARDS.md
- system/engineering/ARCHITECTURE_CONTRACTS.md
- system/design/DESIGN_SYSTEM_STANDARDS.md

## Documentation Preflight
- Official docs: React

## Inputs Used
- discovery

## Files Touched
- src/App.tsx

## Commands Run
- node ai-dev-system/scripts/validate-ai-dev.mjs --workspace ai-dev-workspace/current --all

## Tooling Deviations
- none

## Evidence Produced
- build output

## Done Criteria Status
- [x] ui exists - pass

## Scope Confirmation
within-boundary

## Drift Warnings
- none

## Result
implemented

## Review Handoff
execution/reviews/REVIEW-TASK-001.md
`);
  write(path.join(workspace, "execution", "reviews", "REVIEW-TASK-001.md"), `# REVIEW

## Review ID
REVIEW-TASK-001

## Task ID
TASK-001

## Ledger Reviewed
execution/ledgers/LEDGER-TASK-001.md

## Reviewer
evidence-qa

## Review Date
2026-04-23

## Evidence Inspected
- build log
- code inspection

## Acceptance Criteria Result
- [x] ui exists - pass

## Scope Result
within-boundary

## Specialist Honesty Result
accurate

## Documentation Evidence Result
pass

## Architecture Compliance Result
pass

## Issues Found
- none

## Decision
accepted

## Retry Guidance
none

## Follow-Up Notes
- responsive verified
- accessibility verified

## State Recommendation
close task
`);
}, 1);

console.log("PASS: smoke validation cases passed.");
