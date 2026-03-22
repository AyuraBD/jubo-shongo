import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ──────────────────────────────────────────────────────
interface Breadcrumb {
  label: string;
  href?: string;        // omit for the current (last) crumb
}

interface PageHeroProps {
  title: React.ReactNode;    // accepts JSX so <em> works inline
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  className?: string;
}

// ─── PageHero ────────────────────────────────────────────────────
export function PageHeroBanner({
  title,
  subtitle,
  breadcrumbs,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        // layout
        "relative isolate overflow-hidden",
        "pt-36 pb-20 text-center",
        // background — same deep emerald as hero & impact sections
        "hero-bg hero-glow pattern-overlay",
        className,
      )}
    >
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-1.5 text-xs text-white/40 mb-6"
          >
            {/* Home icon link */}
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-brand-400 transition-colors"
            >
              <Home className="size-3" />
              Home
            </Link>

            {/* Dynamic crumbs */}
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="size-3 opacity-40" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-brand-400 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  // Current page — no link, highlighted
                  <span className="text-brand-400 font-medium">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Heading */}
        <h1
          className={cn(
            "font-display font-bold text-white leading-tight text-balance",
            "text-4xl sm:text-5xl lg:text-6xl",
          )}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-5 text-lg sm:text-xl text-white/60 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

      </div>
    </section>
  );
}