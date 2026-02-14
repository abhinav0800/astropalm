import React from 'react';
import { motion } from 'framer-motion';

const SkipButton = ({ onClick }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="text-white/40 font-bold text-[10px] uppercase tracking-[0.3em] py-2 px-4"
    >
      Skip Journey
    </motion.button>
  );
};

export default SkipButton;
