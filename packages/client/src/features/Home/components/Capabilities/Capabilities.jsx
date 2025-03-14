import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CAPABILITIES } from './constants.js';
import CapabilityCard from 'features/Home/components/Capabilities/CapabilityCard/CapabilityCard.jsx';
import { Grid } from '@mui/material';

export default function Capabilities() {
  const renderCapabilities = () =>
    CAPABILITIES.map(capability => (
      <Grid item key={capability.id} xs={12} md={4}>
        <CapabilityCard capability={capability} />
      </Grid>
    ));

  return (
    <Container maxWidth="xl" sx={{ padding: '5rem 0' }}>
      <Box sx={{ margin: '0 auto' }}>
        <Typography variant="h3" sx={{ fontWeight: 500, letterSpacing: -0.25, fontSize: 45, textAlign: 'center' }}>
          Why Choose AssetFlow?
        </Typography>
        <Grid container spacing={3} sx={{ py: 5 }}>
          {renderCapabilities()}
        </Grid>
      </Box>
    </Container>
  );
}
