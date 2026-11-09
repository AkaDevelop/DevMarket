/**
 * DevMarket - Home / Landing Page
 * Módulo 01: Público
 * Cumplimiento estricto del Sistema de Diseño DevMarket (DESIGN.md)
 */

import React, { useState, useMemo, useRef } from 'react';
import { SearchMode, Service, Developer, ServiceCategory } from './types';
import {
  POPULAR_TECHNOLOGIES,
  SERVICE_CATEGORIES,
  FEATURED_SERVICES,
  FEATURED_DEVELOPERS,
} from './data/mockData';

// Navigation & Structure
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/navigation/Footer';

// Hero & Search
import { SearchModeTabs } from './components/hero/SearchModeTabs';
import { SearchBar } from './components/hero/SearchBar';
import { TechnologyTag } from './components/common/TechnologyTag';

// Sections
import { SectionHeading } from './components/common/SectionHeading';
import { ServiceCategoryCard } from './components/categories/ServiceCategoryCard';
import { ServiceCard } from './components/services/ServiceCard';
import { DeveloperCard } from './components/developers/DeveloperCard';
import { HowItWorks } from './components/howItWorks/HowItWorks';
import { DeveloperCta } from './components/cta/DeveloperCta';

// Modals
import { AuthModal } from './components/modals/AuthModal';
import { ServiceDetailModal } from './components/modals/ServiceDetailModal';
import { DeveloperProfileModal } from './components/modals/DeveloperProfileModal';
import { Button } from './components/common/Button';
import { X, Search } from 'lucide-react';

export default function App() {
  // Navigation & Search State
  const [activeSection, setActiveSection] = useState<'home' | 'services' | 'developers'>('home');
  const [searchMode, setSearchMode] = useState<SearchMode>('services');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);

  // Modal States
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authInitialMode, setAuthInitialMode] = useState<'signin' | 'register'>('signin');
  const [authInitialRole, setAuthInitialRole] = useState<'client' | 'developer'>('client');

  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);

  const [selectedDeveloper, setSelectedDeveloper] = useState<Developer | null>(null);
  const [developerModalOpen, setDeveloperModalOpen] = useState(false);

  // Section references for smooth scrolling
  const servicesRef = useRef<HTMLElement | null>(null);
  const developersRef = useRef<HTMLElement | null>(null);
  const categoriesRef = useRef<HTMLElement | null>(null);

  // Handle tech tag toggle
  const handleTechClick = (tech: string) => {
    if (selectedTech === tech) {
      setSelectedTech(null);
    } else {
      setSelectedTech(tech);
      // If user clicks a tech, scroll smoothly to services or developers depending on mode
      if (searchMode === 'services' && servicesRef.current) {
        servicesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (searchMode === 'developers' && developersRef.current) {
        developersRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Handle Search Submission
  const handleSearch = (query: string, mode: SearchMode) => {
    setSearchQuery(query);
    setSearchMode(mode);
    if (mode === 'services' && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (mode === 'developers' && developersRef.current) {
      developersRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Clear filters
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedTech(null);
    setSelectedCategoryFilter(null);
  };

  // Filtered Services
  const filteredServices = useMemo(() => {
    return FEATURED_SERVICES.filter((svc) => {
      const matchesQuery =
        !searchQuery ||
        svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTech =
        !selectedTech ||
        svc.technologies.some((t) => t.toLowerCase() === selectedTech.toLowerCase());

      const matchesCategory =
        !selectedCategoryFilter ||
        svc.category.toLowerCase() === selectedCategoryFilter.toLowerCase();

      return matchesQuery && matchesTech && matchesCategory;
    });
  }, [searchQuery, selectedTech, selectedCategoryFilter]);

  // Filtered Developers
  const filteredDevelopers = useMemo(() => {
    return FEATURED_DEVELOPERS.filter((dev) => {
      const matchesQuery =
        !searchQuery ||
        dev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dev.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dev.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dev.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTech =
        !selectedTech ||
        dev.technologies.some((t) => t.toLowerCase() === selectedTech.toLowerCase());

      return matchesQuery && matchesTech;
    });
  }, [searchQuery, selectedTech]);

  // Handle Category Click
  const handleCategoryClick = (category: ServiceCategory) => {
    setSelectedCategoryFilter(category.name);
    setSearchMode('services');
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle Navigation Links in Navbar
  const handleNavClick = (section: 'services' | 'developers') => {
    setActiveSection(section);
    if (section === 'services' && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === 'developers' && developersRef.current) {
      developersRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Open developer from service
  const handleOpenDeveloperById = (developerId: string) => {
    const dev = FEATURED_DEVELOPERS.find((d) => d.id === developerId);
    if (dev) {
      setSelectedDeveloper(dev);
      setDeveloperModalOpen(true);
    }
  };

  const hasActiveFilters = Boolean(searchQuery || selectedTech || selectedCategoryFilter);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-inter flex flex-col antialiased selection:bg-[#EFF6FF] selection:text-[#2563EB]">
      {/* a) Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavClick}
        onSignIn={() => {
          setAuthInitialMode('signin');
          setAuthModalOpen(true);
        }}
        onRegister={() => {
          setAuthInitialMode('register');
          setAuthInitialRole('client');
          setAuthModalOpen(true);
        }}
        onGoHome={() => {
          setActiveSection('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <main className="flex-1">
        {/* b) Hero Section with bg.png background */}
        <section
          className="relative w-full overflow-hidden bg-white"
          style={{
            height: '600px',
            minHeight: '560px',
            maxHeight: '640px',
          }}
        >
          {/* Background image: bg.png aligned to the right, cover, vertically centered */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              backgroundImage: "url('/bg.png')",
              backgroundPosition: 'right center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
            aria-hidden="true"
          />

          {/* Bottom fade to blend seamlessly into the pure white background of the next section */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Hero Content Container (max 1200px, content on the left half, vertically centered) */}
          <div className="relative z-10 max-w-[1200px] h-full mx-auto px-6 flex items-center">
            <div className="w-full max-w-[540px] flex flex-col items-start text-left">
              {/* Hero Title */}
              <h1 className="font-manrope font-extrabold text-3xl lg:text-[40px] text-[#0F172A] tracking-tight leading-[1.18] text-balance">
                Servicios freelance de desarrollo de software con alcance y precios transparentes
              </h1>

              {/* Hero Subtitle */}
              <p className="mt-4 text-sm lg:text-[15px] text-[#64748B] leading-relaxed text-balance">
                Conecta directamente con ingenieros y desarrolladores especializados. Encuentra servicios definidos con tecnologías verificables, plazos claros y sin intermediarios ambiguos.
              </p>

              {/* Dual Search Mode Tabs */}
              <div className="mt-6 mb-3">
                <SearchModeTabs
                  activeMode={searchMode}
                  onModeChange={(mode) => setSearchMode(mode)}
                />
              </div>

              {/* Search Bar */}
              <div className="w-full">
                <SearchBar
                  mode={searchMode}
                  query={searchQuery}
                  onQueryChange={setSearchQuery}
                  onSearch={handleSearch}
                />
              </div>

              {/* Active filter notification if any */}
              {hasActiveFilters && (
                <div className="mt-3 flex items-center gap-2 text-xs text-[#64748B] bg-white/95 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs">
                  <span>Filtro activo:</span>
                  {searchQuery && <span className="font-semibold text-[#0F172A]">«{searchQuery}»</span>}
                  {selectedTech && <span className="font-semibold text-[#2563EB]">[{selectedTech}]</span>}
                  {selectedCategoryFilter && (
                    <span className="font-semibold text-[#0F172A]">({selectedCategoryFilter})</span>
                  )}
                  <button
                    type="button"
                    onClick={handleClearFilters}
                    className="ml-2 inline-flex items-center gap-1 font-semibold text-[#B91C1C] hover:underline cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                    Limpiar
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* c) Tecnologías populares */}
        <section className="py-6 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center gap-4">
            <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider shrink-0">
              Tecnologías populares:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {POPULAR_TECHNOLOGIES.map((tech) => (
                <TechnologyTag
                  key={tech}
                  technology={tech}
                  isSelected={selectedTech === tech}
                  onClick={() => handleTechClick(tech)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* d) Categorías */}
        <section ref={categoriesRef} className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeading
              title="Categorías de desarrollo de software"
              subtitle="Explora soluciones técnicas especializadas organizadas por áreas de dominio en ingeniería de software."
              rightAction={
                selectedCategoryFilter ? (
                  <Button
                    variant="outline"
                    size="compact"
                    onClick={() => setSelectedCategoryFilter(null)}
                    className="h-9 px-3 text-xs"
                  >
                    Mostrar todas las categorías
                  </Button>
                ) : undefined
              }
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {SERVICE_CATEGORIES.map((cat) => (
                <ServiceCategoryCard
                  key={cat.id}
                  category={cat}
                  onClick={handleCategoryClick}
                  className={selectedCategoryFilter === cat.name ? 'ring-2 ring-[#2563EB] border-[#2563EB]' : ''}
                />
              ))}
            </div>
          </div>
        </section>

        {/* e) Servicios destacados */}
        <section ref={servicesRef} className="py-20 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeading
              title="Servicios destacados"
              subtitle="Ofertas técnicas con alcance definido, entregables concretos y tarifas transparentes sin sorpresas."
              showFictionalNotice={true}
              rightAction={
                <div className="flex items-center gap-2">
                  {hasActiveFilters && (
                    <Button
                      variant="text"
                      size="compact"
                      onClick={handleClearFilters}
                      className="text-xs text-[#64748B]"
                    >
                      Restablecer lista
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="compact"
                    onClick={() => {
                      setSearchMode('services');
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className="h-9 px-4 text-xs font-semibold"
                  >
                    Buscar más servicios
                  </Button>
                </div>
              }
            />

            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredServices.slice(0, 3).map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onSelectService={(svc) => {
                      setSelectedService(svc);
                      setServiceModalOpen(true);
                    }}
                    onSelectDeveloper={(devId) => handleOpenDeveloperById(devId)}
                  />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px]">
                <Search className="w-8 h-8 mx-auto text-[#64748B] mb-3" />
                <h3 className="font-manrope font-bold text-base text-[#0F172A]">
                  No se encontraron servicios con los filtros actuales
                </h3>
                <p className="text-xs text-[#64748B] mt-1 max-w-md mx-auto">
                  Prueba cambiando la palabra clave o seleccionando otra tecnología en la lista superior.
                </p>
                <Button
                  variant="secondary"
                  size="compact"
                  onClick={handleClearFilters}
                  className="mt-4 h-9 px-4 text-xs"
                >
                  Ver todos los servicios
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* f) Desarrolladores destacados */}
        <section ref={developersRef} className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeading
              title="Desarrolladores destacados"
              subtitle="Profesionales de software con experiencia técnica demostrable, disponibilidad comunicada con claridad y valoraciones transparentes."
              showFictionalNotice={true}
              rightAction={
                <div className="flex items-center gap-2">
                  {hasActiveFilters && (
                    <Button
                      variant="text"
                      size="compact"
                      onClick={handleClearFilters}
                      className="text-xs text-[#64748B]"
                    >
                      Restablecer lista
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="compact"
                    onClick={() => {
                      setSearchMode('developers');
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className="h-9 px-4 text-xs font-semibold"
                  >
                    Buscar desarrolladores
                  </Button>
                </div>
              }
            />

            {filteredDevelopers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredDevelopers.slice(0, 3).map((developer) => (
                  <DeveloperCard
                    key={developer.id}
                    developer={developer}
                    onSelectDeveloper={(dev) => {
                      setSelectedDeveloper(dev);
                      setDeveloperModalOpen(true);
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center bg-white border border-[#E2E8F0] rounded-[12px]">
                <Search className="w-8 h-8 mx-auto text-[#64748B] mb-3" />
                <h3 className="font-manrope font-bold text-base text-[#0F172A]">
                  No se encontraron desarrolladores con los filtros actuales
                </h3>
                <p className="text-xs text-[#64748B] mt-1 max-w-md mx-auto">
                  Intenta buscar con otra tecnología o restablecer los términos de búsqueda.
                </p>
                <Button
                  variant="secondary"
                  size="compact"
                  onClick={handleClearFilters}
                  className="mt-4 h-9 px-4 text-xs"
                >
                  Ver todos los desarrolladores
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* g) Cómo funciona */}
        <HowItWorks />

        {/* h) CTA para desarrolladores */}
        <DeveloperCta
          onRegisterAsDeveloper={() => {
            setAuthInitialMode('register');
            setAuthInitialRole('developer');
            setAuthModalOpen(true);
          }}
        />
      </main>

      {/* i) Footer */}
      <Footer
        onNavigateSection={(section) => handleNavClick(section)}
        onOpenCategory={(catId) => {
          const category = SERVICE_CATEGORIES.find((c) => c.id === catId);
          if (category) {
            handleCategoryClick(category);
          }
        }}
      />

      {/* Interactive Modals */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authInitialMode}
        initialRole={authInitialRole}
        onClose={() => setAuthModalOpen(false)}
      />

      <ServiceDetailModal
        service={selectedService}
        isOpen={serviceModalOpen}
        onClose={() => setServiceModalOpen(false)}
        onViewDeveloper={(devId) => handleOpenDeveloperById(devId)}
      />

      <DeveloperProfileModal
        developer={selectedDeveloper}
        services={FEATURED_SERVICES}
        isOpen={developerModalOpen}
        onClose={() => setDeveloperModalOpen(false)}
        onSelectService={(svc) => {
          setSelectedService(svc);
          setServiceModalOpen(true);
        }}
      />
    </div>
  );
}
