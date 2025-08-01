"use client";

import { motion } from 'framer-motion';

const ParticleSystem = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    delay: Math.random() * 2,
    duration: 12 + Math.random() * 8,
    distance: 150 + Math.random() * 200,
    opacity: 0.4 + Math.random() * 0.4,
    startAngle: Math.random() * Math.PI * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/70 to-purple-500/70"
          style={{
            width: particle.size,
            height: particle.size,
            left: '50%',
            top: '25%',
            opacity: particle.opacity,
          }}
          animate={{
            rotate: 360,
            x: [
              Math.cos(particle.startAngle) * particle.distance,
              Math.cos(particle.startAngle + Math.PI / 2) * particle.distance,
              Math.cos(particle.startAngle + Math.PI) * particle.distance,
              Math.cos(particle.startAngle + (3 * Math.PI) / 2) * particle.distance,
              Math.cos(particle.startAngle + 2 * Math.PI) * particle.distance,
            ],
            y: [
              Math.sin(particle.startAngle) * particle.distance,
              Math.sin(particle.startAngle + Math.PI / 2) * particle.distance,
              Math.sin(particle.startAngle + Math.PI) * particle.distance,
              Math.sin(particle.startAngle + (3 * Math.PI) / 2) * particle.distance,
              Math.sin(particle.startAngle + 2 * Math.PI) * particle.distance,
            ],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleSystem; 