import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';

export default function CapabilityCard({ capability }) {
  return (
    <Box rounded sx={{ backgroundColor: '#F1F4F9', borderRadius: 3, p: 5 }}>
      <Box color="primary" sx={{ borderRadius: '50%', bgcolor: '#EBEEF3', width: 45, height: 45, display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2 }}>
        <CheckIcon color="primary" />
      </Box>
      <Typography component="h1" variant="h5" sx={{ mb: 1 }}>
        {capability.title}
      </Typography>
      <Typography>{capability.text}</Typography>
    </Box>
  );
}
