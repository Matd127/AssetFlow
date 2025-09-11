import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  Grid,
  Divider,
  Alert,
  Tooltip,
  Switch,
  FormControlLabel,
  Card,
  CardContent
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@mui/icons-material/Settings';
import SecurityIcon from '@mui/icons-material/Security';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function AccountSettings() {
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
    marketing: false
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState('');

  const handlePasswordChange = (field) => (event) => {
    setPasswords(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleNotificationChange = (field) => (event) => {
    setNotifications(prev => ({
      ...prev,
      [field]: event.target.checked
    }));
  };

  const handlePasswordSave = () => {
    if (!passwords.current || !passwords.new || !passwords.confirm) {
      setShowError('All password fields are required');
      return;
    }
    if (passwords.new !== passwords.confirm) {
      setShowError('New passwords do not match');
      return;
    }
    if (passwords.new.length < 8) {
      setShowError('Password must be at least 8 characters long');
      return;
    }

    // TODO: API integration - change password
    console.log('Changing password');
    setShowSuccess(true);
    setShowError('');
    setPasswords({ current: '', new: '', confirm: '' });
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleNotificationSave = () => {
    // TODO: API integration - save notification preferences
    console.log('Saving notification preferences:', notifications);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: '#f9fafb', minHeight: '100vh' }}>
      <Paper sx={{ maxWidth: 800, mx: 'auto', p: { xs: 2, md: 4 }, borderRadius: 3, boxShadow: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Tooltip title="Back to Dashboard">
            <IconButton onClick={() => navigate(-1)} sx={{ mr: 2 }}>
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
          <SettingsIcon sx={{ color: '#006397', fontSize: 32, mr: 2 }} />
          <Typography variant="h4" fontWeight={700} flex={1}>
            Account Settings
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {showSuccess && (
          <Alert severity="success" sx={{ mb: 3 }}>
            Settings updated successfully!
          </Alert>
        )}

        {showError && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {showError}
          </Alert>
        )}

        {/* Password Change Section */}
        <Card sx={{ mb: 4, borderRadius: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <SecurityIcon sx={{ color: '#006397', mr: 1 }} />
              <Typography variant="h6" fontWeight={600}>
                Change Password
              </Typography>
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Current Password"
                  type={showPasswords.current ? 'text' : 'password'}
                  value={passwords.current}
                  onChange={handlePasswordChange('current')}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => togglePasswordVisibility('current')}
                        edge="end"
                      >
                        {showPasswords.current ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="New Password"
                  type={showPasswords.new ? 'text' : 'password'}
                  value={passwords.new}
                  onChange={handlePasswordChange('new')}
                  variant="outlined"
                  helperText="Minimum 8 characters"
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => togglePasswordVisibility('new')}
                        edge="end"
                      >
                        {showPasswords.new ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Confirm New Password"
                  type={showPasswords.confirm ? 'text' : 'password'}
                  value={passwords.confirm}
                  onChange={handlePasswordChange('confirm')}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => togglePasswordVisibility('confirm')}
                        edge="end"
                      >
                        {showPasswords.confirm ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    )
                  }}
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                onClick={handlePasswordSave}
                sx={{
                  bgcolor: '#006397',
                  '&:hover': { bgcolor: '#005380' }
                }}
              >
                Change Password
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card sx={{ borderRadius: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <NotificationsIcon sx={{ color: '#006397', mr: 1 }} />
              <Typography variant="h6" fontWeight={600}>
                Notification Preferences
              </Typography>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={notifications.email}
                      onChange={handleNotificationChange('email')}
                      color="primary"
                    />
                  }
                  label="Email Notifications"
                />
                <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                  Receive notifications about important updates via email
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={notifications.push}
                      onChange={handleNotificationChange('push')}
                      color="primary"
                    />
                  }
                  label="Push Notifications"
                />
                <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                  Receive push notifications in your browser
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={notifications.sms}
                      onChange={handleNotificationChange('sms')}
                      color="primary"
                    />
                  }
                  label="SMS Notifications"
                />
                <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                  Receive critical alerts via SMS
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={notifications.marketing}
                      onChange={handleNotificationChange('marketing')}
                      color="primary"
                    />
                  }
                  label="Marketing Communications"
                />
                <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                  Receive updates about new features and promotions
                </Typography>
              </Grid>
            </Grid>

            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                onClick={handleNotificationSave}
                sx={{
                  bgcolor: '#006397',
                  '&:hover': { bgcolor: '#005380' }
                }}
              >
                Save Preferences
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
}
