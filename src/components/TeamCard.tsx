import Image from "next/image";
import Link from "next/link";
import { TeamMember } from "@/data/team";
import SocialIcons from "@/components/SocialIcons";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
      {/* Headshot */}
      <Link href={`/about/${member.slug}/`} className="block">
        <div className="h-72 relative bg-gradient-to-br from-slate/20 to-navy/30">
          {member.headshot ? (
            <Image
              src={member.headshot}
              alt={member.name}
              fill
              className="object-cover object-top"
            />
          ) : (
            <div className="h-full flex items-center justify-center">
              <svg className="w-20 h-20 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
          )}
        </div>
      </Link>
      {/* Info */}
      <div className="p-5">
        <Link href={`/about/${member.slug}/`} className="hover:text-gold transition-colors">
          <h3 className="font-heading text-xl font-bold text-navy mb-0.5">
            {member.name}
          </h3>
        </Link>
        <p className="text-sm font-medium text-gold mb-3">{member.title}</p>
        <p className="text-base text-gray-600 leading-relaxed mb-4">
          {member.bio.length > 200 ? member.bio.slice(0, 200) : member.bio}
        </p>
        <div className="flex items-center justify-between mb-4">
          <div className="space-y-1 text-sm text-gray-500">
            <a href={`tel:${member.phone}`} className="block hover:text-gold transition-colors">
              {member.phone}
            </a>
          </div>
          <SocialIcons
            links={member.socialLinks}
            name={member.name}
            className="flex gap-2"
            iconClass="w-4.5 h-4.5"
          />
        </div>
        <Link
          href={`/about/${member.slug}/`}
          className="text-sm font-semibold text-gold hover:text-gold-light transition-colors"
        >
          View Full Profile &rarr;
        </Link>
      </div>
    </div>
  );
}
