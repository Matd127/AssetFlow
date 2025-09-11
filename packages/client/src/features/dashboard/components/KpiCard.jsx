import { Paper, Typography, Box, Chip, Avatar } from '@mui/material';

export default function KpiCard({ icon, label, value, trend, trendLabel, secondary, color = '#006397', ariaLabel }) {
  const isUp = trend && trend.startsWith('+');
  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        minHeight: 100,
        borderRadius: 2,
        boxShadow: 2,
        bgcolor: 'white',
      }}
      aria-label={ariaLabel || label}>
      <Avatar sx={{ bgcolor: color, mb: 1, width: 32, height: 32 }}>{icon}</Avatar>
      <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }} gutterBottom>
        {label}
      </Typography>
      <Typography variant="h5" sx={{ color, fontWeight: 700, mb: 0.5 }}>
        {value}
      </Typography>
      {secondary && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
          {secondary}
        </Typography>
      )}
      {trend && (
        <Chip
          size="small"
          label={
            <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <span style={{ color: isUp ? '#4CAF50' : '#F44336', fontWeight: 700 }}>
                {isUp ? '↑' : '↓'} {trend}
              </span>
              <span style={{ color: '#888', marginLeft: 4 }}>{trendLabel}</span>
            </Box>
          }
          sx={{ mt: 'auto', bgcolor: isUp ? '#e8f5e9' : '#ffebee', color: isUp ? '#388e3c' : '#d32f2f', fontWeight: 500 }}
        />
      )}
    </Paper>
  );
}
