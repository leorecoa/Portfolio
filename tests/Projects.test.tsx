import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { PROJECTS } from '../lib/constants';
import Projects from '../components/sections/Projects';

vi.mock('../hooks/useGithubRepos', () => ({
  useGithubRepos: () => ({ repos: PROJECTS, loading: false }),
}));

describe('Projects', () => {
  it('renders the real projects with repository links', () => {
    render(<Projects />);

    for (const project of PROJECTS) {
      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: `Abrir repositorio ${project.title}` })).toHaveAttribute(
        'href',
        project.link,
      );
    }

    expect(screen.getAllByRole('link', { name: 'View case study' })).toHaveLength(PROJECTS.length);
  });
});
