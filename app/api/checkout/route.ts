import { NextResponse } from "next/server";
import Stripe from "stripe";

const DEFAULT_PRICE = "price_1UEZusGTDaLsaWdvvifY0LxN";

export async function POST(request: Request) {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    return NextResponse.json(
      {
        error:
          "STRIPE_SECRET_KEY is not set. Use a test-mode key (sk_test_…).",
      },
      { status: 500 },
    );
  }

  if (!secret.startsWith("sk_test_")) {
    return NextResponse.json(
      { error: "Only Stripe test-mode secret keys are allowed." },
      { status: 400 },
    );
  }

  const priceId =
    process.env.STRIPE_PRICE_FOUNDING_ANNUAL?.trim() || DEFAULT_PRICE;

  const origin = new URL(request.url).origin;
  const stripe = new Stripe(secret);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      allow_promotion_codes: true,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe did not return a Checkout URL." },
        { status: 502 },
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Checkout session failed.";
    console.error("[checkout]", message);
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
