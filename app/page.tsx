"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Componente de partículas giratorias
const ParticleSystem = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    delay: Math.random() * 4,
    duration: 15 + Math.random() * 10,
    distance: 200 + Math.random() * 300,
    opacity: 0.3 + Math.random() * 0.4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-red-500 to-yellow-500"
          style={{
            width: particle.size,
            height: particle.size,
            left: '50%',
            top: '50%',
            opacity: particle.opacity,
          }}
          animate={{
            rotate: 360,
            x: [
              Math.cos(0) * particle.distance,
              Math.cos(Math.PI / 2) * particle.distance,
              Math.cos(Math.PI) * particle.distance,
              Math.cos((3 * Math.PI) / 2) * particle.distance,
              Math.cos(2 * Math.PI) * particle.distance,
            ],
            y: [
              Math.sin(0) * particle.distance,
              Math.sin(Math.PI / 2) * particle.distance,
              Math.sin(Math.PI) * particle.distance,
              Math.sin((3 * Math.PI) / 2) * particle.distance,
              Math.sin(2 * Math.PI) * particle.distance,
            ],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

// Componente de logo flotante
const FloatingLogo = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="relative mb-12"
  >
    <motion.div
      animate={{ 
        rotate: [0, 5, -5, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{ 
        duration: 6, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="relative w-32 h-32 mx-auto drop-shadow-2xl"
    >
      <Image
        src="/images/sportmeetlogooficial2.png"
        alt="SportMeet Logo"
        fill
        className="object-contain filter drop-shadow-lg"
        priority
      />
    </motion.div>
  </motion.div>
);

// Componente principal de descarga
const DownloadCenter = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="relative z-10 text-center"
  >
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7 }}
      className="text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-2xl"
    >
      Sport
      <span className="text-[#FF1E1E]">
        Meet
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="text-2xl md:text-3xl text-gray-300 mb-16 font-light max-w-2xl mx-auto leading-relaxed"
    >
      Encuentra tu próximo partido.
      <br />
      <span className="text-lg text-gray-400">Conecta. Juega. Comparte.</span>
    </motion.p>

    {/* Botones de descarga centralizados */}
    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
      <a
        href="#"
        className="outline-none focus:outline-none"
      >
        <div className="bg-black rounded-xl px-8 py-3 flex items-center space-x-3 outline-none border-none shadow-lg">
          {/* Apple Logo */}
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          
          <div className="text-white">
            <div className="text-xs font-light tracking-wide">Download on the</div>
            <div className="text-xl font-semibold -mt-1 tracking-tight">App Store</div>
          </div>
        </div>
      </a>

      <a
        href="#"
        className="outline-none focus:outline-none"
      >
        <div className="bg-black rounded-xl px-8 py-3 flex items-center space-x-3 outline-none border-none shadow-lg">
          {/* Google Play Logo */}
          <svg className="w-8 h-8" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="playGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="100%" stopColor="#0099CC" />
              </linearGradient>
              <linearGradient id="playGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD500" />
                <stop offset="100%" stopColor="#FF9500" />
              </linearGradient>
              <linearGradient id="playGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF4444" />
                <stop offset="100%" stopColor="#CC0000" />
              </linearGradient>
              <linearGradient id="playGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00FF88" />
                <stop offset="100%" stopColor="#00AA55" />
              </linearGradient>
            </defs>
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z" fill="url(#playGradient1)"/>
            <path d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z" fill="url(#playGradient2)"/>
            <path d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z" fill="url(#playGradient3)"/>
            <path d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" fill="url(#playGradient4)"/>
          </svg>
          
          <div className="text-white">
            <div className="text-xs font-light tracking-wide">GET IT ON</div>
            <div className="text-xl font-semibold -mt-1 tracking-tight">Google Play</div>
          </div>
        </div>
      </a>
    </div>

    {/* Indicador de funciones */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.3, duration: 0.8 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
    >
      {[
        { icon: "⚽", text: "Encuentra partidos" },
        { icon: "👥", text: "Conecta deportistas" },
        { icon: "📍", text: "Descubre canchas" }
      ].map((feature, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/30"
        >
          <div className="text-4xl mb-3">{feature.icon}</div>
          <div className="text-gray-300 font-medium">{feature.text}</div>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
      <Navbar />
      
      {/* Sistema de partículas dinámicas */}
      <ParticleSystem />
      
      {/* Gradientes de fondo */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/3 rounded-full blur-3xl"></div>

      {/* Contenido principal centrado */}
      <main className="flex-1 flex items-center justify-center px-6 py-24 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <FloatingLogo />
          <DownloadCenter />
        </div>
      </main>

      {/* Footer corporativo */}
      <footer className="relative z-10 bg-gray-900/80 backdrop-blur-sm border-t border-gray-800/50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="/legal/privacidad" className="text-gray-400 hover:text-white transition-colors text-sm">Privacidad</a></li>
                <li><a href="/legal/terminos" className="text-gray-400 hover:text-white transition-colors text-sm">Términos</a></li>
                <li><a href="/legal/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">Política sobre cookies</a></li>
                <li><a href="/legal/propiedad" className="text-gray-400 hover:text-white transition-colors text-sm">Propiedad intelectual</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Social</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/sportmeet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://tiktok.com/@sportmeet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.321 5.562a5.123 5.123 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.419-1.943-1.419-3.185V.748h-3.296v13.084c0 2.235-1.814 4.049-4.049 4.049s-4.049-1.814-4.049-4.049 1.814-4.049 4.049-4.049c.371 0 .729.05 1.068.144V6.611c-.334-.044-.677-.067-1.025-.067-3.621 0-6.56 2.939-6.56 6.56s2.939 6.56 6.56 6.56 6.56-2.939 6.56-6.56V8.251a9.556 9.556 0 0 0 5.607 1.797V7.369a6.276 6.276 0 0 1-3.866-1.807z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://youtube.com/@sportmeet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://twitter.com/sportmeet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://facebook.com/sportmeet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Preguntas frecuentes */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Preguntas frecuentes</h3>
              <ul className="space-y-3">
                <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</a></li>
                <li><a href="/destinos" className="text-gray-400 hover:text-white transition-colors text-sm">Destinos</a></li>
                <li><a href="/prensa" className="text-gray-400 hover:text-white transition-colors text-sm">Sala de prensa</a></li>
                <li><a href="/codigo-promocional" className="text-gray-400 hover:text-white transition-colors text-sm">Código promocional</a></li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Contacto</h3>
              <ul className="space-y-3">
                <li><a href="/contacto" className="text-gray-400 hover:text-white transition-colors text-sm">Contacto general</a></li>
                <li><a href="/soporte" className="text-gray-400 hover:text-white transition-colors text-sm">Soporte técnico</a></li>
                <li><a href="mailto:hola@sportmeet.cl" className="text-gray-400 hover:text-white transition-colors text-sm">hola@sportmeet.cl</a></li>
                <li><a href="/partnership" className="text-gray-400 hover:text-white transition-colors text-sm">Partnerships</a></li>
              </ul>
            </div>

          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-800/50 mt-8 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 SportMeet. Encuentra tu próximo partido.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
