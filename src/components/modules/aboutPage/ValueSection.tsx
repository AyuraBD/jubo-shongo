import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

// ─── Types ──────────────────────────────────────────────────────
interface Value {
  icon:  string;
  title: string;
  text:  string;
}

// ─── Data ───────────────────────────────────────────────────────
const VALUES: Value[] = [
  {
    icon:  "🤲",
    title: "Compassion",
    text:  "We lead with empathy. Every person who comes to us is treated with dignity, warmth, and unconditional care — regardless of background, faith, or status.",
  },
  {
    icon:  "📊",
    title: "Transparency",
    text:  "Every taka donated is tracked and reported publicly. Our community deserves to know exactly how their generosity is being used and what impact it creates.",
  },
  {
    icon:  "🕌",
    title: "Faith",
    text:  "Rooted in Islamic teachings of Zakat, Sadaqah, and Ummah — we see service not as charity but as a sacred obligation and an act of worship.",
  },
  {
    icon:  "💪",
    title: "Empowerment",
    text:  "We don't just provide aid — we build capacity. Teaching skills, creating opportunities, and helping people stand on their own feet with pride.",
  },
  {
    icon:  "🌍",
    title: "Community",
    text:  "We are nothing without our community. Every program is designed with and for the people we serve — locally rooted, community-driven, grassroots in spirit.",
  },
  {
    icon:  "🌱",
    title: "Youth Leadership",
    text:  "The future belongs to the youth. We create space for young people to lead, innovate, and take ownership of positive change in their communities.",
  },
];

// ─── ValueCard ───────────────────────────────────────────────────
function ValueCard({ value }: { value: Value }) {
  return (
    <Card
      className={cn(
        "group border border-stone-200 bg-white rounded-2xl",
        "hover:border-brand-200 hover:shadow-lg hover:-translate-y-1",
        "transition-all duration-300",
      )}
    >
      <CardHeader className="pb-2">
        {/* Icon */}
        <div
          className="text-4xl mb-2 select-none"
          aria-hidden="true"
        >
          {value.icon}
        </div>

        {/* shadcn CardTitle */}
        <CardTitle className="font-display text-xl text-stone-900 group-hover:text-brand-700 transition-colors duration-300">
          {value.title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        {/* shadcn CardDescription */}
        <CardDescription className="text-sm text-stone-500 leading-relaxed">
          {value.text}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

// ─── ValuesSection ───────────────────────────────────────────────
export function ValuesSection() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className={cn(
              "inline-block px-4 py-1.5 rounded-full mb-4",
              "bg-brand-50 border border-brand-100",
              "text-brand-700 text-xs font-semibold uppercase tracking-widest",
            )}
          >
            Core Values
          </span>

          <h2 className="font-display font-bold text-stone-900 text-4xl sm:text-5xl leading-tight mb-4">
            What We{" "}
            <em className="not-italic text-brand-700">Stand For</em>
          </h2>

          <p className="text-stone-500 text-lg leading-relaxed max-w-xl mx-auto">
            These principles guide every decision we make and every life we
            touch.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((value) => (
            <ValueCard key={value.title} value={value} />
          ))}
        </div>

      </div>
    </section>
  );
}