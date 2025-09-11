import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Paper, Typography, Box, ButtonGroup, Button } from '@mui/material';

const data30 = [
  { category: 'Microsoft 365', licenses: 1250 },
  { category: 'Adobe CC', licenses: 890 },
  { category: 'Security', licenses: 650 },
  { category: 'Development', licenses: 420 },
  { category: 'Other', licenses: 380 },
];

const data90 = [
  { category: 'Microsoft 365', licenses: 1280 },
  { category: 'Adobe CC', licenses: 920 },
  { category: 'Security', licenses: 680 },
  { category: 'Development', licenses: 450 },
  { category: 'Other', licenses: 400 },
];

const data365 = [
  { category: 'Microsoft 365', licenses: 1350 },
  { category: 'Adobe CC', licenses: 980 },
  { category: 'Security', licenses: 720 },
  { category: 'Development', licenses: 500 },
  { category: 'Other', licenses: 450 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const total = data30.reduce((sum, item) => sum + item.licenses, 0);
    const percentage = ((payload[0].value / total) * 100).toFixed(1);
    return (
      <Box sx={{ bgcolor: 'white', p: 1, border: '1px solid #ccc', borderRadius: 1, boxShadow: 2 }}>
        <Typography variant="body2">{label}: {payload[0].value} licenses ({percentage}%)</Typography>
      </Box>
    );
  }
  return null;
};

export default function LicensesByCategoryBar() {
  const [timeRange, setTimeRange] = useState(30);
  
  const getData = () => {
    switch (timeRange) {
      case 90: return data90;
      case 365: return data365;
      default: return data30;
    }
  };

  return (
    <Paper elevation={1} sx={{ p: 3, borderRadius: 3, boxShadow: 2, height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" fontWeight={600}>Licenses by Category</Typography>
        <ButtonGroup size="small">
          {[30, 90, 365].map(days => (
            <Button
              key={days}
              variant={timeRange === days ? 'contained' : 'outlined'}
              onClick={() => setTimeRange(days)}
              sx={{
                bgcolor: timeRange === days ? '#006397' : 'transparent',
                '&:hover': { bgcolor: timeRange === days ? '#005380' : 'rgba(0, 99, 151, 0.08)' },
              }}
            >
              {days}d
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={getData()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="licenses" fill="#006397" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
}
