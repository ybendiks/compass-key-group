import type { Metadata } from "next";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "The Ultimate Central Kentucky Relocation Checklist | Compass & Key Group",
  description:
    "Your complete Central Kentucky relocation checklist covering housing, schools, utilities, vehicle registration, and everything you need to settle into the Elizabethtown and Fort Knox area.",
};

export default function CentralKentuckyRelocationChecklist() {
  return (
    <BlogArticleLayout
      title="The Ultimate Central Kentucky Relocation Checklist"
      date="March 2026"
      readTime="8 min read"
      category="Central Kentucky"
      heroDescription="Moving to a new area involves dozens of tasks you don't think about until you're in the middle of the chaos. This checklist keeps you organized from start to finish."
      relatedArticles={[
        {
          title: "Best Places to Live Near Fort Knox in 2025",
          href: "/blog/best-places-live-near-fort-knox",
        },
        {
          title: "Moving to Kentucky: What Out-of-State Buyers Need to Know",
          href: "/blog/moving-to-kentucky-out-of-state-buyers",
        },
        {
          title:
            "Homeowners Insurance in Kentucky: What to Know Before You Buy",
          href: "/blog/homeowners-insurance-kentucky",
        },
        {
          title:
            "How to Choose the Right Real Estate Agent in Central Kentucky",
          href: "/blog/choosing-real-estate-agent-central-kentucky",
        },
      ]}
    >
      <p>
        Central Kentucky relocation can feel overwhelming when you&apos;re
        juggling a home search, a job transition, and all the logistics of
        uprooting your life. Whether you&apos;re moving to the{" "}
        <Link href="/areas/elizabethtown">Elizabethtown</Link> area for work,
        PCSing to{" "}
        <Link href="/areas/fort-knox">Fort Knox</Link>, or relocating from
        another part of Kentucky, having a structured checklist saves you
        from the &quot;what did I forget?&quot; panic that hits two weeks
        after you arrive. This guide covers everything from pre-move planning
        through settling into your new community.
      </p>

      <h2>60&ndash;90 Days Before Your Move</h2>
      <h3>Housing</h3>
      <ul>
        <li>
          Start your home search early. In Central Kentucky&apos;s current
          market, desirable homes under $250K move within days. Getting
          pre-approved for your mortgage before you start looking puts you
          in a position to act quickly.
        </li>
        <li>
          Research the different communities:{" "}
          <Link href="/areas/elizabethtown">Elizabethtown</Link> for suburban
          convenience,{" "}
          <Link href="/areas/radcliff">Radcliff</Link> for Fort Knox
          proximity,{" "}
          <Link href="/areas/vine-grove">Vine Grove</Link> for small-town
          living,{" "}
          <Link href="/areas/bardstown">Bardstown</Link> for historic charm,
          and the{" "}
          <Link href="/areas/i65-corridor">I-65 corridor</Link> for those
          commuting to{" "}
          <Link href="/areas/louisville">Louisville</Link>.
        </li>
        <li>
          If buying remotely, connect with a local agent who can conduct
          video tours and provide honest assessments of neighborhoods and
          properties.
        </li>
        <li>
          If renting first, know that Elizabethtown and Radcliff have the
          most rental inventory. Lease terms for military families should
          include a military clause per the Servicemembers Civil Relief Act.
        </li>
      </ul>

      <h3>Employment &amp; Finances</h3>
      <ul>
        <li>
          If your move is job-related, confirm your start date and any
          relocation assistance your employer provides.
        </li>
        <li>
          Open a local bank account. Fort Knox Federal Credit Union and
          Lincoln Trail Federal Credit Union are both well-established in
          the area and offer military-friendly and community banking options.
        </li>
        <li>
          Get pre-approved for a mortgage if buying. VA loans, FHA loans,
          and conventional financing are all widely available through local
          lenders.
        </li>
        <li>
          Budget for moving costs. A long-distance move to Central Kentucky
          typically costs $3,000&ndash;$8,000+ depending on distance and
          household size. Military PCS moves are covered by the government,
          but weight limits apply.
        </li>
      </ul>

      <h2>30&ndash;60 Days Before Your Move</h2>
      <h3>Schools</h3>
      <ul>
        <li>
          Research school districts based on where you&apos;re living.
          Elizabethtown has its own city school system (ECPS), while
          surrounding areas use Hardin County Schools. Bardstown falls under
          Nelson County Schools.
        </li>
        <li>
          Request school records from your children&apos;s current school.
          Kentucky schools will need transcripts, immunization records, and
          any IEP or 504 plan documentation.
        </li>
        <li>
          Schedule school tours if possible. Visiting during a school day
          gives you the most accurate feel for the environment.
        </li>
        <li>
          For military families: DoDEA schools on Fort Knox are available
          for those living on post. The Interstate Compact on Educational
          Opportunity for Military Children ensures smooth enrollment
          transitions.
        </li>
      </ul>

      <h3>Logistics</h3>
      <ul>
        <li>
          Book your moving company or reserve a moving truck. Summer is peak
          PCS season in the Fort Knox area, and movers book up fast from
          May through August.
        </li>
        <li>
          Submit a change of address through USPS at least two weeks before
          your move.
        </li>
        <li>
          Notify your current utility providers of your disconnect date.
        </li>
        <li>
          Make copies of important documents: birth certificates, Social
          Security cards, medical records, pet vaccination records, and
          vehicle titles.
        </li>
      </ul>

      <h2>1&ndash;2 Weeks Before Your Move</h2>
      <h3>Utilities &amp; Services</h3>
      <ul>
        <li>
          <strong>Electric:</strong> Nolin RECC serves most of Hardin County
          and the Fort Knox area. Set up service online or by phone before
          your move-in date.
        </li>
        <li>
          <strong>Water:</strong> Hardin County Water District No. 1 or the
          city water department (depending on location). Bardstown has its
          own water utility.
        </li>
        <li>
          <strong>Gas:</strong> Atmos Energy provides natural gas service
          in the area. Not all properties have gas &mdash; many homes use
          all-electric HVAC.
        </li>
        <li>
          <strong>Internet:</strong> Spectrum is the primary broadband
          provider in Elizabethtown and surrounding areas. AT&amp;T fiber
          is available in some newer developments. Rural properties along
          the I-65 corridor may have limited options.
        </li>
        <li>
          <strong>Trash:</strong> City residents have municipal trash
          service included in their property taxes. County residents need
          to arrange private pickup through companies like Rumpke or
          Republic Services.
        </li>
      </ul>

      <h3>Medical &amp; Prescriptions</h3>
      <ul>
        <li>
          Transfer prescriptions to a local pharmacy. CVS, Walgreens, and
          Walmart pharmacies are all represented in Elizabethtown.
        </li>
        <li>
          Request medical and dental records from your current providers.
        </li>
        <li>
          For TRICARE beneficiaries: register with Ireland Army Health
          Clinic on Fort Knox or select a TRICARE-network provider in the
          Elizabethtown area.
        </li>
        <li>
          Baptist Health Hardin is the main hospital in the area.
          Louisville&apos;s major hospital systems are about 45 minutes
          north for specialized care.
        </li>
      </ul>

      <h2>First Week After Arrival</h2>
      <h3>Vehicle &amp; Driver&apos;s License</h3>
      <ul>
        <li>
          Kentucky requires new residents to obtain a Kentucky driver&apos;s
          license within 30 days of establishing residency. Visit the Hardin
          County Circuit Clerk&apos;s office in Elizabethtown to apply.
          Bring your out-of-state license, Social Security card, proof of
          residency, and proof of legal presence.
        </li>
        <li>
          Register your vehicle with the Hardin County Clerk within 30 days.
          You&apos;ll need the vehicle title, proof of insurance, and
          payment for registration fees and property tax on the vehicle.
        </li>
        <li>
          Kentucky requires a vehicle inspection upon registration if
          your vehicle is coming from out of state. The county clerk&apos;s
          office will direct you to an authorized inspection station.
        </li>
        <li>
          Active-duty military members stationed in Kentucky are generally
          exempt from re-registering vehicles and obtaining a Kentucky
          license if they maintain legal residence in another state.
        </li>
      </ul>

      <h3>Voter Registration</h3>
      <ul>
        <li>
          Register to vote at your new address through the Hardin County
          Clerk&apos;s office or online through the Kentucky Secretary of
          State&apos;s website. You can also register when you get your
          driver&apos;s license.
        </li>
      </ul>

      <h2>First Month: Getting Connected</h2>
      <ul>
        <li>
          Find your go-to grocery store. Kroger on Ring Road in
          Elizabethtown is the local favorite, but Walmart Supercenter,
          Aldi, and Save-A-Lot are also options.
        </li>
        <li>
          Explore your community. Freeman Lake Park and the Elizabethtown
          Nature Park are great starting points. Bardstown&apos;s downtown
          has walkable shops and restaurants. The bourbon distilleries
          along the Kentucky Bourbon Trail are a must-visit.
        </li>
        <li>
          Connect with local groups. Churches, youth sports leagues, and
          volunteer organizations are the fastest way to build a social
          network in Central Kentucky. The Elizabethtown-Hardin County
          Chamber of Commerce and local Facebook groups are solid resources.
        </li>
        <li>
          Find a primary care doctor, dentist, and veterinarian before you
          need one urgently. Waiting until there&apos;s an emergency limits
          your options.
        </li>
        <li>
          If you have pets, locate the nearest emergency vet. Louisville has
          24-hour emergency veterinary hospitals; locally, there are several
          well-regarded veterinary clinics in the Elizabethtown area.
        </li>
      </ul>

      <h2>Ongoing: Settling In</h2>
      <ul>
        <li>
          Update your estate planning documents (will, power of attorney,
          healthcare directive) to reflect Kentucky law. An estate attorney
          in Elizabethtown can handle this for a reasonable flat fee.
        </li>
        <li>
          Review your homeowners insurance annually to ensure your coverage
          keeps pace with your home&apos;s value and any improvements
          you make.
        </li>
        <li>
          File your Kentucky state income tax return the following April.
          Kentucky uses a flat 4% state income tax rate.
        </li>
        <li>
          Get involved. The communities around Fort Knox are welcoming but
          tight-knit. The people who integrate fastest are the ones who
          show up &mdash; at school events, local festivals, and
          neighborhood gatherings.
        </li>
      </ul>

      <h2>We&apos;re Here to Help With Your Move</h2>
      <p>
        Relocating to Central Kentucky is a big step, and the housing piece
        is just one part of it. We help families navigate the entire process,
        from understanding which community fits their lifestyle to connecting
        them with local resources that make the transition smoother.{" "}
        <Link href="/contact">Contact our team</Link> to get started with your
        relocation, or{" "}
        <Link href="/buy">browse available homes</Link> to see what&apos;s on
        the market in the area you&apos;re considering.
      </p>
    </BlogArticleLayout>
  );
}
