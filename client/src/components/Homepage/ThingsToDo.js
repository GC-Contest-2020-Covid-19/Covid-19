import React from "react";
import { Link } from "react-router-dom";
import SVG from "../SVGs/SVG";

const ThingsToDo = () => {
	return (
		<section className='hero is-medium' id='things-to-do'>
			<div className='hero-body'>
				<div className='container is-widescreen'>
					<div className='has-text-centered'>
						<h2 className='title'>
							You've got to keep yourself as well as your mind active
						</h2>
						<p className='subtitle'>
							Here are a couple things you could do to pass the time and
							possibly improve yourself
						</p>
					</div>
					<div className='columns'>
						<Link
							to='https://www.scribd.com/'
							className='column custom-mt-3 has-text-centered'>
							<div className='box'>
								<h3 className='custom-mt-3 title'>Reading</h3>
								<p className='subtitle'>
									You probably already watch enough movies. Why not try a novel
									or two? A personal recommendation would be the Gone Series by
									Michael Grant.
								</p>
								<SVG type='reading' width='300' />
							</div>
						</Link>
						<Link
							to='https://www.youtube.com/learning'
							className='column custom-mt-3 has-text-centered'>
							<div className='box'>
								<h3 className='custom-mt-3 title'>Youtube</h3>
								<p className='subtitle'>
									It might have started as a way to share cat videos, but it's
									currently the largest hub for free online courses and topis on
									various topics
								</p>
								<SVG type='youtube' width='300' />
							</div>
						</Link>
						<Link
							to='https://www.verywellfit.com/best-ways-to-exercise-at-home-1231142'
							className='column custom-mt-3 has-text-centered'>
							<div className='box'>
								<h3 className='custom-mt-3 title'>Excercise</h3>
								<p className='subtitle'>
									Sure you can't go outside. But excersises don't exist outdoors
									alone. You don't even need fancy equipment
								</p>
								<SVG type='skateboard' width='300' />
							</div>
						</Link>
					</div>

					<h2 className='title has-text-centered custom-mt-5'>
						Other things you can do
					</h2>

					<div className='columns'>
						<Link
							to='/charities'
							className='column custom-mt-3 has-text-centered'>
							<div className='box'>
								<h3 className='custom-mt-3 title'>Donate</h3>
								<p className='subtitle'>
									People have been affected in all kinds of ways. If you're
									capable, find out how you can help others
								</p>
								<SVG type='gifts' width='300' />
							</div>
						</Link>
						<Link to='/map' className='column custom-mt-3 has-text-centered'>
							<div className='box'>
								<h3 className='custom-mt-3 title'>Food Banks</h3>
								<p className='subtitle'>
									No one should go hungry during the COVID-19 pandemic. With
									school closures, job disruptions, and health risks, millions
									of people will turn to food banks for much-needed support
								</p>
								<SVG type='food' width='300' />
							</div>
						</Link>
						<Link to='/map' className='column custom-mt-3 has-text-centered'>
							<div className='box'>
								<h3 className='custom-mt-3 title'>Get Tested</h3>
								<p className='subtitle'>
									Only with testing can we know who already has it, how it's
									spreading and how it can be effectively stopped
								</p>
								<SVG type='tests' width='300' />
							</div>
						</Link>
					</div>

					<div className='has-text-centered custom-mt-5'>
						<h2 className='title has-text-info'>
							Above all, observe social distancing, keep a basic hygiene and
							don't panic
						</h2>
						<p className='subtitle'>
							It's not the end of the world........
							<span className='has-text-danger is-size-3'>YET</span>
						</p>
						<SVG type='washHands' width='100%' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ThingsToDo;
