---
name: marketplace-listing-optimizer
description: Use when improving marketplace product listings such as Amazon, Etsy, eBay, Alibaba, Walmart, Shopee, Temu, or similar catalog/product-detail pages using search intent, buyer objections, proof, and platform-safe copy.
---

# Marketplace Listing Optimizer

## Use when

Use this skill when optimizing a marketplace listing title, bullets, product description, attributes, image brief, FAQ, review-response themes, keyword coverage, or buyer objection handling.

## Do not use when

Do not use this skill to keyword-stuff, fabricate reviews, copy competitor text, make unsupported compliance claims, or violate marketplace policies.

## Required inputs

- Marketplace or platform.
- Product category and product title.
- Current listing content if available.
- Product specs, attributes, variants, materials, size, compatibility, warranty, shipping, MOQ if relevant.
- Target buyer and use cases.
- Allowed keywords and forbidden claims.
- Competitor or review evidence if available.

## Evidence basis

- Evidence level: L1 general marketplace heuristic; L2 only after platform-specific policy/source review; L3 after examples/evals for the target platform.
- Underlying logic: Marketplace listings must balance buyer search intent, category attributes, product proof, objections, platform policy, and conversion clarity.
- Source or reference: `docs/skill-source-map.md`; target marketplace policy, category rules, or seller guidance when available.
- Validation method: Check for no keyword stuffing, fake reviews, false certificates, competitor-copying, or unsupported claims; validate with CTR, conversion, inquiry quality, returns, or review themes when data exists.
- Update trigger: Review whenever the marketplace changes listing policy, search guidance, ad rules, restricted claims, or category requirements.

## Workflow

1. Identify platform context and category expectations.
2. Extract buyer search intent: core keyword, attributes, use case, problem, material, size, compatibility, occasion, audience.
3. Translate specs into buyer benefits without losing factual accuracy.
4. Improve title for clarity, relevance, and policy-safe keyword coverage.
5. Improve bullets or description around use case, proof, objections, and decision criteria.
6. Identify missing attributes, images, FAQ, trust proof, comparison points, and risk reducers.
7. Flag risky claims and evidence gaps.
8. Produce validation plan: impression, CTR, conversion rate, inquiry/order quality, return reasons, review themes.

## Output

Return:

- Listing diagnosis.
- Buyer intent map.
- Revised title options.
- Bullet or description rewrite.
- Attribute and image brief suggestions.
- Keyword opportunities.
- Risky claims to avoid.
- Validation metrics.

## Validation

A good listing improvement is specific to the platform, category, and buyer use case. It should improve relevance and trust without keyword stuffing or unsupported claims.

## Safety notes

Respect platform policy. Do not generate fake reviews, fake scarcity, misleading certifications, competitor trademark misuse, or medical/legal/safety claims without evidence.
