import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { setupMyths } from "../../redux/reducers/mythsReducer";

const Myths = ({ setupMyths, myths }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		const inStorage = window.localStorage.getItem("myths");
		if (inStorage && inStorage.length > 0) {
			dispatch({ type: "SETUP_MYTHS", payload: JSON.parse(inStorage) });
		} else {
			setupMyths();
		}
	}, []);
	useEffect(() => {
		window.localStorage.setItem("myths", JSON.stringify(myths));
	}, [myths]);
	return myths ? (
		<section id='myths' className='custom-px-3'>
			<h2 className='has-text-centered is-size-2'>
				Common myths about the virus and disease
			</h2>
			{myths?.map((myth, index) => {
				return (
					<div key={index} className='box'>
						<h3 className='custom-mb-3 custom-p-2 has-background-grey-lighter has-text-black is-size-3-desktop is-size-4-tablet is-size-5-mobile'>
							{myth.title}
						</h3>
						<p className='is-size-4-desktop is-size-5-tablet is-size-6-mobile'>
							{myth.paragraph}
						</p>
						<br />
					</div>
				);
			})}
			<section
				className='custom-p-3 has-background-grey-light'
				id='find-out-more'>
				<a
					className='has-text-white'
					href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters'
					target='_blank'>
					Find out more
				</a>
			</section>
		</section>
	) : (
		<h1>Loading myths....</h1>
	);
};
const mapStateToProps = ({ myths }) => {
	return { myths };
};
export default connect(mapStateToProps, { setupMyths })(Myths);
