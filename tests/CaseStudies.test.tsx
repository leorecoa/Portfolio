import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CaseStudies from '../components/sections/CaseStudies';
import { CASE_STUDIES } from '../lib/caseStudies';

describe('CaseStudies', () => {
  it('renders each real project case with its repository', () => {
    render(<CaseStudies />);

    const repositoryLinks = screen.getAllByRole('link', { name: 'View repository' });

    for (const caseStudy of CASE_STUDIES) {
      expect(screen.getByRole('heading', { name: caseStudy.title })).toBeInTheDocument();
      expect(repositoryLinks.some(link => link.getAttribute('href') === caseStudy.repositoryUrl)).toBe(true);
    }

    expect(screen.getAllByRole('heading', { name: 'Problema' })).toHaveLength(CASE_STUDIES.length);
    expect(screen.getAllByRole('heading', { name: 'Decisões técnicas' })).toHaveLength(CASE_STUDIES.length);
  });
});
