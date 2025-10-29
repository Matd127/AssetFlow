import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../Home';

describe('Home', () => {
  it('should render home page', () => {
    const { container } = render(<Home />);
    expect(container).toBeTruthy();
  });
});
