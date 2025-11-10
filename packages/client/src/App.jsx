import { useState } from 'react';
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
import Toast from 'shared/components/Toast/Toast.jsx';
import PageLoader from 'layouts/page-loader/PageLoader.jsx';
import { withUser } from './appConnector.jsx';

function PrivateRoute({ children, isAuthenticated, loadingUser }) {
  if (loadingUser) return <PageLoader />;
  return isAuthenticated ? children : <Navigate to="login" />;
}

function PublicRoute({ children, isAuthenticated, loadingUser }) {
  if (loadingUser) return <PageLoader />;
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : children;
}

function App({ user, loading, isAuthenticated, logout }) {
  const [toast, setToast] = useState({ open: false, message: '', severity: 'success' });

  const openToast = (message, severity = 'success', time = 0, duration = 3000) => {
    setTimeout(() => {
      setToast({ open: true, message, severity });
      setTimeout(() => {
        setToast({ open: false, message: '', severity: 'success' });
      }, duration);
    }, time);
  };

  return (
    <Router>
      {toast?.open && <Toast {...toast} />}
      <Routes>
        <Route path="/" element={<MainLayout user={user} loadingUser={loading} logout={logout} />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route
          element={
            <PublicRoute isAuthenticated={isAuthenticated} loadingUser={loading}>
              <AuthLayout />
            </PublicRoute>
          }>
          <Route path="login" element={<Login openToast={openToast} />} />
          <Route path="register" element={<Register />} />
          <Route path="recovery" element={<Recovery />} />
        </Route>
        <Route
          element={
            <PrivateRoute user={user} loadingUser={loading} isAuthenticated={isAuthenticated}>
              <DashboardLayout user={user} logout={logout} openToast={openToast} />
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

const AppWithUser = withUser(App);

export default AppWithUser;
