import Hero from 'features/home/components/hero/Hero.jsx';
import Box from '@mui/material/Box';
import Capabilities from 'features/home/components/capabilities/Capabilities.jsx';
import Faq from 'features/home/components/faq/Faq.jsx';
import Testimonials from 'features/home/components/testimonials/Testimonials.jsx';
import Cta from 'features/home/components/cta/Cta.jsx';

export default function Home() {
  return (
    <Box>
      <Hero />
      <Capabilities />
      <Testimonials />
      <Faq />
      <Cta />
    </Box>
  );
}