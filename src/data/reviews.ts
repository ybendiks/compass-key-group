export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  source: string;
  type: "buyer" | "seller" | "military";
  agent?: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Tom",
    rating: 5,
    text: "Everything was perfect from start to finish. Austin was friendly and professional. He's very knowledgeable about real estate and pointing out the many features of the properties we looked at. He was very thorough about the buying process and what options we had regarding such.",
    source: "Zillow",
    type: "buyer",
    agent: "austin-kutz",
  },
  {
    id: 2,
    name: "Verified Buyer",
    rating: 5,
    text: "Austin went above and beyond to help us find the perfect home! Moving across country was less stressful because of the expertise and assistance that Austin provided along the way. His knowledge of the area, the quality of work completed, and the general home buying process is beyond measure.",
    source: "Zillow",
    type: "military",
    agent: "austin-kutz",
  },
  {
    id: 3,
    name: "Verified Buyer",
    rating: 5,
    text: "Austin was an absolute pleasure to work with on the purchase of our home. He made the process smooth and easy and gave my husband and I great peace of mind that all was well especially since we lived 700 miles away.",
    source: "Zillow",
    type: "buyer",
    agent: "austin-kutz",
  },
  {
    id: 4,
    name: "Verified Buyer",
    rating: 5,
    text: "Austin did an amazing job helping my wife and I find the perfect home not only for us but for our 3 dogs!",
    source: "Zillow",
    type: "buyer",
    agent: "austin-kutz",
  },
  {
    id: 5,
    name: "Christie",
    rating: 5,
    text: "We were incredibly impressed with Steve's professional and reliable communication, strong negotiation skills, and genuine care and support. I would definitely recommend him for friends and family!",
    source: "Google",
    type: "buyer",
    agent: "steve-nikirk",
  },
  {
    id: 6,
    name: "Verified Client",
    rating: 5,
    text: "Steve was absolutely wonderful from beginning to end. His service was top notch!!!! He made the whole process easy and it was like working with a long time friend. On a scale 1 to 5 stars he is an 11.",
    source: "Google",
    type: "buyer",
    agent: "steve-nikirk",
  },
  {
    id: 7,
    name: "Verified Client",
    rating: 5,
    text: "Steve helped us purchase our new home. We walked in with a long list of requirements, but there was only a short list of homes on the market. We found an amazing home fairly fast and REALLY enjoyed working with Steve every step of the way. He's easy to work with and easy to like!",
    source: "LinkedIn",
    type: "buyer",
    agent: "steve-nikirk",
  },
];

export function getReviewsByAgent(slug: string): Review[] {
  return reviews.filter((r) => r.agent === slug);
}
