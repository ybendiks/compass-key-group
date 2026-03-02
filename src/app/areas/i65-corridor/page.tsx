import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Homes for Sale in I-65 Corridor KY",
  description:
    "Find homes along the I-65 corridor between Louisville and Elizabethtown KY. Affordable commuter communities in Shepherdsville, Bullitt County, and beyond.",
};

export default function I65CorridorPage() {
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "I-65 Corridor, Kentucky",
    description:
      "Find homes along the I-65 corridor between Louisville and Elizabethtown KY. Affordable commuter communities from Compass and Key Group.",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.6934,
      longitude: -85.8591,
    },
    url: `${SITE_URL}/areas/i65-corridor`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />
      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            I-65 Corridor Communities
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Best of Both Worlds
          </p>
        </div>
      </section>

      {/* Area Overview */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              The Sweet Spot Between Louisville &amp; Elizabethtown
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                The I-65 corridor between Louisville and Elizabethtown is one of
                Central Kentucky&apos;s fastest-growing residential areas.
                Communities like Shepherdsville, Lebanon Junction, West Point,
                and the broader Bullitt County region offer the ideal balance:
                affordable housing, rural character, and a quick commute to major
                employment centers in either direction. Over the past decade,
                thousands of families have discovered that you don&apos;t have to
                choose between a reasonable mortgage payment and convenient
                access to everything Louisville and Hardin County have to offer.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                For buyers who work in Louisville but prefer lower home prices
                and a quieter lifestyle, or for those splitting the difference
                between Fort Knox and Louisville, the I-65 corridor hits the
                sweet spot. Interstate access means Shepherdsville to downtown
                Louisville is about 25&ndash;30 minutes, while Elizabethtown is
                roughly the same in the opposite direction. That kind of
                flexibility is rare &mdash; and it&apos;s one of the biggest
                reasons this stretch of highway has attracted so much new
                residential development.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you&apos;re a first-time buyer looking for an affordable
                entry point, a military family stationed at Fort Knox, or a
                remote worker who wants space and scenery without sacrificing
                city access, the I-65 corridor delivers. Property taxes are
                lower than Jefferson County, lots tend to be larger, and the
                sense of community is strong in every town along the route.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Communities Along the Corridor */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Communities Along the Corridor
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Each community along I-65 has its own personality and appeal. Here
              is a closer look at the towns and neighborhoods where our buyers
              find the most value.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gold-pale">
                <h3 className="font-heading text-xl text-navy font-bold mb-2">
                  Shepherdsville
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The county seat of Bullitt County and the largest community
                  along the corridor with a population of approximately 13,000.
                  Shepherdsville has seen significant retail and commercial
                  growth in recent years, including new restaurants, shopping
                  centers, and medical offices. Homes here are affordable, with
                  a wide range of options from established neighborhoods to new
                  subdivisions. Bernheim Arboretum &amp; Research Forest is just
                  minutes away, and quick I-65 access puts Louisville within
                  easy reach.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gold-pale">
                <h3 className="font-heading text-xl text-navy font-bold mb-2">
                  Lebanon Junction
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A small railroad town with deep roots and some of the most
                  affordable housing in the region. Lebanon Junction offers a
                  quiet, close-knit community where neighbors know each other by
                  name. Located about 20 minutes from both Shepherdsville and
                  Elizabethtown, it&apos;s a true midpoint along the corridor.
                  Buyers looking for value and a slower pace of life will find
                  both here.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gold-pale">
                <h3 className="font-heading text-xl text-navy font-bold mb-2">
                  West Point
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A historic town at the confluence of the Salt River and Ohio
                  River, situated near Fort Knox&apos;s north gate. West Point
                  is scenic, small, and remarkably affordable. Its riverfront
                  setting and historic architecture give it a character that
                  larger communities can&apos;t replicate. For buyers connected
                  to Fort Knox or those who appreciate small-town living with
                  river views, West Point is a hidden gem.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gold-pale">
                <h3 className="font-heading text-xl text-navy font-bold mb-2">
                  Hillview &amp; Pioneer Village
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  These Bullitt County suburbs sit on the northern end of the
                  corridor, closest to Louisville. They offer suburban amenities
                  &mdash; shopping, dining, parks &mdash; with significantly
                  lower housing costs than neighboring Jefferson County. Newer
                  subdivisions and established neighborhoods give buyers plenty
                  of options, and the commute into Louisville is among the
                  shortest along the corridor.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Lifestyle &amp; Recreation
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                The I-65 corridor offers a commuter lifestyle with genuine rural
                perks. The crown jewel of outdoor recreation in the area is
                Bernheim Arboretum &amp; Research Forest &mdash; a 16,000-acre
                preserve with hiking trails, scenic drives, a world-class
                arboretum, and the iconic Forest Giants sculpture trail.
                Bernheim draws visitors from across the state, but for corridor
                residents, it&apos;s practically in the backyard. On weekends
                you can hike miles of wooded trails, fish in one of the lakes,
                or simply enjoy the quiet beauty of Kentucky&apos;s rolling
                hills.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Beyond Bernheim, the corridor is home to Kart Kountry &mdash;
                one of the longest go-kart tracks in the world &mdash; the Jim
                Beam American Stillhouse on the Kentucky Bourbon Trail, and a
                growing number of local restaurants and shops in Shepherdsville.
                The lifestyle here is defined by less congestion, less noise, and
                more space than Louisville&apos;s urban core, without the
                isolation of truly rural living. You get elbow room and easy
                access &mdash; it&apos;s the combination that keeps drawing new
                residents to the area.
              </p>
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
                Bullitt County Schools serve the northern portion of the
                corridor, operating three high schools: Bullitt East, Bullitt
                Central, and North Bullitt. The district is well-regarded for
                its academic programs, extracurricular offerings, and career and
                technical education pathways. Growing enrollment reflects the
                area&apos;s popularity with young families, and recent
                investments in school facilities have kept pace with the
                community&apos;s growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The southern end of the corridor falls within the Hardin County
                Schools district, which serves the broader Elizabethtown and
                Hardin County area. Both districts are recognized for providing
                strong educational foundations, making the corridor an appealing
                choice for families with school-age children. With steady
                population growth, both systems continue to expand and improve
                their programs and infrastructure.
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
                Homes along the I-65 corridor typically range from $150,000 to
                $350,000, with a median price around $220,000 &mdash; making it
                one of the most affordable stretches of the Louisville metro
                area. Shepherdsville offers the most inventory, with options
                ranging from ranch homes and split-levels in established
                neighborhoods to newer construction in growing subdivisions.
                Lebanon Junction and West Point feature some of the lowest home
                prices in the entire region, offering exceptional value for
                budget-conscious buyers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                New construction developments continue to expand, especially
                around Shepherdsville and the Brooks/Hillview area, where
                builders are adding single-family homes, townhomes, and planned
                communities to meet rising demand. Bullitt County consistently
                ranks as one of the most affordable counties in the Louisville
                metro, and the combination of lower property taxes, competitive
                home prices, and strong appreciation potential makes the corridor
                a smart choice for buyers looking to maximize their investment.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why Live Here */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Live on the I-65 Corridor?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The I-65 corridor offers a rare combination of affordability,
              convenience, and quality of life that keeps attracting new
              residents year after year.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <ul className="space-y-4">
              {[
                "Affordable housing with easy commuter access to major employment centers",
                "25\u201330 minutes to Louisville or Elizabethtown via I-65",
                "Bernheim Forest and outstanding outdoor recreation at your doorstep",
                "Growing communities with new residential and commercial development",
                "Lower property taxes than Jefferson County",
                "Rural character without isolation \u2014 space, scenery, and convenience",
                "Strong school districts in both Bullitt County and Hardin County",
                "Best overall value in the greater Louisville metro area",
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
              Ready to Find Your Home on the I-65 Corridor?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              Whether you&apos;re commuting to Louisville, working at Fort Knox,
              or simply looking for more home for your money, we know this
              corridor inside and out. Let us help you find the right community
              and the right home.
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
