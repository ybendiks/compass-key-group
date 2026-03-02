import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { SITE_URL } from "@/lib/schema";

export interface RelatedArticle {
  title: string;
  href: string;
}

const categoryHeroImages: Record<string, string> = {
  Elizabethtown:
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=600&fit=crop",
  Military:
    "https://images.unsplash.com/photo-1579912437766-7896df6d3cd3?w=1200&h=600&fit=crop",
  Bardstown:
    "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?w=1200&h=600&fit=crop",
  Radcliff:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop",
  "Vine Grove":
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=600&fit=crop",
  "I-65 Corridor":
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop",
  Louisville:
    "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=1200&h=600&fit=crop",
  "Central Kentucky":
    "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&h=600&fit=crop",
};

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
  const heroImage =
    categoryHeroImages[category] || categoryHeroImages["Central Kentucky"];

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: heroDescription || title,
    image: heroImage,
    datePublished: "2026-03-01",
    dateModified: "2026-03-01",
    author: {
      "@type": "Organization",
      name: "Compass and Key Group",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Compass and Key Group",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logos/logo-color.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      {/* Hero */}
      <section className="hero-gradient text-white py-12 lg:py-14">
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

      {/* Hero Image Banner */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
          <AnimateOnScroll>
            <div className="relative aspect-[2/1] md:aspect-[16/7] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={heroImage}
                alt={`${title} — ${category} area, Central Kentucky`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-10 lg:py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="article-body">{children}</div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-10 lg:py-12 bg-cream">
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
      <section className="hero-gradient text-white py-10 lg:py-12">
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
