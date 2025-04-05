import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CAPABILITIES } from './constants.js';
import { Grid } from '@mui/material';
import CapabilityCard from './CapabilityCard.jsx';

export default function Capabilities() {
  const renderCapabilities = () =>
    CAPABILITIES.map(capability => (
      <Grid item key={capability.id} xs={12} sm={6} md={4}>
        <CapabilityCard capability={capability} />
      </Grid>
    ));

  return (
    <Box sx={{ backgroundColor: 'white', py: 8 }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="h3" sx={{ fontWeight: 500, letterSpacing: -0.25, fontSize: 45 }}>
            Why Choose AssetFlow?
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: 700,
              fontWeight: 400,
              letterSpacing: -0.25,
              color: '#42474e',
              pt: 2,
              fontSize: 20,
              margin: '0 auto',
            }}>
            Powerful features to streamline your IT asset management
          </Typography>
        </Box>
        <Grid container spacing={4} sx={{ py: 2 }}>
          {renderCapabilities()}
        </Grid>
      </Container>
    </Box>
  );
}
