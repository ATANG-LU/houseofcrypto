"use client";

import { useState } from "react";
import { LogoMark } from "./Logo";

export type Highlight = { quote: string; title: string; sub: string };

/** Carousel in the style of the design's testimonial slider. */
export default function Highlights({ items }: { items: Highlight[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(calc(-${active} * (min(100%, 585px) + 24px)))` }}
        >
          {items.map((it, i) => (
            <button
              type="button"
              key={it.title}
              onClick={() => setActive(i)}
              className={`w-full max-w-[585px] shrink-0 rounded-[36px] bg-navy p-8 text-left transition-opacity duration-500 lg:p-12 ${
                i === active ? "opacity-100" : "opacity-35"
              }`}
            >
              <p className="text-[17px] leading-8 lg:text-[18px]">{it.quote}</p>
              <div className="mt-8 flex items-center gap-5">
                <span className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-white">
                  <LogoMark className="h-8" />
                </span>
                <div className="text-[15px] uppercase leading-6 tracking-[0.06em]">
                  <p className="font-medium">{it.title}</p>
                  <p className="text-white/85">{it.sub}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center gap-3">
        {items.map((it, i) => (
          <button
            key={it.title}
            type="button"
            aria-label={`Show ${it.title}`}
            onClick={() => setActive(i)}
            className={`h-3.5 w-3.5 rounded-full transition-colors ${i === active ? "bg-white" : "bg-white/40 hover:bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
}
