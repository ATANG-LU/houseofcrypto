"use client";

import CoinGlyph from "./CoinGlyph";
import { useMarkets } from "./useMarkets";
import { COINS, fmtPct, fmtUsd, type Market } from "@/lib/coins";

/** Home page strip (replaces "featured on" logos): live prices for the top assets. */
export default function LiveStrip({ initial }: { initial: Market[] }) {
  const { byId } = useMarkets(initial);
  const shown = COINS.filter((c) => ["bitcoin", "ethereum", "tether", "solana", "binancecoin"].includes(c.id));

  return (
    <div className="no-scrollbar -mx-5 flex gap-10 overflow-x-auto px-5 lg:mx-0 lg:justify-between lg:px-0">
      {shown.map((c) => {
        const m = byId[c.id];
        const up = (m?.change24h ?? 0) >= 0;
        return (
          <div key={c.id} className="flex shrink-0 items-center gap-3">
            <CoinGlyph coin={c} size={38} image={m?.image} />
            <div>
              <p className="text-[22px] font-semibold leading-none tracking-tight lg:text-[26px]">{c.name}</p>
              <p className="mt-1.5 text-[14px]">
                <span className="text-white/85">{fmtUsd(m?.price ?? null)}</span>{" "}
                <span className={up ? "text-up" : "text-down"}>{fmtPct(m?.change24h ?? null)}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
