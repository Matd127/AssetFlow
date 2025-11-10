import { useState } from 'react';
import { Avatar, IconButton, Menu, MenuItem, Divider } from '@mui/material';
import { getNameInitials } from 'shared/utils/getNameInitials.js';

export default function AccountMenu({ navigate, user, logout, openToast }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleClick = path => {
    handleClose();
    navigate(path);
  };

  const handleLogout = () => {
    logout();
    openToast('Logged out successfully', 'success');
  };

  return (
    <>
      <IconButton onClick={handleOpen} size="small">
        <Avatar sx={{ width: 32, height: 32, bgcolor: '#006397' }}>{getNameInitials(user?.firstName, user?.lastName)}</Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            minWidth: 150,
            borderRadius: 2,
            boxShadow: 3,
          },
        }}>
        <MenuItem onClick={() => handleClick('profile')}>Edit Profile</MenuItem>
        <MenuItem onClick={() => handleClick('settings')}> Settings</MenuItem>
        <Divider />
        {/*<MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>*/}
        <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
