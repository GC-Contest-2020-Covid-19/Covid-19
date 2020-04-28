import React from "react";
import Navbar from "./components/Navbar";
import "./assets/styles/main.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//summary chart
import DisplaySummary from "./components/DisplaySummary";

//progression by country
import ProgressionByCountry from "./components/charts/ProgressionByCountry";
import ProgressionByCountrySelect from "./components/ProgressionByCountrySelect";

// map
import { MapInput } from "./components/Map/MapInput";
import { CoronaMap } from "./components/Map/Map";

// charities
import { CharityInput } from './components/Charity/CharityInput'
import { CharityList } from './components/Charity/CharityList'

function App() {
	return (
		<Router>
			<header>
				<Navbar />
				{/* Add basic info about the site */}
			</header>

			<main className='w-screen h-screen'>
				<Route exact path='/' render={() => <h1>Home Page!!!</h1>} />

				<Route exact path='/progression'>
					<ProgressionByCountrySelect />
					<ProgressionByCountry />
				</Route>

				<Route exact path='/summary' component={DisplaySummary} />

				{/* display useful information on a map*/}
				<Route path='/map'>
					<MapInput />
					<CoronaMap />
				</Route>

				{/* diplay charities */}
				<Route path='/help'>
					<CharityInput />
					<CharityList />
				</Route>
			</main>

			<footer>{/* contact devs, about, github */}</footer>
		</Router>
	);
}

export default App;
