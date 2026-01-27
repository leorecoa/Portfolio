
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
  
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const moveX = (clientX - centerX) * 0.4;
    const moveY = (clientY - centerY) * 0.4;
    
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
      base: "bg-white text-black border-transparent",
      glow: "rgba(34, 211, 238, 0.6)",
      spinner: "from-cyan-400 via-purple-500 to-blue-600",
      innerBg: "bg-white"
    },
    secondary: {
      base: "bg-transparent border border-white/10 text-white",
      glow: "rgba(34, 211, 238, 0.3)",
      spinner: "from-cyan-400 via-transparent to-cyan-400",
      innerBg: "bg-[#030303]"
    },
    ghost: {
      base: "bg-transparent border-transparent text-white/40",
      glow: "rgba(255, 255, 255, 0.1)",
      spinner: "from-white/20 via-transparent to-transparent",
      innerBg: "bg-transparent"
    }
  };

  const currentVariant = variants[variant];

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={`relative inline-block group ${className}`}
    >
      {/* Animated Background Glow Pulse */}
      <AnimatePresence>
        {(isHovered || variant === 'primary') && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isHovered ? 1 : 0.3, 
              scale: isHovered ? 1.1 : 1,
              boxShadow: isHovered 
                ? `0 0 40px ${currentVariant.glow}, 0 0 15px ${currentVariant.glow}` 
                : `0 0 20px ${currentVariant.glow}`
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.4, 
              boxShadow: { duration: 1.5, repeat: Infinity, repeatType: "reverse" } 
            }}
            className="absolute inset-0 rounded-full blur-md z-0"
          />
        )}
      </AnimatePresence>

      {/* Rotating Laser Border */}
      <AnimatePresence>
        {isHovered && variant !== 'ghost' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute -inset-[2.5px] rounded-full overflow-hidden z-0"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              className={`w-full h-full bg-gradient-to-tr ${currentVariant.spinner} scale-[2.5] origin-center opacity-100`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button Body */}
      {href ? (
        <a 
          href={href} 
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className={`block rounded-full relative overflow-hidden transition-all duration-500 ${currentVariant.base}`}
        >
          <div className={`absolute inset-[1.5px] rounded-full z-[1] ${currentVariant.innerBg}`} />
          
          {/* Scanning Light Effect */}
          <motion.div 
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent skew-x-12 z-[2] pointer-events-none"
          />

          <div className="relative flex items-center justify-center gap-3 px-8 py-3.5 font-space font-bold uppercase tracking-[0.25em] text-[10px] z-10 whitespace-nowrap">
            {children}
          </div>
        </a>
      ) : (
        <button 
          onClick={onClick} 
          className={`block w-full rounded-full relative overflow-hidden transition-all duration-500 ${currentVariant.base}`}
        >
          <div className={`absolute inset-[1.5px] rounded-full z-[1] ${currentVariant.innerBg}`} />
          
          <motion.div 
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent skew-x-12 z-[2] pointer-events-none"
          />

          <div className="relative flex items-center justify-center gap-3 px-8 py-3.5 font-space font-bold uppercase tracking-[0.25em] text-[10px] z-10 whitespace-nowrap">
            {children}
          </div>
        </button>
      )}

      {/* Hover Particles Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none z-[3]"
          >
            <div className="absolute top-0 left-1/4 w-px h-full bg-cyan-400/10" />
            <div className="absolute top-0 right-1/4 w-px h-full bg-cyan-400/10" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Button;
