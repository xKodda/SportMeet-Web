"use client";

const IntermediateCTA = () => {
  return (
    <section className="max-w-4xl mx-auto my-16 px-6 py-12 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-2xl border border-gray-200 dark:border-gray-800/60">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 text-center">
        ¿Cansado de no encontrar <span className="text-[#FF1E1E]">con quién jugar</span>?
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-8 text-lg">
        Descarga SportMeet y encuentra tu próximo partido en minutos
      </p>
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
        <a
          href="#"
          className="outline-none focus:outline-none"
        >
          <div className="bg-black rounded-xl px-8 py-3 flex items-center space-x-3 outline-none border-none shadow-lg">
            {/* Apple Logo */}
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            
            <div className="text-white">
              <div className="text-xs font-light tracking-wide">Download on the</div>
              <div className="text-xl font-semibold -mt-1 tracking-tight">App Store</div>
            </div>
          </div>
        </a>

        <a
          href="#"
          className="outline-none focus:outline-none"
        >
          <div className="bg-black rounded-xl px-8 py-3 flex items-center space-x-3 outline-none border-none shadow-lg">
            {/* Google Play Logo */}
            <svg className="w-8 h-8" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="playGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00D4FF" />
                  <stop offset="100%" stopColor="#0099CC" />
                </linearGradient>
                <linearGradient id="playGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFD500" />
                  <stop offset="100%" stopColor="#FF9500" />
                </linearGradient>
                <linearGradient id="playGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF4444" />
                  <stop offset="100%" stopColor="#CC0000" />
                </linearGradient>
                <linearGradient id="playGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00FF88" />
                  <stop offset="100%" stopColor="#00AA55" />
                </linearGradient>
              </defs>
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z" fill="url(#playGradient1)"/>
              <path d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z" fill="url(#playGradient2)"/>
              <path d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z" fill="url(#playGradient3)"/>
              <path d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" fill="url(#playGradient4)"/>
            </svg>
            
            <div className="text-white">
              <div className="text-xs font-light tracking-wide">GET IT ON</div>
              <div className="text-xl font-semibold -mt-1 tracking-tight">Google Play</div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default IntermediateCTA; 