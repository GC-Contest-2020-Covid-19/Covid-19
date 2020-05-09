import React from "react";
import Intro from "./Intro";
import ThingsToDo from "./ThingsToDo";
import Features from "./Features";
import Footer from "./Footer";

const Homepage = () => {
	return (
		<>
			<Intro />
			<Features />
			<ThingsToDo />
			<Footer />
		</>
	);
};

export default Homepage;
