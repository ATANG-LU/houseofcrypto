"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import { nav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex h-[104px] max-w-[1180px] items-center justify-between px-5 lg:h-[124px]">
        <div className="flex items-center">
          <Logo />
          <span className="mx-8 hidden h-14 w-px bg-white/10 lg:block" />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[14px] uppercase tracking-[0.12em] transition-colors hover:text-white ${
                  isActive(item.href) ? "text-white underline underline-offset-4" : "text-white/85"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden lg:block">
          <Button href="/tokens" size="md">
            Live prices
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-brand lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-white" strokeWidth="2.4" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-ink transition-opacity duration-200 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="glow absolute inset-0 opacity-70" />
        <div className="relative flex h-[104px] items-center justify-between px-5">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brand"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-white" strokeWidth="2.4" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
        <nav className="relative flex flex-col items-center gap-7 pt-10" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[15px] uppercase tracking-[0.14em] ${
                isActive(item.href) ? "text-white underline underline-offset-4" : "text-white/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/tokens" size="md" className="mt-4">
            Live prices
          </Button>
        </nav>
      </div>
    </header>
  );
}
