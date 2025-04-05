import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import Paper from '@mui/material/Paper';

export default function CapabilityCard({ capability }) {
  const cardStyles = {
    backgroundColor: '#F1F4F9',
    borderRadius: 3,
    p: 4,
    height: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0px 12px 20px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <Paper elevation={0} sx={cardStyles}>
      <Box
        sx={{
          borderRadius: '50%',
          bgcolor: 'white',
          width: 60,
          height: 60,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 3,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
        }}>
        <Icon color="primary" sx={{ fontSize: 28 }}>
          {capability.icon}
        </Icon>
      </Box>
      <Typography component="h3" variant="h5" sx={{ mb: 2, fontWeight: 600, fontSize: '1.25rem' }}>
        {capability.title}
      </Typography>
      <Typography variant="body1" sx={{ color: '#42474e', lineHeight: 1.6 }}>
        {capability.text}
      </Typography>
    </Paper>
  );
}
