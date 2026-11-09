import React, { useState } from 'react';
import { X, CheckCircle2, Clock, Code2, User, Info } from 'lucide-react';
import { Service } from '../../types';
import { Button } from '../common/Button';
import { ServiceRating } from '../common/ServiceRating';
import { ServicePrice } from '../common/ServicePrice';
import { DeliveryBadge } from '../common/DeliveryBadge';
import { TechnologyTag } from '../common/TechnologyTag';

interface ServiceDetailModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
  onViewDeveloper: (developerId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  onViewDeveloper,
}) => {
  const [requested, setRequested] = useState(false);

  React.useEffect(() => {
    setRequested(false);
  }, [service, isOpen]);

  if (!isOpen || !service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white border border-[#E2E8F0] rounded-[16px] p-8 shadow-[0_12px_32px_rgba(15,23,42,0.12)] max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#64748B] hover:text-[#0F172A] rounded-full hover:bg-[#F1F5F9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Fictional content pill */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#64748B] bg-[#F8FAFC] border border-[#E2E8F0] px-2 py-0.5 rounded-full select-none">
            <Info className="w-3 h-3" />
            Contenido ficticio de demostración
          </span>
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">
            {service.category}
          </span>
        </div>

        <h2
          id="service-modal-title"
          className="font-manrope font-extrabold text-2xl text-[#0F172A] leading-snug mb-3 pr-8"
        >
          {service.title}
        </h2>

        {/* Developer byline */}
        <div className="flex items-center gap-2 text-sm text-[#64748B] pb-4 border-b border-[#F1F5F9]">
          <User className="w-4 h-4 text-[#64748B]" />
          <span>Servicio ofrecido por</span>
          <button
            type="button"
            onClick={() => {
              onClose();
              onViewDeveloper(service.developerId);
            }}
            className="font-semibold text-[#2563EB] hover:underline"
          >
            {service.developerName}
          </button>
          <span className="text-xs text-[#64748B]">· {service.developerSpecialty}</span>
        </div>

        {/* Rating & Delivery Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-[#F1F5F9]">
          <ServiceRating rating={service.rating} reviewCount={service.reviewCount} />
          <div className="flex items-center gap-3">
            <DeliveryBadge days={service.deliveryDays} />
            <ServicePrice priceUsd={service.startingPriceUsd} />
          </div>
        </div>

        {/* Description */}
        <div className="py-4">
          <h3 className="font-manrope font-bold text-sm text-[#0F172A] mb-2">
            Descripción del servicio
          </h3>
          <p className="text-sm text-[#64748B] leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Deliverables */}
        <div className="py-4">
          <h3 className="font-manrope font-bold text-sm text-[#0F172A] mb-3">
            Entregables incluidos en el alcance
          </h3>
          <ul className="space-y-2.5">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-[#0F172A]">
                <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="py-4">
          <h3 className="font-manrope font-bold text-sm text-[#0F172A] mb-2.5">
            Tecnologías y herramientas utilizadas
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {service.technologies.map((tech) => (
              <TechnologyTag key={tech} technology={tech} asButton={false} />
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 mt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-4">
          {requested ? (
            <div className="w-full flex items-center justify-between bg-[#DCFCE7] text-[#15803D] px-4 py-3 rounded-[8px] border border-[#BBF7D0]">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Solicitud de cotización simulada con éxito</span>
              </div>
              <Button variant="secondary" size="compact" onClick={onClose}>
                Cerrar
              </Button>
            </div>
          ) : (
            <>
              <Button
                variant="outline"
                onClick={() => {
                  onClose();
                  onViewDeveloper(service.developerId);
                }}
                className="h-11 px-5 text-sm"
              >
                Ver perfil del desarrollador
              </Button>

              <Button
                variant="primary"
                onClick={() => setRequested(true)}
                className="h-11 px-6 text-sm font-semibold"
              >
                Solicitar este servicio
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
