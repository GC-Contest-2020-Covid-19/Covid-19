import fetchers from "../../assets/services/fetchers";

export const setUpallCountries = () => {
	return async (dispatch) => {
		try {
			const payload = await fetchers.fetchAllCountries();
			dispatch({
				type: "SET_UP_ALLCOUNTRIES",
				payload,
			});
		} catch (error) {
			console.log("Something went wrong setting up all countries");
		}
	};
};

const allCountriesReducer = (state = [], action) => {
	switch (action.type) {
		case "SET_UP_ALLCOUNTRIES":
			return action.payload;
			// eslint-disable-next-line
			break;
		case "RESET_ALLCOUNTRIES":
			return [];
			// eslint-disable-next-line
			break;
		default:
			return state;
			// eslint-disable-next-line
			break;
	}
};

export default allCountriesReducer;
