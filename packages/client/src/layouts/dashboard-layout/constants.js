import PeopleIcon from '@mui/icons-material/People';
import ComputerIcon from '@mui/icons-material/Computer';
import KeyIcon from '@mui/icons-material/Key';

const NOTIFICATIONS = [
  { id: 1, text: 'New user registered: John Doe', icon: <PeopleIcon fontSize="small" color="primary" />, time: '2 min ago' },
  { id: 2, text: 'Asset "Laptop-123" is due for maintenance', icon: <ComputerIcon fontSize="small" color="warning" />, time: '10 min ago' },
  { id: 3, text: 'License for "Photoshop" is expiring soon', icon: <KeyIcon fontSize="small" color="error" />, time: '1 hr ago' },
];
