import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CtaText from 'features/home/components/cta/CtaText.jsx';
import CtaImage from 'features/home/components/cta/CtaImage.jsx';

export default function Cta() {
  return (
    <Box sx={{ backgroundColor: '#f0f4f8', py: 10 }}>
      <Container maxWidth="xl">
        <Paper
          elevation={0}
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #006397 0%, #0088cc 100%)',
            boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
          }}>
          <Grid container>
            <CtaText />
            <CtaImage />
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
