import { useState } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography, InputBase, IconButton, Avatar, AppBar, Toolbar } from '@mui/material';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ComputerIcon from '@mui/icons-material/Computer';
import KeyIcon from '@mui/icons-material/Key';
import SupportIcon from '@mui/icons-material/Support';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
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

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#F8FAFC' }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: 240,
          flexShrink: 0,
          bgcolor: 'white',
          borderRight: '1px solid',
          borderColor: 'divider',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          overflowY: 'auto',
        }}>
        <Box sx={{ p: 3, mb: 2 }}>
          <Typography variant="h6" color="primary" fontWeight="bold">
            AssetFlow
          </Typography>
        </Box>

        <List sx={{ px: 2 }}>
          {MENU_ITEMS.map(item => (
            <ListItem
              key={item.title}
              onClick={() => navigate(item.path)}
              sx={{
                cursor: 'pointer',
                borderRadius: 1,
                mb: 0.5,
                color: location.pathname === item.path ? 'primary.main' : 'text.secondary',
                bgcolor: location.pathname === item.path ? '#F1F4F9' : 'transparent',
                '&:hover': {
                  bgcolor: '#F1F4F9',
                },
              }}>
              <ListItemIcon
                sx={{
                  color: location.pathname === item.path ? 'primary.main' : 'text.secondary',
                  minWidth: 40,
                }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  fontSize: '0.875rem',
                  fontWeight: location.pathname === item.path ? 500 : 400,
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      {/* Top Navigation */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          ml: '240px',
          width: 'calc(100% - 240px)',
          bgcolor: 'white',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}>
        <Toolbar>
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                bgcolor: '#F1F4F9',
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                width: 300,
              }}>
              <InputBase placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} sx={{ ml: 2, flex: 1 }} />
              <IconButton size="small" sx={{ mr: 1 }}>
                <SearchIcon />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton size="small">
              <NotificationsIcon />
            </IconButton>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 2 }}>
              <Avatar sx={{ width: 32, height: 32, bgcolor: '#006397' }}>JD</Avatar>
              <Box>
                <Typography variant="subtitle2" sx={{ fontSize: '0.875rem' }}>
                  John Doe
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                  Administrator
                </Typography>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: '240px',
          pt: 11,
        }}>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </Box>
    </Box>
  );
}
