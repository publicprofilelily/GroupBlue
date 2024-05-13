import React from 'react';
import Header from './components/Header';
import { Link } from 'react-router-dom';


// Pass the child props
export default function Layout({ children }) {
	return (
		<div>
			<Header>
				<nav >
					<ul className="grid grid-flow-col gap-10" >
						<li><Link to="/">Home</Link></li>
						<li><Link to="/About">About us</Link></li>
						<li><Link to="/products">Products</Link></li>
						<li><Link to="/contact">Contact</Link></li>
						<li><Link to="/profile">Profile</Link></li>
					</ul>
				</nav>
			</Header>
			<div className="flex justify-center m-4">
				{children}
			</div>
		</div>
	);
}
