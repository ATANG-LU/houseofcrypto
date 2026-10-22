// Dotted globe with orbit rings, drawn procedurally (replaces the design's globe render).

function dots() {
  const out: { x: number; y: number; o: number; r: number }[] = [];
  const R = 230;
  const tilt = 0.35;
  for (let lat = -80; lat <= 80; lat += 4) {
    const phi = (lat * Math.PI) / 180;
    const ring = Math.max(1, Math.round(88 * Math.cos(phi)));
    for (let i = 0; i < ring; i++) {
      const lon = (i / ring) * 2 * Math.PI;
      const x0 = R * Math.cos(phi) * Math.sin(lon);
      const y0 = R * Math.sin(phi);
      const z0 = R * Math.cos(phi) * Math.cos(lon);
      // tilt around x axis
      const y = y0 * Math.cos(tilt) - z0 * Math.sin(tilt);
      const z = y0 * Math.sin(tilt) + z0 * Math.cos(tilt);
      if (z < 0) continue;
      // pseudo "landmass" pattern so the globe isn't uniform
      const n = Math.sin(lon * 3 + phi * 2) + Math.cos(lon * 2 - phi * 5) + Math.sin(phi * 7 + lon);
      if (n < 0.2) continue;
      out.push({ x: 260 + x0, y: 260 - y, o: 0.25 + 0.75 * (z / R), r: 1.2 + 1.1 * (z / R) });
    }
  }
  return out;
}

const DOTS = dots();

export default function Globe({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 520" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="gglow" cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#0328ee" stopOpacity=".35" />
          <stop offset="1" stopColor="#0328ee" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="260" cy="260" r="260" fill="url(#gglow)" />
      {DOTS.map((d, i) => (
        <circle key={i} cx={d.x.toFixed(1)} cy={d.y.toFixed(1)} r={d.r.toFixed(2)} fill="#dfe6ff" fillOpacity={d.o.toFixed(2)} />
      ))}
      {[
        { rx: 255, ry: 60, rot: -14 },
        { rx: 275, ry: 90, rot: 8 },
        { rx: 240, ry: 40, rot: 22 },
      ].map((o, i) => (
        <ellipse key={i} cx="260" cy="270" rx={o.rx} ry={o.ry} fill="none" stroke="#2346ff" strokeOpacity=".7" strokeWidth="1.3" transform={`rotate(${o.rot} 260 270)`} />
      ))}
      <circle cx="96" cy="318" r="5" fill="#2346ff" />
      <circle cx="420" cy="196" r="4" fill="#4c6bff" />
    </svg>
  );
}
