import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const HeartAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: "110%", 
            scale: Math.random() * 0.5 + 0.5,
            opacity: 0 
          }}
          animate={{ 
            y: "-10%",
            opacity: [0, 0.4, 0],
            rotate: [0, 45, -45, 0]
          }}
          transition={{ 
            duration: 10 + Math.random() * 10, 
            repeat: Infinity, 
            delay: i * 3,
            ease: "linear"
          }}
          className="absolute text-neon-pink/10"
        >
          <Heart size={48} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
};

export default HeartAnimation;
