import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Card, CardContent, Grid, Chip, IconButton, Divider, Avatar, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DevicesIcon from '@mui/icons-material/Devices';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const mockAssets = [
  { id: 'ASSET-001', name: 'MacBook Pro 16"', category: 'Laptop', status: 'Assigned', user: 'John Doe' },
  { id: 'ASSET-002', name: 'Dell UltraSharp 27"', category: 'Monitor', status: 'In Stock', user: '-' },
  { id: 'ASSET-003', name: 'iPhone 14 Pro', category: 'Mobile', status: 'Assigned', user: 'Jane Smith' },
  { id: 'ASSET-004', name: 'Logitech MX Master 3', category: 'Accessory', status: 'In Repair', user: 'John Doe' },
  { id: 'ASSET-005', name: 'Herman Miller Aeron', category: 'Furniture', status: 'Assigned', user: 'Peter Jones' },
];

export default function AssetDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const asset = mockAssets.find(a => a.id === id);
  if (!asset) return <Typography sx={{ p: 4 }}>Asset not found.</Typography>;

  const statusColor = asset.status === 'Assigned' ? 'primary' : asset.status === 'In Stock' ? 'success' : 'warning';
  const statusIcon = asset.status === 'Assigned' ? <AssignmentIndIcon fontSize="small" sx={{ mr: 0.5 }} /> : <DevicesIcon fontSize="small" sx={{ mr: 0.5 }} />;

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: '#f9fafb', minHeight: '100vh' }}>
      <Paper sx={{ maxWidth: 1100, mx: 'auto', p: { xs: 2, md: 5 }, borderRadius: 4, boxShadow: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Tooltip title="Back to Assets">
            <IconButton onClick={() => navigate(-1)} sx={{ mr: 2 }}>
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
          <DevicesIcon sx={{ color: '#1976d2', fontSize: 40, mr: 2 }} />
          <Typography variant="h4" fontWeight={700} flex={1}>Asset Details</Typography>
        </Box>
        <Divider sx={{ mb: 3 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="text.secondary" mb={1}>General Information</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <DetailRow label="Asset ID" value={asset.id} />
              <DetailRow label="Name" value={asset.name} />
              <DetailRow label="Category" value={asset.category} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="text.secondary" mb={1}>Assignment & Status</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <DetailRow label="Status" value={<Chip icon={statusIcon} label={asset.status} color={statusColor} size="medium" sx={{ fontWeight: 500, fontSize: 16, px: 2 }} />} />
              <DetailRow label="Assigned To" value={asset.user} />
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

