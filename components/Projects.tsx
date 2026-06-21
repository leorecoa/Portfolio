
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import { Project } from '../types';

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  fork: boolean;
  topics: string[];
  html_url: string;
  stargazers_count: number;
  forks_count: number;
}

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const username = "leorecoa";

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json() as GithubRepo[];
        
        const mappedRepos: Project[] = data
          .filter(repo => !repo.fork) // Apenas projetos originais
          .map(repo => ({
            id: repo.id,
            title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
            description: repo.description || "Projeto desenvolvido com foco em inovação e performance técnica.",
            image: `https://picsum.photos/seed/${repo.name}/800/600`, // Seed única por repo
            tags: repo.topics.length > 0 ? repo.topics.slice(0, 3) : ["Code", "Project", "AI"],
            link: repo.html_url,
            stars: repo.stargazers_count,
            forks: repo.forks_count
          }));
        
        setRepos(mappedRepos.length > 0 ? mappedRepos : PROJECTS);
      } catch (error) {
        console.error("Github API Error, using fallback:", error);
        setRepos(PROJECTS);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubRepos();
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-cyan-400"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-400">Active Repositories</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter">
              Code <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/40 to-white/10 italic">Portfolio</span>
            </h2>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="flex items-center gap-6"
          >
            <div className="text-right hidden md:block">
              <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">GitHub Status</p>
              <p className="text-xs text-cyan-400 font-mono">Connected to api.github.com</p>
            </div>
            <a 
              href={`https://github.com/${username}`} 
              target="_blank" 
              rel="noreferrer" 
              className="p-4 glass-card rounded-2xl text-cyan-400 hover:text-white hover:border-cyan-400/50 transition-all group"
            >
              <Github size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {loading ? (
              // Loading Skeletons
              [...Array(6)].map((_, i) => (
                <motion.div
                  key={`skeleton-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="aspect-[4/5] rounded-[2.5rem] bg-white/[0.02] border border-white/5 animate-pulse flex flex-col p-8 justify-end"
                >
                  <div className="h-4 w-1/2 bg-white/10 rounded mb-4"></div>
                  <div className="h-8 w-3/4 bg-white/20 rounded mb-4"></div>
                  <div className="h-4 w-full bg-white/5 rounded"></div>
                </motion.div>
              ))
            ) : (
              repos.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden glass-card border-white/5 hover:border-cyan-400/30 transition-all duration-700"
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                    <div className="flex gap-2 mb-4 overflow-hidden">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[9px] font-bold uppercase tracking-widest text-white/60 border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-3xl font-bold font-space text-white mb-4 group-hover:text-cyan-400 transition-colors leading-none">
                      {project.title}
                    </h3>

                    <p className="text-sm text-white/40 line-clamp-2 group-hover:text-white/70 transition-colors mb-8 font-light">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <div className="flex gap-6">
                        {project.stars !== undefined && (
                          <div className="flex items-center gap-1.5 text-white/30 text-[10px] font-bold">
                            <Star size={12} className="text-amber-400" />
                            {project.stars}
                          </div>
                        )}
                        {project.forks !== undefined && (
                          <div className="flex items-center gap-1.5 text-white/30 text-[10px] font-bold">
                            <GitFork size={12} className="text-cyan-400" />
                            {project.forks}
                          </div>
                        )}
                      </div>

                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-cyan-400 transition-all hover:scale-110"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-8 right-8 w-2 h-2 border-t border-r border-cyan-400/40 group-hover:border-cyan-400 transition-colors"></div>
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
