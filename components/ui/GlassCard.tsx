
import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  withCorners?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  withCorners = true 
}) => {
  return (
    <div className={`relative glass-card rounded-[2.5rem] border border-white/5 transition-all duration-700 overflow-hidden ${hoverEffect ? 'hover:border-cyan-400/30' : ''} ${className}`}>
      {children}
      
      {withCorners && (
        <>
          <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(34,211,238,0.8)] z-20"></div>
          <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(34,211,238,0.8)] z-20"></div>
          <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(34,211,238,0.8)] z-20"></div>
          <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(34,211,238,0.8)] z-20"></div>
        </>
      )}
    </div>
  );
};

export default GlassCard;
