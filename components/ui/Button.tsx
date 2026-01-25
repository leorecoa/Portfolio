
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
  
  const springConfig = { damping: 15, stiffness: 150, mass: 0.6 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const moveX = (clientX - centerX) * 0.35;
    const moveY = (clientY - centerY) * 0.35;
    
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
      hover: "shadow-[0_0_30px_rgba(34,211,238,0.4)]",
      spinner: "from-cyan-400 via-blue-500 to-transparent"
    },
    secondary: {
      base: "bg-transparent border border-white/10 text-white",
      hover: "border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.15)]",
      spinner: "from-cyan-400 via-transparent to-transparent"
    },
    ghost: {
      base: "bg-transparent border-transparent text-white/40",
      hover: "text-white",
      spinner: "from-white/20 via-transparent to-transparent"
    }
  };

  const currentVariant = variants[variant];

  const buttonInner = (
    <div className="relative flex items-center justify-center gap-3 px-8 py-3.5 font-space font-bold uppercase tracking-[0.2em] text-[10px] z-10 whitespace-nowrap">
      {children}
    </div>
  );

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={`relative inline-block group ${className}`}
    >
      <AnimatePresence>
        {isHovered && variant !== 'ghost' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute -inset-[2px] rounded-full overflow-hidden z-0"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className={`w-full h-full bg-gradient-to-r ${currentVariant.spinner} opacity-100 scale-[2] origin-center`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {href ? (
        <a 
          href={href} 
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className={`block rounded-full relative overflow-hidden transition-all duration-500 ${currentVariant.base} ${isHovered ? currentVariant.hover : ''}`}
        >
          <div className={`absolute inset-[1px] rounded-full z-[1] ${variant === 'primary' ? 'bg-white' : 'bg-[#030303]'}`} />
          {buttonInner}
          {isHovered && variant === 'primary' && (
             <motion.div 
               className="absolute inset-0 bg-cyan-400/10 mix-blend-overlay z-[2]" 
             />
          )}
        </a>
      ) : (
        <button 
          onClick={onClick} 
          className={`block w-full rounded-full relative overflow-hidden transition-all duration-500 ${currentVariant.base} ${isHovered ? currentVariant.hover : ''}`}
        >
          <div className={`absolute inset-[1px] rounded-full z-[1] ${variant === 'primary' ? 'bg-white' : 'bg-[#030303]'}`} />
          {buttonInner}
        </button>
      )}
    </motion.div>
  );
};

export default Button;
