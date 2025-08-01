"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAccessibility } from './AccessibilityProvider';

export default function AccessibilityControls() {
  const { fontSize, setFontSize, isHighContrast, toggleHighContrast, announceToScreenReader } = useAccessibility();
  const [isOpen, setIsOpen] = useState(false);

  const handleFontSizeChange = (size: 'small' | 'medium' | 'large') => {
    setFontSize(size);
    announceToScreenReader(`Tamaño de fuente cambiado a ${size}`);
  };

  const handleHighContrastToggle = () => {
    toggleHighContrast();
    announceToScreenReader(`Alto contraste ${isHighContrast ? 'desactivado' : 'activado'}`);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Botón principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Controles de accesibilidad"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </button>

      {/* Panel de controles */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 w-64"
          id="accessibility-panel"
          role="dialog"
          aria-label="Panel de accesibilidad"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Accesibilidad
          </h3>

          {/* Tamaño de fuente */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tamaño de fuente
            </label>
            <div className="flex space-x-2">
              {(['small', 'medium', 'large'] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => handleFontSizeChange(size)}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    fontSize === size
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                  aria-pressed={fontSize === size}
                >
                  {size === 'small' ? 'A' : size === 'medium' ? 'AA' : 'AAA'}
                </button>
              ))}
            </div>
          </div>

          {/* Alto contraste */}
          <div className="mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isHighContrast}
                onChange={handleHighContrastToggle}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Alto contraste
              </span>
            </label>
          </div>

          {/* Skip to content */}
          <div className="mb-4">
            <button
              onClick={() => {
                const mainContent = document.querySelector('main');
                if (mainContent) {
                  mainContent.focus();
                  announceToScreenReader('Saltando al contenido principal');
                }
              }}
              className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm"
            >
              Saltar al contenido
            </button>
          </div>

          {/* Información de accesibilidad */}
          <div className="text-xs text-gray-500 dark:text-gray-400">
            <p>Usa Tab para navegar</p>
            <p>Usa Enter para activar</p>
            <p>Usa Escape para cerrar</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// Componente para skip links
export function SkipLinks() {
  return (
    <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50">
      <a
        href="#main-content"
        className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Saltar al contenido principal
      </a>
      <a
        href="#navigation"
        className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
      >
        Saltar a la navegación
      </a>
    </div>
  );
}

// Componente para anuncios a screen readers
export function ScreenReaderAnnouncement({ message }: { message: string }) {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  );
} 