import React from 'react';
import { motion } from 'framer-motion';

const OnboardingSlide = ({ title, description, image, color }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Dynamic Background Glow */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 w-64 h-64 blur-[100px] rounded-full"
        style={{ backgroundColor: color }}
      />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-xs aspect-square mb-12"
      >
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center px-6"
      >
        <h2 className="text-3xl font-bold text-white mb-4 leading-tight">{title}</h2>
        <p className="text-white/50 text-base leading-relaxed">{description}</p>
      </motion.div>
    </div>
  );
};

export default OnboardingSlide;
