import { REVIEWS, REVIEW_LINK, type Review } from "@/lib/reviews";
import { site } from "@/lib/site";
import Button from "./Button";

function Stars({ n, muted = false }: { n: number; muted?: boolean }) {
  return (
    <div className="flex gap-1" aria-label={`${n} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className={`h-5 w-5 ${i <= n ? (muted ? "fill-white/30" : "fill-[#ffc94a]") : "fill-white/15"}`}>
          <path d="m12 2.5 2.9 6 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.5l1.3-6.6L2.5 9.3l6.6-.8L12 2.5Z" />
        </svg>
      ))}
    </div>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-[36px] bg-navy p-8">
      <Stars n={r.rating} />
      <blockquote className="mt-5 flex-1 text-[17px] leading-8">“{r.text}”</blockquote>
      <figcaption className="mt-7 flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-[15px] font-semibold">
          {initials(r.name)}
        </span>
        <div className="text-[15px] uppercase leading-6 tracking-[0.06em]">
          <p className="font-medium">{r.name}</p>
          {r.location && <p className="text-white/70">{r.location}</p>}
        </div>
      </figcaption>
    </figure>
  );
}

/** Clearly-labelled example card shown until real reviews are added in src/lib/reviews.ts */
function ExampleCard() {
  return (
    <div className="flex h-full flex-col rounded-[36px] border-2 border-dashed border-white/20 p-8">
      <div className="flex items-center justify-between">
        <Stars n={5} muted />
        <span className="rounded-full bg-white/10 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.08em] text-white/70">
          Example
        </span>
      </div>
      <p className="mt-5 flex-1 text-[17px] leading-8 text-white/50">
        A real customer review will appear here once it&apos;s added.
      </p>
      <div className="mt-7 flex items-center gap-4">
        <span className="h-12 w-12 rounded-full bg-white/10" />
        <div className="text-[15px] uppercase leading-6 tracking-[0.06em] text-white/50">
          <p className="font-medium">Customer name</p>
          <p>Location</p>
        </div>
      </div>
    </div>
  );
}

export default function Reviews({ title = "What people say about us" }: { title?: string }) {
  const hasReviews = REVIEWS.length > 0;
  const avg = hasReviews ? REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length : 0;
  const reviewHref = REVIEW_LINK || `mailto:${site.email}?subject=${encodeURIComponent("My review of House Of Crypto")}`;

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-[34px] font-medium lg:text-[44px]">{title}</h2>
            {hasReviews ? (
              <div className="mt-4 flex items-center gap-3 text-white/90">
                <Stars n={Math.round(avg)} />
                <span>
                  {avg.toFixed(1)} out of 5 from {REVIEWS.length} review{REVIEWS.length === 1 ? "" : "s"}
                </span>
              </div>
            ) : (
              <p className="mt-4 max-w-[520px] leading-8 text-white/90">
                Honest feedback from the people we help. Have we helped you? We&apos;d love to hear about it.
              </p>
            )}
          </div>
          <Button href={reviewHref} variant="secondary">
            Leave a review
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hasReviews
            ? REVIEWS.map((r, i) => <ReviewCard key={i} r={r} />)
            : Array.from({ length: 3 }, (_, i) => <ExampleCard key={i} />)}
        </div>
      </div>
    </section>
  );
}
