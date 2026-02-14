import React from 'react';
import GlassCard from '../common/GlassCard';
import { Sparkles, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const LoveResult = ({ interpretation }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 px-2">
        <div className="p-2 rounded-lg bg-neon-pink/10 text-neon-pink">
          <Sparkles size={18} />
        </div>
        <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em]">The Oracle's Vision</h3>
      </div>

      <GlassCard className="border-neon-pink/20 bg-neon-pink/5">
        <div className="prose prose-invert prose-sm">
          <p className="text-white/80 leading-relaxed italic whitespace-pre-wrap">
            {interpretation}
          </p>
        </div>
        <div className="mt-6 flex justify-center">
          <Heart size={20} className="text-neon-pink/30" fill="currentColor" />
        </div>
      </GlassCard>
    </div>
  );
};

export default LoveResult;
