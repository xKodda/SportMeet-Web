"use client";

const WhySportMeet = () => {
  return (
    <section id="por-que-sportmeet" className="max-w-6xl mx-auto my-16 px-6 py-16 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-2xl border border-gray-200 dark:border-gray-800/60">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          <span className="text-[#FF1E1E]">SportMeet</span> es diferente. Mira por qué.
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Descubre las ventajas que hacen de SportMeet la mejor opción para deportistas
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Beneficio 1 - Sin WhatsApp */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF1E1E]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="relative p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/60 dark:to-gray-700/60 rounded-2xl border border-gray-200 dark:border-gray-700/30 hover:border-[#FF1E1E]/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FF1E1E] to-red-600 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                🔥
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-[#FF1E1E] transition-colors duration-300">
                  Sin grupos caóticos
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Olvídate de los grupos caóticos y mensajes perdidos. Todo organizado en una sola app con chat en tiempo real.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Beneficio 2 - App gratuita */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="relative p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/60 dark:to-gray-700/60 rounded-2xl border border-gray-200 dark:border-gray-700/30 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                ✅
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-green-500 transition-colors duration-300">
                  ¡Gratis y sin enredos!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Descarga, juega y forma parte de la comunidad deportiva más activa de Chile.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Beneficio 3 - Para todos */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="relative p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/60 dark:to-gray-700/60 rounded-2xl border border-gray-200 dark:border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                💪
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-500 transition-colors duration-300">
                  Para todos los usuarios
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Ideal para jugadores, organizadores y canchas. Todos ganan con SportMeet.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Beneficio 4 - Todo Chile */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="relative p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/60 dark:to-gray-700/60 rounded-2xl border border-gray-200 dark:border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                🗺️
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-purple-500 transition-colors duration-300">
                  Funciona en todo Chile
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Desde Arica hasta Punta Arenas, encuentra deportistas cerca de ti en cualquier ciudad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySportMeet; 