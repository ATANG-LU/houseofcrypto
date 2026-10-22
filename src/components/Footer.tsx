import Link from "next/link";
import Logo from "./Logo";
import ContactLinks from "./ContactLinks";
import Button from "./Button";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./Icons";
import { nav, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { href: site.socials.instagram, label: "Instagram", Icon: InstagramIcon },
    { href: site.socials.facebook, label: "Facebook", Icon: FacebookIcon },
    { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  ];

  return (
    <footer className="bg-navy">
      <div className="mx-auto max-w-[1180px] px-5 pt-14 lg:pt-16">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/75 transition-colors hover:bg-white"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-2">
          <div>
            <p className="text-[17px] font-medium uppercase">Menu</p>
            <div className="mt-5 h-px w-[270px] max-w-full bg-white/80" />
            <ul className="mt-7 grid w-[270px] max-w-full grid-flow-col grid-rows-3 gap-x-10 gap-y-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] uppercase tracking-[0.14em] text-white/85 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[36px] bg-navy-2 p-8 lg:ml-auto lg:w-full lg:max-w-[510px]">
            <p className="text-[17px] font-medium uppercase tracking-[0.04em]">Talk to our team</p>
            <p className="mt-3 leading-8 text-white/90">
              Questions about crypto? Call or email us and a real person will help.
            </p>
            <ContactLinks className="mt-5" />
            <div className="mt-6">
              <Button href="/contact" size="md">
                Contact us
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/20 py-8 lg:mt-24">
          <p className="max-w-3xl text-[13px] leading-6 text-white/55">
            Crypto assets are highly volatile and can lose value quickly. Only invest what you can afford to lose.
            Nothing on this website is financial advice.
          </p>
          <p className="mt-4 text-[14px] text-white/85">
            © {year} {site.name} · {site.country}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
