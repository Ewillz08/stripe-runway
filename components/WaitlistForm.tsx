"use client";

import { FormEvent, useState } from "react";

export default function WaitlistForm({ className = "" }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { error?: string; ok?: boolean };
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
        return;
      }
      setStatus("ok");
      setMessage("You're on the list. We'll be in touch.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`flex w-full flex-col gap-2 sm:flex-row ${className}`}
    >
      <label className="sr-only" htmlFor="waitlist-email">
        Email
      </label>
      <input
        id="waitlist-email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-h-11 flex-1 rounded-lg border border-border bg-card px-4 text-sm outline-none ring-accent focus:ring-2"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="min-h-11 rounded-lg bg-foreground px-5 text-sm font-medium text-background transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "loading" ? "Joining…" : "Join waitlist"}
      </button>
      {message ? (
        <p
          className={`w-full text-sm sm:basis-full ${
            status === "ok" ? "text-accent" : "text-red-600"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
