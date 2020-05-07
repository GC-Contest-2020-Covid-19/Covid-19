import React from "react";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import WashHands from "./WashHands";
import MedicalDoc from "./MedicalDoc";
import SocialDistance from "./SocialDistance";
import Socials from "./Socials";

const SVG = ({ type, width, socialType }) => {
	const svgs = {
		pieChart: <PieChart width={width} />,
		lineChart: <LineChart width={width} />,
		washHands: <WashHands width={width} />,
		medical: <MedicalDoc width={width} />,
		distance: <SocialDistance width={width} />,
		socials: <Socials socialType={socialType} />,
	};
	return svgs[type];
};

export default SVG;
