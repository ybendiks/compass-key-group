"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/buy", label: "Buy" },
  { href: "/sell", label: "Sell" },
  { href: "/areas", label: "Areas", hasDropdown: true },
  { href: "/military-relocation", label: "Military" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const areaLinks = [
  { href: "/areas/elizabethtown", label: "Elizabethtown" },
  { href: "/areas/fort-knox", label: "Fort Knox" },
  { href: "/areas/radcliff", label: "Radcliff" },
  { href: "/areas/vine-grove", label: "Vine Grove" },
  { href: "/areas/bardstown", label: "Bardstown" },
  { href: "/areas/i65-corridor", label: "I-65 Corridor" },
  { href: "/areas/louisville", label: "Louisville" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [areasExpanded, setAreasExpanded] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo: Icon + Text Wordmark */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logos/logo-black-no-bg.png"
              alt=""
              width={40}
              height={40}
              className="h-10 lg:h-12 w-auto"
              priority
            />
            <div className="leading-none">
              <span className="block font-heading text-lg lg:text-xl font-bold text-navy tracking-tight">
                Compass & Key
              </span>
              <span className="block text-[11px] lg:text-xs uppercase tracking-[0.15em] text-navy/60 font-semibold mt-0.5">
                Group
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-base font-medium text-slate hover:text-navy hover:bg-cream rounded-md transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <svg
                      className="w-3.5 h-3.5 text-slate/50 group-hover:text-navy transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                  {/* Desktop Dropdown */}
                  <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[200px]">
                      <Link
                        href="/areas"
                        className="block px-4 py-2 text-sm font-semibold text-navy hover:bg-cream transition-colors"
                      >
                        All Areas
                      </Link>
                      <div className="border-t border-gray-100 my-1" />
                      {areaLinks.map((area) => (
                        <Link
                          key={area.href}
                          href={area.href}
                          className="block px-4 py-2 text-sm text-slate hover:text-navy hover:bg-cream transition-colors"
                        >
                          {area.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-base font-medium text-slate hover:text-navy hover:bg-cream rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+12707353897"
              className="text-base font-medium text-slate hover:text-navy transition-colors"
            >
              (270) 735-3897
            </a>
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-light text-white text-base font-semibold px-5 py-2.5 rounded-md transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate hover:text-navy"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href}>
                  <button
                    onClick={() => setAreasExpanded(!areasExpanded)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-base font-medium text-slate hover:text-navy hover:bg-cream rounded-md transition-colors"
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${areasExpanded ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {areasExpanded && (
                    <div className="pl-4 space-y-0.5 mt-1">
                      <Link
                        href="/areas"
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm font-semibold text-navy hover:bg-cream rounded-md transition-colors"
                      >
                        All Areas
                      </Link>
                      {areaLinks.map((area) => (
                        <Link
                          key={area.href}
                          href={area.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 text-sm text-slate hover:text-navy hover:bg-cream rounded-md transition-colors"
                        >
                          {area.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-base font-medium text-slate hover:text-navy hover:bg-cream rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3 mt-3 border-t border-gray-100">
              <a
                href="tel:+12707353897"
                className="block px-3 py-2.5 text-base font-medium text-slate"
              >
                (270) 735-3897
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block mt-2 bg-gold text-white text-center font-semibold px-5 py-3 rounded-md"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
