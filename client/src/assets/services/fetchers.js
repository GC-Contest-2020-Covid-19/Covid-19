import axios from "axios";
const BASEURL = "https://api.covid19api.com";

const fetchSummary = async () => {
	const { data } = await axios.get(`${BASEURL}/summary`);
	return data;
};

export default { fetchSummary };
