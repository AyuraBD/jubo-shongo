import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// ─── Types ──────────────────────────────────────────────────────
interface Value {
  icon: string;
  title: string;
  sub: string;
}

// ─── Data ───────────────────────────────────────────────────────
const VALUES: Value[] = [
  {
    icon: "🤲",
    title: "Community First",
    sub: "Every decision is guided by the needs of our people",
  },
  {
    icon: "📖",
    title: "Faith-Driven Service",
    sub: "Rooted in Islamic values of Zakat, Sadaqah and brotherhood",
  },
  {
    icon: "🌱",
    title: "Youth Empowerment",
    sub: "Giving young people purpose through meaningful action",
  },
];

// ─── ValueRow ────────────────────────────────────────────────────
function ValueRow({ value }: { value: Value }) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 p-4",
        "bg-white rounded-xl border border-stone-100",
        "hover:border-brand-200 hover:shadow-sm",
        "transition-all duration-300",
      )}
    >
      {/* Icon pill */}
      <div className="size-10 rounded-lg bg-brand-50 flex items-center justify-center text-[18px] shrink-0">
        {value.icon}
      </div>

      <div className="min-w-0">
        <p className="text-sm font-semibold text-stone-900 leading-none mb-1">
          {value.title}
        </p>
        <p className="text-xs text-stone-500 leading-relaxed">
          {value.sub}
        </p>
      </div>
    </div>
  );
}

// ─── Left visual column ──────────────────────────────────────────
function AboutVisual() {
  return (
    <div className="relative">
      {/* Year tag — floats top-left, overlaps card */}
      {/* <div
        className={cn(
          "absolute -left-3 top-6 z-10",
          "bg-white rounded-xl px-5 py-3 shadow-lg",
          "font-display text-sm font-semibold text-brand-800",
          "border border-stone-100",
        )}
      >
        Est. 2024 · Feni
      </div> */}

      {/* Main card */}
      <Card className="overflow-hidden rounded-3xl border-0 shadow-2xl">
        {/* Image area — mosque illustration placeholder */}
        <div
          className={cn(
            "h-80 flex items-center justify-center",
            "bg-gradient-to-br from-brand-800 to-brand-600",
            "text-8xl select-none",
          )}
          aria-hidden="true"
        >
          <img src="https://i.ibb.co.com/prWQKVsh/meeting-7.jpg" alt="" />
        </div>
      </Card>

      {/* Badge — floats bottom-right, overlaps card */}
      <div
        className={cn(
          "absolute -bottom-5 right-6 z-10",
          "bg-gold-500 text-white rounded-2xl",
          "px-6 py-4 text-center shadow-xl",
          "shadow-gold-500/30",
        )}
      >
        <span className="block font-display text-3xl font-bold leading-none">
          2+
        </span>
        <span className="text-[11px] uppercase tracking-wide opacity-90 mt-1 block">
          Years of Service
        </span>
      </div>
    </div>
  );
}

// ─── Right content column ────────────────────────────────────────
function AboutContent() {
  return (
    <div className="pt-6">
      {/* Section label */}
      <span
        className={cn(
          "inline-block px-4 py-1.5 rounded-full mb-5",
          "bg-brand-50 border border-brand-100",
          "text-brand-700 text-xs font-semibold uppercase tracking-widest",
        )}
      >
        About Us
      </span>

      {/* Heading */}
      <h2 className="font-display font-bold text-stone-900 text-4xl sm:text-5xl leading-tight mb-5">
        A Community Built on
        <br />
        <em className="not-italic text-brand-700">Compassion & Faith</em>
      </h2>

      {/* Body copy */}
      <p className="text-stone-600 text-base leading-relaxed mb-8">
        Unity of Strength was born from the hearts of young people in West
        Shaheb Nagor, Noapur and Durgapur who refused to look away from
        suffering. What started as a small group of friends collecting food for
        homeless families has grown into a structured foundation changing
        hundreds of lives every year.
      </p>

      {/* Value rows */}
      <div className="flex flex-col gap-3 mb-10">
        {VALUES.map((v) => (
          <ValueRow key={v.title} value={v} />
        ))}
      </div>

      {/* CTA */}
      <Button
        asChild
        variant="outline"
        className={cn(
          "border-2 border-brand-200 text-brand-800",
          "hover:bg-brand-50 hover:border-brand-400",
          "font-semibold rounded-xl px-6 h-11",
          "transition-all duration-300",
        )}
      >
        <Link href="/about">
          Read Our Full Story
          <ArrowRight className="size-4" />
        </Link>
      </Button>
    </div>
  );
}

// ─── AboutPreview ────────────────────────────────────────────────
export function AboutUs() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2",
            "gap-16 lg:gap-24 items-center",
          )}
        >
          <AboutVisual />
          <AboutContent />
        </div>
      </div>
    </section>
  );
}