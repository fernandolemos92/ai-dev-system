# AGENTS

## Project Identity

This folder is the `ai-dev-system` engine.

Do not treat product/design words in the user prompt as permission to call downstream tools directly.
## External Design Tool Default

Stitch and other design/code generation MCP tools are unavailable by default for ai-dev-system orchestration.

They may be used only when the user explicitly asks to use that tool or an active task contract/handoff explicitly names it after user approval.

Do not infer Stitch usage from words like `hero`, `design`, `premium`, `romï¿½ntico`, or `storytelling`.

## Downstream Tool Gate

Do not call Stitch, MCP design generators, frontend/backend/database tools, or product-specific skills unless a current orchestration decision or active task contract explicitly allows that tool path.

Product terms like `hero`, `premium`, `design`, `SaaS`, or `wedding` are not tool permission.

If a downstream tool times out or fails, record the failure and stop with retry guidance. Do not silently replace the failed tool with manual feature implementation unless the active task contract allows that fallback.
## Local Skill File Semantics

`ai-dev-system/skills/*/SKILL.md` files are local project procedure files unless the host runtime explicitly exposes them as callable native skills.

For `ai-dev-system` orchestration, reading and applying `skills/orchestrate/SKILL.md` is sufficient. Do not call a host/runtime skill named `orchestrate` unless it is listed as an available native skill.

If a host skill named `orchestrate` is unavailable, that is not a failure. Continue with adapted local procedure execution and record it as local/adapted orchestration if relevant.

## Mandatory Entrypoint

For any request to start, resume, continue, test, audit, or operate `ai-dev-system`, first read:

1. `ENGINE.md`
2. `system/control/ORCHESTRATOR.md`
3. `skills/orchestrate/SKILL.md`
4. `../ai-dev-workspace/current/config.yaml`
5. `../ai-dev-workspace/current/STATE.md`

Then print root status:

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

Only after orchestration resolves scenario, actual phase, and next movement may downstream tools such as Stitch, frontend, backend, database, or design specialists be used.

If `target_project.root` is unset, product-code execution is not allowed.
## Non-Negotiable Validation Gate

The mechanical validator is an internal gate, not a command the user must remember.

When `scripts/validate-ai-dev.mjs` exists:

- Planning must automatically validate the active task contract before reporting the task ready for Build/Review.
- Planning reports must include `Validator: PASS | FAIL | NOT-RUN`. If an active task contract was created or updated and the validator is `NOT-RUN` or `FAIL`, the gate is `fail-repair`; never report `Gate: PASS` or request execution approval for that task.
- Build/Review or `execute-task` must automatically validate before product code edits and again after ledger/review/state records are written.
- If validation fails, repair Planning, state, config, ledger, or review records before continuing.
- Do not ask the user to copy or manually run validator commands. Manual validator use is for debugging only.
## Operational Root Resolution

Do not assume the current working directory is the operational root.

Resolve roots before reading workspace state:

1. Check the current working directory first. If it contains both required folders, it is the operational root. Stop searching.
   - `ai-dev-system/`
   - `ai-dev-workspace/`
2. Only if the current directory does not contain both folders, walk upward through parents until a folder containing both is found.
3. Only if no current/ancestor folder matches, use the location of the loaded `ai-dev-system` file to infer a candidate umbrella folder, then verify it contains both folders.
4. If no verified folder contains both required folders, report `Operational root: unresolved`, route to bootstrap/recovery, and do not continue with product, design, code, Stitch, or MCP tools.
5. Print absolute paths in the root status header.

Canonical resolved roots:

```text
Operational root: <folder containing ai-dev-system/ and ai-dev-workspace/>
Root verification: verified only after both folders are confirmed
System root: <Operational root>/ai-dev-system
Workspace root: <Operational root>/ai-dev-workspace/current
Target project root: config target_project.root resolved from Operational root, or unset
```
## Path Read Safety

Do not read repo files using leading-slash paths such as `/ai-dev-system/ENGINE.md` on Windows. A leading slash may resolve to the drive root and bypass the operational root.

After root resolution, read files with verified absolute paths or paths explicitly relative to the resolved operational root.

If the first read fails because a path resolved outside the operational root, treat that as a path-resolution bug: repair the root/path first, then retry. Do not continue as if the failed absolute path was harmless.













