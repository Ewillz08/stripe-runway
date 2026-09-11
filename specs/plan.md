# Plan — Stripe Runway pre-sell
## Stack
- Next.js App Router on Vercel
- Stripe Checkout (Payment Links or Checkout Sessions) — Bond sandbox first
- Minimal waitlist: API route + Vercel Postgres/KV or JSON-on-blob; prefer simplest that works on Vercel

## Architecture
- `/` marketing landing
- `POST /api/waitlist` — email capture
- `POST /api/checkout` — create Checkout Session for founding annual price
- `/success` `/cancel` pages

## Constraints
- No deep Stripe OAuth
- Test mode keys until CONTROL
- Bring URL + price to Wealth Bot before go-live publish
