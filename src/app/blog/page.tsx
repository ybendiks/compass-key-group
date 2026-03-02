import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Real Estate Blog | Elizabethtown KY",
  description:
    "Real estate tips, market updates, and community guides for Elizabethtown, Fort Knox, and Central Kentucky from Compass & Key Group.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Insights &amp; Resources
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Real estate tips, market updates, and community guides to help you
              make informed decisions in Central Kentucky.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 lg:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <AnimateOnScroll key={post.id} delay={index * 100}>
                <BlogCard post={post} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 lg:py-14 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-gray-100 text-center max-w-2xl mx-auto">
              <svg
                className="w-12 h-12 text-gold mx-auto mb-4"
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
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-3">
                Stay in the Loop
              </h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Get the latest market updates, new listings, and real estate
                tips delivered straight to your inbox.
              </p>
              <form
                action="#"
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="bg-gold hover:bg-gold-light text-white font-semibold py-3 px-6 rounded-md transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-3">
                No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
