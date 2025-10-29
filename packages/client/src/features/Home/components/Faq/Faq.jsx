import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FAQ_ITEMS } from './constants';
import FaqItem from 'features/home/components/faq-item/FaqItem.jsx';

export default function Faq() {
  const renderFaqItems = () => FAQ_ITEMS.map(item => <FaqItem key={item.id} item={item} />);

  return (
    <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
      <Container maxWidth="xl">
        <Box sx={{ margin: '0 auto', maxWidth: 800 }}>
          <Typography variant="h3" sx={{ fontWeight: 500, letterSpacing: -0.25, fontSize: 45, textAlign: 'center', mb: 5 }}>
            Frequently Asked Questions
          </Typography>
          {renderFaqItems()}
        </Box>
      </Container>
    </Box>
  );
}
