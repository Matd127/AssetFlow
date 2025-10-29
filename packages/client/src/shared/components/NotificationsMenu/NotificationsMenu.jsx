import { useState } from 'react';
import { IconButton, Badge, Menu, MenuItem, Box, Typography, Divider } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function NotificationsMenu({ notifications = [] }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton size="small" onClick={handleOpen}>
        <Badge badgeContent={notifications.length} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 340, borderRadius: 2, boxShadow: 3, p: 0 },
        }}>
        <Typography variant="subtitle1" sx={{ px: 2, py: 1, fontWeight: 600 }}>
          Notifications
        </Typography>
        <Divider />

        {notifications.length === 0 ? (
          <Typography variant="body2" sx={{ px: 2, py: 2, color: 'text.secondary' }}>
            No new notifications
          </Typography>
        ) : (
          notifications.map(n => (
            <MenuItem key={n.id} onClick={handleClose} sx={{ alignItems: 'flex-start', gap: 1.5, py: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>{n.icon}</Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {n.text}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {n.time}
                </Typography>
              </Box>
            </MenuItem>
          ))
        )}

        <Divider />
        <Box sx={{ p: 1.5, textAlign: 'center' }}>
          <Typography variant="body2" color="primary" sx={{ cursor: 'pointer', fontWeight: 500 }} onClick={handleClose}>
            View all
          </Typography>
        </Box>
      </Menu>
    </>
  );
}
