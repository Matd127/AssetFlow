import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CapabilityCard from '../CapabilityCard.jsx';

const mockCapability = {
  title: 'Test Title',
  text: 'Test Text',
};

describe('CapabilityCard', () => {
  it('should render the component', () => {
    render(<CapabilityCard capability={mockCapability} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });
});
