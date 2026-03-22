import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// ─── Data ────────────────────────────────────────────────────────
const CARDS = [
  {
    id:        "mission",
    icon:      "🎯",
    badge:     "Our Mission",
    title:     "To Serve, Uplift & Unite Our Community",
    body:      "Our mission is to alleviate poverty, homelessness, and social inequality through direct community service, transparent fundraising, religious development, and youth-led initiatives — guided by the principles of Islamic brotherhood and human dignity.",
    // dark emerald styling
    cardCn:    "border-0 bg-gradient-to-br from-brand-900 to-brand-800 shadow-2xl shadow-brand-900/30",
    badgeCn:   "bg-brand-700/50 text-brand-300 border-brand-600/40 hover:bg-brand-700/50",
    titleCn:   "text-white",
    bodyCn:    "text-white/70",
    separatorCn: "bg-white/10",
    decor1Cn:  "bg-white/5",
    decor2Cn:  "bg-white/5",
  },
  {
    id:        "vision",
    icon:      "🌅",
    badge:     "Our Vision",
    title:     "A Community Where No One is Left Behind",
    body:      "We envision a Bangladesh where every family has food, shelter, and dignity — where mosques are centers of learning and light, where youth lead with purpose, and where compassion is the foundation of every community.",
    // rich gold — white text on dark gold for strong contrast
    cardCn:    "border-0 bg-gradient-to-br from-gold-600 to-gold-500 shadow-2xl shadow-gold-600/40",
    badgeCn:   "bg-white/20 text-white border-white/30 hover:bg-white/20",
    titleCn:   "text-white",
    bodyCn:    "text-white/80",
    separatorCn: "bg-white/30",      // white on gold = always visible
    decor1Cn:  "bg-gray-200/20",  // negative z-index keeps circles behind text
    decor2Cn:  "bg-gray-200/20",
  },
] as const;

// ─── MissionVision ───────────────────────────────────────────────
export function MissionVision() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CARDS.map((card) => (
            <Card
              key={card.id}
              className={cn(
                "relative overflow-hidden rounded-3xl",
                card.cardCn,
              )}
            >
              <CardHeader className="p-5 sm:p-5 pb-0">
                {/* Icon */}
                <div className="text-5xl mb-5 select-none" aria-hidden="true">
                  {card.icon}
                </div>

                {/* shadcn Badge */}
                <Badge
                  variant="outline"
                  className={cn(
                    "w-fit mb-3 text-xs font-bold uppercase tracking-[2.5px]",
                    card.badgeCn,
                  )}
                >
                  {card.badge}
                </Badge>

                {/* shadcn CardTitle */}
                <CardTitle
                  className={cn(
                    "font-display text-2xl sm:text-3xl leading-snug font-bold",
                    card.titleCn,
                  )}
                >
                  {card.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="p-5 sm:p-5 pt-6">
                {/* shadcn Separator */}
                <Separator className={cn("mb-6", card.separatorCn)} />

                {/* shadcn CardDescription repurposed as body */}
                <CardDescription
                  className={cn("text-[15px] leading-relaxed", card.bodyCn)}
                >
                  {card.body}
                </CardDescription>
              </CardContent>

              {/* Decorative circles — z-0 keeps them behind all card content */}
              <div
                aria-hidden="true"
                className={cn(
                  "absolute -bottom-10 -right-10 size-40 rounded-full z-0",
                  card.decor1Cn,
                )}
              />
              <div
                aria-hidden="true"
                className={cn(
                  "absolute -bottom-4 -right-4 size-24 rounded-full z-0",
                  card.decor2Cn,
                )}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}