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
			break;
		case "RESET_ALLCOUNTRIES":
			return [];
			break;
		default:
			return state;
			break;
	}
};

export default allCountriesReducer;
