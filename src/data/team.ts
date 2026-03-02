export interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  phone: string;
  email: string;
  headshot: string;
  linkedin: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Austin Kutz",
    title: "Owner / Realtor",
    bio: "U.S. Marine Corps veteran — enlisted after high school in Wisconsin. 5 years active duty, 2 overseas tours. Transitioned to U.S. Army Reserves to pursue a Bachelor's Degree in Business. Austin prides himself on his determination and work ethic in all aspects of real estate. His relentless follow through and attention to detail simply gets the job done with no excuses.",
    phone: "(270) 735-3897",
    email: "austin@compassandkeygroup.com",
    headshot: "/images/austin-kutz.webp",
    linkedin: "https://www.linkedin.com/in/austin-kutz-5657132b4",
  },
  {
    id: 2,
    name: "Steve Nikirk",
    title: "Agent",
    bio: "Experienced Realtor with a background in retail management as a former Store Manager at Gap Inc./Old Navy. B.S. in Business Administration and Management from Oakland City University. Skilled in negotiation, management, customer service, and sales. Local to Elizabethtown — \"This isn't just where I work—it's home.\"",
    phone: "(270) 735-3897",
    email: "austin@compassandkeygroup.com",
    headshot: "/images/steve-nikirk.webp",
    linkedin: "https://www.linkedin.com/in/steve-nikirk-56862786/",
  },
  {
    id: 3,
    name: "Ciara Hardesty",
    title: "Agent",
    bio: "Born and raised in Hardin County, KY, Ciara has a deep-rooted connection to this community and the surrounding areas. She offers her knowledge of local builders, market trends, and a strong network of trusted services to her clients. Whether you're buying, selling, investing, or looking for advice, her goal is to make your real estate journey as smooth and successful as possible.",
    phone: "(270) 735-3897",
    email: "austin@compassandkeygroup.com",
    headshot: "/images/ciara-hardesty.webp",
    linkedin: "https://www.linkedin.com/in/ciarahardesty/",
  },
];
