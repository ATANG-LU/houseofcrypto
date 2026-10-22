"use client";

import { useState } from "react";

export type QA = { q: string; a: string };

export default function FAQ({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(1);
  return (
    <div className="mx-auto max-w-[780px]">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className="border-b border-white/15">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-2 py-6 text-left"
            >
              <span className="text-[22px] font-medium lg:text-[25px]">{it.q}</span>
              <span className="relative h-6 w-6 shrink-0">
                <span className="absolute left-0 top-1/2 h-[2px] w-6 -translate-y-1/2 bg-white" />
                <span
                  className={`absolute left-1/2 top-0 h-6 w-[2px] -translate-x-1/2 bg-white transition-transform ${
                    isOpen ? "scale-y-0" : ""
                  }`}
                />
              </span>
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
              <p className="overflow-hidden px-2 leading-8 text-white/90">{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
