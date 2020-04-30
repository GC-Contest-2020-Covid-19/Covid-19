import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SummaryChart from "./charts/SummaryChart";
import { setSummary } from "../redux/reducers/summaryReducer";

const DisplaySummary = ({ summary, setSummary }) => {
	const [value, setValue] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	useEffect(() => {
		setSummary();
	}, []);
	const handleChange = ({ target }) => {
		setValue(target.value);
	};
	const handleSubmit = (evt) => {
		evt.preventDefault();
		setSearchTerm(value);
		setValue("");
	};
	return (
		<div className='custom-m-5'>
			<div id='countries'>
				<h3 className='is-size-3'>Filter countries by search</h3>
				<form onSubmit={handleSubmit}>
					<input
						className='input is-rounded custom-mb-2'
						onChange={handleChange}
						value={value}
						type='text'
					/>
					<input type='submit' value='Search' className='button is-dark custom-mb-2' />
				</form>

				{searchTerm
					? summary?.Countries?.filter((country) =>
							country.Country.toLowerCase().includes(searchTerm)
					  ).map((country) => (
							<SummaryChart key={country.CountryCode} place={country} />
					  ))
					: null}
			</div>
			<div className='is-size-5' id='global'>
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
