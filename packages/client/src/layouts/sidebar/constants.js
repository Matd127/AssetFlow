import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ComputerIcon from '@mui/icons-material/Computer';
import KeyIcon from '@mui/icons-material/Key';
import SupportIcon from '@mui/icons-material/Support';

export const MENU_ITEMS = [
  { title: 'Home', icon: HomeIcon, path: '/' },
  { title: 'Dashboard', icon: DashboardIcon, path: '/dashboard' },
  { title: 'User Management', icon: PeopleIcon, path: '/users' },
  { title: 'Asset Management', icon: ComputerIcon, path: '/assets' },
  { title: 'License Management', icon: KeyIcon, path: '/licenses' },
  { title: 'Support Tickets', icon: SupportIcon, path: '/tickets' },
];
