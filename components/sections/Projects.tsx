
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import { useGithubRepos } from '../../hooks/useGithubRepos';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';

const Projects: React.FC = () => {
  const username = "leorecoa";
  const { repos, loading } = useGithubRepos(username);

  return (
    <section id="projects" className="py-20 md:py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          label="Active Repositories" 
          title={<>Code <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/40 to-white/10 italic">Portfolio</span></>} 
          subtitle="Projetos reais conectados diretamente ao GitHub, demonstrando evolução técnica e consistência."
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
                  className="group"
                >
                  <GlassCard className="aspect-[4/5] p-6 md:p-10 flex flex-col justify-end min-h-[400px]">
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
                    </div>

                    <div className="relative z-20 transition-transform duration-500 group-hover:translate-y-[-5px]">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="px-2 py-0.5 rounded-full bg-white/10 text-[8px] font-bold uppercase tracking-widest text-white/60 border border-white/5">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold font-space text-white mb-2 leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-xs md:text-sm text-white/40 line-clamp-2 mb-6 font-light">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex gap-4">
                          {project.stars !== undefined && (
                            <div className="flex items-center gap-1.5 text-white/30 text-[9px] font-bold">
                              <Star size={10} className="text-amber-400" />
                              {project.stars}
                            </div>
                          )}
                          {project.forks !== undefined && (
                            <div className="flex items-center gap-1.5 text-white/30 text-[9px] font-bold">
                              <GitFork size={10} className="text-cyan-400" />
                              {project.forks}
                            </div>
                          )}
                        </div>

                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-cyan-400 transition-all"
                        >
                          <ExternalLink size={16} />
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
