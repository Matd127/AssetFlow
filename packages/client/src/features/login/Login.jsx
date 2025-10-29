import React, { useState } from 'react';
import { Box, Button, Divider, Typography, Stack, Checkbox, Link, FormControlLabel } from '@mui/material';
import FormInput from 'shared/components/FormInput/FormInput.jsx';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import { LOGIN_FIELDS, REMEMBER_ME_FIELD } from './constants.js';
import { Link as RouterLink } from 'react-router-dom';
import { loginConnector } from './loginConnector.js';

function Login({ error, login }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errors, _] = useState({});

  const handleChange = e => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'rememberMe' ? checked : value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      await login({ email, password })
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
        type={field.type}
        value={formData[field.id]}
        onChange={handleChange}
        error={!!errors[field.id]}
        helperText={errors[field.id]}
        required={field.required}
        autoFocus={field.autoFocus}
        autoComplete={field.autoComplete}
      />
    ));

  const renderRememberMeField = field => (
    <FormControlLabel
      control={<Checkbox id={field.id} name={field.name} checked={formData[field.id]} onChange={handleChange} color="primary" size="small" />}
      label={<Typography variant="body2">Remember me</Typography>}
    />
  );

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flexGrow: 1 }}>
        {renderFormFields(LOGIN_FIELDS)}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
          {renderRememberMeField(REMEMBER_ME_FIELD)}
          <Link component={RouterLink} to="../recovery" variant="body2" color="primary">
            Forgot password?
          </Link>
        </Box>
      </Box>

      <Box>
        <Button
          type="submit"
          // component={RouterLink}
          // to="/dashboard"
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
          Sign In
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
            Sign in with Google
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
            Sign in with Microsoft
          </Button>
        </Stack>
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="body2">
            Don't have an account?{' '}
            <Link component={RouterLink} to="../register" variant="body2" sx={{ fontWeight: 600, color: '#006397' }}>
              Sign up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default loginConnector(Login);
