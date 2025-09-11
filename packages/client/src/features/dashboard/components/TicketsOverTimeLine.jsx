import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Paper, Typography } from '@mui/material';

const data = [
  { date: '09-01', daily: 12, average: 15 },
  { date: '09-02', daily: 18, average: 15 },
  { date: '09-03', daily: 8, average: 14 },
  { date: '09-04', daily: 22, average: 14 },
  { date: '09-05', daily: 15, average: 15 },
  { date: '09-06', daily: 9, average: 15 },
  { date: '09-07', daily: 25, average: 16 },
  { date: '09-08', daily: 19, average: 16 },
  { date: '09-09', daily: 14, average: 16 },
  { date: '09-10', daily: 11, average: 15 },
  { date: '09-11', daily: 17, average: 15 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: 'white', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <p style={{ margin: 0, fontSize: '14px' }}>{`Date: ${label}`}</p>
        <p style={{ margin: 0, fontSize: '14px', color: '#006397' }}>{`Daily: ${payload[0]?.value || 0}`}</p>
        <p style={{ margin: 0, fontSize: '14px', color: '#FF9800' }}>{`7-day avg: ${payload[1]?.value || 0}`}</p>
      </div>
    );
  }
  return null;
};

export default function TicketsOverTimeLine() {
  return (
    <Paper elevation={1} sx={{ p: 3, borderRadius: 3, boxShadow: 2, height: '100%' }}>
      <Typography variant="h6" fontWeight={600} mb={2}>Tickets Over Time</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="daily" 
            stroke="#006397" 
            strokeWidth={2}
            name="Daily"
            dot={{ fill: '#006397', strokeWidth: 2, r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="average" 
            stroke="#FF9800" 
            strokeWidth={2}
            strokeDasharray="5 5"
            name="7-day average"
            dot={{ fill: '#FF9800', strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}
