import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="menu-items">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
