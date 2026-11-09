import React from 'react';
import { Code, Terminal, CheckCircle } from 'lucide-react';
import { Button } from '../common/Button';

interface DeveloperCtaProps {
  onRegisterAsDeveloper: () => void;
}

export const DeveloperCta: React.FC<DeveloperCtaProps> = ({ onRegisterAsDeveloper }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative overflow-hidden p-10 md:p-14 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EFF6FF] text-[#2563EB] rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
              <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
              Para desarrolladores de software
            </div>

            <h2 className="font-manrope font-extrabold text-2xl md:text-3xl lg:text-[34px] text-[#0F172A] leading-tight">
              Ofrece tus servicios en un espacio exclusivo para desarrolladores
            </h2>

            <p className="mt-4 text-base text-[#64748B] leading-relaxed">
              Crea tu perfil profesional, publica servicios con alcances y plazos definidos y construye reputación verificable. En DevMarket el posicionamiento es orgánico: sin muros de pago para destacar.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm text-[#0F172A]">
              <li className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#15803D] shrink-0" aria-hidden="true" />
                <span>Estructura tus ofertas de servicios con tecnologías y entregables exactos</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#15803D] shrink-0" aria-hidden="true" />
                <span>Trato directo con clientes que buscan soluciones de software reales</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#15803D] shrink-0" aria-hidden="true" />
                <span>Posicionamiento basado en la calidad y reseñas de tus proyectos</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                onClick={onRegisterAsDeveloper}
                className="h-11 px-7 text-sm font-semibold shadow-sm"
              >
                <Code className="w-4 h-4 mr-2" aria-hidden="true" />
                Crear perfil de desarrollador
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
