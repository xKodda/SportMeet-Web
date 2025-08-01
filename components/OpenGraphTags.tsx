"use client";

import { useEffect } from 'react';

interface OpenGraphTagsProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  siteName?: string;
  locale?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterHandle?: string;
  twitterSite?: string;
}

export default function OpenGraphTags({
  title,
  description,
  url,
  image = 'https://sportmeet.cl/images/sportmeetlogooficial1.png',
  type = 'website',
  siteName = 'SportMeet',
  locale = 'es_CL',
  twitterCard = 'summary_large_image',
  twitterHandle = '@sportmeet_cl',
  twitterSite = '@sportmeet_cl'
}: OpenGraphTagsProps) {
  useEffect(() => {
    // Crear meta tags para Open Graph
    const createMetaTag = (property: string, content: string) => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', property);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
      return meta;
    };

    // Crear meta tags para Twitter
    const createTwitterMetaTag = (name: string, content: string) => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', name);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
      return meta;
    };

    const metaTags: HTMLElement[] = [];

    // Open Graph Tags
    metaTags.push(createMetaTag('og:title', title));
    metaTags.push(createMetaTag('og:description', description));
    metaTags.push(createMetaTag('og:url', url));
    metaTags.push(createMetaTag('og:image', image));
    metaTags.push(createMetaTag('og:type', type));
    metaTags.push(createMetaTag('og:site_name', siteName));
    metaTags.push(createMetaTag('og:locale', locale));
    metaTags.push(createMetaTag('og:image:width', '1200'));
    metaTags.push(createMetaTag('og:image:height', '630'));
    metaTags.push(createMetaTag('og:image:alt', title));

    // Twitter Card Tags
    metaTags.push(createTwitterMetaTag('twitter:card', twitterCard));
    metaTags.push(createTwitterMetaTag('twitter:title', title));
    metaTags.push(createTwitterMetaTag('twitter:description', description));
    metaTags.push(createTwitterMetaTag('twitter:image', image));
    metaTags.push(createTwitterMetaTag('twitter:image:alt', title));
    
    if (twitterHandle) {
      metaTags.push(createTwitterMetaTag('twitter:creator', twitterHandle));
    }
    
    if (twitterSite) {
      metaTags.push(createTwitterMetaTag('twitter:site', twitterSite));
    }

    // Cleanup function
    return () => {
      metaTags.forEach(tag => {
        if (document.head.contains(tag)) {
          document.head.removeChild(tag);
        }
      });
    };
  }, [title, description, url, image, type, siteName, locale, twitterCard, twitterHandle, twitterSite]);

  return null;
}

// Configuraciones predefinidas para diferentes páginas
export const homePageOG = {
  title: 'SportMeet - Encuentra tu próximo partido',
  description: 'Conecta con deportistas de tu zona, organiza partidos y disfruta del deporte que amas. SportMeet hace que encontrar compañeros de juego sea más fácil que nunca.',
  url: 'https://sportmeet.cl',
  image: 'https://sportmeet.cl/images/sportmeetlogooficial1.png',
  type: 'website' as const
};

export const terminosPageOG = {
  title: 'Términos y Condiciones - SportMeet',
  description: 'Términos y condiciones de uso de SportMeet. Conoce las reglas, derechos y obligaciones para el uso de nuestra aplicación deportiva en Chile.',
  url: 'https://sportmeet.cl/legales/terminos',
  image: 'https://sportmeet.cl/images/sportmeetlogooficial1.png',
  type: 'website' as const
};

export const privacidadPageOG = {
  title: 'Política de Privacidad - SportMeet',
  description: 'Política de privacidad de SportMeet. Conoce cómo protegemos tus datos personales y tus derechos como usuario de nuestra aplicación deportiva en Chile.',
  url: 'https://sportmeet.cl/legales/privacidad',
  image: 'https://sportmeet.cl/images/sportmeetlogooficial1.png',
  type: 'website' as const
}; 