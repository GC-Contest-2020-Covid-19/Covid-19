import React, { useEffect } from "react";
import { connect } from "react-redux";
import Navbar from "./components/Navbar";
import { setSummary } from "./redux/reducers/summaryReducer";
import Summary from "./components/Summary";
import "./assets/styles/main.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'

// map
import { Input } from './components/Map/Input'
import { CoronaMap } from './components/Map/Map'


function App({ setSummary, summary }) {
	useEffect(() => {
		setSummary();
	}, []);

	return (
		<Router>
			<header>
				<Navbar />
				{/* basic info about the site */}
			</header>
			
			<main className='flex flex-wrap'>
				<Route exact path='/' render={ props => (
						<>
							{summary?.Countries?.map((country) => (
								<Summary key={country.CountryCode} place={country} />
							))}
						</>
					)}>
				</Route>
				
			</main>
			<div className="map">
				{/* display useful information on a map*/}		
				<Route path='/map' render={ props => (
					<>
						<Input />
						<CoronaMap />
					</>
				)}>
				</Route>
			</div>		
			<footer>{/* contact devs, about, github */}</footer>
		</Router>
	);
}

const mapStateToProps = ({ summary }) => {
	return {
		summary,
	};
};

const mapDispatchToProps = { setSummary };

export default connect(mapStateToProps, mapDispatchToProps)(App);
