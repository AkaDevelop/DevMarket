import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'default' | 'compact';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'default',
  className = '',
  children,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-inter font-semibold transition-colors duration-150 rounded-[8px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 disabled:cursor-not-allowed whitespace-nowrap shrink-0 cursor-pointer select-none';

  // Sizing: default is 44px (h-11) as required by design specification
  const sizeStyles =
    size === 'compact'
      ? 'h-9 px-3.5 text-xs'
      : 'h-11 px-5 text-sm';

  let variantStyles = '';

  switch (variant) {
    case 'primary':
      variantStyles =
        'bg-[#2563EB] text-white hover:bg-[#1D4ED8] active:bg-[#1E40AF] disabled:bg-[#E2E8F0] disabled:text-[#64748B] shadow-[0_1px_2px_rgba(15,23,42,0.06)]';
      break;
    case 'secondary':
      variantStyles =
        'bg-[#EFF6FF] text-[#2563EB] hover:bg-[#DBEAFE] active:bg-[#BFDBFE] disabled:bg-[#F8FAFC] disabled:text-[#64748B]';
      break;
    case 'outline':
      variantStyles =
        'border border-[#7F8EA3] bg-transparent text-[#0F172A] hover:bg-[#F8FAFC] hover:border-[#0F172A] active:bg-[#E2E8F0] disabled:border-[#E2E8F0] disabled:text-[#64748B]';
      break;
    case 'text':
      variantStyles =
        'bg-transparent text-[#2563EB] hover:underline hover:text-[#1D4ED8] disabled:text-[#64748B] p-2';
      break;
  }

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
