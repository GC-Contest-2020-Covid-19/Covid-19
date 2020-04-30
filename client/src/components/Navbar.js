import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [active, setActive] = useState(false);
	const isActive = () => (active ? "is-active" : "");
	return (
		<nav className='navbar' role='navigation' aria-label='main navigation'>
			<div className='container'>
				<div className='navbar-brand'>
					<Link className='navbar-item' to='/'>
						SVG logo
					</Link>

					<a
						role='button'
						onClick={() => setActive(!active)}
						className={`navbar-burger burger ${isActive()}`}
						aria-label='menu'
						aria-expanded='false'
						data-target='navbarTarget'>
						<span aria-hidden='true'></span>
						<span aria-hidden='true'></span>
						<span aria-hidden='true'></span>
					</a>
				</div>

				<div id='navbarTarget' className={`navbar-menu ${isActive()}`}>
					<ul className='navbar-end'>
						<li className='navbar-item'>
							<Link className='navbar-link is-arrowless' to='/summary'>
								Summary
							</Link>
						</li>
						<li className='navbar-item'>
							<Link className='navbar-link is-arrowless' to='/progression'>
								Progression
							</Link>
						</li>
						<li className='navbar-item'>
							<Link className='navbar-link is-arrowless' to='/map'>
								Map
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
