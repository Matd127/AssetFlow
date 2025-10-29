import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from '../Hero';

describe('Hero', () => {
  it('should render hero section', () => {
    const { container } = render(<Hero />);
    expect(container).toBeTruthy();
  });
});
