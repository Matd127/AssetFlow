import Box from '@mui/material/Box';
import './Hero.scss';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export default function Hero() {
  const heroStyles = {
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '5rem 0',
    textAlign: 'center',
    borderBottomLeftRadius: '5%',
    borderBottomRightRadius: '5%',
    overflow: 'hidden',
  };

  const ctaStyles = { borderRadius: 5, fontWeight: 'bold', p: '0.5rem 2rem', textTransform: 'none', mt: 5 };

  return (
    <Box className="hero" sx={heroStyles}>
      <Container maxWidth="xl">
        <Box sx={{ maxWidth: 800, margin: '0 auto' }}>
          <Typography variant="h3" sx={{ fontWeight: 500, letterSpacing: -0.25, fontSize: 57 }}>
            Intelligent IT resource management
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 500, letterSpacing: -0.25, fontSize: 57 }}>
            Easier than ever
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ maxWidth: 800, fontWeight: 400, letterSpacing: -0.25, color: '#42474e', pt: 5, fontSize: 23, margin: '0 auto' }}>
          Design marketing pages and powerful admin dashboards with ease using our UI Kit, built following Material 3 guidelines.
        </Typography>
        <Button color="primary" variant="contained" sx={ctaStyles}>
          Try by yourself
        </Button>
      </Container>
    </Box>
  );
}
