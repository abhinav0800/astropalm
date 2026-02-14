import React from 'react';
import { MessageCircle, Star, Compass } from 'lucide-react';
import GlassCard from '../common/GlassCard';

const RelationshipAdvice = () => {
  const tips = [
    { icon: MessageCircle, text: "Open dialogue will resolve recent minor frictions.", color: "text-neon-blue" },
    { icon: Star, text: "A shared creative activity will deepen your connection.", color: "text-neon-cyan" },
    { icon: Compass, text: "Trust your shared intuition when making house decisions.", color: "text-neon-purple" }
  ];

  return (
    <div className="space-y-4">
      <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] px-2">Path to Harmony</h4>
      <div className="space-y-3">
        {tips.map((tip, i) => (
          <GlassCard key={i} className="py-3 px-4 flex items-center gap-4 border-white/5">
            <tip.icon size={18} className={tip.color} />
            <p className="text-xs text-white/70">{tip.text}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default RelationshipAdvice;
