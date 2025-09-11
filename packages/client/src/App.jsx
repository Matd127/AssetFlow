import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from 'features/home/Home.jsx';
import Contact from 'features/contact/Contact.jsx';
import MainLayout from 'layouts/main-layout/MainLayout.jsx';
import { Login, Register, Recovery } from 'features/auth';
import AuthLayout from 'layouts/auth-layout/AuthLayout.jsx';
import DashboardLayout from 'layouts/dashboard-layout/DashboardLayout.jsx';
import { Overview, UserManagement, AssetManagement, LicenseManagement, SupportTickets } from 'features/dashboard';
import UserDetails from 'features/dashboard/UserDetails.jsx';
import LicenseDetails from 'features/dashboard/LicenseDetails.jsx';
import AssetDetails from 'features/dashboard/AssetDetails.jsx';
import TicketDetails from 'features/dashboard/TicketDetails.jsx';
import EditProfile from 'features/dashboard/EditProfile.jsx';
import AccountSettings from 'features/dashboard/AccountSettings.jsx';

// TODO: Replace with real auth logic later
const isAuthenticated = true;

function PrivateRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/auth/login" />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="recovery" element={<Recovery />} />
        </Route>

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }>
          <Route index element={<Overview />} />
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
