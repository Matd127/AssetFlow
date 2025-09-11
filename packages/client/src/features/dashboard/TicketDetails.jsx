import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Paper, Grid, Chip, IconButton, Divider, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const mockTickets = [
  { id: 'TKT-001', subject: 'Cannot connect to printer', priority: 'High', status: 'Open', user: 'John Doe', date: '2025-06-21' },
  { id: 'TKT-002', subject: 'Software installation request', priority: 'Medium', status: 'In Progress', user: 'Jane Smith', date: '2025-06-20' },
  { id: 'TKT-003', subject: 'Password reset', priority: 'Low', status: 'Closed', user: 'Peter Jones', date: '2025-06-19' },
  { id: 'TKT-004', subject: 'Laptop screen flickering', priority: 'High', status: 'Open', user: 'Emily White', date: '2025-06-21' },
  { id: 'TKT-005', subject: 'Email not syncing', priority: 'Medium', status: 'Closed', user: 'Michael Brown', date: '2025-06-18' },
];

export default function TicketDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const ticket = mockTickets.find(t => t.id === id);
  if (!ticket) return <Typography sx={{ p: 4 }}>Ticket not found.</Typography>;
  const priorityColor = ticket.priority === 'High' ? 'error' : ticket.priority === 'Medium' ? 'warning' : 'info';
  const statusColor = ticket.status === 'Open' ? 'success' : ticket.status === 'In Progress' ? 'info' : 'default';
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: '#f9fafb', minHeight: '100vh' }}>
      <Paper sx={{ maxWidth: 1100, mx: 'auto', p: { xs: 2, md: 5 }, borderRadius: 4, boxShadow: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Tooltip title="Back to Tickets">
            <IconButton onClick={() => navigate(-1)} sx={{ mr: 2 }}>
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
          <SupportAgentIcon sx={{ color: '#1976d2', fontSize: 40, mr: 2 }} />
          <Typography variant="h4" fontWeight={700} flex={1}>Ticket Details</Typography>
        </Box>
        <Divider sx={{ mb: 3 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="text.secondary" mb={1}>General Information</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <DetailRow label="Ticket ID" value={ticket.id} />
              <DetailRow label="Subject" value={ticket.subject} />
              <DetailRow label="Date" value={ticket.date} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="text.secondary" mb={1}>Status & Assignment</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <DetailRow label="Priority" value={<Chip label={ticket.priority} color={priorityColor} size="medium" sx={{ fontWeight: 500, fontSize: 16, px: 2 }} />} />
              <DetailRow label="Status" value={<Chip label={ticket.status} color={statusColor} size="medium" sx={{ fontWeight: 500, fontSize: 16, px: 2 }} />} />
              <DetailRow label="Assigned To" value={ticket.user} />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

function DetailRow({ label, value }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography sx={{ minWidth: 120, color: 'text.secondary', fontWeight: 500 }}>{label}:</Typography>
      <Typography sx={{ fontWeight: 500 }}>{value}</Typography>
    </Box>
  );
}
