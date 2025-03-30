import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { testimonials } from './constants';

export default function Testimonials() {
  const renderTestimonials = () =>
    testimonials.map(testimonial => (
      <Grid item xs={12} md={4} key={testimonial.id}>
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.08)',
            borderRadius: 3,
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0px 16px 32px rgba(0, 0, 0, 0.12)',
            },
          }}>
          <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', mb: 2 }}>
              <FormatQuoteIcon sx={{ fontSize: 40, color: 'primary.main', transform: 'rotate(180deg)', mr: 1 }} />
            </Box>

            <Typography variant="body1" sx={{ mb: 3, flexGrow: 1, fontStyle: 'italic', color: '#42474e' }}>
              "{testimonial.quote}"
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ width: 56, height: 56, mr: 2 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#42474e' }}>
                  {testimonial.position}
                </Typography>
                <Rating value={testimonial.rating} readOnly size="small" sx={{ mt: 0.5 }} />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    ));

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

        <Grid container spacing={4}>{renderTestimonials()}</Grid>
      </Container>
    </Box>
  );
}
