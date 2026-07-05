# Skill Authoring Guide

A skill is a reusable workflow, not a one-off prompt. It should help an AI agent decide when to use the workflow, what context to gather, how to execute, how to validate, and what not to do.

## Required structure

Each skill lives in:

```text
skills/<skill-name>/SKILL.md
```

Each `SKILL.md` must start with YAML frontmatter:

```yaml
---
name: skill-name
description: Use when ...
---
```

The description should be specific enough for an agent to choose the skill. Avoid descriptions such as "use for anything" or "general assistant skill".

## Required sections

A public skill should include:

- `Use when`
- `Do not use when`
- `Required inputs`
- `Evidence basis`
- `Workflow`
- `Output`
- `Validation`
- `Safety notes`

## Evidence basis

Every public skill should declare:

```markdown
## Evidence basis

- Evidence level:
- Underlying logic:
- Source or reference:
- Validation method:
- Update trigger:
```

Use `docs/skill-evidence-standard.md` to classify reliability. Do not present L1 practitioner heuristics as if they were L4 data-backed practices.

## Supporting files

Use supporting files instead of making `SKILL.md` too large:

```text
examples/      Example inputs and outputs.
references/    Background knowledge or reusable rubrics.
tests/         Eval cases or expected behavior checks.
```

## Public vs private content

Public skills should be generic and safe. Private business methods, customer examples, pricing rules, platform account workflows, and proprietary operating details belong in a private repository.

## Quality rule

A skill is ready when another agent can use it without the original author being present and can produce a verifiable output from representative examples.
