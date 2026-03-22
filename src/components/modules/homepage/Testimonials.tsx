import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// ─── Types ──────────────────────────────────────────────────────
interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

// ─── Data ───────────────────────────────────────────────────────
const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "When my husband was hospitalized and we had nothing, Nur Al-Ummah appeared like a blessing. They covered the treatment cost and brought food to our home for three months. I pray for them every day.",
    name:   "Fatema Khatun",
    role:   "Homemaker, Noapur",
    avatar: "👩",
  },
  {
    quote:
      "Our village mosque was crumbling for years. We had no means to rebuild it. These young brothers raised funds and managed the entire construction. May Allah reward them abundantly.",
    name:   "Hafez Abdul Karim",
    role:   "Imam, Durgapur",
    avatar: "👴",
  },
  {
    quote:
      "I lost my job during COVID. These brothers helped my family survive for two months with groceries and even helped me find a new workshop position. I am forever grateful.",
    name:   "Kamal Hossain",
    role:   "Craftsman, West Shaheb Nagor",
    avatar: "👨",
  },
];

// ─── StarRating ──────────────────────────────────────────────────
function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-gold-400 text-sm" aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

// ─── TestimonialCard ─────────────────────────────────────────────
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card
      className={cn(
        "border border-stone-200 bg-white rounded-2xl",
        "hover:border-brand-200 hover:shadow-lg",
        "transition-all duration-300",
      )}
    >
      <CardContent className="p-8 flex flex-col gap-4">

        {/* Stars */}
        <StarRating />

        {/* Large opening quote mark */}
        <p
          className="font-display text-[56px] text-brand-200 leading-none select-none -mb-2"
          aria-hidden="true"
        >
          &ldquo;
        </p>

        {/* Quote body */}
        <p className="text-sm text-stone-600 leading-relaxed italic flex-1">
          {testimonial.quote}
        </p>

        <Separator className="bg-stone-100" />

        {/* Author row */}
        <div className="flex items-center gap-3">
          {/* Avatar circle */}
          <div
            className={cn(
              "size-11 rounded-full shrink-0",
              "bg-gradient-to-br from-brand-600 to-brand-400",
              "flex items-center justify-center text-xl",
            )}
            aria-hidden="true"
          >
            {testimonial.avatar}
          </div>

          <div className="min-w-0">
            <p className="text-sm font-semibold text-stone-900 leading-none mb-1">
              {testimonial.name}
            </p>
            <p className="text-xs text-stone-500 truncate">
              {testimonial.role}
            </p>
          </div>
        </div>

      </CardContent>
    </Card>
  );
}

// ─── Testimonials ────────────────────────────────────────────────
export function Testimonials() {
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
            Testimonials
          </span>

          <h2 className="font-display font-bold text-stone-900 text-4xl sm:text-5xl leading-tight mb-4">
            Words from Our{" "}
            <em className="not-italic text-brand-700">Community</em>
          </h2>

          <p className="text-stone-500 text-lg leading-relaxed max-w-xl mx-auto">
            The real measure of our work comes from those whose lives have been
            touched.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>

      </div>
    </section>
  );
}