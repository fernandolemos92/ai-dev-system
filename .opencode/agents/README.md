# OpenCode Native Agents

This directory contains OpenCode-native subagents generated from `ai-dev-system/system/agents/*.md`.

- `system/agents/*.md` remains the canonical discipline source.
- `.opencode/agents/*.md` is the runtime-native layer OpenCode can invoke via `@agent-name`.
- `system/agents/registry.yaml` maps canonical ai-dev-system specialists to these native agents with `invocation_mode: native-or-adapted`.

When updating an agent discipline file, regenerate or sync the matching native agent file.
