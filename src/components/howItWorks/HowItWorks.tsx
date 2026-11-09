import React from 'react';
import { Search, GitCompare, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      stepNumber: '01',
      title: 'Buscar',
      description:
        'Explora ofertas de servicios predefinidos de software o busca directamente desarrolladores por especialidad y stack tecnológico.',
      icon: Search,
    },
    {
      stepNumber: '02',
      title: 'Comparar',
      description:
        'Analiza especificaciones claras, tecnologías incluidas, plazos de entrega estimados y precios transparentes sin costos ocultos.',
      icon: GitCompare,
    },
    {
      stepNumber: '03',
      title: 'Contratar',
      description:
        'Acuerda el alcance del proyecto directamente con el desarrollador e inicia la ejecución con requerimientos precisos.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-16 bg-[#F8FAFC] border-y border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          title="Cómo funciona DevMarket"
          subtitle="Un proceso directo y profesional diseñado para que contrates desarrollo de software con claridad técnica desde el primer momento."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.stepNumber}
                className="relative p-8 bg-white border border-[#E2E8F0] rounded-[12px] shadow-[0_1px_2px_rgba(15,23,42,0.06)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-manrope font-extrabold text-3xl text-[#2563EB]/25 select-none">
                      {step.stepNumber}
                    </span>
                    <div className="w-12 h-12 rounded-[8px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center">
                      <Icon className="w-6 h-6" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="font-manrope font-bold text-lg text-[#0F172A] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
