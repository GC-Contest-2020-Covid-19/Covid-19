import axios from "axios";
const BASEURL = "https://api.covid19api.com";
const ownServerUrl = "https://covid19-gc.herokuapp.com";

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

const fetchMyths = async () => {
	const { data } = await axios.get(`${ownServerUrl}/api/myths`);
	return data;
};

export default {
	fetchSummary,
	fetchDayoneByCountry,
	fetchAllCountries,
	fetchMyths,
};
