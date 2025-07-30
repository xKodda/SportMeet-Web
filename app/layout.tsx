import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

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
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
