# Skill Source Map

This file explains why each public skill exists, what logic it uses, how reliable it currently is, and how it should be validated before heavier use.

Review date: 2026-07-05.

## Summary

| Skill | Evidence level | Why it exists | Main risk |
|---|---|---|---|
| `ecommerce-product-emotion` | L1 practitioner heuristic, moving toward L3 with evals | Converts specs into buyer scenarios, pain points, emotional value, and copy | Can overstate claims or invent emotion not supported by the product |
| `independent-site-analysis` | L1/L2 heuristic + public-site evidence | Turns public website inspection into positioning, product, trust, and opportunity analysis | Can infer too much from limited public pages |
| `website-conversion-review` | L1/L2 CRO practice + page evidence | Reviews conversion clarity, friction, trust, CTA, and proof | Cannot guarantee conversion lift without analytics or tests |
| `marketplace-listing-optimizer` | L1 general marketplace heuristic; L2 only after platform policy/source review | Improves product listings by buyer search intent, attributes, proof, and objections | Platform rules change; generic advice may not fit a specific marketplace |
| `b2b-export-product-page` | L1 practitioner heuristic | Optimizes B2B product pages for procurement confidence and inquiry quality | Can invent supplier capability or compliance if not constrained |

## Skill notes

### ecommerce-product-emotion

Underlying logic:

- Product specs are not enough; buyers respond to functional problems, concrete use scenarios, emotional outcomes, and identity meaning.
- This logic is useful for ecommerce and brand copy, but it must be constrained by proof and real product experience.

Validation:

- Use synthetic product examples.
- Check that output separates fact from inference.
- Check that unsupported claims are flagged.
- In private projects, validate with ad performance, product-page conversion, review language, or operator review.

### independent-site-analysis

Underlying logic:

- Public website pages reveal positioning, product categories, buyer assumptions, trust signals, and gaps.
- The skill should cite public evidence and label inference.

Validation:

- Compare output against visible site sections.
- Check no hidden data or invented traffic/revenue claims.
- Use operator review for prospect fit.

### website-conversion-review

Underlying logic:

- Conversion problems usually involve unclear offer, weak proof, poor CTA, friction, missing answers, or trust gaps.
- The skill diagnoses likely issues, not guaranteed performance changes.

Validation:

- Compare recommendations against page screenshots or HTML.
- Check that metrics are proposed but not fabricated.
- In real projects, validate with events, heatmaps, A/B tests, form completion, or inquiry quality.

### marketplace-listing-optimizer

Underlying logic:

- Marketplace pages must balance search intent, category fit, attributes, buyer objections, proof, and platform-safe copy.
- Platform-specific skills should be created when enough policy/source detail exists.

Validation:

- Check against platform policy and category requirements.
- Check for no keyword stuffing, fake reviews, fake certifications, or unsupported claims.
- Track CTR, conversion, inquiry quality, return reasons, or review themes when data exists.

### b2b-export-product-page

Underlying logic:

- B2B buyers need procurement confidence: specs, MOQ, customization, packaging, lead time, compliance, QC, logistics, and supplier reliability.
- The page should improve inquiry quality, not only traffic.

Validation:

- Check whether the page answers buyer procurement questions.
- Check no invented certificates, factory scale, delivery time, or client claims.
- Validate with inquiry quality, sample requests, quote requests, and sales feedback.

## Update rule

When a skill becomes platform-specific, add a source note and review date. If a platform changes listing policy, ranking guidance, ad rules, data access, or content restrictions, downgrade the skill to Trial until reviewed.
