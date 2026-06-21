import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { CASE_STUDIES } from '../../lib/caseStudies';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';

const CaseStudies: React.FC = () => (
  <section id="case-studies" className="py-20 md:py-28 px-4 bg-zinc-950/30">
    <div className="max-w-7xl mx-auto">
      <SectionTitle
        label="Case Studies"
        title={<>Decisões técnicas <span className="text-cyan-400">em contexto</span></>}
        subtitle="Problemas reais, escolhas de arquitetura e o estado atual de cada implementação."
      />

      <div className="space-y-8">
        {CASE_STUDIES.map((caseStudy, index) => (
          <motion.article
            key={caseStudy.slug}
            id={`case-${caseStudy.slug}`}
            aria-labelledby={`case-title-${caseStudy.slug}`}
            className="scroll-mt-28"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <GlassCard hoverEffect={false} className="p-6 md:p-10 lg:p-12">
              <header className="border-b border-white/10 pb-8 mb-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">{caseStudy.status}</span>
                  <span className="text-xs font-mono text-white/50">0{index + 1}</span>
                </div>
                <h3 id={`case-title-${caseStudy.slug}`} className="text-3xl md:text-5xl font-bold font-space mb-4">
                  {caseStudy.title}
                </h3>
                <p className="max-w-3xl text-white/60 leading-relaxed">{caseStudy.subtitle}</p>
              </header>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-3">Problema</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{caseStudy.problem}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-3">Solução</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{caseStudy.solution}</p>
                </div>
              </div>

              <div className="mb-10">
                <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.stack.map(technology => (
                    <span key={technology} className="px-3 py-1.5 rounded-md border border-cyan-400/20 bg-cyan-400/5 text-[10px] font-bold text-cyan-400">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Principais funcionalidades</h4>
                  <ul className="space-y-3 text-sm text-white/60">
                    {caseStudy.highlights.map(highlight => <li key={highlight}>- {highlight}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Decisões técnicas</h4>
                  <ul className="space-y-3 text-sm text-white/60">
                    {caseStudy.technicalDecisions.map(decision => <li key={decision}>- {decision}</li>)}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/10 pt-8">
                <div className="max-w-3xl">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-3">Resultado atual</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{caseStudy.outcome}</p>
                </div>
                <a
                  href={caseStudy.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 hover:text-white transition-colors"
                >
                  View repository <ExternalLink aria-hidden="true" size={15} />
                </a>
              </div>
            </GlassCard>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
