import Header from 'layouts/header/Header.jsx';
import Box from '@mui/material/Box';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { THEME_STYLES } from 'shared/constants.js';
import Footer from 'layouts/footer/Footer.jsx';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function MainLayout({ user, loadingUser }) {
  const location = useLocation();
  const theme = createTheme(THEME_STYLES);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <ThemeProvider theme={theme}>
        <Header isMobile={isMobile} location={location} user={user} loadingUser={loadingUser} navigate={navigate} />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </Box>
  );
}
