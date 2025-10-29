import { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import DevicesIcon from '@mui/icons-material/Devices';
import KeyIcon from '@mui/icons-material/Key';
import PeopleIcon from '@mui/icons-material/People';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

import KpiCard from './components/KpiCard';
import RecentActivityTable from './components/RecentActivityTable';
import AssetStatusDonut from './components/AssetStatusDonut';
import LicensesByCategoryBar from './components/LicensesByCategoryBar';
import TicketsOverTimeLine from './components/TicketsOverTimeLine';
import TopUsersWidget from './components/TopUsersWidget';
import QuickActionsBar from './components/QuickActionsBar';

import AssetModal from './components/AssetModal';
import LicenseModal from './components/LicenseModal';
import UserModal from './components/UserModal';
import TicketModal from './components/TicketModal';

export default function Dashboard() {
  const [openAssetModal, setOpenAssetModal] = useState(false);
  const [openLicenseModal, setOpenLicenseModal] = useState(false);
  const [openUserModal, setOpenUserModal] = useState(false);
  const [openTicketModal, setOpenTicketModal] = useState(false);

  const handleQuickAction = action => {
    switch (action) {
      case 'asset':
        setOpenAssetModal(true);
        break;
      case 'license':
        setOpenLicenseModal(true);
        break;
      case 'user':
        setOpenUserModal(true);
        break;
      case 'ticket':
        setOpenTicketModal(true);
        break;
      default:
        break;
    }
  };

  const handleModalSubmit = (data, type) => {
    // TODO: API integration - send data to backend
    console.log(`${type} submitted:`, data);
    // Close the appropriate modal
    switch (type) {
      case 'asset':
        setOpenAssetModal(false);
        break;
      case 'license':
        setOpenLicenseModal(false);
        break;
      case 'user':
        setOpenUserModal(false);
        break;
      case 'ticket':
        setOpenTicketModal(false);
        break;
    }
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: '#f9fafb', minHeight: '100vh' }}>
      <Typography variant="h4" fontWeight={700} mb={4} color="#333">
        Dashboard Overview
      </Typography>

      {/* KPI Cards Row */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 3,
          mb: 6,
        }}>
        <KpiCard icon={<DevicesIcon />} label="Total Assets" value="2,680" secondary="Devices managed" trend="+5.2%" trendLabel="vs last month" color="#006397" />
        <KpiCard icon={<KeyIcon />} label="Active Licenses" value="1,847" secondary="of 2,100 total" trend="+3.1%" trendLabel="vs last month" color="#4CAF50" />
        <KpiCard icon={<PeopleIcon />} label="Total Users" value="1,245" secondary="Active employees" trend="+2.8%" trendLabel="vs last month" color="#2196F3" />
        <KpiCard icon={<SupportAgentIcon />} label="Open Tickets" value="47" secondary="Pending resolution" trend="-12.5%" trendLabel="vs last month" color="#FF9800" />
      </Box>

      {/* Two-Column Section */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} lg={8}>
          <RecentActivityTable />
        </Grid>
        <Grid item xs={12} lg={4}>
          <AssetStatusDonut />
        </Grid>
      </Grid>

      {/* Bottom Row - Three Widgets */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} lg={4}>
          <LicensesByCategoryBar />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TicketsOverTimeLine />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TopUsersWidget />
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <QuickActionsBar onAction={handleQuickAction} />
      </Box>

      {/* Modals for Quick Actions */}
      <AssetModal open={openAssetModal} onClose={() => setOpenAssetModal(false)} onSubmit={data => handleModalSubmit(data, 'asset')} />
      <LicenseModal open={openLicenseModal} onClose={() => setOpenLicenseModal(false)} onSubmit={data => handleModalSubmit(data, 'license')} />
      <UserModal open={openUserModal} onClose={() => setOpenUserModal(false)} onSubmit={data => handleModalSubmit(data, 'user')} />
      <TicketModal open={openTicketModal} onClose={() => setOpenTicketModal(false)} onSubmit={data => handleModalSubmit(data, 'ticket')} />
    </Box>
  );
}
