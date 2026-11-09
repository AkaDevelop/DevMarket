import React from 'react';

interface TechnologyTagProps {
  technology: string;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
  asButton?: boolean;
}

export const TechnologyTag: React.FC<TechnologyTagProps> = ({
  technology,
  isSelected = false,
  onClick,
  className = '',
  asButton = true,
}) => {
  if (!asButton || !onClick) {
    return (
      <span
        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0] ${className}`}
      >
        {technology}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-150 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-1 ${
        isSelected
          ? 'bg-[#EFF6FF] text-[#2563EB] border border-[#2563EB] font-semibold shadow-xs'
          : 'bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0] hover:bg-[#F1F5F9] hover:border-[#7F8EA3]'
      } ${className}`}
    >
      {technology}
    </button>
  );
};
