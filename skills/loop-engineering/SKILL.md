---
name: loop-engineering
description: Use when improving an agent, prompt, report, code artifact, dataset, or workflow through repeated baseline, trace, evaluation, repair, validation, and logging cycles.
---

# Loop Engineering

## Use when

Use this skill when quality must improve through evidence rather than one-off prompt tweaking: agent behavior, prompts, reports, code generation workflows, evals, or recurring business workflows.

## Do not use when

Do not use this skill for one-shot tasks with no repeated behavior or no way to observe improvement.

## Required inputs

- Target artifact or workflow.
- Success criteria.
- Baseline output or current behavior.
- Eval cases or examples.
- Validation commands or manual review criteria.
- Stop rule.

## Workflow

1. Define goal and explicit success metrics.
2. Record baseline: artifact, score, failures, date, commands.
3. Trace the failure: examples, logs, screenshots, outputs, tool calls, or report sections.
4. Evaluate deterministic and judgment criteria.
5. Diagnose the highest-leverage bottleneck.
6. Make one focused repair.
7. Re-run validation and compare before/after.
8. Log improvement, regression, and next bottleneck.
9. Stop only when thresholds are met or a real constraint blocks progress.

## Output

Return:

- Baseline.
- Failure diagnosis.
- Change made.
- Validation before/after.
- Improved and regressed areas.
- Next bottleneck.
- Stop/continue decision.

## Validation

A good loop has measurable before/after evidence. It does not call a change an improvement without eval, validation, or concrete inspection.

## Safety notes

Do not optimize toward metrics that conflict with the project charter, safety, privacy, accuracy, or user trust. Do not hide regressions.
