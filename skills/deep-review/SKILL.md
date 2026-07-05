---
name: deep-review
description: Use for thorough review of a project, codebase, prompt system, report, workflow, or security-sensitive change when correctness, maintainability, and risk discovery matter more than speed.
---

# Deep Review

## Use when

Use this skill for broad reviews, PR reviews, architecture reviews, security checks, AI-generated project audits, prompt reviews, report reviews, and release-readiness checks.

## Do not use when

Do not use this skill for small typo fixes, low-risk formatting changes, or tasks where the user explicitly wants only a narrow answer.

## Required inputs

- Review target: repository, files, PR, report, prompt, workflow, or artifact.
- Project charter or goal.
- Expected behavior and acceptance criteria.
- Available validation commands.
- Risk areas: data, privacy, deployment, dependencies, compliance, cost.

## Workflow

1. Identify the review objective and acceptance criteria.
2. Inspect the relevant files or artifacts before judging.
3. Review requirements alignment and scope drift.
4. Review architecture and maintainability.
5. Review correctness, edge cases, and failure modes.
6. Review validation: tests, schemas, lint, build, reports, evals.
7. Review security, privacy, secrets, and permissions.
8. Review dependencies, licenses, supply-chain risk, and reuse decisions.
9. Rank findings by severity and confidence.
10. Give an executable fix plan.

## Output

Return:

- Executive summary.
- Findings ranked by severity.
- Evidence for each finding.
- Recommended fix.
- Validation to run after fixes.
- Residual risk.
- Files or areas to inspect next.

## Validation

A good review cites concrete files, artifacts, behaviors, or commands. It does not invent test results. It separates confirmed issues from hypotheses.

## Safety notes

Do not expose private data from reviewed artifacts. Do not claim a security, test, or build check passed unless it was actually run or inspected.
