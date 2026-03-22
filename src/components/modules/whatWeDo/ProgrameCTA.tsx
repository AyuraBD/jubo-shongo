"use client";

import Link from "next/link";
import { Heart, Share2, Users, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ─── Types ──────────────────────────────────────────────────────
interface CTAButton {
  label:    string;
  href?:    string;          // omit for onClick-only buttons
  icon?:    LucideIcon;
  onClick?: () => void;
  variant?: "primary" | "outline";
}

interface CTASectionProps {
  label?:    string;          // small pill above heading — pass null to hide
  title:     React.ReactNode; // accepts JSX for <em> colouring
  subtitle?: string;
  buttons:   CTAButton[];
}

// ─── Button renderer ─────────────────────────────────────────────
function CTABtn({ btn }: { btn: CTAButton }) {
  const isPrimary = btn.variant === "primary";

  const sharedCn = cn(
    "hover:-translate-y-0.5 transition-all duration-300",
    "rounded-xl px-8 h-12 text-base font-bold",
  );

  const primaryCn = cn(
    "bg-gradient-to-r from-gold-500 to-gold-400",
    "hover:from-gold-600 hover:to-gold-500",
    "text-stone-900",
    "shadow-[0_8px_24px_oklch(0.86_0.16_85/35%)]",
    "hover:shadow-[0_12px_32px_oklch(0.86_0.16_85/50%)]",
  );

  const outlineCn = cn(
    "border-2 border-white/30 bg-transparent",
    "text-white hover:bg-white/10 hover:border-white/50 hover:text-white",
  );

  const Icon = btn.icon;

  const inner = (
    <>
      {Icon && <Icon className={cn("size-4 shrink-0", isPrimary && "fill-stone-900")} />}
      {btn.label}
    </>
  );

  if (btn.href) {
    return (
      <Button
        asChild
        size="lg"
        variant={isPrimary ? "default" : "outline"}
        className={cn(sharedCn, isPrimary ? primaryCn : outlineCn)}
        onClick={btn.onClick}
      >
        <Link href={btn.href}>{inner}</Link>
      </Button>
    );
  }

  return (
    <Button
      size="lg"
      variant={isPrimary ? "default" : "outline"}
      className={cn(sharedCn, isPrimary ? primaryCn : outlineCn)}
      onClick={btn.onClick}
    >
      {inner}
    </Button>
  );
}

// ─── CTASection ──────────────────────────────────────────────────
export function CTASection({
  label,
  title,
  subtitle,
  buttons,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-24 text-center",
        "bg-gradient-to-br from-brand-950 to-brand-900",
      )}
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(16,185,129,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Optional label pill */}
        {label && (
          <span
            className={cn(
              "inline-block px-4 py-1.5 rounded-full mb-6",
              "bg-white/10 border border-white/15",
              "text-gold-400 text-xs font-semibold uppercase tracking-widest",
            )}
          >
            {label}
          </span>
        )}

        {/* Heading */}
        <h2 className="font-display font-bold text-white leading-tight mb-5 text-4xl sm:text-5xl">
          {title}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          {buttons.map((btn) => (
            <CTABtn key={btn.label} btn={btn} />
          ))}
        </div>

      </div>
    </section>
  );
}

// ─── Pre-built variants for common pages ─────────────────────────

/** Homepage CTA */
export function HomeCTA() {
  return (
    <CTASection
      label="Join the Movement"
      title={
        <>
          Be the Change You Wish
          <br />
          <em className="not-italic text-gold-400">to See</em>
        </>
      }
      subtitle="Whether you donate, volunteer, or simply spread the word — your support transforms lives and strengthens our community."
      buttons={[
        { label: "Donate Now",          href: "/campaigns",  icon: Heart,  variant: "primary"  },
        { label: "Become a Volunteer",  href: "/contact",    icon: Users,  variant: "outline"  },
        {
          label: "Share Our Mission",
          icon:  Share2,
          variant: "outline",
          onClick: () => {
            if (typeof navigator !== "undefined" && navigator.share) {
              navigator.share({
                title: "Unity of Strength Foundation",
                text:  "Support this amazing community foundation.",
                url:   window.location.origin,
              });
            }
          },
        },
      ]}
    />
  );
}

/** What We Do page CTA */
export function ProgramsCTA() {
  return (
    <CTASection
      title={
        <>
          Support Our{" "}
          <em className="not-italic text-gold-400">Programs</em>
        </>
      }
      subtitle="Choose a cause close to your heart and make a direct impact today."
      buttons={[
        { label: "Donate to a Campaign", href: "/campaigns", icon: Heart, variant: "primary"  },
        { label: "Partner with Us",      href: "/contact",               variant: "outline"  },
      ]}
    />
  );
}

/** About page CTA */
export function AboutCTA() {
  return (
    <CTASection
      title={
        <>
          Ready to Make a{" "}
          <em className="not-italic text-gold-400">Difference?</em>
        </>
      }
      subtitle="Join hundreds of donors and volunteers writing a new story for our community every single day."
      buttons={[
        { label: "Donate Now",       href: "/campaigns", icon: Heart, variant: "primary" },
        { label: "Volunteer with Us", href: "/contact",              variant: "outline"  },
      ]}
    />
  );
}