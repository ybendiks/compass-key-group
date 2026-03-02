// Centralized schema.org data — swap SITE_URL when moving to production domain
export const SITE_URL = "https://compassandkeygroup.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Compass and Key Group",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logos/logo-color.webp`,
  image: `${SITE_URL}/images/logos/logo-color.webp`,
  description:
    "Veteran-owned real estate brokerage serving Elizabethtown, Fort Knox, and Central Kentucky.",
  telephone: "+1-270-735-3897",
  email: "austin@compassandkeygroup.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "617 N Mulberry St #105B",
    addressLocality: "Elizabethtown",
    addressRegion: "KY",
    postalCode: "42701",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.6934,
    longitude: -85.8591,
  },
  areaServed: [
    "Elizabethtown, KY",
    "Fort Knox, KY",
    "Radcliff, KY",
    "Vine Grove, KY",
    "Bardstown, KY",
    "Louisville, KY",
    "Hardin County, KY",
  ],
  sameAs: [
    "https://www.instagram.com/austinkrealtor",
    "https://www.facebook.com/Compass-and-Key-Group,-Real-Broker-122104284446009536",
    "https://twitter.com/austinkrealtor",
    "https://www.linkedin.com/in/austin-kutz-5657132b4",
  ],
  priceRange: "$180,000 - $500,000+",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
};
