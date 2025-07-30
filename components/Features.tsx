export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Swipe para encontrar partidos",
      description: "Desliza para encontrar partidos cerca de ti. Sistema intuitivo y divertido.",
      color: "from-[#FF1E1E] to-[#DC2626]"
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: "Mapa en tiempo real",
      description: "Ve partidos y canchas cerca de ti. Encuentra los mejores lugares para jugar.",
      color: "from-[#DC2626] to-[#FF1E1E]"
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Chat directo",
      description: "Habla con otros jugadores. Coordina partidos de forma fácil y rápida.",
      color: "from-[#FF1E1E] to-[#DC2626]"
    }
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-white dark:bg-[#1F2937]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-[#111827] dark:text-white mb-6">
            Simple y
            <span className="text-[#FF1E1E]"> efectivo</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Todo lo que necesitas para encontrar tu próximo partido en tres pasos simples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group bg-white dark:bg-[#374151] rounded-2xl p-8 border border-gray-200 dark:border-gray-600 hover:border-[#DC2626] transition-all duration-300 hover:shadow-lg dark:hover:shadow-[#DC2626]/20 hover:-translate-y-2"
            >
              <div 
                className={`bg-gradient-to-br ${feature.color} text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-all duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#111827] dark:text-white mb-4 group-hover:text-[#DC2626] transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-all duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section simplificado */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-[#FF1E1E] to-[#DC2626] rounded-3xl p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-4xl font-black mb-6">
              ¿Listo para jugar?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Únete a miles de deportistas que ya están usando SportMeet
            </p>
            <button className="bg-white text-[#FF1E1E] px-12 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105">
              Descargar ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 