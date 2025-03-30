import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqItems } from './constants';

export default function Faq() {
  const renderFaqItems = () =>
    faqItems.map(item => (
      <Accordion
        key={item.id}
        sx={{
          mb: 2,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
          borderRadius: '8px !important',
          '&:before': {
            display: 'none',
          },
          overflow: 'hidden',
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="primary" />}
          sx={{
            fontWeight: 500,
            '&.Mui-expanded': {
              borderBottom: '1px solid #e0e0e0',
            },
          }}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            {item.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" sx={{ color: '#42474e' }}>
            {item.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    ));

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
