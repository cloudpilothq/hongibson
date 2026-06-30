"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Manifesto", href: "/manifesto" },
  { title: "News", href: "/news" },
  { title: "Events", href: "/events" },
  { title: "Media", href: "/media" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border shadow-sm py-3"
          : "bg-background/80 backdrop-blur-sm border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg font-heading font-bold text-xl tracking-tight group-hover:bg-primary/90 transition-colors">
            GA
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg leading-none text-foreground">
              Gibson Akporehe
            </span>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider mt-1">
              For House of Reps
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary font-semibold" : "text-foreground/80"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/get-involved" className={buttonVariants({ className: "bg-primary hover:bg-primary/90 text-white" })}>
            Get Involved
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="text-foreground" />}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] flex flex-col p-0 border-l-0 shadow-2xl">
              <div className="p-6 md:p-8 border-b border-border/50 bg-muted/10">
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-white font-black text-2xl px-3 py-1.5 rounded-lg shadow-sm">GA</div>
                  <div className="leading-tight">
                    <span className="block font-heading font-black text-xl text-foreground">Gibson Akporehe</span>
                    <span className="block text-xs font-bold text-primary uppercase tracking-widest mt-0.5">2027 Campaign</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col p-6 md:p-8 overflow-y-auto flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-3xl md:text-4xl font-heading font-bold py-4 border-b border-border/30 transition-all hover:text-primary hover:pl-4 ${
                      pathname === link.href ? "text-primary border-primary/30 pl-2" : "text-foreground/80"
                    }`}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              
              <div className="mt-auto p-6 md:p-8 bg-muted/10 border-t border-border/50">
                <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4 text-center">Join the Movement</p>
                <Link href="/get-involved" onClick={() => setIsOpen(false)} className={buttonVariants({ size: "lg", className: "w-full bg-primary hover:bg-primary/90 text-white font-bold text-xl h-16 shadow-xl" })}>
                  Get Involved
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
