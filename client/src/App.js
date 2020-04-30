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
import { Input } from "./components/Map/Input";
import { CoronaMap } from "./components/Map/Map";

function App() {
	return (
		<Router>
			<Navbar />

			<Route exact path='/' component={Homepage} />

			<Route exact path='/progression'>
				<ProgressionByCountrySelect />
				<ProgressionByCountry />
			</Route>

			<Route exact path='/summary' component={DisplaySummary} />

			{/* display useful information on a map*/}
			<Route path='/map'>
				<Input />
				<CoronaMap />
			</Route>
		</Router>
	);
}

export default App;
