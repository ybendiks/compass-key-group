export interface ServiceArea {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  medianPrice: string;
}

export const areas: ServiceArea[] = [
  {
    id: "elizabethtown",
    name: "Elizabethtown",
    description:
      "The heart of Hardin County and our home base. Elizabethtown offers a perfect blend of small-town charm and modern amenities. With excellent schools, a thriving downtown, and easy access to I-65, E-town has become one of Kentucky's fastest-growing communities. The housing market here ranges from historic homes near the town square to brand-new developments on the outskirts.",
    highlights: [
      "Top-rated Elizabethtown Independent Schools",
      "Freeman Lake Park & Recreation",
      "Historic downtown with local shops & restaurants",
      "30 minutes to Fort Knox",
    ],
    medianPrice: "$265,000",
  },
  {
    id: "fort-knox",
    name: "Fort Knox / Radcliff",
    description:
      "Home to the U.S. Army's Human Resources Command and the Gold Vault, Fort Knox is a cornerstone of the Central Kentucky community. Radcliff, the city adjacent to post, offers affordable housing, convenient shopping, and a welcoming community with deep military roots. Ideal for active duty, veterans, and DoD civilians.",
    highlights: [
      "Minutes from Fort Knox main gate",
      "Affordable housing options",
      "Strong military community support",
      "VA loan-friendly properties",
    ],
    medianPrice: "$205,000",
  },
  {
    id: "louisville",
    name: "Louisville",
    description:
      "Kentucky's largest city is just 45 minutes north on I-65, offering world-class dining, entertainment, and career opportunities while maintaining a reasonable cost of living. Many of our clients commute to Louisville while enjoying the lower home prices and quieter lifestyle of Hardin County.",
    highlights: [
      "Kentucky's largest job market",
      "Louisville Slugger, bourbon trail, Churchill Downs",
      "Excellent healthcare systems",
      "Easy I-65 commute from E-town",
    ],
    medianPrice: "$240,000",
  },
  {
    id: "hardin-county",
    name: "Hardin County",
    description:
      "Beyond Elizabethtown proper, Hardin County offers beautiful rural properties, hobby farms, and peaceful country living just minutes from town. Communities like Glendale, Cecilia, and Sonora provide space and serenity while remaining connected to amenities.",
    highlights: [
      "Spacious lots and acreage available",
      "Lower property taxes",
      "Growing communities",
      "Rural charm with modern convenience",
    ],
    medianPrice: "$230,000",
  },
  {
    id: "bardstown",
    name: "Bardstown",
    description:
      'Named "The Most Beautiful Small Town in America," Bardstown is the heart of Kentucky\'s bourbon country. With its charming historic district, award-winning restaurants, and world-famous distilleries, Bardstown offers a unique lifestyle that attracts buyers from across the country.',
    highlights: [
      "Bourbon Capital of the World",
      "Historic My Old Kentucky Home",
      "Vibrant downtown dining scene",
      "Strong tourism economy",
    ],
    medianPrice: "$275,000",
  },
  {
    id: "shepherdsville",
    name: "Shepherdsville",
    description:
      "Located in Bullitt County along the I-65 corridor, Shepherdsville offers easy access to both Louisville and Elizabethtown. With affordable housing, growing retail, and Bernheim Forest nearby, it's an increasingly popular choice for families seeking value and convenience.",
    highlights: [
      "Affordable starter homes",
      "Bernheim Arboretum & Research Forest",
      "Quick I-65 access to Louisville",
      "Growing commercial development",
    ],
    medianPrice: "$220,000",
  },
];
