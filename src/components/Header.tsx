"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-lg shadow-background/50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between h-24 pb-3">
          {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group self-center">
              <img
                src="/midas-logo.png"
                alt="Midas Markets Logo"
                className="w-16 h-16 rounded-xl shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-all duration-300"
              />
              <span className="text-2xl font-bold text-foreground">Midas Markets</span>
            </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-end gap-1">
            {[
              { href: "/trading", label: "Trading" },
              { href: "/platforms", label: "Platforms" },
              { href: "/markets", label: "Markets" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-base font-semibold text-muted-foreground hover:text-foreground transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-6 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-end gap-3">
            <Link href="/login">
              <Button variant="ghost" className="text-base font-semibold text-muted-foreground hover:text-foreground px-5 py-2">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 px-5 py-2">
                Open Account
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border/50 bg-background/95 backdrop-blur-xl">
            <nav className="flex flex-col gap-1">
              {[
                { href: "/trading", label: "Trading" },
                { href: "/platforms", label: "Platforms" },
                { href: "/markets", label: "Markets" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-4 mt-4 border-t border-border/50">
                <Link href="/login" className="flex-1">
                  <Button variant="outline" className="w-full">Login</Button>
                </Link>
                <Link href="/register" className="flex-1">
                  <Button className="w-full bg-primary text-primary-foreground shadow-lg shadow-primary/25">Open Account</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
