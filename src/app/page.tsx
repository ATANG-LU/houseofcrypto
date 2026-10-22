import Button from "@/components/Button";
import { Laptop, MarketPanel } from "@/components/Devices";
import LiveStrip from "@/components/LiveStrip";
import Highlights from "@/components/Highlights";
import PostCard from "@/components/PostCard";
import Reviews from "@/components/Reviews";
import Partners from "@/components/Partners";
import { Container, SplitHeading } from "@/components/ui";
import {
  BoltIcon,
  CashIcon,
  ChartIcon,
  ChatIcon,
  IconTile,
  LockIcon,
  ShieldIcon,
  SwapIcon,
  SyncIcon,
  TrendDownIcon,
  UptimeIcon,
  UserIcon,
  WalletIcon,
} from "@/components/Icons";
import { getMarkets } from "@/lib/coins";
import { POSTS } from "@/lib/posts";
import { site } from "@/lib/site";

export const revalidate = 60;

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[36px] bg-navy p-6 lg:px-6 lg:py-12">
      <IconTile>{icon}</IconTile>
      <h3 className="mt-7 text-[18px] font-medium uppercase tracking-[0.06em]">
        {title}
      </h3>
      <p className="mt-3 leading-[26px] text-white/90">{text}</p>
    </div>
  );
}

function CheckList({
  items,
}: {
  items: { icon: React.ReactNode; text: string }[];
}) {
  return (
    <ul className="mt-9 space-y-4">
      {items.map((it) => (
        <li key={it.text} className="flex items-center gap-4 text-[18px]">
          <IconTile size="sm">{it.icon}</IconTile>
          {it.text}
        </li>
      ))}
    </ul>
  );
}

export default async function Home() {
  const markets = await getMarkets();
  const latest = POSTS.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-16 pt-[150px] lg:pb-24 lg:pt-[210px]">
        <div className="glow pointer-events-none absolute inset-0" />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
            <div className="relative z-10">
              <div className="relative z-10">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-white/75">
                  Crypto Guidance & Wallet Support
                </p>

                <h1 className="text-[44px] font-medium leading-[1.15] tracking-tight lg:text-[64px]">
                  Your Home for Crypto & Trust Wallet Assistance
                </h1>

                <p className="mt-6 max-w-[540px] text-[17px] leading-8 text-white/90 lg:text-[18px]">
                  Explore live crypto prices, market insights, and
                  easy-to-follow guides. Having trouble with a flagged Trust
                  Wallet or wallet access restrictions? Find security-focused
                  guidance and learn about the appropriate support options.
                </p>

                <div className="mt-10 flex flex-wrap gap-5">
                  <Button href="/contact">Get Wallet Assistance</Button>

                  <Button href="/tokens" variant="secondary">
                    Explore Crypto Prices
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative lg:-mr-[22vw] lg:translate-x-6">
              <Laptop className="w-full lg:w-[780px]" />
            </div>
          </div>

          <div className="mt-24 lg:mt-36">
            <p className="mb-10 text-center text-[18px] text-white/90">
              Live market prices
            </p>
            <LiveStrip initial={markets} />
          </div>
        </Container>

        {/* TRUST WALLET ACCOUNT ASSISTANCE */}
        <section className="relative py-16 lg:py-24">
          <Container>
            <div className="rounded-[36px] bg-navy p-8 lg:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                Wallet Support & Security
              </p>

              <h2 className="mt-4 max-w-3xl text-[34px] font-medium leading-tight lg:text-[48px]">
                Having Trouble Accessing Your Trust Wallet?
              </h2>

              <p className="mt-6 max-w-3xl text-[17px] leading-8 text-white/90">
                If your Trust Wallet is flagged, you are experiencing access
                difficulties, or you have questions about a wallet restriction,
                find clear guidance on security, troubleshooting, and the
                appropriate support channels.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact">Get Wallet Assistance</Button>

                <Button
                  href="https://support.trustwallet.com/"
                  variant="secondary"
                >
                  Official Trust Wallet Support
                </Button>
              </div>

              <p className="mt-6 max-w-3xl text-sm leading-6 text-white/70">
                Never share your recovery phrase or private keys with anyone.
                Wallet access cannot always be restored, and no third party
                should promise guaranteed unlocking.
              </p>
            </div>
          </Container>
        </section>
      </section>

      {/* BUILD YOUR PORTFOLIO */}
      <section className="relative py-20 lg:py-28">
        <div className="glow-center pointer-events-none absolute inset-0 opacity-50" />
        <Container className="relative">
          <div className="text-center">
            <h2 className="text-[34px] font-medium lg:text-[44px]">
              Build your crypto portfolio
            </h2>
            <p className="mx-auto mt-4 max-w-[480px] text-[17px] leading-8 text-white/90">
              Everything you need to understand and follow crypto, in one place.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.47fr_1fr]">
            <div className="grid gap-6">
              <Feature
                icon={<SwapIcon />}
                title="Crypto basics"
                text="Clear, jargon-free explanations of how Bitcoin, Ethereum, stablecoins and blockchains work."
              />
              <Feature
                icon={<WalletIcon />}
                title="Wallet guidance"
                text="Learn how to store your crypto safely, and how to keep your recovery phrase private."
              />
            </div>
            <div className="relative flex flex-col overflow-hidden rounded-[36px] bg-brand px-8 pt-12">
              <h3 className="text-[18px] font-medium uppercase tracking-[0.06em]">
                Follow the markets
              </h3>
              <p className="mt-4 max-w-[400px] leading-[26px] text-white/90">
                Follow live prices, spot the trends and understand what moves
                the market, explained in plain language.
              </p>
              <div className="mt-10 flex flex-1 items-end justify-center">
                <div className="h-[420px] w-full max-w-[340px] overflow-hidden">
                  <MarketPanel className="w-full" />
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <Feature
                icon={<ChartIcon />}
                title="Trading charts"
                text="Clear charts and simple explanations, so you understand what the market is doing."
              />
              <Feature
                icon={<SyncIcon />}
                title="Real-time prices"
                text="Prices for the top assets updated every minute, straight from live market data."
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button href="/trading">Learn about trading</Button>
          </div>
        </Container>
      </section>

      {/* TRADE SMARTER */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative mx-auto h-[440px] w-full max-w-[500px] lg:h-[560px]">
              <MarketPanel
                className="absolute left-0 top-0 w-[58%]"
                tilt={-5}
              />
              <MarketPanel
                className="absolute right-0 top-[12%] w-[58%]"
                tilt={4}
              />
            </div>
            <div>
              <h2 className="text-[34px] font-medium leading-tight lg:text-[44px]">
                Crypto made simple
              </h2>
              <p className="mt-6 max-w-[470px] text-[17px] leading-8 text-white/90">
                Whether you&apos;re brand new to crypto or following it every
                day, we keep things clear, honest and easy to understand.
              </p>
              <CheckList
                items={[
                  { icon: <TrendDownIcon />, text: "No hype, just facts" },
                  { icon: <BoltIcon />, text: "Fresh market updates" },
                  { icon: <LockIcon />, text: "Security tips that work" },
                ]}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* TRACK */}
      <section className="relative overflow-hidden pb-24 pt-10 lg:pb-36">
        <div className="glow pointer-events-none absolute inset-0 opacity-70" />
        <Container className="relative">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-[34px] font-medium leading-tight lg:text-[44px]">
                Track every move in real time
              </h2>
              <p className="mt-6 max-w-[470px] text-[17px] leading-8 text-white/90">
                Live prices, market caps and trading volumes for the assets that
                matter, on any screen, right in your browser.
              </p>
              <CheckList
                items={[
                  { icon: <ShieldIcon />, text: "Honest, no-hype information" },
                  {
                    icon: <UptimeIcon />,
                    text: "Prices refreshed every minute",
                  },
                  { icon: <ChatIcon />, text: "Dedicated support team" },
                ]}
              />
            </div>
            <div className="lg:-mr-[22vw]">
              <Laptop className="w-full lg:w-[780px]" />
            </div>
          </div>
        </Container>
      </section>

      {/* BLUE CTA BAND */}
      <section className="relative mt-24 bg-brand lg:mt-10">
        <Container className="relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <h2 className="text-[34px] font-medium leading-tight lg:text-[44px]">
              Explore endless possibilities with {site.name}
            </h2>
            <p className="mt-6 max-w-[470px] text-[17px] leading-8 text-white/90">
              Join a growing community of people taking control of their
              financial future, one step at a time.
            </p>
            <div className="mt-10">
              <Button href="/blog" variant="white">
                Read our guides
              </Button>
            </div>
          </div>
          <div className="relative hidden h-full lg:block">
            <div className="absolute -top-[120px] bottom-[-96px] left-0 right-0 overflow-hidden">
              <MarketPanel
                className="absolute left-[4%] top-0 w-[52%]"
                tilt={-5}
              />
              <MarketPanel
                className="absolute left-[46%] top-[8%] w-[52%]"
                tilt={7}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* WHY US */}
      <section className="relative overflow-hidden py-24 lg:py-36">
        <div className="glow-center pointer-events-none absolute inset-0 opacity-50" />
        <Container className="relative">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-[34px] font-medium lg:text-[44px]">
              Why choose {site.name}?
            </h2>
            <Button href="/contact">Contact us</Button>
          </div>
          <Highlights
            items={[
              {
                quote:
                  "No hype and no hidden agendas. We explain crypto honestly, including the risks, so you can make your own decisions.",
                title: "Honest information",
                sub: "Facts over hype",
              },
              {
                quote:
                  "We will never ask for your wallet's recovery phrase or private keys, and nobody else should either.",
                title: "Security first",
                sub: "Your keys stay yours",
              },
              {
                quote:
                  "Bitcoin, Ethereum, stablecoins and more. Live prices, news and guides for the assets you care about, in one place.",
                title: "All in one place",
                sub: "Prices, news & guides",
              },
              {
                quote:
                  "Real people ready to answer your crypto questions by phone or email, whether you're a beginner or a pro.",
                title: "Human support",
                sub: "Here when you need us",
              },
              {
                quote:
                  "Guides, explainers and market updates written in plain language, so you can learn as you grow.",
                title: "Learn as you go",
                sub: "Free crypto education",
              },
            ]}
          />
        </Container>
      </section>

      {/* REVIEWS */}
      <Reviews />

      {/* GET STARTED */}
      <section className="pb-24 lg:pb-36">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1fr]">
            <div>
              <h2 className="text-[34px] font-medium lg:text-[44px]">
                Get started today
              </h2>
              <p className="mt-6 max-w-[470px] text-[17px] leading-8 text-white/90">
                New to crypto? Here&apos;s the easiest way to begin.
              </p>
              <CheckList
                items={[
                  {
                    icon: <UserIcon />,
                    text: "Learn the basics in our guides",
                  },
                  { icon: <CashIcon />, text: "Follow live market prices" },
                  { icon: <ChatIcon />, text: "Ask our team anything" },
                ]}
              />
              <div className="mt-10">
                <Button href="/contact">Contact us</Button>
              </div>
            </div>
            <div className="flex items-center justify-center overflow-hidden rounded-[36px] bg-navy px-6 pt-10 lg:h-[400px] lg:px-10">
              <Laptop className="w-full max-w-[560px]" />
            </div>
          </div>
        </Container>
      </section>

      {/* PARTNERS */}
      <Partners />

      {/* NEWS */}
      <section className="pb-24 lg:pb-32">
        <Container>
          <SplitHeading
            title="Browse our latest news"
            text="Guides, explainers and market insights to help you buy, hold and trade crypto with confidence."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latest.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/blog" variant="secondary">
              View all articles
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
