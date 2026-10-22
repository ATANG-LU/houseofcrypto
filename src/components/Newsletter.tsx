"use client";

import { useState } from "react";
import { MailIcon } from "./Icons";
import { site } from "@/lib/site";

const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

export default function Newsletter() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    if (!endpoint) {
      // No form service connected yet: fall back to the visitor's email app.
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        "Newsletter signup"
      )}&body=${encodeURIComponent(`Please add ${email} to the House Of Crypto newsletter.`)}`;
      return;
    }
    setState("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, _subject: "Newsletter signup" }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <section className="bg-brand">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-8 px-5 py-16 lg:grid-cols-2 lg:py-[70px]">
        <div className="flex min-w-0 items-center gap-6">
          <span className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-2xl bg-white">
            <svg viewBox="0 0 24 24" className="h-9 w-9">
              <rect x="3" y="5" width="18" height="14" rx="3" fill="#0328ee" />
              <path d="m4 7 8 6 8-6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <h2 className="min-w-0 text-[26px] font-medium leading-tight lg:text-[38px]">Subscribe to our crypto news weekly newsletter!</h2>
        </div>

        {state === "done" ? (
          <p className="rounded-full bg-white/15 px-8 py-6 text-[17px] lg:ml-auto">
            <MailIcon className="mr-2 inline h-5 w-5" /> Thanks! You&apos;re on the list.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="flex w-full items-center rounded-full bg-white p-2 lg:ml-auto lg:max-w-[480px]">
            <label htmlFor="nl-email" className="sr-only">
              Email address
            </label>
            <input
              id="nl-email"
              name="email"
              type="email"
              required
              placeholder="Enter email address"
              className="min-w-0 flex-1 bg-transparent px-4 text-[16px] text-ink placeholder:text-ink/70 focus:outline-none"
            />
            <button
              type="submit"
              disabled={state === "sending"}
              className="h-[62px] rounded-full bg-brand px-6 text-[14px] font-medium uppercase tracking-[0.12em] hover:bg-brand-hover disabled:opacity-60"
            >
              {state === "sending" ? "..." : "Subscribe"}
            </button>
          </form>
        )}
        {state === "error" && <p className="text-white/90 lg:col-start-2">Something went wrong. Please try again.</p>}
      </div>
    </section>
  );
}
