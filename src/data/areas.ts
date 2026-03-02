export interface ServiceArea {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  medianPrice: string;
  priceRange: string;
}

export const areas: ServiceArea[] = [
  {
    id: "elizabethtown",
    slug: "elizabethtown",
    name: "Elizabethtown",
    tagline: "Small-City Charm, Big Opportunity",
    description:
      "The heart of Hardin County and our home base. Elizabethtown offers a perfect blend of small-town charm and modern amenities with excellent schools, a thriving downtown, and easy access to I-65.",
    highlights: [
      "Top-rated Elizabethtown Independent Schools",
      "Freeman Lake Park & Recreation",
      "Historic downtown with local shops & restaurants",
      "30 minutes to Fort Knox, 45 minutes to Louisville",
    ],
    medianPrice: "$265,000",
    priceRange: "$180,000 – $500,000+",
  },
  {
    id: "fort-knox",
    slug: "fort-knox",
    name: "Fort Knox",
    tagline: "Your Military Relocation Experts",
    description:
      "Home to the U.S. Army's Human Resources Command and the Gold Vault. We specialize in helping military families find the perfect home near post.",
    highlights: [
      "Veteran-owned brokerage with PCS expertise",
      "VA loan specialists",
      "On-post and off-post housing guidance",
      "Area orientation for incoming families",
    ],
    medianPrice: "$205,000",
    priceRange: "$140,000 – $350,000",
  },
  {
    id: "radcliff",
    slug: "radcliff",
    name: "Radcliff",
    tagline: "Fort Knox's Front Door",
    description:
      "Directly adjacent to Fort Knox, Radcliff is the most popular choice for military families seeking affordable, convenient off-post housing with strong community support.",
    highlights: [
      "Minutes from Fort Knox main gate",
      "Affordable housing options",
      "Strong military community",
      "Dixie Highway shopping & dining corridor",
    ],
    medianPrice: "$205,000",
    priceRange: "$130,000 – $300,000",
  },
  {
    id: "vine-grove",
    slug: "vine-grove",
    name: "Vine Grove",
    tagline: "Small-Town Living Near Fort Knox",
    description:
      "A tight-knit community offering affordable homes and a quieter pace of life, just minutes from Fort Knox. Perfect for families wanting more space and rural charm.",
    highlights: [
      "Very affordable housing market",
      "Close to Fort Knox",
      "Quiet, family-friendly atmosphere",
      "Larger lots and more land available",
    ],
    medianPrice: "$185,000",
    priceRange: "$120,000 – $280,000",
  },
  {
    id: "bardstown",
    slug: "bardstown",
    name: "Bardstown",
    tagline: "Bourbon Capital of the World",
    description:
      "Named \"The Most Beautiful Small Town in America,\" Bardstown offers historic charm, world-famous bourbon heritage, and a growing residential market.",
    highlights: [
      "Historic My Old Kentucky Home",
      "Vibrant downtown dining scene",
      "Kentucky Bourbon Trail hub",
      "Strong tourism-driven economy",
    ],
    medianPrice: "$275,000",
    priceRange: "$160,000 – $450,000",
  },
  {
    id: "i65-corridor",
    slug: "i65-corridor",
    name: "I-65 Corridor",
    tagline: "Best of Both Worlds",
    description:
      "Communities along I-65 between Louisville and Elizabethtown offer the perfect balance of rural living and city access. Ideal for commuters.",
    highlights: [
      "Easy commute to Louisville or Elizabethtown",
      "Affordable starter homes",
      "Bernheim Arboretum & Research Forest",
      "Growing commercial development",
    ],
    medianPrice: "$220,000",
    priceRange: "$150,000 – $350,000",
  },
  {
    id: "louisville",
    slug: "louisville",
    name: "Louisville",
    tagline: "Kentucky's Largest City",
    description:
      "Just 45 minutes north on I-65, Louisville offers world-class dining, entertainment, and career opportunities with a reasonable cost of living.",
    highlights: [
      "Kentucky's largest job market",
      "Louisville Slugger, bourbon trail, Churchill Downs",
      "Excellent healthcare systems",
      "Easy I-65 commute from E-town",
    ],
    medianPrice: "$240,000",
    priceRange: "$150,000 – $500,000+",
  },
];
