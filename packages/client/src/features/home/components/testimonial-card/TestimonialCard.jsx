import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

export default function TestimonialCard({ testimonial }) {
  const cardStyles = {
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
  };

  return (
    <Grid item xs={12} md={4}>
      <Card sx={cardStyles}>
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
  );
}
