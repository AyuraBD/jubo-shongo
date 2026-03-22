import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// ─── Types ──────────────────────────────────────────────────────
interface Stat {
  value: string;
  label: string;
}

// ─── Static data ────────────────────────────────────────────────
const STATS: Stat[] = [
  { value: "1,240+", label: "Families Helped"   },
  { value: "৳82L",   label: "Funds Raised"      },
  { value: "6",      label: "Active Campaigns"  },
  { value: "340+",   label: "Volunteers"        },
];

// ─── HeroBadge ──────────────────────────────────────────────────
function HeroBadge() {
  return (
    <Badge
      variant="outline"
      className={cn(
        "gap-2 px-4 py-3 sm:py-4 md:py-4 lg:py-6 rounded-full",
        "bg-white/10 border-white/20 text-brand-400",
        "text-xs font-semibold tracking-wide backdrop-blur-sm",
        "animate-fade-in-down",
      )}
    >
      <span className="size-2 rounded-full bg-brand-400 animate-pulse-dot" />
      <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Unity of Strength</span>
    </Badge>
  );
}

// ─── StatItem ───────────────────────────────────────────────────
function StatItem({ stat, showDivider }: { stat: Stat; showDivider: boolean }) {
  return (
    <div className="flex items-center gap-6 sm:gap-10">
      <div className="text-center min-w-[80px]">
        <p className="font-display text-3xl sm:text-4xl font-bold text-gold-400 leading-none tabular-nums">
          {stat.value}
        </p>
        <p className="mt-1.5 text-[11px] uppercase tracking-widest text-white/50 font-medium">
          {stat.label}
        </p>
      </div>
      {showDivider && (
        <Separator
          orientation="vertical"
          className="hidden sm:block h-10 bg-white/10"
        />
      )}
    </div>
  );
}

// ─── ScrollHint ─────────────────────────────────────────────────
function ScrollHint() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
      <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      <span className="text-[10px] uppercase tracking-[3px] text-white/30 font-medium">
        Scroll
      </span>
    </div>
  );
}

// ─── HeroSection ────────────────────────────────────────────────
export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className={cn(
        // layout
        "relative isolate overflow-hidden",
        "min-h-svh flex flex-col items-center justify-center",
        "px-4 pt-24 pb-28 text-center",
        // background utilities (defined in globals.css)
        "hero-bg hero-glow pattern-overlay",
      )}
    >
      {/* ── Main content stack ──────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-4xl mx-auto">

        {/* 1 ── Live badge */}
        <HeroBadge />

        {/* 3 ── Headline */}
        <h1
          className={cn(
            "font-display font-bold text-white text-balance leading-[1.08]",
            "text-[clamp(2.6rem,7vw,5rem)]",
            "animate-fade-in-down delay-200",
          )}
        >
          Lighting the Path for
          <br />
          <em className="not-italic text-gold-400">Every Soul in Need</em>
        </h1>

        {/* 4 ── Sub-copy */}
        <p
          className={cn(
            "max-w-2xl text-white/65 leading-relaxed text-balance",
            "text-[clamp(1rem,2vw,1.2rem)]",
            "animate-fade-in-down delay-300",
          )}
        >
          A youth-driven non-profit dedicated to uplifting the poor, housing
          the homeless, empowering communities, and nurturing the spirit of
          brotherhood through faith, care, and collective action.
        </p>

        {/* 5 ── CTA buttons */}
        <div
          className={cn(
            "flex flex-wrap gap-4 justify-center",
            "animate-fade-in-down delay-400",
          )}
        >
          {/* Primary — amber / gold */}
          <Button
            asChild
            size="lg"
            className={cn(
              "bg-gradient-to-r from-gold-500 to-gold-400",
              "hover:from-gold-600 hover:to-gold-500",
              "text-stone-900 font-bold text-base",
              "shadow-[0_8px_24px_oklch(0.86_0.16_85/35%)]",
              "hover:shadow-[0_12px_32px_oklch(0.86_0.16_85/50%)]",
              "hover:-translate-y-0.5 transition-all duration-300",
              "rounded-xl px-8 h-12",
            )}
          >
            <Link href="/campaigns">
              <Heart className="size-4 fill-stone-900 shrink-0" />
              Donate to a Cause
            </Link>
          </Button>

          {/* Secondary — ghost / outlined white */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className={cn(
              "border-2 border-white/30 bg-transparent text-white",
              "hover:bg-white/10 hover:border-white/50 hover:text-white",
              "hover:-translate-y-0.5 transition-all duration-300",
              "rounded-xl px-8 h-12 text-base",
            )}
          >
            <Link href="/about">
              Discover Our Story
              <ArrowRight className="size-4 shrink-0" />
            </Link>
          </Button>
        </div>

        {/* 6 ── Stats strip */}
        <div
          className={cn(
            "flex flex-wrap justify-center gap-6 sm:gap-0",
            "w-full mt-6 pt-8 border-t border-white/10",
            "animate-fade-in-down delay-500",
          )}
        >
          {STATS.map((stat, i) => (
            <StatItem
              key={stat.label}
              stat={stat}
              showDivider={i < STATS.length - 1}
            />
          ))}
        </div>
      </div>

      {/* ── Scroll hint ─────────────────────────────────────── */}
      <ScrollHint />
    </section>
  );
}