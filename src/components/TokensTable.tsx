"use client";

import CoinGlyph from "./CoinGlyph";
import { useMarkets } from "./useMarkets";
import { COINS, fmtPct, fmtUsd, type Market } from "@/lib/coins";

export default function TokensTable({ initial }: { initial: Market[] }) {
  const { byId, updated } = useMarkets(initial);

  return (
    <div>
      {/* Desktop table */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-[1.25fr_1.6fr_1fr_1.15fr_1.1fr_0.7fr] gap-6 border-b border-white/15 pb-8 text-[15px] font-medium uppercase tracking-[0.06em]">
          <span>Name</span>
          <span>Description</span>
          <span>Price (24h)</span>
          <span>Market cap</span>
          <span>Volume (24h)</span>
          <span>Website</span>
        </div>
        {COINS.map((c) => {
          const m = byId[c.id];
          const up = (m?.change24h ?? 0) >= 0;
          return (
            <div
              key={c.id}
              className="grid grid-cols-[1.25fr_1.6fr_1fr_1.15fr_1.1fr_0.7fr] items-center gap-6 border-b border-white/15 py-7"
            >
              <div className="flex items-center gap-4">
                <CoinGlyph coin={c} size={40} image={m?.image} />
                <span className="text-[17px] font-medium">{c.name}</span>
                <span className="rounded-full bg-navy px-2.5 py-1 text-[11px] font-medium">{c.symbol}</span>
              </div>
              <p className="text-[14px] leading-6 text-white/90">{c.description}</p>
              <div className="text-[15px] font-medium">
                <p>{fmtUsd(m?.price ?? null)}</p>
                <p className={`text-[13px] ${up ? "text-up" : "text-down"}`}>{fmtPct(m?.change24h ?? null)}</p>
              </div>
              <p className="text-[15px] font-medium">{fmtUsd(m?.marketCap ?? null, { compact: true })}</p>
              <p className="text-[15px] font-medium">{fmtUsd(m?.volume ?? null, { compact: true })}</p>
              <a href={c.website} target="_blank" rel="noopener noreferrer" className="text-[15px] underline underline-offset-4 hover:text-brand-soft">
                Visit website
              </a>
            </div>
          );
        })}
      </div>

      {/* Mobile cards */}
      <div className="grid gap-4 lg:hidden">
        {COINS.map((c) => {
          const m = byId[c.id];
          const up = (m?.change24h ?? 0) >= 0;
          return (
            <div key={c.id} className="rounded-[28px] bg-navy p-6">
              <div className="flex items-center gap-3">
                <CoinGlyph coin={c} size={40} image={m?.image} />
                <div className="flex-1">
                  <p className="font-medium">{c.name}</p>
                  <p className="text-[13px] text-white/60">{c.symbol}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{fmtUsd(m?.price ?? null)}</p>
                  <p className={`text-[13px] ${up ? "text-up" : "text-down"}`}>{fmtPct(m?.change24h ?? null)}</p>
                </div>
              </div>
              <p className="mt-4 text-[14px] leading-6 text-white/85">{c.description}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-[13px]">
                <div>
                  <p className="uppercase text-white/55">Market cap</p>
                  <p className="font-medium">{fmtUsd(m?.marketCap ?? null, { compact: true })}</p>
                </div>
                <div>
                  <p className="uppercase text-white/55">Volume 24h</p>
                  <p className="font-medium">{fmtUsd(m?.volume ?? null, { compact: true })}</p>
                </div>
              </div>
              <a href={c.website} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-[14px] underline underline-offset-4">
                Visit website
              </a>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-[13px] text-white/55">
        Live market data from{" "}
        <a href="https://www.coingecko.com" target="_blank" rel="noopener noreferrer" className="underline">
          CoinGecko
        </a>
        , refreshed every minute{updated ? ` · last updated ${updated.toLocaleTimeString()}` : ""}. Prices are for
        information only.
      </p>
    </div>
  );
}
