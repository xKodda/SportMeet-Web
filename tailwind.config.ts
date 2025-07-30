import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Nueva paleta elegante y profesional
        'sportmeet': {
          // Primario - Rojo deportivo más elegante
          'primary': '#EF4444',
          // Secundario - Gris oscuro frío
          'secondary': '#1E293B',
          // Fondo claro - Gris claro cálido
          'light': '#F9FAFB',
          // Acento 1 - Amarillo mostaza apagado
          'accent': '#FACC15',
          // Acento 2 - Azul deportivo fresco
          'blue': '#3B82F6',
          // Texto base - Gris casi negro
          'dark': '#111827',
          // Texto secundario - Gris medio
          'gray': '#6B7280',
        },
        // Mantener compatibilidad con nombres anteriores
        'sportmeet-red': '#EF4444',
        'sportmeet-black': '#111827',
        'sportmeet-mustard': '#FACC15',
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "fade-in-up": "fadeInUp 0.8s ease-out",
        "fade-in-down": "fadeInDown 0.8s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
        "slide-down": "slideDown 0.8s ease-out",
        "slide-left": "slideLeft 0.8s ease-out",
        "slide-right": "slideRight 0.8s ease-out",
        "bounce-gentle": "bounceGentle 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
        "scale-in": "scaleIn 0.6s ease-out",
        "scale-up": "scaleUp 0.6s ease-out",
        "rotate-slow": "rotateSlow 20s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
        "gradient-shift": "gradientShift 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(40px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-40px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        pulseGlow: {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)",
            transform: "scale(1)"
          },
          "50%": { 
            boxShadow: "0 0 40px rgba(239, 68, 68, 0.6)",
            transform: "scale(1.05)"
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-25px)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        rotateSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-sport': 'linear-gradient(135deg, #EF4444 0%, #FACC15 50%, #3B82F6 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1E293B 0%, #374151 50%, #4B5563 100%)',
        'gradient-elegant': 'linear-gradient(135deg, #EF4444 0%, #DC2626 50%, #B91C1C 100%)',
        'gradient-shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      },
      transitionProperty: {
        'all': 'all',
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
        'opacity': 'opacity',
        'shadow': 'box-shadow',
        'transform': 'transform',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config; 