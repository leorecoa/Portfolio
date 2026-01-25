
import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK } from '../constants';
import * as LucideIcons from 'lucide-react';

const TechStack: React.FC = () => {
  return (
    <section className="py-32 border-y border-white/5 overflow-hidden bg-zinc-950/20 relative">
      {/* Figma Workspace Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-4 left-4 text-[10px] font-mono text-cyan-400/40">Canvas / Tech_Stack_V1</div>
        <div className="absolute top-10 left-0 w-full h-px bg-white/5"></div>
        <div className="absolute top-0 left-10 w-px h-full bg-white/5"></div>
        {/* Rulers */}
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute top-0" style={{ left: `${i * 100}px` }}>
            <div className="h-2 w-px bg-white/20"></div>
            <span className="text-[8px] text-white/10 ml-1">{i * 100}</span>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-16 relative z-10">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-px bg-cyan-400"></div>
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">Environment / Tools</h2>
        </div>
        <h3 className="text-4xl md:text-5xl font-bold font-space">
          Minha <span className="text-white/40 italic">Tech</span> Stack
        </h3>
      </div>
      
      <div className="marquee relative">
        <div className="marquee-content py-10">
          {[...TECH_STACK, ...TECH_STACK].map((item, index) => {
             const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.Code2;
             return (
              <motion.div 
                key={index} 
                whileHover={{ y: -10 }}
                className="flex flex-col gap-2 px-10 group cursor-default"
              >
                {/* Figma Component Label */}
                <div className="flex justify-between items-center px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[8px] font-mono text-cyan-400 bg-cyan-400/10 px-1 rounded">Frame {index}</span>
                  <span className="text-[8px] font-mono text-white/20">X: {Math.floor(Math.random() * 1000)} Y: 420</span>
                </div>

                <div className="flex items-center gap-6 p-8 glass-card rounded-2xl border border-white/5 transition-all duration-500 group-hover:border-cyan-400/50 group-hover:shadow-[0_20px_40px_rgba(34,211,238,0.1)] relative overflow-hidden">
                  {/* Design Grid Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 pointer-events-none bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:10px_10px]"></div>
                  
                  <div className="text-white/30 group-hover:text-cyan-400 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                    <IconComponent size={32} />
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-3xl font-space font-bold text-white/60 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono text-white/20 group-hover:text-cyan-400/40 uppercase tracking-widest mt-1">
                      {item.name === 'Figma' ? '#F24E1E' : '#FFFFFF'}
                    </span>
                  </div>

                  {/* Corner Markers */}
                  <div className="absolute top-2 left-2 w-1 h-1 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-2 right-2 w-1 h-1 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default TechStack;
