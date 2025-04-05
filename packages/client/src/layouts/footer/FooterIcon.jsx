import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

export default function FooterIcon({ social, index }) {
  return (
    <IconButton key={index} component={Link} href={social.href} sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}>
      <social.icon />
    </IconButton>
  );
}
