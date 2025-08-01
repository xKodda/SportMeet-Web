"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'set',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export const useGoogleAnalytics = () => {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

  useEffect(() => {
    // Verificar que gtag esté disponible
    if (typeof window !== 'undefined' && window.gtag) {
      // Configurar GA4
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'custom_parameter_1': 'sport_type',
          'custom_parameter_2': 'user_level',
          'custom_parameter_3': 'location'
        }
      });
    }
  }, [GA_MEASUREMENT_ID]);

  // Función para trackear eventos personalizados
  const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number,
    customParameters?: Record<string, any>
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        ...customParameters
      });
    }
  };

  // Eventos específicos para SportMeet
  const trackAppDownload = (platform: 'ios' | 'android') => {
    trackEvent('app_download', 'engagement', platform);
  };

  const trackSectionView = (sectionName: string) => {
    trackEvent('section_view', 'engagement', sectionName);
  };

  const trackContactForm = (formType: 'contact' | 'support') => {
    trackEvent('form_submit', 'engagement', formType);
  };

  const trackNavigation = (destination: string) => {
    trackEvent('navigation', 'engagement', destination);
  };

  const trackLegalPageView = (pageType: 'terms' | 'privacy') => {
    trackEvent('legal_page_view', 'engagement', pageType);
  };

  const trackThemeToggle = (theme: 'light' | 'dark') => {
    trackEvent('theme_toggle', 'preferences', theme);
  };

  const trackHeroInteraction = (action: 'download_button' | 'learn_more') => {
    trackEvent('hero_interaction', 'engagement', action);
  };

  const trackFeatureView = (featureName: string) => {
    trackEvent('feature_view', 'engagement', featureName);
  };

  const trackTestimonialView = (testimonialIndex: number) => {
    trackEvent('testimonial_view', 'engagement', `testimonial_${testimonialIndex}`);
  };

  return {
    trackEvent,
    trackAppDownload,
    trackSectionView,
    trackContactForm,
    trackNavigation,
    trackLegalPageView,
    trackThemeToggle,
    trackHeroInteraction,
    trackFeatureView,
    trackTestimonialView
  };
}; 