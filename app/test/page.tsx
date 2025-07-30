"use client";

import { motion } from 'framer-motion';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-black text-white mb-8 text-center drop-shadow-2xl"
        >
          🎨 Nueva Paleta Elegante - SportMeet
        </motion.h1>

        {/* Nueva paleta de colores */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-red-500 to-red-600 text-white p-8 rounded-3xl shadow-2xl border border-red-400/20"
          >
            <h3 className="text-2xl font-black mb-2">Primary</h3>
            <p className="text-white/90 mb-4">Rojo deportivo elegante</p>
            <div className="text-sm font-mono bg-black/20 px-3 py-1 rounded-lg">#EF4444</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-slate-700 to-slate-800 text-white p-8 rounded-3xl shadow-2xl border border-slate-600/20"
          >
            <h3 className="text-2xl font-black mb-2">Secondary</h3>
            <p className="text-white/90 mb-4">Gris oscuro frío</p>
            <div className="text-sm font-mono bg-black/20 px-3 py-1 rounded-lg">#1E293B</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900 p-8 rounded-3xl shadow-2xl border border-yellow-300/20"
          >
            <h3 className="text-2xl font-black mb-2">Accent</h3>
            <p className="text-gray-800 mb-4">Amarillo mostaza apagado</p>
            <div className="text-sm font-mono bg-black/20 text-white px-3 py-1 rounded-lg">#FACC15</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-3xl shadow-2xl border border-blue-400/20"
          >
            <h3 className="text-2xl font-black mb-2">Blue</h3>
            <p className="text-white/90 mb-4">Azul deportivo fresco</p>
            <div className="text-sm font-mono bg-black/20 px-3 py-1 rounded-lg">#3B82F6</div>
          </motion.div>
        </motion.div>

        {/* Colores adicionales */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-3xl shadow-2xl border border-gray-700/20"
          >
            <h3 className="text-2xl font-black mb-2">Dark</h3>
            <p className="text-white/90 mb-4">Texto base</p>
            <div className="text-sm font-mono bg-white/10 px-3 py-1 rounded-lg">#111827</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-gray-600 to-gray-700 text-white p-8 rounded-3xl shadow-2xl border border-gray-500/20"
          >
            <h3 className="text-2xl font-black mb-2">Gray</h3>
            <p className="text-white/90 mb-4">Texto secundario</p>
            <div className="text-sm font-mono bg-black/20 px-3 py-1 rounded-lg">#6B7280</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-300/20"
          >
            <h3 className="text-2xl font-black mb-2">Light</h3>
            <p className="text-gray-700 mb-4">Fondo claro cálido</p>
            <div className="text-sm font-mono bg-black/80 text-white px-3 py-1 rounded-lg">#F9FAFB</div>
          </motion.div>
        </motion.div>

        {/* Gradientes */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-black text-white mb-6 text-center">Gradientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-br from-slate-700 via-gray-700 to-gray-600 text-white p-8 rounded-3xl shadow-2xl border border-gray-600/20"
            >
              <h3 className="text-2xl font-black mb-2">Gradient Hero</h3>
              <p className="text-white/90">Fondo del hero section</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white p-8 rounded-3xl shadow-2xl border border-red-500/20"
            >
              <h3 className="text-2xl font-black mb-2">Gradient Elegant</h3>
              <p className="text-white/90">Gradiente elegante para CTAs</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Botones modernos */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-black text-white mb-6 text-center">Botones Modernos</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform shadow-2xl hover:shadow-red-500/50 border border-red-400/20"
            >
              Botón Primary
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform shadow-2xl hover:shadow-blue-500/50 border border-blue-400/20"
            >
              Botón Blue
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform shadow-2xl hover:shadow-yellow-500/50 border border-yellow-300/20"
            >
              Botón Accent
            </motion.button>
          </div>
        </motion.div>

        {/* Animaciones */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-black text-white mb-6 text-center">Animaciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-3xl shadow-xl border border-gray-700/20"
            >
              <h3 className="text-xl font-black mb-2 text-red-400">Fade In</h3>
              <p className="text-gray-300">Aparece suavemente</p>
            </motion.div>
            
            <motion.div 
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-3xl shadow-xl border border-gray-700/20"
            >
              <h3 className="text-xl font-black mb-2 text-blue-400">Slide Up</h3>
              <p className="text-gray-300">Desliza hacia arriba</p>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-3xl shadow-xl border border-gray-700/20"
            >
              <h3 className="text-xl font-black mb-2 text-yellow-400">Bounce Gentle</h3>
              <p className="text-gray-300">Rebote suave</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-br from-red-600 via-red-500 to-red-700 p-8 rounded-3xl shadow-2xl text-white text-center border border-red-500/20"
        >
          <h3 className="text-3xl font-black mb-4">✅ Nueva Paleta Implementada</h3>
          <p className="text-xl text-white/90 mb-6">
            Colores elegantes, profesionales y modernos para una experiencia visual sofisticada
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-3">🎨 Colores elegantes</div>
            <div className="bg-white/10 rounded-lg p-3">✨ Gradientes profesionales</div>
            <div className="bg-white/10 rounded-lg p-3">🎭 Animaciones fluidas</div>
            <div className="bg-white/10 rounded-lg p-3">📱 Diseño responsive</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 