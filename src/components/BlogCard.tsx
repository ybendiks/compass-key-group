import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/data/blog-posts";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
    >
      {/* Hero Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.heroImage}
          alt={`${post.title} — ${post.category} area, Central Kentucky`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold text-gold bg-gold/10 px-2 py-0.5 rounded">
            {post.category}
          </span>
          <span className="text-xs text-gray-400">{post.readTime}</span>
        </div>
        <h3 className="font-heading text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors leading-snug">
          {post.title}
        </h3>
        <p className="text-base text-gray-600 leading-relaxed mb-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">{post.date}</span>
          <span className="text-sm font-medium text-gold group-hover:underline">
            Read More &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
