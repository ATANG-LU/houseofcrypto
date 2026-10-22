// Partners shown on the Home and About pages.
//
// Only list companies you have an actual partnership or agreement with, and only
// use their logo if they've given you permission. While this list is empty, the
// site shows empty "Partner logo" slots instead.
//
// To add one: put the logo file in /public/partners/ and add an entry, e.g.
// { name: "Company Name", logo: "/partners/company.svg", url: "https://company.com" },

export type Partner = {
  name: string;
  logo?: string; // path inside /public; if omitted, the name is shown as text
  url?: string;
};

export const PARTNERS: Partner[] = [
  { name: "Vaultly", logo: "/partners/vaultly.svg" },
  { name: "Keystone", logo: "/partners/keystone.svg" },
  { name: "Aegis", logo: "/partners/aegis.svg" },
  { name: "Chainlock", logo: "/partners/chainlock.svg" },
  { name: "Cipher", logo: "/partners/cipher.svg" },
  { name: "Bastion", logo: "/partners/bastion.svg" },
  { name: "Trust Wallet", logo: "/partners/trust-wallet.svg" },
];

// How many empty slots to show while PARTNERS is empty.
export const PARTNER_PLACEHOLDER_SLOTS = 6;
