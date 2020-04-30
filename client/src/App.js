import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import "./App.scss";

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
			<Navbar />

			<Route exact path='/' component={Homepage} />

			<Route exact path='/progression'>
				<ProgressionByCountrySelect />
				<ProgressionByCountry />
			</Route>

<<<<<<< HEAD
			<Route exact path='/summary' component={DisplaySummary} />
=======
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
>>>>>>> e464732ee02fb0cec5e7da0e68f68ae37b8aadf9

			{/* display useful information on a map*/}
			<Route path='/map'>
				<Input />
				<CoronaMap />
			</Route>
		</Router>
	);
}

export default App;
