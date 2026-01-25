
import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../../lib/constants';
import * as LucideIcons from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[1px] bg-cyan-400"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-cyan-400">Workflow / Pipeline</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold font-space leading-[0.9] tracking-tighter">
              Como Eu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Crio</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-sm text-sm font-light leading-relaxed mb-2"
          >
            Meu processo une a precisão do design pixel-perfect com a eficiência da inteligência artificial moderna.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, index) => {
            const IconName = step.icon as keyof typeof LucideIcons;
            const IconComponent = (LucideIcons[IconName] as any) || LucideIcons.Zap;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="group relative"
              >
                <div className={`absolute -inset-2 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-700`}></div>
                
                <div className="relative p-10 h-full glass-card rounded-[2.5rem] border border-white/5 hover:border-cyan-400/30 transition-all duration-700 overflow-hidden flex flex-col">
                  <div className="absolute top-8 right-8 text-[10px] font-mono text-white/10 group-hover:text-cyan-400/30 transition-colors font-bold tracking-widest">
                    0{index + 1}
                  </div>

                  <div className="mb-10 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 blur-xl rounded-full scale-150 group-hover:scale-[2] transition-transform duration-700`}></div>
                    <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-900 border border-white/5 group-hover:border-cyan-400/40 text-white/50 group-hover:text-cyan-400 transition-all duration-500">
                      <IconComponent size={30} strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 font-space text-white group-hover:translate-x-1 transition-transform">{step.title}</h3>
                  
                  <p className="text-white/40 leading-relaxed text-sm mb-8 font-light flex-grow">
                    {step.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                    {step.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[8px] font-mono uppercase tracking-widest text-white/30 group-hover:text-cyan-400/60 group-hover:border-cyan-400/10 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
