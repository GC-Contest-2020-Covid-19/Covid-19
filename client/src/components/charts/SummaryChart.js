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
		<div className='box custom-mb-5'>
			{place.Country ? (
				<h3 className='is-size-2'>{place.Country}</h3>
			) : (
				<h3 className='is-size-2'>Worldwide</h3>
			)}
			<small>Click on parameters to select or unselect them</small>
			<div className='columns'>
				<div className='column is-half' id='new'>
					<Doughnut options={{ responsive: true }} data={data.new} />
				</div>
				<div className='column is-half' id='total'>
					<Doughnut options={{ responsive: true }} data={data.total} />
				</div>
			</div>
			<p>As of {moment(place.Date).format("MMMM Do YYYY, h:mm a")}</p>
		</div>
	);
};

export default SummaryChart;
