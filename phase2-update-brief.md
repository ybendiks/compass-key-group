# Compass and Key Group — Phase 2 Update Brief

The prototype was approved. Now we update the site with real data, brand assets, content, and functionality.

---

## 1. BRAND COLORS — UPDATE TAILWIND CONFIG

Replace the current color palette with the official brand colors:

- **Navy**: #22334b (primary — headers, nav, footer, buttons)
- **Off-white**: #f4f3f2 (backgrounds, light sections)
- **Black**: #000000 (body text)
- **White**: #ffffff (card backgrounds, contrast sections)
- **Gold**: #dfb766 (accent — CTAs, highlights, hover states, badges)

Update `tailwind.config.js` to use these as the core palette. Every page should reflect this palette consistently.

---

## 2. REAL ASSETS — Pull from existing site

### Logos (download and use locally)
- Logo 1 (color on light): https://cdn.chime.me/image/fs/cmsbuild/20241129/20/h200_original_ee4cd9b5-8f96-4bce-a6d4-48fc9fa34939-png.webp
- Logo 2 (with Real Broker): https://cdn.chime.me/image/fs/cmsbuild/20241129/20/h200_original_4668d681-6886-42df-b756-7eb922aba2fb-png.webp
- Logo 3 (black, no background): https://cdn.chime.me/image/fs/cmsbuild/20241129/21/h60_original_31f94f84-efdb-43cf-b0fd-29fdcf8b6189-png.webp
- Logo 4 (Real Broker outline black): https://cdn.chime.me/image/fs/cmsbuild/20241129/21/h60_original_1c5d1115-d687-4da4-b42d-35957f80ea72-png.webp

### Social Media Links
- Twitter/X: https://twitter.com/austinkrealtor
- Facebook: https://www.facebook.com/Compass-and-Key-Group,-Real-Broker-122104284446009536
- Instagram: https://www.instagram.com/austinkrealtor
- LinkedIn: https://www.linkedin.com/in/austin-kutz-5657132b4

### Contact Info
- Phone: (270) 735-3897
- Email: austin@compassandkeygroup.com
- Office: 617 N Mulberry St #105B, Elizabethtown, KY 42701
- KY Real Estate License #277797

---

## 3. REAL TEAM DATA (3 members)

### Austin Kutz — Owner/Realtor
- U.S. Marine Corps veteran — enlisted after high school in Wisconsin
- 5 years active duty, 2 overseas tours
- Transitioned to U.S. Army Reserves to pursue Bachelor's Degree in Business
- KY Real Estate License #277797
- "Austin prides himself on his determination and work ethic in all aspects of real estate. His relentless follow through and attention to detail simply gets the job done with no excuses."
- Leadership quote: "My job is to find and attract mastery-based agents to the office, protect the culture, and make sure everyone is happy!"
- Headshot: https://cdn.chime.me/image/fs/user-info/202527/22/w600_original_59b4fbd9-a10b-445f-8f8d-61c11a5f87da-jpeg.webp
- LinkedIn: https://www.linkedin.com/in/austin-kutz-5657132b4

### Steve Nikirk — Agent
- Experienced Realtor with background in retail management (former Store Manager, Gap Inc./Old Navy)
- B.S. in Business Administration and Management from Oakland City University
- Skilled in negotiation, management, customer service, sales
- Local to Elizabethtown — "This isn't just where I work—it's home."
- Headshot: https://cdn.chime.me/image/fs/user-info/2025110/17/w600_original_62bb035d-62c4-4afd-84a8-cbe14f863e93-jpeg.webp
- LinkedIn: https://www.linkedin.com/in/steve-nikirk-56862786/

### Ciara Hardesty — Agent
- Born and raised in Hardin County, KY — deep-rooted local connection
- Strong knowledge of local builders, market trends, and trusted service providers
- Specializes in buying, selling, investing, and advisory
- Bio: "Born and raised in Hardin County, KY, I have a deep-rooted connection to this community and the surrounding areas. I'm proud to offer my knowledge of local builders, market trends, and a strong network of trusted services to my clients. Whether you're buying, selling, investing, or looking for advice, my goal is to make your real estate journey as smooth and successful as possible. I'm here to help you find the perfect home or investment in the area I know and love."
- Active in Elizabethtown and surrounding areas including Nolin Lake properties
- Headshot: https://cdn.lofty.com/image/fs/user-info/2025621/20/w600_original_e876c2ae-a486-432e-b72c-0c6edc6b3bfd-jpeg.webp
- LinkedIn: https://www.linkedin.com/in/ciarahardesty/

---

## 4. REAL REVIEWS — Use these verified quotes

From Google/Zillow (attributed):

1. **Tom** (Zillow Verified): "Everything was perfect from start to finish. Austin was friendly and professional. He's very knowledgeable about real estate and pointing out the many features of the properties we looked at. He was very thorough about the buying process and what options we had regarding such."

2. **[Name withheld]** (Zillow Verified): "Austin went above and beyond to help us find the perfect home! Moving across country was less stressful because of the expertise and assistance that Austin provided along the way. His knowledge of the area, the quality of work completed, and the general home buying process is beyond measure."

3. **[Name withheld]** (Zillow Verified): "Austin was an absolute pleasure to work with on the purchase of our home. He made the process smooth and easy and gave my husband and I great peace of mind that all was well especially since we lived 700 miles away."

4. **[Name withheld]** (Zillow Verified): "Austin did an amazing job helping my wife and I find the perfect home not only for us but for our 3 dogs!"

5. **Christie** (Google): "We were incredibly impressed with Steve's professional and reliable communication, strong negotiation skills, and genuine care and support. I would definitely recommend him for friends and family!"

6. **[Name withheld]** (Google): "Steve was absolutely wonderful from beginning to end. His service was top notch!!!! He made the whole process easy and it was like working with a long time friend. On a scale 1 to 5 stars he is an 11."

7. **[Name withheld]** (LinkedIn): "Steve helped us purchase our new home. We walked in with a long list of requirements, but there was only a short list of homes on the market. We found an amazing home fairly fast and REALLY enjoyed working with Steve every step of the way. He's easy to work with and easy to like!"

---

## 5. GOOGLE MAPS WIDGET — Contact Page

Add an embedded Google Maps iframe to the Contact page:

```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.0!2d-85.8591!3d37.6934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQxJzM2LjQiTiA4NcKwNTEnMzIuOCJX!5e0!3m2!1sen!2sus!4v1234567890"
  width="100%"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

NOTE: The embed URL above is approximate. For the real embed, search Google Maps for "617 N Mulberry St #105B, Elizabethtown, KY 42701", click Share > Embed, and use that exact iframe code. For now, use Google Maps Embed API with the address as a query parameter:

```
https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=617+N+Mulberry+St+%23105B,+Elizabethtown,+KY+42701
```

If no API key is available, use a static map image or a link to Google Maps as a fallback.

---

## 6. CONTENT HUBS — Local Area Pages

Replace the single "Areas We Serve" page with individual, rich content pages for each area. These are critical for local SEO. Prioritize the first 3 (less competition, closer to base).

### Priority 1 — Build first:

#### /areas/elizabethtown
- Primary market — this is home base
- Population ~33,000, county seat of Hardin County
- "Etown" — small-city charm, growing economy, affordable housing
- Proximity to Fort Knox, I-65 access to Louisville (45 min) and Nashville (2 hrs)
- Key neighborhoods and subdivisions
- School districts (Elizabethtown Independent Schools, Hardin County Schools)
- Average home prices, market trends
- Lifestyle: Freeman Lake, Swope's Cars of Yesteryear, downtown dining
- Target keywords: "homes for sale Elizabethtown KY", "Elizabethtown KY real estate", "realtors in Elizabethtown KY", "Etown KY homes"

#### /areas/fort-knox
- Military relocation hub — links to Military Relocation page
- Fort Knox / Gold Vault history and current operations
- Surrounding communities: Radcliff, Vine Grove, Muldraugh
- BAH rates, VA loan info for service members
- On-post vs off-post housing comparison
- Schools serving military families
- Target keywords: "homes near Fort Knox KY", "Fort Knox PCS relocation", "houses for sale near Fort Knox", "military housing Fort Knox"

#### /areas/bardstown
- "Bourbon Capital of the World" — unique lifestyle angle
- Historic downtown, tourism economy (bourbon trail)
- Growing residential market, more affordable than Louisville
- Nelson County schools
- Target keywords: "homes for sale Bardstown KY", "Bardstown KY real estate", "bourbon country homes Kentucky"

#### /areas/radcliff
- Directly adjacent to Fort Knox — primary off-post housing for military families
- Population ~23,000, second largest city in Hardin County
- Affordable housing, military-friendly community
- Close to Fort Knox gate access, shopping, dining along Dixie Highway
- Hardin County Schools
- Target keywords: "homes for sale Radcliff KY", "Radcliff KY real estate", "housing near Fort Knox Radcliff"

#### /areas/vine-grove
- Small-town feel, close to Fort Knox
- Population ~6,000, tight-knit community
- Very affordable housing compared to Elizabethtown
- Popular with military families wanting more space and quieter living
- Hardin County Schools
- Target keywords: "homes for sale Vine Grove KY", "Vine Grove KY real estate", "Vine Grove houses near Fort Knox"

### Priority 2 — Build after:

#### /areas/i65-corridor
- Strategic positioning page — highlights accessibility
- Communities along I-65 between Louisville and Elizabethtown
- Shepherdsville, Lebanon Junction, West Point, Radcliff
- Commuter-friendly, best of both worlds (rural feel, city access)
- Target keywords: "I-65 corridor Kentucky homes", "commuter homes Louisville KY"

#### /areas/louisville
- Secondary market — larger, more competitive
- Position CKG as the value alternative to big Louisville brokerages
- South Louisville, Hillview, Shepherdsville — areas closest to Etown
- Target keywords: "Louisville KY real estate agent", "south Louisville homes for sale"

### Content Guidelines for All Area Pages:
- Each page should be 800-1200 words of original, useful content
- Include: area overview, lifestyle/community, schools, housing market snapshot, why live here, neighborhoods/subdivisions
- End with CTA: "Ready to find your home in [Area]? Contact us today."
- Internal linking: link to Buy page, Military Relocation page (from Fort Knox), Contact page
- Each page gets unique meta title and description optimized for local keywords
- Add a "homes typically range from $X to $Y" section for each area
- Tone: knowledgeable local expert, not salesy — like a friend who lives there telling you about the area

---

## 7. IDX SEARCH WIDGET — Buy Page (POSTPONED)

Waiting on API access. When ready, integrate into the Buy page (/buy). For now, keep the current placeholder design but make it look polished — not broken. Options being evaluated:
- RealScout
- IDX Broker
- Spark API direct integration

---

## 8. EXECUTION ORDER

1. Update Tailwind config with brand colors → apply across all pages
2. Download and integrate real logos from existing site
3. Update all social media links across header/footer
4. Replace placeholder team data with real Austin Kutz bio + Steve info
5. Replace placeholder reviews with real verified reviews
6. Add Google Maps embed to Contact page
7. Build out the 7 area content hub pages (Priority 1: Elizabethtown, Fort Knox, Bardstown, Radcliff, Vine Grove — then Priority 2: I-65 Corridor, Louisville)
8. Update meta titles/descriptions on every page for SEO
9. Test responsive on mobile
10. Redeploy to Vercel staging

---

## ITEMS NEEDED FROM CLIENT

- [x] ~~Area pages~~ — CONFIRMED: Elizabethtown, Fort Knox, Bardstown, Radcliff, Vine Grove (Priority 1), I-65 Corridor, Louisville (Priority 2)
- [x] ~~Ciara Hardesty bio~~ — DONE, pulled from Zillow
- [x] ~~Property photos~~ — APPROVED to use MLS photos
- [x] ~~Google Maps~~ — Using free embed
- [ ] IDX/MLS API credentials — PENDING, client will provide later
- [ ] Specific neighborhoods/subdivisions to highlight — Client unsure, we'll research and recommend
- [ ] Hero images/photography for area pages — TBD (can use stock or local photography for now)
