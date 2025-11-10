import { AppBar, Toolbar } from '@mui/material';
import NotificationsMenu from 'shared/components/NotificationsMenu/NotificationsMenu.jsx';
import AccountMenu from 'shared/components/AccountMenu/AccountMenu.jsx';
import PeopleIcon from '@mui/icons-material/People';
import ComputerIcon from '@mui/icons-material/Computer';
import KeyIcon from '@mui/icons-material/Key';

const notifications = [
  { id: 1, text: 'New user registered: John Doe', icon: <PeopleIcon fontSize="small" color="primary" />, time: '2 min ago' },
  { id: 2, text: 'Asset "Laptop-123" is due for maintenance', icon: <ComputerIcon fontSize="small" color="warning" />, time: '10 min ago' },
  { id: 3, text: 'License for "Photoshop" is expiring soon', icon: <KeyIcon fontSize="small" color="error" />, time: '1 hr ago' },
];

export default function DashboardHeader({ navigate, user, logout, openToast }) {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        ml: '240px',
        width: 'calc(100% - 240px)',
        bgcolor: 'white',
        borderBottom: '1px solid',
        borderColor: 'divider',
        justifyContent: 'flex-end',
      }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <NotificationsMenu notifications={notifications} />
        <AccountMenu navigate={navigate} user={user} logout={logout} openToast={openToast} />
      </Toolbar>
    </AppBar>
  );
}
