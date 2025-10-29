import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from 'features/home/Home.jsx';
import Contact from 'features/contact/Contact.jsx';
import MainLayout from 'layouts/main-layout/MainLayout.jsx';
import Login from 'features/login/Login.jsx';
import Register from 'features/register/Register.jsx';
import Recovery from 'features/recovery/Recovery.jsx';
import AuthLayout from 'layouts/auth-layout/AuthLayout.jsx';
import DashboardLayout from 'layouts/dashboard-layout/DashboardLayout.jsx';
import Overview from 'features/dashboard/Dashboard.jsx';
import UserManagement from 'features/user-management/UserManagement.jsx';
import AssetManagement from 'features/asset-management/AssetManagement.jsx';
import LicenseManagement from 'features/license-management/LicenseManagement.jsx';
import SupportTickets from 'features/support-tickets/SupportTickets.jsx';
import UserDetails from 'features/user-details/UserDetails.jsx';
import LicenseDetails from 'features/dashboard/license-details/LicenseDetails.jsx';
import AssetDetails from 'features/asset-details/AssetDetails.jsx';
import TicketDetails from 'features/ticket-details/TicketDetails.jsx';
import EditProfile from 'features/edit-profile/EditProfile.jsx';
import AccountSettings from 'features/account-settings/AccountSettings.jsx';
import { withUser } from './appConnector.jsx';

function PrivateRoute({ user, loadingUser, children }) {
  return !loadingUser && !user ? <Navigate to="login" /> : children;
}

function App({ user, loading }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout user={user} loadingUser={loading} />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="recovery" element={<Recovery />} />
        </Route>
        <Route
          element={
            <PrivateRoute user={user} loadingUser={loading}>
              <DashboardLayout user={user} />
            </PrivateRoute>
          }>
          <Route path="dashboard" element={<Overview />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="users/:id" element={<UserDetails />} />
          <Route path="assets" element={<AssetManagement />} />
          <Route path="assets/:id" element={<AssetDetails />} />
          <Route path="licenses" element={<LicenseManagement />} />
          <Route path="licenses/:id" element={<LicenseDetails />} />
          <Route path="tickets" element={<SupportTickets />} />
          <Route path="tickets/:id" element={<TicketDetails />} />
          <Route path="profile" element={<EditProfile />} />
          <Route path="settings" element={<AccountSettings />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default withUser(App);
