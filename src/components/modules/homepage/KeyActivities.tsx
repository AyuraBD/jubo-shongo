import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// ─── Types ──────────────────────────────────────────────────────
interface Activity {
  icon: string;
  title: string;
  text: string;
  linkLabel: string;
  href: string;
}

// ─── Data ───────────────────────────────────────────────────────
const ACTIVITIES: Activity[] = [
  {
    icon: "🍲",
    title: "Feeding the Poor",
    text: "Weekly food distribution drives ensuring no family in our community goes to bed hungry. Hot meals, grocery packs, and Eid special programs.",
    linkLabel: "Learn more",
    href: "/activities",
  },
  {
    icon: "🏠",
    title: "Housing Support",
    text: "Emergency shelter assistance and housing rehabilitation for homeless individuals and displaced families across Feni district.",
    linkLabel: "Learn more",
    href: "/activities",
  },
  {
    icon: "💸",
    title: "Crowdfunding",
    text: "Transparent online and community fundraising for medical emergencies, education, and disaster relief — every taka accounted for.",
    linkLabel: "View campaigns",
    href: "/campaigns",
  },
  {
    icon: "🕌",
    title: "Mosque Construction",
    text: "Supporting rural communities in building and renovating mosques — places of worship, education, and community gathering.",
    linkLabel: "Learn more",
    href: "/activities",
  },
  {
    icon: "🌙",
    title: "Religious Programs",
    text: "Quran classes, Islamic lectures, Iftar gatherings, and youth tarbiyah programs nurturing spiritual growth at every age.",
    linkLabel: "Learn more",
    href: "/activities",
  },
  {
    icon: "⚽",
    title: "Sports & Events",
    text: "Community sports tournaments, cultural events, and youth programs fostering unity, discipline, and healthy competition.",
    linkLabel: "Learn more",
    href: "/activities",
  },
];

// ─── ActivityCard ────────────────────────────────────────────────
function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <Card
      className={cn(
        // base
        "group relative overflow-hidden border border-stone-200 bg-white",
        "rounded-2xl transition-all duration-300",
        // hover
        "hover:border-brand-200 hover:shadow-lg hover:-translate-y-1",
      )}
    >
      {/* Top accent bar — slides in on hover */}
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-[3px]",
          "bg-gradient-to-r from-brand-600 to-brand-400",
          "scale-x-0 group-hover:scale-x-100",
          "transition-transform duration-300 origin-left",
        )}
      />

      <CardContent className="p-8 flex flex-col gap-5">
        {/* Icon */}
        <div className="size-14 rounded-xl bg-brand-50 flex items-center justify-center text-[26px] shrink-0">
          {activity.icon}
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-[19px] text-stone-900 leading-snug">
          {activity.title}
        </h3>

        {/* Body */}
        <p className="text-sm text-stone-600 leading-relaxed flex-1">
          {activity.text}
        </p>

        {/* Link */}
        <Link
          href={activity.href}
          className={cn(
            "inline-flex items-center gap-1.5",
            "text-sm font-semibold text-brand-700",
            "transition-all duration-200",
            "group/link",
          )}
        >
          {activity.linkLabel}
          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
}

// ─── ActivitiesSection ───────────────────────────────────────────
export function KeyActivities() {
  return (
    <section className="py-24 bg-white">
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
            What We Do
          </span>

          <h2 className="font-display font-bold text-stone-900 text-4xl sm:text-5xl leading-tight mb-4">
            How We Serve{" "}
            <em className="not-italic text-brand-700">Our Community</em>
          </h2>

          <p className="text-stone-500 text-lg leading-relaxed max-w-xl mx-auto">
            From feeding the hungry to building mosques — every act of service
            brings us closer together as one Ummah.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTIVITIES.map((activity) => (
            <ActivityCard key={activity.title} activity={activity} />
          ))}
        </div>

      </div>
    </section>
  );
}