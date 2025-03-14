import Hero from 'features/Home/components/Hero/Hero.jsx';
import Box from '@mui/material/Box';
import Capabilities from 'features/Home/components/Capabilities/Capabilities.jsx';
import Faq from 'features/Home/components/Faq/Faq.jsx';

export default function Home() {
  return (
    <Box>
      <Hero />
      <Capabilities />
      <Faq />
    </Box>
  );
}
