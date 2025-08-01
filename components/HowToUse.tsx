"use client";

const HowToUse = () => {
  return (
    <section id="como-funciona" className="max-w-6xl mx-auto my-16 px-6 py-16 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-2xl border border-gray-200 dark:border-gray-800/60">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          ¿Cómo se usa <span className="text-[#FF1E1E]">SportMeet</span>?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          En solo 4 pasos simples estarás jugando con deportistas cerca de ti
        </p>
      </div>
      
      {/* Timeline horizontal con gradiente suave */}
      <div className="relative">
        {/* Línea conectora principal con gradiente suave */}
        <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-[#FF1E1E] via-red-400 via-pink-400 via-purple-400 via-blue-400 to-blue-500 rounded-full opacity-30"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Paso 1 */}
          <div className="relative flex flex-col items-center">
            <div className="w-16 h-16 bg-[#FF1E1E] rounded-full flex items-center justify-center text-2xl mb-4 relative z-10 shadow-lg border-4 border-white dark:border-gray-800">
              📱
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Descarga la app</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Crea tu perfil en minutos</div>
            </div>
          </div>
          
          {/* Paso 2 */}
          <div className="relative flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-400 rounded-full flex items-center justify-center text-2xl mb-4 relative z-10 shadow-lg border-4 border-white dark:border-gray-800">
              🧭
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Encuentra partidos</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Cerca de tu ubicación</div>
            </div>
          </div>
          
          {/* Paso 3 */}
          <div className="relative flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-2xl mb-4 relative z-10 shadow-lg border-4 border-white dark:border-gray-800">
              🤝
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Únete o crea</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Un encuentro deportivo</div>
            </div>
          </div>
          
          {/* Paso 4 */}
          <div className="relative flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-2xl mb-4 relative z-10 shadow-lg border-4 border-white dark:border-gray-800">
              🏆
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Juega y gana</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Puntos y haz comunidad</div>
            </div>
          </div>
        </div>
        
        {/* Líneas conectoras verticales para móvil con gradiente suave */}
        <div className="md:hidden space-y-8">
          <div className="flex items-center justify-center">
            <div className="w-0.5 h-8 bg-gradient-to-b from-[#FF1E1E] via-red-400 to-pink-400 opacity-40"></div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-0.5 h-8 bg-gradient-to-b from-pink-400 via-purple-400 to-blue-400 opacity-40"></div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-0.5 h-8 bg-gradient-to-b from-blue-400 to-blue-500 opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse; 