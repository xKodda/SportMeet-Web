import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen bg-[#1F2937] dark:bg-[#111827] relative overflow-hidden flex items-center">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#FF1E1E]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#FF1E1E]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#FF1E1E]/5 rounded-full blur-2xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo prominente */}
          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-24 md:w-32 md:h-32 hover:scale-110 transition-all duration-500">
              <Image
                src="/images/sportmeetlogooficial1.png"
                alt="SportMeet Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Main Heading*/}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
            Encuentra tu
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF1E1E]">
              próximo partido
            </span>
          </h1>
          
          {/* Subtitle más directo y atractivo */}
          <p className="text-2xl sm:text-3xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Conecta con deportistas cerca de ti. 
            <span className="font-bold text-white"> SportMeet</span> hace que encontrar compañeros de juego sea 
            <span className="font-bold text-[#FF1E1E]"> súper fácil</span>.
          </p>
          
          {/* CTA Buttons principales*/}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-[#FF1E1E] text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-[#DC2626] transition-all duration-500 shadow-2xl hover:shadow-[#FF1E1E]/30 flex items-center space-x-4 relative overflow-hidden min-w-[280px]">
              <div className="absolute inset-0 bg-gradient-shimmer opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-500"></div>
              <svg 
                className="w-8 h-8"
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08z"/>
                <path d="M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span className="relative z-10">Descargar para iOS</span>
            </button>
            
            <button className="group bg-[#FF1E1E] text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-[#DC2626] transition-all duration-500 shadow-2xl hover:shadow-[#FF1E1E]/30 flex items-center space-x-4 relative overflow-hidden min-w-[280px]">
              <div className="absolute inset-0 bg-gradient-shimmer opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-500"></div>
              <svg 
                className="w-8 h-8"
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <span className="relative z-10">Descargar para Android</span>
            </button>
          </div>
          
          {/* Texto adicional*/}
          <p className="text-white/70 text-lg mb-8">
            Gratis • Sin anuncios • Sin spam
          </p>
          
          {/* Stats simplificados*/}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: "10K+", label: "Usuarios activos" },
              { number: "500+", label: "Partidos organizados" },
              { number: "50+", label: "Ciudades" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="text-4xl font-black text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 