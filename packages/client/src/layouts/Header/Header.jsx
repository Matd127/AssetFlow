import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { LINKS } from './constants.js';

export default function Header() {
  const linkStyles = link => ({
    borderRadius: 5,
    p: '0.5rem 2rem',
    color: link.label === 'Home' ? 'primary' : '#1A1C1E',
    fontWeight: 600,
    textTransform: 'none',
  });

  console.log();
  const signInButtonStyles = { borderRadius: 5, fontWeight: 'bold', p: '0.5rem 2rem', textTransform: 'none' };

  const renderLinks = () =>
    LINKS.map(link => (
      <Button key={link.key} sx={linkStyles(link)}>
        {link.label}
      </Button>
    ));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary" sx={{ boxShadow: 'none' }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography color="primary" variant="h5" component="div" sx={{ fontWeight: 'bold', cursor: 'pointer' }}>
              AssetFlow
            </Typography>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ bgcolor: '#EBEEF3', borderRadius: 10 }}>{renderLinks()}</Box>
            </Box>
            <Button color="primary" variant="contained" sx={signInButtonStyles}>
              Sign in
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
