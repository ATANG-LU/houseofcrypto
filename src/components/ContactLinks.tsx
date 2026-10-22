import { MailIcon } from "./Icons";
import { site } from "@/lib/site";

export function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z"
        fill="#fff"
      />
    </svg>
  );
}

/** Phone + email links, used on the Contact page and in the footer. */
export default function ContactLinks({ className = "" }: { className?: string }) {
  const items = [
    { href: site.phoneHref, label: site.phone, icon: <PhoneIcon /> },
    { href: `mailto:${site.email}`, label: site.email, icon: <MailIcon className="h-4 w-4" /> },
  ];
  return (
    <ul className={`space-y-4 ${className}`}>
      {items.map((it) => (
        <li key={it.href}>
          <a href={it.href} className="flex items-center gap-3 font-medium hover:underline">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand">{it.icon}</span>
            {it.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
