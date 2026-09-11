import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col justify-center px-4 py-16 text-center">
      <p className="text-sm font-medium text-muted">Checkout canceled</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">
        No charge was made
      </h1>
      <p className="mt-4 text-muted">
        You can restart Checkout anytime, or join the waitlist if you&apos;re
        not ready to pre-order.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/#pricing"
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-6 text-sm font-semibold text-white hover:bg-accent-hover"
        >
          Try Checkout again
        </Link>
        <Link
          href="/#cta"
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border px-6 text-sm font-medium"
        >
          Join waitlist
        </Link>
      </div>
    </main>
  );
}
