# Tasks Lifecycle

This directory stores executable work items for the project.

## Structure

- `active/` → tasks that are currently open, planned, ready for execution, or in progress
- `done/` → tasks that were completed and may still be referenced for traceability
- `archived/` → old, obsolete, canceled, or cold-history tasks that should not participate in normal operational reasoning

## Operational Rules

1. New tasks must be created in `project/tasks/active/`.
2. A task must exist as a single source of truth in only one folder at a time.
3. Completed tasks must be moved from `active/` to `done/`.
4. Tasks that are no longer operationally relevant should be moved from `done/` to `archived/`.
5. Claude should prioritize:
   - `PROJECT_STATE.md`
   - the active task referenced in state
   - tasks in `project/tasks/active/`
   - only consult `done/` or `archived/` when historical context is explicitly needed

## Allowed Status Values

- `draft`
- `ready_for_execution`
- `in_progress`
- `blocked`
- `done`
- `archived`
- `canceled`

## Folder Intent

### active/
Contains the operational queue.

A task in `active/` can be:
- newly created
- waiting for execution
- in progress
- blocked but still relevant

### done/
Contains completed tasks.

These tasks remain available for:
- traceability
- implementation history
- lessons learned
- dependency review

### archived/
Contains cold history.

These tasks should not influence current planning unless explicitly requested.

Examples:
- canceled tasks
- obsolete tasks
- superseded tasks
- very old completed tasks no longer relevant to current execution