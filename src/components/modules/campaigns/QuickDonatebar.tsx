"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// ─── Types ──────────────────────────────────────────────────────
type AmountOption = number | "custom";

// ─── Data ───────────────────────────────────────────────────────
const PRESET_AMOUNTS: number[] = [500, 1000, 2500, 5000];

// ─── QuickDonateBar ──────────────────────────────────────────────
export function QuickDonateBar() {
  const [selected, setSelected]   = useState<AmountOption>(500);
  const [customVal, setCustomVal] = useState<string>("");

  // Resolved amount for the donate button label
  const resolvedAmount: number | null =
    selected === "custom"
      ? customVal ? Number(customVal) : null
      : selected;

  const donateLabel =
    resolvedAmount && resolvedAmount > 0
      ? `Donate ৳${resolvedAmount.toLocaleString("en-BD")} Now`
      : "Enter an Amount";

  function handlePreset(amount: number) {
    setSelected(amount);
    setCustomVal("");
  }

  function handleCustomChange(val: string) {
    setCustomVal(val.replace(/\D/g, "")); // digits only
    setSelected("custom");
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "bg-gradient-to-r from-brand-800 to-brand-700",
        "py-12 px-4 text-center",
      )}
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(16,185,129,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-6">

        {/* Heading */}
        <div className="flex flex-col gap-2">
          <h2 className="font-display font-bold text-white text-2xl sm:text-3xl leading-tight">
            Make a General Donation
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            Can&apos;t pick a campaign? Donate to our general fund — we&apos;ll
            allocate to the most urgent needs.
          </p>
        </div>

        {/* Preset amount buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {PRESET_AMOUNTS.map((amount) => {
            const isActive = selected === amount;
            return (
              <Button
                key={amount}
                variant="outline"
                onClick={() => handlePreset(amount)}
                className={cn(
                  "px-6 h-11 font-bold text-[15px] rounded-xl",
                  "border-2 transition-all duration-200",
                  isActive
                    ? cn(
                        "bg-gold-500 border-gold-500 text-stone-900",
                        "shadow-[0_4px_14px_oklch(0.86_0.16_85/40%)]",
                        "hover:bg-gold-400 hover:border-gold-400",
                      )
                    : cn(
                        "bg-transparent border-white/30 text-white",
                        "hover:bg-white/10 hover:border-white/50 hover:text-white",
                      ),
                )}
              >
                ৳{amount.toLocaleString("en-BD")}
              </Button>
            );
          })}

          {/* Custom input — acts as its own "button" */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 font-bold text-sm pointer-events-none">
              ৳
            </span>
            <Input
              type="text"
              inputMode="numeric"
              placeholder="Custom"
              value={customVal}
              onChange={(e) => handleCustomChange(e.target.value)}
              onFocus={() => setSelected("custom")}
              className={cn(
                "pl-7 h-11 w-32 rounded-xl font-bold text-[15px]",
                "bg-transparent text-white placeholder:text-white/40",
                "border-2 transition-all duration-200",
                selected === "custom" && customVal
                  ? "border-gold-400 bg-white/10"
                  : "border-white/30 hover:border-white/50",
                "focus-visible:ring-0 focus-visible:border-gold-400 focus-visible:bg-white/10",
              )}
            />
          </div>
        </div>

        {/* Donate button */}
        <Button
          size="lg"
          disabled={!resolvedAmount || resolvedAmount <= 0}
          className={cn(
            "bg-gradient-to-r from-gold-500 to-gold-400",
            "hover:from-gold-600 hover:to-gold-500",
            "text-stone-900 font-bold text-base",
            "px-10 h-12 rounded-xl",
            "shadow-[0_8px_24px_oklch(0.86_0.16_85/35%)]",
            "hover:shadow-[0_12px_32px_oklch(0.86_0.16_85/50%)]",
            "hover:-translate-y-0.5 transition-all duration-300",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0",
          )}
        >
          <Heart className="size-4 fill-stone-900 shrink-0" />
          {donateLabel}
        </Button>
      </div>
    </div>
  );
}