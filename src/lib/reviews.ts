// Customer reviews shown on the Home and About pages.
//
// Add REAL reviews only, from people who agreed to be quoted. While this list
// is empty, the site shows clearly-labelled example cards instead.
//
// Example:
// { name: "Alex M.", location: "London", rating: 5, text: "Clear explanations, quick replies. Finally understand how wallets work." },

export type Review = {
  name: string;
  location?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
};

export const REVIEWS: Review[] = [
  {
    name: "Michael A.",
    rating: 5,
    text: "The support was professional, and the instructions were clear. I appreciated the patience and communication throughout the process.",
  },
  {
    name: "Sarah K.",
    rating: 5,
    text: "I was looking for guidance with my Trust Wallet issue. The service explained the available options clearly and answered my questions.",
  },
  {
    name: "Daniel T.",
    rating: 5,
    text: "Communication was straightforward, and I received helpful information about wallet recovery and security.",
  },
  {
    name: "Rebecca M.",
    rating: 5,
    text: "I appreciated the transparent approach and the time taken to explain the next steps. The experience felt organized and professional.",
  },
  {
    name: "Samuel B.",
    rating: 5,
    text: "The wallet security advice was useful, and I learned more about keeping my recovery phrase safe. Good communication throughout.",
  },
  {
    name: "Jessica L.",
    rating: 5,
    text: "A helpful and informative experience. My questions were addressed clearly, and I was given practical guidance on wallet access.",
  },
];

// Optional: link to where people can leave a review (Google Business Profile, Trustpilot, etc.)
export const REVIEW_LINK = ""; // e.g. "https://g.page/r/your-business/review"
