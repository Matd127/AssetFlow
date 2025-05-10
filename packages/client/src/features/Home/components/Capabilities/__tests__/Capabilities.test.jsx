import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Capabilities from '../Capabilities.jsx';

describe('Capabilities', () => {
  it('should render capabilities section', () => {
    const { container } = render(<Capabilities />);
    expect(container).toBeTruthy();
  });
});
