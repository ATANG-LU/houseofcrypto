// Small layout helpers shared by pages.

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1180px] px-5 ${className}`}>{children}</div>;
}

export function PageHero({ title, text, align = "center" }: { title: string; text?: string; align?: "center" | "left" }) {
  return (
    <section className="relative overflow-hidden pt-[150px] lg:pt-[180px]">
      <div className="glow pointer-events-none absolute inset-0 opacity-60" />
      <Container className={`relative ${align === "center" ? "text-center" : ""}`}>
        <h1 className="text-[44px] font-medium leading-tight tracking-tight lg:text-[66px]">{title}</h1>
        {text && (
          <p className={`mt-5 max-w-[560px] text-[17px] leading-8 text-white/90 ${align === "center" ? "mx-auto" : ""}`}>{text}</p>
        )}
      </Container>
    </section>
  );
}

export function SplitHeading({ title, text }: { title: string; text: string }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2 lg:items-start">
      <h2 className="text-[34px] font-medium leading-tight lg:text-[44px]">{title}</h2>
      <p className="max-w-[460px] leading-8 text-white/90 lg:ml-auto">{text}</p>
    </div>
  );
}
