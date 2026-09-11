# Spec — Stripe Runway pre-sell landing
## Goal
Ship a public marketing landing that converts solo SaaS founders into (a) waitlist emails and (b) paid **founding annual** pre-orders via Stripe Checkout — before building the product.

## Users
Solo / small SaaS founders on Stripe, roughly $2–20K MRR, currently tracking runway in Sheets.

## Success metrics
- Landing live on Vercel (preview OK for CONTROL review; production publish needs Wealth Bot OK)
- Founding annual Checkout works in **test mode**
- Waitlist email capture works (store + confirmation UX)
- Kill: <5 paid pre-orders in 14 days after go-live (Opportunity owns scorecard)

## Pricing (proposed for CONTROL)
- Founding annual: **$190/yr** (locks founder price; ~2 months free vs $19×12)
- Monthly $19 shown as future; pre-sell pushes annual only

## In scope
- Single Next.js landing page (hero, problem, how it works, pricing, FAQ, waitlist, Checkout CTA)
- Stripe Checkout Session for founding annual (one-time or yearly price)
- Waitlist form → persist emails (Vercel KV / simple API + file/DB minimal)
- Success + cancel routes

## Out of scope
- Stripe Connect / OAuth product
- Dashboard, webhooks for MRR, scenarios engine
- Auth beyond Checkout customer email
- Tax automation (unless trivial)
