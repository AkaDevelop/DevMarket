import React from 'react';
import { Button } from '../common/Button';

interface AccountActionsProps {
  onSignIn: () => void;
  onRegister: () => void;
  className?: string;
}

export const AccountActions: React.FC<AccountActionsProps> = ({
  onSignIn,
  onRegister,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-3 shrink-0 ${className}`}>
      <Button
        variant="outline"
        size="compact"
        onClick={onSignIn}
        className="h-10 px-4 text-xs font-semibold"
      >
        Iniciar sesión
      </Button>

      <Button
        variant="primary"
        size="compact"
        onClick={onRegister}
        className="h-10 px-4 text-xs font-semibold"
      >
        Registrarse
      </Button>
    </div>
  );
};
