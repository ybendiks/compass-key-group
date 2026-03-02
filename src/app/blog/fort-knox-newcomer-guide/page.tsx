import type { Metadata } from "next";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Fort Knox Newcomer's Guide: Resources, Contacts & Getting Settled | Compass & Key Group",
  description:
    "Fort Knox newcomer guide with essential contacts, in-processing steps, on-post resources, and tips for getting settled fast after your PCS move.",
};

export default function FortKnoxNewcomerGuide() {
  return (
    <BlogArticleLayout
      title="Fort Knox Newcomer's Guide: Resources, Contacts & Getting Settled"
      date="March 2026"
      readTime="8 min read"
      category="Military"
      heroDescription="You&apos;ve arrived at Fort Knox. Here&apos;s the practical checklist of resources, offices, and contacts you need to get settled without losing your mind."
      relatedArticles={[
        {
          title: "PCS to Fort Knox: The Complete Relocation Guide (2025)",
          href: "/blog/pcs-to-fort-knox-relocation-guide",
        },
        {
          title: "Fort Knox Schools: Guide for Military Families",
          href: "/blog/fort-knox-schools-military-families",
        },
        {
          title:
            "What to Expect When You PCS to Fort Knox: A Family Perspective",
          href: "/blog/pcs-fort-knox-family-perspective",
        },
        {
          title: "Temporary Housing & TLA Near Fort Knox: What to Know",
          href: "/blog/temporary-housing-tla-fort-knox",
        },
      ]}
    >
      <p>
        The first few weeks after arriving at a new duty station are a blur of
        in-processing, paperwork, and trying to figure out where everything is.
        This Fort Knox newcomer guide is designed to cut through the noise and
        give you the essential contacts, resources, and practical steps you
        need to get settled at{" "}
        <Link href="/areas/fort-knox">Fort Knox</Link> as quickly and
        painlessly as possible.
      </p>

      <h2>In-Processing: The First Week Essentials</h2>
      <p>
        Your in-processing experience will vary by unit, but here are the
        stops virtually every newcomer needs to make:
      </p>

      <h3>Replacement Company / In-Processing Center</h3>
      <p>
        When you arrive at Fort Knox, your first stop is typically the
        replacement detachment or your unit&apos;s in-processing coordinator.
        They&apos;ll give you a checklist of offices to visit and paperwork to
        complete. Keep a folder (physical or digital) of all your documents —
        orders, marriage certificate, birth certificates, vehicle
        registration, insurance — because you&apos;ll need them repeatedly.
      </p>

      <h3>ID Card Office (DEERS/RAPIDS)</h3>
      <p>
        Located in the Garrison headquarters area, the ID card office handles
        CAC updates, dependent ID cards, and DEERS enrollment changes.
        Appointments are strongly recommended — walk-ins may face long waits.
        Schedule through the ID Card Office Online appointment system before
        you arrive if possible.
      </p>

      <h3>Finance Office</h3>
      <p>
        Visit the finance office to ensure your BAH is set for the Fort Knox
        rate, update your direct deposit if needed, and verify your travel
        voucher is being processed. BAH for Fort Knox ranges from approximately
        $1,290/month (E-4 with dependents) to $1,590/month (E-7 with
        dependents) in 2025. If you have questions about dislocation allowance
        or other entitlements, this is the time to ask.
      </p>

      <h3>Vehicle Registration</h3>
      <p>
        All vehicles regularly accessing post need to be registered with the
        Provost Marshal&apos;s Office. Bring your valid driver&apos;s license,
        current vehicle registration, proof of insurance, and your CAC.
        Kentucky state law requires you to register your vehicle with the
        county clerk within 30 days if establishing residency — the Hardin
        County Clerk&apos;s office in Elizabethtown handles this.
      </p>

      <h2>Key On-Post Resources</h2>

      <h3>Army Community Service (ACS)</h3>
      <p>
        ACS is your one-stop shop for settling-in support. Located on post,
        they offer:
      </p>
      <ul>
        <li>Newcomer orientation briefings (attend this — it&apos;s genuinely useful)</li>
        <li>Relocation readiness assistance</li>
        <li>Financial readiness counseling</li>
        <li>Employment readiness programs for spouses</li>
        <li>Exceptional Family Member Program (EFMP) coordination</li>
        <li>Army Emergency Relief</li>
        <li>Volunteer and community connection programs</li>
      </ul>
      <p>
        Pro tip: Even if you think you don&apos;t need any of these services,
        go to the newcomer briefing. You&apos;ll learn about resources you
        didn&apos;t know existed and meet other families who just arrived.
      </p>

      <h3>Ireland Army Community Hospital</h3>
      <p>
        Ireland Army Community Hospital is the main medical facility on post.
        After arriving, you&apos;ll need to enroll with TRICARE and select a
        primary care provider. The hospital offers:
      </p>
      <ul>
        <li>Primary care clinics</li>
        <li>Pediatrics</li>
        <li>OB/GYN</li>
        <li>Behavioral health</li>
        <li>Pharmacy (on-post pharmacy fills prescriptions at no cost for generics)</li>
        <li>Dental clinic (active duty; family dental through TRICARE Dental Program)</li>
        <li>Emergency room</li>
      </ul>
      <p>
        For specialty care not available on post, you&apos;ll be referred off
        post. Baptist Health Hardin in Elizabethtown is the primary referral
        hospital and has a strong relationship with the military community.
      </p>

      <h3>Commissary &amp; PX</h3>
      <p>
        The Fort Knox commissary is reasonably well-stocked and saves most
        families 20-30% on groceries compared to off-post stores. The PX
        (AAFES Exchange) offers tax-free shopping on electronics, clothing,
        and household goods. Both are located in the central post area near
        Gold Vault Gate. Hours may vary, so check the Fort Knox garrison
        website for current schedules.
      </p>

      <h3>MWR (Morale, Welfare &amp; Recreation)</h3>
      <p>
        Fort Knox MWR manages an impressive range of facilities and programs:
      </p>
      <ul>
        <li>Anderson Physical Fitness Center and Gruber Physical Fitness Center</li>
        <li>Lindsey Golf Course (18 holes, affordable greens fees)</li>
        <li>Outdoor recreation equipment rental (kayaks, camping gear, etc.)</li>
        <li>Otter Creek Outdoor Recreation Area (hiking, fishing, camping)</li>
        <li>Bowling center</li>
        <li>Movie theater</li>
        <li>Auto skills center (DIY car repair with tools and lifts)</li>
        <li>Arts and crafts center</li>
        <li>Swimming pools (seasonal)</li>
      </ul>

      <h3>Child &amp; Youth Services (CYS)</h3>
      <p>
        If you have kids, register with CYS early. They manage:
      </p>
      <ul>
        <li>Child Development Centers (CDC) for ages 6 weeks to 5 years — waitlists are common, so register as soon as you have orders</li>
        <li>School-Age Care (SAC) before and after school programs</li>
        <li>Youth sports leagues</li>
        <li>Teen center</li>
        <li>School Liaison Officer (SLO) who can help with school enrollment and academic transitions</li>
      </ul>

      <h2>Essential Off-Post Information</h2>

      <h3>Utilities Setup</h3>
      <p>
        If you&apos;re living off post, you&apos;ll need to set up:
      </p>
      <ul>
        <li><strong>Electric:</strong> Nolin RECC (rural areas) or Kentucky Utilities (E-town area)</li>
        <li><strong>Water/sewer:</strong> Varies by municipality — Radcliff Utilities, Vine Grove, or Hardin County Water District</li>
        <li><strong>Gas:</strong> Atmos Energy</li>
        <li><strong>Internet:</strong> AT&amp;T and Spectrum are the primary providers. Availability and speeds vary by neighborhood — check coverage before choosing a home.</li>
        <li><strong>Trash:</strong> Republic Services or municipal trash pickup depending on location</li>
      </ul>

      <h3>Driver&apos;s License &amp; Vehicle Registration</h3>
      <p>
        Kentucky does not require active-duty service members to obtain a
        Kentucky driver&apos;s license if they maintain a valid license from
        their home state. However, if you choose to get a Kentucky license or
        if your current license expires, visit the Hardin County Circuit
        Clerk&apos;s office in Elizabethtown. Vehicle registration is required
        within 30 days if you establish Kentucky residency.
      </p>

      <h3>Banking</h3>
      <p>
        Fort Knox Federal Credit Union operates on post and is popular with
        military families. USAA and Navy Federal Credit Union are also widely
        used and have strong military-specific services. Several national banks
        have branches in Elizabethtown and Radcliff.
      </p>

      <h2>Getting to Know the Area</h2>
      <p>
        Once the in-processing whirlwind settles, take time to explore.{" "}
        <Link href="/areas/fort-knox">Fort Knox</Link> and the surrounding
        area offer more than you might expect:
      </p>
      <ul>
        <li>Drive through Radcliff, Vine Grove, and Elizabethtown to get a feel for each community</li>
        <li>Visit the Patton Museum on post (free, and worth seeing)</li>
        <li>Explore Otter Creek for outdoor recreation</li>
        <li>Take a Saturday trip to Louisville (45 minutes north) for big-city amenities</li>
        <li>Hit the Bourbon Trail — Maker&apos;s Mark, Jim Beam, and others are close by</li>
      </ul>

      <h2>Housing: Don&apos;t Rush the Decision</h2>
      <p>
        One of the biggest mistakes newcomers make is rushing into a housing
        decision. If possible, use temporary housing for the first 1-2 weeks
        while you explore neighborhoods, schools, and commute routes. What
        looks good online may feel different in person, and understanding gate
        traffic patterns, school zones, and community vibes takes a few days
        of firsthand experience.
      </p>
      <p>
        When you&apos;re ready to start your home search, the Compass &amp;
        Key Group is here to help. We specialize in helping Fort Knox
        newcomers find homes that match their family, commute, and budget.{" "}
        <Link href="/contact">Reach out to us</Link> for a personalized
        consultation, or{" "}
        <Link href="/buy">browse available homes</Link> near Fort Knox right
        now.
      </p>
    </BlogArticleLayout>
  );
}
