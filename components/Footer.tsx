"use client";

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contacto" className="relative z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Columna 1: Información de la app */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold mb-4 text-white">SportMeet</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Conecta con deportistas, encuentra partidos y crea tu comunidad deportiva.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Columna 2: Enlaces rápidos */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Enlaces</h3>
            <div className="space-y-2">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#que-es-sportmeet", label: "¿Qué es SportMeet?" },
                { href: "#como-funciona", label: "Cómo funciona" },
                { href: "#por-que-sportmeet", label: "¿Por qué SportMeet?" }
              ].map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <a 
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-colors text-sm py-1"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Columna 3: Contacto */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
            <motion.a 
              href="mailto:contacto@sportmeet.cl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 rounded-full hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium text-sm">contacto@sportmeet.cl</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Enlaces legales y copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Enlaces legales */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { href: "/legales/terminos", label: "Términos y Condiciones" },
              { href: "/legales/privacidad", label: "Privacidad" },
              { href: "/legales/cookies", label: "Cookies" },
              { href: "/legales/aviso", label: "Aviso legal" }
            ].map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center md:text-right"
          >
            <p className="text-gray-500 text-sm">
              © 2025 SportMeet. Todos los derechos reservados.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 