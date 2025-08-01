"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const FloatingLogo = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="relative mb-12"
  >
    <motion.div
      animate={{ 
        rotate: [0, 5, -5, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{ 
        duration: 6, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="relative w-32 h-32 mx-auto drop-shadow-2xl"
    >
      <Image
        src="/images/sportmeetlogooficial2.png"
        alt="SportMeet Logo"
        fill
        className="object-contain filter drop-shadow-lg"
        priority
      />
    </motion.div>
  </motion.div>
);

export default FloatingLogo; 