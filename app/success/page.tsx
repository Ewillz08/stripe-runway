import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col justify-center px-4 py-16 text-center">
      <p className="text-sm font-medium text-accent">Payment received</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">
        You&apos;re a founding member
      </h1>
      <p className="mt-4 text-muted">
        Thanks for locking in founder pricing at $190/yr. We&apos;ll email your
        Stripe receipt and product updates as we ship.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-6 text-sm font-semibold text-white hover:bg-accent-hover"
      >
        Back to home
      </Link>
    </main>
  );
}
