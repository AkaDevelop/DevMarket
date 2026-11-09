import React from 'react';
import { AccountActions } from './AccountActions';

interface NavbarProps {
  activeSection: 'home' | 'services' | 'developers';
  onNavigate: (section: 'services' | 'developers') => void;
  onSignIn: () => void;
  onRegister: () => void;
  onGoHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onSignIn,
  onRegister,
  onGoHome,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full h-[72px] bg-white border-b border-[#E2E8F0] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
      <div className="max-w-[1200px] h-full mx-auto px-6 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <button
          type="button"
          onClick={onGoHome}
          className="flex items-center gap-1.5 font-manrope font-extrabold text-xl tracking-tight text-[#0F172A] hover:text-[#2563EB] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded px-1 cursor-pointer"
          aria-label="DevMarket - Inicio"
        >
          <span>DevMarket</span>
          <span className="text-xs font-medium text-[#64748B] bg-[#F8FAFC] border border-[#E2E8F0] px-1.5 py-0.5 rounded text-[10px]">
            Beta
          </span>
        </button>

        {/* Zone 2: Primary Navigation Links */}
        <nav
          className="flex items-center gap-8 text-sm font-medium text-[#64748B]"
          aria-label="Navegación principal"
        >
          <button
            type="button"
            onClick={() => onNavigate('services')}
            className={`relative py-2 text-sm font-semibold transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded px-1 ${
              activeSection === 'services'
                ? 'text-[#2563EB]'
                : 'text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            Servicios
            {activeSection === 'services' && (
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB] rounded-full"
                aria-hidden="true"
              />
            )}
          </button>

          <button
            type="button"
            onClick={() => onNavigate('developers')}
            className={`relative py-2 text-sm font-semibold transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded px-1 ${
              activeSection === 'developers'
                ? 'text-[#2563EB]'
                : 'text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            Desarrolladores
            {activeSection === 'developers' && (
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB] rounded-full"
                aria-hidden="true"
              />
            )}
          </button>
        </nav>

        {/* Zone 3: Account Actions */}
        <AccountActions onSignIn={onSignIn} onRegister={onRegister} />
      </div>
    </header>
  );
};
