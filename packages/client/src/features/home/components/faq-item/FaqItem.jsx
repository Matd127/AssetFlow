import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';

export default function FaqItem({ item }) {
  return (
    <Accordion
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
  );
}
