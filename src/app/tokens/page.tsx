import type { Metadata } from "next";
import TokensTable from "@/components/TokensTable";
import { Container, PageHero } from "@/components/ui";
import { getMarkets } from "@/lib/coins";

export const metadata: Metadata = { title: "Tokens" };
export const revalidate = 60;

export default async function Tokens() {
  const markets = await getMarkets();
  return (
    <>
      <PageHero
        title="Tokens"
        text="Live prices, market caps and trading volumes for the assets you can trade on House Of Crypto."
      />
      <section className="pb-24 pt-20 lg:pb-32 lg:pt-28">
        <Container>
          <TokensTable initial={markets} />
        </Container>
      </section>
    </>
  );
}
