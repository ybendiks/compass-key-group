export interface Listing {
  id: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  status: "For Sale" | "Pending" | "Sold";
  yearBuilt: number;
  description: string;
}

export const listings: Listing[] = [
  {
    id: 1,
    address: "204 Sycamore Dr",
    city: "Elizabethtown",
    state: "KY",
    zip: "42701",
    price: 289900,
    beds: 4,
    baths: 2.5,
    sqft: 2450,
    type: "Single Family",
    status: "For Sale",
    yearBuilt: 2019,
    description:
      "Beautiful open-concept home in a quiet neighborhood. Features granite countertops, hardwood floors, and a spacious backyard.",
  },
  {
    id: 2,
    address: "1812 Ring Rd",
    city: "Elizabethtown",
    state: "KY",
    zip: "42701",
    price: 234500,
    beds: 3,
    baths: 2,
    sqft: 1850,
    type: "Single Family",
    status: "For Sale",
    yearBuilt: 2015,
    description:
      "Move-in ready ranch with updated kitchen, new HVAC, and a two-car garage. Minutes from shopping and dining.",
  },
  {
    id: 3,
    address: "508 Windmill Way",
    city: "Radcliff",
    state: "KY",
    zip: "40160",
    price: 199900,
    beds: 3,
    baths: 2,
    sqft: 1620,
    type: "Single Family",
    status: "For Sale",
    yearBuilt: 2012,
    description:
      "Charming home near Fort Knox with fenced yard, updated bathrooms, and a cozy fireplace in the living room.",
  },
  {
    id: 4,
    address: "3401 Leitchfield Rd",
    city: "Elizabethtown",
    state: "KY",
    zip: "42701",
    price: 425000,
    beds: 5,
    baths: 3.5,
    sqft: 3200,
    type: "Single Family",
    status: "For Sale",
    yearBuilt: 2021,
    description:
      "Stunning new construction with premium finishes throughout. Chef's kitchen, bonus room, and covered patio.",
  },
  {
    id: 5,
    address: "720 Freeman Lake Rd",
    city: "Elizabethtown",
    state: "KY",
    zip: "42701",
    price: 349900,
    beds: 4,
    baths: 3,
    sqft: 2780,
    type: "Single Family",
    status: "For Sale",
    yearBuilt: 2018,
    description:
      "Lakeside living at its finest. Open floor plan with lake views, walk-out basement, and custom deck.",
  },
  {
    id: 6,
    address: "115 Poplar Creek Dr",
    city: "Elizabethtown",
    state: "KY",
    zip: "42701",
    price: 274900,
    beds: 3,
    baths: 2.5,
    sqft: 2100,
    type: "Single Family",
    status: "For Sale",
    yearBuilt: 2017,
    description:
      "Well-maintained home with open layout, stainless steel appliances, master suite with walk-in closet.",
  },
  {
    id: 7,
    address: "2209 Heartland Crossing",
    city: "Elizabethtown",
    state: "KY",
    zip: "42701",
    price: 319000,
    beds: 4,
    baths: 2.5,
    sqft: 2600,
    type: "Single Family",
    status: "Pending",
    yearBuilt: 2020,
    description:
      "Popular Heartland community. Spacious family home with formal dining, home office, and three-car garage.",
  },
  {
    id: 8,
    address: "445 Battle Training Rd",
    city: "Fort Knox",
    state: "KY",
    zip: "40121",
    price: 215000,
    beds: 3,
    baths: 2,
    sqft: 1740,
    type: "Single Family",
    status: "For Sale",
    yearBuilt: 2014,
    description:
      "Convenient location near post. Updated flooring, energy-efficient windows, and a private backyard.",
  },
];

export const soldListings: Listing[] = [
  {
    id: 101,
    address: "330 Helmwood Dr",
    city: "Elizabethtown",
    state: "KY",
    zip: "42701",
    price: 265000,
    beds: 3,
    baths: 2,
    sqft: 1950,
    type: "Single Family",
    status: "Sold",
    yearBuilt: 2016,
    description: "Sold in just 8 days over asking price!",
  },
  {
    id: 102,
    address: "1504 Vine St",
    city: "Elizabethtown",
    state: "KY",
    zip: "42701",
    price: 312000,
    beds: 4,
    baths: 2.5,
    sqft: 2400,
    type: "Single Family",
    status: "Sold",
    yearBuilt: 2019,
    description: "Sold for full asking price with multiple offers.",
  },
  {
    id: 103,
    address: "876 Lincoln Trail Blvd",
    city: "Radcliff",
    state: "KY",
    zip: "40160",
    price: 228000,
    beds: 3,
    baths: 2,
    sqft: 1680,
    type: "Single Family",
    status: "Sold",
    yearBuilt: 2013,
    description: "Helped military family find their perfect home near post.",
  },
  {
    id: 104,
    address: "2100 Pear Orchard Rd",
    city: "Elizabethtown",
    state: "KY",
    zip: "42701",
    price: 389000,
    beds: 4,
    baths: 3,
    sqft: 2900,
    type: "Single Family",
    status: "Sold",
    yearBuilt: 2020,
    description: "Record sale price for the neighborhood.",
  },
];
