import type { Metadata } from "next";
import { Geist_Mono, Playfair_Display, DM_Sans, Amiri } from "next/font/google";
import "./globals.css";

/* ── Keep Geist Mono for code blocks (your default) ── */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ── Add the three brand fonts ───────────────────────
   Each injects a CSS variable that globals.css reads:
     --font-display  → h1–h6, .font-display
     --font-sans     → body default text (DM Sans)
     --font-arabic   → .font-arabic
─────────────────────────────────────────────────── */
const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",    // ← replaces Geist Sans as the default body font
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jubo Shongo — Youth Community Foundation",
  description: "A youth-driven non-profit in Feni dedicated to uplifting the poor, " +
    "housing the homeless, building mosques, and strengthening community " +
    "through faith and collective action."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${playfair.variable}
        ${dmSans.variable}
        ${amiri.variable}
        ${geistMono.variable}
        h-full antialiased
      `}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}