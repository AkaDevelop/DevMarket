import React, { useState } from 'react';
import { X, MapPin, CheckCircle2, Code2, FolderGit2, Info, Mail } from 'lucide-react';
import { Developer, Service } from '../../types';
import { Button } from '../common/Button';
import { DeveloperAvatar } from '../common/DeveloperAvatar';
import { AvailabilityBadge } from '../common/AvailabilityBadge';
import { ServiceRating } from '../common/ServiceRating';
import { TechnologyTag } from '../common/TechnologyTag';

interface DeveloperProfileModalProps {
  developer: Developer | null;
  services: Service[];
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (service: Service) => void;
}

export const DeveloperProfileModal: React.FC<DeveloperProfileModalProps> = ({
  developer,
  services,
  isOpen,
  onClose,
  onSelectService,
}) => {
  const [contactSent, setContactSent] = useState(false);

  React.useEffect(() => {
    setContactSent(false);
  }, [developer, isOpen]);

  if (!isOpen || !developer) return null;

  const developerServices = services.filter((s) => s.developerId === developer.id);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="developer-modal-title"
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

        {/* Fictional notice */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#64748B] bg-[#F8FAFC] border border-[#E2E8F0] px-2 py-0.5 rounded-full select-none">
            <Info className="w-3 h-3" />
            Perfil ficticio de demostración
          </span>
        </div>

        {/* Header Profile Info */}
        <div className="flex items-start gap-4 pb-6 border-b border-[#F1F5F9]">
          <DeveloperAvatar initials={developer.initials} name={developer.name} size="lg" />
          <div className="flex-1">
            <h2
              id="developer-modal-title"
              className="font-manrope font-extrabold text-2xl text-[#0F172A] leading-tight"
            >
              {developer.name}
            </h2>
            <p className="text-sm font-medium text-[#64748B] mt-1">
              {developer.specialty}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-3">
              <div className="flex items-center gap-1 text-xs text-[#64748B]">
                <MapPin className="w-3.5 h-3.5 text-[#64748B]" />
                <span>{developer.location}</span>
              </div>
              <span className="text-[#E2E8F0]" aria-hidden="true">·</span>
              <AvailabilityBadge status={developer.availability} />
              <span className="text-[#E2E8F0]" aria-hidden="true">·</span>
              <ServiceRating rating={developer.rating} reviewCount={developer.reviewCount} />
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="py-4">
          <h3 className="font-manrope font-bold text-sm text-[#0F172A] mb-2">
            Acerca de este desarrollador
          </h3>
          <p className="text-sm text-[#64748B] leading-relaxed">
            {developer.bio}
          </p>
        </div>

        {/* Completed Projects metric */}
        <div className="py-2 flex items-center gap-2 text-xs text-[#64748B]">
          <FolderGit2 className="w-4 h-4 text-[#2563EB]" />
          <span>{developer.completedProjectsCount} proyectos completados en la plataforma</span>
        </div>

        {/* Technologies */}
        <div className="py-4">
          <h3 className="font-manrope font-bold text-sm text-[#0F172A] mb-2.5">
            Stack tecnológico principal
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {developer.technologies.map((tech) => (
              <TechnologyTag key={tech} technology={tech} asButton={false} />
            ))}
          </div>
        </div>

        {/* Services published by this developer (Separated as distinct service cards) */}
        <div className="py-4">
          <h3 className="font-manrope font-bold text-sm text-[#0F172A] mb-3">
            Servicios publicados por {developer.name}
          </h3>
          {developerServices.length > 0 ? (
            <div className="space-y-3">
              {developerServices.map((svc) => (
                <div
                  key={svc.id}
                  onClick={() => {
                    onClose();
                    onSelectService(svc);
                  }}
                  className="p-4 rounded-[10px] border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-white hover:border-[#BFDBFE] transition-all cursor-pointer flex items-center justify-between gap-4"
                >
                  <div>
                    <h4 className="text-xs font-bold text-[#0F172A] hover:text-[#2563EB]">
                      {svc.title}
                    </h4>
                    <p className="text-[11px] text-[#64748B] mt-1">
                      {svc.category} · {svc.deliveryDays} días de entrega
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[10px] text-[#64748B] uppercase">Desde</span>
                    <div className="font-manrope font-bold text-sm text-[#0F172A]">
                      ${svc.startingPriceUsd} USD
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-[#64748B] italic">
              Actualmente este desarrollador solo recibe propuestas personalizadas.
            </p>
          )}
        </div>

        {/* Footer actions */}
        <div className="pt-6 mt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-4">
          {contactSent ? (
            <div className="w-full flex items-center justify-between bg-[#DCFCE7] text-[#15803D] px-4 py-3 rounded-[8px] border border-[#BBF7D0]">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Mensaje de contacto simulado con éxito</span>
              </div>
              <Button variant="secondary" size="compact" onClick={onClose}>
                Cerrar
              </Button>
            </div>
          ) : (
            <>
              <Button variant="outline" onClick={onClose} className="h-11 px-5 text-sm">
                Volver
              </Button>

              <Button
                variant="primary"
                onClick={() => setContactSent(true)}
                className="h-11 px-6 text-sm font-semibold"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contactar a {developer.name.split(' ')[0]}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
