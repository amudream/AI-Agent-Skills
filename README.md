# AI Agent Skills

Reusable `SKILL.md` workflows for AI coding, research, reporting, data analysis, and project governance.

This repository is a skills library, not a project template. Use it together with [`AI-Project-Bootstrap`](https://github.com/amudream/AI-Project-Bootstrap) or any downstream AI-assisted project.

## What belongs here

A skill belongs here when it is reusable, has a clear trigger condition, has a stable workflow, defines required inputs, defines output standards, and can be tested with examples or eval cases.

## Repository layout

```text
skills/
  <skill-name>/
    SKILL.md
    examples/
    references/
    tests/

docs/
  skill-authoring-guide.md
  skill-review-checklist.md
  compatibility.md

scripts/
  validate-skills.mjs
  install-skill.mjs

skill-index.json
```

## Compatibility

Skills are stored in a neutral source format:

```text
skills/<skill-name>/SKILL.md
```

Install into an OpenAI Codex-style project:

```text
<project>/.agents/skills/<skill-name>/SKILL.md
```

Install into a Claude Code-style project:

```text
<project>/.claude/skills/<skill-name>/SKILL.md
```

## Initial public skills

- `demand-clarifier`: turn broad requests into task contracts, acceptance criteria, non-goals, risks, and validation plans.
- `deep-review`: review projects, code, prompts, reports, and workflows across correctness, maintainability, security, evals, and risk.
- `html-report-factory`: produce decision-support HTML reports from structured data.
- `loop-engineering`: improve artifacts through baseline, trace, eval, repair, validation, and logging cycles.
- `eval-designer`: design deterministic checks, rubric evals, golden cases, and regression gates.
- `reuse-and-dependency-management`: decide when to reuse packages, SDKs, GitHub projects, or custom code.

## Install a skill

```bash
node scripts/install-skill.mjs html-report-factory --target ../my-project --adapter codex
node scripts/install-skill.mjs html-report-factory --target ../my-project --adapter claude
```

## Validate

```bash
npm run validate
```

Validation checks that every skill has `SKILL.md`, YAML frontmatter, `name`, `description`, use boundaries, inputs, workflow, output, and safety notes.

## Public vs private skills

Keep public skills generic. Put private business SOPs, customer data, pricing rules, account workflows, screenshots, and proprietary operating methods in a private skills repository.

## License

MIT
