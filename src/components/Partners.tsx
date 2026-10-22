import { PARTNERS, PARTNER_PLACEHOLDER_SLOTS } from "@/lib/partners";

export default function Partners({ title = "Our partners", text }: { title?: string; text?: string }) {
  const hasPartners = PARTNERS.length > 0;

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-5 text-center">
        <h2 className="text-[34px] font-medium lg:text-[44px]">{title}</h2>
        <p className="mx-auto mt-5 max-w-[480px] leading-8 text-white/90">
          {text ?? "The companies we work with to bring you better crypto information and support."}
        </p>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {hasPartners
            ? PARTNERS.map((p) => {
                const inner = p.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.logo} alt={p.name} className="max-h-10 w-auto max-w-full object-contain" />
                ) : (
                  <span className="text-[20px] font-semibold tracking-tight">{p.name}</span>
                );
                const cls = "flex h-24 items-center justify-center rounded-[24px] bg-navy px-5 transition-colors";
                return p.url ? (
                  <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className={`${cls} hover:bg-navy-2`}>
                    {inner}
                  </a>
                ) : (
                  <div key={p.name} className={cls}>
                    {inner}
                  </div>
                );
              })
            : Array.from({ length: PARTNER_PLACEHOLDER_SLOTS }, (_, i) => (
                <div
                  key={i}
                  className="flex h-24 items-center justify-center rounded-[24px] border-2 border-dashed border-white/20 text-[13px] font-medium uppercase tracking-[0.1em] text-white/45"
                >
                  Partner logo
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
