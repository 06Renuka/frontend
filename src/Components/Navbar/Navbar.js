import React from 'react';
import { Button } from 'react-bootstrap';
import logo from '../../Assets/logo.png'; // Adjust the path to your logo
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Create and import a custom CSS file for additional styles

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ position: 'relative' }}>
      <div className="navbar-content">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <Button variant="outline-dark" className="navbar-button">
          Contact Us
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
