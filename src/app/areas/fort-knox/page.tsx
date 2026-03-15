import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import IdxWidget from "@/components/IdxWidget";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Homes for Sale in Fort Knox KY",
  description:
    "Find homes near Fort Knox KY. Veteran-owned brokerage specializing in military PCS moves, VA loans, and off-post housing in Radcliff, Vine Grove, and Elizabethtown.",
};

export default function FortKnoxPage() {
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Fort Knox, Kentucky",
    description:
      "Find homes near Fort Knox KY. Military PCS moves, VA loans, and off-post housing from Compass and Key Group.",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.9071,
      longitude: -85.9636,
    },
    url: `${SITE_URL}/areas/fort-knox`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />
      {/* Hero */}
      <section className="hero-gradient py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Fort Knox, Kentucky
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Your Military Relocation Experts
          </p>
        </div>
      </section>

      {/* Area Overview */}
      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              About Fort Knox
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Fort Knox is one of the most important military installations in
                the United States and a cornerstone of the Central Kentucky
                community. The post serves as the headquarters for the U.S.
                Army Human Resources Command (HRC), U.S. Army Cadet Command,
                and U.S. Army Recruiting Command &mdash; making it a critical
                hub for Army operations nationwide. Fort Knox is also home to
                the iconic United States Bullion Depository, commonly known as
                the Gold Vault, which holds a substantial portion of the
                nation&apos;s gold reserves.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Spanning portions of Hardin and Meade Counties, the installation
                supports thousands of active-duty soldiers, Department of
                Defense civilians, and military contractors. The steady flow of
                personnel rotating through Fort Knox on PCS orders creates a
                dynamic housing market in the surrounding communities &mdash;
                one that our team knows inside and out.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The communities surrounding Fort Knox &mdash; Radcliff, Vine
                Grove, Elizabethtown, and Muldraugh &mdash; each offer distinct
                housing options, price points, and lifestyle advantages. Whether
                you&apos;re an E-5 looking for a solid starter home or an O-4
                seeking space for a growing family, the Fort Knox area has
                options that align with your BAH and personal preferences.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* PCS Relocation Support */}
      <section className="bg-cream py-12 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              PCS Relocation Support
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                As a veteran-owned brokerage led by Austin Kutz &mdash; a proud
                U.S. Marine Corps veteran &mdash; we understand the unique
                pressures of a military move. The tight timelines, the
                uncertainty of a new duty station, the challenge of finding a
                home from hundreds of miles away: we&apos;ve lived it, and
                we&apos;ve built our entire relocation process around solving
                those problems. We provide comprehensive area orientations
                (both virtual and in-person), curated home searches matched to
                your BAH rates and family needs, VA loan guidance, and hands-on
                transition support from the moment you receive orders until
                you&apos;re settled in your new home.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We&apos;ve helped dozens of military families find the right
                home in the Fort Knox area, and our process is designed to
                minimize stress and maximize results. You focus on your mission
                &mdash; we&apos;ll handle the house hunt. Learn more about our{" "}
                <Link
                  href="/military-relocation"
                  className="text-gold hover:text-gold-light font-semibold underline underline-offset-2"
                >
                  Military Relocation Services
                </Link>
                .
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Living Near Fort Knox */}
      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Living Near Fort Knox
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                The off-post communities near Fort Knox each bring something
                different to the table. Radcliff is the closest community to
                the main gate and offers the most military-friendly services,
                shops, and restaurants &mdash; many service members choose
                Radcliff for the short commute and familiar feel. Vine Grove, a
                small town nestled between Fort Knox and Elizabethtown, appeals
                to families who want a quiet, affordable community with a
                genuine small-town atmosphere.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Elizabethtown, located 20 to 30 minutes from the main gate, is
                the largest nearby city and offers the widest selection of
                restaurants, shopping, healthcare, and entertainment. Many
                military families choose E-town for its highly rated school
                districts and vibrant downtown. Muldraugh, positioned between
                Fort Knox and the Ohio River, is the most budget-friendly option
                and works well for buyers looking to maximize square footage on
                a tighter budget. Each community offers a different lifestyle
                tradeoff, and we help you figure out which one fits your family
                best.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* VA Loan Benefits */}
      <section className="bg-cream py-12 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              VA Loan Benefits
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Your military service earned you access to one of the most
              powerful home financing tools available. The VA loan program makes
              homeownership more accessible, and we connect you with lenders
              who specialize in VA financing to ensure a smooth process.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gold-pale">
              <ul className="space-y-4">
                {[
                  "Zero down payment required on qualifying properties",
                  "No private mortgage insurance (PMI) — saving you hundreds per month",
                  "Competitive interest rates typically lower than conventional loans",
                  "Flexible credit requirements that work with real-world military finances",
                  "Can be used multiple times throughout your military career and beyond",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg text-navy font-medium">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Housing Market */}
      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Housing Market Near Fort Knox
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Homes in the Fort Knox area typically range from $140,000 to
                $350,000, with a median home price around $205,000. That price
                range means most properties fall comfortably within the BAH
                allowance for ranks E-5 through O-4, making homeownership a
                realistic and financially smart option for many military
                families stationed here.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The housing stock includes a mix of single-family homes,
                townhomes, and newer construction developments. Whether
                you&apos;re looking for a move-in-ready home near the Radcliff
                gate or a newer build with modern amenities in Elizabethtown,
                the inventory is diverse enough to match a wide range of
                preferences and budgets. The area also supports a strong rental
                market for service members who prefer to rent during shorter
                assignments.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Schools */}
      <section className="bg-cream py-12 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Schools for Military Families
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Hardin County Schools is the primary district serving most
                military families in the Fort Knox area. The district operates
                several well-regarded campuses including Hardin County High
                School, North Hardin High School, and John Hardin High School.
                Fort Knox also offers on-post DoDEA (Department of Defense
                Education Activity) schools for elementary-age students,
                providing continuity for military children who have attended
                DoDEA schools at other installations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Schools throughout the area have established programs
                specifically for military-connected students, including
                transition support for children who change schools frequently
                and counseling resources that understand the unique challenges
                military kids face. Families who choose to live in
                Elizabethtown also have access to the Elizabethtown Independent
                Schools district, which offers smaller class sizes and strong
                academic outcomes.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why Choose Fort Knox Area */}
      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Choose the Fort Knox Area?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Beyond the mission, the Fort Knox area delivers a quality of
              life that makes it one of the more desirable duty stations in the
              Army.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <ul className="space-y-4">
              {[
                "Affordable cost of living with homes that fit within military BAH rates",
                "Military-friendly community that understands and supports service members",
                "VA loan-friendly properties across every price range and community",
                "Outstanding outdoor recreation at Otter Creek Outdoor Recreation Area and Freeman Lake",
                "Easy I-65 access to Louisville, Nashville, and destinations throughout the region",
                "No state income tax on military retirement pay in Kentucky",
                "Strong support network of military families, veteran organizations, and on-post resources",
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

      {/* ───────────────── IDX Showcase Listings ───────────────── */}
      <section className="bg-cream py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-6 text-center">
              Homes for Sale Near Fort Knox
            </h2>
            <IdxWidget
              src="//compassandkeygroup.idxbroker.com/idx/customshowcasejs.php?widgetid=35740"
              id="idxwidgetsrc-35740"
            />
            <p className="font-body text-xs text-gray-400 text-center mt-4">
              Listing data provided by IDX Broker. Information deemed reliable
              but not guaranteed.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-12 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Planning a PCS to Fort Knox?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              Let a fellow veteran make your transition as smooth as possible.
              Reach out today and we&apos;ll start planning your move.
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
            <div className="mt-6">
              <Link
                href="/military-relocation"
                className="text-white/80 hover:text-white underline underline-offset-4 text-lg transition-colors"
              >
                Learn More About Our Military Relocation Services
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
