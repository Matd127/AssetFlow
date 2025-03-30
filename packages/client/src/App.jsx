import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'features/home/Home.jsx';
import MainLayout from 'layouts/main-layout/MainLayout.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
