// Small icon set drawn to match the design's blue rounded-square icons.

type P = { className?: string };

export function IconTile({ children, size = "lg" }: { children: React.ReactNode; size?: "sm" | "lg" }) {
  const s = size === "lg" ? "h-16 w-16 rounded-2xl" : "h-11 w-11 rounded-xl";
  return <span className={`inline-flex ${s} items-center justify-center bg-brand shrink-0`}>{children}</span>;
}

const base = "fill-none stroke-white";

export const SwapIcon = ({ className = "h-8 w-8" }: P) => (
  <svg viewBox="0 0 24 24" className={`${className} ${base}`} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 8h14m-4-4 4 4-4 4M20 16H6m4 4-4-4 4-4" />
  </svg>
);
export const ChartIcon = ({ className = "h-8 w-8" }: P) => (
  <svg viewBox="0 0 24 24" className={`${className} ${base}`} strokeWidth="2.2" strokeLinecap="round">
    <rect x="3" y="3" width="18" height="18" rx="5" className="fill-white/25 stroke-none" />
    <path d="M8 16v-4M12 16V8M16 16v-2" />
  </svg>
);
export const WalletIcon = ({ className = "h-8 w-8" }: P) => (
  <svg viewBox="0 0 24 24" className={className}>
    <rect x="3" y="5" width="18" height="14" rx="4" fill="#fff" />
    <rect x="14" y="10" width="7" height="4" rx="2" fill="#0328ee" />
    <circle cx="16" cy="12" r="1" fill="#fff" />
    <path d="M6 8.5h5" stroke="#0328ee" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
export const SyncIcon = ({ className = "h-8 w-8" }: P) => (
  <svg viewBox="0 0 24 24" className={`${className} ${base}`} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3" />
    <path d="M18 3v4h-4M6 21v-4h4" />
  </svg>
);
export const TrendDownIcon = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={`${className} ${base}`} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 7 6 6 4-4 8 8M21 11v6h-6" />
  </svg>
);
export const BoltIcon = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" fill="#fff" />
  </svg>
);
export const LockIcon = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className}>
    <rect x="4" y="10" width="16" height="11" rx="3" fill="#fff" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="#fff" strokeWidth="2.4" />
  </svg>
);
export const ShieldIcon = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" fill="#fff" />
    <path d="m8.5 12 2.5 2.5 4.5-5" fill="none" stroke="#0328ee" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const UptimeIcon = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={`${className} ${base}`} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h4l3-7 4 14 3-7h4" />
  </svg>
);
export const ChatIcon = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M12 3c5 0 9 3.6 9 8s-4 8-9 8c-1.1 0-2.2-.2-3.2-.5L4 20l1.3-3.8C3.9 14.8 3 13 3 11c0-4.4 4-8 9-8Z" fill="#fff" />
    <circle cx="8" cy="11" r="1.3" fill="#0328ee" />
    <circle cx="12" cy="11" r="1.3" fill="#0328ee" />
    <circle cx="16" cy="11" r="1.3" fill="#0328ee" />
  </svg>
);
export const DownloadIcon = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={`${className} ${base}`} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4v11m-5-5 5 5 5-5M5 20h14" />
  </svg>
);
export const UserIcon = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="8" r="4.5" fill="#fff" />
    <rect x="4" y="14.5" width="16" height="7" rx="3.5" fill="#fff" />
  </svg>
);
export const CashIcon = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className}>
    <rect x="2" y="6" width="20" height="12" rx="3" fill="#fff" />
    <circle cx="12" cy="12" r="2.6" fill="#0328ee" />
    <circle cx="6" cy="12" r="1" fill="#0328ee" />
    <circle cx="18" cy="12" r="1" fill="#0328ee" />
  </svg>
);
export const MailIcon = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className}>
    <rect x="3" y="5" width="18" height="14" rx="3" fill="#fff" />
    <path d="m4 7 8 6 8-6" fill="none" stroke="#0328ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const GlobeIcon = ({ className = "h-7 w-7" }: P) => (
  <svg viewBox="0 0 24 24" className={`${className} ${base}`} strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18" />
  </svg>
);
export const UsersIcon = ({ className = "h-7 w-7" }: P) => (
  <svg viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="8" r="3.6" fill="#fff" />
    <rect x="5.5" y="13" width="13" height="7" rx="3.5" fill="#fff" />
    <circle cx="5" cy="10" r="2.4" fill="#fff" fillOpacity=".55" />
    <circle cx="19" cy="10" r="2.4" fill="#fff" fillOpacity=".55" />
  </svg>
);
export const SearchIcon = ({ className = "h-7 w-7" }: P) => (
  <svg viewBox="0 0 24 24" className={className}>
    <circle cx="11" cy="11" r="7" fill="#fff" />
    <path d="m16.5 16.5 4 4" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
  </svg>
);
export const CompassIcon = ({ className = "h-7 w-7" }: P) => (
  <svg viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="9.5" fill="#fff" fillOpacity=".35" />
    <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" fill="#fff" />
  </svg>
);
export const AppleIcon = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="#fff">
    <path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.7-1-2.7-4.1ZM13.9 5c.7-.9 1.2-2 1-3.2-1 0-2.3.7-3 1.6-.7.8-1.3 2-1.1 3.1 1.1.1 2.3-.6 3.1-1.5Z" />
  </svg>
);
export const PlayIcon = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M4 2.5v19L20.5 12 4 2.5Z" fill="#fff" />
    <path d="M4 2.5 13.5 12 4 21.5" fill="none" stroke="#0328ee" strokeWidth="1.2" />
  </svg>
);
export const ArrowIcon = ({ className = "h-4 w-4", dir = "right" }: P & { dir?: "left" | "right" }) => (
  <svg viewBox="0 0 24 24" className={`${className} ${base} ${dir === "left" ? "rotate-180" : ""}`} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 5 7 7-7 7" />
  </svg>
);
export const InstagramIcon = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-ink`} strokeWidth="2">
    <rect x="4" y="4" width="16" height="16" rx="5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="17" cy="7" r="0.6" className="fill-ink" />
  </svg>
);
export const FacebookIcon = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-ink`}>
    <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-3v-7h2.4l.4-2.8H14V9.5c0-.8.3-1.4 1.4-1.4h1.5V5.6c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7v2H9v2.8h2.2v7H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z" />
  </svg>
);
export const LinkedinIcon = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-ink`}>
    <path d="M5 9h3v11H5V9Zm1.5-5A1.8 1.8 0 1 1 6.5 7.6 1.8 1.8 0 0 1 6.5 4ZM10 9h2.9v1.5c.4-.8 1.4-1.8 3.2-1.8 3.2 0 3.9 2 3.9 4.8V20h-3v-5.8c0-1.4 0-3-1.9-3s-2.1 1.5-2.1 2.9V20H10V9Z" />
  </svg>
);
