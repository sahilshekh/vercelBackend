import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Clients from './Pages/Clients';
import Users from './Pages/Users';
import Reports from './Pages/Reports';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';
import PrivateRoute from './components/ProtectRoutes'; // Ensure this component is implemented

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/clients" 
          element={
            <PrivateRoute>
              <Clients />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/users" 
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/reports" 
          element={
            <PrivateRoute>
              <Reports />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/admin" 
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
