# AI Agent Skills

Reusable `SKILL.md` workflows for industry, website, platform, marketing, ecommerce, B2B, and domain-specific AI work.

This repository is a vertical and website skills library, not a general project template. Use it together with [`AI-Project-Bootstrap`](https://github.com/amudream/AI-Project-Bootstrap) or any downstream AI-assisted project.

## Boundary with AI-Project-Bootstrap

`AI-Project-Bootstrap` owns the universal project foundation: project charter, `AGENTS.md`, generic review, validation, loop engineering, reports, CI, and local secrets management.

`AI-Agent-Skills` owns reusable domain skills: industries, websites, marketplaces, ecommerce pages, B2B export pages, independent-site analysis, and other scenario-specific workflows.

Do not duplicate Bootstrap's core generic skills here. Add skills here only when they encode a specific industry, website type, platform, buyer journey, content workflow, or domain operating pattern.

## What belongs here

A skill belongs here when it is reusable, has a clear trigger condition, has a stable workflow, defines required inputs, defines output standards, and can be tested with examples or eval cases.

Good fits:

- Website analysis and conversion review.
- Marketplace listing optimization.
- B2B export product pages.
- Ecommerce product emotional-value copy.
- Industry-specific product, content, outreach, or research workflows.
- Platform-specific workflows that are safe to publish.

Bad fits:

- Generic demand clarification.
- Generic deep review.
- Generic HTML report generation.
- Generic eval design.
- Generic dependency governance.
- Private business SOPs, customer data, account workflows, or proprietary pricing logic.

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

## Current public skills

- `ecommerce-product-emotion`: translate product specs into buyer scenarios, pain points, emotional value, and conversion-oriented copy.
- `independent-site-analysis`: analyze independent websites, brand sites, Shopify stores, DTC stores, and prospect sites.
- `website-conversion-review`: review landing pages, product pages, inquiry pages, signup pages, and checkout flows for conversion clarity and trust.
- `marketplace-listing-optimizer`: improve marketplace product listings such as Amazon, Etsy, eBay, Alibaba, Walmart, Shopee, or similar product-detail pages.
- `b2b-export-product-page`: create or improve B2B export product pages, wholesale listings, RFQ pages, and supplier product content.

## Install a skill

```bash
node scripts/install-skill.mjs independent-site-analysis --target ../my-project --adapter codex
node scripts/install-skill.mjs marketplace-listing-optimizer --target ../my-project --adapter claude
```

## Validate

```bash
npm run validate
```

Validation checks that every skill has `SKILL.md`, YAML frontmatter, `name`, `description`, use boundaries, inputs, workflow, output, and safety notes.

## Public vs private skills

Keep public skills generic enough to publish. Put private business SOPs, customer data, pricing rules, account workflows, screenshots, and proprietary operating methods in a private skills repository.

## License

MIT
