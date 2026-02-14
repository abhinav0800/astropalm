import React from 'react';
import { motion } from 'framer-motion';

const OnboardingProgress = ({ total, current }) => {
  return (
    <div className="flex gap-2">
      {[...Array(total)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            width: current === i ? 32 : 8,
            backgroundColor: current === i ? "#00f5ff" : "rgba(255,255,255,0.1)"
          }}
          className="h-1.5 rounded-full transition-all duration-500"
        />
      ))}
    </div>
  );
};

export default OnboardingProgress;
