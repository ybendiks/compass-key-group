export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "first-time-homebuyer-guide-elizabethtown",
    title: "First-Time Homebuyer's Guide to Elizabethtown",
    excerpt:
      "Everything you need to know about buying your first home in E-town — from neighborhoods and schools to financing options and what to expect at closing.",
    date: "February 15, 2025",
    category: "Buying",
    readTime: "8 min read",
  },
  {
    id: 2,
    slug: "pcs-to-fort-knox",
    title: "PCS to Fort Knox? Here's What You Need to Know",
    excerpt:
      "A comprehensive guide for military families relocating to Fort Knox. Covers housing options, schools, BAH rates, and the best neighborhoods near post.",
    date: "January 28, 2025",
    category: "Military",
    readTime: "10 min read",
  },
  {
    id: 3,
    slug: "elizabethtown-housing-market-update-2025",
    title: "Elizabethtown Housing Market Update 2025",
    excerpt:
      "Market trends, median prices, inventory levels, and what buyers and sellers can expect in the Elizabethtown real estate market this year.",
    date: "January 10, 2025",
    category: "Market Update",
    readTime: "6 min read",
  },
  {
    id: 4,
    slug: "5-things-before-selling-your-home",
    title: "5 Things to Know Before Selling Your Home",
    excerpt:
      "From pricing strategy to staging tips, here are the five most important things every seller should know before listing their home in today's market.",
    date: "December 18, 2024",
    category: "Selling",
    readTime: "5 min read",
  },
];
