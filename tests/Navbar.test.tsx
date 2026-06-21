import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Navbar from '../components/layout/Navbar';

describe('Navbar', () => {
  it('exposes the mobile menu state to assistive technologies', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggle = screen.getByRole('button', { name: 'Abrir menu' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveAttribute('aria-controls', 'mobile-navigation');

    await user.click(toggle);

    expect(screen.getByRole('button', { name: 'Fechar menu' })).toHaveAttribute('aria-expanded', 'true');
    expect(document.getElementById('mobile-navigation')).toBeInTheDocument();
  });
});
