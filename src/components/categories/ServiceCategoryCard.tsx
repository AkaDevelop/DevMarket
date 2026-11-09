import React from 'react';
import {
  Globe,
  Server,
  Smartphone,
  Cpu,
  Database,
  GitBranch,
  Sparkles,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';
import { ServiceCategory } from '../../types';

interface ServiceCategoryCardProps {
  category: ServiceCategory;
  onClick: (category: ServiceCategory) => void;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Server,
  Smartphone,
  Cpu,
  Database,
  GitBranch,
  Sparkles,
};

export const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({
  category,
  onClick,
  className = '',
}) => {
  const IconComponent = iconMap[category.iconName] || Globe;

  return (
    <div
      onClick={() => onClick(category)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(category);
        }
      }}
      role="button"
      tabIndex={0}
      className={`group relative flex flex-col justify-between p-6 bg-white border border-[#E2E8F0] rounded-[12px] shadow-[0_1px_2px_rgba(15,23,42,0.06)] hover:shadow-[0_4px_12px_rgba(15,23,42,0.08)] hover:border-[#BFDBFE] transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 ${className}`}
    >
      <div>
        <div className="w-11 h-11 rounded-[8px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-4 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-150">
          <IconComponent className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
        </div>

        <h3 className="font-manrope font-bold text-base text-[#0F172A] group-hover:text-[#2563EB] transition-colors duration-150 leading-snug">
          {category.name}
        </h3>

        <p className="mt-2 text-xs text-[#64748B] leading-relaxed line-clamp-2">
          {category.description}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs">
        <span className="text-[#64748B]">
          {category.serviceCountFictional} servicios
        </span>
        <span className="inline-flex items-center gap-1 font-semibold text-[#2563EB] group-hover:translate-x-0.5 transition-transform duration-150">
          Explorar
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </span>
      </div>
    </div>
  );
};
