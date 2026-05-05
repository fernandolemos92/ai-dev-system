# ai-dev-workspace Template

This template is copied outside the product repository as:

```text
ai-dev-workspace/
  current/
```

The workspace is private operational memory for the active ai-dev journey.

It should not be committed with the product by default.

## Folder Roles

- `current/STATE.md` is short operational memory: where the journey is now.
- `current/MEMORY.md` is curated long-lived memory: stable truth that should guide future sessions.
- `current/DESIGN.md` is project-specific design memory.
- `current/config.yaml` links the workspace to the target project root.
- `current/artifacts/` stores discovery, synthesis, planning, design, architecture, decisions, and review artifacts.
- `current/execution/` stores task contracts, ledgers, and review reports.

## Rule

Humans should not manually rename the workspace for each project.

The default simple mode always uses `current/`. When a new journey starts, `orchestrate` may archive or replace the previous `current/` only after explicit user confirmation.

## Cleanup Note

This template is live system infrastructure. Keep `templates/ai-dev-workspace/current/` unless bootstrap behavior is intentionally replaced.

Legacy backup folders under `templates/` are not part of the active bootstrap path and should be treated as cleanup candidates only after a zero-reference audit.
## Operational Root Convention

The expected local shape is:

```text
ai-dev-system/
  ai-dev-system/
  ai-dev-workspace/current/
```

`config.yaml` records three separate concepts:

- operational root: the umbrella folder
- system root: the ai-dev-system engine
- workspace root: private operational memory
- target project root: the product code root

The workspace is private runtime memory, not the product repository.
## Path Basis

Template `config.yaml` paths are written relative to the operational root:

```yaml
roots:
  path_basis: operational-root
```

This keeps humans and agents oriented from one terminal at the umbrella folder.