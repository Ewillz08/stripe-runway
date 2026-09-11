import { NextResponse } from "next/server";
import { appendFile, mkdir } from "fs/promises";
import path from "path";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const email =
    typeof body === "object" &&
    body !== null &&
    "email" in body &&
    typeof (body as { email: unknown }).email === "string"
      ? (body as { email: string }).email.trim().toLowerCase()
      : "";

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const entry = JSON.stringify({
    email,
    at: new Date().toISOString(),
  });

  try {
    const dir = process.env.VERCEL
      ? "/tmp"
      : path.join(process.cwd(), "data");
    if (!process.env.VERCEL) {
      await mkdir(dir, { recursive: true });
    }
    const file = path.join(dir, "waitlist.jsonl");
    await appendFile(file, entry + "\n", "utf8");
  } catch (err) {
    console.log("[waitlist]", entry, err instanceof Error ? err.message : err);
  }

  // TODO: persist to Vercel KV (or Postgres) for production durability.
  console.log("[waitlist] accepted", email);

  return NextResponse.json({ ok: true });
}
