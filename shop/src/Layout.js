import React from 'react';
import Header from './components/Header';
import Sidebar from './components/sidebar/Sidebar'; // Ensure this path matches the actual file location
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


export default function Layout({ children }) {
	return (
	  <div>
		<Header>
		  <nav>
			<ul className="grid grid-flow-col gap-10">
			  <li>
				<Link to="/profile">Profile</Link>
			  </li>
			  <li>
				<Link to="/shoppingcart">
				  <FontAwesomeIcon icon={faCartShopping} /> ShoppingCart
				</Link>
			  </li>
			</ul>
		  </nav>
		</Header>
		<Sidebar />
		<div className="flex justify-center m-4" style={{ marginLeft: "200px" }}>
		  {children}
		</div>
	  </div>
	);
  }