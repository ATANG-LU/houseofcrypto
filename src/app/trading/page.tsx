import type { Metadata } from "next";
import Button from "@/components/Button";
import { Laptop } from "@/components/Devices";
import { ChartIcon, IconTile, ShieldIcon, SwapIcon, SyncIcon, TrendDownIcon, UptimeIcon, BoltIcon, LockIcon } from "@/components/Icons";
import { Container, PageHero, SplitHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Trading",
  description: "How crypto trading works: order types, reading charts, strategies and managing risk.",
};

const basics = [
  { icon: <SwapIcon />, title: "Buying & selling", text: "Spot trading is the simplest form of trading: you buy a coin at today's price and own it outright. When you sell, you swap it back for cash or a stablecoin." },
  { icon: <ChartIcon />, title: "Trading pairs", text: "Every trade is a pair, like BTC/USDT. The first asset is what you're buying or selling, and the second is what you're paying with or receiving." },
  { icon: <SyncIcon />, title: "Order book", text: "Buyers and sellers post the prices they're willing to trade at. The gap between the best buy and best sell price is called the spread." },
  { icon: <UptimeIcon />, title: "Volatility", text: "Crypto markets run 24/7 and prices can move quickly. That creates opportunity, but it also means losses can happen fast." },
];

const orders = [
  { tag: "Market", title: "Buy or sell now", text: "Fills immediately at the best price available. Best when speed matters more than the exact price.", points: ["Instant execution", "Price can move slightly", "Simple for beginners"] },
  { tag: "Limit", title: "Set your price", text: "Only fills at the price you choose or better. Best when you have a target price in mind.", points: ["Full price control", "May not fill if price never reaches it", "Good for planned entries"] },
  { tag: "Stop-loss", title: "Limit your downside", text: "Automatically sells if the price falls to a level you set, so one bad move can't wipe out your position.", points: ["Protects against big drops", "Removes emotion from exits", "Essential for active traders"] },
];

const strategies = [
  { title: "Dollar-cost averaging", text: "Buy a fixed amount on a regular schedule, whatever the price. It smooths out volatility and is the calmest way to build a position." },
  { title: "Buy and hold", text: "Buy established assets and hold them for years, ignoring short-term swings. Simple, low-effort and low-cost." },
  { title: "Swing trading", text: "Hold positions for days or weeks to catch bigger price moves, using charts to time entries and exits." },
  { title: "Day trading", text: "Open and close trades within a day. It needs time, discipline and experience, and most beginners lose money doing it." },
];

const risk = [
  { icon: <TrendDownIcon />, text: "Only trade money you can afford to lose" },
  { icon: <ShieldIcon />, text: "Always use a stop-loss on active trades" },
  { icon: <BoltIcon />, text: "Never risk more than 1–2% of your funds on one trade" },
  { icon: <LockIcon />, text: "Never share your recovery phrase with anyone" },
];

export default function Trading() {
  return (
    <>
      <PageHero
        title="Trading"
        text="Everything you need to know about trading crypto, from your first buy to managing risk like a professional."
      />

      {/* BASICS */}
      <section className="py-20 lg:py-28">
        <Container>
          <SplitHeading title="How crypto trading works" text="Before you place your first trade, here are the four ideas every trader should understand." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {basics.map((b) => (
              <div key={b.title} className="flex gap-6 rounded-[36px] bg-navy p-8 lg:p-10">
                <IconTile>{b.icon}</IconTile>
                <div>
                  <h3 className="text-[18px] font-medium uppercase tracking-[0.06em]">{b.title}</h3>
                  <p className="mt-3 leading-[28px] text-white/90">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ORDER TYPES */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center">
            <h2 className="text-[34px] font-medium lg:text-[44px]">Order types explained</h2>
            <p className="mx-auto mt-4 max-w-[520px] text-[17px] leading-8 text-white/90">
              The type of order you choose decides how and when your trade happens.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {orders.map((o) => (
              <div key={o.tag} className="flex flex-col rounded-[36px] bg-navy p-8">
                <span className="self-start rounded-full bg-brand px-3.5 py-2 text-[13px] font-medium uppercase tracking-[0.04em]">
                  {o.tag}
                </span>
                <p className="mt-5 text-[30px] font-semibold tracking-tight">{o.title}</p>
                <p className="mt-4 leading-8 text-white/90">{o.text}</p>
                <ul className="mt-6 space-y-2.5">
                  {o.points.map((p) => (
                    <li key={p} className="flex items-center gap-4">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* READING CHARTS */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="glow pointer-events-none absolute inset-0 opacity-70" />
        <Container className="relative">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-[34px] font-medium leading-tight lg:text-[44px]">Reading a price chart</h2>
              <p className="mt-6 max-w-[480px] text-[17px] leading-8 text-white/90">
                Charts show how a price has moved over time. You don&apos;t need to be an expert, but a few basics go a
                long way.
              </p>
              <ul className="mt-8 max-w-[480px] space-y-5 leading-8 text-white/90">
                <li>
                  <strong className="text-white">Trend:</strong> are prices making higher highs (uptrend) or lower lows
                  (downtrend)?
                </li>
                <li>
                  <strong className="text-white">Support & resistance:</strong> price levels where buying or selling has
                  stopped the price before.
                </li>
                <li>
                  <strong className="text-white">Volume:</strong> big moves on high volume are more meaningful than moves
                  on low volume.
                </li>
                <li>
                  <strong className="text-white">Timeframe:</strong> zoom out. A scary daily drop can look like noise on
                  a monthly chart.
                </li>
              </ul>
            </div>
            <div className="lg:-mr-[22vw]">
              <Laptop className="w-full lg:w-[780px]" />
            </div>
          </div>
        </Container>
      </section>

      {/* STRATEGIES */}
      <section className="py-20 lg:py-28">
        <Container>
          <SplitHeading title="Popular trading strategies" text="There's no single right way to trade. Pick the approach that fits your time, goals and appetite for risk." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {strategies.map((s, i) => (
              <div key={s.title} className="rounded-[36px] bg-navy p-8 lg:p-10">
                <p className="text-[15px] font-medium uppercase tracking-[0.1em] text-brand-soft">0{i + 1}</p>
                <h3 className="mt-3 text-[24px] font-medium">{s.title}</h3>
                <p className="mt-3 leading-8 text-white/90">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* RISK */}
      <section className="bg-brand">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <h2 className="text-[34px] font-medium leading-tight lg:text-[44px]">Manage your risk</h2>
            <p className="mt-6 max-w-[470px] text-[17px] leading-8 text-white/90">
              Good traders focus on protecting what they have first. These four rules will keep you in the game.
            </p>
          </div>
          <ul className="space-y-4">
            {risk.map((r) => (
              <li key={r.text} className="flex items-center gap-4 rounded-full bg-white/10 px-4 py-3 text-[17px]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">{r.icon}</span>
                {r.text}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <Container className="text-center">
          <h2 className="text-[34px] font-medium lg:text-[44px]">Have questions about trading?</h2>
          <p className="mx-auto mt-5 max-w-[520px] text-[17px] leading-8 text-white/90">
            Our team is happy to explain anything on this page in more detail. Just call or email us.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Button href="/contact">Contact us</Button>
            <Button href="/tokens" variant="secondary">
              Live prices
            </Button>
          </div>
          <p className="mx-auto mt-10 max-w-[620px] text-[13px] leading-6 text-white/55">
            This page is for education only and is not financial advice. Crypto assets are volatile and you could lose
            some or all of your money.
          </p>
        </Container>
      </section>
    </>
  );
}
