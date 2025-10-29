import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function MobileMenu({ links, renderButton, navigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(prev => !prev);
  const handleDrawerClose = () => setMobileOpen(false);

  const handleLinkClick = href => {
    handleDrawerClose();
    navigate(href);
  };

  const renderMobileLinks = () =>
    links.map(link => (
      <ListItem key={link.id} disablePadding>
        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleLinkClick(link.href)}>
          <ListItemText
            primary={link.label}
            primaryTypographyProps={{
              fontWeight: link.label === 'Home' ? 700 : 500,
              color: link.label === 'Home' ? 'primary' : 'inherit',
            }}
          />
        </ListItemButton>
      </ListItem>
    ));

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography color="primary" variant="h5" sx={{ fontWeight: 'bold' }}>
          AssetFlow
        </Typography>
        <IconButton color="inherit" onClick={handleDrawerClose} edge="end">
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ pt: 2 }}>
        {renderMobileLinks()}
        <ListItem disablePadding sx={{ mt: 2 }}>
          <ListItemButton sx={{ display: 'flex', justifyContent: 'center' }}>{renderButton()}</ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerToggle}>
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}>
        {drawer}
      </Drawer>
    </>
  );
}
