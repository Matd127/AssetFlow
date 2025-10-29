import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Testimonials from '../Testimonials';

describe('Testimonials', () => {
  it('should render testimonials section', () => {
    const { container } = render(<Testimonials />);
    expect(container).toBeTruthy();
  });
});
