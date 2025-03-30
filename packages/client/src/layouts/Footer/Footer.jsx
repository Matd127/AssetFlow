import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: FacebookIcon, href: '#' },
    { icon: TwitterIcon, href: '#' },
    { icon: LinkedInIcon, href: '#' },
    { icon: InstagramIcon, href: '#' },
    { icon: GitHubIcon, href: '#' },
  ];

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Integrations', href: '#' },
        { name: 'Enterprise', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API Reference', href: '#' },
        { name: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Privacy Policy', href: '#' },
      ],
    },
  ];


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
              {/* {socialIcons.map((social, index) => (
                <IconButton
                  key={index}
                  component={Link}
                  href={social.href}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}>
                  {social.icon}
                </IconButton>
              ))} */}
            </Stack>
          </Grid>

          {footerLinks.map(section => (
            <Grid item xs={12} sm={6} md={2} key={section.title}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                {section.title}
              </Typography>
              <Stack spacing={1.5}>
                {section.links.map(link => (
                  <Link
                    key={link.name}
                    href={link.href}
                    underline="hover"
                    sx={{
                      color: '#b0b7c3',
                      '&:hover': {
                        color: 'white',
                      },
                    }}>
                    {link.name}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}

          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
              Subscribe to our newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: '#b0b7c3' }}>
              Get the latest updates and news about AssetFlow directly to your inbox.
            </Typography>
            <Box
              component="form"
              sx={{
                display: 'flex',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 1,
                p: 0.5,
              }}>
              <Box
                component="input"
                placeholder="Your email address"
                sx={{
                  flex: 1,
                  border: 'none',
                  bgcolor: 'transparent',
                  color: 'white',
                  p: 1,
                  outline: 'none',
                  '&::placeholder': {
                    color: '#b0b7c3',
                  },
                }}
              />
              <Box
                component="button"
                type="submit"
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  border: 'none',
                  borderRadius: 0.5,
                  px: 2,
                  py: 1,
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                }}>
                Subscribe
              </Box>
            </Box>
          </Grid>
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
