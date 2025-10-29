import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Paper, Grid, Chip, IconButton, Divider, Avatar, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';

// Replace with real data fetching
const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@company.com',
    department: 'Engineering',
    role: 'Software Engineer',
    status: 'Active',
    assets: 5,
    licenses: 3,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@company.com',
    department: 'Design',
    role: 'UI Designer',
    status: 'Active',
    assets: 2,
    licenses: 2,
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike.j@company.com',
    department: 'Marketing',
    role: 'Marketing Manager',
    status: 'Inactive',
    assets: 1,
    licenses: 1,
  },
];

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = mockUsers.find(u => String(u.id) === String(id));
  if (!user) return <Typography sx={{ p: 4 }}>User not found.</Typography>;
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: '#f9fafb', minHeight: '100vh' }}>
      <Paper sx={{ maxWidth: 1100, mx: 'auto', p: { xs: 2, md: 5 }, borderRadius: 4, boxShadow: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Tooltip title="Back to Users">
            <IconButton onClick={() => navigate(-1)} sx={{ mr: 2 }}>
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
          <Avatar sx={{ bgcolor: '#1976d2', width: 48, height: 48, mr: 2 }}>
            <PersonIcon fontSize="large" />
          </Avatar>
          <Typography variant="h4" fontWeight={700} flex={1}>User Details</Typography>
        </Box>
        <Divider sx={{ mb: 3 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="text.secondary" mb={1}>General Information</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <DetailRow label="Name" value={user.name} />
              <DetailRow label="Email" value={user.email} />
              <DetailRow label="Department" value={user.department} />
              <DetailRow label="Role" value={user.role} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="text.secondary" mb={1}>Status & Assets</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <DetailRow label="Status" value={<Chip label={user.status} color={user.status === 'Active' ? 'success' : 'default'} size="medium" sx={{ fontWeight: 500, fontSize: 16, px: 2 }} />} />
              <DetailRow label="Assets" value={user.assets} />
              <DetailRow label="Licenses" value={user.licenses} />
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
