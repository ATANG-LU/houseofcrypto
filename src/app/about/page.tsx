import type { Metadata } from "next";
import CoinGlyph from "@/components/CoinGlyph";
import Globe from "@/components/Globe";
import Partners from "@/components/Partners";
import Reviews from "@/components/Reviews";
import {
  CompassIcon,
  GlobeIcon,
  IconTile,
  SearchIcon,
  UsersIcon,
} from "@/components/Icons";
import { Container, PageHero, SplitHeading } from "@/components/ui";
import { COINS } from "@/lib/coins";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

const values = [
  {
    icon: <UsersIcon />,
    title: "Built for everyone",
    text: "Crypto shouldn't need a finance degree. We design every screen so a first-time buyer feels at home.",
  },
  {
    icon: <GlobeIcon />,
    title: "Worldwide",
    text: "Built for a global community. Wherever you are, you get the same clear information and friendly support.",
  },
  {
    icon: <SearchIcon />,
    title: "Transparent",
    text: "Clear fees, clear risks and clear answers. If something costs you money, you'll see it before you confirm.",
  },
  {
    icon: <CompassIcon />,
    title: "Community driven",
    text: "We listen to our users and build what they ask for, from new assets to new ways to learn.",
  },
];

// TODO: replace with your real milestones
const timeline = [
  {
    year: "2024",
    title: "The idea",
    text: "Frustrated by confusing, expensive ways to buy crypto, our founders set out to build something simpler.",
  },
  {
    year: "2025",
    title: "First build",
    text: "The first version of the platform was built and tested with a small group of early users.",
  },
  {
    year: "2026",
    title: "Launch",
    text: `${site.name} opens to the public with trading support, live prices and a learning hub.`,
  },
  {
    year: "Next",
    title: "Growing",
    text: "More assets, deeper market insights and support in more languages are on the roadmap.",
  },
];

// TODO: replace with your real team
const team = [
  { name: "Logan Josh", role: "CEO & Co-founder" },
  { name: "Jaden Wood", role: "Head of Product" },
  { name: "karl Thomas", role: "Operations" },
];

export default function About() {
  return (
    <>
      <PageHero
        title="Trust Wallet Account Recovery & Support"
        text={`Helping Trust Wallet users navigate flagged accounts, access restrictions, verification issues, and other wallet-related problems. Our mission is to make resolving account issues simpler, clearer, and more secure.`}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="rounded-[36px] bg-navy p-8 lg:p-14">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
              Account Access & Resolution
            </p>

            <h2 className="max-w-3xl text-[34px] font-medium lg:text-[48px]">
              Helping You Resolve Trust Wallet Account Issues
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90">
              When a wallet account is flagged or access becomes restricted,
              knowing what to do next can be difficult. We aim to help users
              understand their situation, identify appropriate next steps, and
              navigate legitimate support and security procedures with
              confidence.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/15 p-6">
                <h3 className="text-lg font-medium">
                  Flagged Account Guidance
                </h3>
                <p className="mt-3 leading-7 text-white/80">
                  Understand potential restrictions and the appropriate steps to
                  investigate them.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 p-6">
                <h3 className="text-lg font-medium">Access Issue Assistance</h3>
                <p className="mt-3 leading-7 text-white/80">
                  Get guidance for supported troubleshooting and legitimate
                  account access procedures.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 p-6">
                <h3 className="text-lg font-medium">Security & Protection</h3>
                <p className="mt-3 leading-7 text-white/80">
                  Learn how to protect your wallet and avoid fraudulent recovery
                  services.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-16 lg:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-20">
              <div>
                <h2 className="text-[34px] font-medium lg:text-[44px]">
                  Our mission
                </h2>
                <p className="mt-6 leading-8 text-white/90">
                  Our mission is to help Trust Wallet users navigate
                  flagged-account concerns, access difficulties, verification
                  questions, and other wallet-related challenges. We believe
                  users deserve clear information, transparent processes, and
                  security-first guidance when something goes wrong.
                </p>
                <p className="mt-6 leading-8 text-white/90">
                  We prioritize responsible troubleshooting, privacy, and
                  education so users can understand their options without
                  exposing their recovery phrases, private keys, or sensitive
                  wallet information.
                </p>
              </div>
              <div>
                <h2 className="text-[34px] font-medium lg:text-[44px]">
                  Our story
                </h2>
                <p className="mt-6 leading-8 text-white/90">
                  Wallet access problems can be stressful, especially when users
                  are unsure why a restriction occurred or where to turn for
                  help. We built this service around a simple principle: make
                  the next steps easier to understand while putting user
                  security first.
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
              <h2 className="text-[34px] font-medium lg:text-[44px]">
                Timeline
              </h2>
              <p className="mt-5 max-w-[380px] leading-8 text-white/90">
                From a frustrated idea to a growing platform. Here are the
                milestones that brought us here.
              </p>
            </div>
            <ol>
              {timeline.map((t) => (
                <li
                  key={t.year}
                  className="flex gap-10 border-b border-white/80 py-9 first:pt-0"
                >
                  <span className="mt-1.5 h-6 w-6 shrink-0 rounded-full bg-white" />
                  <div>
                    <p className="text-[28px] font-medium">{t.year}</p>
                    <p className="mt-2 text-[17px] font-medium uppercase tracking-[0.04em]">
                      {t.title}
                    </p>
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
          <SplitHeading
            title="Our Team"
            text="A small team of builders, designers and crypto enthusiasts working to make digital assets work for everyone."
          />
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
                <p className="mt-7 text-[17px] font-medium uppercase tracking-[0.04em]">
                  {m.name}
                </p>
                <p className="mt-1 uppercase text-white/85">{m.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Reviews title="Reviews" />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="rounded-[36px] bg-navy p-8 text-center lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70">
              Official Partnership
            </p>

            <h2 className="mt-4 text-[34px] font-medium lg:text-[44px]">
              Trust Wallet Account Support
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/90">
              Our mission is to help Trust Wallet users navigate flagged
              accounts, access restrictions, verification concerns, and other
              wallet-related issues through appropriate support and security
              procedures.
            </p>
          </div>
        </Container>
      </section>

      <Partners />

      <section className="py-20 lg:py-32">
        <Container className="text-center">
          <h2 className="text-[34px] font-medium lg:text-[44px]">
            Assets we cover
          </h2>
          <p className="mx-auto mt-5 max-w-[460px] leading-8 text-white/90">
            Start with the world&apos;s most established cryptocurrencies, with
            more added as we grow.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {COINS.slice(0, 6).map((c) => (
              <div key={c.id} className="flex items-center gap-3">
                <CoinGlyph coin={c} size={36} />
                <span className="text-[26px] font-semibold tracking-tight">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
