import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// ─── Types ──────────────────────────────────────────────────────
interface ImpactBadge {
  label:   string;
  variant: "green" | "amber";
}

interface Activity {
  number:     string;
  icon:       string;
  title:      string;
  paragraphs: string[];
  badges:     ImpactBadge[];
  imgBg:      string;
  reverse:    boolean;
}

// ─── Data ───────────────────────────────────────────────────────
const ACTIVITIES: Activity[] = [
  {
    number:  "Program 01",
    icon:    "🍲",
    title:   "Helping the Poor & Unemployed",
    paragraphs: [
      "Poverty is not just a lack of money — it's the silence of hunger, the weight of helplessness, the loss of dignity. Our food and livelihood program attacks these roots directly through weekly food drives, grocery packs for widows and orphans, skill training workshops for unemployed youth, and emergency cash assistance for families in acute need.",
      "We partner with local businesses to create job placement pathways and run a small micro-loan program to help entrepreneurs get back on their feet.",
    ],
    badges: [
      { label: "860 Families Fed Monthly", variant: "green" },
      { label: "42 Jobs Created",          variant: "green" },
      { label: "৳18L Distributed",        variant: "amber" },
    ],
    imgBg:   "from-brand-50 to-brand-100",
    reverse: false,
  },
  {
    number:  "Program 02",
    icon:    "🏠",
    title:   "Supporting the Homeless",
    paragraphs: [
      "Every person without a roof is a person without safety. We operate an emergency shelter referral network, provide temporary housing support, and run seasonal campaigns to ensure the homeless survive winter floods and monsoon disasters.",
      "Our housing rehabilitation program repairs and rebuilds damaged homes for the most vulnerable — elderly widows, disabled individuals, and flood-displaced families. Dignity is not a luxury; it is a right.",
    ],
    badges: [
      { label: "120+ Individuals Housed", variant: "green" },
      { label: "38 Homes Repaired",       variant: "green" },
      { label: "6 Upazilas Covered",      variant: "amber" },
    ],
    imgBg:   "from-gold-50 to-amber-100",
    reverse: true,
  },
  {
    number:  "Program 03",
    icon:    "💸",
    title:   "Crowdfunding for Emergencies",
    paragraphs: [
      "When disaster strikes — whether it's a sudden illness, a flood, or a lost home — our community crowdfunding platform activates within hours. We verify each case, set transparent goals, publish regular updates, and ensure every donor sees exactly where their money went.",
      "We run campaigns across social media, local networks, and in-person collections — making it easy for anyone, anywhere, to participate in saving a life. 100% of donations reach the beneficiary; our operational costs are covered separately.",
    ],
    badges: [
      { label: "47 Campaigns Completed", variant: "green" },
      { label: "100% Transparency",      variant: "green" },
      { label: "৳82L Raised Total",     variant: "amber" },
    ],
    imgBg:   "from-blue-50 to-blue-100",
    reverse: false,
  },
  {
    number:  "Program 04",
    icon:    "🌙",
    title:   "Religious Programs & Education",
    paragraphs: [
      "Faith is the foundation of our work. We run weekly Quran recitation classes, monthly Islamic lectures, Ramadan Iftar programs for the community, and youth tarbiyah (character development) circles to nurture the next generation of ethical, compassionate leaders.",
      "Our annual Milad-un-Nabi ﷺ gathering brings together hundreds of community members in celebration and remembrance. We also support Islamic education scholarships for students who cannot afford madrasa fees.",
    ],
    badges: [
      { label: "200+ Students Enrolled", variant: "green" },
      { label: "12 Monthly Programs",    variant: "green" },
      { label: "24 Scholarships Given",  variant: "amber" },
    ],
    imgBg:   "from-purple-50 to-purple-100",
    reverse: true,
  },
  {
    number:  "Program 05",
    icon:    "🕌",
    title:   "Mosque Construction & Renovation",
    paragraphs: [
      "A mosque is not just a place of prayer — it is a school, a counseling center, a community hall, and a sanctuary. Many rural mosques in Feni district are in critical disrepair, unable to accommodate growing congregations or protect worshippers from the elements.",
      "We fundraise for full mosque construction in underserved villages, as well as renovation of roofs, wudu facilities, and electrical systems. Each project is managed with full community participation and public financial reporting.",
    ],
    badges: [
      { label: "14 Projects Completed", variant: "green" },
      { label: "3 Under Construction",  variant: "green" },
      { label: "৳45L Invested",        variant: "amber" },
    ],
    imgBg:   "from-brand-50 to-emerald-100",
    reverse: false,
  },
  {
    number:  "Program 06",
    icon:    "⚽",
    title:   "Community Sports & Events",
    paragraphs: [
      "A strong community plays together. Our annual football and cricket tournaments unite youth from across Feni, promoting healthy competition, teamwork, and discipline. Sports events also serve as powerful community bonding opportunities where friendships are forged across village lines.",
      "Beyond sports, we organize Eid fairs, cultural evenings, Independence Day programs, and seasonal melas — events that celebrate who we are as a people and keep our traditions alive for future generations.",
    ],
    badges: [
      { label: "8 Tournaments Organized",  variant: "green" },
      { label: "500+ Youth Participants",  variant: "green" },
      { label: "18 Community Events",      variant: "amber" },
    ],
    imgBg:   "from-teal-50 to-teal-100",
    reverse: true,
  },
];

// ─── ActivityFeature ─────────────────────────────────────────────
function ActivityFeature({ activity }: { activity: Activity }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
        activity.reverse && "lg:[direction:rtl] [&>*]:[direction:ltr]",
      )}
    >
      {/* ── Visual ───────────────────────────────────────── */}
      <div
        className={cn(
          "rounded-3xl overflow-hidden shadow-2xl",
          "h-72 sm:h-80 lg:h-96",
          "flex items-center justify-center",
          "bg-gradient-to-br",
          activity.imgBg,
        )}
      >
        <span
          className="text-[100px] drop-shadow-sm select-none"
          aria-hidden="true"
        >
          {activity.icon}
        </span>
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="flex flex-col gap-5">
        {/* Program label */}
        <span
          className={cn(
            "inline-block w-fit px-4 py-1.5 rounded-full",
            "bg-brand-50 border border-brand-100",
            "text-brand-700 text-xs font-semibold uppercase tracking-widest",
          )}
        >
          {activity.number}
        </span>

        {/* Heading */}
        <h2 className="font-display font-bold text-stone-900 text-3xl lg:text-4xl leading-tight">
          {activity.title}
        </h2>

        <Separator className="bg-stone-100" />

        {/* Paragraphs */}
        <div className="flex flex-col gap-4">
          {activity.paragraphs.map((para, i) => (
            <p key={i} className="text-stone-600 text-[15px] leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Impact badges */}
        <div className="flex flex-wrap gap-2.5 pt-2">
          {activity.badges.map((badge) => (
            <Badge
              key={badge.label}
              variant="outline"
              className={cn(
                "px-3 py-1.5 text-xs font-semibold rounded-lg",
                badge.variant === "green"
                  ? "bg-brand-50 text-brand-800 border-brand-200"
                  : "bg-gold-50 text-gold-800 border-gold-300",
              )}
            >
              {badge.label}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── ActivitiesDetail ─────────────────────────────────────────────
export function ActivitiesDetail() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-24 lg:gap-32">
          {ACTIVITIES.map((activity) => (
            <ActivityFeature key={activity.number} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}