"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from "react";

// Componente de animación de íconos
const AnimatedIcons = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const icons = ["🔍", "🤝", "📍"];
  const texts = ["Encuentra partidos", "Conecta deportistas", "Descubre canchas"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="text-center relative">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ 
          duration: 1,
          ease: "easeInOut"
        }}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <div className="text-8xl mb-4">{icons[currentIndex]}</div>
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          {texts[currentIndex]}
        </div>
      </motion.div>
    </div>
  );
};

const WhatIsSportMeet = () => {
  return (
    <section id="que-es-sportmeet" className="max-w-6xl mx-auto my-16 px-6 py-16 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-2xl border border-gray-200 dark:border-gray-800/60">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Contenido textual */}
        <div className="space-y-6 w-full">
          <div className="inline-flex items-center px-4 py-2 bg-[#FF1E1E]/10 border border-[#FF1E1E]/20 rounded-full text-[#FF1E1E] text-sm font-medium mb-4">
            <span className="mr-2">🚀</span>
            Plataforma deportiva
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            ¿Qué es <span className="text-[#FF1E1E]">SportMeet</span>?
          </h2>
          
          <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              SportMeet es la app gratuita que soluciona el mayor problema del deporte amateur y de barrio: no tener con quién jugar.
            </p>
            <p>
              Encuentra personas, partidos y equipos cerca de ti.
            </p>
            <p className="text-xl font-semibold text-[#FF1E1E]">
              Juega cuando quieras, donde quieras.
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-6 pt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#FF1E1E] rounded-full"></div>
              <span className="text-gray-500 dark:text-gray-400 text-sm">Sin grupos caóticos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#FF1E1E] rounded-full"></div>
              <span className="text-gray-500 dark:text-gray-400 text-sm">Todo Chile</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#FF1E1E] rounded-full"></div>
              <span className="text-gray-500 dark:text-gray-400 text-sm">Fútbol, básquet, pádel y más</span>
            </div>
          </div>
        </div>
        
        {/* Elemento visual */}
        <div className="relative">
          <div className="relative w-full h-80 bg-gradient-to-br from-blue-50 to-red-50 dark:from-[#FF1E1E]/20 dark:to-purple-500/20 rounded-2xl border border-gray-200 dark:border-gray-700/30 flex items-center justify-center">
            <div className="text-center flex flex-col items-center justify-center h-full">
              <AnimatedIcons />
            </div>
          </div>
          
          {/* Elementos decorativos flotantes */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-60 animate-bounce"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSportMeet; 