import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setUpallCountries } from "../redux/reducers/allCountriesReducer";
import { setUpFromDayOne } from "../redux/reducers/fromDayOneReducer";

const ProgressionByCountrySelect = ({
	allCountries,
	setUpFromDayOne,
	setUpallCountries,
}) => {
	const [value, setValue] = useState({ countries: "", timeline: "" });
	useEffect(() => {
		setUpallCountries();
	}, []);
	useEffect(() => {
		if (value.countries !== "" && value.timeline !== "") {
			setUpFromDayOne(value.countries, value.timeline);
		}
	}, [value]);

	const handleChange = (evt) => {
		setValue({ ...value, [evt.target.name]: evt.target.value });
	};
	return (
		<div className='custom-ml-5 custom-mr-5 custom-mt-3'>
			<h2 className='is-size-2'>Select a country to show progression</h2>
			<div className='select'>
				<select
					value={value.country}
					onChange={handleChange}
					name='countries'
					id='countries'>
					<option value=''>Choose a country</option>
					{allCountries
						?.sort((a, b) => {
							if (a.Country < b.Country) {
								return -1;
							}
							if (a.Country > b.Country) {
								return 1;
							}
							return 0;
						})
						.map((country) => (
							<option key={country.ISO2} value={country.ISO2}>
								{country.Country}
							</option>
						))}
				</select>
			</div>
			<h2 className='is-size-2'>Select a timeline</h2>
			<div className='select'>
				<select
					value={value.timeline}
					onChange={handleChange}
					name='timeline'
					id='countries'>
					<option value=''>Choose a timeline</option>
					<option value='all'>From the beginning</option>
					<option value='30'>Past 30 days</option>
					<option value='24'>Past 24 days</option>
					<option value='15'>Past 15 days</option>
				</select>
			</div>
		</div>
	);
};

const mapStateToProps = ({ allCountries }) => {
	return { allCountries };
};
const mapDispatchToProps = { setUpFromDayOne, setUpallCountries };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProgressionByCountrySelect);
