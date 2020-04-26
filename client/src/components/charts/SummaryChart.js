import React from "react";
import { Doughnut } from "react-chartjs-2";
import moment from "moment";

const SummaryChart = ({ place }) => {
	const keys = Object.keys(place);
	const data = {
		new: {
			//turn something like "NewConfirmed" into "New Confirmed"
			labels: keys
				.filter((key) => key.includes("New"))
				.map((key) => key.split(/(?=[A-Z])/).join(" ")),
			datasets: [
				{
					data: [place.NewConfirmed, place.NewDeaths, place.NewRecovered],
					backgroundColor: [
						"rgba(158, 16, 235, 0.8)",
						"rgba(235, 31, 16, 0.8)",
						"rgba(7, 230, 63, 0.8)",
					],
				},
			],
		},
		total: {
			labels: keys
				.filter((key) => key.includes("Total"))
				.map((key) => key.split(/(?=[A-Z])/).join(" ")),
			datasets: [
				{
					data: [place.TotalConfirmed, place.TotalDeaths, place.TotalRecovered],
					backgroundColor: [
						"rgba(158, 16, 235, 0.8)",
						"rgba(235, 31, 16, 0.8)",
						"rgba(7, 230, 63, 0.8)",
					],
				},
			],
		},
	};
	return (
		<div className='border rounded-lg text-center mb-4 mx-auto'>
			{place.Country ? (
				<h3 className='text-2xl'>{place.Country}</h3>
			) : (
				<h3 className='text-2xl'>Global</h3>
			)}
			<div className='flex justify-around'>
				<div id='new'>
					<Doughnut data={data.new} />
				</div>
				<div id='total'>
					<Doughnut data={data.total} />
				</div>
			</div>
			<p>As of {moment(place.Date).format("MMMM Do YYYY, h:mm:ss a")}</p>
		</div>
	);
};

export default SummaryChart;
