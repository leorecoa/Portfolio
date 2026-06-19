import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TECH_STACK } from '../../lib/constants';
import { Code2, Container, Database, Github, Rocket, Server, Sparkles, Zap, type LucideIcon } from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  Code2,
  Container,
  Database,
  Github,
  Rocket,
  Server,
  Sparkles,
  Zap,
};

const TechStack: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const marqueeY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-40 border-y border-white/5 overflow-hidden bg-zinc-950/20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-20 relative z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <div className="w-8 md:w-12 h-px bg-cyan-400"></div>
            <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">Stack Tecnica</h2>
          </div>
          <h3 className="text-4xl md:text-7xl font-bold font-space">
            Ferramentas de <span className="text-white/40 italic">produto</span>
          </h3>
        </motion.div>
      </div>

      <motion.div style={{ y: marqueeY }} className="marquee relative z-10">
        <div className="marquee-content py-6 md:py-12" style={{ animationDuration: '60s' }}>
          {[...TECH_STACK, ...TECH_STACK].map((item, index) => {
            const IconComponent = ICONS[item.icon] || Code2;
            const category = item.name === 'Supabase' || item.name === 'PostgreSQL'
              ? 'DATA'
              : item.name === 'FastAPI' || item.name === 'Docker'
                ? 'BACKEND'
                : 'CORE DEV';

            return (
              <div key={index} className="px-4 md:px-10 group cursor-default">
                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  style={{
                    '--neon-color': item.color,
                  } as React.CSSProperties}
                  className="flex items-center gap-4 md:gap-8 p-6 md:p-10 glass-card rounded-2xl md:rounded-[3rem] border border-white/5 min-w-[240px] md:min-w-[360px] backdrop-blur-md transition-all duration-700 hover:border-[var(--neon-color)] hover:shadow-[0_0_40px_rgba(var(--neon-color-rgb),0.1)] group"
                >
                  <div
                    className="transition-all duration-700 transform group-hover:scale-125 group-hover:rotate-6"
                    style={{
                      color: item.color,
                      filter: `drop-shadow(0 0 10px ${item.color}44)`
                    }}
                  >
                    <IconComponent size={32} className="md:w-10 md:h-10" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-4xl font-space font-bold text-white/60 group-hover:text-white transition-colors tracking-tighter">
                      {item.name}
                    </span>
                    <span
                      className="text-[8px] md:text-[11px] font-mono uppercase tracking-widest mt-1 opacity-20 group-hover:opacity-100 transition-opacity font-bold"
                      style={{ color: item.color }}
                    >
                      {category}
                    </span>
                  </div>

                  <div className="absolute top-3 left-3 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }}></div>
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }}></div>
                  <div className="absolute bottom-3 left-3 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }}></div>
                  <div className="absolute bottom-3 right-3 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }}></div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
    </section>
  );
};

export default TechStack;
