import Link from "next/link";
import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import PropertyCard from "@/components/PropertyCard";
import TestimonialCard from "@/components/TestimonialCard";
import { listings } from "@/data/listings";
import { reviews } from "@/data/reviews";
import { SITE_URL, organizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute:
      "Realtors in Elizabethtown KY | Compass & Key Group | Veteran-Owned",
  },
  description:
    "Veteran-owned realtors in Elizabethtown KY serving Fort Knox, Radcliff, and Central Kentucky. Buy, sell, or relocate with integrity, service, and results.",
};

const serviceAreas = [
  { name: "Elizabethtown", href: "/areas/elizabethtown" },
  { name: "Fort Knox", href: "/areas/fort-knox" },
  { name: "Radcliff", href: "/areas/radcliff" },
  { name: "Vine Grove", href: "/areas/vine-grove" },
  { name: "Bardstown", href: "/areas/bardstown" },
  { name: "I-65 Corridor", href: "/areas/i65-corridor" },
  { name: "Louisville", href: "/areas/louisville" },
];

export default function Home() {
  const featuredListings = listings.slice(0, 4);
  const featuredReviews = reviews.slice(0, 3);

  const homeSchema = [
    {
      ...organizationSchema,
      "@type": ["RealEstateAgent", "LocalBusiness"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Compass and Key Group",
      url: SITE_URL,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/buy?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      {/* ───────────────────── Hero Section ───────────────────── */}
      <section className="hero-gradient relative min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center lg:text-left">
          <AnimateOnScroll>
            <p className="text-gold-light font-body text-sm uppercase tracking-[0.2em] mb-4">
              Veteran-Owned &middot; Elizabethtown, KY
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-3xl lg:max-w-4xl">
              Navigate Your Dream Home
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="font-body text-xl text-white/90 max-w-2xl mb-10 leading-relaxed">
              Veteran-owned and locally rooted, Compass & Key Group brings
              military precision and deep Central Kentucky expertise to every
              transaction. Whether you&apos;re buying, selling, or relocating,
              we&apos;ll guide you home.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/buy"
                className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-white font-semibold px-10 py-4 rounded-md text-lg transition-colors"
              >
                Buy a Home
              </Link>
              <Link
                href="/sell"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 font-semibold px-10 py-4 rounded-md text-lg transition-colors"
              >
                Sell Your Home
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ───────────────── Value Proposition ───────────────── */}
      <section className="bg-cream py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-4">
                Why Compass & Key
              </h2>
              <p className="font-body text-gray-600 text-lg max-w-2xl mx-auto">
                A real estate team built on the values that matter most.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Veteran Values */}
            <AnimateOnScroll delay={100}>
              <div className="bg-white rounded-xl p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
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
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-navy mb-3">
                  Veteran Values
                </h3>
                <p className="font-body text-gray-600 text-lg leading-relaxed">
                  Integrity, discipline, and service aren&apos;t just words
                  &mdash; they&apos;re the foundation of how we operate. We
                  treat every client like family.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Local Expertise */}
            <AnimateOnScroll delay={200}>
              <div className="bg-white rounded-xl p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
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
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-navy mb-3">
                  Local Expertise
                </h3>
                <p className="font-body text-gray-600 text-lg leading-relaxed">
                  Deep knowledge of Elizabethtown, Fort Knox, and Central
                  Kentucky. We know the neighborhoods, schools, and communities
                  inside and out.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Proven Results */}
            <AnimateOnScroll delay={300}>
              <div className="bg-white rounded-xl p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
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
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-navy mb-3">
                  Proven Results
                </h3>
                <p className="font-body text-gray-600 text-lg leading-relaxed">
                  Five-star reviews from happy clients and homes sold across the
                  region. Our track record speaks for itself.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ───────────────── Social Proof / Reviews ───────────────── */}
      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-4">
                What Our Clients Say
              </h2>
              <p className="font-body text-gray-600 text-lg max-w-2xl mx-auto">
                Real stories from real people we&apos;ve helped navigate the
                home buying and selling journey.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredReviews.map((review, index) => (
              <AnimateOnScroll key={review.id} delay={index * 100}>
                <TestimonialCard review={review} />
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={400}>
            <div className="text-center mt-10">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold transition-colors"
              >
                Read More Reviews
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ───────────────── Featured Listings ───────────────── */}
      <section className="bg-cream py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-4">
                Featured Properties
              </h2>
              <p className="font-body text-gray-600 text-lg max-w-2xl mx-auto">
                Explore our hand-picked selection of homes across Central
                Kentucky.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredListings.map((listing, index) => (
              <AnimateOnScroll key={listing.id} delay={index * 100}>
                <PropertyCard listing={listing} />
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={500}>
            <div className="text-center mt-10">
              <Link
                href="/buy"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold transition-colors"
              >
                View All Properties
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ───────────────── Service Areas ───────────────── */}
      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-4">
                Areas We Serve
              </h2>
              <p className="font-body text-gray-600 text-lg max-w-2xl mx-auto">
                From Elizabethtown to Louisville and everywhere in between, our
                team knows Central Kentucky.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {serviceAreas.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="bg-cream text-navy font-body text-sm font-medium px-5 py-2.5 rounded-full border border-gray-100 hover:bg-gold/10 hover:border-gold/30 hover:text-gold transition-colors"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="text-center">
              <Link
                href="/areas"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold transition-colors"
              >
                Explore Our Service Areas
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
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
              Ready to Find Your Dream Home?
            </h2>
            <p className="font-body text-white/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re a first-time buyer, relocating with the
              military, or looking for your forever home, we&apos;re here to
              help every step of the way.
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
