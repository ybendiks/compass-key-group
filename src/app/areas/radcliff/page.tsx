import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Homes for Sale in Radcliff KY",
  description:
    "Find homes for sale in Radcliff KY, directly adjacent to Fort Knox. Affordable military-friendly housing, convenient location, and strong community support.",
};

export default function RadcliffPage() {
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Radcliff, Kentucky",
    description:
      "Find homes for sale in Radcliff KY, adjacent to Fort Knox. Affordable military-friendly housing from Compass and Key Group.",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.8404,
      longitude: -85.9491,
    },
    url: `${SITE_URL}/areas/radcliff`,
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
            Radcliff, Kentucky
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Fort Knox&apos;s Front Door
          </p>
        </div>
      </section>

      {/* Area Overview */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Welcome to Radcliff
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Radcliff is the second-largest city in Hardin County with a
                population of approximately 23,000 residents. Located directly
                adjacent to Fort Knox, it has long served as the primary
                off-post housing destination for military families stationed at
                the installation. The city has grown significantly over the
                decades alongside the military presence, evolving from a small
                service town into a thriving community with its own distinct
                identity, character, and sense of pride.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                What makes Radcliff stand out is the blend of affordability,
                convenience, and diversity that few communities in Central
                Kentucky can match. Dixie Highway (US-31W) serves as the main
                commercial corridor, lined with restaurants, retail shops,
                grocery stores, banks, and professional services. Whether you
                need a quick weeknight dinner, a trip to the hardware store, or
                a visit to the dentist, everything is within a few minutes&apos;
                drive along this central artery.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                For anyone working on post, Radcliff offers the most convenient
                commute to Fort Knox in the region. Most neighborhoods sit just
                5 to 10 minutes from the main gate, making it easy to get to
                work without the stress of a long drive. That proximity is a
                major draw for active-duty service members, civilian employees
                of the Department of Defense, and contractors who want to
                maximize their time at home with family rather than spending it
                on the road.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Lifestyle & Community */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll delay={100}>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Lifestyle &amp; Community
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Radcliff has a distinctly military-friendly culture that sets it
                apart from other communities in the area. Many local businesses
                proudly offer military discounts, and the community actively
                supports service members and their families through
                organizations, events, and everyday gestures of appreciation.
                The city has invested heavily in parks and recreation over the
                years &mdash; Colvin Park is a local favorite with its walking
                trails, playgrounds, and sports fields, while the Radcliff
                Aquatic Center gives families a place to cool off during
                Kentucky&apos;s warm summers. Annual events like the 4th of July
                celebration and community festivals bring neighbors together and
                create lasting memories.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dining along Dixie Highway ranges from familiar national chains
                to authentic international cuisine &mdash; a direct reflection
                of the diverse military community that calls Radcliff home.
                You&apos;ll find Korean, Mexican, Filipino, Japanese, and
                Southern comfort food all within a short stretch of road. The
                city is also home to several churches spanning a wide range of
                denominations, community organizations dedicated to family
                support, and active youth sports leagues that keep kids engaged
                and connected throughout the year. For a city of its size,
                Radcliff punches well above its weight when it comes to
                community spirit.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Schools & Education */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll delay={100}>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Schools &amp; Education
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Radcliff is served by Hardin County Schools, one of the largest
                school districts in Kentucky. North Hardin High School is the
                primary high school for Radcliff students and is well known for
                its strong athletics program, competitive JROTC program, and a
                wide range of extracurricular activities. The school has a proud
                tradition of preparing students for college, careers, and
                military service.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                For younger students, Radcliff Elementary, Meadow View
                Elementary, and several other neighborhood schools provide
                quality education close to home. Families stationed at Fort Knox
                with elementary-age children also have the option of enrolling
                in on-post DoDEA (Department of Defense Education Activity)
                schools, which are specifically designed to serve
                military-connected students. The Hardin County school district
                participates in Military Child Education Coalition resources,
                ensuring that students transitioning between duty stations
                receive the academic support they need to thrive.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Housing Market Snapshot */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll delay={100}>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Housing Market Snapshot
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Homes in Radcliff typically range from $130,000 to $300,000,
                with the median home price sitting around $205,000. That makes
                Radcliff one of the most affordable places to buy a home
                compared to Louisville or Lexington, where median prices have
                climbed significantly higher in recent years. For military
                families using VA loans, the vast majority of homes in Radcliff
                fall comfortably within enlisted and junior officer BAH (Basic
                Allowance for Housing) rates, making homeownership not just
                possible but financially smart.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The housing stock is predominantly single-family homes built
                from the 1970s through the 2010s, with some newer construction
                available in developing subdivisions on the outskirts of the
                city. You&apos;ll find a range of styles from modest ranch homes
                to larger two-story family houses with updated finishes.
                Radcliff is popular with both buyers and renters, and the rental
                market stays strong year-round due to the steady flow of
                military families rotating in and out of Fort Knox. Whether
                you&apos;re looking to build equity or invest in rental
                property, Radcliff delivers solid value.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Neighborhoods to Explore */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll delay={100}>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Neighborhoods to Explore
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Radcliff offers a variety of neighborhoods, each with its own
                personality. <strong>Woodland</strong> is an established,
                tree-lined neighborhood with mature landscaping and a
                settled, welcoming feel &mdash; a great choice for families who
                want character and shade.{" "}
                <strong>Radcliff Heights</strong> offers affordable starter
                homes that are ideal for first-time buyers or those looking to
                keep housing costs low while building equity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                <strong>Brandon Springs</strong> features newer development
                with modern floor plans and updated finishes.{" "}
                <strong>Cedar Creek</strong> is a family-friendly neighborhood
                with quiet streets and good access to schools and parks. Along{" "}
                <strong>Joe Prather Highway</strong>, you&apos;ll find a mix of
                established homes and newer builds. As the area continues to
                grow, newer subdivisions are developing on the outskirts toward
                Elizabethtown, offering brand-new construction for buyers who
                want the latest in energy efficiency and design.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why Live in Radcliff */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll delay={100}>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Why Live in Radcliff
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
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
                  <span className="text-lg text-gray-600">
                    Most convenient commute to Fort Knox (5-10 minutes)
                  </span>
                </li>
                <li className="flex items-start gap-3">
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
                  <span className="text-lg text-gray-600">
                    Affordable housing well within BAH rates
                  </span>
                </li>
                <li className="flex items-start gap-3">
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
                  <span className="text-lg text-gray-600">
                    Military-friendly businesses and community
                  </span>
                </li>
                <li className="flex items-start gap-3">
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
                  <span className="text-lg text-gray-600">
                    Diverse, welcoming neighborhood culture
                  </span>
                </li>
                <li className="flex items-start gap-3">
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
                  <span className="text-lg text-gray-600">
                    Dixie Highway shopping and dining corridor
                  </span>
                </li>
                <li className="flex items-start gap-3">
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
                  <span className="text-lg text-gray-600">
                    Easy access to Elizabethtown amenities (15 minutes)
                  </span>
                </li>
                <li className="flex items-start gap-3">
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
                  <span className="text-lg text-gray-600">
                    Parks, recreation, and youth sports programs
                  </span>
                </li>
                <li className="flex items-start gap-3">
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
                  <span className="text-lg text-gray-600">
                    VA loan-friendly properties throughout
                  </span>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Find Your Home in Radcliff?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              Whether you&apos;re PCSing to Fort Knox or looking for an
              affordable place to put down roots, we&apos;ll help you find the
              right home in Radcliff. Explore our{" "}
              <Link
                href="/military-relocation"
                className="text-gold-light underline hover:text-gold transition-colors"
              >
                Military Relocation Services
              </Link>{" "}
              for PCS support.
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
