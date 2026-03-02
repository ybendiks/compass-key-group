export interface SocialLinks {
  instagram?: string;
  linkedin?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
  zillow?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  slug: string;
  title: string;
  bio: string;
  fullBio: string[];
  phone: string;
  email: string;
  headshot: string;
  license: string;
  office?: string;
  linkedin: string;
  socialLinks: SocialLinks;
  cardSocials: (keyof SocialLinks)[];
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Austin Kutz",
    slug: "austin-kutz",
    title: "Owner / Realtor",
    bio: "U.S. Marine Corps veteran turned real estate agent with a passion for creating opportunities for the community. Austin built the Compass and Key Group with a mission — bring about a new way of doing real estate in an ever-changing market.",
    fullBio: [
      "I'm Austin Kutz, a Marine Corps veteran turned real estate agent with a passion for creating opportunities for my community. I built the Compass and Key Group with a mission\u2014bring about a new way of doing real estate in our ever changing market.",
      "Coming from a background in the armed forces, I know what its like to be 'sold' something or how it feels to be harvested by an industry that exists off other peoples work. That's why I approach real estate with a mindset based in service. I may not be able to wear the uniform anymore but I can pour my energy and dedication into working tirelessly for our clients, and training up a team that doesn't know the words 'fell through the cracks'.",
      "My experience spans everything from buying and selling homes to real estate investing, marketing optimization, team building and much more. If you're looking for someone who is willing to commit to your ultimate success, you're in the right place. We don't just sell houses here, we're Real Estate with Purpose.",
    ],
    phone: "(270) 735-3897",
    email: "austin@compassandkeygroup.com",
    headshot: "/images/austin-kutz.webp",
    license: "KY #277797",
    office: "617 N Mulberry St #105B, Elizabethtown, KY 42701",
    linkedin: "https://www.linkedin.com/in/austin-kutz-5657132b4",
    socialLinks: {
      instagram: "https://www.instagram.com/austinkrealtor",
      linkedin: "https://www.linkedin.com/in/austin-kutz-5657132b4",
      facebook:
        "https://www.facebook.com/Compass-and-Key-Group,-Real-Broker-122104284446009536",
      twitter: "https://twitter.com/austinkrealtor",
      youtube:
        "https://www.youtube.com/channel/UCK6MxQTvuP9mt7S19apPgoQ",
    },
    cardSocials: ["instagram", "linkedin", "facebook", "twitter"],
  },
  {
    id: 2,
    name: "Steve Nikirk",
    slug: "steve-nikirk",
    title: "Agent",
    bio: "Rooted in Hardin County with over a decade of experience, Steve helps buyers, sellers, and investors navigate the market with clarity and confidence. Flawless fundamentals, local expertise, and a commitment to getting it right the first time.",
    fullBio: [
      "Rooted in Hardin County with over a decade of experience, I've helped buyers, sellers, and investors navigate the market with clarity and confidence. My approach is simple: flawless fundamentals, local expertise, real relationships, and a commitment to getting it right the first time.",
      "Most often you will find yourself having to choose between an agent that has either a plethora of experience in the market, or an assortment of modern tech tools that enable us to move faster than the competition. With me you get both.",
      "Whether you're buying your first home, making a move, or building your portfolio, I'm here to guide you through every step\u2014from the first walkthrough to the final signature. I believe in straight talk, transparency, strong representation, and staying hands-on from start to finish.",
      "Backed by real knowledge of area neighborhoods, school districts, and market shifts, I bring more than just information\u2014I bring insight tailored to your goals. This isn't just where I work\u2014it's home. When I'm not showing homes or negotiating deals, I'm out in my community, and enjoying everything the Elizabethtown area has to offer. Let's talk when you're ready to make your next move.",
    ],
    phone: "(270) 872-3077",
    email: "steve@compassandkeygroup.com",
    headshot: "/images/steve-nikirk.webp",
    license: "KY #220116",
    linkedin: "https://www.linkedin.com/in/steve-nikirk-56862786/",
    socialLinks: {
      instagram: "https://www.instagram.com/stevenikirkrealtor",
      linkedin: "https://www.linkedin.com/in/steve-nikirk-56862786/",
      facebook: "https://www.facebook.com/kyhomeswithsteve",
      twitter: "https://x.com/NikirkSteve",
      zillow: "https://www.zillow.com/profile/user79239493",
    },
    cardSocials: ["instagram", "linkedin"],
  },
  {
    id: 3,
    name: "Ciara Hardesty",
    slug: "ciara-hardesty",
    title: "Agent",
    bio: "Born and raised in Rineyville, KY, Ciara brings deep roots in Central Kentucky's small towns and rural communities. As a mother of four, she knows real estate is about finding the right fit for your lifestyle, family, and future.",
    fullBio: [
      "Born and raised in Rineyville, KY, I've spent my life rooted in the small towns and rural communities that make Central Kentucky feel like home. As a mother of four, I know firsthand that real estate is about more than just buying or selling a house\u2014it's about finding the right fit for your lifestyle, your family, and your future.",
      "I bring more than a real estate license and a yard sign to the table. Being born and raised in the community means that I come with a network that is second to none. On top of that, the technical expertise and state of the art marketing my office employs will blow everything else in this market out of the water.",
      "Whether you're searching for your first home, a quiet piece of land, or your next investment opportunity, you will be set up for success better than ever. I work with buyers, sellers, and investors alike\u2014and for my land clients, I offer trusted connections to builders, contractors, and service providers who can help you turn your plans into reality long after closing day.",
      "Let's connect, and talk about your goals\u2014I'd love to work with you!",
    ],
    phone: "(270) 734-5552",
    email: "ciara@compassandkeygroup.com",
    headshot: "/images/ciara-hardesty.webp",
    license: "KY #298156",
    office: "617 N Mulberry St, Elizabethtown, KY 42701",
    linkedin: "https://www.linkedin.com/in/ciarahardesty/",
    socialLinks: {
      instagram: "https://www.instagram.com/soldwithciara",
      linkedin: "https://www.linkedin.com/in/ciarahardesty/",
      facebook:
        "https://www.facebook.com/Ciara-Hardesty-Realtor;-Compass-&-Key-Group-Real-Broker-583397098188236",
    },
    cardSocials: ["instagram", "linkedin"],
  },
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
