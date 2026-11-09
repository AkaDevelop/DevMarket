import React from 'react';

interface FooterLink {
  label: string;
  onClick?: () => void;
  href?: string;
}

interface FooterLinkGroupProps {
  title: string;
  links: FooterLink[];
  className?: string;
}

export const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({
  title,
  links,
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <h3 className="font-manrope font-bold text-xs uppercase tracking-wider text-[#0F172A]">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5 text-xs text-[#64748B]">
        {links.map((link) => (
          <li key={link.label}>
            {link.onClick ? (
              <button
                type="button"
                onClick={link.onClick}
                className="hover:text-[#2563EB] transition-colors cursor-pointer text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2563EB] rounded"
              >
                {link.label}
              </button>
            ) : (
              <a
                href={link.href || '#'}
                onClick={(e) => {
                  if (!link.href) e.preventDefault();
                }}
                className="hover:text-[#2563EB] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2563EB] rounded"
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
