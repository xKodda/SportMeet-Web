"use client";

import { useEffect, useRef } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

export default function PerformanceOptimizer({ children }: PerformanceOptimizerProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Optimización de LCP (Largest Contentful Paint)
    const optimizeLCP = () => {
      // Precargar imágenes críticas
      const criticalImages = [
        '/images/sportmeetlogooficial2.png',
        '/images/sportmeetlogooficial1.png',
        '/images/Hero2.jpg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });

      // Precargar fuentes críticas
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'font';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
    };

    // Optimización de FID (First Input Delay)
    const optimizeFID = () => {
      // Reducir JavaScript bloqueante
      const scripts = document.querySelectorAll('script');
      scripts.forEach(script => {
        if (!script.async && !script.defer) {
          script.defer = true;
        }
      });

      // Optimizar event listeners
      const optimizeEventListeners = () => {
        const buttons = document.querySelectorAll('button, a');
        buttons.forEach(button => {
          if (button) {
            button.addEventListener('click', (e) => {
              // Prevenir múltiples clicks
              if (button.classList.contains('clicked')) {
                e.preventDefault();
                return;
              }
              button.classList.add('clicked');
              setTimeout(() => {
                button.classList.remove('clicked');
              }, 1000);
            }, { passive: true });
          }
        });
      };

      // Ejecutar después de que el DOM esté listo
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', optimizeEventListeners);
      } else {
        optimizeEventListeners();
      }
    };

    // Optimización de CLS (Cumulative Layout Shift)
    const optimizeCLS = () => {
      // Reservar espacio para imágenes
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.complete) {
          img.style.opacity = '0';
          img.style.transition = 'opacity 0.3s ease-in-out';
          img.addEventListener('load', () => {
            img.style.opacity = '1';
          });
        }
      });

      // Reservar espacio para contenido dinámico
      const containers = document.querySelectorAll('.dynamic-content');
      containers.forEach(container => {
        if (container instanceof HTMLElement) {
          container.style.minHeight = '200px';
        }
      });

      // Optimizar animaciones
      const animatedElements = document.querySelectorAll('[data-animate]');
      animatedElements.forEach(element => {
        if (element instanceof HTMLElement) {
          element.style.willChange = 'transform, opacity';
        }
      });
    };

    // Intersection Observer para lazy loading
    const setupIntersectionObserver = () => {
      if ('IntersectionObserver' in window) {
        observerRef.current = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              target.classList.add('animate-optimized');
              observerRef.current?.unobserve(target);
            }
          });
        }, {
          rootMargin: '50px',
          threshold: 0.1
        });

        // Observar elementos con data-lazy
        const lazyElements = document.querySelectorAll('[data-lazy]');
        lazyElements.forEach(element => {
          observerRef.current?.observe(element);
        });
      }
    };

    // Optimización de recursos
    const optimizeResources = () => {
      // Comprimir imágenes dinámicamente
      const compressImages = () => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          if (img instanceof HTMLImageElement) {
            img.loading = 'lazy';
            img.decoding = 'async';
          }
        });
      };

      // Optimizar CSS crítico
      const optimizeCriticalCSS = () => {
        const style = document.createElement('style');
        style.textContent = `
          .critical-content { opacity: 1 !important; visibility: visible !important; }
          .lazy { opacity: 0; transition: opacity 0.3s ease-in-out; }
          .loaded { opacity: 1; }
          .animate-optimized { will-change: transform, opacity; }
        `;
        document.head.appendChild(style);
      };

      compressImages();
      optimizeCriticalCSS();
    };

    // Monitoreo de Core Web Vitals
    const monitorCoreWebVitals = () => {
      if ('PerformanceObserver' in window) {
        // Monitorear LCP
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
          if (window.gtag) {
            window.gtag('event', 'core_web_vital', {
              event_category: 'Web Vitals',
              event_label: 'LCP',
              value: Math.round(lastEntry.startTime)
            });
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Monitorear FID
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if ('processingStart' in entry) {
              const fid = (entry as PerformanceEventTiming).processingStart - entry.startTime;
              console.log('FID:', fid);
              if (window.gtag) {
                window.gtag('event', 'core_web_vital', {
                  event_category: 'Web Vitals',
                  event_label: 'FID',
                  value: Math.round(fid)
                });
              }
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Monitorear CLS
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const layoutShift = entry as LayoutShift;
            if (!layoutShift.hadRecentInput) {
              clsValue += layoutShift.value;
            }
          }
          console.log('CLS:', clsValue);
          if (window.gtag) {
            window.gtag('event', 'core_web_vital', {
              event_category: 'Web Vitals',
              event_label: 'CLS',
              value: Math.round(clsValue * 1000)
            });
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Ejecutar optimizaciones
    optimizeLCP();
    optimizeFID();
    optimizeCLS();
    setupIntersectionObserver();
    optimizeResources();
    monitorCoreWebVitals();

    // Cleanup
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return <>{children}</>;
}

// Hook para Core Web Vitals
export const useCoreWebVitals = () => {
  useEffect(() => {
    const trackWebVital = (name: string, value: number) => {
      if (window.gtag) {
        window.gtag('event', 'core_web_vital', {
          event_category: 'Web Vitals',
          event_label: name,
          value: Math.round(value)
        });
      }
    };

    // Monitorear métricas personalizadas
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'measure') {
            trackWebVital(entry.name, entry.startTime);
          }
        });
      });

      observer.observe({ entryTypes: ['measure'] });

      return () => observer.disconnect();
    }
  }, []);
}; 