---
name: eval-designer
description: Use when designing deterministic checks, rubric-based evaluations, golden cases, regression tests, quality gates, or acceptance tests for AI agents, prompts, reports, and workflows.
---

# Eval Designer

## Use when

Use this skill when repeated AI behavior needs measurable quality control or when a project needs acceptance tests before implementation.

## Do not use when

Do not use this skill to create fake precision. Do not replace domain review with weak rubrics when expert judgment is required.

## Required inputs

- Target behavior or artifact.
- Representative tasks or examples.
- Success criteria.
- Failure modes to catch.
- Data or privacy constraints.
- Automated checks available.

## Workflow

1. Define what good behavior means in task-specific terms.
2. Separate deterministic checks from judgment checks.
3. Create golden cases that represent common and high-risk scenarios.
4. Define scoring rubric with pass/fail thresholds.
5. Add negative cases for hallucination, missing evidence, privacy leakage, and unsafe action.
6. Decide how eval results will be stored and compared.
7. Add regression cases from real failures.
8. Connect evals to validation or loop engineering.

## Output

Return:

- Eval objective.
- Case list.
- Expected outputs or rubric.
- Deterministic checks.
- Judgment rubric.
- Thresholds.
- Regression update rule.
- Validation command or manual review process.

## Validation

A good eval catches known bad behavior and does not reward empty but polished output. It should be representative, repeatable, and easy to update when failures appear.

## Safety notes

Do not store private data in public eval cases. Redact examples. Do not use an LLM judge without clear rubric and known limitations.
