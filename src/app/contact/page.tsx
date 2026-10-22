import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import ContactLinks from "@/components/ContactLinks";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact us" };

const faqs = [
  {
    q: "I'm new to crypto. Where should I start?",
    a: "Start with our Blog: \"The Basics about Cryptocurrency\" and \"Cryptocurrency Explained With Pros and Cons\" are good first reads. Then follow the Tokens page to get a feel for how prices move.",
  },
  {
    q: "Where do your prices come from?",
    a: "Live prices, market caps and volumes come from CoinGecko's public market data and refresh every minute. They're for information only.",
  },
  {
    q: "Will you ever ask for my recovery phrase?",
    a: "Never. No genuine crypto business needs your wallet's recovery phrase or private keys. If anyone asks for them, including someone claiming to be from House Of Crypto, it's a scam.",
  },
  {
    q: "Which cryptocurrencies do you cover?",
    a: "We focus on established assets such as Bitcoin, Ethereum, USDT, Solana and BNB. See the Tokens page for live prices of everything we cover.",
  },
  {
    q: "Is crypto trading risky?",
    a: "Yes. Crypto prices can rise or fall sharply in a short time. Only trade with money you can afford to lose, and read our Trading guide before you start.",
  },
];

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-[150px] lg:pb-28 lg:pt-[190px]">
        <div className="glow pointer-events-none absolute inset-0 opacity-60" />
        <Container className="relative">
          <h1 className="text-[48px] font-medium tracking-tight lg:text-[66px]">Get in touch</h1>
          <div className="mt-10 grid gap-14 lg:grid-cols-[1.55fr_1fr] lg:gap-16">
            <ContactForm />
            <div>
              <h2 className="text-[22px] font-medium">Want to reach us directly?</h2>
              <p className="mt-4 leading-8 text-white/90">
                Call or email us with any crypto question. A real person will get back to you.
              </p>
              <ContactLinks className="mt-6" />
              <div className="mt-8 space-y-2 border-t border-white/15 pt-6 text-white/85">
                <p>
                  <span className="font-medium text-white">Based in:</span> {site.country}
                </p>
                <p>
                  <span className="font-medium text-white">Support hours:</span> {site.supportHours}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <h2 className="mb-12 text-center text-[44px] font-medium lg:text-[66px]">FAQ</h2>
          <FAQ items={faqs} />
        </Container>
      </section>
    </>
  );
}
