"use client";

const MainFeatures = () => {
  return (
    <section id="funcionalidades" className="max-w-6xl mx-auto my-16 px-6 py-16 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-2xl border border-gray-200 dark:border-gray-800/60">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Funcionalidades <span className="text-[#FF1E1E]">principales</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Todo lo que necesitas para encontrar tu próximo partido en una sola app
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Chat de equipo en tiempo real */}
        <div className="group relative p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/60 dark:to-gray-700/60 rounded-2xl border border-gray-200 dark:border-gray-700/30 hover:border-[#FF1E1E]/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF1E1E]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-[#FF1E1E] to-red-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
              💬
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-[#FF1E1E] transition-colors duration-300">
              Chat de equipo
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Coordina y conversa con tu equipo antes, durante y después del partido en tiempo real.
            </p>
          </div>
        </div>
        
        {/* Swipe para encontrar partidos */}
        <div className="group relative p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/60 dark:to-gray-700/60 rounded-2xl border border-gray-200 dark:border-gray-700/30 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
              🎯
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
              Swipe para encontrar
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Desliza y descubre partidos que se ajustan a tus intereses y ubicación.
            </p>
          </div>
        </div>
        
        {/* Sistema de ranking y puntos */}
        <div className="group relative p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/60 dark:to-gray-700/60 rounded-2xl border border-gray-200 dark:border-gray-700/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
              📊
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
              Ranking y puntos
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Gana puntos, sube en el ranking y compite con otros deportistas.
            </p>
          </div>
        </div>
        
        {/* Historial de partidos jugados */}
        <div className="group relative p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/60 dark:to-gray-700/60 rounded-2xl border border-gray-200 dark:border-gray-700/30 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
              📆
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
              Historial completo
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Revisa todos los partidos en los que has participado y tus estadísticas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFeatures; 