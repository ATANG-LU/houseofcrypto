"use client";

import { useEffect, useState } from "react";
import { MARKETS_URL, mapRows, type Market } from "@/lib/coins";

/** Starts from server data, then refreshes prices in the browser every 60 seconds. */
export function useMarkets(initial: Market[]) {
  const [markets, setMarkets] = useState<Market[]>(initial);
  const [updated, setUpdated] = useState<Date | null>(initial.length ? new Date() : null);

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        const res = await fetch(MARKETS_URL, { headers: { accept: "application/json" } });
        if (!res.ok) return;
        const rows = mapRows(await res.json());
        if (alive && rows.length) {
          setMarkets(rows);
          setUpdated(new Date());
        }
      } catch {
        /* keep last good data */
      }
    }
    if (!initial.length) load();
    const t = setInterval(load, 60_000);
    return () => {
      alive = false;
      clearInterval(t);
    };
  }, [initial.length]);

  const byId = Object.fromEntries(markets.map((m) => [m.id, m])) as Record<string, Market | undefined>;
  return { byId, updated };
}
