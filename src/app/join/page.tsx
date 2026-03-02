import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Join Our Team",
  description:
    "Build your real estate career with Compass & Key Group. Veteran-led culture, Real Broker LLC partnership, and a growth-focused environment in Central Kentucky.",
};

const benefits = [
  {
    title: "Veteran-Led Culture",
    description:
      "Built on integrity, accountability, and service. We hold ourselves to the highest standard because our clients deserve nothing less.",
    icon: (
      <svg
        className="w-8 h-8 text-gold"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 21V5a2 2 0 012-2h4l2 3h4a2 2 0 012 2v2M3 21l9-9m0 0l6 6m-6-6v12"
        />
      </svg>
    ),
  },
  {
    title: "Real Broker, LLC",
    description:
      "Innovative brokerage model with industry-leading commission splits. Keep more of what you earn while having access to world-class tools.",
    icon: (
      <svg
        className="w-8 h-8 text-gold"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Growth-Focused",
    description:
      "Training, mentorship, and resources to build your business. We invest in your success from day one with hands-on coaching.",
    icon: (
      <svg
        className="w-8 h-8 text-gold"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: "Team First",
    description:
      "Supportive environment where everyone succeeds together. Collaboration over competition, because rising tides lift all boats.",
    icon: (
      <svg
        className="w-8 h-8 text-gold"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

const realBrokerBenefits = [
  "Industry-leading commission splits",
  "Revenue sharing program",
  "Equity opportunities",
  "Cloud-based technology platform",
  "No franchise fees",
];

export default function JoinPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Build your career with a team that values growth, culture, and
              results.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Why Compass &amp; Key Group?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We&apos;re building something special in Central Kentucky, and
                we want the right people to be part of it.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <AnimateOnScroll key={benefit.title} delay={index * 100}>
                <div className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-md transition-shadow h-full">
                  <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-5">
                    {benefit.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Austin's Quote */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="relative bg-cream rounded-xl p-8 md:p-12">
              {/* Gold accent bar */}
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gold rounded-full" />
              <div className="pl-6 md:pl-8">
                <svg
                  className="w-10 h-10 text-gold/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <blockquote className="font-heading text-xl md:text-2xl lg:text-3xl text-navy leading-relaxed mb-6">
                  My job is to find and attract mastery-based agents to the
                  office, protect the culture, and make sure everyone is happy!
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-gold rounded-full" />
                  <div>
                    <p className="font-semibold text-navy">Austin Kutz</p>
                    <p className="text-sm text-gray-500">Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Real Broker Benefits */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                  Real Broker, LLC Benefits
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  As part of the Compass &amp; Key Group, you&apos;ll enjoy all
                  the benefits of being partnered with Real Broker, LLC &mdash;
                  one of the fastest-growing brokerages in the country.
                </p>
                <ul className="space-y-4">
                  {realBrokerBenefits.map((benefit, index) => (
                    <AnimateOnScroll key={benefit} delay={index * 100}>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-3.5 h-3.5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-navy font-medium">{benefit}</span>
                      </li>
                    </AnimateOnScroll>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-10 h-10 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-2">
                    Innovative Brokerage Model
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Real Broker, LLC combines cutting-edge technology with an
                    agent-centric model that puts more money in your pocket and
                    gives you the freedom to build your business your way.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Ready to Grow Your Career?
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Fill out the interest form below and we&apos;ll reach out to
                learn more about you and discuss how Compass &amp; Key Group can
                help you thrive.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="bg-cream rounded-xl p-8 md:p-10 border border-gray-100">
              <h3 className="font-heading text-xl font-bold text-navy mb-6 text-center">
                Interest Form
              </h3>
              <ContactForm compact={true} />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
