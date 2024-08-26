import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/App.css'; // added css to the project

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-navy">
      <div className="container-fluid">
        <div>
          <img className='logo' src="src/assets/images/logo.png" alt="School's logo" />
        </div>
        <NavLink className="navbar-brand" to="/">Veer International School</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                exact
                to="/" 
                activeStyle={{ color: 'red' }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/about-us" 
                activeStyle={{ color: 'red' }}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/contact-us" 
                activeStyle={{ color: 'red' }}
                
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/gallery" 
                activeStyle={{ color: 'red' }}
              >
                Gallery
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
