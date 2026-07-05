# Skill Review Checklist

Use this checklist before publishing or installing a skill.

## Metadata

- [ ] `SKILL.md` exists.
- [ ] Frontmatter starts at the first line.
- [ ] `name` exists and matches the directory name.
- [ ] `description` exists and is specific.

## Workflow quality

- [ ] The skill has a clear trigger condition.
- [ ] The skill has `Do not use when` boundaries.
- [ ] Required inputs are explicit.
- [ ] The workflow is stepwise and reusable.
- [ ] The output format is clear.
- [ ] Validation or eval guidance exists.
- [ ] Safety notes exist.

## Data safety

- [ ] No real credentials or tokens.
- [ ] No private customer data.
- [ ] No private pricing, supplier, or account workflow unless the repository is private.
- [ ] No screenshots or examples that expose private records.

## Tool and dependency safety

- [ ] The skill does not silently ask the agent to install packages.
- [ ] High-impact actions require human approval.
- [ ] External sources or APIs are named when needed.
- [ ] Legal, privacy, and platform limits are stated when relevant.

## Portability

- [ ] The skill can be installed into `.agents/skills/`.
- [ ] The skill can be adapted into `.claude/skills/` if needed.
- [ ] Supporting files use relative paths.
