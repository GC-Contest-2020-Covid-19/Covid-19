import React from "react";
import { Link } from "react-router-dom";
import SVG from "./SVGs/SVG";

const Footer = () => {
	return (
		<footer className='hero is-small has-background-grey-darker'>
			<div className='hero-body'>
				<div className='container'>
					<div className='columns is-centered'>
						<div className='column'>
							<div className='columns is-vcentered'>
								<div className='column has-text-centered'>
									<h3 className='subtitle has-text-light'>Features</h3>
									<ul>
										<li>
											<Link to='/summary' className='is-link'>
												Summary chart
											</Link>
										</li>
										<li>
											<Link to='/progression' className='is-link'>
												Progression chart
											</Link>
										</li>
										<li>
											<Link to='/map' className='is-link'>
												Food Drives
											</Link>
										</li>
									</ul>
								</div>
								<div className='column has-text-centered'>
									<h3 className='subtitle has-text-light'>Company</h3>
									<ul>
										<li>
											<Link
												to='https://github.com/orgs/GC-Contest-2020-Covid-19/people'
												className='is-link'>
												Developers
											</Link>
										</li>
										<li>
											<Link to='/about' className='is-link'>
												About
											</Link>
										</li>
									</ul>
								</div>
								<div className='column has-text-centered '>
									<span className='custom-mx-3'>
										<SVG type='socials' socialType='facebook' />
									</span>
									<span className='custom-mx-3'>
										<SVG type='socials' socialType='twitter' />
									</span>
									<span className='custom-mx-3'>
										<SVG type='socials' socialType='pinterest' />
									</span>
									<span className='custom-mx-3'>
										<SVG type='socials' socialType='instagram' />
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
