import React from "react";

// redux
import { useSelector } from "react-redux";

// homepage
import Navbar from "./components/Homepage/Navbar";
import Homepage from "./components/Homepage/Homepage";
import { About } from "./components/About";

// information
import InfoDisplay from "./components/Info/InfoDisplay";
import Myths from "./components/Info/Myths";

// styling
import "./assets/styles/App.scss";
import { Container } from "./assets/styles/Themes";
import { ThemeProvider } from "styled-components";

// routing
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
import { CharityInput } from "./components/Charity/CharityInput";
import { CharityList } from "./components/Charity/CharityList";

// prediction model
import { ModelingInput } from "./components/Modeling/ModelingInput";
import { Model } from "./components/Modeling/Model";

// courses
import { CoursesInput } from "./components/Courses/CoursesInput";
import { CoursesList } from "./components/Courses/CoursesList";

function App() {
	const theme = useSelector((state) => state.user.theme);
	return (
		<Router>
			<ThemeProvider theme={{ theme: theme }}>
				<Container>
					{/* just so the text grows on bigger screens */}
					<div
						className='is-size-4-desktop is-size-5-tablet'
						style={{ minWidth: "100vw", minHeight: "100vh" }}>
						<Navbar />

						<Route exact path='/' component={Homepage} />

						<Route exact path='/summary' component={DisplaySummary} />

						<Route exact path='/progression'>
							<ProgressionByCountrySelect />
							<ProgressionByCountry />
						</Route>

						{/* display useful information on a map*/}
						<Route path='/map'>
							<MapInput />
							<CoronaMap />
						</Route>

						{/* diplay charities */}
						<Route path='/charities'>
							<CharityInput />
							<CharityList />
						</Route>

						{/* display predicition model */}
						<Route path='/model'>
							<ModelingInput />
							<Model />
						</Route>

						<Route path='/courses'>
							<CoursesInput />
							<CoursesList />
						</Route>

						<Route exact path='/info' component={InfoDisplay} />

						<Route exact path='/info/myths' component={Myths} />

						<Route exact path='/about' component={About} />
					</div>
				</Container>
			</ThemeProvider>
		</Router>
	);
}

export default App;
