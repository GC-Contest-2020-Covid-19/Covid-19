import React, { useEffect } from "react";
import { connect } from "react-redux";
import Navbar from "./components/Navbar";
import { setSummary } from "./redux/summaryReducer";
import Summary from "./components/Summary";
import "./assets/styles/main.css";

function App({ setSummary, summary }) {
	useEffect(() => {
		setSummary();
	}, []);

	return (
		<div>
			<header>
				<Navbar />
				{/* basic info about the site */}
			</header>
			<main className='flex flex-wrap'>
				{summary?.Countries?.map((country) => (
					<Summary key={country.CountryCode} place={country} />
				))}
			</main>
			<footer>{/* contact devs, about, github */}</footer>
		</div>
	);
}

const mapStateToProps = ({ summary }) => {
	return {
		summary,
	};
};

const mapDispatchToProps = { setSummary };

export default connect(mapStateToProps, mapDispatchToProps)(App);
