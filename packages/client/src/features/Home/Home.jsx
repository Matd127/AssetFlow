import Box from '@mui/material/Box';
import Hero from 'features/home/components/hero/Hero.jsx';
import Faq from 'features/home/components/faq/Faq.jsx';
import Cta from 'features/home/components/cta/Cta.jsx';
import Capabilities from 'features/home/components/capabilities/Capabilities.jsx';
import Testimonials from 'features/home/components/testimonials/Testimonials.jsx';

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
