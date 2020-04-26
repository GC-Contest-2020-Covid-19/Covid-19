import React from "react";
import moment from "moment";

const Summary = ({ place }) => {
	return (
		<div className='w-1/4 bg-gray-400 m-4 border-solid border-2 border-gray-600'>
			{place.Country ? (
				<h2 className='text-2xl'>{place.Country}</h2>
			) : (
				<h2 className='text-2xl'>Global</h2>
			)}
			<p>New Confirmed cases: {place.NewConfirmed}</p>
			<p>Total Confirmed cases: {place.TotalConfirmed}</p>
			<p>New Deaths: {place.NewDeaths}</p>
			<p>Total Deaths: {place.TotalDeaths}</p>
			<p>New Recovered cases: {place.NewRecovered}</p>
			<p>Total Recovered: {place.TotalRecovered}</p>
			<p>As of: {moment(place.Date).format("MMMM Do YYYY, h:mm:ss a")}</p>
		</div>
	);
};

export default Summary;
