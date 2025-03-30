import Header from 'layouts/header/Header.jsx';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { THEME_STYLES } from './constants.js';
import Footer from 'layouts/footer/Footer.jsx';

const theme = createTheme(THEME_STYLES);

export default function MainLayout() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Header />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </Box>
  );
}
