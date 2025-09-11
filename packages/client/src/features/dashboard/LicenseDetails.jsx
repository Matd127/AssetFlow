import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Paper, Grid, Chip, IconButton, Divider, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyIcon from '@mui/icons-material/Key';

const mockLicenses = [
  { id: 'LIC-001', name: 'Microsoft Office 365', type: 'Subscription', status: 'Active', expiry: '2025-12-31', user: 'Company-wide' },
  { id: 'LIC-002', name: 'Adobe Photoshop', type: 'Perpetual', status: 'Active', expiry: '-', user: 'Jane Smith' },
  { id: 'LIC-003', name: 'JetBrains All Products Pack', type: 'Subscription', status: 'Expiring Soon', expiry: '2025-07-15', user: 'John Doe' },
  { id: 'LIC-004', name: 'Figma', type: 'Subscription', status: 'Expired', expiry: '2025-05-31', user: 'Peter Jones' },
  { id: 'LIC-005', name: 'Slack', type: 'Subscription', status: 'Active', expiry: '2026-01-01', user: 'Company-wide' },
];

export default function LicenseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const license = mockLicenses.find(l => l.id === id);
  if (!license) return <Typography sx={{ p: 4 }}>License not found.</Typography>;
  const statusColor = license.status === 'Active' ? 'success' : license.status === 'Expiring Soon' ? 'warning' : 'error';
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: '#f9fafb', minHeight: '100vh' }}>
      <Paper sx={{ maxWidth: 1100, mx: 'auto', p: { xs: 2, md: 5 }, borderRadius: 4, boxShadow: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Tooltip title="Back to Licenses">
            <IconButton onClick={() => navigate(-1)} sx={{ mr: 2 }}>
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
          <KeyIcon sx={{ color: '#1976d2', fontSize: 40, mr: 2 }} />
          <Typography variant="h4" fontWeight={700} flex={1}>License Details</Typography>
        </Box>
        <Divider sx={{ mb: 3 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="text.secondary" mb={1}>General Information</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <DetailRow label="License ID" value={license.id} />
              <DetailRow label="Name" value={license.name} />
              <DetailRow label="Type" value={license.type} />
              <DetailRow label="Expiry" value={license.expiry} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="text.secondary" mb={1}>Assignment & Status</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <DetailRow label="Status" value={<Chip label={license.status} color={statusColor} size="medium" sx={{ fontWeight: 500, fontSize: 16, px: 2 }} />} />
              <DetailRow label="Assigned To" value={license.user} />
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
