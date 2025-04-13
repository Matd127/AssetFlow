import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'features/home/Home.jsx';
import MainLayout from 'layouts/main-layout/MainLayout.jsx';
import { Login, Register, Recovery } from 'features/auth';
import AuthLayout from 'layouts/auth-layout/AuthLayout.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="recovery" element={<Recovery />} />
        </Route>
      </Routes>
    </Router>
  );
}
