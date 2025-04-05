import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

export default function FooterLink({ section }) {
  return (
    <Grid item xs={12} sm={6} md={2} key={section.title}>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
        {section.title}
      </Typography>
      <Stack spacing={1.5}>
        {section.links.map(link => (
          <Link key={link.name} href={link.href} underline="hover" sx={{ color: '#b0b7c3', '&:hover': { color: 'white' } }}>
            {link.name}
          </Link>
        ))}
      </Stack>
    </Grid>
  );
}
