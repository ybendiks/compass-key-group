import Link from "next/link";
import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import PropertyCard from "@/components/PropertyCard";
import { listings } from "@/data/listings";

export const metadata: Metadata = {
  title: "Buy a Home in Elizabethtown KY",
  description:
    "Search homes for sale in Elizabethtown, Fort Knox, Radcliff, and Central Kentucky. Compass & Key Group helps buyers find their perfect home with expert guidance.",
  openGraph: {
    title: "Buy a Home in Elizabethtown KY | Compass & Key Group",
    description:
      "Search homes for sale in Elizabethtown, Fort Knox, and Central Kentucky. Expert guidance from a veteran-owned brokerage.",
    type: "website",
    locale: "en_US",
    siteName: "Compass & Key Group",
  },
};

const buyerSteps = [
  {
    number: 1,
    title: "Get Pre-Approved",
    description:
      "Work with a trusted lender to understand your budget and get pre-approved. This shows sellers you're a serious, qualified buyer.",
  },
  {
    number: 2,
    title: "Find Your Home",
    description:
      "Search listings, tour properties, and attend showings with your agent. We'll help you identify the right home for your lifestyle and needs.",
  },
  {
    number: 3,
    title: "Make an Offer",
    description:
      "When you find the one, we'll craft a competitive offer and negotiate terms on your behalf. We guide you through inspections and appraisals.",
  },
  {
    number: 4,
    title: "Close & Move In",
    description:
      "Complete your final walkthrough, sign the closing documents, and get the keys to your new home. Welcome home!",
  },
];

export default function BuyPage() {
  return (
    <>
      {/* ───────────────────── Hero Section ───────────────────── */}
      <section className="hero-gradient relative min-h-[420px] flex items-center">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <AnimateOnScroll>
            <p className="text-gold-light font-body text-sm uppercase tracking-[0.2em] mb-4">
              Elizabethtown &middot; Fort Knox &middot; Central KY
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 max-w-3xl mx-auto">
              Find Your Perfect Home
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="font-body text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Browse available properties across Central Kentucky. From cozy
              starter homes to spacious family estates, your next chapter starts
              here.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ───────────── MLS Search Widget Placeholder ───────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="bg-cream rounded-2xl border border-gray-200 overflow-hidden">
              {/* Search Bar Mockup */}
              <div className="bg-white border-b border-gray-200 p-6 lg:p-8">
                <h2 className="font-heading text-2xl text-navy mb-6 text-center">
                  Search Properties
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 border border-gray-200 rounded-md px-4 py-3">
                      <p className="text-xs text-gray-400 mb-0.5 font-body">
                        Location
                      </p>
                      <p className="text-sm text-gray-500 font-body">
                        Elizabethtown, KY
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="bg-gray-50 border border-gray-200 rounded-md px-4 py-3">
                      <p className="text-xs text-gray-400 mb-0.5 font-body">
                        Price Range
                      </p>
                      <p className="text-sm text-gray-500 font-body">
                        $150k &ndash; $500k
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="bg-gray-50 border border-gray-200 rounded-md px-4 py-3">
                      <p className="text-xs text-gray-400 mb-0.5 font-body">
                        Beds
                      </p>
                      <p className="text-sm text-gray-500 font-body">
                        Any
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="bg-gray-50 border border-gray-200 rounded-md px-4 py-3">
                      <p className="text-xs text-gray-400 mb-0.5 font-body">
                        Baths
                      </p>
                      <p className="text-sm text-gray-500 font-body">
                        Any
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="bg-gold/20 border border-gold/30 rounded-md px-4 py-3 flex items-center justify-center gap-2">
                      <svg
                        className="w-4 h-4 text-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <p className="text-sm font-semibold text-gold font-body">
                        Search
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coming Soon Notice */}
              <div className="p-8 lg:p-10 text-center">
                <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-7 h-7 text-navy"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-navy mb-3">
                  Full MLS Property Search Coming Soon
                </h3>
                <p className="font-body text-gray-500 max-w-xl mx-auto leading-relaxed mb-6">
                  Our integrated MLS search is on the way. In the meantime,
                  browse our featured listings below or contact us directly for
                  the latest available homes in your area.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold px-6 py-3 rounded-md transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Ask Us About Available Homes
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ───────────────── Featured Listings Grid ───────────────── */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-4">
                Featured Properties
              </h2>
              <p className="font-body text-gray-500 max-w-2xl mx-auto">
                Explore our current selection of homes across Elizabethtown,
                Fort Knox, and the surrounding area.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing, index) => (
              <AnimateOnScroll key={listing.id} delay={(index % 3) * 100}>
                <PropertyCard listing={listing} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Buyer's Guide ───────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-4">
                Your Path to Homeownership
              </h2>
              <p className="font-body text-gray-500 max-w-2xl mx-auto">
                Buying a home is one of life&apos;s biggest milestones.
                Here&apos;s how we make the process smooth and stress-free.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {buyerSteps.map((step, index) => (
              <AnimateOnScroll key={step.number} delay={index * 100}>
                <div className="relative text-center lg:text-left">
                  {/* Connector line (desktop only) */}
                  {index < buyerSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-32px)] h-px bg-gray-200" />
                  )}

                  {/* Step number */}
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-5 relative z-10">
                    <span className="font-heading text-2xl text-white">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl text-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-gray-500 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Budget Calculator Teaser ─────────── */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="bg-white rounded-2xl border border-gray-100 p-10 lg:p-14 text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-4">
                Wondering What You Can Afford?
              </h2>
              <p className="font-body text-gray-500 max-w-xl mx-auto leading-relaxed mb-8">
                Understanding your budget is the first step toward
                homeownership. Let us connect you with trusted lenders and
                provide personalized guidance based on your financial goals
                &mdash; including VA loan options for veterans and active
                military.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-white font-semibold px-8 py-4 rounded-md text-lg transition-colors"
              >
                Get Personalized Guidance
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ───────────────── CTA Banner ───────────────── */}
      <section className="hero-gradient py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl sm:text-4xl text-white mb-6">
              Ready to Start Your Search?
            </h2>
            <p className="font-body text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Our team is standing by to help you find the perfect home in
              Central Kentucky. Reach out today and let&apos;s get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-white font-semibold px-8 py-4 rounded-md text-lg transition-colors"
              >
                Contact Us Today
              </Link>
              <a
                href="tel:+12707353897"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-md text-lg transition-colors"
              >
                (270) 735-3897
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
