import Link from "next/link";
import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import IdxWidget from "@/components/IdxWidget";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Buy a Home in Elizabethtown KY",
  description:
    "Search homes for sale in Elizabethtown, Fort Knox, Radcliff, and Central Kentucky. Expert buyer guidance from veteran-owned Compass & Key Group.",
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
  const buySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Buy a Home in Elizabethtown KY",
    url: `${SITE_URL}/buy`,
    about: "Real estate listings in Elizabethtown and Central Kentucky",
    provider: {
      "@type": "RealEstateAgent",
      name: "Compass and Key Group",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buySchema) }}
      />
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
            <p className="font-body text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Browse available properties across Central Kentucky. From cozy
              starter homes to spacious family estates, your next chapter starts
              here.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ───────────── IDX Quick Search Widget ───────────── */}
      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl sm:text-3xl text-navy mb-6 text-center">
              Search Properties
            </h2>
            <IdxWidget
              src="//compassandkeygroup.idxbroker.com/idx/quicksearchjs.php?widgetid=33510"
              id="idxwidgetsrc-33510"
              className="idx-search-wrapper"
            />
            <p className="font-body text-xs text-gray-400 text-center mt-4">
              Listing data provided by IDX Broker. Information deemed reliable
              but not guaranteed.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ───────────────── IDX Showcase Listings ───────────────── */}
      <section className="bg-cream py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-4 text-center">
              Our Current Listings
            </h2>
            <IdxWidget
              src="//compassandkeygroup.idxbroker.com/idx/customshowcasejs.php?widgetid=35734"
              id="idxwidgetsrc-35734"
            />
            <p className="font-body text-xs text-gray-400 text-center mt-4">
              Listing data provided by IDX Broker. Information deemed reliable
              but not guaranteed.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ───────────────── Buyer's Guide ───────────────── */}
      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-4">
                Your Path to Homeownership
              </h2>
              <p className="font-body text-gray-600 max-w-2xl mx-auto">
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
                  <p className="font-body text-gray-600 leading-relaxed text-base">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Budget Calculator Teaser ─────────── */}
      <section className="bg-cream py-12 lg:py-14">
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
              <p className="font-body text-gray-600 max-w-xl mx-auto leading-relaxed mb-8">
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
      <section className="hero-gradient py-12 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl sm:text-4xl text-white mb-6">
              Ready to Start Your Search?
            </h2>
            <p className="font-body text-white/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
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
