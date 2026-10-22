"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

const field =
  "w-full rounded-full bg-navy px-5 py-[18px] text-[16px] placeholder:text-white/85 focus:outline-none focus:ring-2 focus:ring-brand";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;

    if (!endpoint) {
      const body = `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || "-"}\n\n${data.message}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        data.subject || "Website enquiry"
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setState("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-[28px] bg-navy p-10">
        <p className="text-[24px] font-medium">Message sent</p>
        <p className="mt-3 text-white/85">Thanks for reaching out. We usually reply within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
      {[
        { n: "name", l: "Name", p: "Full Name", t: "text", r: true },
        { n: "email", l: "Email", p: "email@example.com", t: "email", r: true },
        { n: "company", l: "Company", p: "Company Name", t: "text", r: false },
        { n: "subject", l: "Subject", p: "How can we help?", t: "text", r: false },
      ].map((f) => (
        <div key={f.n}>
          <label htmlFor={`c-${f.n}`} className="mb-3 block text-[17px] font-medium uppercase">
            {f.l}
          </label>
          <input id={`c-${f.n}`} name={f.n} type={f.t} required={f.r} placeholder={f.p} className={field} />
        </div>
      ))}
      <div className="sm:col-span-2">
        <label htmlFor="c-message" className="mb-3 block text-[17px] font-medium uppercase">
          Message
        </label>
        <textarea
          id="c-message"
          name="message"
          required
          rows={5}
          placeholder="Your Message"
          className="w-full rounded-[12px] bg-navy px-5 py-5 text-[16px] placeholder:text-white/85 focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </div>
      <div className="sm:col-span-2 mt-4">
        <button
          type="submit"
          disabled={state === "sending"}
          className="h-[66px] rounded-full bg-brand px-8 text-[15px] font-medium uppercase tracking-[0.12em] hover:bg-brand-hover disabled:opacity-60"
        >
          {state === "sending" ? "Sending..." : "Send message"}
        </button>
        {state === "error" && <p className="mt-4 text-down">Something went wrong. Please email us directly.</p>}
      </div>
    </form>
  );
}
