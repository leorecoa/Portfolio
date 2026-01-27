
import React from 'react';
import { motion, useTransform } from 'framer-motion';
import Button from '../ui/Button';
import { Github, ArrowRight } from 'lucide-react';
import { useMousePosition } from '../../hooks/useMousePosition';

const Hero: React.FC = () => {
  const { mouseX, mouseY } = useMousePosition();

  const contentX = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  const contentY = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]); 
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const githubUrl = "https://github.com/leorecoa";

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-6 pt-24 md:pt-20"
      style={{ perspective: '1200px' }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.05, 0.07, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] md:w-[110vw] md:h-[110vw] bg-cyan-500/10 blur-[120px] rounded-full will-change-transform"
        />
      </div>

      <motion.div 
        style={{ 
          x: contentX, 
          y: contentY, 
          rotateX, 
          rotateY, 
          transformStyle: 'preserve-3d',
          willChange: 'transform'
        }}
        className="relative z-10 max-w-6xl w-full text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 md:mb-8"
        >
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-cyan-400 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            AI-Assisted Experience
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[15vw] sm:text-[12vw] md:text-[8vw] font-black leading-[0.85] md:leading-[0.8] tracking-tighter mb-8 md:mb-10 text-white"
          style={{ transform: 'translateZ(60px)' }}
        >
          LEANDRO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            JESSE
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/40 text-base md:text-xl max-w-2xl mx-auto mb-12 md:mb-16 font-light leading-relaxed px-4"
          style={{ transform: 'translateZ(40px)' }}
        >
          Orquestrando inteligência artificial para criar interfaces que parecem ter vindo de um futuro próximo.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 px-4"
          style={{ transform: 'translateZ(50px)' }}
        >
          <Button variant="primary" href="#projects" className="w-full sm:w-auto">
            Projetos <ArrowRight size={14} strokeWidth={3} className="ml-1" />
          </Button>
          <Button variant="secondary" href={githubUrl} target="_blank" className="w-full sm:w-auto">
            <Github size={14} className="mr-1" /> Repositórios
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
