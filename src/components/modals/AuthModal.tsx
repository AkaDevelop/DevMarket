import React, { useState } from 'react';
import { X, CheckCircle2, User, Code } from 'lucide-react';
import { Button } from '../common/Button';

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: 'signin' | 'register';
  initialRole?: 'client' | 'developer';
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode = 'signin',
  initialRole = 'client',
  onClose,
}) => {
  const [mode, setMode] = useState<'signin' | 'register'>(initialMode);
  const [role, setRole] = useState<'client' | 'developer'>(initialRole);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    setMode(initialMode);
    setRole(initialRole);
    setSubmitted(false);
  }, [initialMode, initialRole, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-white border border-[#E2E8F0] rounded-[16px] p-8 shadow-[0_12px_32px_rgba(15,23,42,0.12)] animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#64748B] hover:text-[#0F172A] rounded-full hover:bg-[#F1F5F9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#DCFCE7] text-[#15803D] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-manrope font-bold text-xl text-[#0F172A] mb-2">
              {mode === 'signin' ? 'Sesión iniciada' : 'Cuenta registrada'}
            </h3>
            <p className="text-sm text-[#64748B] mb-6">
              Esta es una demostración visual para DevMarket. En una versión de producción recibirás un correo de verificación.
            </p>
            <Button
              variant="primary"
              onClick={onClose}
              className="w-full h-11 font-semibold"
            >
              Entendido
            </Button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">
                DevMarket Acceso
              </span>
              <h2
                id="auth-modal-title"
                className="font-manrope font-extrabold text-2xl text-[#0F172A] mt-1"
              >
                {mode === 'signin' ? 'Iniciar sesión' : 'Crear una cuenta'}
              </h2>
              <p className="text-xs text-[#64748B] mt-1">
                {mode === 'signin'
                  ? 'Accede para gestionar tus solicitudes o servicios'
                  : 'Únete a la comunidad de desarrollo de software'}
              </p>
            </div>

            {/* Mode switch: Iniciar sesión / Registrarse */}
            <div className="flex p-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] mb-6">
              <button
                type="button"
                onClick={() => setMode('signin')}
                className={`flex-1 py-2 text-xs font-semibold rounded-[6px] transition-all ${
                  mode === 'signin'
                    ? 'bg-white text-[#2563EB] shadow-xs'
                    : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
              >
                Iniciar sesión
              </button>
              <button
                type="button"
                onClick={() => setMode('register')}
                className={`flex-1 py-2 text-xs font-semibold rounded-[6px] transition-all ${
                  mode === 'register'
                    ? 'bg-white text-[#2563EB] shadow-xs'
                    : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
              >
                Registrarse
              </button>
            </div>

            {/* If Register: select role */}
            {mode === 'register' && (
              <div className="mb-5">
                <label className="block text-xs font-semibold text-[#0F172A] mb-2">
                  ¿Cómo planeas usar DevMarket?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole('client')}
                    className={`flex items-center gap-2 p-3 rounded-[8px] border text-left transition-all ${
                      role === 'client'
                        ? 'border-[#2563EB] bg-[#EFF6FF] text-[#2563EB]'
                        : 'border-[#E2E8F0] bg-white text-[#64748B] hover:border-[#7F8EA3]'
                    }`}
                  >
                    <User className="w-4 h-4 shrink-0" />
                    <div>
                      <div className="text-xs font-bold leading-tight">Soy cliente</div>
                      <div className="text-[10px] text-[#64748B] leading-tight">Busco software</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRole('developer')}
                    className={`flex items-center gap-2 p-3 rounded-[8px] border text-left transition-all ${
                      role === 'developer'
                        ? 'border-[#2563EB] bg-[#EFF6FF] text-[#2563EB]'
                        : 'border-[#E2E8F0] bg-white text-[#64748B] hover:border-[#7F8EA3]'
                    }`}
                  >
                    <Code className="w-4 h-4 shrink-0" />
                    <div>
                      <div className="text-xs font-bold leading-tight">Desarrollador</div>
                      <div className="text-[10px] text-[#64748B] leading-tight">Ofrezco servicios</div>
                    </div>
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'register' && (
                <div>
                  <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ej. Juan Pérez"
                    className="w-full h-11 px-3.5 text-sm rounded-[8px] border border-[#7F8EA3] bg-white text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@correo.com"
                  className="w-full h-11 px-3.5 text-sm rounded-[8px] border border-[#7F8EA3] bg-white text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                  Contraseña
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mínimo 8 caracteres"
                  className="w-full h-11 px-3.5 text-sm rounded-[8px] border border-[#7F8EA3] bg-white text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full h-11 font-semibold text-sm mt-2"
              >
                {mode === 'signin' ? 'Ingresar a DevMarket' : 'Crear cuenta'}
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
