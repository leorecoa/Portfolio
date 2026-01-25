
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

// Omitimos as propriedades que conflitam entre os tipos nativos do React e do Framer Motion
interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "onDrag" | "onDragStart" | "onDragEnd" | "onDragOver"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  withCorners?: boolean;
  enableSound?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  withCorners = true,
  enableSound = true,
  onMouseEnter,
  ...props 
}) => {
  const playHoverSound = () => {
    if (!enableSound) return;
    
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      // Configuração para um "blip" futurista sutil (Tech Chirp)
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.05);
      
      gain.gain.setValueAtTime(0.015, ctx.currentTime); // Volume bem baixo (1.5%)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (error) {
      // Falha silenciosa caso o navegador bloqueie o áudio
    }
  };

  return (
    <motion.div 
      {...(props as any)}
      onMouseEnter={(e) => {
        playHoverSound();
        onMouseEnter?.(e);
      }}
      className={`relative glass-card rounded-[2.5rem] border border-white/5 transition-all duration-700 overflow-hidden ${hoverEffect ? 'hover:border-cyan-400/30' : ''} ${className}`}
    >
      {children}
      
      {withCorners && (
        <div className="pointer-events-none">
          <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(34,211,238,0.8)] z-20"></div>
          <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(34,211,238,0.8)] z-20"></div>
          <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(34,211,238,0.8)] z-20"></div>
          <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(34,211,238,0.8)] z-20"></div>
        </div>
      )}
    </motion.div>
  );
};

export default GlassCard;
