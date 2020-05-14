import React from "react";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";
import moment from "moment";

const ProgressionByCountry = ({ fromDayOne }) => {
	const data = {
		labels: fromDayOne?.dates?.map((singleDay) =>
			moment(new Date(singleDay).toISOString()).format("MMM Do")
		),
		datasets: [
			{
				label: "Confirmed Cases",
				data: fromDayOne?.cases?.map((c) => c),
				backgroundColor: [
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
			{
				label: "Deaths",
				data: fromDayOne?.deaths?.map((death) => death),
				backgroundColor: [
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
			{
				label: "Recovered",
				data: fromDayOne?.recovereds?.map((recovered) => recovered),
				backgroundColor: [
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
	};
	return (
		<div className='custom-m-3 has-text-centered'>
			<small>Click on parameters to select or unselect them</small>
			{fromDayOne ? <Line options={{ responsive: true, maintainAspectRatio: false }} data={data}  width={chartWidth} height={chartHeight} /> : null}
		</div>
	);
};

const mapStateToProps = ({ fromDayOne }) => {
	return { fromDayOne };
};

export default connect(mapStateToProps)(ProgressionByCountry);

const chartWidth = window.innerWidth * 0.7
const chartHeight = window.innerHeight * 0.3