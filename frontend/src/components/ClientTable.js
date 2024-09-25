import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientTable = () => {
  const [clients, setClients] = useState([]);

  const fetchClients = async () => {
    try {
      const response = await axios.get('https://vercel-backend-b86x.vercel.app/api/clients');
      setClients(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleDelete = async (clientId) => {
    try {
      await axios.delete(`https://vercel-backend-b86x.vercel.app/api/clients/${clientId}`);
      fetchClients(); // Refresh client list
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Industry</th>
          <th>Contact Info</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <tr key={client.id}>
            <td>{client.name}</td>
            <td>{client.industry}</td>
            <td>{client.contactInfo}</td>
            <td>
              <button onClick={() => handleDelete(client.id)}>Delete</button>
              <button>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientTable;
