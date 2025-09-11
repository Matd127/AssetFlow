import { useState } from 'react';
import { Paper, Typography, Box, Avatar, ButtonGroup, Button, List, ListItem, ListItemAvatar, ListItemText, Chip } from '@mui/material';

const ticketsData = [
  { name: 'John Doe', role: 'IT Manager', count: 23, trend: '+12%', avatar: 'JD' },
  { name: 'Jane Smith', role: 'Developer', count: 18, trend: '+8%', avatar: 'JS' },
  { name: 'Peter Jones', role: 'Designer', count: 15, trend: '-3%', avatar: 'PJ' },
  { name: 'Emily White', role: 'Analyst', count: 12, trend: '+5%', avatar: 'EW' },
  { name: 'Michael Brown', role: 'Support', count: 10, trend: '+15%', avatar: 'MB' },
];

const assetsData = [
  { name: 'Jane Smith', role: 'Developer', count: 8, trend: '+2%', avatar: 'JS' },
  { name: 'John Doe', role: 'IT Manager', count: 6, trend: '0%', avatar: 'JD' },
  { name: 'Peter Jones', role: 'Designer', count: 5, trend: '+1%', avatar: 'PJ' },
  { name: 'Emily White', role: 'Analyst', count: 4, trend: '-1%', avatar: 'EW' },
  { name: 'Michael Brown', role: 'Support', count: 3, trend: '+1%', avatar: 'MB' },
];

export default function TopUsersWidget() {
  const [metric, setMetric] = useState('tickets');
  
  const data = metric === 'tickets' ? ticketsData : assetsData;
  const label = metric === 'tickets' ? 'Tickets Created' : 'Assets Assigned';

  return (
    <Paper elevation={1} sx={{ p: 3, borderRadius: 3, boxShadow: 2, height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" fontWeight={600}>Top 5 Users</Typography>
        <ButtonGroup size="small">
          <Button
            variant={metric === 'tickets' ? 'contained' : 'outlined'}
            onClick={() => setMetric('tickets')}
            sx={{
              bgcolor: metric === 'tickets' ? '#006397' : 'transparent',
              '&:hover': { bgcolor: metric === 'tickets' ? '#005380' : 'rgba(0, 99, 151, 0.08)' },
            }}
          >
            Tickets
          </Button>
          <Button
            variant={metric === 'assets' ? 'contained' : 'outlined'}
            onClick={() => setMetric('assets')}
            sx={{
              bgcolor: metric === 'assets' ? '#006397' : 'transparent',
              '&:hover': { bgcolor: metric === 'assets' ? '#005380' : 'rgba(0, 99, 151, 0.08)' },
            }}
          >
            Assets
          </Button>
        </ButtonGroup>
      </Box>
      <List sx={{ p: 0 }}>
        {data.map((user, index) => {
          const isUp = user.trend.startsWith('+');
          return (
            <ListItem key={index} sx={{ px: 0, py: 1 }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#006397', width: 32, height: 32, fontSize: 12 }}>
                  {user.avatar}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="body2" fontWeight={500}>{user.name}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="h6" fontWeight={600}>{user.count}</Typography>
                      <Chip
                        size="small"
                        label={user.trend}
                        sx={{
                          bgcolor: isUp ? '#e8f5e9' : '#ffebee',
                          color: isUp ? '#388e3c' : '#d32f2f',
                          fontWeight: 500,
                          fontSize: 10,
                          height: 20,
                        }}
                      />
                    </Box>
                  </Box>
                }
                secondary={user.role}
              />
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
}
