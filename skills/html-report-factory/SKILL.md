---
name: html-report-factory
description: Use when creating or improving HTML reports, visual executive summaries, dashboards, KPI reports, research reports, or decision-support artifacts from structured data.
---

# HTML Report Factory

## Use when

Use this skill when a user needs a report that is easier to understand than plain markdown, especially when the task involves trends, flows, segments, funnels, decisions, risks, or before/after comparison.

## Do not use when

Do not use this skill to create decorative HTML that is just styled markdown. Do not invent metrics, charts, or data provenance.

## Required inputs

- Report purpose and audience.
- Structured data or source files.
- Key questions and decisions the report should support.
- Required visuals.
- Privacy and redaction constraints.
- Output path and format requirements.

## Workflow

1. Define the decision the report should support.
2. Identify data sources, freshness, missing data, and assumptions.
3. Choose visual primitives: KPI cards, time series, flow, funnel, heatmap, matrix, table.
4. Build the report from structured data.
5. Add evidence and data provenance.
6. Add action recommendations and risks.
7. Validate that the report opens locally and contains no private data.
8. Summarize path, sections, and remaining limitations.

## Output

Return:

- Report file path.
- Data source summary.
- Visual sections included.
- Key findings.
- Actions and risks.
- Validation result.

## Validation

The report should be self-contained or have documented dependencies. It should render locally, preserve evidence, and be more readable than equivalent markdown.

## Safety notes

Do not include raw private data in public reports. Redact credentials, customer data, private URLs, screenshots, and logs. Do not use animation or decoration that hides the message.
