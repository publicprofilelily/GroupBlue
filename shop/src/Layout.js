import React from 'react';
import Header from './components/Header';
import Sidebar from './components/sidebar/Sidebar'; // Ensure this path matches the actual file location
import { Link } from 'react-router-dom';

// Pass the child props
export default function Layout({ children }) {
  return ( // Added the return statement here
    <div>
      <Header>
        <nav>
          <ul className="grid grid-flow-col gap-10">
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