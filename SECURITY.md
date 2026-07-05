# Security Policy

This repository stores public reusable skills. Do not commit private data, customer data, credentials, private screenshots, platform cookies, internal pricing rules, or proprietary operating procedures.

## Public skill rules

A public skill must not:

- Contain real customer, supplier, account, order, quote, token, cookie, or credential data.
- Instruct an agent to bypass approvals for destructive, paid, legal, compliance, production, email-bulk, scraping-at-scale, or account-sensitive actions.
- Hide external dependencies or installation behavior.
- Claim results, certifications, performance, or personal experience without evidence.

## Private skills

Use a private repository for business SOPs, customer workflows, pricing logic, account-specific automations, and proprietary methods.

## Review before publishing

Run:

```bash
npm run validate
```

Also manually inspect `references/`, `examples/`, and `tests/` for private data before publishing.
