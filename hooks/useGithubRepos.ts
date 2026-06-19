import { useState, useEffect } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../lib/constants';

type GithubRepo = {
  name: string;
  stargazers_count: number;
  forks_count: number;
};

export const useGithubRepos = (username: string) => {
  const [repos, setRepos] = useState<Project[]>(PROJECTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        if (!response.ok) throw new Error('Failed to fetch');

        const data = await response.json() as GithubRepo[];
        const statsByName = new Map(data.map(repo => [repo.name.toLowerCase(), repo]));

        const enrichedProjects = PROJECTS.map(project => {
          const repoName = project.link.split('/').pop()?.toLowerCase();
          const repo = repoName ? statsByName.get(repoName) : undefined;

          return {
            ...project,
            stars: repo?.stargazers_count,
            forks: repo?.forks_count
          };
        });

        setRepos(enrichedProjects);
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
