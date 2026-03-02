import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TestimonialCard from "@/components/TestimonialCard";
import { reviews } from "@/data/reviews";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Military Relocation & PCS to Fort Knox",
  description:
    "Veteran-owned military relocation services for PCS moves to Fort Knox KY. VA loan expertise, area orientation, and housing support from a Marine veteran.",
};

const militaryReviews = reviews.filter((r) => r.type === "military");

const pcsServices = [
  {
    title: "Area Orientation",
    description:
      "Virtual and in-person tours of Fort Knox communities, schools, amenities, and neighborhoods so you know exactly where you want to live before you arrive.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
  {
    title: "Home Search",
    description:
      "Curated property options matched to your BAH, timeline, and family needs. We do the heavy lifting so you can focus on your mission.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
        />
      </svg>
    ),
  },
  {
    title: "VA Loan Expertise",
    description:
      "Navigate your VA loan benefits with confidence. Zero down payment, no PMI, and we connect you with lenders who specialize in VA financing.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Transition Support",
    description:
      "From house hunting to move-in day, we handle the details. Utility setup, school enrollment info, local resources — we've got your six.",
    icon: (
      <svg
        className="w-8 h-8"
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

const vaLoanBenefits = [
  "No down payment required",
  "No private mortgage insurance (PMI)",
  "Competitive interest rates",
  "Flexible credit requirements",
  "Can be used multiple times",
];

export default function MilitaryRelocationPage() {
  const militarySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Military Relocation & PCS Services",
    description:
      "Veteran-owned military relocation services for PCS moves to Fort Knox KY. VA loan expertise, area orientation, and housing support.",
    provider: {
      "@type": "RealEstateAgent",
      name: "Compass and Key Group",
      url: SITE_URL,
    },
    areaServed: [
      { "@type": "Place", name: "Fort Knox, KY" },
      { "@type": "Place", name: "Radcliff, KY" },
      { "@type": "Place", name: "Elizabethtown, KY" },
      { "@type": "Place", name: "Vine Grove, KY" },
    ],
    serviceType: "Military Relocation",
    url: `${SITE_URL}/military-relocation`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(militarySchema) }}
      />
      {/* Hero */}
      <section className="hero-gradient py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-gold-light text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                clipRule="evenodd"
              />
            </svg>
            Veteran-Owned Brokerage
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            From One Service Member
            <br />
            to Another
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Veteran-owned. Military-experienced. Your trusted partner for PCS
            moves to Fort Knox and Central Kentucky.
          </p>
        </div>
      </section>

      {/* Austin's Military Credentials */}
      <section className="py-12 md:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="bg-navy rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
              {/* Subtle background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  {/* Military badge icon */}
                  <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center shrink-0">
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold">
                      Austin Kutz
                    </h2>
                    <p className="text-gold-light text-sm font-medium">
                      Marine Corps Veteran &middot; Broker/Owner
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <p className="text-gold font-bold text-xl">USMC</p>
                    <p className="text-white/60 text-xs mt-1">
                      Marine Corps
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <p className="text-gold font-bold text-xl">5 Years</p>
                    <p className="text-white/60 text-xs mt-1">Active Duty</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <p className="text-gold font-bold text-xl">2 Tours</p>
                    <p className="text-white/60 text-xs mt-1">Overseas</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <p className="text-gold font-bold text-xl">Reserves</p>
                    <p className="text-white/60 text-xs mt-1">
                      Army Reserves
                    </p>
                  </div>
                </div>

                <p className="text-white/80 text-lg leading-relaxed">
                  We understand military life because we&apos;ve lived it. The
                  PCS scramble, the uncertainty of a new duty station, the
                  pressure to find a home fast — we&apos;ve been there. That
                  lived experience drives everything we do for military
                  families.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* PCS Relocation Services */}
      <section className="py-12 md:py-14 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl md:text-4xl text-navy font-bold mb-4">
                Making Your PCS Move Seamless
              </h2>
              <p className="text-slate text-lg max-w-xl mx-auto">
                We handle every step of your relocation so you can focus on
                what matters most.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pcsServices.map((service, index) => (
              <AnimateOnScroll key={service.title} delay={index * 100}>
                <div className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow h-full">
                  <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-5">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-xl text-navy font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* VA Loan Resources */}
      <section className="py-12 md:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl md:text-4xl text-navy font-bold mb-4">
                VA Loan Benefits
              </h2>
              <p className="text-slate text-lg max-w-xl mx-auto">
                Your service earned you one of the most powerful home financing
                tools available. Let us help you make the most of it.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="bg-cream rounded-2xl p-8 md:p-10 border border-gold-pale">
              <ul className="space-y-4">
                {vaLoanBenefits.map((benefit) => (
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
                    <span className="text-navy font-medium text-lg">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Fort Knox Area Info */}
      <section className="py-12 md:py-14 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl md:text-4xl text-navy font-bold mb-4">
                Living Near Fort Knox
              </h2>
              <p className="text-slate text-lg max-w-2xl mx-auto">
                Fort Knox and the surrounding communities offer an affordable,
                family-friendly quality of life with everything you need close
                by.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimateOnScroll>
              <div className="bg-white rounded-xl p-8 border border-gray-100 h-full">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-5">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-navy font-bold mb-3">
                  Communities
                </h3>
                <p className="text-slate leading-relaxed">
                  Radcliff, Vine Grove, and Elizabethtown are the most popular
                  choices for military families. Each offers its own character,
                  from Radcliff&apos;s proximity to post to E-town&apos;s
                  thriving downtown and top-rated schools.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="bg-white rounded-xl p-8 border border-gray-100 h-full">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-5">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-navy font-bold mb-3">
                  Commute Times
                </h3>
                <p className="text-slate leading-relaxed">
                  Radcliff is minutes from the main gate. Elizabethtown is a
                  20&ndash;30 minute drive. Vine Grove sits right between the
                  two. All communities provide easy, low-stress commutes to
                  post.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="bg-white rounded-xl p-8 border border-gray-100 h-full">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-5">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-navy font-bold mb-3">
                  Schools &amp; Amenities
                </h3>
                <p className="text-slate leading-relaxed">
                  Hardin County schools are well-regarded, with strong support
                  for military-connected students. The area has modern
                  healthcare, shopping, dining, and outdoor recreation at
                  Freeman Lake and Otter Creek.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Military Testimonials */}
      {militaryReviews.length > 0 && (
        <section className="py-12 md:py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="text-center mb-8">
                <h2 className="font-heading text-3xl md:text-4xl text-navy font-bold mb-4">
                  What Military Families Say
                </h2>
                <p className="text-slate text-lg max-w-xl mx-auto">
                  Real stories from service members and military families
                  we&apos;ve helped relocate to the Fort Knox area.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {militaryReviews.map((review, index) => (
                <AnimateOnScroll key={review.id} delay={index * 100}>
                  <TestimonialCard review={review} />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="hero-gradient py-12 md:py-14">
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
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
