"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// ─── Data ───────────────────────────────────────────────────────
const CONTACT_INFO = [
  {
    icon:  MapPin,
    title: "Our Location",
    lines: [
      "West Shaheb Nagor, Shubar Bazar, Parshuram",
      "Feni District, Bangladesh – 3941",
    ],
  },
  {
    icon:  Phone,
    title: "Phone & WhatsApp",
    lines: ["+880 1712-345678", "Available Sat–Thu, 9am–6pm"],
  },
  {
    icon:  Mail,
    title: "Email",
    lines: ["info@nuralummah.org", "donations@nuralummah.org"],
  },
];

const VOLUNTEER_ROLES = [
  "Food distribution teams",
  "Campaign management",
  "Social media & outreach",
  "Construction project teams",
];

const INQUIRY_OPTIONS = [
  "Volunteer with the organization",
  "Make a donation inquiry",
  "Partner or collaborate",
  "Submit a campaign request",
  "Media / press inquiry",
  "Other",
];

// ─── ContactInfo (left column) ───────────────────────────────────
function ContactInfo() {
  return (
    <div className="flex flex-col gap-10">

      {/* Section label + heading */}
      <div>
        <span
          className={cn(
            "inline-block px-4 py-1.5 rounded-full mb-4",
            "bg-brand-50 border border-brand-100",
            "text-brand-700 text-xs font-semibold uppercase tracking-widest",
          )}
        >
          Contact Information
        </span>
        <h2 className="font-display font-bold text-stone-900 text-4xl sm:text-5xl leading-tight">
          Let&apos;s Work{" "}
          <em className="not-italic text-brand-700">Together</em>
        </h2>
      </div>

      {/* Contact detail rows */}
      <div className="flex flex-col gap-6">
        {CONTACT_INFO.map(({ icon: Icon, title, lines }) => (
          <div key={title} className="flex items-start gap-4">
            {/* Icon box */}
            <div className="size-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
              <Icon className="size-5 text-brand-700" />
            </div>
            <div>
              <p className="font-semibold text-stone-900 text-sm mb-1">
                {title}
              </p>
              {lines.map((line) => (
                <p key={line} className="text-sm text-stone-600 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Separator className="bg-stone-100" />

      {/* Volunteer card */}
      <Card className="border border-brand-100 bg-brand-50 rounded-2xl shadow-none">
        <CardHeader className="pb-2">
          <CardTitle className="font-display text-xl text-brand-900">
            Become a Volunteer
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-sm text-stone-600 leading-relaxed">
            Join 340+ volunteers making a real difference in Feni. Whether you
            have 2 hours or 20 — we have a role for you.
          </p>
          <ul className="flex flex-col gap-2.5">
            {VOLUNTEER_ROLES.map((role) => (
              <li
                key={role}
                className="flex items-center gap-2.5 text-sm text-brand-800 font-medium"
              >
                <CheckCircle2 className="size-4 text-brand-600 shrink-0" />
                {role}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

    </div>
  );
}

// ─── ContactForm (right column) ──────────────────────────────────
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate API call — replace with your real submit logic
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  if (submitted) {
    return (
      <Card className="border border-stone-200 rounded-3xl shadow-lg h-full">
        <CardContent className="flex flex-col items-center justify-center gap-5 py-20 text-center">
          <div className="size-16 rounded-full bg-brand-50 flex items-center justify-center">
            <CheckCircle2 className="size-8 text-brand-600" />
          </div>
          <div>
            <p className="font-arabic text-2xl text-brand-700 mb-2">
              جَزَاكَ اللَّهُ خَيْرًا
            </p>
            <h3 className="font-display font-bold text-stone-900 text-xl mb-2">
              Message Sent!
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
              We&apos;ll get back to you within 24 hours, insha&apos;Allah.
            </p>
          </div>
          <Button
            variant="outline"
            className="border-brand-200 text-brand-700 hover:bg-brand-50 rounded-xl"
            onClick={() => setSubmitted(false)}
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border border-stone-200 rounded-3xl shadow-lg">
      <CardHeader className="pb-2 pt-8 px-8">
        <CardTitle className="font-display text-2xl text-stone-900">
          Send Us a Message
        </CardTitle>
      </CardHeader>

      <CardContent className="px-8 pb-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* First + Last name row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="first-name" className="text-xs font-semibold text-stone-700 uppercase tracking-wide">
                First Name
              </Label>
              <Input
                id="first-name"
                placeholder="Rafiq"
                required
                className="border-2 border-stone-200 rounded-xl focus-visible:border-brand-400 focus-visible:ring-0 h-11"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="last-name" className="text-xs font-semibold text-stone-700 uppercase tracking-wide">
                Last Name
              </Label>
              <Input
                id="last-name"
                placeholder="Hossain"
                required
                className="border-2 border-stone-200 rounded-xl focus-visible:border-brand-400 focus-visible:ring-0 h-11"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email" className="text-xs font-semibold text-stone-700 uppercase tracking-wide">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="rafiq@example.com"
              required
              className="border-2 border-stone-200 rounded-xl focus-visible:border-brand-400 focus-visible:ring-0 h-11"
            />
          </div>

          {/* Phone (optional) */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="phone" className="text-xs font-semibold text-stone-700 uppercase tracking-wide">
              Phone{" "}
              <span className="text-stone-400 normal-case font-normal">(optional)</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+880 01X-XXXXXXXX"
              className="border-2 border-stone-200 rounded-xl focus-visible:border-brand-400 focus-visible:ring-0 h-11"
            />
          </div>

          {/* shadcn Select — I Want To */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-xs font-semibold text-stone-700 uppercase tracking-wide">
              I Want To
            </Label>
            <Select>
              <SelectTrigger className="border-2 border-stone-200 rounded-xl focus:border-brand-400 focus:ring-0 h-11">
                <SelectValue placeholder="Select a reason…" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                {INQUIRY_OPTIONS.map((opt) => (
                  <SelectItem key={opt} value={opt} className="rounded-lg">
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="message" className="text-xs font-semibold text-stone-700 uppercase tracking-wide">
              Message
            </Label>
            <Textarea
              id="message"
              rows={5}
              placeholder="Tell us how you'd like to get involved or what you need…"
              required
              className="border-2 border-stone-200 rounded-xl focus-visible:border-brand-400 focus-visible:ring-0 resize-none"
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className={cn(
              "w-full font-bold text-base rounded-xl h-12",
              "bg-gradient-to-r from-brand-700 to-brand-600",
              "hover:from-brand-800 hover:to-brand-700",
              "text-white shadow-lg shadow-brand-900/20",
              "hover:-translate-y-px transition-all duration-300",
              "disabled:opacity-60 disabled:cursor-not-allowed",
            )}
          >
            {loading ? (
              "Sending…"
            ) : (
              <>
                <Send className="size-4 shrink-0" />
                Send Message
              </>
            )}
          </Button>

        </form>
      </CardContent>
    </Card>
  );
}

// ─── ContactSection ──────────────────────────────────────────────
export function ContactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-20 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}