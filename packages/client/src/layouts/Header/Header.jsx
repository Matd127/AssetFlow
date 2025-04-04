import { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { LINKS } from './constants.js';
import { primaryButtonStyles } from 'styles/buttonStyles.js';

export default function Header({ theme }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const linkStyles = link => ({
    borderRadius: 5,
    p: '0.5rem 2rem',
    color: link.label === 'Home' ? 'primary' : '#1A1C1E',
    fontWeight: 600,
    textTransform: 'none',
  });

  const renderLinks = () =>
    LINKS.map(link => (
      <Button key={link.id} sx={linkStyles(link)}>
        {link.label}
      </Button>
    ));

  const renderMobileLinks = () =>
    LINKS.map(link => (
      <ListItem key={link.id} disablePadding>
        <ListItemButton sx={{ textAlign: 'center' }}>
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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography color="primary" variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          AssetFlow
        </Typography>
        <IconButton color="inherit" onClick={handleDrawerToggle} edge="end">
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ pt: 2 }}>
        {renderMobileLinks()}
        <ListItem disablePadding sx={{ mt: 2 }}>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Button color="primary" variant="contained" fullWidth sx={primaryButtonStyles}>
              Sign in
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary" sx={{ boxShadow: 'none' }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography color="primary" variant="h5" component="div" sx={{ fontWeight: 'bold', cursor: 'pointer' }}>
              AssetFlow
            </Typography>
            {isMobile ? (
              <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                  <Box sx={{ bgcolor: '#EBEEF3', borderRadius: 10 }}>{renderLinks()}</Box>
                </Box>
                <Button color="primary" variant="contained" sx={primaryButtonStyles}>
                  Sign in
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}>
        {drawer}
      </Drawer>
    </Box>
  );
}
