# Compatibility

This library stores skills in a neutral source format:

```text
skills/<skill-name>/SKILL.md
```

## OpenAI Codex-style projects

Install skills into:

```text
<project>/.agents/skills/<skill-name>/SKILL.md
```

The skill frontmatter should include `name` and `description`.

## Claude Code-style projects

Install skills into:

```text
<project>/.claude/skills/<skill-name>/SKILL.md
```

Claude Code also supports user-level and plugin-level skills. Keep this repository as the source of truth, then copy or symlink into the target location.

## General AI project templates

For generic templates, install only the skills the project actually needs. Avoid copying the entire library into every project; too many skills increase selection noise.

## Recommended adapters

- `codex`: copy `skills/<name>/` into `.agents/skills/<name>/`.
- `claude`: copy `skills/<name>/` into `.claude/skills/<name>/`.
- `plain`: copy into `skills/<name>/` in the target project.
