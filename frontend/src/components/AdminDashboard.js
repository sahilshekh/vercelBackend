import React from 'react';
import ClientTable from './ClientTable';
import ClientForm from './ClientForm';
import './AdminDashboard.css'; // Ensure you have this for styling

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-container">
        <div className="form-card">
          <h2>Add New Client</h2>
          <ClientForm />
        </div>
        <div className="table-card">
          <h2>Client List</h2>
          <ClientTable />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
