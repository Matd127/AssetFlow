import { Box } from '@mui/material';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from 'layouts/sidebar/Sidebar.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { THEME_STYLES } from 'shared/constants.js';
import DashboardHeader from 'layouts/dashboard-header/DashboardHeader.jsx';

export default function DashboardLayout({ user }) {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = createTheme(THEME_STYLES);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#F8FAFC' }}>
        <Sidebar navigate={navigate} location={location} />
        <DashboardHeader navigate={navigate} user={user} />
        <Box component="main" sx={{ flexGrow: 1, ml: '240px', pt: 11 }}>
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
