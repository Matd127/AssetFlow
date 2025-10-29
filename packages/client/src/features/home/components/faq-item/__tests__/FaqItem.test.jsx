import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FaqItem from '../FaqItem.jsx';

const mockItem = {
  question: 'Is it test question?',
  answer: 'Yes, it is a test answer.',
};

describe('FaqItem', () => {
  it('should render the component', () => {
    render(<FaqItem item={mockItem} />);

    expect(screen.getByText(mockItem.question)).toBeInTheDocument();
    expect(screen.getByText(mockItem.answer)).toBeInTheDocument();
  });
});
