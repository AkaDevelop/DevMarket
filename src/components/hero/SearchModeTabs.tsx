import React from 'react';
import { Layers, Users } from 'lucide-react';
import { SearchMode } from '../../types';

interface SearchModeTabsProps {
  activeMode: SearchMode;
  onModeChange: (mode: SearchMode) => void;
  className?: string;
}

export const SearchModeTabs: React.FC<SearchModeTabsProps> = ({
  activeMode,
  onModeChange,
  className = '',
}) => {
  return (
    <div
      role="tablist"
      aria-label="Modo de búsqueda"
      className={`inline-flex items-center p-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] ${className}`}
    >
      <button
        role="tab"
        id="tab-services"
        aria-selected={activeMode === 'services'}
        aria-controls="panel-search"
        type="button"
        onClick={() => onModeChange('services')}
        className={`relative flex items-center gap-2 px-5 py-2.5 rounded-[8px] text-sm font-semibold transition-all duration-150 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-1 ${
          activeMode === 'services'
            ? 'bg-white text-[#2563EB] shadow-[0_1px_3px_rgba(15,23,42,0.1)] border border-[#E2E8F0]'
            : 'text-[#64748B] hover:text-[#0F172A]'
        }`}
      >
        <Layers className={`w-4 h-4 ${activeMode === 'services' ? 'text-[#2563EB]' : 'text-[#64748B]'}`} aria-hidden="true" />
        <span>Servicios</span>
        {activeMode === 'services' && (
          <span
            className="absolute -bottom-1 left-4 right-4 h-0.5 bg-[#2563EB] rounded-full"
            aria-hidden="true"
          />
        )}
      </button>

      <button
        role="tab"
        id="tab-developers"
        aria-selected={activeMode === 'developers'}
        aria-controls="panel-search"
        type="button"
        onClick={() => onModeChange('developers')}
        className={`relative flex items-center gap-2 px-5 py-2.5 rounded-[8px] text-sm font-semibold transition-all duration-150 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-1 ${
          activeMode === 'developers'
            ? 'bg-white text-[#2563EB] shadow-[0_1px_3px_rgba(15,23,42,0.1)] border border-[#E2E8F0]'
            : 'text-[#64748B] hover:text-[#0F172A]'
        }`}
      >
        <Users className={`w-4 h-4 ${activeMode === 'developers' ? 'text-[#2563EB]' : 'text-[#64748B]'}`} aria-hidden="true" />
        <span>Desarrolladores</span>
        {activeMode === 'developers' && (
          <span
            className="absolute -bottom-1 left-4 right-4 h-0.5 bg-[#2563EB] rounded-full"
            aria-hidden="true"
          />
        )}
      </button>
    </div>
  );
};
