import type { CoinInfo } from "@/lib/coins";

export default function CoinGlyph({ coin, size = 36, image }: { coin: CoinInfo; size?: number; image?: string }) {
  if (image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={image} alt="" width={size} height={size} className="shrink-0 rounded-full bg-white" />;
  }
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full font-bold text-white"
      style={{ width: size, height: size, background: coin.color, fontSize: size * 0.48 }}
      aria-hidden="true"
    >
      {coin.glyph}
    </span>
  );
}
