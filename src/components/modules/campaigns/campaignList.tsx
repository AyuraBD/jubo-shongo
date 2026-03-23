"use client";

import { useState } from "react";
import { Calendar, Clock, Users, RefreshCw, ShieldCheck, Percent, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// ─── Types ──────────────────────────────────────────────────────
type Category = "all" | "medical" | "mosque" | "housing" | "education" | "food";

interface Campaign {
  id:          string;
  category:    Exclude<Category, "all">;
  emoji:       string;
  imgBg:       string;
  isUrgent?:   boolean;
  catLabel:    string;
  catColor:    string;
  catBg:       string;
  startedDate: string;
  timeLeft:    string;
  isRecurring?: boolean;
  title:       string;
  description: string;
  raised:      string;
  goal:        string;
  progress:    number;
  progressColor: string;
  donorInfo:   string;
}

// ─── Filter config ───────────────────────────────────────────────
const FILTERS: { value: Category; label: string; emoji?: string }[] = [
  { value: "all",       label: "All Campaigns"           },
  { value: "medical",   label: "Medical",   emoji: "🏥"  },
  { value: "mosque",    label: "Mosque",    emoji: "🕌"  },
  { value: "housing",   label: "Housing",   emoji: "🏠"  },
  { value: "education", label: "Education", emoji: "📚"  },
  { value: "food",      label: "Food Relief",emoji: "🍲" },
];

// ─── Campaign data ───────────────────────────────────────────────
const CAMPAIGNS: Campaign[] = [
  {
    id:            "1",
    category:      "medical",
    emoji:         "🏥",
    imgBg:         "from-red-50 to-red-100",
    isUrgent:      true,
    catLabel:      "Medical",
    catColor:      "text-red-600",
    catBg:         "bg-red-50 border-red-200",
    startedDate:   "Started Nov 2024",
    timeLeft:      "18 days left",
    title:         "Kidney Treatment for Rahima Begum",
    description:   "A 58-year-old widow from Muradnagar needs ongoing dialysis treatment. Her son lost his job — the family has no income. Help cover 6 months of treatment.",
    raised:        "৳1,85,000",
    goal:          "৳2,50,000",
    progress:      74,
    progressColor: "from-gold-600 to-gold-400",
    donorInfo:     "143 donors · Ends Dec 15",
  },
  {
    id:            "2",
    category:      "mosque",
    emoji:         "🕌",
    imgBg:         "from-brand-50 to-brand-100",
    catLabel:      "Religious",
    catColor:      "text-brand-700",
    catBg:         "bg-brand-50 border-brand-200",
    startedDate:   "Started Oct 2024",
    timeLeft:      "45 days left",
    title:         "Al-Noor Mosque Reconstruction — Chandina",
    description:   "The 40-year-old mosque needs full reconstruction. Over 300 worshippers currently pray in a crumbling structure during every Jumu'ah prayer.",
    raised:        "৳4,50,000",
    goal:          "৳10,00,000",
    progress:      45,
    progressColor: "from-brand-700 to-brand-500",
    donorInfo:     "287 donors · Ongoing",
  },
  {
    id:            "3",
    category:      "housing",
    emoji:         "🏘️",
    imgBg:         "from-blue-50 to-blue-100",
    isUrgent:      true,
    catLabel:      "Housing",
    catColor:      "text-blue-600",
    catBg:         "bg-blue-50 border-blue-200",
    startedDate:   "Started Nov 2024",
    timeLeft:      "8 days left",
    title:         "Winter Shelter for 12 Flood-Displaced Families",
    description:   "Families displaced by October floods need urgent temporary shelter before winter. Tents, blankets, and basic supplies required immediately.",
    raised:        "৳2,28,000",
    goal:          "৳2,50,000",
    progress:      91,
    progressColor: "from-blue-600 to-blue-400",
    donorInfo:     "198 donors · Almost funded!",
  },
  {
    id:            "4",
    category:      "education",
    emoji:         "📚",
    imgBg:         "from-purple-50 to-purple-100",
    catLabel:      "Education",
    catColor:      "text-purple-700",
    catBg:         "bg-purple-50 border-purple-200",
    startedDate:   "Started Sep 2024",
    timeLeft:      "60 days left",
    title:         "Madrasa Scholarships for 20 Orphan Students",
    description:   "Twenty orphan children have been accepted into the regional madrasa but cannot afford tuition, books, or uniforms. Give a child the gift of education.",
    raised:        "৳95,000",
    goal:          "৳1,50,000",
    progress:      63,
    progressColor: "from-purple-600 to-purple-400",
    donorInfo:     "112 donors · Open",
  },
  {
    id:            "5",
    category:      "food",
    emoji:         "🍛",
    imgBg:         "from-gold-50 to-amber-100",
    catLabel:      "Food Relief",
    catColor:      "text-gold-700",
    catBg:         "bg-gold-50 border-gold-200",
    startedDate:   "Monthly program",
    timeLeft:      "Recurring",
    isRecurring:   true,
    title:         "December Monthly Food Distribution",
    description:   "Our monthly food drive serves 200 families across Feni. Help us fund December's distribution — rice, lentils, oil, and essentials for one full month.",
    raised:        "৳68,000",
    goal:          "৳1,20,000",
    progress:      57,
    progressColor: "from-gold-600 to-gold-400",
    donorInfo:     "89 donors · Monthly",
  },
  {
    id:            "6",
    category:      "mosque",
    emoji:         "💧",
    imgBg:         "from-brand-50 to-brand-100",
    catLabel:      "Religious",
    catColor:      "text-brand-700",
    catBg:         "bg-brand-50 border-brand-200",
    startedDate:   "Started Oct 2024",
    timeLeft:      "30 days left",
    title:         "Wudu Facility & Water System — Laksam Mosque",
    description:   "The mosque's wudu area is in disrepair. We need to install a proper water system, build clean washing areas, and connect to a permanent water source.",
    raised:        "৳55,000",
    goal:          "৳80,000",
    progress:      69,
    progressColor: "from-brand-700 to-brand-500",
    donorInfo:     "74 donors · Active",
  },
];

// ─── Trust data ──────────────────────────────────────────────────
const TRUST_ITEMS = [
  {
    icon:  ShieldCheck,
    emoji: "🔍",
    title: "100% Transparent",
    text:  "Every campaign has verified documentation. Beneficiaries are real, needs are confirmed, and updates are posted regularly.",
  },
  {
    icon:  Percent,
    emoji: "💯",
    title: "0% Platform Fee",
    text:  "100% of your campaign donation goes directly to the beneficiary. Our operational costs are funded through a separate institutional fund.",
  },
  {
    icon:  ClipboardList,
    emoji: "📋",
    title: "Full Reporting",
    text:  "After every campaign, we publish a complete financial report — how much was raised, how it was spent, and what changed for the beneficiary.",
  },
];

// ─── CampaignCard ────────────────────────────────────────────────
function CampaignCard({ campaign }: { campaign: Campaign }) {
  return (
    <Card
      className={cn(
        "py-0 group overflow-hidden border border-stone-200 bg-white rounded-2xl flex flex-col",
        "hover:border-transparent hover:shadow-2xl hover:-translate-y-1",
        "transition-all duration-300",
      )}
    >
      {/* Image */}
      <div
        className={cn(
          "relative h-48 flex items-center justify-center",
          "bg-gradient-to-br text-6xl shrink-0",
          campaign.imgBg,
        )}
      >
        <span className="relative z-10 select-none">{campaign.emoji}</span>

        <Badge
          variant="outline"
          className={cn(
            "absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-wide border",
            campaign.catColor,
            campaign.catBg,
          )}
        >
          {campaign.catLabel}
        </Badge>

        {campaign.isUrgent && (
          <Badge
            variant="destructive"
            className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wide animate-pulse"
          >
            Urgent
          </Badge>
        )}
      </div>

      {/* Header */}
      <CardHeader className="pb-2 pt-4">
        {/* Meta row */}
        <div className="flex items-center gap-3 text-xs text-stone-400 mb-2 flex-wrap">
          <span className="flex items-center gap-1">
            <Calendar className="size-3" />
            {campaign.startedDate}
          </span>
          <span className="flex items-center gap-1">
            {campaign.isRecurring
              ? <RefreshCw className="size-3" />
              : <Clock className="size-3" />
            }
            {campaign.timeLeft}
          </span>
        </div>

        <CardTitle className="font-display text-lg text-stone-900 leading-snug group-hover:text-brand-800 transition-colors line-clamp-2">
          {campaign.title}
        </CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent className="flex flex-col gap-4 flex-1 pb-4">
        <p className="text-sm text-stone-500 leading-relaxed line-clamp-2">
          {campaign.description}
        </p>

        {/* Progress */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-stone-500">{campaign.raised} raised of {campaign.goal}</span>
            <strong className="text-stone-700">{campaign.progress}%</strong>
          </div>
          <div className="h-2 rounded-full bg-stone-100 overflow-hidden">
            <div
              className={cn("h-full rounded-full bg-gradient-to-r transition-all duration-700", campaign.progressColor)}
              style={{ width: `${campaign.progress}%` }}
            />
          </div>
        </div>

        {/* Donor info */}
        <div className="flex items-center gap-1.5 text-xs text-stone-400 mt-auto">
          <Users className="size-3" />
          {campaign.donorInfo}
        </div>
      </CardContent>

      <Separator className="bg-stone-100" />

      {/* Footer */}
      <CardFooter className="pt-4">
        <Button
          className={cn(
            "w-full font-semibold rounded-xl",
            "bg-gradient-to-r from-brand-700 to-brand-600",
            "hover:from-brand-800 hover:to-brand-700",
            "text-white shadow-md shadow-brand-900/15",
            "hover:shadow-brand-900/25 transition-all duration-300",
          )}
        >
          Donate Now
        </Button>
      </CardFooter>
    </Card>
  );
}

// ─── TrustSection ────────────────────────────────────────────────
function TrustSection() {
  return (
    <div className="mt-20 rounded-3xl bg-stone-50 border border-stone-100 p-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {TRUST_ITEMS.map((item) => (
          <div key={item.title} className="text-center flex flex-col items-center gap-3">
            <div className="size-14 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center justify-center text-3xl select-none">
              {item.emoji}
            </div>
            <h4 className="font-display font-bold text-lg text-stone-900">
              {item.title}
            </h4>
            <p className="text-sm text-stone-500 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── CampaignsList ───────────────────────────────────────────────
export function CampaignsList() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered =
    activeFilter === "all"
      ? CAMPAIGNS
      : CAMPAIGNS.filter((c) => c.category === activeFilter);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <h2 className="font-display font-bold text-stone-900 text-3xl">
            All{" "}
            <em className="not-italic italic text-brand-700">Active Campaigns</em>
          </h2>
          <span className="text-sm text-stone-400">
            Showing {filtered.length} campaign{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {FILTERS.map((f) => {
            const isActive = activeFilter === f.value;
            return (
              <Button
                key={f.value}
                variant="outline"
                size="sm"
                onClick={() => setActiveFilter(f.value)}
                className={cn(
                  "rounded-full px-4 h-9 text-sm font-semibold border-2 transition-all duration-200",
                  isActive
                    ? "bg-brand-700 border-brand-700 text-white hover:bg-brand-800 hover:border-brand-800"
                    : "border-stone-200 text-stone-600 hover:border-brand-300 hover:text-brand-700 bg-white",
                )}
              >
                {f.emoji && <span className="mr-1">{f.emoji}</span>}
                {f.label}
              </Button>
            );
          })}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-stone-400">
            <p className="text-5xl mb-4 select-none">🔍</p>
            <p className="text-lg font-medium text-stone-600">No campaigns in this category.</p>
            <p className="text-sm mt-2">Check back soon or donate to our general fund.</p>
          </div>
        )}

        {/* Trust section */}
        <TrustSection />

      </div>
    </section>
  );
}