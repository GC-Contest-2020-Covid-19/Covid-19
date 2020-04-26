import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setUpallCountries } from "../redux/reducers/allCountriesReducer";
import { setUpFromDayOne } from "../redux/reducers/fromDayOneReducer";

const ProgressionByCountrySelect = ({
	allCountries,
	setUpFromDayOne,
	setUpallCountries,
}) => {
	useEffect(() => {
		setUpallCountries();
	}, []);
	const [value, setValue] = useState("");
	const handleChange = (evt) => {
		setValue(evt.target.value);
		setUpFromDayOne(evt.target.value);
	};
	return (
		<div className='ml-1 w-3/12 md:w-6/12'>
			<h2 className='text-l'>Select a country to show progression</h2>
			<select
				className='w-full border rounded my-3'
				value={value}
				onChange={handleChange}
				name='countries'
				id='countries'>
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
						<option key={country.ISO2} value={country.Slug}>
							{country.Country}
						</option>
					))}
			</select>
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
