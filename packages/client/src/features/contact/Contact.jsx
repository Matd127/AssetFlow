import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import FormInput from 'shared/components/FormInput/FormInput.jsx';
import { CONTACT_INFO } from './constants.js';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    alert('Your message has been sent. We will get back to you soon!');
  };

  const renderContactInfo = () =>
    CONTACT_INFO.map(info => {
      const Icon = info.icon;
      return (
        <Box key={info.id} sx={{ display: 'flex', gap: 2 }}>
          <Box sx={{ mt: 0.5 }}>
            <Icon fontSize="large" />
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, color: 'white' }}>
              {info.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              {info.description}
            </Typography>
          </Box>
        </Box>
      );
    });

  return (
    <Box sx={{ py: 12, bgcolor: '#f5f7fa', minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Grid container spacing={0} sx={{ minHeight: { xs: 'auto', md: '600px' } }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              p: 4,
              backgroundColor: '#006397',
              borderTopLeftRadius: { xs: 8, md: 8 },
              borderBottomLeftRadius: { xs: 0, md: 8 },
              borderTopRightRadius: { xs: 8, md: 0 },
              borderBottomRightRadius: { xs: 0, md: 0 },
              color: 'white',
            }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              Get in Touch
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 500, mb: 4 }}>
              We're Here to Help
            </Typography>
            <Stack spacing={3}>{renderContactInfo()}</Stack>
          </Grid>

          <Grid item xs={12} md={6} sx={{ height: { xs: 'auto' }, display: 'flex', flexDirection: 'column' }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderTopRightRadius: { xs: 0, md: 8 },
                borderBottomRightRadius: { xs: 8, md: 8 },
                borderTopLeftRadius: { xs: 0, md: 0 },
                borderBottomLeftRadius: { xs: 8, md: 0 },
              }}>
              <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                  Send Us a Message
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Have questions about AssetFlow? We're here to help! Fill out the form below and our team will get back to you.
                </Typography>
              </Box>

              <Box component="form" onSubmit={handleSubmit} sx={{ flexGrow: 1 }}>
                <FormInput label="Your Name" name="name" />
                <FormInput label="Your Email" name="email" type="email" />
                <FormInput label="Subject" name="subject" />
                <FormInput label="Your Message" name="message" multiline rows={4} />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    mb: 2,
                    py: 1.2,
                    borderRadius: 28,
                    backgroundColor: '#006397',
                    '&:hover': {
                      backgroundColor: '#004d77',
                    },
                  }}>
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
