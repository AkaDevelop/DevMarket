import React from 'react';

interface ServicePriceProps {
  priceUsd: number;
  className?: string;
}

export const ServicePrice: React.FC<ServicePriceProps> = ({ priceUsd, className = '' }) => {
  return (
    <div className={`flex flex-col items-end ${className}`}>
      <span className="text-[11px] font-medium uppercase tracking-wider text-[#64748B]">
        Desde
      </span>
      <span className="font-manrope font-bold text-lg text-[#0F172A] tabular-nums leading-tight">
        ${priceUsd}{' '}
        <span className="text-xs font-semibold text-[#64748B]">USD</span>
      </span>
    </div>
  );
};
