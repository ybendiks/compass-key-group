import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import IdxWidget from "@/components/IdxWidget";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Homes for Sale in Vine Grove KY",
  description:
    "Explore homes for sale in Vine Grove KY. Affordable small-town living near Fort Knox with larger lots, quiet neighborhoods, and a tight-knit community.",
};

export default function VineGrovePage() {
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Vine Grove, Kentucky",
    description:
      "Explore homes for sale in Vine Grove KY. Affordable small-town living near Fort Knox from Compass and Key Group.",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.8101,
      longitude: -86.0263,
    },
    url: `${SITE_URL}/areas/vine-grove`,
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
            Vine Grove, Kentucky
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Small-Town Living Near Fort Knox
          </p>
        </div>
      </section>

      {/* Area Overview */}
      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Welcome to Vine Grove
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Vine Grove is a small, tight-knit community of approximately
                6,000 residents tucked into the heart of Hardin County. Nestled
                between Radcliff and Elizabethtown, it offers a quieter, more
                rural pace of life while remaining just minutes from Fort Knox
                and all the amenities of the larger surrounding cities. For
                families and individuals who crave a genuine small-town
                atmosphere without giving up convenience, Vine Grove hits the
                sweet spot that bigger communities simply cannot replicate.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The appeal of Vine Grove is straightforward: more space, larger
                lots, lower costs, and a neighborhood feel where people actually
                know each other by name. Military families stationed at Fort
                Knox and civilian professionals working in the area are
                increasingly discovering what longtime residents have always
                known &mdash; that Vine Grove delivers a quality of life that
                punches far above its size. You get the breathing room of a
                rural community with the practical benefits of being close to
                everything you need.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The community has its own city government, police department,
                and parks, giving it a distinct identity separate from its
                larger neighbors. That independence matters to residents who
                take pride in their town and want a say in how it grows. Vine
                Grove is not a suburb &mdash; it is its own place, with its own
                character, and people who choose to live here do so with
                intention.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Lifestyle & Community */}
      <section className="bg-cream py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll delay={100}>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Lifestyle &amp; Community
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Life in Vine Grove moves at a slower, more intentional pace.
                Neighbors know each other, community events bring people
                together, and the cost of living is noticeably lower than in
                Elizabethtown or even Radcliff. The town has local churches
                spanning multiple denominations, small businesses that have
                served the community for years, and parks that give families
                space to gather. Vine Grove City Park is a favorite gathering
                spot with playgrounds, picnic areas, and open green space where
                kids can run and play safely. It is the kind of place where
                people wave from their front porches and keep an eye out for
                each other.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Residents also enjoy easy access to outstanding outdoor
                recreation. Otter Creek Outdoor Recreation Area, part of the
                Fort Knox reservation, is located nearby and offers miles of
                hiking trails, fishing spots, and camping facilities surrounded
                by beautiful Kentucky woodland. For shopping, dining, and
                entertainment, Elizabethtown&apos;s retail corridors are just a
                10 to 15 minute drive away, giving Vine Grove residents the best
                of both worlds: peaceful daily life at home and modern
                conveniences a short trip down the road. It is the kind of
                balance that families with children, retirees, and anyone tired
                of crowded subdivisions deeply appreciate.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Schools & Education */}
      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll delay={100}>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Schools &amp; Education
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Vine Grove is served by Hardin County Schools, and one of its
                strongest draws for families is the small-school experience that
                comes with living in a close-knit community. Vine Grove
                Elementary is known for strong parent involvement, accessible
                teachers, and a supportive environment where students are not
                just numbers in a system. That personal attention makes a real
                difference, especially for military children who may be
                adjusting to a new school mid-year after a PCS move.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Students feed into middle and high schools within the broader
                Hardin County school system, which is one of the largest and
                most resourced districts in the state. For families stationed at
                Fort Knox, on-post DoDEA elementary schools are also an option
                for active-duty dependents. The smaller school environment in
                Vine Grove is a significant draw for parents who want their
                children to receive more individualized attention, build
                meaningful relationships with teachers, and grow up in a setting
                where the school truly feels like part of the community.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Housing Market Snapshot */}
      <section className="bg-cream py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll delay={100}>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Housing Market Snapshot
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Homes in Vine Grove typically range from $120,000 to $280,000,
                making it one of the most affordable communities in the entire
                Fort Knox area. The median home price sits around $185,000
                &mdash; significantly lower than what you will find in
                Elizabethtown or Louisville. For military buyers using VA loans,
                this price range means homeownership is well within reach, often
                with monthly payments lower than comparable rental properties in
                the region.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                What sets Vine Grove apart from more developed communities is
                the size of the properties. Lots tend to be noticeably larger
                compared to subdivisions in Radcliff or Elizabethtown, and
                there is more land available for buyers who want acreage. The
                housing stock includes a mix of ranch-style homes, split-levels
                built from the 1980s through the 2000s, and some newer
                construction. Several properties offer one to five or more acres
                &mdash; a rarity at this price point in more built-up areas. For
                buyers who dream of a hobby farm, space for a workshop, room for
                the kids to roam, or simply a bigger yard, Vine Grove delivers
                options that are hard to find elsewhere without a much higher
                price tag.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Neighborhoods & Property Types */}
      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll delay={100}>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Neighborhoods &amp; Property Types
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                <strong>Vine Grove proper</strong> offers in-town homes with
                sidewalks, a walkable feel, and the convenience of being close
                to local shops and the city park. These tend to be older,
                well-maintained homes on modest lots &mdash; perfect for buyers
                who want the small-town experience without needing acreage.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                <strong>Rural Vine Grove</strong>, on the outskirts of town,
                is where you will find larger lots and acreage properties. This
                is the sweet spot for families who want space, privacy, and a
                country feel while still being minutes from schools, shopping,
                and Fort Knox. The nearby <strong>Rineyville area</strong>, an
                unincorporated community with a similar rural character, offers
                additional options for buyers seeking land and elbow room.
                Properties along <strong>Brandenburg Road</strong> round out the
                choices with a mix of established homes and wooded parcels.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                For buyers wanting a hobby farm, a few acres for horses, a
                detached workshop, or just a bigger yard than what subdivisions
                typically offer, Vine Grove and its surrounding area deliver
                exactly that &mdash; at prices that leave room in the budget for
                the improvements and projects that make a property truly your
                own.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why Live in Vine Grove */}
      <section className="bg-cream py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll delay={100}>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Why Live in Vine Grove
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
                    Most affordable housing in the Fort Knox area
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
                    Larger lots and acreage available
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
                    Quiet, family-friendly small-town atmosphere
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
                    10-15 minutes to Fort Knox main gate
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
                    Close to both Elizabethtown and Radcliff amenities
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
                    Lower property taxes than larger cities
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
                    Strong sense of community and neighborliness
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
                    Outdoor recreation at nearby Otter Creek
                  </span>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ───────────────── IDX Showcase Listings ───────────────── */}
      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-6 text-center">
              Homes for Sale in Vine Grove
            </h2>
            <IdxWidget
              src="//compassandkeygroup.idxbroker.com/idx/customshowcasejs.php?widgetid=35736"
              id="idxwidgetsrc-35736"
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
              Ready to Find Your Home in Vine Grove?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              If you&apos;re looking for affordable space, a welcoming
              community, and easy access to Fort Knox, Vine Grove might be
              exactly what you need. Relocating to Fort Knox? Check out our{" "}
              <Link
                href="/military-relocation"
                className="text-gold-light underline hover:text-gold transition-colors"
              >
                Military Relocation Services
              </Link>
              .
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
