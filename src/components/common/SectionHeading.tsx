import React from 'react';
import { Info } from 'lucide-react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  showFictionalNotice?: boolean;
  rightAction?: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  showFictionalNotice = false,
  rightAction,
  className = '',
}) => {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 ${className}`}>
      <div>
        <div className="flex items-center gap-2.5">
          <h2 className="font-manrope font-bold text-2xl lg:text-[28px] text-[#0F172A] leading-tight">
            {title}
          </h2>
          {showFictionalNotice && (
            <span
              className="inline-flex items-center gap-1 text-[11px] font-medium text-[#64748B] bg-[#F8FAFC] border border-[#E2E8F0] px-2 py-0.5 rounded-full select-none"
              title="Los datos y perfiles presentados en esta sección son ejemplos ficticios para fines de demostración"
            >
              <Info className="w-3 h-3 text-[#64748B]" aria-hidden="true" />
              Contenido ficticio
            </span>
          )}
        </div>
        {subtitle && (
          <p className="mt-2 text-sm text-[#64748B] max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {rightAction && (
        <div className="shrink-0">
          {rightAction}
        </div>
      )}
    </div>
  );
};
