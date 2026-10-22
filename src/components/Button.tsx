import Link from "next/link";

type Variant = "primary" | "secondary" | "white";

const styles: Record<Variant, string> = {
  primary: "bg-brand hover:bg-brand-hover text-white",
  secondary: "bg-slate hover:bg-[#262d4f] text-white",
  white: "bg-white hover:bg-white/90 text-brand",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "lg",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  className?: string;
}) {
  const sizing = size === "lg" ? "h-[66px] px-8 text-[15px]" : "h-[54px] px-7 text-[14px]";
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full font-medium uppercase tracking-[0.12em] transition-colors ${sizing} ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
