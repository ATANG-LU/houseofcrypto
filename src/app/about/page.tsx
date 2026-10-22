import type { Metadata } from "next";
import CoinGlyph from "@/components/CoinGlyph";
import Globe from "@/components/Globe";
import Partners from "@/components/Partners";
import Reviews from "@/components/Reviews";
import { CompassIcon, GlobeIcon, IconTile, SearchIcon, UsersIcon } from "@/components/Icons";
import { Container, PageHero, SplitHeading } from "@/components/ui";
import { COINS } from "@/lib/coins";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

const values = [
  { icon: <UsersIcon />, title: "Built for everyone", text: "Crypto shouldn't need a finance degree. We design every screen so a first-time buyer feels at home." },
  { icon: <GlobeIcon />, title: "Worldwide", text: "Built for a global community. Wherever you are, you get the same clear information and friendly support." },
  { icon: <SearchIcon />, title: "Transparent", text: "Clear fees, clear risks and clear answers. If something costs you money, you'll see it before you confirm." },
  { icon: <CompassIcon />, title: "Community driven", text: "We listen to our users and build what they ask for, from new assets to new ways to learn." },
];

// TODO: replace with your real milestones
const timeline = [
  { year: "2024", title: "The idea", text: "Frustrated by confusing, expensive ways to buy crypto, our founders set out to build something simpler." },
  { year: "2025", title: "First build", text: "The first version of the platform was built and tested with a small group of early users." },
  { year: "2026", title: "Launch", text: `${site.name} opens to the public with trading support, live prices and a learning hub.` },
  { year: "Next", title: "Growing", text: "More assets, deeper market insights and support in more languages are on the roadmap." },
];

// TODO: replace with your real team
const team = [
  { name: "Your Name", role: "CEO & Co-founder" },
  { name: "Team Member", role: "Head of Product" },
  { name: "Team Member", role: "Operations" },
];

export default function About() {
  return (
    <>
      <PageHero
        title={`About ${site.name}`}
        text={`${site.name} exists to make crypto simple, safe and accessible, so anyone can buy, hold and grow digital assets with confidence.`}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <SplitHeading title={`What drives ${site.name}?`} text="Four principles shape every product decision we make, from the fees we charge to the way we write our guides." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="flex gap-6 rounded-[36px] bg-navy p-8 lg:p-10">
                <IconTile>{v.icon}</IconTile>
                <div>
                  <h3 className="text-[18px] font-medium uppercase tracking-[0.06em]">{v.title}</h3>
                  <p className="mt-3 leading-[28px] text-white/90">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-16 lg:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-20">
              <div>
                <h2 className="text-[34px] font-medium lg:text-[44px]">Our mission</h2>
                <p className="mt-6 leading-8 text-white/90">
                  We believe access to modern financial tools shouldn&apos;t depend on where you live or how much you
                  start with. Our mission is to give everyone a safe, simple and affordable way to take part in the
                  digital economy.
                </p>
                <p className="mt-6 leading-8 text-white/90">
                  That means clear pricing, strong security, honest education about risk, and support from people who
                  actually understand crypto.
                </p>
              </div>
              <div>
                <h2 className="text-[34px] font-medium lg:text-[44px]">Our story</h2>
                <p className="mt-6 leading-8 text-white/90">
                  {site.name} started with a simple frustration: buying crypto was confusing, expensive and full of
                  jargon. We set out to build the platform we wished we had, one that treats first-time buyers and
                  experienced traders with the same care.
                </p>
                <p className="mt-6 leading-8 text-white/90">
                  Today we&apos;re a small, focused team building for a global community, and we&apos;re
                  just getting started.
                </p>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <Globe className="absolute -right-[18vw] top-10 w-[720px] max-w-none" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1fr]">
            <div>
              <h2 className="text-[34px] font-medium lg:text-[44px]">Timeline</h2>
              <p className="mt-5 max-w-[380px] leading-8 text-white/90">
                From a frustrated idea to a growing platform. Here are the milestones that brought us here.
              </p>
            </div>
            <ol>
              {timeline.map((t) => (
                <li key={t.year} className="flex gap-10 border-b border-white/80 py-9 first:pt-0">
                  <span className="mt-1.5 h-6 w-6 shrink-0 rounded-full bg-white" />
                  <div>
                    <p className="text-[28px] font-medium">{t.year}</p>
                    <p className="mt-2 text-[17px] font-medium uppercase tracking-[0.04em]">{t.title}</p>
                    <p className="mt-3 leading-8 text-white/90">{t.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <SplitHeading title="Our Team" text="A small team of builders, designers and crypto enthusiasts working to make digital assets work for everyone." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <div key={i} className="rounded-[36px] bg-navy p-6">
                <div className="flex aspect-[16/15] items-center justify-center rounded-[28px] bg-gradient-to-br from-brand to-[#0a1660]">
                  <span className="text-[64px] font-medium text-white/90">
                    {m.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                </div>
                <p className="mt-7 text-[17px] font-medium uppercase tracking-[0.04em]">{m.name}</p>
                <p className="mt-1 uppercase text-white/85">{m.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Reviews title="Reviews" />

      <Partners />

      <section className="py-20 lg:py-32">
        <Container className="text-center">
          <h2 className="text-[34px] font-medium lg:text-[44px]">Assets we cover</h2>
          <p className="mx-auto mt-5 max-w-[460px] leading-8 text-white/90">
            Start with the world&apos;s most established cryptocurrencies, with more added as we grow.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {COINS.slice(0, 6).map((c) => (
              <div key={c.id} className="flex items-center gap-3">
                <CoinGlyph coin={c} size={36} />
                <span className="text-[26px] font-semibold tracking-tight">{c.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
