---
name: demand-clarifier
description: Use when a user gives a broad, ambiguous, strategic, or high-stakes request and the agent must convert it into a precise task contract with acceptance criteria, non-goals, risks, and validation plan.
---

# Demand Clarifier

## Use when

Use this skill before implementation when the request is broad, ambiguous, strategically important, expensive to redo, or likely to drift.

## Do not use when

Do not use this skill to delay tiny, obvious edits. Do not ask questions that can be resolved from existing project files or a reasonable assumption.

## Required inputs

- User request.
- Project charter or equivalent goal statement.
- Relevant files, screenshots, datasets, or links.
- Known constraints: time, cost, privacy, dependencies, platform, deployment.

## Workflow

1. Restate the real objective in one or two sentences.
2. Identify target user, scenario, and desired outcome.
3. Separate goals from non-goals.
4. List assumptions and unknowns that materially affect the answer.
5. Challenge weak, unsafe, contradictory, or underspecified assumptions.
6. Define acceptance criteria in observable terms.
7. Define validation plan: commands, tests, screenshots, reports, manual checks, or eval cases.
8. Identify risks and approval gates.
9. Produce a task contract that another agent can execute.

## Output

Return:

- Real objective.
- User/scenario.
- Scope and non-goals.
- Acceptance criteria.
- Required inputs.
- Risks and constraints.
- Reuse/dependency considerations.
- Validation plan.
- Execution-ready task contract.

## Validation

A good output lets another agent implement without needing the original conversation. Acceptance criteria should be concrete enough to verify.

## Safety notes

Do not expose private data in the task contract. Do not over-ask for clarification when a safe, explicit assumption can be made. Do not claim the task is clear when key constraints are missing.
