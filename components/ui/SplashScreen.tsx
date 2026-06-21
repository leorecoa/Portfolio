
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const STATUS_MESSAGES = [
  'CALIBRATING_NEURAL_NETS...',
  'SYNCING_DESIGN_UNITS...',
  'INJECTING_NEON_ASSETS...',
  'ORCHESTRATING_AI_FLOW...',
  'SYSTEM_READY'
];

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('INITIALIZING_CORE');
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        const next = prev + Math.random() * 15;
        
        // Update status messages based on progress
        const messageIndex = Math.floor((next / 100) * STATUS_MESSAGES.length);
        if (STATUS_MESSAGES[messageIndex]) {
          setStatus(STATUS_MESSAGES[messageIndex]);
        }
        
        return next > 100 ? 100 : next;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        filter: 'blur(20px)',
        transition: { duration: 0.8, ease: [0.7, 0, 0.3, 1] }
      }}
      className="fixed inset-0 z-[1000] bg-[#030303] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Tech Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay" />
      </div>

      {/* Scanning Line */}
      <motion.div 
        animate={{ y: ['-100%', '1000%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#22d3ee] z-10"
      />

      {/* Central Logo Experience */}
      <div className="relative mb-12">
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-20 w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.4)] border border-cyan-300/30"
        >
          <span className="text-4xl md:text-5xl font-space font-black text-white tracking-tighter">LJ</span>
          
          {/* Neon Orbitals */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-6 border-2 border-dashed border-cyan-400/20 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-12 border border-cyan-400/10 rounded-full"
          />
        </motion.div>
        
        {/* Glow behind logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 blur-[80px] -z-10 rounded-full animate-pulse" />
      </div>

      {/* Loading Information */}
      <div className="w-full max-w-xs px-4">
        <div className="flex justify-between items-end mb-3">
          <motion.span 
            key={status}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[10px] font-mono font-bold text-cyan-400/80 tracking-widest"
          >
            {status}
          </motion.span>
          <span className="text-[10px] font-mono font-bold text-white/40">
            {Math.floor(progress)}%
          </span>
        </div>
        
        {/* Modern Progress Bar */}
        <div className="h-[2px] w-full bg-white/5 relative overflow-hidden rounded-full">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"
            style={{ width: `${progress}%` }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          />
        </div>

        {/* Data Stream Simulation */}
        <div className="mt-8 grid grid-cols-4 gap-1">
          {[...Array(16)].map((_, i) => (
            <motion.div 
              key={i}
              animate={{ 
                opacity: [0.1, 0.4, 0.1],
                backgroundColor: Math.random() > 0.8 ? '#22d3ee' : 'rgba(255,255,255,0.05)'
              }}
              transition={{ duration: Math.random() * 2 + 1, repeat: Infinity }}
              className="h-1 rounded-full"
            />
          ))}
        </div>
      </div>

      {/* Decorative Text Bottom */}
      <div className="absolute bottom-10 text-[9px] font-mono text-white/20 uppercase tracking-[0.5em] font-bold">
        Leandro Jesse • Neural Interface V2.5
      </div>
    </motion.div>
  );
};

export default SplashScreen;
