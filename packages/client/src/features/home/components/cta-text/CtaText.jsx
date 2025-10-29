import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ctaStyles = {
  borderRadius: 5,
  fontWeight: 'bold',
  p: '0.75rem 2.5rem',
  textTransform: 'none',
  fontSize: '1rem',
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
};

export default function CtaTextSection() {
  return (
    <Grid item xs={12} md={7} sx={{ p: { xs: 4, md: 6 } }}>
      <Typography
        variant="h3"
        sx={{
          color: 'white',
          fontWeight: 600,
          mb: 2,
          fontSize: { xs: 32, md: 40 },
        }}>
        Ready to optimize your IT asset management?
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: 'rgba(255, 255, 255, 0.9)',
          mb: 4,
          fontSize: '1.1rem',
          maxWidth: 500,
        }}>
        Join thousands of organizations that use AssetFlow to streamline their IT operations, reduce costs, and make data-driven decisions.
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            ...ctaStyles,
            bgcolor: 'white',
            color: '#006397',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.9)',
            },
          }}>
          Get Started Free
        </Button>
        <Button
          variant="outlined"
          sx={{
            ...ctaStyles,
            borderColor: 'white',
            color: 'white',
            '&:hover': {
              borderColor: 'rgba(255, 255, 255, 0.9)',
              bgcolor: 'rgba(255, 255, 255, 0.1)',
            },
          }}>
          Schedule Demo
        </Button>
      </Box>
    </Grid>
  );
}
