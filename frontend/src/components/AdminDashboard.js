import React from 'react';
import ClientTable from './ClientTable';
import ClientForm from './ClientForm';
import './AdminDashboard.css'; // Ensure you have this for styling
import UserForm from './UserForm';
import UserTable from './UserTable';

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

        <div className="form-card">
          <h2>Add New User</h2>
          <UserForm />
        </div>
        <div className="table-card">
          <h2>User List</h2>
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
