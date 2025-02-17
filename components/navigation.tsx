"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { HomeIcon, Phone, Menu, X } from "lucide-react";

const routes = [
  {
    href: "/",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/about",
    label: "About Us",
  },
  {
    href: "/contact",
    label: "Contact",
  },
] as const;

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 text-primary" />
            <span className="font-bold">JARV Consulting</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
        >
          <span className="sr-only">Open menu</span>
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="/contact" className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Get in Touch</span>
            </Link>
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b shadow-lg">
            <div className="container py-4 space-y-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block text-sm font-medium transition-colors hover:text-primary",
                    pathname === route.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {route.label}
                </Link>
              ))}
              <Button asChild className="w-full">
                <Link href="/contact" className="flex items-center justify-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Get in Touch</span>
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}