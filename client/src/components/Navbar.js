import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className='flex'>
			<Link className='mr-auto ml-5' to='/'>
				SVG logo
			</Link>
			<ul className='flex'>
				<li className='mr-5'>
					<Link to='/summary'>Summary</Link>
				</li>
				<li className='mr-5'>
					<Link to='/progression'>Progression</Link>
				</li>
				<li className='mr-5'>
					<Link to='/map'>Map</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
