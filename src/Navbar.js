import React from 'react';
import './Navbar.css'; // Import CSS for the Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">(To be decided...)</div>
      <div className="navbar-buttons">
        <button className="navbar-button">Home</button>
        <button className="navbar-button">About</button>
        <button className="navbar-button">Contact Us</button>
        <button className="navbar-button">Login/Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
