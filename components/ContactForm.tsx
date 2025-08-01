"use client";

const ContactForm = () => {
  return (
    <section id="contacto" className="max-w-4xl mx-auto my-16 px-6 py-12 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-2xl border border-gray-200 dark:border-gray-800/60">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 text-center">
        ¿Tienes <span className="text-[#FF1E1E]">dudas</span>?
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
        📌 Usa esto para recibir dudas, alianzas o propuestas de canchas.
      </p>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/30 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#FF1E1E] transition-colors"
              placeholder="Tu nombre completo"
              required
            />
          </div>
          {/* Correo */}
          <div>
            <label htmlFor="correo" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Correo
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/30 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#FF1E1E] transition-colors"
              placeholder="tu@email.com"
              required
            />
          </div>
        </div>
        {/* Mensaje */}
        <div>
          <label htmlFor="mensaje" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/30 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#FF1E1E] transition-colors resize-none"
            placeholder="Cuéntanos qué necesitas..."
            required
          ></textarea>
        </div>
        {/* Botón enviar */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#FF1E1E] hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Enviar mensaje
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm; 