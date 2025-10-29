import React, { useState } from 'react';
import { Box, Button, Typography, Link, Alert, AlertTitle } from '@mui/material';
import FormInput from 'shared/components/FormInput/FormInput.jsx';
import { Link as RouterLink } from 'react-router-dom';

export default function Recovery() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setEmail(e.target.value);
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!email) {
      setError('Email is required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setSubmitted(true);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {submitted ? (
        <Box sx={{ mt: 2, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Alert severity="success" sx={{ mb: 3 }}>
            <AlertTitle>Email Sent</AlertTitle>
            We've sent password recovery instructions to <strong>{email}</strong>. Please check your inbox.
          </Alert>
          <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
            Didn't receive the email?{' '}
            <Button
              variant="text"
              onClick={() => setSubmitted(false)}
              sx={{
                p: 0,
                minWidth: 'auto',
                fontWeight: 600,
                textTransform: 'none',
                color: '#006397',
              }}>
              Try again
            </Button>
          </Typography>
        </Box>
      ) : (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ flexGrow: 1 }}>
            <FormInput id="email" name="email" label="Email Address" type="email" value={email} onChange={handleChange} error={!!error} helperText={error} required autoComplete="email" autoFocus />
          </Box>
          <Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                py: 1.2,
                borderRadius: 28,
                backgroundColor: '#006397',
                '&:hover': {
                  backgroundColor: '#004d77',
                },
              }}>
              Send Reset Link
            </Button>
            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Typography variant="body2">
                Remember your password?{' '}
                <Link component={RouterLink} to="../login" variant="body2" sx={{ fontWeight: 600, color: '#006397' }}>
                  Back to login
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
