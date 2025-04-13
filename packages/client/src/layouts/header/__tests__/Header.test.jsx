import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '../Header.jsx';
import { MemoryRouter } from 'react-router-dom';

const baseProps = {
  location: { pathname: '/' },
};

describe('Header', () => {
  it('should render the component', () => {
    render(
      <MemoryRouter>
        <Header {...baseProps} isMobile={false} />
      </MemoryRouter>,
    );
    expect(screen.getByText('AssetFlow')).toBeInTheDocument();
  });

  it('should render the mobile menu', () => {
    render(
      <MemoryRouter>
        <Header {...baseProps} isMobile={true} />
      </MemoryRouter>,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
