// Laptop mockup and market panel showing an illustrative trading dashboard.
// The numbers shown on these screens are illustrative only.

function Spark({ up = true, className = "" }: { up?: boolean; className?: string }) {
  const d = up
    ? "M0 30 L10 26 L20 28 L30 20 L40 22 L50 14 L60 16 L70 8 L80 10 L90 3 L100 5"
    : "M0 6 L10 8 L20 5 L30 14 L40 12 L50 18 L60 16 L70 24 L80 22 L90 28 L100 27";
  return (
    <svg viewBox="0 0 100 32" preserveAspectRatio="none" className={className}>
      <path d={d} fill="none" stroke={up ? "#19c37d" : "#ff5470"} strokeWidth="2.2" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function BigChart() {
  const line =
    "M0 150 C40 140 60 160 100 130 S160 110 200 120 S260 80 300 90 S360 40 400 60 S460 30 500 20 S560 40 600 10";
  return (
    <svg viewBox="0 0 600 170" preserveAspectRatio="none" className="h-full w-full">
      <defs>
        <linearGradient id="fillA" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#2346ff" stopOpacity=".55" />
          <stop offset="1" stopColor="#2346ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[40, 80, 120].map((y) => (
        <line key={y} x1="0" x2="600" y1={y} y2={y} stroke="#fff" strokeOpacity=".06" />
      ))}
      <path d={`${line} L600 170 L0 170 Z`} fill="url(#fillA)" />
      <path d={line} fill="none" stroke="#4c6bff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

const coins = [
  { s: "BTC", n: "Bitcoin", c: "#f7931a", p: "$67,420", ch: "+2.4%", up: true },
  { s: "ETH", n: "Ethereum", c: "#627eea", p: "$3,185", ch: "+1.8%", up: true },
  { s: "SOL", n: "Solana", c: "#14f195", p: "$158.20", ch: "-0.9%", up: false },
  { s: "USDT", n: "Tether", c: "#26a17b", p: "$1.00", ch: "0.0%", up: true },
];

function CoinDot({ s, c }: { s: string; c: string }) {
  return (
    <span
      className="flex h-[1.9em] w-[1.9em] shrink-0 items-center justify-center rounded-full text-[0.62em] font-bold text-white"
      style={{ background: c }}
    >
      {s[0]}
    </span>
  );
}

/** Floating market panel (used in place of phone mockups). */
export function MarketPanel({ className = "", tilt = 0 }: { className?: string; tilt?: number }) {
  return (
    <div className={className} style={{ transform: tilt ? `rotate(${tilt}deg)` : undefined }}>
      <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-[#0a1660] to-[#030a33] p-[7%] shadow-2xl shadow-black/50 [container-type:inline-size]">
        <div className="text-[clamp(9px,4.2cqw,15px)]">
          <div className="flex items-center justify-between">
            <p className="text-white/60">BTC / USD</p>
            <span className="rounded-full bg-up/15 px-[0.7em] py-[0.2em] text-up">+2.41%</span>
          </div>
          <p className="mt-1 text-[2.1em] font-semibold leading-none tracking-tight">$67,420.18</p>
          <div className="mt-[8%] h-[7em]">
            <BigChart />
          </div>
          <div className="mt-[6%] grid grid-cols-2 gap-[4%] text-center">
            <span className="rounded-full bg-up py-[0.7em] font-medium">Buy</span>
            <span className="rounded-full bg-white/10 py-[0.7em] font-medium">Sell</span>
          </div>
          <div className="mt-[7%] space-y-[0.9em]">
            {coins.map((c) => (
              <div key={c.s} className="flex items-center gap-[0.7em]">
                <CoinDot s={c.s} c={c.c} />
                <div className="min-w-0 flex-1">
                  <p className="font-medium leading-tight">{c.n}</p>
                  <p className="leading-tight text-white/50">{c.s}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium leading-tight">{c.p}</p>
                  <p className={`leading-tight ${c.up ? "text-up" : "text-down"}`}>{c.ch}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Laptop screen: trading dashboard. */
function LaptopScreen() {
  return (
    <div className="flex h-full bg-[#040b3a] text-[clamp(6px,1.25cqw,13px)]">
      <aside className="hidden w-[17%] flex-col gap-[1.2em] border-r border-white/5 bg-[#030830] p-[2%] sm:flex">
        <div className="flex items-center gap-[0.5em] font-semibold">
          <span className="h-[1.4em] w-[1.4em] rounded-[0.4em] bg-brand" /> HOC
        </div>
        {["Overview", "Markets", "Trade", "Watchlist", "News", "Alerts"].map((x, i) => (
          <span key={x} className={`rounded-[0.6em] px-[0.6em] py-[0.4em] ${i === 2 ? "bg-brand" : "text-white/55"}`}>
            {x}
          </span>
        ))}
      </aside>
      <div className="flex flex-1 flex-col p-[2.4%]">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-white/55">BTC / USD</p>
            <p className="text-[2.2em] font-semibold leading-tight">$67,420.18</p>
            <p className="text-up">+2.41% · 24h</p>
          </div>
          <div className="flex gap-[0.4em]">
            {["1H", "1D", "1W", "1M", "1Y"].map((t, i) => (
              <span key={t} className={`rounded-full px-[0.8em] py-[0.3em] ${i === 1 ? "bg-brand" : "bg-white/5 text-white/60"}`}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-[2%] flex-1">
          <BigChart />
        </div>
        <div className="mt-[2%] grid grid-cols-4 gap-[2%]">
          {coins.map((c) => (
            <div key={c.s} className="rounded-[0.8em] bg-white/5 p-[0.8em]">
              <div className="flex items-center gap-[0.5em]">
                <CoinDot s={c.s} c={c.c} />
                <span className="font-medium">{c.s}</span>
              </div>
              <p className="mt-[0.4em] font-medium">{c.p}</p>
              <Spark up={c.up} className="mt-[0.3em] h-[2em] w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Laptop({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative mx-auto w-[88%] rounded-t-[2.2%] bg-[#24233a] p-[1.4%] pb-[2.6%]">
        <div className="absolute left-1/2 top-0 h-[2.6%] w-[9%] -translate-x-1/2 rounded-b-md bg-[#24233a]" />
        <div className="aspect-[16/10] w-full overflow-hidden rounded-[0.6%] bg-device [container-type:inline-size]">
          <LaptopScreen />
        </div>
      </div>
      <div className="relative h-[3.4%] min-h-[14px] w-full rounded-b-[18px] rounded-t-[4px] bg-[#1d1c2c]">
        <div className="absolute left-1/2 top-0 h-[40%] w-[16%] -translate-x-1/2 rounded-b-xl bg-[#2e2d42]" />
      </div>
    </div>
  );
}
