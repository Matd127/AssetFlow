import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TESTIMONIALS } from './constants';
import TestimonialCard from 'features/home/components/testimonial-card/TestimonialCard.jsx';

export default function Testimonials() {
  const renderTestimonials = () => TESTIMONIALS.map(testimonial => <TestimonialCard key={testimonial.id} testimonial={testimonial} />);

  return (
    <Box sx={{ backgroundColor: 'white', py: 8 }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 500, letterSpacing: -0.25, fontSize: 45 }}>
            What Our Customers Say
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: 700, fontWeight: 400, letterSpacing: -0.25, color: '#42474e', pt: 2, fontSize: 20, margin: '0 auto' }}>
            Discover how AssetFlow is helping organizations worldwide optimize their IT resource management
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {renderTestimonials()}
        </Grid>
      </Container>
    </Box>
  );
}
