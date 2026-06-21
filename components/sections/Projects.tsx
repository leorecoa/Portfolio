import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, GitFork, ArrowUpRight } from 'lucide-react';
import { useGithubRepos } from '../../hooks/useGithubRepos';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';

const Projects: React.FC = () => {
  const username = "leorecoa";
  const { repos, loading } = useGithubRepos(username);

  return (
    <section id="projects" className="py-20 md:py-24 px-4 relative bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="Selected Works"
          title={<>Projetos <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/40 to-white/10 italic">reais</span></>}
          subtitle="Sistemas desenvolvidos com foco em arquitetura clara, regras de negocio, controle de acesso e experiencia de uso."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {loading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} className="aspect-[4/5] rounded-[2rem] bg-white/[0.02] border border-white/5 animate-pulse" />
              ))
            ) : (
              repos.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group h-full"
                >
                  <GlassCard className="aspect-[4/5] p-6 md:p-10 flex flex-col justify-end min-h-[480px] h-full">
                    <div className="absolute inset-0 z-0">
                      <img
                        src={project.image}
                        alt={`Imagem representando o projeto ${project.title}`}
                        className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
                    </div>

                    <div className="relative z-20 transition-transform duration-500 group-hover:translate-y-[-8px]">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-[8px] font-bold uppercase tracking-widest text-cyan-400 border border-cyan-400/20">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold font-space text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs md:text-sm text-white/60 line-clamp-3 mb-8 font-light leading-relaxed group-hover:text-white/70 transition-colors">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between pt-5 border-t border-white/10">
                        <div className="flex gap-4">
                          {project.stars !== undefined && project.stars > 0 && (
                            <div className="flex items-center gap-1.5 text-white/50 text-[9px] font-bold">
                              <Star aria-hidden="true" size={10} className="text-amber-400" />
                              {project.stars}
                            </div>
                          )}
                          {project.forks !== undefined && project.forks > 0 && (
                            <div className="flex items-center gap-1.5 text-white/50 text-[9px] font-bold">
                              <GitFork aria-hidden="true" size={10} className="text-cyan-400" />
                              {project.forks}
                            </div>
                          )}
                          <div className="flex items-center gap-1.5 text-white/50 text-[9px] font-bold">
                            <ArrowUpRight aria-hidden="true" size={10} className="text-cyan-400" />
                            Repositorio
                          </div>
                        </div>

                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Abrir repositorio ${project.title}`}
                          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-cyan-500/40"
                        >
                          <ExternalLink aria-hidden="true" size={16} />
                        </a>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
