import React from 'react';
import { CheckCircle2, Clock, XCircle } from 'lucide-react';
import { AvailabilityStatus } from '../../types';

interface AvailabilityBadgeProps {
  status: AvailabilityStatus;
  className?: string;
}

export const AvailabilityBadge: React.FC<AvailabilityBadgeProps> = ({ status, className = '' }) => {
  if (status === 'available') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#DCFCE7] text-[#15803D] border border-[#BBF7D0] ${className}`}
      >
        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        <span>Disponible</span>
      </span>
    );
  }

  if (status === 'limited') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#FEF3C7] text-[#B45309] border border-[#FDE68A] ${className}`}
      >
        <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        <span>Disponibilidad limitada</span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#FEE2E2] text-[#B91C1C] border border-[#FECACA] ${className}`}
    >
      <XCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
      <span>No disponible</span>
    </span>
  );
};
