import React, { useState } from 'react';
import axios from 'axios';

const ClientForm = ({ fetchClients }) => {
  const [clientName, setClientName] = useState('');
  const [industry, setIndustry] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://vercel-backend-b86x.vercel.app/api/clients', {
        name: clientName,
        industry,
        contactInfo,
      });
      fetchClients(); // Refresh client list
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Client Name"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Industry"
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
      />
      <input
        type="text"
        placeholder="Contact Info"
        value={contactInfo}
        onChange={(e) => setContactInfo(e.target.value)}
      />
      <button type="submit">Create Client</button>
    </form>
  );
};

export default ClientForm;
