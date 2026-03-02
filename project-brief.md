# Compass and Key Group — Website Rebuild Project Brief

## Overview
Rebuild https://compassandkeygroup.com/ from scratch as a clean, fast, modern Next.js site. The current site is a bloated Lofty CMS template with tens of thousands of auto-generated MLS listing pages, terrible performance, and poor navigation. We're replacing it with a lean 10-page site deployed to Vercel staging for client approval.

## Client Info
- **Business**: Compass and Key Group — Real Broker, LLC
- **Owner**: Austin Kutz — U.S. Marine Corps veteran (5 years active, 2 overseas tours), transitioned to Army Reserves, pursuing Business degree
- **Location**: 617 N Mulberry St #105B, Elizabethtown, KY 42701
- **Phone**: (270) 735-3897
- **Email**: austin@compassandkeygroup.com
- **Service Areas**: Elizabethtown, Fort Knox, Hardin County, Louisville, Bardstown, Radcliff, Shepherdsville, and surrounding Central Kentucky
- **Social**: Instagram @austinkrealtor, LinkedIn, Facebook, Twitter
- **Key Differentiator**: Veteran-owned, strong military relocation expertise (Fort Knox proximity), excellent reviews, personalized local service
- **Brokerage**: Real Broker, LLC

## Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (staging URL for client review)
- **No CMS needed** — this is a static prototype for approval
- **No database** — all content is hardcoded for now

## Design Direction
- Clean, modern, professional — NOT a cookie-cutter real estate template
- Warm and trustworthy feel that reflects veteran values (integrity, service, discipline)
- Color palette: Deep navy/slate blues, warm gold/amber accent, clean whites. Military-inspired but not cliché.
- Typography: Distinctive, premium — avoid generic fonts like Inter/Roboto/Arial. Use a refined serif or strong geometric sans for headings, clean readable body font.
- Fast, minimal, zero bloat — the opposite of the current site
- Mobile-first responsive design
- Subtle animations on scroll for polish, but nothing heavy

## Pages to Build (10 total)

### 1. Home (/)
- Hero section with strong headline: "Navigate Your Dream Home" or similar
- Brief value proposition — veteran-owned, local expertise, personalized service
- Social proof section: Google reviews (5-star rated, pull a few real quotes from their reviews)
- Featured listings section (3-4 curated property cards with placeholder images — these will be manually updated)
- Service areas quick overview
- Clear CTAs: "Buy a Home" and "Sell Your Home"
- Footer with contact info, social links, nav

### 2. Buy (/buy)
**THIS IS THE MOST IMPORTANT PAGE — primary client concern.**
- Clean property search experience
- Embed a RealScout, IDX Broker, or similar widget placeholder area (with a clear "MLS Search Widget Goes Here" placeholder block that looks designed, not broken)
- Below the widget area: curated featured listings grid (6-8 property cards with placeholder images, prices, beds/baths/sqft)
- Buyer resources section: brief guide on the buying process (3-4 steps)
- CTA to schedule a consultation
- Budget calculator link/section
- NOTE: The actual MLS integration will be decided later. For now, make the page look complete and functional with realistic placeholder content. Use realistic Elizabethtown KY property data (prices in the $200K-$500K range typical for the area).

### 3. Sell (/sell)
- Hero: "Sell Your Home for Top Dollar"
- Home valuation CTA (prominent form or button — "Get Your Free Home Valuation")
- Overview of their selling process/approach
- Why sell with Compass and Key Group (marketing strategy, negotiation, local expertise)
- Recent sold properties section (3-4 cards with placeholder data)
- Testimonial from a seller

### 4. About / Team (/about)
- Austin Kutz bio — Marine Corps veteran story, transition to real estate, passion for service
- Team section (placeholder for additional agents — use 2-3 placeholder team member cards)
- Company mission/values
- Photo placeholder areas
- "As a veteran-owned business, integrity, service, and results drive everything we do."

### 5. Areas We Serve (/areas)
- Overview of all service areas with brief descriptions
- Sections for: Elizabethtown (primary), Fort Knox/Radcliff, Louisville, Hardin County, Bardstown, Shepherdsville
- Each area gets a short paragraph about the community, lifestyle, housing market
- Link to Buy page from each area section

### 6. Military Relocation (/military-relocation)
- Dedicated page for military families — THIS IS A KEY DIFFERENTIATOR
- Austin's military background makes this authentic, not just marketing
- PCS (Permanent Change of Station) relocation assistance
- Fort Knox area expertise
- VA loan guidance and resources
- "From one service member to another" messaging
- Testimonials from military families they've helped
- CTA to contact for relocation assistance

### 7. Reviews (/reviews)
- Showcase their strong Google reviews
- Pull real review quotes from their actual reviews (we found several 5-star reviews)
- Display in a clean, readable format — not a wall of text
- Link to Google Reviews for more
- Include reviewer first names where available

### 8. Blog (/blog)
- Blog index page with 3-4 placeholder blog post cards
- Placeholder titles like: "First-Time Homebuyer's Guide to Elizabethtown", "PCS to Fort Knox? Here's What You Need to Know", "Elizabethtown Housing Market Update 2025", "5 Things to Know Before Selling Your Home"
- Each card has a title, date, excerpt, and "Read More" link
- Individual blog post pages are NOT needed for the prototype — cards can link to "#"

### 9. Contact (/contact)
- Contact form (name, email, phone, message, dropdown for Buy/Sell/Military Relocation/Other)
- Form doesn't need to actually submit — just look correct
- Office address with embedded Google Maps placeholder
- Phone, email, social links
- Office hours

### 10. Join Our Team (/join)
- Agent recruitment page
- Why join Compass and Key Group
- Benefits of Real Broker, LLC
- Austin's leadership philosophy quote: "My job is to find and attract mastery-based agents to the office, protect the culture, and make sure everyone is happy!"
- Application CTA / contact form

## Global Elements
- **Header**: Logo (use text "Compass & Key Group" styled nicely — no image logo needed), main nav, phone number, CTA button
- **Footer**: Contact info, quick links, social media icons, "Veteran-Owned Business" badge/note, Real Broker LLC attribution
- **Mobile**: Hamburger menu, sticky header
- **SEO**: Proper meta titles/descriptions on each page, semantic HTML, Open Graph tags

## Real Review Quotes to Use
- "We were incredibly impressed with Steve's professional and reliable communication, strong negotiation skills, and genuine care and support."
- "Austin was friendly and professional. He's very knowledgeable about real estate and pointing out the many features of the properties we looked at."
- "Austin went above and beyond to help us find the perfect home! Moving across country was less stressful because of the expertise and assistance that Austin provided."
- "Austin was an absolute pleasure to work with on the purchase of our home. He made the process smooth and easy."
- "Austin did an amazing job helping my wife and I find the perfect home not only for us but for our 3 dogs!"

## Instructions for Claude Code
1. Initialize a new Next.js project with App Router and Tailwind CSS
2. Build all 10 pages with full content — no "TODO" or "coming soon" placeholder text
3. Use realistic placeholder property data for listings (Elizabethtown KY market)
4. Make it fully responsive and polished
5. After building, deploy to Vercel staging
6. The Buy page is the highest priority — make it look complete and professional even without a live MLS feed
