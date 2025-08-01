"use client";

import { useEffect } from 'react';

interface GoogleSearchConsoleProps {
  verificationCode?: string;
}

export default function GoogleSearchConsole({ verificationCode }: GoogleSearchConsoleProps) {
  useEffect(() => {
    // Verificar si el código de verificación está disponible
    if (verificationCode && typeof window !== 'undefined') {
      // Crear meta tag para verificación
      const meta = document.createElement('meta');
      meta.name = 'google-site-verification';
      meta.content = verificationCode;
      document.head.appendChild(meta);
    }
  }, [verificationCode]);

  return null; // Este componente no renderiza nada visible
} 