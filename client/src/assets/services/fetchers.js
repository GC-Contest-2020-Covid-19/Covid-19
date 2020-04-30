import axios from "axios";
const BASEURL = "https://api.covid19api.com";

const fetchSummary = async () => {
	const { data } = await axios.get(`${BASEURL}/summary`);
	return data;
};

const fetchDayoneByCountry = async (country) => {
	const { data } = await axios.get(
		`${BASEURL}/total/dayone/country/${country}`
	);
	return data;
};
const fetchAllCountries = async () => {
	const { data } = await axios.get(`${BASEURL}/countries`);
	return data;
};

export default { fetchSummary, fetchDayoneByCountry, fetchAllCountries };
