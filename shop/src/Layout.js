import React from 'react';
import Header from './components/Header';
import Sidebar from './components/sidebar/Sidebar'; // Correct import path
import { Link } from 'react-router-dom';

// Pass the child props
export default function Layout({ children }) {
  return ( 
    <div>
      <Header>
        <nav>
          <ul className="grid grid-flow-col gap-10">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About us</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </Header>
      <Sidebar /> {/* Sidebar component added here */}
      <div className="flex justify-center m-4" style={{ marginLeft: "200px" }}>
        {children}
      </div>
    </div>
  );
}
