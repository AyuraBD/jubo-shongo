"use client"

import Link from "next/link";
import { Heart, Share2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ─── CTASection ──────────────────────────────────────────────────
export function CTASection() {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-24 text-center",
        // deep emerald gradient — same palette as hero & impact
        "bg-gradient-to-br from-brand-950 to-brand-900",
      )}
    >
      {/* Radial glow overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(16,185,129,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label — ghost white / gold on dark */}
        <span
          className={cn(
            "inline-block px-4 py-1.5 rounded-full mb-6",
            "bg-white/10 border border-white/15",
            "text-gold-400 text-xs font-semibold uppercase tracking-widest",
          )}
        >
          Join the Movement
        </span>

        {/* Heading */}
        <h2
          className={cn(
            "font-display font-bold text-white leading-tight mb-5",
            "text-4xl sm:text-5xl",
          )}
        >
          Be the Change You Wish
          <br />
          <em className="not-italic text-gold-400">to See</em>
        </h2>

        {/* Sub-copy */}
        <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Whether you donate, volunteer, or simply spread the word — your
          support transforms lives and strengthens our community.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">

          {/* Primary — gold */}
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
              Donate Now
            </Link>
          </Button>

          {/* Secondary — ghost white */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className={cn(
              "border-2 border-white/30 bg-transparent",
              "text-white hover:bg-white/10 hover:border-white/50 hover:text-white",
              "hover:-translate-y-0.5 transition-all duration-300",
              "rounded-xl px-8 h-12 text-base",
            )}
          >
            <Link href="/contact">
              <Users className="size-4 shrink-0" />
              Become a Volunteer
            </Link>
          </Button>

          {/* Tertiary — ghost white */}
          <Button
            size="lg"
            variant="outline"
            className={cn(
              "border-2 border-white/30 bg-transparent",
              "text-white hover:bg-white/10 hover:border-white/50 hover:text-white",
              "hover:-translate-y-0.5 transition-all duration-300",
              "rounded-xl px-8 h-12 text-base",
            )}
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "Nur Al-Ummah Foundation",
                  text: "Support this amazing community foundation helping the poor, building mosques, and changing lives.",
                  url: window.location.origin,
                });
              }
            }}
          >
            <Share2 className="size-4 shrink-0" />
            Share Our Mission
          </Button>

        </div>
      </div>
    </section>
  );
}