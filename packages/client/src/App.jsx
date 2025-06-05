import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from 'features/home/Home.jsx';
import Contact from 'features/contact/Contact.jsx';
import MainLayout from 'layouts/main-layout/MainLayout.jsx';
import { Login, Register, Recovery } from 'features/auth';
import AuthLayout from 'layouts/auth-layout/AuthLayout.jsx';
import DashboardLayout from 'layouts/dashboard-layout/DashboardLayout.jsx';
import { 
  Overview, 
  UserManagement, 
  AssetManagement, 
  LicenseManagement, 
  SupportTickets 
} from 'features/dashboard';

// Mock authentication check - replace with real auth logic later
const isAuthenticated = true;

function PrivateRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/auth/login" />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Auth routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="recovery" element={<Recovery />} />
        </Route>

        {/* Protected dashboard routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Overview />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="assets" element={<AssetManagement />} />
          <Route path="licenses" element={<LicenseManagement />} />
          <Route path="tickets" element={<SupportTickets />} />
          <Route path="settings" element={<div>Settings Page</div>} />
        </Route>

        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
