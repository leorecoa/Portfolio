
import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Process from './components/sections/Process';
import Projects from './components/sections/Projects';
import TechStack from './components/sections/TechStack';
import Contact from './components/sections/Contact';
import ParticleBackground from './components/effects/ParticleBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings2, MousePointer2 } from 'lucide-react';

const App: React.FC = () => {
  const [radius, setRadius] = useState(150);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="relative min-h-screen">
      <ParticleBackground interactionRadius={radius} />

      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Process />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      <div className="fixed bottom-10 right-10 z-[110] flex flex-col items-end gap-4">
        <AnimatePresence>
          {showSettings && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              className="glass-card p-6 rounded-3xl mb-2 w-64 border border-cyan-400/20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2 mb-4 text-cyan-400">
                <MousePointer2 size={16} />
                <span className="text-xs font-bold uppercase tracking-widest font-space">Particle Interaction</span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-[10px] text-white/40 uppercase font-bold tracking-tighter">
                  <span>Radius</span>
                  <span className="text-cyan-400">{radius}px</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="400"
                  step="10"
                  value={radius}
                  onChange={(e) => setRadius(parseInt(e.target.value))}
                  className="w-full accent-cyan-400 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setShowSettings(!showSettings)}
          className={`p-4 rounded-full glass-card border transition-all duration-300 ${showSettings ? 'bg-cyan-400 text-black border-cyan-400' : 'text-white/40 border-white/10 hover:border-cyan-400/50 hover:text-white'}`}
        >
          <Settings2 size={24} className={showSettings ? 'animate-spin-slow' : ''} />
        </button>
      </div>

      <div className="fixed bottom-10 left-10 z-50 hidden lg:block">
        <div className="flex flex-col gap-4">
          <div className="h-32 w-px bg-gradient-to-t from-cyan-400 to-transparent"></div>
          <span className="rotate-90 origin-left text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-400/50">
            Developer / Designer
          </span>
        </div>
      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default App;
