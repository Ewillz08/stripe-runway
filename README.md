# Stripe Runway — Pre-sell Landing

Public marketing landing that converts solo SaaS founders into (a) waitlist emails and (b) paid **founding annual** pre-orders via Stripe Checkout — before building the product.

> **Test mode only.** Do not use production Stripe keys. Production publish requires Wealth Bot CONTROL.

## Stack

- Next.js App Router + TypeScript + Tailwind CSS
- Stripe Checkout Sessions (`stripe` npm package)
- Minimal waitlist API (JSONL on disk locally; console.log on Vercel without KV)

## Specs

Light Spec Kit docs live in [`specs/`](./specs/):

- `constitution.md` — gates (pre-sell first, test mode, CONTROL)
- `spec.md` — goal, pricing, in/out of scope
- `plan.md` — architecture
- `tasks.md` — build checklist

## Setup

```bash
npm install
cp .env.example .env.local
# Fill STRIPE_SECRET_KEY with a sk_test_… key
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Required | Notes |
|---|---|---|
| `STRIPE_SECRET_KEY` | Yes (Checkout) | **Test mode** `sk_test_…` only (Bond test) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Optional for this landing | `pk_test_…` for future client Stripe.js |
| `STRIPE_PRICE_FOUNDING_ANNUAL` | No | Defaults to `price_1UEfTmGj008bHPz0bzLaw0iF` |
| `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` | Interim CTA | Falls back if Checkout Session unavailable |

## Routes

| Route | Purpose |
|---|---|
| `/` | Landing (Hero, Problem, How it works, In/Out, Pricing, FAQ, CTA) |
| `POST /api/waitlist` | Validate email; append JSONL under `data/` (local) or `/tmp` / log on Vercel |
| `POST /api/checkout` | Create Checkout Session (subscription mode, founding annual price) |
| `/success` | Post-Checkout success |
| `/cancel` | Checkout canceled |

## Waitlist persistence

- **Local:** appends to `data/waitlist.jsonl`
- **Vercel without KV:** validates email, `console.log`s the entry, returns `{ ok: true }`

**TODO:** wire [Vercel KV](https://vercel.com/docs/storage/vercel-kv) (or Postgres) for durable waitlist storage in production.

## Pricing (pre-sell)

- **Founding annual:** $190/yr (locks founder price)
- **Monthly $19:** shown as future; Checkout is annual-only for now

## Constraints

- Test-mode only / no secrets in the repo
- No Stripe Connect / OAuth dashboard in this track
- Kill criteria (<5 paid founding annuals in 14 days post go-live) owned by Opportunity

## Deploy

Deploy to Vercel as a preview first. Hand URL + price ID to Wealth Bot before public announce / production keys.

```bash
npm run build
```
