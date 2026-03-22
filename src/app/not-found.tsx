import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-svh flex flex-col items-center justify-center px-4 text-center bg-stone-50">

      {/* 404 number */}
      <p className="font-display font-bold text-[clamp(6rem,20vw,12rem)] leading-none text-stone-200 select-none">
        404
      </p>

      {/* Heading */}
      <h1 className="font-display font-bold text-stone-900 text-2xl sm:text-3xl mt-2 mb-4">
        Page Not Found
      </h1>

      {/* Sub-copy */}
      <p className="text-stone-500 text-base leading-relaxed max-w-sm mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      {/* Home link */}
      <Button
        asChild
        className="bg-brand-700 hover:bg-brand-800 text-white font-semibold rounded-xl px-6 h-11 transition-all duration-300 hover:-translate-y-px"
      >
        <Link href="/">
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>
      </Button>

    </main>
  );
}