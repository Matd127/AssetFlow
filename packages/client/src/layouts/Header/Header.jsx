import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { LINKS } from './constants.js';
import { primaryButtonStyles } from 'styles/buttonStyles.js';
import MobileMenu from './MobileMenu.jsx';

export default function Header({ theme }) {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
                <Button color="primary" variant="contained" sx={primaryButtonStyles}>
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
