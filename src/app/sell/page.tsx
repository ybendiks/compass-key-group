import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import PropertyCard from "@/components/PropertyCard";
import { soldListings } from "@/data/listings";
import { reviews } from "@/data/reviews";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sell Your Home in Elizabethtown KY",
  description:
    "Sell your home in Elizabethtown KY with expert marketing, strategic pricing, and local market knowledge. Free home valuation from Compass & Key Group.",
};

const steps = [
  {
    number: "01",
    title: "Free Home Valuation",
    description:
      "We analyze your home's current market value using local sales data, property condition, and neighborhood trends to determine the optimal listing price.",
  },
  {
    number: "02",
    title: "Strategic Marketing",
    description:
      "Professional photography, targeted social media advertising, MLS exposure, and a comprehensive marketing plan designed to reach qualified buyers fast.",
  },
  {
    number: "03",
    title: "Expert Negotiation",
    description:
      "We handle every offer with skill and precision, negotiating the best possible terms and price to protect your bottom line.",
  },
  {
    number: "04",
    title: "Smooth Closing",
    description:
      "From accepted offer to closing day, we coordinate inspections, appraisals, title work, and every detail so you can focus on what comes next.",
  },
];

const benefits = [
  {
    title: "Strategic Pricing",
    description:
      "Data-driven pricing strategies that position your home competitively to attract the right buyers and maximize your return.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Professional Marketing",
    description:
      "Professional photography, social media campaigns, MLS syndication, and targeted advertising that showcases your home to thousands of buyers.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
  },
  {
    title: "Expert Negotiation",
    description:
      "Skilled negotiators who protect your interests at every turn, ensuring you receive the strongest offers and most favorable terms.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Local Market Knowledge",
    description:
      "Deep understanding of Central Kentucky market trends, neighborhood values, and buyer demand that gives your listing a competitive edge.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function SellPage() {
  const sellerReview = reviews.find((r) => r.type === "seller");

  const sellSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Home Selling Services",
    description:
      "Professional home selling services in Elizabethtown KY with expert marketing, strategic pricing, and local market knowledge.",
    provider: {
      "@type": "RealEstateAgent",
      name: "Compass and Key Group",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Place",
      name: "Elizabethtown and Central Kentucky",
    },
    serviceType: "Real Estate Listing",
    url: `${SITE_URL}/sell`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sellSchema) }}
      />
      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Sell Your Home for Top Dollar
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Expert marketing, strategic pricing, and deep local knowledge to
              get your home sold fast and for the best possible price.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Home Valuation CTA */}
      <section className="bg-cream border-y-4 border-gold-pale">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <AnimateOnScroll>
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border border-gold-pale">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-pale mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
                Get Your Free Home Valuation
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto mb-8">
                Wondering what your home is worth? Get a professional market
                analysis from our team — no obligation, no pressure. Just
                honest, data-backed insight into your home&apos;s value.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gold hover:bg-gold-light text-white text-lg font-semibold px-10 py-4 rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Request Your Free Valuation
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Selling Process */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
                Our Proven Selling Process
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                A clear, step-by-step approach that takes the stress out of
                selling and puts more money in your pocket.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.number} delay={i * 100}>
                <div className="relative">
                  <span className="font-heading text-6xl font-bold text-gold/20 leading-none">
                    {step.number}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-navy mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sell With Us */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
                Why Sell With Us
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                When you list with Compass & Key Group, you get a dedicated team
                that treats your home like their own.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <AnimateOnScroll key={benefit.title} delay={i * 100}>
                <div className="bg-white rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-shadow h-full">
                  <div className="text-gold mb-4">{benefit.icon}</div>
                  <h3 className="font-heading text-lg font-bold text-navy mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Sold */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
                Recently Sold Properties
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                A track record of results. Here are some of the homes we&apos;ve
                recently helped our clients sell.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {soldListings.map((listing, i) => (
              <AnimateOnScroll key={listing.id} delay={i * 100}>
                <PropertyCard listing={listing} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Seller Testimonial */}
      {sellerReview && (
        <section className="py-16 lg:py-20 bg-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimateOnScroll>
              <div className="mb-8">
                <svg className="w-12 h-12 text-gold/40 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391C0 7.905 3.748 4.039 9 3l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
              </div>
              <blockquote className="text-2xl sm:text-3xl font-heading text-navy leading-relaxed mb-8">
                &ldquo;{sellerReview.text}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: sellerReview.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-lg font-semibold text-navy mt-4">
                {sellerReview.name}
              </p>
              <p className="text-sm text-gray-500">Home Seller</p>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Sell? Let&apos;s Talk.
            </h2>
            <p className="text-white/90 text-lg max-w-xl mx-auto mb-8">
              Whether you&apos;re just exploring your options or ready to list
              tomorrow, we&apos;re here to help you make the best move.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-light text-white text-lg font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Contact Us Today
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
