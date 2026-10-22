import Link from "next/link";

/** House Of Crypto shield mark (public/logo.png, 388×488). Size it by height; width follows. */
export function LogoMark({ className = "h-9" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo.png" alt="" width={388} height={488} className={`w-auto shrink-0 ${className}`} />
  );
}

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="House Of Crypto home">
      <LogoMark className="h-9" />
      <span className="text-[17px] font-medium tracking-tight">House Of Crypto</span>
    </Link>
  );
}
