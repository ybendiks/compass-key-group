import { BlogPost } from "@/data/blog-posts";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <a href="#" className="group block bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
      {/* Image Placeholder */}
      <div className="h-44 bg-gradient-to-br from-navy/10 to-slate/20 flex items-center justify-center">
        <svg className="w-10 h-10 text-navy/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      </div>
      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold text-gold bg-gold/10 px-2 py-0.5 rounded">
            {post.category}
          </span>
          <span className="text-xs text-gray-400">{post.readTime}</span>
        </div>
        <h3 className="font-heading text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors leading-snug">
          {post.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">{post.date}</span>
          <span className="text-sm font-medium text-gold group-hover:underline">
            Read More &rarr;
          </span>
        </div>
      </div>
    </a>
  );
}
