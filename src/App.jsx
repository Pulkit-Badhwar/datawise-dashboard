import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import UserManagement from './pages/UserManagement';
import Settings from './pages/Settings';
import Login from './pages/Login';
import './styles/main.scss';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="/reports" element={<PrivateRoute element={<Reports />} />} />
            <Route path="/users" element={<PrivateRoute element={<UserManagement />} />} />
            <Route path="/settings" element={<PrivateRoute element={<Settings />} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
