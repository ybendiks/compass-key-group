import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Louisville KY Real Estate",
  description:
    "Find homes for sale in Louisville, Kentucky. Compass & Key Group brings personalized, small-brokerage service to Louisville's diverse neighborhoods and housing market.",
};

export default function LouisvillePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Louisville, Kentucky
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Kentucky&apos;s Largest City
          </p>
        </div>
      </section>

      {/* Area Overview */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Big-City Living, Kentucky Style
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Louisville is Kentucky&apos;s largest city and a major cultural,
                economic, and culinary hub. With a metro population of over 1.3
                million, it offers big-city amenities &mdash; world-class
                restaurants, professional sports, a thriving arts scene, major
                healthcare systems, and Fortune 500 employers &mdash; while
                maintaining a surprisingly affordable cost of living compared to
                peer cities like Nashville, Cincinnati, and Indianapolis.
                Louisville has earned national recognition for its food scene,
                bourbon culture, and quality of life, consistently landing on
                &ldquo;best places to live&rdquo; lists for its combination of
                opportunity and affordability.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                For buyers looking at Louisville real estate, Compass &amp; Key
                Group brings the personalized, hands-on service of a small
                brokerage to a big market. We know the neighborhoods, the price
                points, and the nuances that make each part of the city unique.
                Many of our clients live in south Louisville, Hillview, or
                Shepherdsville and commute into the city, enjoying lower home
                prices while staying connected to Louisville&apos;s job market
                and entertainment. Whether you want to be in the heart of the
                action or on the more affordable outskirts, we can help you find
                the right fit.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Louisville is approximately 45 minutes north of our
                Elizabethtown office via I-65, and many of the communities we
                serve along the corridor feed directly into the Louisville metro.
                That proximity gives our clients a unique advantage: local
                expertise that stretches from Central Kentucky all the way into
                the city.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Lifestyle & Culture */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Lifestyle &amp; Culture
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Louisville is synonymous with the Kentucky Derby at Churchill
                Downs &mdash; the city comes alive every May for Derby Week, a
                celebration that blends horse racing, fashion, parties, and
                Southern tradition into one of America&apos;s most iconic
                sporting events. But the city&apos;s identity runs far deeper
                than the first Saturday in May. The bourbon scene is unmatched,
                with the Urban Bourbon Trail featuring dozens of bars and
                distilleries throughout the city. NuLu (New Louisville) and the
                Bardstown Road/Highlands corridor offer eclectic dining,
                independent shopping, and vibrant nightlife that rival any city
                in the region.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The Louisville Waterfront Park along the Ohio River is a gem
                &mdash; a beautifully maintained greenspace perfect for running,
                cycling, picnics, and festivals. The Big Four Bridge connects
                Louisville to Jeffersonville, Indiana, offering one of the most
                scenic pedestrian walks in the Midwest. Sports fans enjoy
                Louisville City FC (soccer), the Louisville Bats (minor league
                baseball), and the passionate athletics programs at the
                University of Louisville. The arts scene includes Actors Theatre
                of Louisville &mdash; home of the Humana Festival of New
                American Plays &mdash; the Louisville Orchestra, and the Speed
                Art Museum, Kentucky&apos;s oldest and largest art museum.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Neighborhoods We Serve */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Neighborhoods We Serve
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Louisville is a city of neighborhoods, each with its own
              personality and price point. Here are the areas where we help
              buyers find the most value.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cream rounded-xl p-6 border border-gold-pale">
                <h3 className="font-heading text-xl text-navy font-bold mb-2">
                  South Louisville / Beechmont / Iroquois
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Affordable, diverse, and centrally located, south Louisville
                  neighborhoods offer some of the best value in the city. Close
                  to UPS Worldport and Ford&apos;s Louisville Assembly Plant,
                  these areas are popular with working families who want city
                  convenience without a steep price tag. Iroquois Park provides
                  beautiful green space and hillside views.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6 border border-gold-pale">
                <h3 className="font-heading text-xl text-navy font-bold mb-2">
                  Hillview &amp; Pioneer Village
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Bullitt County suburbs just south of Louisville with lower
                  property taxes and newer homes. These communities offer a
                  suburban feel with easy access to both the city and the I-65
                  corridor. Ideal for buyers who want Louisville proximity
                  without Jefferson County tax rates.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6 border border-gold-pale">
                <h3 className="font-heading text-xl text-navy font-bold mb-2">
                  Okolona &amp; Fairdale
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Working-class neighborhoods with affordable housing and quick
                  I-65 and I-265 access. Okolona features established
                  subdivisions and a strong community identity, while Fairdale
                  offers a more rural feel at the southern edge of Jefferson
                  County. Both are excellent options for budget-conscious buyers.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6 border border-gold-pale">
                <h3 className="font-heading text-xl text-navy font-bold mb-2">
                  Jeffersontown &amp; Fern Creek
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  More suburban and family-friendly, &ldquo;J-town&rdquo; and
                  Fern Creek offer good schools, moderate home prices, and a
                  strong sense of community. Jeffersontown has its own vibrant
                  downtown area with restaurants and shops, making it feel like a
                  city within a city.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6 border border-gold-pale md:col-span-2">
                <h3 className="font-heading text-xl text-navy font-bold mb-2">
                  East End &amp; Prospect
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  For buyers with larger budgets, Louisville&apos;s east end
                  offers upscale communities with top-rated Oldham County
                  schools, premium homes, and a polished suburban lifestyle.
                  Prospect, Anchorage, and the surrounding areas feature some of
                  the most desirable real estate in the metro, with mature
                  tree-lined streets and access to the Ohio River corridor.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Schools & Education */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Schools &amp; Education
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Jefferson County Public Schools (JCPS) is the state&apos;s
                largest school district, serving more than 90,000 students
                across Louisville and Jefferson County. The district offers an
                extensive network of magnet and optional programs that allow
                families to choose schools based on academic focus, from STEM
                and performing arts to international studies. Standout high
                schools include duPont Manual &mdash; consistently ranked among
                the best in the nation &mdash; Louisville Male, and Ballard,
                each offering rigorous academics and strong extracurricular
                programs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Oldham County Schools, serving Louisville&apos;s northeast
                suburbs, consistently rank among Kentucky&apos;s top districts
                and are a major draw for families considering the east end.
                Private school options add even more choices: Louisville
                Collegiate, Trinity, Sacred Heart, and St. Xavier are among the
                most respected private institutions in the state. For higher
                education, the University of Louisville and Bellarmine University
                anchor the city&apos;s academic landscape, providing
                undergraduate, graduate, and professional programs that fuel the
                local economy and workforce.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Housing Market */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Housing Market Snapshot
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Louisville&apos;s housing market is broad, offering something for
                nearly every budget and lifestyle. Homes range from around
                $150,000 in south Louisville neighborhoods to $500,000 and
                beyond in the east end and Oldham County. The metro-wide median
                home price sits around $240,000, making Louisville significantly
                more affordable than comparable cities like Nashville or
                Charlotte while delivering a similar quality of life and job
                market strength.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                South Louisville and Bullitt County suburbs offer the most
                affordable entry points for first-time buyers, while
                Jeffersontown, Fern Creek, and St. Matthews provide mid-range
                options with strong resale value. The market has seen steady
                appreciation over the past several years, and well-priced homes
                continue to move quickly. New construction is concentrated in
                the east end, Oldham County, and the southern suburbs, giving
                buyers who prefer a brand-new home plenty of options across the
                price spectrum.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why Choose Louisville */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Choose Louisville?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Louisville offers the amenities of a major city with the
              affordability and friendliness that Kentucky is known for.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <ul className="space-y-4">
              {[
                "Kentucky\u2019s largest job market with major employers like UPS, Humana, Yum! Brands, and Ford",
                "World-class dining, bourbon culture, and a vibrant arts and entertainment scene",
                "Affordable cost of living relative to peer cities like Nashville, Cincinnati, and Indianapolis",
                "Diverse neighborhoods offering options for every budget and lifestyle",
                "Major healthcare systems including Norton, Baptist Health, and UofL Health",
                "Easy I-65 access connecting Central Kentucky to downtown Louisville",
                "Professional sports, University of Louisville athletics, and year-round entertainment",
                "Excellent private and magnet school options alongside strong suburban districts",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gold mt-1 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-lg text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Explore Louisville Real Estate?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              From south Louisville to the east end, we bring small-brokerage
              service to Kentucky&apos;s biggest city. Let us help you find the
              neighborhood and home that fit your life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-lg"
              >
                Contact Us
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
              <a
                href="tel:+12707353897"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-lg"
              >
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (270) 735-3897
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
