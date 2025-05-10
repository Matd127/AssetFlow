import Inventory2Icon from '@mui/icons-material/Inventory2';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

export const CAPABILITIES = [
  {
    id: 1,
    title: 'Complete IT Asset Control',
    text: 'Track device history, assignments, warranties, and maintenance schedules. Get a comprehensive view of your entire IT inventory in one place.',
    icon: Inventory2Icon,
  },
  {
    id: 2,
    title: 'Centralized License Management',
    text: 'Monitor software validity, prevent compliance issues, and avoid costly mistakes. Automated alerts before license expiration.',
    icon: VerifiedUserIcon,
  },
  {
    id: 3,
    title: 'Automated Reporting',
    text: 'Generate detailed asset reports, analyze usage patterns, and optimize IT expenses. Make data-driven decisions with customizable dashboards.',
    icon: AssessmentIcon,
  },
  {
    id: 4,
    title: 'Alerts & Notifications',
    text: 'Never miss important maintenance and license renewal dates. Stay on top of critical events with customizable notification settings.',
    icon: NotificationsActiveIcon,
  },
  {
    id: 5,
    title: 'Procurement Management',
    text: 'Streamline the purchasing process, track orders, and manage vendors. Reduce procurement costs with intelligent recommendations.',
    icon: ShoppingCartCheckoutIcon,
  },
  {
    id: 6,
    title: 'Cloud Integration',
    text: 'Seamlessly integrate with cloud services and SaaS applications. Monitor cloud resource usage and optimize cloud spending.',
    icon: CloudQueueIcon,
  },
];
