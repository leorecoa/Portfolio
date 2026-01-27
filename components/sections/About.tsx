
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-4 overflow-hidden relative bg-zinc-950/40">
      {/* Dynamic Background Text - Fixed duplication feel */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-black text-white/[0.01] whitespace-nowrap pointer-events-none select-none uppercase tracking-tighter">
        DESIGNER • DEVELOPER • AI STRATEGIST • INNOVATOR
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              The Vision
            </div>
            <h2 className="text-4xl md:text-7xl font-bold mb-8 md:mb-10 leading-[1] md:leading-[0.9] tracking-tighter">
              Orquestrando o <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Futuro Digital</span>
            </h2>
            <div className="space-y-6 md:space-y-8 text-base md:text-lg text-white/50 leading-relaxed font-light">
              <p className="border-l-2 border-cyan-400/30 pl-4 md:pl-6 italic text-white/70">
                "A tecnologia não é apenas uma ferramenta, é uma extensão da nossa percepção e criatividade."
              </p>
              <p>
                Como desenvolvedor **AI-Native**, meu foco é transcender o código tradicional, utilizando modelos generativos para criar experiências que antecipam as necessidades dos usuários.
              </p>
              <p className="hidden md:block">
                Minha abordagem une a lógica rigorosa do desenvolvimento full-stack com a fluidez do design generativo, garantindo que cada interface seja única, performática e emocionalmente conectada.
              </p>
            </div>

            <div className="mt-10 md:mt-12 flex flex-wrap gap-8 md:gap-12">
              <div>
                <p className="text-2xl md:text-3xl font-bold font-space text-white">AI</p>
                <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/30 font-bold">Integrated</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold font-space text-white">Creative</p>
                <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/30 font-bold">Technologist</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold font-space text-white">Full</p>
                <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/30 font-bold">Stack Flow</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group mt-12 lg:mt-0"
          >
            <div className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 p-1 md:p-2 bg-gradient-to-br from-white/15 to-transparent shadow-2xl transition-all duration-700">
              <div className="w-full h-full rounded-[1.8rem] md:rounded-[2rem] overflow-hidden relative bg-black">
                <img 
                  src="https://avatars.githubusercontent.com/u/203870432?v=4" 
                  alt="Leandro Jesse Portrait" 
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
                
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
                  <p className="text-white text-2xl md:text-3xl font-space font-bold tracking-tighter">Leandro Jesse</p>
                  <p className="text-cyan-400 uppercase tracking-[0.2em] text-[8px] md:text-[10px] font-bold mt-1">Next-Gen Architect</p>
                </div>
              </div>
            </div>

            {/* AI Badge - Styled for Impact */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 md:-top-12 md:-right-12 w-32 h-32 md:w-48 md:h-48 glass-card rounded-[1.5rem] md:rounded-[2.5rem] flex items-center justify-center p-4 md:p-8 border border-cyan-400/40 shadow-2xl z-20 backdrop-blur-3xl"
            >
              <div className="text-center">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-cyan-400/20 flex items-center justify-center mx-auto mb-2 md:mb-4 border border-cyan-400/30">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_#22d3ee]"></div>
                </div>
                <p className="text-2xl md:text-4xl font-black font-space text-white leading-none tracking-tighter">AI</p>
                <p className="text-[7px] md:text-[10px] uppercase tracking-[0.1em] text-cyan-400/80 font-black">Powered</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
