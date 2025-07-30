export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Descarga",
      description: "Instala SportMeet gratis desde tu tienda de apps.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Swipe",
      description: "Desliza para encontrar partidos cerca de ti.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Juega",
      description: "Únete al partido y disfruta del deporte.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-[#F9FAFB] dark:bg-[#111827]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-[#111827] dark:text-white mb-6">
            Así de
            <span className="text-[#FF1E1E]"> simple</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            En tres pasos estarás listo para encontrar tu próximo partido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group bg-white dark:bg-[#374151] rounded-2xl p-8 border border-gray-200 dark:border-gray-600 hover:border-[#DC2626] transition-all duration-300 hover:shadow-lg dark:hover:shadow-[#DC2626]/20 hover:-translate-y-2"
            >
              <div className="w-20 h-20 bg-[#FF1E1E] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:bg-[#DC2626] transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-black text-3xl">{step.number}</span>
              </div>

              <div className="w-16 h-16 bg-gradient-to-br from-[#FF1E1E] to-[#DC2626] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
                <div className="text-white">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#111827] dark:text-white mb-4 group-hover:text-[#DC2626] transition-all duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-all duration-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section simplificado */}
        <div className="text-center mt-20">
          <button className="bg-[#FF1E1E] text-white px-12 py-4 rounded-full font-bold text-xl hover:bg-[#DC2626] transition-all duration-300 shadow-lg hover:scale-105">
            Empezar ahora
          </button>
        </div>
      </div>
    </section>
  );
} 