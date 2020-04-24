import React from "react";

const Navbar = () => {
	return (
		<nav className='flex'>
			<a className='mr-auto' href='#dud'>
				SVG logo
			</a>
			<ul className='flex'>
				<li>
					<a href='#dud'>Link 1</a>
				</li>
				<li>
					<a href='#dud'>Link 2</a>
				</li>
				<li>
					<a href='#dud'>Link 3</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
