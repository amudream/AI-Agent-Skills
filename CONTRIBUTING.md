# Contributing

This repository stores public reusable AI agent skills.

## Rules

- Keep public skills generic and safe.
- Put private business workflows in a private repository.
- Each skill must have `SKILL.md` with `name` and `description` frontmatter.
- Each skill must include: Use when, Do not use when, Required inputs, Workflow, Output, Validation, Safety notes.
- Examples and evals should be redacted and synthetic unless the source is public.
- High-impact actions must require human approval.
- Do not hide dependencies, scripts, or external service requirements.

## Before opening a PR

```bash
npm run validate
```

## Skill naming

Use lowercase kebab-case:

```text
ecommerce-product-emotion
reuse-and-dependency-management
html-report-factory
```

## Publishing checklist

- [ ] No private data.
- [ ] Clear trigger condition.
- [ ] Clear forbidden behavior.
- [ ] Output format defined.
- [ ] Validation guidance exists.
- [ ] Skill appears in `skill-index.json`.
