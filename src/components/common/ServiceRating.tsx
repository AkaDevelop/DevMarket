import React from 'react';
import { Star } from 'lucide-react';

interface ServiceRatingProps {
  rating: number;
  reviewCount: number;
  className?: string;
}

export const ServiceRating: React.FC<ServiceRatingProps> = ({ rating, reviewCount, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-1.5 text-xs text-[#64748B] ${className}`}>
      <Star className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" aria-hidden="true" />
      <span className="font-semibold text-[#0F172A] tabular-nums">{rating.toFixed(1)}</span>
      <span className="text-[#64748B]">({reviewCount} {reviewCount === 1 ? 'reseña' : 'reseñas'})</span>
    </div>
  );
};
