import React, { useState } from "react";
import { Link } from "react-router-dom";

const CTA = () => {
	const [isClicked, setIsClicked] = useState(false);
	const handleClick = () => {
		setIsClicked(!isClicked);
	};

	return (
		<section id='help-cta' className='hero is-small has-background-grey'>
			<div className='hero-body'>
				<div className='container'>
					<div className='columns is-centered'>
						<div className='column is-half has-text-centered'>
							{isClicked ? (
								<>
									<div className='custom-mb-3'>
										<Link className='button is-link custom-mr-1' to='/help/get'>
											Get Help
										</Link>
										<Link
											className='button is-link custom-ml-1'
											to='/help/give'>
											Lend Help
										</Link>
									</div>
									<button onClick={handleClick} className='button is-primary'>
										Cancel
									</button>
								</>
							) : (
								<>
									<p className='is-size-3 has-text-light'>
										Need help or want to provide help?
									</p>
									<button onClick={handleClick} className='button is-primary'>
										Proceed
									</button>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTA;
