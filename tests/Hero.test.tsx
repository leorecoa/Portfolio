import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Hero from '../components/sections/Hero';

describe('Hero', () => {
  it('presents Leandro Jesse and links to his work', () => {
    render(<Hero />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/LEANDRO\s+JESSE/i);
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /GitHub/i })).toHaveAttribute(
      'href',
      'https://github.com/leorecoa',
    );
    expect(screen.getByRole('link', { name: /Explorar Projetos/i })).toHaveAttribute('href', '#projects');
  });
});
