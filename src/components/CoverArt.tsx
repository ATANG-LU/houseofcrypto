// Abstract glowing cover artwork for blog posts (no stock photos needed).
// Six variants echo the dark "light leak" look of the original design.

const palettes = [
  ["#ff6a3d", "#ff2e93", "#3d7bff"],
  ["#3d7bff", "#00e0c6", "#7a3dff"],
  ["#ff2e5b", "#ffb03d", "#3d4bff"],
  ["#19c37d", "#3d7bff", "#b3ff3d"],
  ["#7a3dff", "#ff3dd2", "#3dc4ff"],
  ["#ffb03d", "#ff3d3d", "#3d7bff"],
];

export default function CoverArt({ variant = 0, className = "" }: { variant?: number; className?: string }) {
  const [a, b, c] = palettes[variant % palettes.length];
  const id = `cv${variant}`;
  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id={`${id}l`} x1="0" x2="1">
            <stop offset="0" stopColor={c} stopOpacity="0" />
            <stop offset=".25" stopColor={c} />
            <stop offset=".5" stopColor={a} />
            <stop offset=".75" stopColor={b} />
            <stop offset="1" stopColor={b} stopOpacity="0" />
          </linearGradient>
          <filter id={`${id}b`} x="-20%" y="-50%" width="140%" height="200%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <filter id={`${id}s`} x="-20%" y="-50%" width="140%" height="200%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
        {/* glow band */}
        <ellipse cx="200" cy="112" rx="190" ry="26" fill={`url(#${id}l)`} filter={`url(#${id}b)`} opacity=".9" />
        {/* coin edge silhouettes */}
        <g opacity=".95">
          <ellipse cx="200" cy="104" rx="120" ry="14" fill="none" stroke={`url(#${id}l)`} strokeWidth="3" filter={`url(#${id}s)`} />
          <ellipse cx="200" cy="104" rx="120" ry="14" fill="#000" fillOpacity=".55" stroke={`url(#${id}l)`} strokeWidth="1.2" />
          <path d="M80 104v10c0 8 54 14 120 14s120-6 120-14v-10" fill="none" stroke={`url(#${id}l)`} strokeWidth="1.2" opacity=".8" />
        </g>
        {/* reflection */}
        <ellipse cx="200" cy="140" rx="150" ry="10" fill={`url(#${id}l)`} filter={`url(#${id}b)`} opacity=".45" />
      </svg>
    </div>
  );
}
