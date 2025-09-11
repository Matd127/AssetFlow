import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Paper, Typography, Box } from '@mui/material';

const data = [
  { name: 'In Use', value: 1850, color: '#4CAF50' },
  { name: 'In Stock', value: 520, color: '#2196F3' },
  { name: 'In Repair', value: 180, color: '#FF9800' },
  { name: 'Retired', value: 130, color: '#9E9E9E' },
];

const total = data.reduce((sum, item) => sum + item.value, 0);

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    const percentage = ((data.value / total) * 100).toFixed(1);
    return (
      <Box sx={{ bgcolor: 'white', p: 1, border: '1px solid #ccc', borderRadius: 1, boxShadow: 2 }}>
        <Typography variant="body2">
          {data.name}: {data.value} ({percentage}%)
        </Typography>
      </Box>
    );
  }
  return null;
};

const renderCenterLabel = () => (
  <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="24" fontWeight="bold" fill="#333">
    {total.toLocaleString()}
  </text>
);

export default function AssetStatusDonut() {
  return (
    <Paper elevation={1} sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
      <Typography variant="h6" fontWeight={600} mb={2}>
        Asset Status
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="bottom" height={36} formatter={(value, entry) => <span style={{ color: entry.color, fontWeight: 500 }}>{value}</span>} />
          {renderCenterLabel()}
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
}
