import Image from "next/image";
import { TeamMember } from "@/data/team";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
      {/* Headshot */}
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
      {/* Info */}
      <div className="p-5">
        <h3 className="font-heading text-xl font-bold text-navy mb-0.5">
          {member.name}
        </h3>
        <p className="text-sm font-medium text-gold mb-3">{member.title}</p>
        <p className="text-base text-gray-600 leading-relaxed mb-4">
          {member.bio.length > 200 ? member.bio.slice(0, 200) + "..." : member.bio}
        </p>
        <div className="flex items-center justify-between">
          <div className="space-y-1 text-sm text-gray-500">
            <a href={`tel:${member.phone}`} className="block hover:text-gold transition-colors">
              {member.phone}
            </a>
          </div>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate/50 hover:text-gold transition-colors"
              aria-label={`${member.name} LinkedIn`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
