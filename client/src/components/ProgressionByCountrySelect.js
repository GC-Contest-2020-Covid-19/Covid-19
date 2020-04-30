import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setUpallCountries } from "../redux/reducers/allCountriesReducer";
import { setUpFromDayOne } from "../redux/reducers/fromDayOneReducer";

const ProgressionByCountrySelect = ({
	allCountries,
	setUpFromDayOne,
	setUpallCountries,
}) => {
	const [value, setValue] = useState("");
	useEffect(() => {
		setUpallCountries();
	}, []);
	const handleChange = (evt) => {
		setValue(evt.target.value);
		setUpFromDayOne(evt.target.value);
	};
	return (
		<div className='custom-m-3'>
			<h2 className='is-size-2'>Select a country to show progression</h2>
			<div className='select'>
				<select
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
