import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [active, setActive] = useState(false);
	const isActive = () => (active ? "is-active" : "");
	return (
		<nav
			className='navbar is-light'
			role='navigation'
			aria-label='main navigation'>
			<div className='container'>
				<div className='navbar-brand'>
					<Link className='navbar-item' to='/'>
						Covid-19
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
						<li className='navbar-item has-dropdown is-hoverable'>
							<span className='navbar-link'>Statistics</span>
							<ul className='navbar-dropdown is-boxed'>
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
									<Link className='navbar-link is-arrowless' to='/model'>
										Model
									</Link>
								</li>
							</ul>
						</li>

						<li className='navbar-item has-dropdown is-hoverable'>
							<span className='navbar-link'>Information</span>
							<ul className='navbar-dropdown is-boxed'>
								<li className='navbar-item'>
									<Link className='navbar-link is-arrowless' to='/info'>
										Disease
									</Link>
								</li>
								<li className='navbar-item'>
									<Link className='navbar-link is-arrowless' to='/info/myths'>
										Myths
									</Link>
								</li>
							</ul>
						</li>
						<li className='navbar-item has-dropdown is-hoverable'>
							<span className='navbar-link'>Help</span>
							<ul className='navbar-dropdown is-boxed'>
								<li className='navbar-item'>
									<Link className='navbar-link is-arrowless' to='/map'>
										Interactive map
									</Link>
								</li>
								<li className='navbar-item'>
									<Link className='navbar-link is-arrowless' to='/charities'>
										Charities
									</Link>
								</li>
								<li className='navbar-item'>
									<Link className='navbar-link is-arrowless' to='/courses'>
										Courses
									</Link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
