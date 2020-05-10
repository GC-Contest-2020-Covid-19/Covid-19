import React from "react";
import { Doughnut } from "react-chartjs-2";
import moment from "moment";

const SummaryChart = ({ place }) => {
	const data = {
		labels: ["Cases", "Deaths", "Recovered", "Active Cases"],
		datasets: [
			{
				data: [place.cases, place.deaths, place.recovered, place.active],
				backgroundColor: [
					"rgba(158, 16, 235, 0.8)",
					"rgba(235, 31, 16, 0.8)",
					"rgba(114, 149, 204,0.8)",
					"rgba(255, 150, 139,0.8)",
				],
			},
		],
	};
	return (
		<div className='box custom-mb-5'>
			{place.country && (
				<div className='columns is-vcentered'>
					<div className='column is-half has-text-right-tablet'>
						<h3 className='is-size-2'>{place.country}</h3>
					</div>
					<div className='column is-hidden-mobile is-half has-text-left'>
						<img
							className='is-block'
							width='120px'
							src={place.countryInfo.flag}
							alt={`flag of ${place.country}`}
						/>
					</div>
				</div>
			)}
			{place.affectedCountries && (
				<>
					<h3 className='is-size-2'>Worldwide</h3>
					<p>Affected Countries: {place.affectedCountries}</p>
				</>
			)}
			<small>Click on parameters to select or unselect them</small>
			<Doughnut options={{ responsive: true }} data={data} />
			<p>
				As of{" "}
				{moment(new Date(place.updated).toISOString()).format(
					"MMMM Do YYYY, h:mm a"
				)}
			</p>
		</div>
	);
};

export default SummaryChart;
