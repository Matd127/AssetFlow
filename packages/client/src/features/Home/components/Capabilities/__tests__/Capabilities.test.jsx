import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Capabilities from '../Capabilities.jsx';

describe('Capabilities', () => {
  it('should render capabilities section', () => {
    const { container } = render(<Capabilities />);
    expect(container).toBeTruthy();
  });
});
