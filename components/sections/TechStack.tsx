
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TECH_STACK } from '../../lib/constants';
import * as LucideIcons from 'lucide-react';

const TechStack: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const marqueeY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <section 
      ref={containerRef}
      className="py-20 md:py-40 border-y border-white/5 overflow-hidden bg-zinc-950/20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-20 relative z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
            <div className="w-8 md:w-12 h-px bg-cyan-400"></div>
            <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">Environment</h2>
          </div>
          <h3 className="text-4xl md:text-7xl font-bold font-space">
            Minha <span className="text-white/40 italic">Tech</span> Stack
          </h3>
        </motion.div>
      </div>
      
      <motion.div style={{ y: marqueeY }} className="marquee relative z-10">
        <div className="marquee-content py-6 md:py-12">
          {[...TECH_STACK, ...TECH_STACK].map((item, index) => {
             const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.Code2;
             return (
              <div key={index} className="px-4 md:px-10 group cursor-default">
                <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }}
                  style={{ 
                    '--neon-color': item.color,
                  } as React.CSSProperties}
                  className="flex items-center gap-4 md:gap-8 p-6 md:p-10 glass-card rounded-2xl md:rounded-3xl border border-white/5 min-w-[200px] md:min-w-[320px] backdrop-blur-md transition-all duration-500 hover:border-[var(--neon-color)] hover:shadow-[0_0_30px_rgba(var(--neon-color-rgb),0.2)]"
                >
                  <div 
                    className="transition-all duration-500 transform group-hover:scale-110"
                    style={{ 
                      color: item.color,
                      filter: `drop-shadow(0 0 8px ${item.color}66)` 
                    }}
                  >
                    <IconComponent size={28} className="md:w-9 md:h-9" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl md:text-3xl font-space font-bold text-white/70 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    <span 
                      className="text-[7px] md:text-[10px] font-mono uppercase tracking-widest mt-1 opacity-40 group-hover:opacity-100 transition-opacity"
                      style={{ color: item.color }}
                    >
                      {item.name === 'Figma' || item.name === 'Tailwind CSS' ? 'DESIGN & UI' : 'DEVELOPMENT'}
                    </span>
                  </div>

                  {/* Handles Estilo Figma Coloridos */}
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }}></div>
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }}></div>
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }}></div>
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }}></div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;
