import React, { useState } from "react";
import { Link } from "react-router-dom";
import { changeTheme } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import SVG from "../SVGs/SVG";

const Navbar = () => {
	const [active, setActive] = useState(false);
	const isActive = () => (active ? "is-active" : "");

	const dispatch = useDispatch();
	const ToggleTheme = () => {
		dispatch(changeTheme());
	};

	return (
		<nav className='navbar' role='navigation' aria-label='main navigation'>
			<div className='container'>
				<div className='navbar-brand'>
					<Link className='navbar-item' to='/'>
						Covid-19
					</Link>

					<a className='navbar-item' onClick={ToggleTheme}>
						<SVG className='sun' type='sun' width={25}/>Toggle Darkmode
					</a>

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
						<li className='navbar-item is-hoverable'>
							<p className='custom-nav-link custom-p-1'>Statistics</p>
							<ul className='navbar-dropdown is-boxed'>
								<li className='navbar-item'>
									<Link className='is-arrowless custom-nav-link custom-p-1' to='/summary'>
										Summary
									</Link>
								</li>
								<li className='navbar-item'>
									<Link className='is-arrowless custom-nav-link custom-p-1' to='/progression'>
										Progression
									</Link>
								</li>
								<li className='navbar-item'>
									<Link className='is-arrowless custom-nav-link custom-p-1' to='/model'>
										Model
									</Link>
								</li>
							</ul>
						</li>

						<li className='navbar-item is-hoverable'>
							<p className='custom-nav-link custom-p-1'>Information</p>
							<ul className='navbar-dropdown is-boxed'>
								<li className='navbar-item'>
									<Link className='is-arrowless custom-nav-link custom-p-1' to='/info'>
										Disease
									</Link>
								</li>
								<li className='navbar-item'>
									<Link className='is-arrowless custom-nav-link custom-p-1' to='/info/myths'>
										Myths
									</Link>
								</li>
							</ul>
						</li>
						<li className='navbar-item is-hoverable'>
							<p className='custom-nav-link custom-p-1'>Help</p>
							<ul className='navbar-dropdown is-boxed'>
								<li className='navbar-item'>
									<Link className='is-arrowless custom-nav-link custom-p-1' to='/map'>
										Interactive map
									</Link>
								</li>
								<li className='navbar-item'>
									<Link className='is-arrowless custom-nav-link custom-p-1' to='/charities'>
										Charities
									</Link>
								</li>
								<li className='navbar-item'>
									<Link className='is-arrowless custom-nav-link custom-p-1' to='/courses'>
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
