import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SummaryChart from "./charts/SummaryChart";
import { setSummary } from "../redux/reducers/summaryReducer";

const DisplaySummary = ({ summary, setSummary }) => {
	const [value, setValue] = useState("");
	useEffect(() => {
		setSummary();
	}, []);
	const handleChange = ({ target }) => {
		setValue(target.value);
	};
	return (
		<div className='flex flex-col items-center'>
			<div id='countries'>
				<h3 className='text-center text-xl'>Filter countries by search</h3>
				<input
					className='block focus:outline-none focus:shadow-outline border rounded-lg mx-auto mb-4'
					onChange={handleChange}
					value={value}
					type='text'
				/>
				{value
					? summary?.Countries?.filter((country) =>
							country.Country.toLowerCase().includes(value)
					  ).map((country) => (
							<SummaryChart key={country.CountryCode} place={country} />
					  ))
					: null}
			</div>
			<div className='text-center' id='global'>
				{summary?.Global ? <SummaryChart place={summary.Global} /> : null}
			</div>
		</div>
	);
};

const mapStateToProps = ({ summary }) => {
	return { summary };
};

const mapDispatchToProps = { setSummary };

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySummary);
