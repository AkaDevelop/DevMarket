import React from 'react';

interface DeveloperAvatarProps {
  initials: string;
  name: string;
  size?: 'md' | 'lg';
  className?: string;
}

export const DeveloperAvatar: React.FC<DeveloperAvatarProps> = ({
  initials,
  name,
  size = 'md',
  className = '',
}) => {
  const sizeClasses = size === 'lg' ? 'w-14 h-14 text-base' : 'w-12 h-12 text-sm';

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full bg-[#EFF6FF] text-[#2563EB] font-manrope font-bold border border-[#BFDBFE] shrink-0 select-none shadow-[0_1px_2px_rgba(15,23,42,0.06)] ${sizeClasses} ${className}`}
      aria-label={`Avatar de ${name}`}
      title={name}
    >
      <span>{initials}</span>
    </div>
  );
};
