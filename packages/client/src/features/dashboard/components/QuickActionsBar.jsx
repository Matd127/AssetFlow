import { Paper, Box, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DevicesIcon from '@mui/icons-material/Devices';
import KeyIcon from '@mui/icons-material/Key';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const actions = [
  { label: 'Add Asset', icon: <DevicesIcon />, action: 'asset' },
  { label: 'Add License', icon: <KeyIcon />, action: 'license' },
  { label: 'Add User', icon: <PersonAddIcon />, action: 'user' },
  { label: 'Create Ticket', icon: <SupportAgentIcon />, action: 'ticket' },
];

export default function QuickActionsBar({ onAction }) {
  return (
    <Box sx={{ mb: 2, pt: 2 }}>
      <Typography variant="h6" fontWeight={600} mb={2}>
        Quick Actions
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        {actions.map((item, index) => (
          <Button
            key={index}
            variant="outlined"
            startIcon={item.icon}
            onClick={() => onAction?.(item.action)}
            sx={{
              minWidth: 140,
              py: 1.5,
              borderColor: '#006397',
              color: '#006397',
              '&:hover': {
                bgcolor: 'rgba(0, 99, 151, 0.08)',
                borderColor: '#005380',
              },
            }}
            aria-label={`${item.label} - Opens form to ${item.label.toLowerCase()}`}>
            {item.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
