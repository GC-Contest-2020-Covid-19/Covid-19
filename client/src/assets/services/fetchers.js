import axios from "axios";
const ownServerUrl = "https://covid19-gc.herokuapp.com";

const fetchSummary = async () => {
	const responseCountries = await axios.get("https://disease.sh/v2/countries");
	const dataCountries = await responseCountries.data;

	const responseGlobal = await axios.get("https://disease.sh/v2/all");
	const dataGlobal = await responseGlobal.data;

	return { dataCountries, dataGlobal };
};

const fetchDayoneByCountry = async (countryISO, timeline) => {
	const { data } = await axios.get(
		`https://disease.sh/v2/historical/${countryISO}?lastdays=${timeline}`
	);
	return data;
};
const fetchAllCountries = async () => {
	const { data } = await axios.get(`https://api.covid19api.com/countries`);
	return data;
};

const fetchMyths = async () => {
	const { data } = await axios.get(`${ownServerUrl}/api/info/myths`);
	return data;
};

export default {
	fetchSummary,
	fetchDayoneByCountry,
	fetchAllCountries,
	fetchMyths,
};
