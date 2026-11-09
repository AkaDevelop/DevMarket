import React from 'react';
import { FooterLinkGroup } from './FooterLinkGroup';

interface FooterProps {
  onNavigateSection: (section: 'services' | 'developers') => void;
  onOpenCategory: (categoryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenCategory }) => {
  return (
    <footer className="w-full bg-[#F8FAFC] border-t border-[#E2E8F0] pt-16 pb-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-[#E2E8F0]">
          {/* Brand Column */}
          <div className="md:col-span-2 pr-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-manrope font-extrabold text-xl tracking-tight text-[#0F172A]">
                DevMarket
              </span>
              <span className="text-[10px] font-medium text-[#64748B] bg-white border border-[#E2E8F0] px-1.5 py-0.5 rounded">
                Beta pública
              </span>
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed max-w-sm">
              Plataforma de servicios freelance exclusiva para desarrolladores de software. Conectamos clientes con talento técnico especializado bajo términos claros y transparentes.
            </p>
            <div className="mt-4 text-[11px] text-[#64748B]">
              <span className="font-medium text-[#0F172A]">Enfoque:</span> Búsqueda transparente, sin pujas artificiales ni posicionamiento pay-to-win.
            </div>
          </div>

          {/* Group: Servicios */}
          <FooterLinkGroup
            title="Servicios"
            links={[
              { label: 'Desarrollo web', onClick: () => onOpenCategory('web-dev') },
              { label: 'API REST', onClick: () => onOpenCategory('rest-api') },
              { label: 'Desarrollo móvil', onClick: () => onOpenCategory('mobile-dev') },
              { label: 'Automatización con Python', onClick: () => onOpenCategory('python-auto') },
              { label: 'Bases de datos', onClick: () => onOpenCategory('databases') },
              { label: 'DevOps', onClick: () => onOpenCategory('devops') },
              { label: 'IA y Machine Learning', onClick: () => onOpenCategory('ai-ml') },
            ]}
          />

          {/* Group: Desarrolladores */}
          <FooterLinkGroup
            title="Desarrolladores"
            links={[
              { label: 'Explorar desarrolladores', onClick: () => onNavigateSection('developers') },
              { label: 'Especialidades técnicas', onClick: () => onNavigateSection('developers') },
              { label: 'Tecnologías populares', onClick: () => onNavigateSection('services') },
              { label: 'Publicar servicios' },
              { label: 'Guía del desarrollador' },
            ]}
          />

          {/* Group: Plataforma y Legal */}
          <FooterLinkGroup
            title="Plataforma"
            links={[
              { label: 'Cómo funciona' },
              { label: 'Criterios de calidad' },
              { label: 'Términos de servicio' },
              { label: 'Privacidad de datos' },
              { label: 'Contacto de soporte' },
            ]}
          />
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© {new Date().getFullYear()} DevMarket. Todos los derechos reservados.</p>
          <p className="text-center sm:text-right text-[11px] text-[#64748B] bg-white px-3 py-1 rounded-full border border-[#E2E8F0]">
            Aviso de prototipo: Todos los nombres, fotos, calificaciones y precios mostrados son contenido ficticio de demostración.
          </p>
        </div>
      </div>
    </footer>
  );
};
