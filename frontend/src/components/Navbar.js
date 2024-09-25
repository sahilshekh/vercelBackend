import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Client Manager
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/clients" className="nav-links">Clients</Link>
          </li>
          <li className="nav-item">
            <Link to="/users" className="nav-links">Users</Link>
          </li>
          <li className="nav-item">
            <Link to="/reports" className="nav-links">Reports</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin" className="nav-links">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
