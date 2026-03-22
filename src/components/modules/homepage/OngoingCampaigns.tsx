import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

// ─── Types ──────────────────────────────────────────────────────
type Category = "medical" | "mosque" | "housing";

interface Campaign {
  id: string;
  image: string;
  category: Category;
  isUrgent?: boolean;
  title: string;
  description: string;
  progress: number;        // 0–100
  raised: string;          // formatted display string e.g. "৳1,85,000"
}

// ─── Category config ─────────────────────────────────────────────
const CATEGORY_CONFIG: Record<
  Category,
  { label: string; textColor: string; bgColor: string; imgBg: string; progressColor: string }
> = {
  medical: {
    label:         "Medical",
    textColor:     "text-red-600",
    bgColor:       "bg-red-50",
    imgBg:         "from-red-50 to-red-100",
    progressColor: "bg-gradient-to-r from-gold-600 to-gold-400",
  },
  mosque: {
    label:         "Religious",
    textColor:     "text-brand-700",
    bgColor:       "bg-brand-50",
    imgBg:         "from-brand-50 to-brand-100",
    progressColor: "bg-gradient-to-r from-brand-700 to-brand-500",
  },
  housing: {
    label:         "Housing",
    textColor:     "text-blue-600",
    bgColor:       "bg-blue-50",
    imgBg:         "from-blue-50 to-blue-100",
    progressColor: "bg-gradient-to-r from-blue-600 to-blue-400",
  },
};

// ─── Data ───────────────────────────────────────────────────────
const CAMPAIGNS: Campaign[] = [
  {
    id:          "1",
    image:       "https://i.ibb.co.com/Fb4Qqmst/others.jpg",
    category:    "medical",
    isUrgent:    true,
    title:       "Burnt body treatment for Nazmul Hossain",
    description: "A 48-year-old shopkeeper needs treatment. Help us cover his medical expenses.",
    progress:    74,
    raised:      "৳1,15,000",
  },
  {
    id:          "2",
    image:       "https://i.ibb.co.com/60xpDX13/religious-construction-4.jpg",
    category:    "mosque",
    title:       "Noapur Mosque front yard Construction",
    description: "The old mosque in Noapur village needs frontyard construction to serve 300+ prayers.",
    progress:    45,
    raised:      "৳1,50,000",
  },
  {
    id:          "3",
    image:       "https://i.ibb.co.com/QjT0zqR8/house-construction-3.jpg",
    category:    "housing",
    title:       "Winter Shelter for 12 Families",
    description: "Flood-displaced families need temporary housing before the winter season arrives.",
    progress:    35,
    raised:      "৳1,28,000",
  },
];

// ─── CampaignCard ────────────────────────────────────────────────
function CampaignCard({ campaign }: { campaign: Campaign }) {
  const config = CATEGORY_CONFIG[campaign.category];

  return (
    <Card
      className={cn(
        "group overflow-hidden border border-stone-200 bg-white rounded-2xl",
        "hover:border-transparent hover:shadow-2xl hover:-translate-y-1",
        "transition-all duration-300 flex flex-col pt-0",
      )}
    >
      {/* ── Image area ──────────────────────────────────────── */}
      <div className="relative h-52 shrink-0 overflow-hidden">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay so badges are always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Category badge */}
        <Badge
          variant="secondary"
          className={cn(
            "absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-wide",
            config.textColor,
            config.bgColor,
          )}
        >
          {config.label}
        </Badge>

        {/* Urgent tag */}
        {campaign.isUrgent && (
          <Badge
            variant="destructive"
            className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wide animate-pulse"
          >
            Urgent
          </Badge>
        )}
      </div>

      {/* ── Body — flex-1 so footer always sticks to bottom ── */}
      <div className="flex flex-col flex-1">
        <CardHeader className="pb-2 pt-5">
          <h3 className="font-display font-bold text-lg text-stone-900 leading-snug group-hover:text-brand-800 transition-colors line-clamp-2">
            {campaign.title}
          </h3>
        </CardHeader>

        <CardContent className="pb-4 flex-1">
          <p className="text-sm text-stone-500 leading-relaxed line-clamp-3 mb-5">
            {campaign.description}
          </p>

          {/* Progress label row */}
          <div className="flex justify-between items-center text-xs mb-2">
            <span className="text-stone-400 font-medium">Progress</span>
            <strong className="text-stone-700">{campaign.progress}%</strong>
          </div>

          {/* Progress bar */}
          <div className="relative h-2 rounded-full bg-stone-100 overflow-hidden mb-4">
            <div
              className={cn(
                "h-full rounded-full transition-all duration-700",
                config.progressColor,
              )}
              style={{ width: `${campaign.progress}%` }}
            />
          </div>

          {/* Raised amount */}
          <p className="text-sm text-stone-500">
            Raised{" "}
            <span className="font-bold text-brand-700 text-base">
              {campaign.raised}
            </span>
          </p>
        </CardContent>

        {/* ── Footer always at bottom ──────────────────────── */}
        <CardFooter className="pt-0 mt-auto">
          <Button
            asChild
            className={cn(
              "w-full font-semibold rounded-xl",
              "bg-gradient-to-r from-brand-700 to-brand-600",
              "hover:from-brand-800 hover:to-brand-700",
              "text-white shadow-md shadow-brand-900/15",
              "hover:shadow-brand-900/25 transition-all duration-300",
            )}
          >
            <Link href="/campaigns">Donate</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}

// ─── CampaignsPreview ────────────────────────────────────────────
export function CampaignsPreview() {
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
            Active Campaigns
          </span>

          <h2 className="font-display font-bold text-stone-900 text-4xl sm:text-5xl leading-tight mb-4">
            Your Support Can{" "}
            <em className="not-italic text-brand-700">Change Lives</em>
          </h2>

          <p className="text-stone-500 text-lg leading-relaxed max-w-xl mx-auto">
            These campaigns need your urgent support. Every donation, big or
            small, makes a real difference.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {CAMPAIGNS.map((c) => (
            <CampaignCard key={c.id} campaign={c} />
          ))}
        </div>

        {/* View all row */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className={cn(
              "border-2 border-brand-200 text-brand-800",
              "hover:bg-brand-50 hover:border-brand-400",
              "font-semibold rounded-xl px-8",
              "transition-all duration-300",
            )}
          >
            <Link href="/campaigns">
              View All Campaigns
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}