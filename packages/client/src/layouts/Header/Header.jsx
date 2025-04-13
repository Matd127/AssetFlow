import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { LINKS } from './constants.js';
import { primaryButtonStyles } from 'shared/styles/buttonStyles.js';
import MobileMenu from './MobileMenu.jsx';
import { Link } from 'react-router-dom';

export default function Header({ isMobile, location }) {
  const linkStyles = link => {
    const isActive = location.pathname === link.href;
    return {
      borderRadius: 5,
      p: '0.5rem 2rem',
      color: isActive ? 'primary.main' : '#1A1C1E',
      fontWeight: 600,
      textTransform: 'none',
      backgroundColor: isActive ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
      '&:hover': {
        backgroundColor: isActive ? 'rgba(25, 118, 210, 0.12)' : 'rgba(0, 0, 0, 0.04)',
      },
    };
  };

  const renderLinks = () =>
    LINKS.map(link => (
      <Button component={Link} to={link.href} key={link.id} sx={linkStyles(link)}>
        {link.label}
      </Button>
    ));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary" sx={{ boxShadow: 'none' }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography color="primary" variant="h5" component="div" sx={{ fontWeight: 'bold', cursor: 'pointer' }}>
              AssetFlow
            </Typography>
            {isMobile ? (
              <MobileMenu links={LINKS} primaryButtonStyles={primaryButtonStyles} />
            ) : (
              <>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                  <Box sx={{ bgcolor: '#EBEEF3', borderRadius: 10 }}>{renderLinks()}</Box>
                </Box>
                <Button component={Link} to="auth/login" color="primary" variant="contained" sx={primaryButtonStyles}>
                  Sign in
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
