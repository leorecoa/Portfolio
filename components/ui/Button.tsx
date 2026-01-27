
import React, { useRef, useState } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary', 
  href,
  target
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  
  // High-fidelity magnetic physics - faster response
  const springConfig = { damping: 10, stiffness: 250, mass: 0.3 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Magnetic pull strength (optimized for feel)
    const moveX = (clientX - centerX) * 0.45;
    const moveY = (clientY - centerY) * 0.45;
    
    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const variants = {
    primary: {
      base: "text-white font-black",
      aura: "bg-cyan-500/30",
      glow: "rgba(34, 211, 238, 0.9)",
      border: "border-cyan-400/40",
      grad: "from-cyan-400 via-blue-600 to-cyan-500"
    },
    secondary: {
      base: "text-cyan-400 font-bold",
      aura: "bg-blue-500/10",
      glow: "rgba(34, 211, 238, 0.3)",
      border: "border-white/10",
      grad: "from-zinc-900 via-zinc-800 to-zinc-900"
    },
    ghost: {
      base: "text-white/40",
      aura: "bg-white/5",
      glow: "rgba(255, 255, 255, 0.1)",
      border: "border-transparent",
      grad: "from-transparent to-transparent"
    }
  };

  const config = variants[variant];

  const content = (
    <div className={`relative flex items-center justify-center gap-3 px-10 py-4 font-space uppercase tracking-[0.35em] text-[10px] z-30 transition-all duration-300 ${isHovered ? 'scale-110 text-white' : ''} ${config.base}`}>
      {/* Glitch Noise layer on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"
          />
        )}
      </AnimatePresence>
      
      {children}
    </div>
  );

  const containerClasses = `relative block overflow-hidden rounded-xl border transition-all duration-300 ${config.border} ${isHovered ? 'border-cyan-400' : ''} ${isPressed ? 'scale-95' : ''}`;

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      style={{ x, y }}
      className={`relative inline-block ${className}`}
    >
      {/* 1. Deep Radiant Aura (Fixed behind) */}
      <motion.div
        animate={{ 
          scale: isHovered ? [1, 1.3, 1.25] : 0.8,
          opacity: isHovered ? [0, 0.6, 0.4] : 0
        }}
        transition={{ duration: 0.4 }}
        className={`absolute -inset-8 ${config.aura} blur-[45px] rounded-full pointer-events-none z-0`}
      />

      {/* 2. Sharp Neon Focal Glow (Visible only on hover) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute -inset-2 bg-cyan-400/20 blur-[20px] rounded-xl pointer-events-none z-0 shadow-[0_0_40px_rgba(34,211,238,0.5)]"
          />
        )}
      </AnimatePresence>

      {/* 3. Main Button Core */}
      {href ? (
        <a 
          href={href} 
          target={target} 
          className={containerClasses}
          style={{ background: 'transparent' }}
        >
          {/* Animated Background Gradient */}
          <motion.div 
            animate={isHovered ? {
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className={`absolute inset-0 bg-gradient-to-r ${config.grad} bg-[length:200%_auto] z-10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-80'}`}
          />
          
          {/* Shockwave effect on click */}
          <AnimatePresence>
            {isPressed && (
              <motion.div 
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 4, opacity: 0 }}
                className="absolute inset-0 bg-white/40 rounded-full z-20 pointer-events-none"
              />
            )}
          </AnimatePresence>

          {content}
        </a>
      ) : (
        <button 
          onClick={onClick} 
          className={containerClasses}
        >
          <motion.div 
            animate={isHovered ? {
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className={`absolute inset-0 bg-gradient-to-r ${config.grad} bg-[length:200%_auto] z-10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-80'}`}
          />
          {content}
        </button>
      )}

      {/* 4. Cyberpunk Accent: Moving Light Bar */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 bottom-0 w-1/4 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-20 pointer-events-none"
          />
        )}
      </AnimatePresence>
      
      {/* 5. Edge Highlight Corners */}
      <AnimatePresence>
        {isHovered && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-300 z-40 drop-shadow-[0_0_8px_#22d3ee]" 
            />
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-300 z-40 drop-shadow-[0_0_8px_#22d3ee]" 
            />
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Button;
