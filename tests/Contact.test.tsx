import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Contact from '../components/sections/Contact';

describe('Contact', () => {
  it('offers the correct email contact', () => {
    render(<Contact />);

    expect(screen.getByRole('link', { name: /Enviar e-mail/i })).toHaveAttribute(
      'href',
      'mailto:leorecoa2@gmail.com',
    );
  });
});
