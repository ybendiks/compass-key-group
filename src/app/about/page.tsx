import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TeamCard from "@/components/TeamCard";
import { team } from "@/data/team";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute:
      "About Us & Our Team | Compass & Key Group Elizabethtown KY",
  },
  description:
    "Meet the veteran-owned team behind Compass & Key Group. Serving Elizabethtown, Fort Knox, and Central Kentucky with integrity, service, and proven results.",
};

const values = [
  {
    title: "Integrity",
    description:
      "Honest, transparent communication in every transaction. We tell you what you need to hear, not just what you want to hear.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Service",
    description:
      "Going above and beyond for every client, every time. Your goals become our mission, and we don't stop until you're home.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Results",
    description:
      "Data-driven strategies that deliver measurable outcomes. We track market trends, analyze comparables, and price to win.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  const personSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Austin Kutz",
      jobTitle: "Owner / Realtor",
      worksFor: {
        "@type": "RealEstateAgent",
        name: "Compass and Key Group",
        url: SITE_URL,
      },
      knowsAbout: ["Real Estate", "Military Relocation", "VA Loans"],
      award: "U.S. Marine Corps Veteran",
      url: `${SITE_URL}/about/austin-kutz`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Steve Nikirk",
      jobTitle: "Real Estate Agent",
      worksFor: {
        "@type": "RealEstateAgent",
        name: "Compass and Key Group",
        url: SITE_URL,
      },
      alumniOf: "Oakland City University",
      url: `${SITE_URL}/about/steve-nikirk`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Ciara Hardesty",
      jobTitle: "Real Estate Agent",
      worksFor: {
        "@type": "RealEstateAgent",
        name: "Compass and Key Group",
        url: SITE_URL,
      },
      knowsAbout: ["Local Builders", "Hardin County Real Estate"],
      url: `${SITE_URL}/about/ciara-hardesty`,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchemas) }}
      />
      {/* Hero */}
      <section className="hero-gradient py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet the Team Behind Compass & Key
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              A veteran-owned brokerage built on the values of integrity,
              service, and results. We&apos;re here to guide you home.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Austin's Story */}
      <section className="py-12 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Headshot */}
            <AnimateOnScroll>
              <Link href="/about/austin-kutz/" className="block">
                <div className="h-[500px] sm:h-[560px] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/austin-kutz.webp"
                    alt="Austin Kutz — Founder & Owner of Compass & Key Group"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </Link>
            </AnimateOnScroll>

            {/* Bio */}
            <AnimateOnScroll delay={150}>
              <div>
                <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-2">
                  Owner / Realtor
                </p>
                <Link href="/about/austin-kutz/" className="hover:text-gold transition-colors">
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
                    Austin Kutz
                  </h2>
                </Link>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Austin is a proud U.S. Marine Corps veteran who enlisted
                    after high school in Wisconsin. He served 5 years on active
                    duty, including 2 overseas tours. His military career
                    instilled the discipline, attention to detail, and unwavering
                    commitment to mission success that define everything he does
                    today.
                  </p>
                  <p>
                    After transitioning to the U.S. Army Reserves, Austin
                    pursued a Bachelor&apos;s Degree in Business and discovered
                    his passion for real estate. He founded Compass and Key Group
                    to bring the same values that shaped his military service —
                    integrity, accountability, and putting others first — into
                    every real estate transaction.
                  </p>
                  <p>
                    Austin prides himself on his determination and work ethic in
                    all aspects of real estate. His relentless follow through and
                    attention to detail simply gets the job done with no excuses.
                    With deep expertise in the Fort Knox and Elizabethtown area,
                    he&apos;s passionate about helping families, veterans, and
                    active-duty service members find their perfect home.
                  </p>
                </div>

                {/* Quote */}
                <div className="mt-8 border-l-4 border-gold pl-6 py-2">
                  <p className="text-lg font-heading text-navy italic leading-relaxed">
                    &ldquo;As a veteran-owned business, integrity, service, and
                    results drive everything we do.&rdquo;
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    — Austin Kutz, Owner
                  </p>
                </div>

                <p className="text-xs text-gray-400 mt-4">
                  KY Real Estate License #277797
                </p>

                <Link
                  href="/about/austin-kutz/"
                  className="inline-block mt-4 text-sm font-semibold text-gold hover:text-gold-light transition-colors"
                >
                  View Full Profile &rarr;
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 lg:py-14 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
                Our Team
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Every member of our team shares the same commitment to client
                success. Get to know the people who will guide you through your
                real estate journey.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <AnimateOnScroll key={member.id} delay={i * 100}>
                <TeamCard member={member} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-12 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                To deliver an exceptional real estate experience rooted in the
                values that matter most — honesty, hard work, and measurable
                results for every client.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <AnimateOnScroll key={value.title} delay={i * 100}>
                <div className="text-center p-8 rounded-lg border border-gray-100 bg-white hover:shadow-lg transition-shadow h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-pale text-gold mb-6">
                    {value.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-12 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
              Work With Our Team
            </h2>
            <p className="text-white/90 text-lg max-w-xl mx-auto mb-8">
              Ready to buy, sell, or relocate? Our team is here to make your
              real estate goals a reality. Reach out today and let&apos;s get
              started.
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
