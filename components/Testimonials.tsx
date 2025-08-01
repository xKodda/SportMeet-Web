"use client";

const Testimonials = () => {
  return (
    <section id="testimonios" className="max-w-6xl mx-auto my-16 px-6 py-16 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-2xl border border-gray-200 dark:border-gray-800/60">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Lo que dicen nuestros <span className="text-[#FF1E1E]">usuarios</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Descubre las experiencias reales de deportistas que ya usan SportMeet
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Testimonio 1 */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF1E1E]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="relative p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/60 dark:to-gray-700/60 rounded-3xl border border-gray-200 dark:border-gray-700/30 hover:border-[#FF1E1E]/30 transition-all duration-300 hover:transform hover:scale-105">
            {/* Avatar y info */}
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF1E1E] to-red-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                C
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white">Carlos Mendoza</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">28 años • Santiago</p>
              </div>
            </div>
            
            {/* Quote */}
            <div className="relative">
              <div className="absolute -top-2 -left-2 text-4xl text-[#FF1E1E]/30">&ldquo;</div>
              <blockquote className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg italic pl-6">
                &ldquo;Antes pasaba horas buscando partidos en grupos de WhatsApp. Ahora con SportMeet encuentro partidos en minutos y he conocido jugadores increíbles.&rdquo;
              </blockquote>
            </div>
            
            {/* Rating */}
            <div className="flex items-center mt-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              <span className="text-gray-500 dark:text-gray-400 text-sm ml-3">5.0</span>
            </div>
          </div>
        </div>
        
        {/* Testimonio 2 */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="relative p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/60 dark:to-gray-700/60 rounded-3xl border border-gray-200 dark:border-gray-700/30 hover:border-green-500/30 transition-all duration-300 hover:transform hover:scale-105">
            {/* Avatar y info */}
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                M
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white">María González</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">24 años • Valparaíso</p>
              </div>
            </div>
            
            {/* Quote */}
            <div className="relative">
              <div className="absolute -top-2 -left-2 text-4xl text-green-500/30">&ldquo;</div>
              <blockquote className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg italic pl-6">
                &ldquo;Como organizadora de partidos, SportMeet me ha facilitado mucho el trabajo. La app es súper intuitiva y la comunidad es muy activa.&rdquo;
              </blockquote>
            </div>
            
            {/* Rating */}
            <div className="flex items-center mt-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              <span className="text-gray-500 dark:text-gray-400 text-sm ml-3">5.0</span>
            </div>
          </div>
        </div>
        
        {/* Testimonio 3 */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="relative p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/60 dark:to-gray-700/60 rounded-3xl border border-gray-200 dark:border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105">
            {/* Avatar y info */}
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                D
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white">Diego Silva</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">31 años • Concepción</p>
              </div>
            </div>
            
            {/* Quote */}
            <div className="relative">
              <div className="absolute -top-2 -left-2 text-4xl text-blue-500/30">&ldquo;</div>
              <blockquote className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg italic pl-6">
                &ldquo;Llevo 3 meses usando SportMeet y he jugado más partidos que en todo el año pasado. La app es genial para encontrar gente con mi nivel.&rdquo;
              </blockquote>
            </div>
            
            {/* Rating */}
            <div className="flex items-center mt-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              <span className="text-gray-500 dark:text-gray-400 text-sm ml-3">5.0</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicadores de navegación */}
      <div className="flex justify-center mt-12 space-x-3">
        <div className="w-3 h-3 bg-[#FF1E1E] rounded-full"></div>
        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
      </div>
    </section>
  );
};

export default Testimonials; 