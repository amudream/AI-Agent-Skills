# Skill Evidence Standard

This repository should not treat a skill as reliable just because it sounds plausible. Each skill should declare its evidence level, underlying logic, validation method, and update trigger.

## Evidence levels

| Level | Name | Meaning | Public use |
|---|---|---|---|
| L0 | Draft | Unvalidated idea or rough prompt | Do not publish as stable |
| L1 | Practitioner heuristic | Based on practical experience or known business logic, but not yet benchmarked | Publish only with caveats |
| L2 | Source-backed | Grounded in public platform docs, official guidance, standards, or widely accepted domain practice | Publish with source notes |
| L3 | Eval-backed | Has representative examples, tests, or eval cases showing expected behavior and failure boundaries | Preferred public level |
| L4 | Data-backed | Validated with real project data, A/B tests, conversion data, or repeated production outcomes | Strongest; may require private evidence |

## Required evidence fields for each skill

Each public `SKILL.md` should include:

```markdown
## Evidence basis

- Evidence level:
- Underlying logic:
- Source or reference:
- Validation method:
- Update trigger:
```

## Reliability rule

A skill is reliable only inside its stated boundary. A website conversion skill cannot guarantee conversion lift. A marketplace listing skill cannot guarantee ranking. A product-emotion skill cannot invent emotional value that the product cannot actually support.

## Freshness rule

Skills that depend on platform policy, ranking algorithms, ad rules, marketplace rules, or compliance rules must be reviewed when the platform changes. Use `L1` or `L2` unless the skill has platform-specific source notes and eval cases.

## Validation methods

Use one or more:

- Example input/output checks.
- JSONL eval cases under `tests/`.
- Manual checklist review.
- Before/after page analysis.
- A/B test or conversion data in a private project.
- Platform policy review.
- User feedback or operator review.

## Public/private boundary

Public skills should usually be L1-L3. L4 evidence often contains private business data and should be summarized without exposing raw records.
