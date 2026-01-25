
import { useState, useEffect } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../lib/constants';

export const useGithubRepos = (username: string) => {
  const [repos, setRepos] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        
        const mappedRepos: Project[] = data
          .filter((repo: any) => !repo.fork)
          .map((repo: any) => ({
            id: repo.id,
            title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
            description: repo.description || "Projeto desenvolvido com foco em inovação e performance técnica.",
            image: `https://picsum.photos/seed/${repo.name}/800/600`,
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
  }, [username]);

  return { repos, loading };
};
