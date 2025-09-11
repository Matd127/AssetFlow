import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { MENU_ITEMS } from './constants.js';

export default function Sidebar({ navigate, location }) {
  const renderMenuItems = () =>
    MENU_ITEMS.map(item => {
      const MenuIcon = item.icon;
      return (
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
            <MenuIcon />
          </ListItemIcon>
          <ListItemText
            primary={item.title}
            primaryTypographyProps={{
              fontSize: '0.875rem',
              fontWeight: location.pathname === item.path ? 500 : 400,
            }}
          />
        </ListItem>
      );
    });

  return (
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
        <Typography color="primary" variant="h5" component="div" sx={{ fontWeight: 'bold', cursor: 'pointer' }}>
          AssetFlow
        </Typography>
      </Box>
      <List sx={{ px: 2 }}>{renderMenuItems()}</List>
    </Box>
  );
}
