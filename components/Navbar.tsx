'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#F9FAFB]/95 dark:bg-[#1F2937]/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo oficial animado */}
          <Link href="/" className="flex items-center group h-full">
            <motion.div 
              className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center -ml-2"
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.6, ease: "easeInOut" }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/images/sportmeetlogooficial2.png"
                alt="SportMeet Logo"
                fill
                className="object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.32)]"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation con animaciones */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: "#inicio", text: "Inicio" },
              { href: "#como-funciona", text: "Cómo funciona" },
              { href: "#funcionalidades", text: "Funcionalidades" },
              { href: "#faq", text: "FAQ" }
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -2 }}
                className="relative"
              >
                <Link 
                  href={item.href} 
                  className="text-[#111827] dark:text-white hover:text-[#FF1E1E] transition-all duration-300 font-medium relative group"
                >
                  {item.text}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF1E1E] group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Botones animados */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button 
              onClick={toggleTheme}
              whileHover={{ 
                scale: 1.1, 
                rotate: 180,
                boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-[#111827] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 relative overflow-hidden group"
            >
              <motion.svg 
                className={`w-5 h-5 transition-transform duration-300 ${theme === 'light' ? 'rotate-0' : 'rotate-180'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ rotate: theme === 'light' ? 0 : 180 }}
                transition={{ duration: 0.5 }}
              >
                {theme === 'light' ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                )}
              </motion.svg>
            </motion.button>
            
            <motion.button 
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 12px 30px rgba(255, 30, 30, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-[#FF1E1E] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#DC2626] transition-all duration-300 relative overflow-hidden group"
            >
              <motion.span
                className="relative z-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                Descargar App
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#DC2626] to-[#FF1E1E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>

          {/* Mobile menu button animado */}
          <motion.button
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-xl text-[#111827] dark:text-white hover:text-[#FF1E1E] hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-all duration-300"
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                initial={false}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.svg>
          </motion.button>
        </div>

        {/* Mobile Navigation animado */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-[#F9FAFB]/95 dark:bg-[#1F2937]/95 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {[
                  { href: "#inicio", text: "Inicio" },
                  { href: "#como-funciona", text: "Cómo funciona" },
                  { href: "#funcionalidades", text: "Funcionalidades" },
                  { href: "#faq", text: "FAQ" }
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-[#111827] dark:text-white hover:text-[#FF1E1E] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-300 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.text}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="px-4 py-3 flex items-center justify-between"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <motion.button 
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-[#111827] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                  >
                    <motion.svg 
                      className={`w-5 h-5 transition-transform duration-300 ${theme === 'light' ? 'rotate-0' : 'rotate-180'}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ rotate: theme === 'light' ? 0 : 180 }}
                    >
                      {theme === 'light' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      )}
                    </motion.svg>
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#FF1E1E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#DC2626] transition-all duration-300"
                  >
                    Descargar App
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
} 