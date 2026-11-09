import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { SearchMode } from '../../types';
import { Button } from '../common/Button';

interface SearchBarProps {
  mode: SearchMode;
  query: string;
  onQueryChange: (query: string) => void;
  onSearch: (query: string, mode: SearchMode) => void;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  mode,
  query,
  onQueryChange,
  onSearch,
  className = '',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, mode);
  };

  const handleClear = () => {
    onQueryChange('');
    onSearch('', mode);
  };

  const placeholderText =
    mode === 'services'
      ? 'Buscar por servicio o tecnología (ej. API REST, frontend React, script Python...)'
      : 'Buscar por especialidad, tecnología o nombre (ej. Backend Architect, Docker, FastAPI...)';

  return (
    <form
      role="search"
      id="panel-search"
      aria-labelledby={mode === 'services' ? 'tab-services' : 'tab-developers'}
      onSubmit={handleSubmit}
      className={`relative w-full max-w-3xl ${className}`}
    >
      <div
        className={`flex items-center gap-2 p-1.5 bg-white border transition-all duration-150 rounded-[12px] shadow-[0_2px_8px_rgba(15,23,42,0.06)] ${
          isFocused
            ? 'border-[#2563EB] ring-2 ring-[#2563EB]/20 shadow-[0_4px_16px_rgba(37,99,235,0.12)]'
            : 'border-[#7F8EA3] hover:border-[#0F172A]'
        }`}
      >
        <div className="pl-3 text-[#64748B] flex items-center justify-center shrink-0">
          <Search className="w-5 h-5" aria-hidden="true" />
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholderText}
          className="w-full h-11 bg-transparent border-none text-sm text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:ring-0 px-2"
          aria-label={placeholderText}
        />

        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="p-1.5 text-[#64748B] hover:text-[#0F172A] transition-colors rounded-full hover:bg-[#F1F5F9] cursor-pointer"
            aria-label="Limpiar búsqueda"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <Button
          type="submit"
          variant="primary"
          className="h-11 px-6 font-semibold text-sm shrink-0"
        >
          <Search className="w-4 h-4 mr-2" aria-hidden="true" />
          Buscar
        </Button>
      </div>
    </form>
  );
};
