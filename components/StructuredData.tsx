"use client";

import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'FAQPage';
  data: Record<string, unknown>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    // Crear script para datos estructurados
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    });
    
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, [type, data]);

  return null;
}

// Datos estructurados predefinidos para SportMeet
export const organizationData = {
  name: 'SportMeet',
  url: 'https://sportmeet.cl',
  logo: 'https://sportmeet.cl/images/sportmeetlogooficial2.png',
  description: 'Conecta con deportistas de tu zona, organiza partidos y disfruta del deporte que amas.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CL',
    addressLocality: 'Santiago',
    addressRegion: 'Región Metropolitana'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contacto@sportmeet.cl'
  },
  sameAs: [
    // Agregar redes sociales cuando estén disponibles
  ]
};

export const websiteData = {
  name: 'SportMeet',
  url: 'https://sportmeet.cl',
  description: 'Encuentra con quién jugar. Conecta. Juega. Comparte.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://sportmeet.cl/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

export const webPageData = {
  name: 'SportMeet - Encuentra tu próximo partido',
  description: 'Conecta con deportistas de tu zona, organiza partidos y disfruta del deporte que amas.',
  url: 'https://sportmeet.cl',
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: 'SportMeet',
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Android, iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CLP'
    }
  }
}; 