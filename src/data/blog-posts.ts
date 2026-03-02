export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  heroImage: string;
}

const heroImages: Record<string, string> = {
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

function getHeroImage(category: string): string {
  return heroImages[category] || heroImages["Central Kentucky"];
}

type RawBlogPost = Omit<BlogPost, "heroImage">;

const rawPosts: RawBlogPost[] = [
  // === CROSS-HUB ARTICLES (1-8) ===
  {
    id: 1,
    slug: "best-places-live-near-fort-knox",
    title: "Best Places to Live Near Fort Knox in 2025",
    excerpt:
      "Comparing Elizabethtown, Radcliff, Vine Grove, Bardstown, and more — find the perfect community near Fort Knox for your family.",
    date: "March 2026",
    category: "Central Kentucky",
    readTime: "9 min read",
  },
  {
    id: 2,
    slug: "investing-central-kentucky-real-estate",
    title: "Investing in Central Kentucky Real Estate: A Beginner's Guide",
    excerpt:
      "From rental properties to fix-and-flips, discover why Central Kentucky is one of the best-kept secrets for real estate investors.",
    date: "March 2026",
    category: "Central Kentucky",
    readTime: "9 min read",
  },
  {
    id: 3,
    slug: "moving-to-kentucky-out-of-state-buyers",
    title: "Moving to Kentucky: What Out-of-State Buyers Need to Know",
    excerpt:
      "Relocating to the Bluegrass State? Here's your guide to taxes, cost of living, schools, and the best communities in Central Kentucky.",
    date: "March 2026",
    category: "Central Kentucky",
    readTime: "9 min read",
  },
  {
    id: 4,
    slug: "va-loans-kentucky-complete-guide",
    title: "VA Loans in Kentucky: The Complete Guide for Veterans",
    excerpt:
      "Everything veterans and active-duty service members need to know about using VA loans to buy a home in Kentucky.",
    date: "March 2026",
    category: "Central Kentucky",
    readTime: "9 min read",
  },
  {
    id: 5,
    slug: "kentucky-property-taxes-by-county",
    title: "Kentucky Property Taxes by County: How Hardin, Nelson & Bullitt Compare",
    excerpt:
      "A detailed comparison of property tax rates across Central Kentucky counties to help you budget for homeownership.",
    date: "March 2026",
    category: "Central Kentucky",
    readTime: "8 min read",
  },
  {
    id: 6,
    slug: "homeowners-insurance-kentucky",
    title: "Homeowners Insurance in Kentucky: What to Know Before You Buy",
    excerpt:
      "Average costs, coverage requirements, and tips for finding the best homeowners insurance rates in Central Kentucky.",
    date: "March 2026",
    category: "Central Kentucky",
    readTime: "7 min read",
  },
  {
    id: 7,
    slug: "central-kentucky-relocation-checklist",
    title: "The Ultimate Central Kentucky Relocation Checklist",
    excerpt:
      "Moving to Central Kentucky? Use this step-by-step checklist to make your relocation smooth and stress-free.",
    date: "March 2026",
    category: "Central Kentucky",
    readTime: "8 min read",
  },
  {
    id: 8,
    slug: "choosing-real-estate-agent-central-kentucky",
    title: "How to Choose the Right Real Estate Agent in Central Kentucky",
    excerpt:
      "What to look for in a real estate agent, the right questions to ask, and why local expertise matters in Central Kentucky.",
    date: "March 2026",
    category: "Central Kentucky",
    readTime: "7 min read",
  },

  // === FORT KNOX HUB (9-20) ===
  {
    id: 9,
    slug: "pcs-to-fort-knox-relocation-guide",
    title: "PCS to Fort Knox: The Complete Relocation Guide (2025)",
    excerpt:
      "Everything you need to know about relocating to Fort Knox — from housing and schools to BAH rates and the best nearby communities.",
    date: "March 2026",
    category: "Military",
    readTime: "10 min read",
  },
  {
    id: 10,
    slug: "on-post-vs-off-post-housing-fort-knox",
    title: "On-Post vs Off-Post Housing at Fort Knox: Pros, Cons & Costs",
    excerpt:
      "Weighing on-post convenience against off-post equity? Here's a detailed comparison to help your family decide.",
    date: "March 2026",
    category: "Military",
    readTime: "9 min read",
  },
  {
    id: 11,
    slug: "va-loan-guide-fort-knox",
    title: "VA Loan Guide for Fort Knox Service Members",
    excerpt:
      "How to use your VA loan benefit to buy a home near Fort Knox — eligibility, process, and local lender tips.",
    date: "March 2026",
    category: "Military",
    readTime: "8 min read",
  },
  {
    id: 12,
    slug: "fort-knox-bah-rates-home-search",
    title: "Fort Knox BAH Rates & What They Mean for Your Home Search",
    excerpt:
      "Understanding your Basic Allowance for Housing at Fort Knox and how it translates to buying power in the local market.",
    date: "March 2026",
    category: "Military",
    readTime: "7 min read",
  },
  {
    id: 13,
    slug: "fort-knox-schools-military-families",
    title: "Fort Knox Schools: Guide for Military Families",
    excerpt:
      "A comprehensive look at on-post and off-post school options for military families stationed at Fort Knox.",
    date: "March 2026",
    category: "Military",
    readTime: "8 min read",
  },
  {
    id: 14,
    slug: "fort-knox-gate-access-commute-times",
    title: "Fort Knox Gate Access, Commute Times & Getting Around",
    excerpt:
      "Gate locations, hours, traffic patterns, and commute times from nearby communities to help you plan your daily drive.",
    date: "March 2026",
    category: "Military",
    readTime: "7 min read",
  },
  {
    id: 15,
    slug: "pcs-fort-knox-family-perspective",
    title: "What to Expect When You PCS to Fort Knox: A Family Perspective",
    excerpt:
      "Real talk about what PCS life looks like at Fort Knox — from finding your tribe to settling kids into new schools.",
    date: "March 2026",
    category: "Military",
    readTime: "8 min read",
  },
  {
    id: 16,
    slug: "selling-home-after-pcs-fort-knox",
    title: "Selling Your Home After a PCS: Guide for Fort Knox Service Members",
    excerpt:
      "Got PCS orders? Here's how to sell your home quickly and maximize your return before your next duty station.",
    date: "March 2026",
    category: "Military",
    readTime: "7 min read",
  },
  {
    id: 17,
    slug: "fort-knox-newcomer-guide",
    title: "Fort Knox Newcomer's Guide: Resources, Contacts & Getting Settled",
    excerpt:
      "Your first 30 days at Fort Knox — key contacts, essential resources, and tips to get your family settled fast.",
    date: "March 2026",
    category: "Military",
    readTime: "8 min read",
  },
  {
    id: 18,
    slug: "military-spouse-employment-fort-knox",
    title: "Military Spouse Resources & Employment Near Fort Knox",
    excerpt:
      "Job opportunities, career resources, and support networks for military spouses in the Fort Knox area.",
    date: "March 2026",
    category: "Military",
    readTime: "7 min read",
  },
  {
    id: 19,
    slug: "best-off-post-neighborhoods-fort-knox",
    title: "Best Off-Post Neighborhoods for Fort Knox Families",
    excerpt:
      "From Radcliff to Elizabethtown, here are the top neighborhoods where Fort Knox families love to live.",
    date: "March 2026",
    category: "Military",
    readTime: "9 min read",
  },
  {
    id: 20,
    slug: "temporary-housing-tla-fort-knox",
    title: "Temporary Housing & TLA Near Fort Knox: What to Know",
    excerpt:
      "Options for temporary lodging when you first arrive at Fort Knox — on-post, hotels, and short-term rentals.",
    date: "March 2026",
    category: "Military",
    readTime: "6 min read",
  },

  // === ELIZABETHTOWN HUB (21-32) ===
  {
    id: 21,
    slug: "first-time-homebuyer-guide-elizabethtown-ky",
    title: "First-Time Homebuyer's Guide to Elizabethtown, KY",
    excerpt:
      "Everything you need to know about buying your first home in E-town — from neighborhoods and schools to financing options.",
    date: "March 2026",
    category: "Elizabethtown",
    readTime: "8 min read",
  },
  {
    id: 22,
    slug: "best-neighborhoods-elizabethtown-ky",
    title: "Best Neighborhoods in Elizabethtown KY: A Local's Guide",
    excerpt:
      "From Helmwood to Pear Orchard, discover the best neighborhoods in Elizabethtown for families, retirees, and first-time buyers.",
    date: "March 2026",
    category: "Elizabethtown",
    readTime: "9 min read",
  },
  {
    id: 23,
    slug: "elizabethtown-ky-schools-guide",
    title: "Elizabethtown KY Schools: Everything Parents Need to Know",
    excerpt:
      "A detailed guide to public and private schools in Elizabethtown, including ratings, programs, and what makes each unique.",
    date: "March 2026",
    category: "Elizabethtown",
    readTime: "8 min read",
  },
  {
    id: 24,
    slug: "cost-of-living-elizabethtown-ky",
    title: "Cost of Living in Elizabethtown KY (2025)",
    excerpt:
      "How far does your dollar go in E-town? A breakdown of housing, utilities, groceries, and more compared to national averages.",
    date: "March 2026",
    category: "Elizabethtown",
    readTime: "7 min read",
  },
  {
    id: 25,
    slug: "things-to-do-elizabethtown-ky",
    title: "15 Things to Do in Elizabethtown KY",
    excerpt:
      "From Freeman Lake to local festivals, here are 15 great things to do in and around Elizabethtown, Kentucky.",
    date: "March 2026",
    category: "Elizabethtown",
    readTime: "8 min read",
  },
  {
    id: 26,
    slug: "elizabethtown-ky-housing-market-update",
    title: "Elizabethtown KY Housing Market Update (2025)",
    excerpt:
      "Market trends, median prices, inventory levels, and what buyers and sellers can expect in the Elizabethtown real estate market.",
    date: "March 2026",
    category: "Elizabethtown",
    readTime: "7 min read",
  },
  {
    id: 27,
    slug: "new-construction-homes-elizabethtown-ky",
    title: "New Construction Homes in Elizabethtown KY: What to Know Before You Buy",
    excerpt:
      "Thinking about new construction in E-town? Here's what to expect from builders, pricing, timelines, and neighborhoods.",
    date: "March 2026",
    category: "Elizabethtown",
    readTime: "8 min read",
  },
  {
    id: 28,
    slug: "retiring-in-elizabethtown-ky",
    title: "Retiring in Elizabethtown KY: Why Retirees Love E-Town",
    excerpt:
      "Affordable living, quality healthcare, and a welcoming community — discover why retirees are choosing Elizabethtown.",
    date: "March 2026",
    category: "Elizabethtown",
    readTime: "7 min read",
  },
  {
    id: 29,
    slug: "renting-vs-buying-elizabethtown-ky",
    title: "Renting vs Buying in Elizabethtown KY: Breaking Down the Numbers",
    excerpt:
      "Should you rent or buy in Elizabethtown? We break down the real numbers to help you make the right decision.",
    date: "March 2026",
    category: "Elizabethtown",
    readTime: "7 min read",
  },
  {
    id: 30,
    slug: "best-restaurants-elizabethtown-ky",
    title: "Best Restaurants and Dining in Elizabethtown KY",
    excerpt:
      "A local's guide to the best restaurants, cafes, and dining experiences in Elizabethtown, Kentucky.",
    date: "March 2026",
    category: "Elizabethtown",
    readTime: "8 min read",
  },
  {
    id: 31,
    slug: "elizabethtown-ky-property-taxes",
    title: "Elizabethtown KY Property Taxes: What Homeowners Need to Know",
    excerpt:
      "Understanding property tax rates, exemptions, and assessments in Elizabethtown and Hardin County, Kentucky.",
    date: "March 2026",
    category: "Elizabethtown",
    readTime: "6 min read",
  },
  {
    id: 32,
    slug: "is-elizabethtown-ky-good-place-to-live",
    title: "Is Elizabethtown KY a Good Place to Live? Honest Pros and Cons",
    excerpt:
      "An honest look at life in E-town — the good, the not-so-good, and everything in between to help you decide.",
    date: "March 2026",
    category: "Elizabethtown",
    readTime: "8 min read",
  },

  // === RADCLIFF HUB (33-42) ===
  {
    id: 33,
    slug: "radcliff-ky-guide-living-near-fort-knox",
    title: "Radcliff KY: The Complete Guide to Living Near Fort Knox",
    excerpt:
      "Everything you need to know about living in Radcliff — the community closest to Fort Knox's front gate.",
    date: "March 2026",
    category: "Radcliff",
    readTime: "8 min read",
  },
  {
    id: 34,
    slug: "best-neighborhoods-radcliff-ky",
    title: "Best Neighborhoods in Radcliff KY for Military Families",
    excerpt:
      "From Meadowlake to Woodland Hills, discover the best Radcliff neighborhoods for military families and young professionals.",
    date: "March 2026",
    category: "Radcliff",
    readTime: "7 min read",
  },
  {
    id: 35,
    slug: "radcliff-ky-housing-market",
    title: "Radcliff KY Housing Market: Prices, Trends & What to Expect",
    excerpt:
      "Current market conditions, median prices, and trends for homebuyers and sellers in Radcliff, Kentucky.",
    date: "March 2026",
    category: "Radcliff",
    readTime: "7 min read",
  },
  {
    id: 36,
    slug: "radcliff-ky-schools-childcare",
    title: "Radcliff KY Schools & Childcare: A Parent's Guide",
    excerpt:
      "A guide to public schools, private options, and childcare facilities available to families in Radcliff.",
    date: "March 2026",
    category: "Radcliff",
    readTime: "7 min read",
  },
  {
    id: 37,
    slug: "things-to-do-radcliff-ky",
    title: "Things to Do in Radcliff KY & Nearby Attractions",
    excerpt:
      "Parks, dining, entertainment, and family-friendly activities in and around Radcliff, Kentucky.",
    date: "March 2026",
    category: "Radcliff",
    readTime: "7 min read",
  },
  {
    id: 38,
    slug: "radcliff-vs-elizabethtown",
    title: "Radcliff vs Elizabethtown: Comparing Two Fort Knox Communities",
    excerpt:
      "How do Radcliff and Elizabethtown stack up? A side-by-side comparison of housing, schools, amenities, and commute times.",
    date: "March 2026",
    category: "Radcliff",
    readTime: "8 min read",
  },
  {
    id: 39,
    slug: "renting-vs-buying-radcliff-ky",
    title: "Renting vs Buying in Radcliff KY: A Military Family's Guide",
    excerpt:
      "Should you rent or buy during your time at Fort Knox? Here's how to decide based on your timeline and finances.",
    date: "March 2026",
    category: "Radcliff",
    readTime: "7 min read",
  },
  {
    id: 40,
    slug: "dixie-highway-corridor-radcliff",
    title: "Dixie Highway Corridor: Shopping, Dining & Services in Radcliff",
    excerpt:
      "Your guide to the Dixie Highway corridor in Radcliff — restaurants, shopping centers, and essential services.",
    date: "March 2026",
    category: "Radcliff",
    readTime: "7 min read",
  },
  {
    id: 41,
    slug: "new-construction-radcliff-ky",
    title: "New Construction & Developments in Radcliff KY",
    excerpt:
      "New homes and developments coming to Radcliff — what buyers should know about new construction options.",
    date: "March 2026",
    category: "Radcliff",
    readTime: "7 min read",
  },
  {
    id: 42,
    slug: "radcliff-ky-retirees",
    title: "Radcliff KY for Retirees: Affordable & Close to Everything",
    excerpt:
      "Why Radcliff is becoming a popular choice for retirees — affordable homes, military healthcare access, and a relaxed lifestyle.",
    date: "March 2026",
    category: "Radcliff",
    readTime: "7 min read",
  },

  // === VINE GROVE HUB (43-50) ===
  {
    id: 43,
    slug: "why-families-choosing-vine-grove-ky",
    title: "Why Families Are Choosing Vine Grove KY",
    excerpt:
      "Discover why more families are making the move to Vine Grove — affordable homes, great schools, and small-town charm.",
    date: "March 2026",
    category: "Vine Grove",
    readTime: "7 min read",
  },
  {
    id: 44,
    slug: "vine-grove-vs-radcliff-vs-elizabethtown",
    title: "Vine Grove vs Radcliff vs Elizabethtown: Which Is Right for You?",
    excerpt:
      "Comparing three popular Fort Knox communities side-by-side to help you find your best fit.",
    date: "March 2026",
    category: "Vine Grove",
    readTime: "8 min read",
  },
  {
    id: 45,
    slug: "vine-grove-ky-housing-market",
    title: "Vine Grove KY Housing Market & Home Prices",
    excerpt:
      "Current home prices, market trends, and what buyers can expect in the Vine Grove real estate market.",
    date: "March 2026",
    category: "Vine Grove",
    readTime: "7 min read",
  },
  {
    id: 46,
    slug: "vine-grove-ky-schools",
    title: "Vine Grove KY Schools: What Parents Should Know",
    excerpt:
      "An overview of schools serving Vine Grove families — from elementary through high school.",
    date: "March 2026",
    category: "Vine Grove",
    readTime: "6 min read",
  },
  {
    id: 47,
    slug: "small-town-living-vine-grove-ky",
    title: "Small-Town Living in Vine Grove: What to Expect",
    excerpt:
      "What it's really like to live in a small Kentucky town — community events, pace of life, and neighborly charm.",
    date: "March 2026",
    category: "Vine Grove",
    readTime: "7 min read",
  },
  {
    id: 48,
    slug: "land-acreage-vine-grove-ky",
    title: "Land & Acreage for Sale Near Vine Grove KY",
    excerpt:
      "Looking for land in Hardin County? Here's what to know about buying acreage near Vine Grove.",
    date: "March 2026",
    category: "Vine Grove",
    readTime: "7 min read",
  },
  {
    id: 49,
    slug: "vine-grove-ky-first-time-buyers",
    title: "Vine Grove KY: A Hidden Gem for First-Time Buyers",
    excerpt:
      "Why Vine Grove might be the smartest move for first-time homebuyers looking for value near Fort Knox.",
    date: "March 2026",
    category: "Vine Grove",
    readTime: "7 min read",
  },
  {
    id: 50,
    slug: "things-to-do-vine-grove-ky",
    title: "Things to Do Near Vine Grove KY: Outdoors, Dining & Community",
    excerpt:
      "From outdoor adventures to community events, here's how to enjoy life in and around Vine Grove.",
    date: "March 2026",
    category: "Vine Grove",
    readTime: "7 min read",
  },

  // === I-65 CORRIDOR HUB (51-58) ===
  {
    id: 51,
    slug: "commuting-i65-corridor-louisville-elizabethtown",
    title: "Commuting the I-65 Corridor: Living Between Louisville and Elizabethtown",
    excerpt:
      "Your guide to living along the I-65 corridor — commute times, towns, and why this stretch is booming.",
    date: "March 2026",
    category: "I-65 Corridor",
    readTime: "8 min read",
  },
  {
    id: 52,
    slug: "shepherdsville-bullitt-county-living",
    title: "Shepherdsville & Bullitt County: Affordable Living South of Louisville",
    excerpt:
      "Affordable homes, easy Louisville access, and small-town feel — discover Shepherdsville and Bullitt County.",
    date: "March 2026",
    category: "I-65 Corridor",
    readTime: "8 min read",
  },
  {
    id: 53,
    slug: "lebanon-junction-west-point-ky",
    title: "Lebanon Junction & West Point: Small-Town Living on I-65",
    excerpt:
      "Two small Kentucky towns with big charm — explore what makes Lebanon Junction and West Point special.",
    date: "March 2026",
    category: "I-65 Corridor",
    readTime: "7 min read",
  },
  {
    id: 54,
    slug: "glendale-ky-small-town-charm",
    title: "Glendale KY: Small Town, Big Charm on the I-65 Corridor",
    excerpt:
      "Historic Glendale offers antique shops, community events, and affordable living along the I-65 corridor.",
    date: "March 2026",
    category: "I-65 Corridor",
    readTime: "7 min read",
  },
  {
    id: 55,
    slug: "i65-corridor-home-prices",
    title: "I-65 Corridor Home Prices: What Buyers Can Expect in 2025",
    excerpt:
      "A town-by-town breakdown of home prices along the I-65 corridor from Louisville to Elizabethtown.",
    date: "March 2026",
    category: "I-65 Corridor",
    readTime: "7 min read",
  },
  {
    id: 56,
    slug: "best-commuter-towns-louisville-elizabethtown",
    title: "Best Towns for Commuters Between Louisville and Elizabethtown",
    excerpt:
      "Where to live if you need easy access to both Louisville and Elizabethtown for work or lifestyle.",
    date: "March 2026",
    category: "I-65 Corridor",
    readTime: "8 min read",
  },
  {
    id: 57,
    slug: "rural-living-i65-corridor-kentucky",
    title: "Rural Living Along I-65: Acreage & Farmettes in Central KY",
    excerpt:
      "Find your dream farmette or acreage property along the I-65 corridor without sacrificing convenience.",
    date: "March 2026",
    category: "I-65 Corridor",
    readTime: "7 min read",
  },
  {
    id: 58,
    slug: "investing-i65-corridor-kentucky",
    title: "Investing Along the I-65 Corridor: Growth, Development & Opportunity",
    excerpt:
      "Why savvy investors are looking at the I-65 corridor — growth trends, development, and ROI potential.",
    date: "March 2026",
    category: "I-65 Corridor",
    readTime: "8 min read",
  },

  // === BARDSTOWN HUB (59-68) ===
  {
    id: 59,
    slug: "living-in-bardstown-ky",
    title: "Living in Bardstown KY: The Bourbon Capital of the World",
    excerpt:
      "What it's really like to live in Bardstown — bourbon culture, historic charm, and a growing real estate market.",
    date: "March 2026",
    category: "Bardstown",
    readTime: "8 min read",
  },
  {
    id: 60,
    slug: "bardstown-ky-real-estate-market",
    title: "Bardstown KY Real Estate Market: What Buyers Need to Know",
    excerpt:
      "Current market conditions, pricing trends, and what makes the Bardstown real estate market unique.",
    date: "March 2026",
    category: "Bardstown",
    readTime: "7 min read",
  },
  {
    id: 61,
    slug: "kentucky-bourbon-trail-living",
    title: "The Kentucky Bourbon Trail & What It's Like Living Near It",
    excerpt:
      "Living near the Bourbon Trail means world-class distilleries, tourism buzz, and a lifestyle unlike anywhere else.",
    date: "March 2026",
    category: "Bardstown",
    readTime: "8 min read",
  },
  {
    id: 62,
    slug: "best-neighborhoods-bardstown-ky",
    title: "Best Neighborhoods in Bardstown KY",
    excerpt:
      "From historic downtown to newer developments, explore the best neighborhoods Bardstown has to offer.",
    date: "March 2026",
    category: "Bardstown",
    readTime: "7 min read",
  },
  {
    id: 63,
    slug: "bardstown-ky-schools-guide",
    title: "Bardstown KY Schools: A Guide for Families",
    excerpt:
      "An overview of Bardstown's public and private school options for families considering a move to Nelson County.",
    date: "March 2026",
    category: "Bardstown",
    readTime: "7 min read",
  },
  {
    id: 64,
    slug: "things-to-do-bardstown-ky",
    title: "Things to Do in Bardstown KY Beyond Bourbon",
    excerpt:
      "There's more to Bardstown than bourbon — discover the festivals, history, dining, and outdoor recreation.",
    date: "March 2026",
    category: "Bardstown",
    readTime: "8 min read",
  },
  {
    id: 65,
    slug: "cost-of-living-bardstown-ky",
    title: "Cost of Living in Bardstown KY vs Elizabethtown & Louisville",
    excerpt:
      "How does Bardstown's cost of living compare? A detailed breakdown of housing, utilities, and everyday expenses.",
    date: "March 2026",
    category: "Bardstown",
    readTime: "7 min read",
  },
  {
    id: 66,
    slug: "investing-bardstown-ky-real-estate",
    title: "Investing in Bardstown KY Real Estate: Tourism, Bourbon & Growth",
    excerpt:
      "Why Bardstown's bourbon tourism boom makes it an attractive market for real estate investors.",
    date: "March 2026",
    category: "Bardstown",
    readTime: "8 min read",
  },
  {
    id: 67,
    slug: "historic-homes-bardstown-ky",
    title: "Historic Homes in Bardstown KY: Buying & Restoring",
    excerpt:
      "What to know about buying and restoring one of Bardstown's beautiful historic homes — from Federal Hill to downtown.",
    date: "March 2026",
    category: "Bardstown",
    readTime: "7 min read",
  },
  {
    id: 68,
    slug: "bardstown-vs-elizabethtown",
    title: "Bardstown KY vs Elizabethtown: Which Is Right for You?",
    excerpt:
      "Two great Central Kentucky towns, two different vibes. Here's how to choose between Bardstown and Elizabethtown.",
    date: "March 2026",
    category: "Bardstown",
    readTime: "8 min read",
  },

  // === LOUISVILLE HUB (69-78) ===
  {
    id: 69,
    slug: "south-louisville-neighborhoods-guide",
    title: "South Louisville Neighborhoods: A Buyer's Guide",
    excerpt:
      "Exploring south Louisville neighborhoods — from Beechmont to Valley Station, find the right fit for your budget.",
    date: "March 2026",
    category: "Louisville",
    readTime: "8 min read",
  },
  {
    id: 70,
    slug: "louisville-vs-elizabethtown",
    title: "Louisville vs Elizabethtown: Which Is Right for Your Family?",
    excerpt:
      "Big city or small-town charm? Compare Louisville and Elizabethtown across housing, schools, and lifestyle.",
    date: "March 2026",
    category: "Louisville",
    readTime: "8 min read",
  },
  {
    id: 71,
    slug: "hillview-ky-affordable-suburb",
    title: "Hillview KY: Louisville's Most Affordable Suburb",
    excerpt:
      "Hillview offers some of the most affordable homes in the Louisville metro — here's why buyers are taking notice.",
    date: "March 2026",
    category: "Louisville",
    readTime: "7 min read",
  },
  {
    id: 72,
    slug: "louisville-ky-housing-market",
    title: "Louisville KY Housing Market Overview (2025)",
    excerpt:
      "A comprehensive look at the Louisville housing market — prices, trends, inventory, and what to expect this year.",
    date: "March 2026",
    category: "Louisville",
    readTime: "8 min read",
  },
  {
    id: 73,
    slug: "best-louisville-neighborhoods-families-budget",
    title: "Best Louisville Neighborhoods for Families on a Budget",
    excerpt:
      "Family-friendly Louisville neighborhoods where you can get great schools and community without breaking the bank.",
    date: "March 2026",
    category: "Louisville",
    readTime: "8 min read",
  },
  {
    id: 74,
    slug: "first-time-homebuyer-guide-louisville-ky",
    title: "First-Time Homebuyer's Guide to Louisville KY",
    excerpt:
      "Step-by-step guidance for first-time buyers navigating the Louisville real estate market.",
    date: "March 2026",
    category: "Louisville",
    readTime: "9 min read",
  },
  {
    id: 75,
    slug: "louisville-ky-schools-jcps-guide",
    title: "Louisville KY Schools: Navigating JCPS & Private Options",
    excerpt:
      "Understanding JCPS, magnet programs, and private school alternatives in the Louisville metro area.",
    date: "March 2026",
    category: "Louisville",
    readTime: "8 min read",
  },
  {
    id: 76,
    slug: "commuting-louisville-fort-knox",
    title: "Commuting from Louisville to Fort Knox: Routes, Times & Tips",
    excerpt:
      "The best routes, expected drive times, and practical tips for commuting from Louisville to Fort Knox.",
    date: "March 2026",
    category: "Louisville",
    readTime: "7 min read",
  },
  {
    id: 77,
    slug: "louisville-real-estate-investors",
    title: "Louisville Real Estate for Investors: Neighborhoods, Returns & Trends",
    excerpt:
      "Top Louisville neighborhoods for real estate investment — rental yields, appreciation trends, and market outlook.",
    date: "March 2026",
    category: "Louisville",
    readTime: "8 min read",
  },
  {
    id: 78,
    slug: "moving-louisville-to-elizabethtown",
    title: "Moving from Louisville to Elizabethtown: Why Families Are Making the Switch",
    excerpt:
      "More Louisville families are heading to Elizabethtown for affordability, space, and quality of life — here's why.",
    date: "March 2026",
    category: "Louisville",
    readTime: "8 min read",
  },
];

export const blogPosts: BlogPost[] = rawPosts.map((post) => ({
  ...post,
  heroImage: getHeroImage(post.category),
}));
