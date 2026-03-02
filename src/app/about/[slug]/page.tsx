import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SocialIcons from "@/components/SocialIcons";
import TestimonialCard from "@/components/TestimonialCard";
import { team, getTeamMemberBySlug } from "@/data/team";
import { getReviewsByAgent } from "@/data/reviews";
import { SITE_URL } from "@/lib/schema";

export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) return {};
  return {
    title: { absolute: `${member.name} \u2014 ${member.title} | Compass & Key Group` },
    description: `Meet ${member.name}, ${member.title} at Compass & Key Group. Serving Elizabethtown, Fort Knox, and Central Kentucky. License ${member.license}.`,
    openGraph: {
      title: `${member.name} \u2014 ${member.title} | Compass & Key Group`,
      description: member.bio,
      url: `${SITE_URL}/about/${member.slug}`,
      images: [{ url: `${SITE_URL}${member.headshot}` }],
    },
  };
}

export default async function AgentProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) notFound();

  const agentReviews = getReviewsByAgent(member.slug);
  const otherMembers = team.filter((m) => m.slug !== member.slug);
  const firstName = member.name.split(" ")[0];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.title,
    telephone: member.phone,
    email: member.email,
    image: `${SITE_URL}${member.headshot}`,
    url: `${SITE_URL}/about/${member.slug}`,
    worksFor: {
      "@type": "RealEstateAgent",
      name: "Compass and Key Group",
      url: SITE_URL,
    },
    sameAs: Object.values(member.socialLinks).filter(Boolean),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero */}
      <section className="hero-gradient py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
              {member.name}
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-lg md:text-xl text-white/90">
              {member.title}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Profile */}
      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Headshot */}
            <AnimateOnScroll>
              <div className="h-[500px] sm:h-[560px] rounded-2xl overflow-hidden relative">
                <Image
                  src={member.headshot}
                  alt={`${member.name} \u2014 ${member.title} at Compass & Key Group`}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </AnimateOnScroll>

            {/* Info */}
            <AnimateOnScroll delay={150}>
              <div>
                <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-2">
                  {member.title}
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-2">
                  {member.name}
                </h2>
                <p className="text-sm text-gray-400 mb-6">
                  License {member.license}
                </p>

                {/* Bio */}
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  {member.fullBio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="mt-8 space-y-3">
                  {member.office && (
                    <div className="flex items-start gap-3 text-gray-600">
                      <svg
                        className="w-5 h-5 text-gold mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      <span>{member.office}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-3 text-gray-600">
                    <svg
                      className="w-5 h-5 text-gold shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    <a
                      href={`tel:${member.phone.replace(/[^+\d]/g, "")}`}
                      className="hover:text-gold transition-colors"
                    >
                      {member.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <svg
                      className="w-5 h-5 text-gold shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <a
                      href={`mailto:${member.email}`}
                      className="hover:text-gold transition-colors"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6">
                  <SocialIcons
                    links={member.socialLinks}
                    name={member.name}
                    className="flex gap-4"
                    linkClass="w-10 h-10 bg-cream hover:bg-gold rounded-md flex items-center justify-center text-slate hover:text-white transition-colors"
                  />
                </div>
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
              Ready to Work With {firstName}?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              Get in touch today and let&apos;s start the conversation about
              your real estate goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-lg"
              >
                Contact {firstName}
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
                href={`tel:${member.phone.replace(/[^+\d]/g, "")}`}
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
                {member.phone}
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Client Reviews */}
      {agentReviews.length > 0 && (
        <section className="bg-cream py-12 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="text-center mb-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                  What Clients Say About {firstName}
                </h2>
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {agentReviews.map((review, i) => (
                <AnimateOnScroll key={review.id} delay={i * 100}>
                  <TestimonialCard review={review} />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Meet the Rest of Our Team */}
      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Meet the Rest of Our Team
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {otherMembers.map((other, i) => (
              <AnimateOnScroll key={other.id} delay={i * 100}>
                <Link
                  href={`/about/${other.slug}/`}
                  className="group block bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="h-64 relative bg-gradient-to-br from-slate/20 to-navy/30">
                    <Image
                      src={other.headshot}
                      alt={other.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-heading text-xl font-bold text-navy mb-1">
                      {other.name}
                    </h3>
                    <p className="text-sm font-medium text-gold mb-3">
                      {other.title}
                    </p>
                    <span className="text-sm font-semibold text-gold hover:text-gold-light transition-colors">
                      View Profile &rarr;
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
