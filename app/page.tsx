import CheckoutButton from "@/components/CheckoutButton";
import WaitlistForm from "@/components/WaitlistForm";

const faqs = [
  {
    q: "Is Stripe access read-only?",
    a: "Yes. We only need read access to derive MRR and runway — never move money or change your account.",
  },
  {
    q: "Does this replace Baremetrics?",
    a: "No. Stripe Runway is runway-first: months of cash left and three hire / stall / lose-top-customer scenarios. It complements analytics tools or replaces a spreadsheet runway model.",
  },
  {
    q: "Does my data leave Stripe?",
    a: "We derive metrics from Stripe; retention details will be documented in our privacy blurb at launch. Pre-sell buyers get founder pricing locked in.",
  },
  {
    q: "What am I buying now?",
    a: "Founding annual access at $190/yr (locks the founder price). Product ships after we hit validation — kill criteria owned by Opportunity.",
  },
];

export default function HomePage() {
  return (
    <>
      <header className="border-b border-border bg-card/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            Stripe Runway
          </a>
          <nav className="flex items-center gap-4 text-sm text-muted">
            <a href="#pricing" className="hover:text-foreground">
              Pricing
            </a>
            <a href="#faq" className="hover:text-foreground">
              FAQ
            </a>
            <a
              href="#cta"
              className="rounded-lg bg-accent px-3 py-1.5 font-medium text-white hover:bg-accent-hover"
            >
              Get access
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-5xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
          <p className="mb-4 inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
            Pre-sell · Founder pricing
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Know your months of runway from Stripe — in one number.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted text-pretty">
            Connect Stripe. Add burn. Get hire / stall / lose-top-customer
            scenarios. Built for solo SaaS at $2–20K MRR — not enterprise
            finance suites.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-start">
            <CheckoutButton />
            <a
              href="#how"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium hover:bg-background"
            >
              See how it works
            </a>
          </div>
          <p className="mt-3 text-sm text-muted">
            Founding annual <strong className="text-foreground">$190/yr</strong>{" "}
            · Monthly $19 coming later
          </p>
        </section>

        <section className="border-y border-border bg-card py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Spreadsheets lie. Charts don&apos;t answer &ldquo;can I
              hire?&rdquo;
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  t: "Sheets drift weekly",
                  d: "MRR and burn move every week. A static model is wrong by Friday.",
                },
                {
                  t: "Analytics tools are deep & pricey",
                  d: "Baremetrics-class suites start ~$75 and optimize for charts — not runway decisions.",
                },
                {
                  t: "You need scenarios",
                  d: "Founders need hire / stall / lose-top-customer toggles, not forty dashboards.",
                },
              ].map((item) => (
                <li
                  key={item.t}
                  className="rounded-xl border border-border bg-background p-5"
                >
                  <h3 className="font-medium">{item.t}</h3>
                  <p className="mt-2 text-sm text-muted">{item.d}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[28rem] text-left text-sm">
                <thead className="bg-background text-muted">
                  <tr>
                    <th className="px-4 py-3 font-medium">Approach</th>
                    <th className="px-4 py-3 font-medium">Fit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="px-4 py-3">Spreadsheets</td>
                    <td className="px-4 py-3 text-muted">Free, but wrong fast</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-3">Baremetrics-class</td>
                    <td className="px-4 py-3 text-muted">Deep & pricey</td>
                  </tr>
                  <tr className="border-t border-border bg-accent-soft/40">
                    <td className="px-4 py-3 font-medium">Stripe Runway</td>
                    <td className="px-4 py-3">Runway-first, founder-priced</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="how" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            How it works
          </h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                n: "1",
                t: "Connect Stripe",
                d: "Read-only access to active-sub MRR.",
              },
              {
                n: "2",
                t: "Enter fixed burn",
                d: "Your monthly fixed costs in one field.",
              },
              {
                n: "3",
                t: "See runway + scenarios",
                d: "Months left, plus hire / stall / lose-top-customer.",
              },
            ].map((s) => (
              <li key={s.n} className="relative rounded-xl border border-border bg-card p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 font-medium">{s.t}</h3>
                <p className="mt-2 text-sm text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-y border-border bg-card py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:grid-cols-2 sm:px-6">
            <div>
              <h2 className="text-xl font-semibold">What&apos;s in (v1)</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {[
                  "Active-sub MRR from Stripe",
                  "Fixed monthly burn",
                  "Months of runway — one number",
                  "3 scenarios: hire / stall / lose top customer",
                  "Email alert if runway < N months",
                ].map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Out of scope (v1)</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {[
                  "Cohorts & LTV dashboards",
                  "Multi-entity / tax / payroll",
                  "Stripe Connect or OAuth product dashboard",
                  "Baremetrics clone features",
                ].map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="text-muted">–</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-5xl px-4 text-sm text-muted sm:px-6">
            Built by operators on Stripe — real quotes coming post-pilot.
          </p>
        </section>

        <section id="pricing" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Pricing
          </h2>
          <p className="mt-2 text-muted">
            Pre-sell pushes founding annual only. Monthly ships later.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border-2 border-accent bg-card p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                Founding annual
              </p>
              <p className="mt-3 text-4xl font-semibold tracking-tight">
                $190
                <span className="text-lg font-normal text-muted">/yr</span>
              </p>
              <p className="mt-2 text-sm text-muted">
                Locks founder price · ~2 months free vs $19×12
              </p>
              <CheckoutButton className="mt-6" />
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 opacity-80">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Monthly · coming later
              </p>
              <p className="mt-3 text-4xl font-semibold tracking-tight">
                $19
                <span className="text-lg font-normal text-muted">/mo</span>
              </p>
              <p className="mt-2 text-sm text-muted">
                Shown for context. Pre-sell is annual-only until CONTROL.
              </p>
              <button
                type="button"
                disabled
                className="mt-6 inline-flex min-h-11 cursor-not-allowed items-center rounded-lg border border-border px-6 text-sm text-muted"
              >
                Not available yet
              </button>
            </div>
          </div>
        </section>

        <section id="faq" className="border-y border-border bg-card py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              FAQ
            </h2>
            <dl className="mt-8 space-y-6">
              {faqs.map((f) => (
                <div key={f.q}>
                  <dt className="font-medium">{f.q}</dt>
                  <dd className="mt-1 text-sm text-muted">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="cta" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Lock founder pricing — or join the waitlist
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              Pay $190/yr now to lock the founding annual. Or leave your email
              and we&apos;ll notify you at launch.
            </p>
            <CheckoutButton className="mt-6" />
            <div className="mt-8 border-t border-border pt-8">
              <p className="mb-3 text-sm font-medium">Join the waitlist</p>
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-xs text-muted">
        <p>Stripe Runway · Test-mode Checkout until CONTROL · No secrets in repo</p>
      </footer>
    </>
  );
}
