import Header from 'layouts/header/Header.jsx';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { THEME_STYLES } from './constants.js';
import Footer from 'layouts/footer/Footer.jsx';

export default function MainLayout() {
  const theme = createTheme(THEME_STYLES);

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Header theme={theme} />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </Box>
  );
}
