'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿SportMeet es gratis?",
      answer: "Sí, SportMeet es 100% gratuito. Puedes descargar la app, crear tu perfil y encontrar partidos sin ningún costo."
    },
    {
      question: "¿Qué deportes están disponibles?",
      answer: "Fútbol, básquetbol, tenis, pádel, vóleibol y running. Agregamos nuevos deportes según la demanda."
    },
    {
      question: "¿Es seguro jugar con desconocidos?",
      answer: "Sí, todos los usuarios pasan por verificación y puedes ver reseñas de otros jugadores antes de unirte."
    },
    {
      question: "¿Puedo crear mis propios partidos?",
      answer: "¡Claro! Puedes organizar partidos, establecer ubicación, fecha y número de jugadores necesarios."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-[#1F2937]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-[#111827] dark:text-white mb-6">
            Preguntas
            <span className="text-[#FF1E1E]"> frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Las dudas más comunes sobre SportMeet.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-[#F9FAFB] dark:bg-[#374151] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-600"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  <span className="text-xl font-semibold text-[#111827] dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-[#FF1E1E] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA simplificado */}
        <div className="text-center mt-16">
          <div className="bg-[#F9FAFB] dark:bg-[#374151] rounded-2xl p-8 max-w-2xl mx-auto border border-gray-200 dark:border-gray-600">
            <h3 className="text-2xl font-bold text-[#111827] dark:text-white mb-4">
              ¿Tienes otra pregunta?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Nuestro equipo está aquí para ayudarte.
            </p>
            <button className="bg-[#FF1E1E] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#DC2626] transition-all duration-300 hover:scale-105">
              Contactar soporte
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 