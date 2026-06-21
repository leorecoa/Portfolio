import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import App from '../App';

vi.mock('../components/ui/SplashScreen', () => ({
  default: () => <div>Portfolio loading</div>,
}));

vi.mock('../components/effects/ParticleBackground', () => ({
  default: () => <canvas aria-label="Particle background" />,
}));

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);

    expect(screen.getByText('Portfolio loading')).toBeInTheDocument();
  });
});
