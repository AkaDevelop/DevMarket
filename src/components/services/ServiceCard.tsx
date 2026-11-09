import React from 'react';
import { User, Code2 } from 'lucide-react';
import { Service } from '../../types';
import { ServiceRating } from '../common/ServiceRating';
import { DeliveryBadge } from '../common/DeliveryBadge';
import { ServicePrice } from '../common/ServicePrice';
import { TechnologyTag } from '../common/TechnologyTag';

interface ServiceCardProps {
  service: Service;
  onSelectService: (service: Service) => void;
  onSelectDeveloper?: (developerId: string) => void;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelectService,
  onSelectDeveloper,
  className = '',
}) => {
  return (
    <article
      onClick={() => onSelectService(service)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectService(service);
        }
      }}
      role="button"
      tabIndex={0}
      className={`group relative flex flex-col justify-between p-6 bg-white border border-[#E2E8F0] rounded-[12px] shadow-[0_1px_2px_rgba(15,23,42,0.06)] hover:shadow-[0_4px_12px_rgba(15,23,42,0.08)] hover:border-[#BFDBFE] transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 ${className}`}
    >
      <div>
        {/* Category & Scope header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
            {service.category}
          </span>
          <DeliveryBadge days={service.deliveryDays} />
        </div>

        {/* Title */}
        <h3 className="font-manrope font-bold text-base text-[#0F172A] group-hover:text-[#2563EB] transition-colors duration-150 leading-snug line-clamp-2 min-h-[44px]">
          {service.title}
        </h3>

        {/* Developer info */}
        <div className="mt-3 flex items-center gap-2 text-xs text-[#64748B]">
          <User className="w-3.5 h-3.5 text-[#64748B]" aria-hidden="true" />
          <span>Por</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (onSelectDeveloper) {
                onSelectDeveloper(service.developerId);
              }
            }}
            className="font-medium text-[#0F172A] hover:text-[#2563EB] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded px-0.5"
          >
            {service.developerName}
          </button>
        </div>

        {/* Short description */}
        <p className="mt-3 text-xs text-[#64748B] leading-relaxed line-clamp-2">
          {service.description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {service.technologies.slice(0, 3).map((tech) => (
            <TechnologyTag key={tech} technology={tech} asButton={false} />
          ))}
          {service.technologies.length > 3 && (
            <span className="inline-flex items-center text-[11px] text-[#64748B] px-1.5 py-0.5">
              +{service.technologies.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Card footer: Rating & Starting Price */}
      <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center justify-between gap-4">
        <ServiceRating rating={service.rating} reviewCount={service.reviewCount} />
        <ServicePrice priceUsd={service.startingPriceUsd} />
      </div>
    </article>
  );
};
