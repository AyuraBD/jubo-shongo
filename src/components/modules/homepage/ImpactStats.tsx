import { cn } from "@/lib/utils";

// ─── Types ──────────────────────────────────────────────────────
interface Stat {
  value: string;
  label: string;
  sub: string;
}

// ─── Data ───────────────────────────────────────────────────────
const STATS: Stat[] = [
  { value: "1,240", label: "Families Supported",  sub: "Since 2024"            },
  { value: "৳82L",  label: "Total Funds Raised",  sub: "Transparently managed" },
  { value: "14",    label: "Mosques Supported",    sub: "Built & renovated"     },
  { value: "340",   label: "Active Volunteers",    sub: "Across Feni"           },
];

// ─── StatCell ────────────────────────────────────────────────────
function StatCell({ stat, index }: { stat: Stat; index: number }) {
  // On desktop: add right border to every cell except the last
  const showDivider = index < STATS.length - 1;

  return (
    <div
      className={cn(
        // layout
        "flex flex-col items-center justify-center text-center",
        "px-8 py-12",
        // subtle fill + hover
        "bg-white/[0.03] hover:bg-white/[0.07] transition-colors duration-300",
        // right divider on large screens only
        showDivider && "lg:border-r border-white/10",
        // bottom divider for 2-col grid on mobile
        index < 2 && "border-b border-white/10 sm:border-b-0",
      )}
    >
      {/* Number */}
      <span className="font-display text-5xl font-bold text-gold-400 leading-none tabular-nums">
        {stat.value}
      </span>

      {/* Label */}
      <span className="mt-3 text-sm font-medium text-white/70">
        {stat.label}
      </span>

      {/* Sub-label */}
      <span className="mt-1 text-[11px] uppercase tracking-widest text-white/35">
        {stat.sub}
      </span>
    </div>
  );
}

// ─── ImpactStats ─────────────────────────────────────────────────
export function ImpactStats() {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-24",
        // deep emerald gradient — matches hero-bg direction
        "bg-gradient-to-br from-brand-900 to-brand-800",
      )}
    >
      {/* Radial glow overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(16,185,129,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-12">
          {/* Label — ghost white on dark */}
          <span
            className={cn(
              "inline-block px-4 py-1.5 rounded-full mb-4",
              "bg-white/10 border border-white/15",
              "text-brand-400 text-xs font-semibold uppercase tracking-widest",
            )}
          >
            Our Impact
          </span>

          <h2 className="font-display font-bold text-white text-4xl sm:text-5xl leading-tight">
            Numbers That{" "}
            <em className="not-italic text-gold-400">Tell Our Story</em>
          </h2>
        </div>

        {/* Stats grid — bordered card */}
        <div
          className={cn(
            "grid grid-cols-2 lg:grid-cols-4",
            "rounded-2xl overflow-hidden",
            "border border-white/10",
          )}
        >
          {STATS.map((stat, i) => (
            <StatCell key={stat.label} stat={stat} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}