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
			<div className='custom-mb-5' id='countries'>
				<h3 className='is-size-3'>Filter countries by search</h3>

				<form className='field is-grouped' onSubmit={handleSubmit}>
					<p className='control is-expanded'>
						<input
							className='input is-rounded'
							onChange={handleChange}
							value={value}
							type='text'
						/>
					</p>
					<button type='submit' className='button is-rounded'>Search</button>
				</form>
				<div className='has-text-centered'>
					{searchTerm
						? summary?.Countries?.filter((country) =>
								country.Country.toLowerCase().includes(searchTerm.toLowerCase())
						  ).map((country) => (
								<SummaryChart key={country.CountryCode} place={country} />
						  ))
						: null}
				</div>
			</div>
			<div className='has-text-centered' id='global'>
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
