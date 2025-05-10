import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

export default function FooterIcon({ social, index }) {
  const SocialIcon = social.icon;
  return (
    <IconButton key={index} component={Link} href={social.href} sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}>
      <SocialIcon />
    </IconButton>
  );
}
