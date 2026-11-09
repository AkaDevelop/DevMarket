import React from 'react';
import { Clock } from 'lucide-react';

interface DeliveryBadgeProps {
  days: number;
  className?: string;
}

export const DeliveryBadge: React.FC<DeliveryBadgeProps> = ({ days, className = '' }) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0] ${className}`}
    >
      <Clock className="w-3.5 h-3.5 text-[#64748B] shrink-0" aria-hidden="true" />
      <span>{days} {days === 1 ? 'día de entrega' : 'días de entrega'}</span>
    </span>
  );
};
