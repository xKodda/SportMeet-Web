import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#1F2937] dark:bg-[#111827] text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Logo centrado y con sombra */}
        <div className="flex justify-center mb-6">
          <div className="relative w-20 h-20 md:w-24 md:h-24 drop-shadow-[0_2px_8px_rgba(0,0,0,0.32)]">
            <Image
              src="/images/sportmeetlogooficial2.png"
              alt="SportMeet Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Descripción */}
        <p className="text-[#6B7280] dark:text-gray-400 mb-8 max-w-2xl mx-auto text-center text-lg">
          Conectamos deportistas para crear la comunidad deportiva más grande de Chile.
        </p>

        {/* Redes sociales */}
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://instagram.com/sportmeet" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[#FF1E1E] rounded-full flex items-center justify-center hover:bg-[#DC2626] transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            href="mailto:hola@sportmeet.cl" 
            className="w-12 h-12 bg-[#FF1E1E] rounded-full flex items-center justify-center hover:bg-[#DC2626] transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>

        {/* Enlaces rápidos */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {[
            { href: "#inicio", label: "Inicio" },
            { href: "#funcionalidades", label: "Funcionalidades" },
            { href: "#como-funciona", label: "Cómo funciona" },
            { href: "#faq", label: "FAQ" }
          ].map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="text-[#6B7280] dark:text-gray-400 hover:text-white transition-colors font-medium hover:scale-105"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Enlaces legales */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 border-t border-[#374151] dark:border-gray-600 pt-6">
          {[
            { href: "/legales/terminos", label: "Términos y condiciones" },
            { href: "/legales/privacidad", label: "Política de privacidad" },
            { href: "/legales/cookies", label: "Política de cookies" },
            { href: "/legales/aviso", label: "Aviso legal" },
            { href: "/legales/contacto", label: "Contacto legal" }
          ].map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="text-[#9CA3AF] dark:text-gray-500 hover:text-white transition-colors text-sm font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-[#6B7280] dark:text-gray-400 text-xs">
            © 2025 SportMeet. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
} 