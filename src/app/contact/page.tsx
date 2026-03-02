import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us | Elizabethtown KY Realtors",
  description:
    "Contact Compass & Key Group in Elizabethtown KY. Whether buying, selling, or relocating to Fort Knox and Central Kentucky, our team is ready to help.",
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Compass and Key Group",
    url: `${SITE_URL}/contact`,
    mainEntity: {
      "@type": "RealEstateAgent",
      name: "Compass and Key Group",
      telephone: "+1-270-735-3897",
      email: "austin@compassandkeygroup.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "617 N Mulberry St #105B",
        addressLocality: "Elizabethtown",
        addressRegion: "KY",
        postalCode: "42701",
        addressCountry: "US",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {/* Hero */}
      <section className="hero-gradient text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re buying, selling, or relocating, our team is
              ready to help you every step of the way.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="py-14 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <AnimateOnScroll>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                  Send Us a Message
                </h2>
                <ContactForm compact={false} />
              </div>
            </AnimateOnScroll>

            {/* Right: Contact Info */}
            <AnimateOnScroll delay={200}>
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-5">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-gold"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-navy">
                          Office Address
                        </p>
                        <p className="text-gray-600 text-sm">
                          617 N Mulberry St #105B
                          <br />
                          Elizabethtown, KY 42701
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-gold"
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
                      </div>
                      <div>
                        <p className="font-semibold text-navy">Phone</p>
                        <a
                          href="tel:+12707353897"
                          className="text-gray-600 text-sm hover:text-gold transition-colors"
                        >
                          (270) 735-3897
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-gold"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-navy">Email</p>
                        <a
                          href="mailto:austin@compassandkeygroup.com"
                          className="text-gray-600 text-sm hover:text-gold transition-colors"
                        >
                          austin@compassandkeygroup.com
                        </a>
                      </div>
                    </div>

                    {/* Office Hours */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-gold"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-navy">Office Hours</p>
                        <div className="text-gray-600 text-sm space-y-0.5">
                          <p>Mon &ndash; Fri: 9am &ndash; 6pm</p>
                          <p>Sat: 10am &ndash; 4pm</p>
                          <p>Sun: By Appointment</p>
                        </div>
                      </div>
                    </div>

                    {/* License */}
                    <p className="text-xs text-gray-400 pt-2">
                      KY Real Estate License #277797
                    </p>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <AnimateOnScroll delay={300}>
                  <div className="rounded-xl overflow-hidden border border-gray-200">
                    <iframe
                      src="https://www.google.com/maps?q=617+N+Mulberry+St+%23105B,+Elizabethtown,+KY+42701&output=embed"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Compass & Key Group Office Location"
                    />
                  </div>
                </AnimateOnScroll>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h3 className="font-heading text-xl font-bold text-navy mb-6">
              Follow Us
            </h3>
            <div className="flex items-center justify-center gap-6">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/Compass-and-Key-Group,-Real-Broker-122104284446009536"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-navy/5 hover:bg-gold/10 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 text-navy group-hover:text-gold transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/austinkrealtor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-navy/5 hover:bg-gold/10 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 text-navy group-hover:text-gold transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/austin-kutz-5657132b4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-navy/5 hover:bg-gold/10 rounded-full flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 text-navy group-hover:text-gold transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href="https://twitter.com/austinkrealtor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-navy/5 hover:bg-gold/10 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Twitter/X"
              >
                <svg
                  className="w-5 h-5 text-navy group-hover:text-gold transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
