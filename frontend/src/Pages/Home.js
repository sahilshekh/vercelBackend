import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to the Client Management System</h1>
        <p>Your one-stop solution for managing clients, users, and generating reports efficiently.</p>
     <Link to="/login" className="get-started-button">Get Started</Link>
      </div>
    </div>
  );
};

export default Home;
