import React from 'react';
import { cn } from '../../lib/utils';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, enableTilt = true, style, onMouseMove, onMouseLeave, ...props }, ref) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Física da mola para suavizar o movimento (stiffness/damping)
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    // Transformações: inclinação inversa ao movimento do mouse
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]);

    // Brilho dinâmico que segue o mouse
    const shineOpacity = useTransform(mouseX, [-0.5, 0.5], [0, 0.3]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!enableTilt) {
        onMouseMove?.(e);
        return;
      }
      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseXFromCenter = e.clientX - rect.left - width / 2;
      const mouseYFromCenter = e.clientY - rect.top - height / 2;

      x.set(mouseXFromCenter / width);
      y.set(mouseYFromCenter / height);
      onMouseMove?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!enableTilt) {
        onMouseLeave?.(e);
        return;
      }
      x.set(0);
      y.set(0);
      onMouseLeave?.(e);
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          "bg-white/[0.02] backdrop-blur-md border border-white/5 relative overflow-hidden",
          className
        )}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1000, // Essencial para o efeito 3D
          rotateX: enableTilt ? rotateX : 0,
          rotateY: enableTilt ? rotateY : 0,
          transformStyle: "preserve-3d",
          ...style, // Mantém estilos passados pelo pai (App.tsx)
        }}
        {...props}
      >
        {/* Conteúdo com elevação Z para profundidade */}
        <div style={{ transform: "translateZ(20px)" }} className="relative z-10">
          {children}
        </div>

        {/* Efeito de brilho (Shine) */}
        <motion.div
          className="absolute inset-0 z-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none"
          style={{ opacity: shineOpacity }}
        />
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;