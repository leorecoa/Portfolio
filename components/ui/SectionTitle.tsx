
import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ label, title, subtitle }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-cyan-400"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-400">{label}</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter">
          {title}
        </h2>
      </motion.div>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/40 max-w-sm text-sm font-light leading-relaxed mb-2"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
