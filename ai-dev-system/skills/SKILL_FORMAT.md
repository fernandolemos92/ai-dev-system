# SKILL FORMAT

Use this format for every new skill.

Keep the header minimal and parser-safe.

## Required Frontmatter

```md
---
name: skill-name
description: One short sentence describing when and why to use this skill.
---
```

## Rules

- Start the file with YAML frontmatter.
- Use `name` and `description` only unless a runtime requirement clearly needs more.
- Do not use fenced YAML blocks as metadata.
- Keep the description short and operational.
- After the frontmatter, start with a simple markdown title.
- Do not turn the header into a mini-readme.

## Recommended Shape

```md
---
name: example-skill
description: One short operational sentence.
---

# Example Skill

One short paragraph explaining the skill's job.

## Purpose
narrow explanation

## Working Rules
bounded instructions

## Output Shape
expected output when useful
```

## Reason

Skills are loaded often. Extra header verbosity costs context and can break parsers if the format drifts.
