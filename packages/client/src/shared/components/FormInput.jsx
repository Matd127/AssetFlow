import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const FormInput = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error = false,
  helperText = '',
  fullWidth = true,
  required = false,
  autoComplete = '',
  autoFocus = false,
  placeholder = '',
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const isPassword = type === 'password';

  return (
    <TextField
      id={id}
      label={label}
      type={isPassword ? (showPassword ? 'text' : 'password') : type}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      required={required}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      placeholder={placeholder}
      margin="normal"
      variant="outlined"
      InputProps={{
        endAdornment: isPassword ? (
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ) : null,
        sx: { borderRadius: '12px' },
      }}
      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
      {...props}
    />
  );
};

export default FormInput;
