import { useState } from 'react';
import { Box, Typography, IconButton, Avatar, AppBar, Toolbar, Menu, MenuItem, Badge, Divider, Tooltip } from '@mui/material';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ComputerIcon from '@mui/icons-material/Computer';
import KeyIcon from '@mui/icons-material/Key';
import SupportIcon from '@mui/icons-material/Support';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import Sidebar from 'layouts/sidebar/Sidebar.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { THEME_STYLES } from 'shared/constants.js';

const MENU_ITEMS = [
  { title: 'Home', icon: <HomeIcon />, path: '/' },
  { title: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { title: 'User Management', icon: <PeopleIcon />, path: '/dashboard/users' },
  { title: 'Asset Management', icon: <ComputerIcon />, path: '/dashboard/assets' },
  { title: 'License Management', icon: <KeyIcon />, path: '/dashboard/licenses' },
  { title: 'Support Tickets', icon: <SupportIcon />, path: '/dashboard/tickets' },
  { title: 'Settings', icon: <SettingsIcon />, path: '/dashboard/settings' },
];

const notifications = [
  { id: 1, text: 'New user registered: John Doe', icon: <PeopleIcon fontSize="small" color="primary" />, time: '2 min ago' },
  { id: 2, text: 'Asset "Laptop-123" is due for maintenance', icon: <ComputerIcon fontSize="small" color="warning" />, time: '10 min ago' },
  { id: 3, text: 'License for "Photoshop" is expiring soon', icon: <KeyIcon fontSize="small" color="error" />, time: '1 hr ago' },
];

export default function DashboardLayout() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [accountAnchorEl, setAccountAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const open = Boolean(anchorEl);
  const theme = createTheme(THEME_STYLES);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAccountMenuOpen = event => {
    setAccountAnchorEl(event.currentTarget);
  };
  const handleAccountMenuClose = () => {
    setAccountAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#F8FAFC' }}>
        <Sidebar navigate={navigate} location={location} />
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            ml: '240px',
            width: 'calc(100% - 240px)',
            bgcolor: 'white',
            borderBottom: '1px solid',
            borderColor: 'divider',
            justifyContent: 'flex-end',
          }}>
          <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 'auto' }}>
              <IconButton size="small" onClick={handleMenu}>
                <Badge badgeContent={notifications.length} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                onClose={handleClose}
                sx={{ mt: '45px', minWidth: 340 }}
                PaperProps={{
                  sx: { width: 340, maxWidth: '100%', borderRadius: 2, boxShadow: 3, p: 0 },
                }}>
                <Typography variant="subtitle1" sx={{ px: 2, py: 1, fontWeight: 600 }}>
                  Notifications
                </Typography>
                <Divider />
                {notifications.length === 0 ? (
                  <Typography variant="body2" sx={{ px: 2, py: 2, color: 'text.secondary' }}>
                    No new notifications
                  </Typography>
                ) : (
                  notifications.map(notification => (
                    <MenuItem key={notification.id} onClick={handleClose} sx={{ alignItems: 'flex-start', gap: 1.5, py: 1.5 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>{notification.icon}</Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {notification.text}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {notification.time}
                        </Typography>
                      </Box>
                    </MenuItem>
                  ))
                )}
                <Divider />
                <Box sx={{ p: 1.5, textAlign: 'center' }}>
                  <Typography variant="body2" color="primary" sx={{ cursor: 'pointer', fontWeight: 500 }} onClick={handleClose}>
                    View all
                  </Typography>
                </Box>
              </Menu>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton onClick={handleAccountMenuOpen} size="small">
                  <Avatar sx={{ width: 32, height: 32, bgcolor: '#006397' }}>JD</Avatar>
                </IconButton>
                <Menu
                  anchorEl={accountAnchorEl}
                  open={Boolean(accountAnchorEl)}
                  onClose={handleAccountMenuClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  PaperProps={{
                    sx: {
                      minWidth: 120,
                      borderRadius: 2,
                      boxShadow: 3,
                    },
                  }}>
                  <MenuItem onClick={() => { handleAccountMenuClose(); navigate('/dashboard/profile'); }}>Edit Profile</MenuItem>
                  <MenuItem onClick={() => { handleAccountMenuClose(); navigate('/dashboard/settings'); }}>Settings</MenuItem>
                  <Divider />
                  <MenuItem onClick={handleAccountMenuClose} sx={{ color: 'error.main' }}>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ flexGrow: 1, ml: '240px', pt: 11 }}>
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
