---
name: reuse-and-dependency-management
description: Use when deciding whether to reuse an existing package, official SDK, GitHub project, platform feature, or custom implementation, and when evaluating dependency, license, security, and supply-chain risk.
---

# Reuse and Dependency Management

## Use when

Use this skill before implementing non-trivial infrastructure or adding dependencies: auth, payments, charts, reports, APIs, parsing, file conversion, browser automation, data connectors, logging, queues, or model tooling.

## Do not use when

Do not use this skill to justify adding packages casually. Do not choose a dependency only because it is popular.

## Required inputs

- Problem to solve.
- Current stack and package manager.
- Existing repository code.
- Candidate packages, SDKs, platform features, or standards.
- License and production constraints.
- Validation commands.

## Workflow

1. Check existing repository utilities first.
2. Check standard library or platform-native solution.
3. Check official SDKs or first-party integrations.
4. Compare maintained third-party libraries or GitHub projects.
5. Compare custom implementation.
6. Evaluate fit, maintenance, license, security, transitive dependencies, install behavior, API stability, runtime cost, testability, and exit cost.
7. Decide whether human approval is required.
8. Run relevant validation after changes.
9. Record dependency decision for high-impact changes.

## Output

Return:

- Need.
- Options considered.
- Selected approach.
- Dependency added or avoided.
- License/security/maintenance notes.
- Approval requirement.
- Validation run.
- Exit plan.

## Validation

A good decision explains why the selected option is safer or more useful than alternatives. It must state whether checks were run.

## Safety notes

Require approval for system/global installs, paid/cloud services, database migrations, security-sensitive packages, broad permissions, unclear licenses, native binaries, or destructive changes.
