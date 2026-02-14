import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const NextButton = ({ onClick, isLast }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        relative h-16 px-8 rounded-2xl flex items-center justify-center gap-3 font-bold uppercase tracking-widest transition-all overflow-hidden
        ${isLast ? 'bg-gradient-button text-white w-full' : 'bg-white/5 border border-white/10 text-white w-16'}
      `}
    >
      {isLast ? (
        <>Start Alignment <ArrowRight size={20} /></>
      ) : (
        <ArrowRight size={24} />
      )}
      
      {isLast && (
        <motion.div 
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
        />
      )}
    </motion.button>
  );
};

export default NextButton;
