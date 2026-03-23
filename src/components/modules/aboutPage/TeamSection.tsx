"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// ─── Types ──────────────────────────────────────────────────────
type MemberGroup = "founder" | "advisor" | "committee" | "volunteer";

interface SocialLink {
  platform: "facebook" | "instagram" | "linkedin" | "twitter" | "phone" | "email";
  href: string;
}

interface TeamMember {
  id:       string;
  name:     string;
  role:     string;
  bio:      string;
  photo:    string;       // image URL or path
  group:    MemberGroup;
  joinYear: number;
  location: string;
  skills:   string[];
  socials:  SocialLink[];
}

// ─── Social icon map ─────────────────────────────────────────────
const SOCIAL_ICONS = {
  facebook:  { icon: Facebook,  color: "hover:bg-[#1877F2]",  shadow: "hover:shadow-[0_0_12px_rgba(24,119,242,0.5)]"  },
  instagram: { icon: Instagram, color: "hover:bg-[#E1306C]",  shadow: "hover:shadow-[0_0_12px_rgba(225,48,108,0.5)]"  },
  linkedin:  { icon: Linkedin,  color: "hover:bg-[#0A66C2]",  shadow: "hover:shadow-[0_0_12px_rgba(10,102,194,0.5)]"  },
  twitter:   { icon: Twitter,   color: "hover:bg-[#1DA1F2]",  shadow: "hover:shadow-[0_0_12px_rgba(29,161,242,0.5)]"  },
  phone:     { icon: Phone,     color: "hover:bg-brand-600",  shadow: "hover:shadow-[0_0_12px_rgba(5,150,105,0.5)]"   },
  email:     { icon: Mail,      color: "hover:bg-stone-600",  shadow: "hover:shadow-[0_0_12px_rgba(87,83,78,0.5)]"    },
};

// ─── Group config ────────────────────────────────────────────────
const GROUP_CONFIG: Record<
  MemberGroup,
  { label: string; badgeCn: string; description: string }
> = {
  founder: {
    label:       "Founders",
    badgeCn:     "bg-gold-100 text-gold-700 border-gold-300",
    description: "The visionaries who started it all",
  },
  advisor: {
    label:       "Advisors",
    badgeCn:     "bg-brand-50 text-brand-700 border-brand-200",
    description: "Experienced guides shaping our direction",
  },
  committee: {
    label:       "Committee",
    badgeCn:     "bg-blue-50 text-blue-700 border-blue-200",
    description: "Dedicated members running our programs",
  },
  volunteer: {
    label:       "Volunteers",
    badgeCn:     "bg-purple-50 text-purple-700 border-purple-200",
    description: "The heart and hands of our work",
  },
};

// ─── Sample data — replace with your real data / API ────────────
const TEAM_MEMBERS: TeamMember[] = [
  {
    id:       "1",
    name:     "Abdus Sobhan Liton",
    role:     "Founder & President",
    bio:      "Passionate about community development, Liton founded Unity of Strength in 2024 with a vision to uplift every family in Feni district through faith-driven service.",
    photo:    "https://i.ibb.co.com/ccQFsBt2/member-1.jpg",
    group:    "founder",
    joinYear: 2024,
    location: "West Shaheb Nagor, Feni",
    skills:   ["Leadership", "Fundraising", "Community Outreach"],
    socials:  [
      { platform: "facebook",  href: "https://facebook.com" },
      { platform: "instagram", href: "https://instagram.com" },
      { platform: "email",     href: "mailto:ayub@example.org" },
    ],
  },
  {
    id:       "2",
    name:     "Abul Hashem",
    role:     "Co-Founder & Secretary",
    bio:      "Abul Hashem oversees all community programs and ensures every initiative is delivered with transparency and care for those we serve.",
    photo:    "https://i.ibb.co.com/4n134fTS/member-2.jpg",
    group:    "founder",
    joinYear: 2024,
    location: "Durgapur, Feni",
    skills:   ["Program Management", "Communication", "Volunteer Coordination"],
    socials:  [
      { platform: "facebook", href: "https://facebook.com" },
      { platform: "phone",    href: "tel:+8801234567890" },
    ],
  },
  {
    id:       "3",
    name:     "Hafez Abdul Karim",
    role:     "Religious Advisor",
    bio:      "Hafez Karim brings decades of Islamic scholarship to guide our religious programs, ensuring all activities are aligned with Quran and Sunnah.",
    photo:    "",
    group:    "advisor",
    joinYear: 2024,
    location: "Durgapur, Feni",
    skills:   ["Islamic Studies", "Community Guidance", "Youth Mentorship"],
    socials:  [
      { platform: "phone", href: "tel:+8801234567891" },
      { platform: "email", href: "mailto:karim@example.org" },
    ],
  },
  {
    id:       "4",
    name:     "Rahul Ahmed",
    role:     "Finance Advisor",
    bio:      "A chartered accountant by profession, Rahul ensures all funds are managed transparently and every taka is accounted for in our public reports.",
    photo:    "",
    group:    "advisor",
    joinYear: 2024,
    location: "Parshuram, Feni",
    skills:   ["Finance", "Accounting", "Transparency Reports"],
    socials:  [
      { platform: "linkedin", href: "https://linkedin.com" },
      { platform: "email",    href: "mailto:rahul@example.org" },
    ],
  },
  {
    id:       "5",
    name:     "Kamal Hossain",
    role:     "Head of Housing Committee",
    bio:      "Kamal leads our housing rehabilitation program, coordinating construction teams and ensuring displaced families receive safe, dignified shelter.",
    photo:    "",
    group:    "committee",
    joinYear: 2024,
    location: "West Shaheb Nagor, Feni",
    skills:   ["Construction", "Project Management", "Field Operations"],
    socials:  [
      { platform: "facebook", href: "https://facebook.com" },
      { platform: "phone",    href: "tel:+8801234567892" },
    ],
  },
  {
    id:       "6",
    name:     "Nusrat Jahan",
    role:     "Head of Food Programs",
    bio:      "Nusrat coordinates our weekly food distribution drives across Feni, managing over 50 volunteers and ensuring no family goes to bed hungry.",
    photo:    "",
    group:    "committee",
    joinYear: 2024,
    location: "Noapur, Feni",
    skills:   ["Logistics", "Volunteer Management", "Community Relations"],
    socials:  [
      { platform: "instagram", href: "https://instagram.com" },
      { platform: "email",     href: "mailto:nusrat@example.org" },
    ],
  },
  {
    id:       "7",
    name:     "Rahim Uddin",
    role:     "Sports & Events Lead",
    bio:      "Rahim organises our annual sports tournaments and community events, bringing youth together through healthy competition and cultural celebration.",
    photo:    "",
    group:    "committee",
    joinYear: 2024,
    location: "Durgapur, Feni",
    skills:   ["Event Management", "Sports Coordination", "Youth Engagement"],
    socials:  [
      { platform: "facebook",  href: "https://facebook.com" },
      { platform: "instagram", href: "https://instagram.com" },
    ],
  },
  {
    id:       "8",
    name:     "Sumaiya Islam",
    role:     "Lead Volunteer",
    bio:      "Sumaiya has contributed over 200 volunteer hours since joining, leading mosque renovation crews and tutoring children in Quran recitation.",
    photo:    "",
    group:    "volunteer",
    joinYear: 2024,
    location: "West Shaheb Nagor, Feni",
    skills:   ["Quran Teaching", "Construction Support", "Community Care"],
    socials:  [
      { platform: "facebook", href: "https://facebook.com" },
    ],
  },
];

// ─── SocialButton ────────────────────────────────────────────────
function SocialButton({ social }: { social: SocialLink }) {
  const config = SOCIAL_ICONS[social.platform];
  const Icon = config.icon;

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "size-8 rounded-lg flex items-center justify-center",
              "bg-stone-100 border border-stone-200",
              "text-stone-500 hover:text-white",
              "transition-all duration-300 hover:-translate-y-0.5",
              "hover:border-transparent",
              config.color,
              config.shadow,
            )}
          >
            <Icon className="size-3.5" />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="text-xs capitalize">
          {social.platform}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

// ─── MemberCard ──────────────────────────────────────────────────
function MemberCard({ member }: { member: TeamMember }) {
  const groupConfig = GROUP_CONFIG[member.group];

  return (
    <Card
      className={cn(
        "py-0 pb-4 group overflow-hidden border border-stone-200 bg-white rounded-2xl",
        "hover:border-brand-200 hover:shadow-xl hover:-translate-y-1",
        "transition-all duration-300 flex flex-col",
      )}
    >
      {/* ── Photo area ─────────────────────────────────────── */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-brand-50 to-brand-100 shrink-0">
        {member.photo ? <img
          src={member.photo}
          alt={member.name}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // fallback to initials if image not found
            (e.target as HTMLImageElement).style.display = "none";
          }}
        /> : 
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-5xl font-bold text-brand-300 select-none">
            {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </span>
        </div>
        }        

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Social links — slide up on hover */}
        <div
          className={cn(
            "absolute bottom-0 inset-x-0 flex items-center justify-center gap-2 p-4",
            "translate-y-full group-hover:translate-y-0",
            "transition-transform duration-300",
          )}
        >
          {member.socials.map((social) => (
            <SocialButton key={social.platform} social={social} />
          ))}
        </div>

        {/* Group badge */}
        <Badge
          variant="outline"
          className={cn(
            "absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wide",
            groupConfig.badgeCn,
          )}
        >
          {groupConfig.label}
        </Badge>
      </div>

      {/* ── Content ────────────────────────────────────────── */}
      <CardHeader className="pb-1 pt-5">
        <CardTitle className="font-display text-lg text-stone-900 leading-tight group-hover:text-brand-700 transition-colors">
          {member.name}
        </CardTitle>
        <CardDescription className="text-brand-600 font-semibold text-sm">
          {member.role}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 flex-1">
        {/* Location + join year */}
        <div className="flex items-center justify-between text-xs text-stone-400">
          <span>📍 {member.location}</span>
          <span>Since {member.joinYear}</span>
        </div>

        <Separator className="bg-stone-100" />

        {/* Bio */}
        <CardDescription className="text-sm text-stone-500 leading-relaxed line-clamp-3">
          {member.bio}
        </CardDescription>

        {/* Skill badges */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {member.skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-[10px] font-medium bg-stone-100 text-stone-600 hover:bg-brand-50 hover:text-brand-700 transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// ─── TeamSection ─────────────────────────────────────────────────
export function TeamSection() {
  const groups = Object.entries(GROUP_CONFIG) as [MemberGroup, typeof GROUP_CONFIG[MemberGroup]][];

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
            Our People
          </span>

          <h2 className="font-display font-bold text-stone-900 text-4xl sm:text-5xl leading-tight mb-4">
            The Team Behind{" "}
            <em className="not-italic text-brand-700">Every Impact</em>
          </h2>

          <p className="text-stone-500 text-lg leading-relaxed max-w-xl mx-auto">
            Meet the dedicated individuals who give their time, skills, and
            hearts to serve our community every single day.
          </p>
        </div>

        {/* shadcn Tabs — one per group */}
        <Tabs defaultValue="founder" className="w-full">

          {/* Tab list */}
          <TabsList className="flex flex-wrap h-auto gap-2 bg-stone-100 p-1.5 rounded-xl mb-10 w-fit mx-auto">
            {groups.map(([key, config]) => {
              const count = TEAM_MEMBERS.filter((m) => m.group === key).length;
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className={cn(
                    "rounded-lg px-5 py-2 text-sm font-semibold",
                    "data-[state=active]:bg-white data-[state=active]:shadow-sm",
                    "data-[state=active]:text-brand-700",
                  )}
                >
                  {config.label}
                  <Badge
                    variant="secondary"
                    className="ml-2 text-[10px] font-bold bg-brand-100 text-brand-700 px-1.5"
                  >
                    {count}
                  </Badge>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Tab panels */}
          {groups.map(([key, config]) => {
            const members = TEAM_MEMBERS.filter((m) => m.group === key);
            return (
              <TabsContent key={key} value={key}>
                {/* Group description */}
                <p className="text-center text-stone-400 text-sm mb-8 italic">
                  {config.description}
                </p>

                {/* Members grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {members.map((member) => (
                    <MemberCard key={member.id} member={member} />
                  ))}
                </div>
              </TabsContent>
            );
          })}

        </Tabs>

      </div>
    </section>
  );
}