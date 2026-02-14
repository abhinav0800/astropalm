import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const SwipeIndicator = () => {
  return (
    <div className="flex items-center gap-2 text-white/20">
      <span className="text-[10px] font-bold uppercase tracking-widest">Swipe</span>
      <div className="flex">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ x: [0, 10, 0], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
          >
            <ChevronRight size={14} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SwipeIndicator;
