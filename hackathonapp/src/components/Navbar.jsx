import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/IBM_logo.jpg';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h1 className="logo">@Hursley</h1>
      <div className="links">
        <Link to="/home">home</Link>
        <Link to="/list">view all events</Link>
        <Link to="/events">event manager</Link>
        <Link to="/education"></Link>
      </div>
    </nav>
  );
}

export default Navbar;
