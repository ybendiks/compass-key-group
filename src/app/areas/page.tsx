import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { areas } from "@/data/areas";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "Explore the communities we serve across Central Kentucky, including Elizabethtown, Fort Knox, Louisville, Hardin County, Bardstown, and Shepherdsville.",
};

export default function AreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Areas We Serve
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            From the rolling hills of Hardin County to the vibrant streets of
            Louisville, we know Central Kentucky inside and out. Find the
            community that feels like home.
          </p>
        </div>
      </section>

      {/* Areas Overview Map Placeholder */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="bg-cream rounded-2xl p-8 md:p-12 lg:p-16 border border-gold-pale">
              <h2 className="font-heading text-2xl md:text-3xl text-navy text-center mb-10">
                Central Kentucky at a Glance
              </h2>

              <div className="relative w-full max-w-3xl mx-auto">
                {/* Geographic layout - top row: Louisville */}
                <div className="flex justify-center mb-6">
                  <div className="bg-white rounded-xl shadow-sm border border-gold-pale px-6 py-4 text-center">
                    <p className="font-heading text-lg text-navy font-bold">
                      Louisville
                    </p>
                    <p className="text-sm text-slate mt-1">
                      Kentucky&apos;s Largest City
                    </p>
                  </div>
                </div>

                {/* Connecting line */}
                <div className="flex justify-center mb-6">
                  <div className="w-px h-8 bg-gold/40" />
                </div>

                {/* Middle row: Shepherdsville */}
                <div className="flex justify-center mb-6">
                  <div className="bg-white rounded-xl shadow-sm border border-gold-pale px-6 py-4 text-center">
                    <p className="font-heading text-lg text-navy font-bold">
                      Shepherdsville
                    </p>
                    <p className="text-sm text-slate mt-1">
                      I-65 Corridor &middot; Bullitt County
                    </p>
                  </div>
                </div>

                {/* Connecting line */}
                <div className="flex justify-center mb-6">
                  <div className="w-px h-8 bg-gold/40" />
                </div>

                {/* Center cluster: E-town, Fort Knox, Bardstown, Hardin County */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-xl shadow-sm border border-gold-pale px-4 py-4 text-center">
                    <p className="font-heading text-base md:text-lg text-navy font-bold">
                      Fort Knox
                    </p>
                    <p className="text-xs md:text-sm text-slate mt-1">
                      Military Hub
                    </p>
                  </div>
                  <div className="bg-gold/10 rounded-xl shadow-sm border-2 border-gold px-4 py-4 text-center">
                    <p className="font-heading text-base md:text-lg text-navy font-bold">
                      Elizabethtown
                    </p>
                    <p className="text-xs md:text-sm text-gold font-semibold mt-1">
                      Our Home Base
                    </p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm border border-gold-pale px-4 py-4 text-center">
                    <p className="font-heading text-base md:text-lg text-navy font-bold">
                      Bardstown
                    </p>
                    <p className="text-xs md:text-sm text-slate mt-1">
                      Bourbon Country
                    </p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm border border-gold-pale px-4 py-4 text-center">
                    <p className="font-heading text-base md:text-lg text-navy font-bold">
                      Hardin County
                    </p>
                    <p className="text-xs md:text-sm text-slate mt-1">
                      Rural &amp; Spacious
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-center text-sm text-slate mt-8">
                Serving all of Central Kentucky with local expertise and
                personalized service.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Area Detail Sections */}
      {areas.map((area, index) => (
        <section
          key={area.id}
          className={index % 2 === 0 ? "bg-white" : "bg-cream"}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto">
                {/* Area Name */}
                <h2 className="font-heading text-3xl md:text-4xl text-navy font-bold mb-4">
                  {area.name}
                </h2>

                {/* Description */}
                <p className="text-slate leading-relaxed text-lg mb-8">
                  {area.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-3 mb-8">
                  {area.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-gold mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Median Price + CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <span className="inline-flex items-center gap-2 bg-navy/5 text-navy font-semibold text-sm px-4 py-2 rounded-full">
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
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4"
                      />
                    </svg>
                    Median Home Price: {area.medianPrice}
                  </span>
                  <Link
                    href="/buy"
                    className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold text-sm px-6 py-2.5 rounded-md transition-colors"
                  >
                    View Homes in {area.name}
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
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Find Your Perfect Neighborhood
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Not sure which area is right for you? Let us help you explore the
              communities of Central Kentucky and find the perfect fit for your
              lifestyle and budget.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-lg"
            >
              Let&apos;s Talk
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
