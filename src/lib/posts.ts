// Blog content. Add a new object to POSTS to publish a new article.
// `body` blocks: { html } for paragraphs/headings, { quote } for a pull quote, { figure: true } for an image break.

export type Category = "Basics" | "Security" | "Guides";

export type Block = { html: string } | { quote: string } | { figure: true };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string; // ISO
  author: string;
  cover: number; // 0-5, picks a cover artwork style
  featured?: boolean;
  body: Block[];
};

export const CATEGORIES: Category[] = ["Basics", "Security", "Guides"];

export const POSTS: Post[] = [
  {
    slug: "crypto-pros-and-cons-for-investment",
    title: "Cryptocurrency Explained With Pros and Cons for Investment",
    excerpt:
      "What crypto actually is, why people buy it, and the real risks to weigh before you put any money in.",
    category: "Basics",
    date: "2026-10-20",
    author: "House Of Crypto Team",
    cover: 0,
    featured: true,
    body: [
      { html: "<h2>What is a cryptocurrency?</h2><p>A cryptocurrency is digital money that runs on a <strong>blockchain</strong>: a shared public ledger kept by thousands of computers instead of a single bank. Nobody can quietly edit that ledger, which is why people can send value to each other directly, across borders, at any hour.</p><p>Bitcoin was the first, launched in 2009. Today there are thousands of coins and tokens, from Ethereum, which runs programs called smart contracts, to stablecoins like USDT that are designed to stay worth one US dollar.</p>" },
      { html: "<h2>The case for crypto</h2><ul><li><strong>Open access.</strong> Anyone with a phone can hold and send crypto, no bank account required.</li><li><strong>Fast global transfers.</strong> Many networks settle in seconds to minutes, often for a few cents.</li><li><strong>Fixed or predictable supply.</strong> Bitcoin's supply is capped at 21 million coins, which many holders see as a hedge against currency devaluation.</li><li><strong>A growing ecosystem.</strong> Payments, savings products and apps are being built on blockchains every day.</li></ul>" },
      { figure: true },
      { html: "<h2>The risks you should take seriously</h2><ul><li><strong>Volatility.</strong> Prices can move 10% or more in a single day, in either direction.</li><li><strong>Scams.</strong> Fake investment schemes, impersonators and phishing links are common. If a return sounds guaranteed, it is not.</li><li><strong>Self-custody mistakes.</strong> If you hold your own keys and lose your recovery phrase, nobody can restore your funds.</li><li><strong>Changing rules.</strong> Regulation is still evolving in many countries around the world.</li></ul>" },
      { quote: "Only invest what you could afford to lose completely, and never let anyone pressure you into a trade." },
      { html: "<h2>A sensible way to start</h2><p>Start small, stick to well-established assets, and learn how sending, receiving and storing crypto works before you increase your position. Many people buy a fixed amount on a schedule (dollar-cost averaging) rather than trying to time the market.</p>" },
    ],
  },
  {
    slug: "the-basics-about-cryptocurrency",
    title: "The Basics about Cryptocurrency",
    excerpt: "Wallets, keys, blockchains and exchanges explained in plain language, with no jargon left unexplained.",
    category: "Basics",
    date: "2026-10-14",
    author: "House Of Crypto Team",
    cover: 1,
    body: [
      { html: "<h2>Learn what you need to know before you invest in a virtual currency</h2><p>Crypto has its own vocabulary, but the core ideas are simple. Once you understand four building blocks (<strong>blockchains, wallets, keys and exchanges</strong>), the rest falls into place.</p><p>A <strong>blockchain</strong> is a public record of every transaction on a network. A <strong>wallet</strong> is the app or device that lets you view and move your coins. Your wallet is controlled by a <strong>private key</strong>, which is effectively the password to your funds.</p>" },
      { html: "<h3>How do I know how secure my wallet is?</h3><p>A secure wallet protects your private key and gives you a recovery phrase, usually 12 or 24 words, that you write down offline. Turn on two-factor authentication, use a strong unique password, and never share your recovery phrase with anyone, including support staff.</p>" },
      { figure: true },
      { html: "<h2>What does an exchange do?</h2><p>An exchange connects buyers and sellers. You deposit money, buy the asset you want, and either keep it on the platform or withdraw it to your own wallet. Good exchanges are transparent about fees, verify their users, and keep the majority of customer funds in offline cold storage.</p>" },
      { quote: "Not your keys, not your coins: if you plan to hold for years, learn how to move crypto to a wallet you control." },
      { html: "<h2>Your first steps</h2><p>Create an account, verify your identity, make a small deposit, and buy a small amount of a major asset like Bitcoin or Ethereum. Then practise sending a small amount to yourself. That one exercise teaches you more than any article can.</p>" },
    ],
  },
  {
    slug: "how-to-spot-crypto-scams",
    title: "How to Spot Crypto Scams Before They Cost You",
    excerpt: "The most common tricks scammers use in 2026, and the simple habits that keep your money safe.",
    category: "Security",
    date: "2026-10-08",
    author: "House Of Crypto Team",
    cover: 2,
    body: [
      { html: "<h2>Red flags to watch for</h2><ul><li><strong>Guaranteed returns.</strong> No legitimate investment can promise daily or weekly profits.</li><li><strong>Urgency.</strong> \"Only 2 hours left\" is a pressure tactic, not an opportunity.</li><li><strong>Requests for your recovery phrase.</strong> No real company will ever ask for it.</li><li><strong>Look-alike websites and apps.</strong> Always check the address bar before you sign in.</li></ul>" },
      { quote: "If someone you met online offers to grow your crypto for you, it is a scam." },
      { html: "<h2>Habits that protect you</h2><p>Bookmark the real website, turn on two-factor authentication, use withdrawal address whitelisting, and keep long-term holdings in a wallet that you control. When in doubt, contact support through the official app, never through a link someone sent you.</p>" },
    ],
  },
  {
    slug: "what-are-stablecoins",
    title: "What Are Stablecoins and Why Do People Use Them?",
    excerpt: "Dollar-pegged tokens like USDT and USDC explained: how they hold their value and where they help.",
    category: "Basics",
    date: "2026-09-30",
    author: "House Of Crypto Team",
    cover: 3,
    body: [
      { html: "<h2>Crypto without the price swings</h2><p>A stablecoin is a token designed to keep a steady value, usually one US dollar. The best-known are <strong>USDT (Tether)</strong> and <strong>USDC</strong>. Their issuers hold reserves such as cash and short-term government bonds to back each token.</p>" },
      { html: "<h2>Why they are useful</h2><ul><li>Parking value between trades without leaving crypto.</li><li>Sending dollars across borders quickly and cheaply.</li><li>Paying suppliers or freelancers who prefer a stable unit.</li></ul>" },
      { html: "<h2>The risks</h2><p>A stablecoin is only as good as its reserves and its issuer. Stick to large, widely audited stablecoins and understand that they are not bank deposits.</p>" },
    ],
  },
  {
    slug: "dollar-cost-averaging-guide",
    title: "Dollar-Cost Averaging: A Calm Way to Buy Crypto",
    excerpt: "Why buying a fixed amount on a schedule beats trying to time the market for most people.",
    category: "Guides",
    date: "2026-09-22",
    author: "House Of Crypto Team",
    cover: 4,
    body: [
      { html: "<h2>What is dollar-cost averaging?</h2><p>Dollar-cost averaging (DCA) means investing the same amount at regular intervals, for example every week or every month, regardless of the price. When prices are low you buy more; when they are high you buy less.</p>" },
      { html: "<h2>Why it works for beginners</h2><ul><li>It removes the stress of picking the \"right\" moment.</li><li>It smooths out the impact of volatility over time.</li><li>It turns investing into a habit rather than a gamble.</li></ul>" },
      { html: "<h2>Setting it up</h2><p>Pick an amount you are comfortable with, choose one or two established assets, and set a recurring buy. Review your plan every few months, not every few minutes.</p>" },
    ],
  },
  {
    slug: "securing-your-account",
    title: "Five Settings That Make Your Crypto Account Safer",
    excerpt: "Two-factor authentication, anti-phishing codes and the other switches worth turning on today.",
    category: "Security",
    date: "2026-09-15",
    author: "House Of Crypto Team",
    cover: 5,
    body: [
      { html: "<h2>Turn these on today</h2><ul><li><strong>Authenticator-app 2FA</strong> instead of SMS codes.</li><li><strong>An anti-phishing code</strong> so you can recognize genuine emails.</li><li><strong>Withdrawal address whitelisting</strong> so funds can only go to addresses you approved.</li><li><strong>Login alerts</strong> for every new device.</li><li><strong>A unique, long password</strong> stored in a password manager.</li></ul>" },
      { html: "<h2>And one habit</h2><p>Review your active sessions every month and sign out of any device you don't recognize.</p>" },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

export function fmtDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
