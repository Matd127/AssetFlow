import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header.jsx';

const baseProps = {
  location: { pathname: '/' },
  loadingUser: false,
  user: null,
};

const loggedInUserProps = {
  id: 'id0',
  firstName: 'John',
  lastName: 'Doe',
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

  it('should render spinner when loading user', () => {
    const props = { ...baseProps, loadingUser: true };
    render(
      <MemoryRouter>
        <Header {...props} isMobile={false} />
      </MemoryRouter>,
    );
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('should render account menu when user is logged in', () => {
    const props = { ...baseProps, user: loggedInUserProps };
    render(
      <MemoryRouter>
        <Header {...props} isMobile={false} />
      </MemoryRouter>,
    );
    expect(screen.getByText('JD')).toBeInTheDocument();
  });
});
