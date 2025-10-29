import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import demo from 'assets/demo.png';

export default function CtaImageSection() {
  return (
    <Grid
      item
      xs={12}
      md={5}
      sx={{
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
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
        src={demo}
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
  );
}
