
import React, { useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import Button from './Button';
import { Github, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const springConfig = { damping: 30, stiffness: 80, mass: 0.8 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth) - 0.5);
      mouseY.set((clientY / innerHeight) - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const contentX = useTransform(mouseX, [-0.5, 0.5], [-45, 45]);
  const contentY = useTransform(mouseY, [-0.5, 0.5], [-45, 45]);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [14, -14]); 
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-14, 14]);
  const shadowX = useTransform(mouseX, [-0.5, 0.5], [25, -25]);
  const shadowY = useTransform(mouseY, [-0.5, 0.5], [25, -25]);

  const githubUrl = "https://github.com/leorecoa";

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20"
      style={{ perspective: '1400px' }}
    >
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.12, 1],
            opacity: [0.06, 0.09, 0.06],
            x: ['-50%', '-48.5%', '-50%'],
          }}
          transition={{ duration: 28, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[110vw] bg-cyan-500/10 blur-[180px] rounded-full"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay"></div>
      </div>

      <motion.div 
        style={{ 
          x: contentX, 
          y: contentY, 
          rotateX, 
          rotateY, 
          transformStyle: 'preserve-3d',
          filter: `drop-shadow(${shadowX}px ${shadowY}px 45px rgba(0,0,0,0.45))`
        }}
        className="relative z-10 max-w-6xl w-full text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-400 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            AI-Assisted Experience
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[13vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter mb-10 text-white drop-shadow-xl"
          style={{ transform: 'translateZ(80px)' }}
        >
          LEANDRO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            JESSE
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white/40 text-lg md:text-xl max-w-3xl mx-auto mb-16 font-light leading-relaxed px-4"
          style={{ transform: 'translateZ(50px)' }}
        >
          Orquestrando inteligência artificial para criar interfaces que parecem ter vindo de um futuro próximo.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative inline-flex flex-col sm:flex-row items-center justify-center gap-8 p-4 rounded-[3rem]"
          style={{ transform: 'translateZ(70px)' }}
        >
          <Button variant="primary" href="#projects">
            Projetos <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="secondary" href={githubUrl} target="_blank">
            <Github size={14} className="group-hover:rotate-12 transition-transform" /> Repositórios
          </Button>
          
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-400/30"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-400/30"></div>
        </motion.div>
      </motion.div>

      <motion.div 
        style={{ 
          x: useTransform(mouseX, [-0.5, 0.5], [-80, 80]), 
          y: useTransform(mouseY, [-0.5, 0.5], [-80, 80]),
          opacity: useTransform(mouseX, [-0.5, 0.5], [0.08, 0.25])
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-400/5 blur-[120px] rounded-full pointer-events-none z-0"
      />
    </section>
  );
};

export default Hero;
