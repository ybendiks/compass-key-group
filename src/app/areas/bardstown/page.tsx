import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Homes for Sale in Bardstown KY",
  description:
    "Explore homes for sale in Bardstown KY — the Bourbon Capital of the World. Historic charm, award-winning dining, and affordable Nelson County real estate.",
};

export default function BardstownPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Bardstown, Kentucky
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Bourbon Capital of the World
          </p>
        </div>
      </section>

      {/* Area Overview */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Welcome to Bardstown
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Bardstown is the county seat of Nelson County, home to
                approximately 13,000 residents, and one of the most
                distinctive small towns in America. Named &ldquo;The Most
                Beautiful Small Town in America&rdquo; by Rand McNally,
                Bardstown enchants visitors and residents alike with its
                tree-lined streets, meticulously preserved 18th-century
                architecture, and a Main Street district that feels like
                stepping into a storybook. But Bardstown is far more than
                just a pretty face &mdash; it&apos;s a thriving community with
                a growing residential market and a global reputation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Bardstown is famous worldwide as the heart of Kentucky&apos;s
                bourbon industry. The town and surrounding Nelson County are
                home to legendary distilleries including Jim Beam, Maker&apos;s
                Mark, Heaven Hill, and the state-of-the-art Bardstown Bourbon
                Company. The Kentucky Bourbon Trail draws hundreds of thousands
                of visitors annually, fueling a vibrant local economy built
                around hospitality, craft spirits, and culinary tourism.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Located about 40 minutes from both Louisville and
                Elizabethtown, Bardstown offers small-town living with
                convenient access to larger metro amenities. The town&apos;s
                growing residential market is attracting buyers who want a
                slower pace of life without sacrificing cultural richness
                &mdash; people who appreciate world-class dining, historic
                architecture, and genuine community connections that are
                increasingly hard to find.
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
                The bourbon trail is Bardstown&apos;s marquee attraction, but
                residents enjoy it on a deeper level than any tourist ever
                could. World-class distillery tours, private tasting rooms, and
                bourbon-themed dining experiences are part of everyday life
                here. Restaurants like the Old Talbott Tavern &mdash; one of the
                oldest stagecoach stops in America &mdash; serve dishes that
                pair perfectly with locally crafted spirits, while newer
                establishments continue to push Bardstown&apos;s culinary
                reputation to national prominence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Beyond bourbon, the community offers a rich cultural calendar.
                My Old Kentucky Home State Park hosts the annual Stephen Foster
                Story, an outdoor musical that has been running for decades.
                Downtown Bardstown is home to independent restaurants, antique
                shops, and art galleries that reward an afternoon of
                exploration. The Kentucky Bourbon Festival in September draws
                thousands of visitors from around the world, transforming the
                town into a week-long celebration of craft and community.
                Throughout the year, Bardstown maintains a strong sense of
                history, civic pride, and the kind of genuine neighborliness
                that defines the best of small-town Kentucky living.
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
                Families in Bardstown are served by two public school systems.
                Nelson County Schools is the larger district covering the
                broader county area, while Bardstown Independent Schools is a
                smaller, well-regarded system centered in the city itself. Both
                districts offer strong academics, active extracurricular
                programs, and the kind of community involvement that comes
                naturally in a tight-knit town.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Bardstown High School and Nelson County High School are the
                primary secondary campuses, each with loyal student bodies and
                competitive athletic programs. Thomas Nelson High School stands
                out for its strong STEM and vocational training offerings,
                preparing students for both college and skilled careers.
                Families consistently cite the smaller class sizes, accessible
                teachers, and supportive school culture as top reasons they
                choose to raise their children in the Bardstown area.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Housing Market */}
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
                Bardstown&apos;s housing market offers compelling value,
                especially for buyers who might otherwise be priced out of
                Louisville&apos;s suburban market. Home prices typically range
                from $160,000 for modest starter homes to $450,000 or more for
                larger properties with historic character or acreage. The median
                home price sits around $275,000, delivering more square footage
                and charm per dollar than comparable homes closer to
                Louisville.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The housing stock is uniquely diverse. Historic properties
                &mdash; some dating back to the early 1800s &mdash; offer
                original woodwork, period architecture, and walkable proximity
                to downtown. Established neighborhoods provide move-in-ready
                options with mature landscaping and proven value. New
                construction developments are expanding on the outskirts of
                town, meeting demand from Louisville commuters and bourbon
                industry professionals relocating to the area. Rural properties
                with acreage are available throughout Nelson County for buyers
                who want land, privacy, and sweeping views of the Kentucky
                countryside.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Neighborhoods to Explore
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Bardstown&apos;s neighborhoods range from walkable historic
              districts to spacious rural properties, offering something for
              every lifestyle.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cream rounded-xl p-6 border border-gold-pale">
                <h3 className="font-heading text-xl text-navy font-bold mb-2">
                  Downtown Bardstown
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Historic homes within walking distance of restaurants, shops,
                  and distilleries. Period architecture and tree-lined streets
                  create an unmatched small-town atmosphere.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6 border border-gold-pale">
                <h3 className="font-heading text-xl text-navy font-bold mb-2">
                  Old Bloomfield Road Area
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  An established area with a mix of home styles and sizes.
                  Mature trees, generous lot sizes, and a convenient location
                  between town and the countryside.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6 border border-gold-pale">
                <h3 className="font-heading text-xl text-navy font-bold mb-2">
                  Cathedral Manor
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A family-friendly subdivision with well-maintained homes,
                  quiet cul-de-sacs, and a neighborhood feel that appeals to
                  families with children of all ages.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6 border border-gold-pale">
                <h3 className="font-heading text-xl text-navy font-bold mb-2">
                  Rural Nelson County
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  For buyers seeking land, privacy, and stunning views,
                  properties throughout Nelson County offer acreage with the
                  rolling hills and pastoral beauty that define bourbon country.
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
              Why Live in Bardstown?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Bardstown offers a lifestyle that blends history, culture, and
              community in a way few places can match.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <ul className="space-y-4">
              {[
                "Unique bourbon country lifestyle with world-class distilleries and tasting rooms",
                "Award-winning dining scene that punches well above its weight class",
                "Beautifully preserved historic architecture throughout the downtown district",
                "More affordable than Louisville suburbs for comparable home quality and lot size",
                "Strong tourism-driven economy with growing employment opportunities",
                "Beautiful rural surroundings with rolling hills and pastoral Kentucky landscapes",
                "Tight-knit community with genuine neighborliness and civic pride",
                "Growing property values driven by increasing demand and limited inventory",
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
              Ready to Find Your Home in Bardstown?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              Whether you&apos;re drawn to the charm of historic downtown or
              the open spaces of Nelson County, our team is ready to help you
              find the perfect property.
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
