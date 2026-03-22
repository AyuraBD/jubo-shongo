import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  Moon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// ─── Data ───────────────────────────────────────────────────────
const SOCIAL_LINKS = [
  {
    label:       "Facebook",
    href:        "https://facebook.com/unityofstrength",
    icon:        Facebook,
    hoverBg:     "hover:bg-[#1877F2]",
    hoverShadow: "hover:shadow-[0_0_16px_rgba(24,119,242,0.5)]",
  },
  {
    label:       "Instagram",
    href:        "https://instagram.com/unityofstrength",
    icon:        Instagram,
    hoverBg:     "hover:bg-[#E1306C]",
    hoverShadow: "hover:shadow-[0_0_16px_rgba(225,48,108,0.5)]",
  },
  {
    label:       "YouTube",
    href:        "https://youtube.com/@unityofstrength",
    icon:        Youtube,
    hoverBg:     "hover:bg-[#FF0000]",
    hoverShadow: "hover:shadow-[0_0_16px_rgba(255,0,0,0.5)]",
  },
  {
    label:       "Telegram",
    href:        "https://t.me/unityofstrength",
    icon:        Send,
    hoverBg:     "hover:bg-[#26A5E4]",
    hoverShadow: "hover:shadow-[0_0_16px_rgba(38,165,228,0.5)]",
  },
];

const QUICK_LINKS = [
  { label: "Home",        href: "/"           },
  { label: "About Us",   href: "/about"       },
  { label: "What We Do", href: "/activities"  },
  { label: "Campaigns",  href: "/campaigns"   },
  { label: "Contact",    href: "/contact"     },
];

const WORK_LINKS = [
  { label: "Food Programs",  href: "/activities" },
  { label: "Housing Aid",    href: "/activities" },
  { label: "Mosque Projects",href: "/activities" },
  { label: "Education Fund", href: "/activities" },
  { label: "Sports Events",  href: "/activities" },
];

const CONTACT_INFO = [
  {
    icon: MapPin,
    text: "West Shaheb Nagor, Parshuram, Feni, Bangladesh",
  },
  {
    icon: Phone,
    text: "+880 1234567890",
  },
  {
    icon: Mail,
    text: "info@example.org",
  },
  {
    icon: Clock,
    text: "Sat–Thu, 9am – 6pm",
  },
];

const BOTTOM_LINKS = [
  { label: "Privacy Policy",      href: "#" },
  { label: "Terms of Use",        href: "#" },
  { label: "Transparency Report", href: "#" },
];

// ─── Sub-components ─────────────────────────────────────────────

function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">
      {children}
    </h4>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-stone-400 hover:text-brand-400 hover:translate-x-1 transition-all duration-200 inline-block"
    >
      {children}
    </Link>
  );
}

// ─── Footer ─────────────────────────────────────────────────────
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* ── Main grid ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

          {/* Brand column */}
          <div>
            {/* Logo mark + name */}
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              {/* <div className="size-9 rounded-xl bg-gradient-to-br from-brand-700 to-brand-500 flex items-center justify-center shadow-lg shadow-brand-900/30 group-hover:scale-105 transition-transform">
                <Moon className="size-4 text-white fill-white" />
              </div> */}
              <img
                src="https://i.ibb.co.com/mC1hDKhg/jubo-shongo-logo.png"
                className="max-h-24 dark:invert"
                alt="Jubo shongo logo"
              />
              <div className="leading-none">
                <p className="font-display font-bold text-white text-base">
                  West Shaheb Nagor
                </p>
                <p className="font-display font-bold text-white text-base">
                  Noapur
                </p>
                <p className="font-display font-bold text-white text-base">
                  Durgapur
                </p>
              </div>
            </Link>

            {/* Tagline */}
            <p className="text-sm leading-relaxed mb-6 max-w-[240px]">
              A youth community foundation dedicated to uplifting the poor,
              building faith, and creating a stronger, more compassionate
              society — one act at a time.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon, hoverBg, hoverShadow }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${label}`}
                  className={cn(
                    "group/social relative",
                    "size-9 rounded-xl",
                    "bg-white/8 border border-white/10",
                    "flex items-center justify-center",
                    "transition-all duration-300",
                    "hover:-translate-y-1 hover:border-transparent",
                    hoverBg,
                    hoverShadow,
                  )}
                >
                  <Icon className="size-4 text-stone-400 group-hover/social:text-white transition-colors duration-200" />

                  {/* Tooltip */}
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-stone-700 text-white text-[10px] font-medium whitespace-nowrap opacity-0 group-hover/social:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <ColTitle>Quick Links</ColTitle>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Work */}
          <div>
            <ColTitle>Our Work</ColTitle>
            <ul className="flex flex-col gap-2.5">
              {WORK_LINKS.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <ColTitle>Contact</ColTitle>
            <ul className="flex flex-col gap-4">
              {CONTACT_INFO.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="size-4 text-brand-400 mt-0.5 shrink-0" />
                  <span className="text-sm leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <Separator className="bg-white/10" />

        {/* ── Bottom bar ─────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-stone-500">

          {/* Copyright — year computed server-side, no JS needed */}
          <p>
            © {currentYear} Jubo Shongo Foundation. All rights reserved.
          </p>

          {/* Developer credit */}
          <p>
            Developed by{" "}
            <Link
              href="https://m-ayub.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:text-brand-300 transition-colors font-medium"
            >
              Ayub
            </Link>{" "}
            with{" "}
            <span className="text-brand-500" aria-label="love">
              💚
            </span>
          </p>

          {/* Legal links */}
          <div className="flex gap-6">
            {BOTTOM_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-brand-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}