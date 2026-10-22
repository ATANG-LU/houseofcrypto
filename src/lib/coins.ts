// Coins shown on the site, plus live market data from the free CoinGecko API.
// Docs: https://docs.coingecko.com/reference/coins-markets

export type CoinInfo = {
  id: string; // CoinGecko id
  symbol: string;
  name: string;
  description: string;
  website: string;
  color: string;
  glyph: string;
};

export const COINS: CoinInfo[] = [
  { id: "bitcoin", symbol: "BTC", name: "Bitcoin", glyph: "₿", color: "#f7931a", website: "https://bitcoin.org",
    description: "The first cryptocurrency, built as scarce, peer-to-peer digital money." },
  { id: "ethereum", symbol: "ETH", name: "Ethereum", glyph: "Ξ", color: "#627eea", website: "https://ethereum.org",
    description: "A programmable blockchain that powers DeFi, NFTs and thousands of apps." },
  { id: "tether", symbol: "USDT", name: "Tether", glyph: "₮", color: "#26a17b", website: "https://tether.to",
    description: "A stablecoin designed to track the US dollar one-to-one." },
  { id: "solana", symbol: "SOL", name: "Solana", glyph: "S", color: "#9945ff", website: "https://solana.com",
    description: "A high-speed blockchain with very low fees, popular for payments and apps." },
  { id: "binancecoin", symbol: "BNB", name: "BNB", glyph: "B", color: "#f3ba2f", website: "https://www.bnbchain.org",
    description: "The native token of BNB Chain, used for fees and ecosystem apps." },
  { id: "ripple", symbol: "XRP", name: "XRP", glyph: "X", color: "#23292f", website: "https://xrpl.org",
    description: "A fast, low-cost asset built for cross-border payments." },
  { id: "litecoin", symbol: "LTC", name: "Litecoin", glyph: "Ł", color: "#345d9d", website: "https://litecoin.org",
    description: "A lighter, faster cousin of Bitcoin, designed for everyday payments." },
  { id: "tron", symbol: "TRX", name: "TRON", glyph: "T", color: "#eb0029", website: "https://tron.network",
    description: "A blockchain widely used for cheap stablecoin transfers." },
];

export type Market = {
  id: string;
  price: number | null;
  change24h: number | null;
  marketCap: number | null;
  volume: number | null;
  image?: string;
};

type GeckoRow = {
  id: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number | null;
};

export const MARKETS_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&price_change_percentage=24h&ids=" +
  COINS.map((c) => c.id).join(",");

export function mapRows(rows: GeckoRow[]): Market[] {
  return rows.map((r) => ({
    id: r.id,
    price: r.current_price,
    change24h: r.price_change_percentage_24h,
    marketCap: r.market_cap,
    volume: r.total_volume,
    image: r.image,
  }));
}

/** Server-side fetch, cached for 60 seconds. Returns [] if the API is unreachable. */
export async function getMarkets(): Promise<Market[]> {
  try {
    const res = await fetch(MARKETS_URL, { next: { revalidate: 60 }, headers: { accept: "application/json" } });
    if (!res.ok) return [];
    return mapRows((await res.json()) as GeckoRow[]);
  } catch {
    return [];
  }
}

export function fmtUsd(n: number | null, opts: { compact?: boolean } = {}) {
  if (n == null) return "—";
  if (opts.compact) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", notation: "compact", maximumFractionDigits: 2 }).format(n);
  }
  const digits = n >= 1 ? 2 : n >= 0.01 ? 4 : 6;
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: digits, minimumFractionDigits: 2 }).format(n);
}

export function fmtPct(n: number | null) {
  if (n == null) return "—";
  return `${n >= 0 ? "+" : ""}${n.toFixed(2)}%`;
}
