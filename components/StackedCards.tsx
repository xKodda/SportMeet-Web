"use client";

import Image from 'next/image';

export default function StackedCards() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[500px] md:min-h-[700px] w-full overflow-hidden rounded-3xl">
      {/* Imagen de fondo enorme */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero.png"
          alt="Fondo deportivo SportMeet"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </div>
      {/* Contenido centrado opcional */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full py-24">
        {/* Puedes agregar aquí un CTA, texto, botón, etc. */}
      </div>
    </section>
  );
} 