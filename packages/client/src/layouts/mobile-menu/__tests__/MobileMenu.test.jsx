import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import MobileMenu from '../MobileMenu';

const links = [
  { id: 'id0', label: 'Home', href: '/' },
  { id: 'id1', label: 'Features', href: '/features' },
  { id: 'id2', label: 'Contact', href: '/contact' },
];

const baseProps = {
  links,
  renderButton: vi.fn(),
  navigate: vi.fn(),
};

describe('MobileMenu', () => {
  it('should render the component', () => {
    render(
      <MemoryRouter>
        <MobileMenu {...baseProps} />
      </MemoryRouter>,
    );

    expect(baseProps.renderButton).toHaveBeenCalled();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('should call navigate and close drawer when link is clicked', () => {
    render(
      <MemoryRouter>
        <MobileMenu {...baseProps} />
      </MemoryRouter>,
    );

    const link = screen.getByText('Home');
    fireEvent.click(link);
    expect(baseProps.navigate).toHaveBeenCalledWith('/');
  });
});
