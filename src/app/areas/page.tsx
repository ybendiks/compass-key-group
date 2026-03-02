import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { areas } from "@/data/areas";

const areaHeroImages: Record<string, string> = {
  elizabethtown:
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
  "fort-knox":
    "https://images.unsplash.com/photo-1579912437766-7896df6d3cd3?w=600&h=400&fit=crop",
  bardstown:
    "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?w=600&h=400&fit=crop",
  radcliff:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  "vine-grove":
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
  "i65-corridor":
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
  louisville:
    "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&h=400&fit=crop",
};

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "Explore the communities we serve across Central Kentucky — Elizabethtown, Fort Knox, Radcliff, Vine Grove, Bardstown, the I-65 Corridor, and Louisville. Local real estate expertise from Compass & Key Group.",
};

export default function AreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Areas We Serve
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              From the rolling hills of Hardin County to the vibrant streets of
              Louisville, we know Central Kentucky inside and out. Find the
              community that feels like home.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Area Cards Grid */}
      <section className="py-12 lg:py-14 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Explore Our Communities
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Click on any area below to learn about neighborhoods, schools,
                housing prices, and what makes each community unique.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <AnimateOnScroll key={area.id} delay={index * 80}>
                <Link
                  href={`/areas/${area.slug}`}
                  className="group block bg-white rounded-xl border border-gray-100 hover:shadow-lg hover:border-gold/30 transition-all duration-300 overflow-hidden h-full"
                >
                  {/* Area Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={areaHeroImages[area.slug] || areaHeroImages.elizabethtown}
                      alt={`${area.name}, Kentucky — real estate and homes`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-heading text-xl font-bold text-navy group-hover:text-gold transition-colors">
                        {area.name}
                      </h3>
                      <svg
                        className="w-5 h-5 text-gray-300 group-hover:text-gold transition-colors mt-1 shrink-0"
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
                    </div>

                    <p className="text-sm font-medium text-gold mb-3">
                      {area.tagline}
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {area.description}
                    </p>

                    <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">
                          Median Price
                        </p>
                        <p className="text-lg font-bold text-navy">
                          {area.medianPrice}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">
                          Price Range
                        </p>
                        <p className="text-sm font-medium text-gray-600">
                          {area.priceRange}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-12 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Why Central Kentucky?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Affordable living, strong communities, and a quality of life
                that&apos;s hard to beat. Here&apos;s what makes our region
                special.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll delay={100}>
              <div className="text-center p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  Affordable Living
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Home prices well below the national median, with options from
                  starter homes to luxury estates across the region.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="text-center p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  Great Schools
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Multiple school districts with strong academics, active parent
                  communities, and programs for military-connected students.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="text-center p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  Strategic Location
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I-65 access puts Louisville 45 minutes north and Nashville 2
                  hours south. Fort Knox, bourbon country, and outdoor recreation
                  right at your doorstep.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-12 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure Which Area Is Right for You?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              Let us help you explore the communities of Central Kentucky and
              find the perfect fit for your lifestyle and budget.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold px-10 py-4 rounded-md transition-colors text-lg"
              >
                Let&apos;s Talk
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:+12707353897"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-10 py-4 rounded-md transition-colors text-lg"
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
