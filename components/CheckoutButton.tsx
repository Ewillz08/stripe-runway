"use client";

import { useState } from "react";

/** CONTROL-minted test Payment Link — interim until Vercel has sk_test_ for Checkout Sessions */
const FALLBACK_PAYMENT_LINK =
  process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ||
  "https://buy.stripe.com/test_fZu4gz8d7fPUgpagIJcAo06";

export default function CheckoutButton({
  children = "Lock founder price — $190/yr",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function startCheckout() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = (await res.json()) as { url?: string; error?: string };
      if (res.ok && data.url) {
        window.location.href = data.url;
        return;
      }
      // No sk_test_ on Vercel yet — fall back to CONTROL Payment Link (test)
      window.location.href = FALLBACK_PAYMENT_LINK;
    } catch {
      window.location.href = FALLBACK_PAYMENT_LINK;
    }
  }

  return (
    <div className={className}>
      <button
        type="button"
        onClick={startCheckout}
        disabled={loading}
        className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-accent px-6 text-sm font-semibold text-white transition hover:bg-accent-hover disabled:opacity-60 sm:w-auto"
      >
        {loading ? "Redirecting…" : children}
      </button>
      {error ? (
        <p className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
