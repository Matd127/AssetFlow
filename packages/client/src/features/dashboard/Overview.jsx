import { useState } from 'react';
import { 
  Box, 
  Grid, 
  Paper,
  Typography, 
  ButtonGroup, 
  Button, 
  LinearProgress
} from '@mui/material';



const StatCard = ({ title, value, target, trend }) => (
  <Paper
    elevation={1}
    sx={{
      p: 3,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      bgcolor: 'white',
      borderRadius: '8px'
    }}
  >
    <Typography variant="body2" color="text.secondary" gutterBottom>
      {title}
    </Typography>

    <Typography variant="h4" sx={{ mb: 1, color: '#006397' }}>
      {value}
    </Typography>

    <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
      <Typography
        variant="body2"
        color={trend.startsWith('+') ? '#4CAF50' : '#F44336'}
        sx={{ display: 'flex', alignItems: 'center', mr: 1 }}
      >
        {trend}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        vs target {target}
      </Typography>
    </Box>
  </Paper>
);

export default function Overview() {
  const [timeRange, setTimeRange] = useState('MONTHLY');

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Overview
      </Typography>
      <Grid container spacing={3} sx={{ mb: 8 }}>
        <Grid item xs={12} md={4}>
          <StatCard
            title="Total Assets"
            value="2,680"
            trend="+5.5%"
            target="3,000"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard
            title="Active Licenses"
            value="4,593"
            trend="+3.8%"
            target="4,800"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard
            title="Support Tickets"
            value="23,876"
            trend="-4.9%"
            target="20,000"
          />
        </Grid>
      </Grid>

      <Paper elevation={1} sx={{ p: 3, bgcolor: 'white', borderRadius: '8px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h6">Asset & License Growth</Typography>
          <ButtonGroup size="small">
            <Button
              variant={timeRange === 'DAILY' ? 'contained' : 'outlined'}
              onClick={() => setTimeRange('DAILY')}
              sx={{
                bgcolor: timeRange === 'DAILY' ? '#006397' : 'transparent',
                '&:hover': { bgcolor: timeRange === 'DAILY' ? '#005380' : 'rgba(0, 99, 151, 0.08)' },
              }}
            >
              DAILY
            </Button>
            <Button
              variant={timeRange === 'MONTHLY' ? 'contained' : 'outlined'}
              onClick={() => setTimeRange('MONTHLY')}
              sx={{
                bgcolor: timeRange === 'MONTHLY' ? '#006397' : 'transparent',
                '&:hover': { bgcolor: timeRange === 'MONTHLY' ? '#005380' : 'rgba(0, 99, 151, 0.08)' },
              }}
            >
              MONTHLY
            </Button>
            <Button
              variant={timeRange === 'YEARLY' ? 'contained' : 'outlined'}
              onClick={() => setTimeRange('YEARLY')}
              sx={{
                bgcolor: timeRange === 'YEARLY' ? '#006397' : 'transparent',
                '&:hover': { bgcolor: timeRange === 'YEARLY' ? '#005380' : 'rgba(0, 99, 151, 0.08)' },
              }}
            >
              YEARLY
            </Button>
          </ButtonGroup>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="subtitle1" gutterBottom>
                Laptops
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{ flexGrow: 1, mr: 2 }}>
                  <LinearProgress
                    variant="determinate"
                    value={80}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      bgcolor: '#E0E0E0',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: '#006397',
                      },
                    }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  16,890
                </Typography>
              </Box>

              <Typography variant="subtitle1" gutterBottom>
                Monitors
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{ flexGrow: 1, mr: 2 }}>
                  <LinearProgress
                    variant="determinate"
                    value={65}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      bgcolor: '#E0E0E0',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: '#006397',
                      },
                    }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  4,509
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="subtitle1" gutterBottom>
                Phones
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{ flexGrow: 1, mr: 2 }}>
                  <LinearProgress
                    variant="determinate"
                    value={45}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      bgcolor: '#E0E0E0',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: '#006397',
                      },
                    }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  850
                </Typography>
              </Box>

              <Typography variant="subtitle1" gutterBottom>
                Printers
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ flexGrow: 1, mr: 2 }}>
                  <LinearProgress
                    variant="determinate"
                    value={25}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      bgcolor: '#E0E0E0',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: '#006397',
                      },
                    }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  140
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
