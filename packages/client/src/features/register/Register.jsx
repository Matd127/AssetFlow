import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, Typography, Link, Stack } from '@mui/material';
import FormInput from 'shared/components/FormInput/FormInput.jsx';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import { REGISTER_FIELDS } from './constants.js';
import { Link as RouterLink } from 'react-router-dom';
import { registerConnector } from './registerConnector.js';

function Register({ error, loading, register, role = 'user' }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, _] = useState({});

  useEffect(() => {
    console.log(error, loading, register);
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = formData;

    console.log(typeof register);
    try {
      await register({ email, password, role, first_name: firstName, last_name: lastName })
        .then(data => console.log(data))
        .catch(err => console.error(err));

      if (error) console.log(error);
    } catch (err) {
      console.error(err);
    }
  };

  const renderFormFields = fields =>
    fields.map(field => (
      <FormInput
        id={field.id}
        name={field.name}
        label={field.label}
        value={formData[field.id]}
        onChange={handleChange}
        error={!!errors[field.id]}
        helperText={errors[field.id]}
        required={field.required}
        autoFocus={field.autoFocus}
      />
    ));

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          {renderFormFields(REGISTER_FIELDS.slice(0, 2))}
        </Stack>
        {renderFormFields(REGISTER_FIELDS.slice(2))}
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontSize: '0.75rem' }}>
          By signing up, you agree to our{' '}
          <Link href="#" sx={{ color: '#006397' }}>
            Terms of Service{' '}
          </Link>
          and{' '}
          <Link href="#" sx={{ color: '#006397' }}>
            Privacy Policy
          </Link>
          .
        </Typography>
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
          Create Account
        </Button>
        <Divider sx={{ my: 2 }}>
          <Typography variant="body2" color="text.secondary">
            OR
          </Typography>
        </Divider>
        <Stack spacing={2} direction="column" sx={{ mb: 3 }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{
              py: 1,
              borderRadius: 28,
              borderColor: '#006397',
              color: '#006397',
              '&:hover': {
                borderColor: '#004d77',
                backgroundColor: 'rgba(0, 99, 151, 0.04)',
              },
            }}>
            Sign up with Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<MicrosoftIcon />}
            sx={{
              py: 1,
              borderRadius: 28,
              borderColor: '#006397',
              color: '#006397',
              '&:hover': {
                borderColor: '#004d77',
                backgroundColor: 'rgba(0, 99, 151, 0.04)',
              },
            }}>
            Sign up with Microsoft
          </Button>
        </Stack>
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="body2">
            Already have an account?{' '}
            <Link component={RouterLink} to="../login" variant="body2" sx={{ fontWeight: 600, color: '#006397' }}>
              Sign in
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default registerConnector(Register);
