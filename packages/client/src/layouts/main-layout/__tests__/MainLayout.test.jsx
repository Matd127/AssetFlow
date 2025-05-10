import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import MainLayout from '../MainLayout.jsx';
import Header from 'layouts/header/Header.jsx';
import * as useMediaQuery from '@mui/material/useMediaQuery';

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
  it('should render Header, Footer, and Outlet components', () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>,
    );

    expect(screen.getByText('Mocked Header')).toBeInTheDocument();
    expect(screen.getByText('Mocked Footer')).toBeInTheDocument();
    expect(screen.getByText('Mocked Outlet')).toBeInTheDocument();
  });

  it('should determine isMobile based on screen size', () => {
    const useMediaQuerySpy = vi.spyOn(useMediaQuery, 'default').mockReturnValue(true);

    render(
      <MemoryRouter>
        <MainLayout isMobile={true} />
      </MemoryRouter>,
    );

    expect(Header).toHaveBeenCalledWith(expect.objectContaining({ isMobile: true, location: expect.any(Object) }));

    useMediaQuerySpy.mockRestore();
  });
});
