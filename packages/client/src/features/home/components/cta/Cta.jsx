import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function Cta() {
  const ctaStyles = { 
    borderRadius: 5, 
    fontWeight: 'bold', 
    p: '0.75rem 2.5rem', 
    textTransform: 'none', 
    fontSize: '1rem',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
  };

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
          }}
        >
          <Grid container>
            <Grid item xs={12} md={7} sx={{ p: { xs: 4, md: 6 } }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  color: 'white', 
                  fontWeight: 600, 
                  mb: 2,
                  fontSize: { xs: 32, md: 40 }
                }}
              >
                Ready to optimize your IT asset management?
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  mb: 4, 
                  fontSize: '1.1rem',
                  maxWidth: 500
                }}
              >
                Join thousands of organizations that use AssetFlow to streamline their IT operations, 
                reduce costs, and make data-driven decisions.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  sx={{
                    ...ctaStyles,
                    bgcolor: 'white',
                    color: '#006397',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                    }
                  }}
                >
                  Get Started Free
                </Button>
                <Button 
                  variant="outlined" 
                  sx={{
                    ...ctaStyles,
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'rgba(255, 255, 255, 0.9)',
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    }
                  }}
                >
                  Schedule Demo
                </Button>
              </Box>
            </Grid>
            <Grid 
              item 
              xs={12} 
              md={5} 
              sx={{ 
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  width: '140%',
                  height: '140%',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
                  top: '-20%',
                  right: '-20%',
                }}
              />
              <Box
                component="img"
                src="/dashboard-preview.png"
                alt="AssetFlow Dashboard"
                sx={{
                  maxWidth: '90%',
                  maxHeight: '90%',
                  objectFit: 'contain',
                  transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
                  boxShadow: '0px 30px 60px rgba(0, 0, 0, 0.25)',
                  borderRadius: 2,
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
