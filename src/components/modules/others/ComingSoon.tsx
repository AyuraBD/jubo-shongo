import Link from "next/link";
import { ArrowLeft, Clock, Mail, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function ComingSoonPage() {
  return (
    <main
      className={cn(
        "relative isolate overflow-hidden",
        "min-h-svh flex flex-col items-center justify-center",
        "hero-bg hero-glow pattern-overlay",
        "px-4 text-center",
      )}
    >
      {/* ── Decorative blurred circles ───────────────────── */}
      <div aria-hidden="true" className="absolute top-20 left-10 size-64 rounded-full bg-brand-500/5 blur-3xl" />
      <div aria-hidden="true" className="absolute bottom-20 right-10 size-80 rounded-full bg-gold-400/5 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-2xl mx-auto w-full">

        {/* Logo mark */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://i.ibb.co.com/mC1hDKhg/jubo-shongo-logo.png"
            className="max-h-24 dark:invert"
            alt="Logo"
          />
          <div className="flex flex-col items-start">
            <span className="text-lg font-semibold tracking-tighter text-white leading-none">
              West Shaheb Nagor
            </span>
            <span className="text-lg font-semibold tracking-tighter text-white leading-none">
              Noapur, Durgapur
            </span>
            <span className="text-lg text-white font-semibold tracking-tighter text-brand-600 leading-none">
              Jubo Shongo
            </span>
          </div>
        </Link>

        {/* Status badge */}
        <Badge
          variant="outline"
          className="gap-2 px-4 py-2 rounded-full bg-white/10 border-white/20 text-brand-400 text-xs font-semibold tracking-wide"
        >
          <Clock className="size-3 animate-spin [animation-duration:4s]" />
          Work in Progress
        </Badge>

        {/* Heading */}
        <div className="flex flex-col gap-4">
          <h1 className="font-display font-bold text-white text-balance leading-tight text-4xl sm:text-5xl lg:text-6xl">
            Something{" "}
            <em className="not-italic text-gold-400">Beautiful</em>
            <br />
            is Coming
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-md mx-auto">
            We&apos;re working hard to bring this page to life. Stay tuned —
            great things take a little time.
          </p>
        </div>

        {/* Thin divider */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Email notify form */}
        <div className="w-full max-w-sm flex flex-col gap-3">
          <p className="text-white/50 text-sm font-medium flex items-center justify-center gap-2">
            <Bell className="size-3.5" />
            Get notified when we launch
          </p>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="your@email.com"
              className={cn(
                "bg-white/10 border-white/20 text-white",
                "placeholder:text-white/30",
                "focus-visible:ring-brand-500 focus-visible:border-white/40",
              )}
            />
            <Button
              className={cn(
                "bg-gradient-to-r from-gold-500 to-gold-400",
                "hover:from-gold-600 hover:to-gold-500",
                "text-stone-900 font-bold shrink-0",
                "hover:-translate-y-px transition-all duration-300",
              )}
            >
              <Mail className="size-4" />
              Notify Me
            </Button>
          </div>
        </div>

        {/* Back to home button */}
        <Button
          asChild
          variant="outline"
          className={cn(
            "border-2 border-white/30 bg-transparent",
            "text-white hover:bg-white/10 hover:border-white/50 hover:text-white",
            "hover:-translate-y-0.5 transition-all duration-300",
            "rounded-xl px-6 h-11",
          )}
        >
          <Link href="/">
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
        </Button>

      </div>
    </main>
  );
}