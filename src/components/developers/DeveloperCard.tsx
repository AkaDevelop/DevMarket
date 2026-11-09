import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Developer } from '../../types';
import { DeveloperAvatar } from '../common/DeveloperAvatar';
import { AvailabilityBadge } from '../common/AvailabilityBadge';
import { ServiceRating } from '../common/ServiceRating';
import { TechnologyTag } from '../common/TechnologyTag';

interface DeveloperCardProps {
  developer: Developer;
  onSelectDeveloper: (developer: Developer) => void;
  className?: string;
}

export const DeveloperCard: React.FC<DeveloperCardProps> = ({
  developer,
  onSelectDeveloper,
  className = '',
}) => {
  return (
    <article
      onClick={() => onSelectDeveloper(developer)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectDeveloper(developer);
        }
      }}
      role="button"
      tabIndex={0}
      className={`group relative flex flex-col justify-between p-6 bg-white border border-[#E2E8F0] rounded-[12px] shadow-[0_1px_2px_rgba(15,23,42,0.06)] hover:shadow-[0_4px_12px_rgba(15,23,42,0.08)] hover:border-[#BFDBFE] transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 ${className}`}
    >
      <div>
        {/* Top Header: Avatar + Name + Specialty + Availability */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <DeveloperAvatar
              initials={developer.initials}
              name={developer.name}
              size="md"
            />
            <div>
              <h3 className="font-manrope font-bold text-base text-[#0F172A] group-hover:text-[#2563EB] transition-colors duration-150 leading-snug">
                {developer.name}
              </h3>
              <p className="text-xs font-medium text-[#64748B] mt-0.5">
                {developer.specialty}
              </p>
            </div>
          </div>
        </div>

        {/* Location & Availability Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
            <MapPin className="w-3.5 h-3.5 text-[#64748B] shrink-0" aria-hidden="true" />
            <span>{developer.location}</span>
          </div>
          <AvailabilityBadge status={developer.availability} />
        </div>

        {/* Bio */}
        <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2 mb-4">
          {developer.bio}
        </p>

        {/* Technology stack */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {developer.technologies.slice(0, 4).map((tech) => (
            <TechnologyTag key={tech} technology={tech} asButton={false} />
          ))}
          {developer.technologies.length > 4 && (
            <span className="inline-flex items-center text-[11px] text-[#64748B] px-1.5 py-0.5">
              +{developer.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Card Footer: Rating & Action */}
      <div className="mt-5 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
        <ServiceRating rating={developer.rating} reviewCount={developer.reviewCount} />

        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] group-hover:translate-x-0.5 transition-transform duration-150">
          Ver perfil
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </span>
      </div>
    </article>
  );
};
