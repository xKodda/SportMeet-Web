"use client";

// React y Next.js
import { NextSeo } from 'next-seo';

// Hooks personalizados
import useIsMobile from '@/hooks/useIsMobile';

// Componentes de layout
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Componentes de secciones
import WhatIsSportMeet from '@/components/WhatIsSportMeet';
import HowToUse from '@/components/HowToUse';
import MainFeatures from '@/components/MainFeatures';
import IntermediateCTA from '@/components/IntermediateCTA';
import WhySportMeet from '@/components/WhySportMeet';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';

// Componentes de hero
import HeroSection from '@/components/HeroSection';
import ParticleSystem from '@/components/ParticleSystem';

// Componentes de SEO
import StructuredData, { organizationData, websiteData, webPageData } from '@/components/StructuredData';
import OpenGraphTags, { homePageOG } from '@/components/OpenGraphTags';

// Componentes de accesibilidad
import AccessibilityControls from '@/components/AccessibilityControls';
import { ScreenReaderAnnouncement } from '@/components/AccessibilityControls';

export default function Home() {
  // Hook personalizado para detección móvil
  const isMobile = useIsMobile();

  return (
    <>
      <NextSeo
        title="SportMeet - Encuentra tu próximo partido"
        description="Conecta con deportistas de tu zona, organiza partidos y disfruta del deporte que amas. SportMeet hace que encontrar compañeros de juego sea más fácil que nunca."
        canonical="https://sportmeet.cl"
        openGraph={{
          type: "website",
          locale: "es_CL",
          url: "https://sportmeet.cl",
          siteName: "SportMeet",
          title: "SportMeet - Encuentra tu próximo partido",
          description: "Conecta con deportistas de tu zona, organiza partidos y disfruta del deporte que amas.",
          images: [
            {
              url: "https://sportmeet.cl/images/sportmeetlogooficial1.png",
              width: 1200,
              height: 630,
              alt: "SportMeet - Encuentra tu próximo partido",
            },
          ],
        }}
        twitter={{
          handle: "@sportmeet_cl",
          site: "@sportmeet_cl",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: "deportes, partidos, fútbol, básquetbol, tenis, pádel, vóleibol, running, Chile, comunidad deportiva, encuentros deportivos, jugar deportes, encontrar jugadores",
          },
          {
            name: "author",
            content: "SportMeet Team",
          },
          {
            name: "robots",
            content: "index, follow",
          },
        ]}
      />
      
      {/* Datos estructurados */}
      <StructuredData type="Organization" data={organizationData} />
      <StructuredData type="WebSite" data={websiteData} />
      <StructuredData type="WebPage" data={webPageData} />
      
      {/* Open Graph Tags */}
      <OpenGraphTags {...homePageOG} />
      
      {/* Anuncio a screen readers */}
      <ScreenReaderAnnouncement message="Página principal de SportMeet cargada. Usa Tab para navegar por los enlaces principales." />
      
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-white dark:from-black dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Header con landmark semántico */}
        <header role="banner" id="navigation" className="landmark-nav">
          <Navbar />
        </header>
        
        {/* Efectos de fondo - Solo en desktop */}
        {!isMobile && <ParticleSystem />}
        {!isMobile && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-100/70 via-transparent to-white/50 dark:from-black/70 dark:via-transparent dark:to-black/50"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 dark:bg-red-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-200/30 dark:bg-yellow-500/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 dark:bg-blue-500/3 rounded-full blur-3xl"></div>
          </>
        )}
        
        {/* Hero Section con landmark semántico */}
        <section role="banner" aria-labelledby="hero-title">
          <HeroSection />
        </section>
        
        {/* Contenido principal con landmark semántico */}
        <main role="main" id="main-content" className="relative z-10 landmark-main">
          <div className="max-w-6xl mx-auto text-center px-6">
            {/* Secciones de contenido con landmarks semánticos */}
            <section aria-labelledby="what-is-title">
              <WhatIsSportMeet />
            </section>
            
            <section aria-labelledby="how-to-use-title">
              <HowToUse />
            </section>
            
            <section aria-labelledby="features-title">
              <MainFeatures />
            </section>
            
            <section aria-labelledby="cta-title">
              <IntermediateCTA />
            </section>
            
            <section aria-labelledby="why-title">
              <WhySportMeet />
            </section>
            
            <section aria-labelledby="testimonials-title">
              <Testimonials />
            </section>
            
            <section aria-labelledby="contact-title">
              <ContactForm />
            </section>
          </div>
        </main>
        
        {/* Footer con landmark semántico */}
        <footer role="contentinfo" className="landmark-aside">
          <Footer />
        </footer>
        
        {/* Controles de accesibilidad */}
        <AccessibilityControls />
      </div>
    </>
  );
}
