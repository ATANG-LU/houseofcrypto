# House Of Crypto website

Next.js 15 + Tailwind CSS 4 site built from the FinanceFlow Figma template.

Pages: Home, About, Trading, Tokens (live prices), Blog, Blog post, Contact, 404, plus a mobile menu.

## Run it locally

You need Node.js 20 or newer. In a terminal (WSL works) opened in this folder:

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Edit content

| What | Where |
| --- | --- |
| Brand name, domain, phone, email, socials | `src/lib/site.ts` |
| Blog articles | `src/lib/posts.ts` |
| Coins on the Tokens page | `src/lib/coins.ts` |
| Trading guide | `src/app/trading/page.tsx` |
| Team, timeline, mission | `src/app/about/page.tsx` |
| FAQ | `src/app/contact/page.tsx` |
| Colours | `src/app/globals.css` (the `@theme` block) |

Search the code for `TODO` to find every placeholder to replace before launch.

## Live prices

The Tokens page and the price strip on Home use the free CoinGecko API. Prices are fetched on the server (cached 60s)
and refreshed in the browser every minute. No API key needed.

## Contact form and newsletter

Without setup, both open the visitor's email app addressed to `site.email`. To receive submissions
directly, create a free form at https://formspree.io, then copy `.env.example` to `.env.local` and set:

```
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
```

## Deploy to your domain

Easiest: push this folder to GitHub, import it at https://vercel.com, then add your domain under
**Project → Settings → Domains** and follow the DNS instructions.
