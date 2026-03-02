import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Homes for Sale in Elizabethtown KY",
  description:
    "Find homes for sale in Elizabethtown, Kentucky. Explore neighborhoods, schools, housing market data, and lifestyle info from local real estate experts at Compass & Key Group.",
};

export default function ElizabethtownPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Elizabethtown, Kentucky
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Small-City Charm, Big Opportunity
          </p>
        </div>
      </section>

      {/* Area Overview */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Welcome to E-Town
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Elizabethtown &mdash; known locally as &ldquo;E-town&rdquo;
                &mdash; is the county seat of Hardin County and one of the
                fastest-growing communities in the Commonwealth of Kentucky.
                With a population of approximately 33,000 residents, E-town
                strikes the ideal balance between small-city warmth and the
                conveniences of a larger metro. Located along the I-65 corridor,
                the city sits just 45 minutes south of Louisville and roughly
                two hours north of Nashville, making it a strategic hub for
                commuters and businesses alike.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The city blends historic character with modern development in a
                way few Kentucky communities can match. Downtown Elizabethtown
                centers around a charming town square lined with locally owned
                shops, restaurants, and professional offices. Beyond downtown,
                you&apos;ll find Freeman Lake &mdash; a 170-acre recreational
                gem &mdash; Swope&apos;s Cars of Yesteryear museum, and a
                calendar full of community events that bring neighbors together
                year-round.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Elizabethtown serves as the commercial and healthcare center for
                the surrounding region. Baptist Health Hardin provides
                comprehensive medical services, while a growing retail and
                dining scene continues to attract new businesses. Major
                employers, combined with proximity to Fort Knox and the
                Louisville job market, make E-town an attractive destination for
                families, professionals, and retirees looking for quality of
                life without the big-city price tag.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Lifestyle & Community */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Lifestyle &amp; Community
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Downtown E-town has experienced a renaissance in recent years,
                with locally owned restaurants, boutique shops, and specialty
                coffee houses breathing new life into the historic district.
                Freeman Lake is the community&apos;s outdoor centerpiece,
                offering fishing, kayaking, scenic walking trails, and a popular
                playground that draws families every weekend. Whether you prefer
                a morning jog around the lake or an afternoon browsing the
                downtown shops, Elizabethtown delivers a lifestyle that feels
                both active and unhurried.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The community calendar stays full throughout the year. The
                Heartland Festival celebrates E-town&apos;s heritage each
                summer, the Christmas Parade transforms downtown into a holiday
                destination, and local farmers&apos; markets showcase regional
                produce and artisan goods. Beyond the city limits,
                Elizabethtown&apos;s location provides easy access to Mammoth
                Cave National Park &mdash; the world&apos;s longest known cave
                system &mdash; and the Abraham Lincoln Birthplace National
                Historical Park in nearby Hodgenville, adding world-class day
                trips to the list of local perks.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Schools & Education */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Schools &amp; Education
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Families moving to Elizabethtown have access to two strong
                public school districts. Elizabethtown Independent Schools is a
                smaller, highly rated system known for its tight-knit
                community feel and smaller class sizes. Standout campuses
                include Elizabethtown High School, T.K. Stone Middle School, and
                Morningside Elementary &mdash; all of which consistently perform
                well in state assessments and enjoy strong parental involvement.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The Hardin County Schools district is the larger system serving
                the broader area, offering a wide range of academic programs,
                extracurricular activities, and career and technical education
                pathways. For higher education, Elizabethtown Community &amp;
                Technical College provides associate degrees and workforce
                training, while satellite campuses of Western Kentucky
                University and the University of Louisville bring four-year
                degree programs within easy reach &mdash; all without a long
                commute.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Housing Market Snapshot */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Housing Market Snapshot
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                The Elizabethtown housing market offers something for nearly
                every budget. Home prices typically range from $180,000 for
                starter homes and townhomes up to $500,000 and beyond for
                larger, custom-built properties. The median home price sits
                around $265,000 &mdash; significantly more affordable than
                Louisville and many other growing Kentucky cities while still
                delivering excellent value in terms of square footage, lot size,
                and neighborhood quality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Buyers will find a healthy mix of housing types: charming
                historic homes near the town square, mid-century ranch homes in
                established neighborhoods, and brand-new construction on the
                outskirts of town. The market has been competitive, with
                well-priced homes moving quickly. Sellers benefit from strong
                demand, while buyers can still find value &mdash; especially
                with the guidance of an agent who knows the local inventory
                inside and out.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Neighborhoods to Explore */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Neighborhoods to Explore
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Elizabethtown offers a diverse range of neighborhoods, each with
              its own character and appeal. Here are some of the most popular
              areas our buyers explore.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cream rounded-xl p-6 border border-gold-pale">
                <h3 className="font-heading text-xl text-navy font-bold mb-2">
                  Woodland Hills
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Established neighborhood with tree-lined streets, mature
                  landscaping, and a strong sense of community. Popular with
                  families for its central location and walkability.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6 border border-gold-pale">
                <h3 className="font-heading text-xl text-navy font-bold mb-2">
                  Helmwood Heights
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A family-friendly subdivision with well-maintained homes,
                  quiet streets, and convenient access to schools and shopping.
                  One of E-town&apos;s most sought-after neighborhoods.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6 border border-gold-pale">
                <h3 className="font-heading text-xl text-navy font-bold mb-2">
                  Heartland
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A newer development offering modern floor plans, community
                  amenities, and that fresh-build feel. Ideal for buyers who
                  want updated finishes and energy-efficient construction.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6 border border-gold-pale">
                <h3 className="font-heading text-xl text-navy font-bold mb-2">
                  The Gates
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  An upscale community with larger lots, premium finishes, and
                  a polished aesthetic. A top choice for buyers looking for a
                  higher-end home in Elizabethtown.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6 border border-gold-pale">
                <h3 className="font-heading text-xl text-navy font-bold mb-2">
                  Freeman Lake Area
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Scenic and walkable, properties near Freeman Lake enjoy
                  proximity to trails, water access, and some of the most
                  picturesque views in town.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6 border border-gold-pale">
                <h3 className="font-heading text-xl text-navy font-bold mb-2">
                  Rural Hardin County
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  For buyers who want land, privacy, and room to spread out,
                  the surrounding Hardin County countryside offers acreage
                  properties with pastoral views just minutes from town.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why Live Here */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Live in Elizabethtown?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              E-town consistently ranks among the best places to live in
              Kentucky, and it&apos;s easy to see why.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <ul className="space-y-4">
              {[
                "Affordable cost of living compared to Louisville and other growing Kentucky cities",
                "Excellent public schools across two well-regarded districts",
                "Growing job market with healthcare, logistics, and military-adjacent industries",
                "Easy I-65 access connecting Louisville, Nashville, and everywhere in between",
                "Outstanding outdoor recreation at Freeman Lake, Mammoth Cave, and beyond",
                "Strong sense of community with active civic organizations and local events",
                "Proximity to Fort Knox, providing stable military and civilian employment",
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
              Ready to Find Your Home in Elizabethtown?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              Whether you&apos;re relocating to the area or looking for your
              next home right here in E-town, our team is ready to help you
              find the perfect fit.
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
