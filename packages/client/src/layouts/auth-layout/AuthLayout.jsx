import React from 'react';
import { Box, Container, Paper, Typography, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { PATHS } from 'layouts/auth-layout/constants.js';
import { THEME_STYLES } from 'shared/constants.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function AuthLayout() {
  const location = useLocation();
  const theme = createTheme(THEME_STYLES);

  let title, subtitle;
  switch (location.pathname) {
    case PATHS.LOGIN:
      title = 'Sign in to your account';
      subtitle = 'Welcome back! Please enter your credentials to access your account.';
      break;
    case PATHS.REGISTER:
      title = 'Create your account';
      subtitle = 'Join AssetFlow to streamline your IT asset management';
      break;
    case PATHS.RECOVERY:
      title = 'Reset your password';
      subtitle = "Enter your email address and we'll send you instructions to reset your password.";
      break;
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f7fa',
        }}>
        <Container maxWidth="md">
          <Grid container spacing={0} sx={{ minHeight: { xs: 'auto', md: '500px' } }}>
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
                AssetFlow
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                IT Asset Management
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Streamline your IT asset tracking, management, and reporting with our comprehensive solution.
              </Typography>
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
                <Box sx={{ mb: 3, textAlign: 'center' }}>
                  <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {subtitle}
                  </Typography>
                </Box>
                <Outlet />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
