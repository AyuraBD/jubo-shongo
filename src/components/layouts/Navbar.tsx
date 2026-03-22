"use client";

import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Accordion
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    register: {
      title: string;
      url: string;
    };
  }
}

const Navbar = ({
  logo = {
    url: "/",
    src: "https://i.ibb.co.com/mC1hDKhg/jubo-shongo-logo.png",
    alt: "logo",
    title: "Jubo Shongo",
  },
  menu = [
    { 
      title: "Home", 
      url: "/" 
    },
    {
      title: "About us", 
      url: "/about-us" 
    },
    { 
      title: "What we do", 
      url: "/what-we-do" 
    },
    {
      title: "Campaigns", 
      url: "/campaigns"
    },
    { 
      title: "Contact", 
      url: "/contact" 
    },
  ],
  auth = {
    login: { title: "Login", url: "/login" },
    register: { title: "Register", url: "/register" },
  },
  className,
}: Navbar1Props) => {
  return (
    <section className={cn("py-1 px-2", className)}>
      <div className="container mx-auto">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-24 dark:invert"
                alt={logo.alt}
              />
              <div className="flex flex-col items-start">
                <span className="text-lg font-semibold tracking-tighter text-stone-700 leading-none">
                  West Shaheb Nagor
                </span>
                <span className="text-lg font-semibold tracking-tighter text-stone-700 leading-none">
                  Noapur, Durgapur
                </span>
                <span className="text-lg text-gold-600 font-semibold tracking-tighter text-brand-600 leading-none">
                  Jubo Shongo
                </span>
              </div>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" className="rounded-sm px-4 h-8">
              <Link href={auth.login.url}>{auth.login.title}</Link>
            </Button>
            
            <Button
              asChild
              size="lg"
              className={cn(
                "bg-gradient-to-r from-gold-500 to-gold-400",
                "hover:from-gold-600 hover:to-gold-500",
                "text-stone-900 font-bold text-base",
                "shadow-[0_8px_24px_oklch(0.86_0.16_85/35%)]",
                "hover:shadow-[0_12px_32px_oklch(0.86_0.16_85/50%)]",
                "hover:-translate-y-0.5 transition-all duration-300",
                "rounded-sm px-4 h-8",
              )}
            >
              <Link href={auth.register.url}>{auth.register.title}</Link> 
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-18 dark:invert"
                alt={logo.alt}
              />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href={logo.url} className="flex items-center gap-2">
                      <img
                        src={logo.src}
                        className="max-h-18 dark:invert"
                        alt={logo.alt}
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button asChild size="lg" variant="outline" className="rounded-md h-10">
                      <Link href={auth.login.url}>{auth.login.title}</Link>
                    </Button>
                    {/* <Button asChild>
                      <Link href={auth.register.url}>{auth.register.title}</Link>
                    </Button> */}
                    <Button
                      asChild
                      size="lg"
                      className={cn(
                        "bg-gradient-to-r from-gold-500 to-gold-400",
                        "hover:from-gold-600 hover:to-gold-500",
                        "text-stone-900 font-bold text-base",
                        "shadow-[0_8px_24px_oklch(0.86_0.16_85/35%)]",
                        "hover:shadow-[0_12px_32px_oklch(0.86_0.16_85/50%)]",
                        "hover:-translate-y-0.5 transition-all duration-300",
                        "rounded-md h-10",
                      )}
                    >
                     <Link href={auth.register.url}>{auth.register.title}</Link> 
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink asChild
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        <Link href={item.url}>{item.title}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  return (
    <Link key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};

export { Navbar };
