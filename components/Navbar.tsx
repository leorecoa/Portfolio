
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ];

  const githubUrl = "https://github.com/leorecoa";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass-card rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-black/60 shadow-lg border-white/10 backdrop-blur-md' : 'bg-transparent border-transparent'}`}>
          <a href="#home" className="text-2xl font-space font-bold tracking-tighter group flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-xs group-hover:rotate-12 transition-transform shadow-lg shadow-cyan-500/20">LJ</div>
            <span className="hidden sm:inline">LEANDRO<span className="text-cyan-400">JESSE</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs font-bold text-white/40 hover:text-cyan-400 transition-colors uppercase tracking-[0.2em]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button 
              variant="secondary" 
              href={githubUrl} 
              target="_blank"
              className="scale-90"
            >
              <Github size={12} className="mr-1" /> Github
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-x-6 top-24 z-[90] glass-card rounded-3xl p-8 shadow-2xl overflow-hidden backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-space font-bold hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                variant="primary" 
                href={githubUrl} 
                target="_blank"
                className="w-full"
              >
                <Github size={16} /> GitHub Profile
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
