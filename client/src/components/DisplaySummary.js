import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SummaryChart from "./charts/SummaryChart";
import { setSummary } from "../redux/reducers/summaryReducer";

const DisplaySummary = ({ summary, setSummary }) => {
	const [filter, setFilter] = useState("");
	const [continent, setContinent] = useState("");
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		setSummary();
	}, []);

	const handleFilterChange = ({ target }) => {
		setFilter(target.value);
	};
	const handleSelectChange = ({ target }) => {
		setSearchTerm("");
		setContinent(target.value);
	};
	const handleSubmit = (evt) => {
		evt.preventDefault();
		setContinent("");
		setSearchTerm(filter);
		setFilter("");
	};
	return (
		<div className='custom-ml-5 custom-mr-5 custom-mt-3'>
			<div className='custom-mb-5' id='countries'>
				<p className='is-size-2-desktop is-size-3-tablet is-size-4-mobile'>Find one or multiple countries</p>

				<form className='field is-grouped' onSubmit={handleSubmit}>
					<p className='control is-expanded'>
						<input
							placeholder='For example mex or mexico'
							className='input is-rounded'
							onChange={handleFilterChange}
							value={filter}
							type='text'
						/>
					</p>
					<button type='submit' className='button is-rounded'>
						Search
					</button>
				</form>

				<h3 className='is-size-4-desktop is-size-5-tablet is-size-6-mobile'>Or search by continents</h3>
				<div className='select custom-mb-3'>
					<select value={continent} onChange={handleSelectChange}>
						<option value=''>Choose a Continent</option>
						<option value='Africa'>Africa</option>
						<option value='Asia'>Asia</option>
						<option value='Australia/Oceania'>Australia</option>
						<option value='Europe'>Europe</option>
						<option value='North America'>North America</option>
						<option value='South America'>South America</option>
					</select>
				</div>
				<div className='has-text-centered'>
					{searchTerm
						? summary?.dataCountries
								?.filter((country) =>
									country.country
										.toLowerCase()
										.includes(searchTerm.toLowerCase())
								)
								.map((country) => (
									<SummaryChart
										key={country.countryInfo.iso3}
										place={country}
									/>
								))
						: null}
					{continent
						? summary?.dataCountries
								?.filter((country) => country.continent === continent)
								.map((country) => (
									<SummaryChart
										key={country.countryInfo.iso3}
										place={country}
									/>
								))
						: null}
				</div>
			</div>
			<div className='has-text-centered' id='global'>
				{summary.dataGlobal ? (
					<SummaryChart place={summary.dataGlobal} />
				) : null}
			</div>
		</div>
	);
};

const mapStateToProps = ({ summary }) => {
	return { summary };
};

const mapDispatchToProps = { setSummary };

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySummary);
