import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { FOOTER_LINKS, SOCIAL_ICONS } from 'layouts/footer/constants.js';
import FooterLink from 'layouts/footer/FooterLink.jsx';
import FooterIcon from 'layouts/footer/FooterIcon.jsx';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const renderIcons = () => SOCIAL_ICONS.map((social, index) => <FooterIcon social={social} index={index} key={index} />);

  const renderLinks = () => FOOTER_LINKS.map(section => <FooterLink section={section} key={section.title} />);

  return (
    <Box sx={{ bgcolor: '#1A1C1E', color: 'white', pt: 8, pb: 6 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              AssetFlow
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, color: '#b0b7c3', maxWidth: 300 }}>
              Intelligent IT resource management platform that helps organizations track, manage, and optimize their IT assets efficiently.
            </Typography>
            <Stack direction="row" spacing={1}>
              {renderIcons()}
            </Stack>
          </Grid>
          {renderLinks()}
        </Grid>
        <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', mt: 6, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#b0b7c3' }}>
            {currentYear} AssetFlow. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
