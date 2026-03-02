import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export interface RelatedArticle {
  title: string;
  href: string;
}

interface BlogArticleLayoutProps {
  title: string;
  date: string;
  readTime: string;
  category: string;
  heroDescription?: string;
  children: React.ReactNode;
  relatedArticles: RelatedArticle[];
}

export default function BlogArticleLayout({
  title,
  date,
  readTime,
  category,
  heroDescription,
  children,
  relatedArticles,
}: BlogArticleLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="flex items-center gap-3 mb-4">
              <Link
                href="/blog"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                Blog
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-sm text-gold">{category}</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {title}
            </h1>
            {heroDescription && (
              <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                {heroDescription}
              </p>
            )}
            <div className="flex items-center gap-4 mt-6 text-sm text-white/70">
              <span>{date}</span>
              <span className="w-1 h-1 bg-white/40 rounded-full" />
              <span>{readTime}</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="article-body">{children}</div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 lg:py-16 bg-cream">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="block bg-white rounded-lg p-5 border border-gray-100 hover:shadow-md hover:border-gold/30 transition-all group"
                  >
                    <h3 className="font-heading text-base font-semibold text-navy group-hover:text-gold transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <span className="text-sm text-gold mt-2 inline-block">
                      Read more &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="hero-gradient text-white py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Ready to Find Your Perfect Home?
            </h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Whether you&apos;re buying, selling, or relocating to Central
              Kentucky, our team is here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-gold hover:bg-gold-light text-white font-semibold py-3 px-8 rounded-md transition-colors"
              >
                Contact Us Today
              </Link>
              <Link
                href="/buy"
                className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-md transition-colors border border-white/20"
              >
                Browse Homes
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
