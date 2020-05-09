import React from "react";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import WashHands from "./WashHands";
import MedicalDoc from "./MedicalDoc";
import SocialDistance from "./SocialDistance";
import Socials from "./Socials";
import Food from "./Food";
import Skateboard from "./Skateboard";
import Gifts from "./Gifts";
import Reading from "./Reading";
import Youtube from "./Youtube";
import Tests from "./Tests";

const SVG = ({ type, width, socialType }) => {
	const svgs = {
		pieChart: <PieChart width={width} />,
		lineChart: <LineChart width={width} />,
		washHands: <WashHands width={width} />,
		medical: <MedicalDoc width={width} />,
		distance: <SocialDistance width={width} />,
		socials: <Socials socialType={socialType} />,
		reading: <Reading width={width} />,
		youtube: <Youtube width={width} />,
		skateboard: <Skateboard width={width} />,
		gifts: <Gifts width={width} />,
		tests: <Tests width={width} />,
		food: <Food width={width} />,
	};
	return svgs[type];
};

export default SVG;
