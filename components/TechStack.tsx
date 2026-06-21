
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TECH_STACK } from '../constants';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const TechStack: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax offsets for different layers
  const backgroundY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const textLayerY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const marqueeY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]);

  return (
    <section 
      ref={containerRef}
      className="py-40 border-y border-white/5 overflow-hidden bg-zinc-950/20 relative"
    >
      {/* Parallax Decorative Background Text */}
      <motion.div 
        style={{ y: textLayerY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      >
        <span className="text-[30vw] font-black text-white/[0.01] uppercase leading-none">
          Stack
        </span>
      </motion.div>

      {/* Figma Workspace Decorations with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30 z-0"
      >
        <div className="absolute top-4 left-4 text-[10px] font-mono text-cyan-400/40">Canvas / Tech_Stack_V1</div>
        <div className="absolute top-10 left-0 w-full h-px bg-white/5"></div>
        <div className="absolute top-0 left-10 w-px h-full bg-white/5"></div>
        
        {/* Rulers */}
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute top-0" style={{ left: `${i * 100}px` }}>
            <div className="h-4 w-px bg-white/20"></div>
            <span className="text-[8px] text-white/10 ml-1 mt-1 block">{i * 100}</span>
          </div>
        ))}

        {/* Vertical Rulers */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="absolute left-0" style={{ top: `${i * 100}px` }}>
            <div className="w-4 h-px bg-white/20"></div>
            <span className="text-[8px] text-white/10 mt-1 ml-1 block">{i * 100}</span>
          </div>
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-px bg-cyan-400"></div>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">Environment / Tools</h2>
          </div>
          <h3 className="text-5xl md:text-7xl font-bold font-space leading-tight">
            Minha <span className="text-white/40 italic">Tech</span> Stack
          </h3>
        </motion.div>
      </div>
      
      {/* Marquee with Parallax Shift */}
      <motion.div 
        style={{ y: marqueeY }}
        className="marquee relative z-10"
      >
        <div className="marquee-content py-12">
          {[...TECH_STACK, ...TECH_STACK].map((item, index) => {
             const IconComponent = LucideIcons[item.icon as keyof typeof LucideIcons] as LucideIcon | undefined;
             const StackIcon = IconComponent || LucideIcons.Code2;
             return (
              <motion.div 
                key={index} 
                whileHover={{ 
                  y: -25, 
                  scale: 1.05,
                  rotateZ: 1.5
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="flex flex-col gap-3 px-10 group cursor-default"
              >
                <div className="flex items-center gap-8 p-10 glass-card rounded-3xl border border-white/5 transition-all duration-700 group-hover:border-cyan-400/50 group-hover:shadow-[0_40px_80px_rgba(34,211,238,0.25)] relative overflow-hidden backdrop-blur-md">
                  {/* Design Grid Overlay with animated opacity based on scroll */}
                  <motion.div 
                    style={{ opacity: gridOpacity }}
                    className="absolute inset-0 pointer-events-none bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:16px_16px]"
                  />

                  {/* Shimmer/Reflection Effect on Hover */}
                  <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <motion.div 
                      initial={{ x: '-100%', skewX: -20 }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent z-0"
                    />
                  </div>
                  
                  <div className="text-white/30 group-hover:text-cyan-400 transition-all duration-700 transform group-hover:scale-125 group-hover:rotate-12 z-10">
                    <StackIcon size={36} strokeWidth={1.5} />
                  </div>
                  
                  <div className="flex flex-col z-10">
                    <span className="text-3xl font-space font-bold text-white/70 group-hover:text-white transition-colors tracking-tight">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono text-white/20 group-hover:text-cyan-400/50 uppercase tracking-[0.2em] mt-1.5 font-bold">
                      {item.name === 'Figma' ? 'UI DESIGN' : 'DEVELOPMENT'}
                    </span>
                  </div>

                  {/* Corner Selection Handles (Figma Style) */}
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(34,211,238,0.8)] z-20"></div>
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(34,211,238,0.8)] z-20"></div>
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(34,211,238,0.8)] z-20"></div>
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(34,211,238,0.8)] z-20"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Static Background Glow (No parallax for consistency) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
    </section>
  );
};

export default TechStack;
