
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

// Omitimos as propriedades que conflitam entre os tipos nativos do React e do Framer Motion
interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "onDrag" | "onDragStart" | "onDragEnd" | "onDragOver"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  withCorners?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  withCorners = true,
  ...props 
}) => {
  return (
    <motion.div 
      {...(props as any)}
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
