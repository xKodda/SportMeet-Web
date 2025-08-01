import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { GoogleAnalytics } from '@next/third-parties/google';
import GoogleSearchConsole from '@/components/GoogleSearchConsole';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';
import { AccessibilityProvider } from '@/components/AccessibilityProvider';
import { SkipLinks } from '@/components/AccessibilityControls';

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  title: "SportMeet - Encuentra tu próximo partido",
  description: "Conecta con deportistas de tu zona, organiza partidos y disfruta del deporte que amas. SportMeet hace que encontrar compañeros de juego sea más fácil que nunca.",  
  keywords: "deportes, partidos, fútbol, básquetbol, tenis, pádel, vóleibol, running, Chile, comunidad deportiva",
  authors: [{ name: "SportMeet Team" }],
  creator: "SportMeet",
  publisher: "SportMeet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sportmeet.cl'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/images/sportmeetlogooficial2.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/sportmeetlogooficial2.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/images/sportmeetlogooficial2.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  openGraph: {
    title: "SportMeet - Encuentra tu próximo partido",
    description: "Conecta con deportistas de tu zona, organiza partidos y disfruta del deporte que amas.",
    url: 'https://sportmeet.cl',
    siteName: 'SportMeet',
    images: [
      {
        url: '/images/sportmeetlogooficial1.png',
        width: 1200,
        height: 630,
        alt: 'SportMeet - Encuentra tu próximo partido',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SportMeet - Encuentra tu próximo partido",
    description: "Conecta con deportistas de tu zona, organiza partidos y disfruta del deporte que amas.",
    images: ['/images/sportmeetlogooficial1.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'your-google-verification-code',
  },
  other: {
    'application-name': 'SportMeet',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'SportMeet',
    'msapplication-TileColor': '#FF1E1E',
    'theme-color': '#FF1E1E',
    'geo.region': 'CL',
    'geo.placename': 'Chile',
    'language': 'Spanish',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/sportmeetlogooficial2.png" />
        <link rel="apple-touch-icon" href="/images/sportmeetlogooficial2.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preload crítico para Core Web Vitals */}
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
          as="style" 
        />
        <link 
          rel="preload" 
          href="/images/sportmeetlogooficial2.png" 
          as="image" 
          type="image/png"
        />
        <link 
          rel="preload" 
          href="/images/Hero2.jpg" 
          as="image" 
          type="image/jpeg"
        />
        
        {/* DNS Prefetch para recursos externos */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Resource Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <AccessibilityProvider>
            <PerformanceOptimizer>
              {/* Skip Links para navegación por teclado */}
              <SkipLinks />
              
              {children}
            </PerformanceOptimizer>
          </AccessibilityProvider>
        </ThemeProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX"} />
        <GoogleSearchConsole verificationCode={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION} />
      </body>
    </html>
  );
}
