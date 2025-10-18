import { describe, it, vi, beforeEach, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainLayout from '../MainLayout';

vi.mock('layouts/header/Header.jsx', () => ({
  __esModule: true,
  default: vi.fn(() => <div>Mocked Header</div>),
}));

vi.mock('layouts/footer/Footer.jsx', () => ({
  __esModule: true,
  default: vi.fn(() => <div>Mocked Footer</div>),
}));

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    Outlet: () => <div>Mocked Outlet</div>,
  };
});

describe('MainLayout', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it('should determine isMobile based on screen size', async () => {
    vi.mock('@mui/material/useMediaQuery', () => ({
      __esModule: true,
      default: vi.fn(() => true),
    }));

    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>,
    );

    expect.objectContaining({
      isMobile: true,
      location: expect.objectContaining({
        pathname: '/',
      }),
    });
  });

  it('should render Header, Footer, and Outlet components', async () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>,
    );

    expect(screen.getByText('Mocked Header')).toBeInTheDocument();
    expect(screen.getByText('Mocked Footer')).toBeInTheDocument();
    expect(screen.getByText('Mocked Outlet')).toBeInTheDocument();
  });
});
