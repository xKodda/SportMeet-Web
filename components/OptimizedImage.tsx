"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 90,
  sizes = '100vw',
  placeholder = 'empty',
  blurDataURL
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Preload imagen si es crítica
    if (priority) {
      const img = new window.Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setIsError(true);
    }
  }, [src, priority]);

  // Optimizar según el viewport
  const getOptimizedSizes = () => {
    if (typeof window === 'undefined') return sizes;
    
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 640) return '100vw';
    if (viewportWidth < 1024) return '50vw';
    return '33vw';
  };

  // Optimizar calidad según conexión
  const getOptimizedQuality = () => {
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      const connection = (navigator as Navigator & { connection?: { effectiveType?: string } }).connection;
      if (connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g') {
        return 60;
      }
      if (connection?.effectiveType === '3g') {
        return 75;
      }
    }
    return quality;
  };

  return (
    <div className={`image-container ${isLoaded ? 'loaded' : 'loading'} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`image-optimized ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        priority={priority}
        quality={getOptimizedQuality()}
        sizes={getOptimizedSizes()}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={{
          transition: 'opacity 0.3s ease-in-out',
          willChange: 'opacity'
        }}
      />
      
      {/* Placeholder mientras carga */}
      {!isLoaded && !isError && (
        <div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
          style={{
            aspectRatio: width && height ? `${width}/${height}` : '16/9'
          }}
        />
      )}
      
      {/* Error state */}
      {isError && (
        <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm">Error al cargar imagen</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Componente especializado para imágenes del hero
export function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      priority={true}
      quality={95}
      sizes="100vw"
      className="hero-image"
    />
  );
}

// Componente especializado para imágenes de contenido
export function ContentImage({ 
  src, 
  alt, 
  width = 800, 
  height = 600 
}: { 
  src: string; 
  alt: string; 
  width?: number; 
  height?: number; 
}) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={85}
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="content-image"
    />
  );
}

// Componente especializado para avatares
export function AvatarImage({ 
  src, 
  alt, 
  size = 64 
}: { 
  src: string; 
  alt: string; 
  size?: number; 
}) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={size}
      height={size}
      quality={80}
      sizes={`${size}px`}
      className="avatar-image rounded-full"
    />
  );
} 