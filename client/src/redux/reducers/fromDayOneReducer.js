import fetchers from "../../assets/services/fetchers";

export const setUpFromDayOne = (country) => {
	return async (dispatch) => {
		const payload = await fetchers.fetchDayoneByCountry(country);
		dispatch({ type: "RESET_FROMDAYONE" });
		dispatch({ type: "SET_UP_FROMDAYONE", payload });
	};
};

const fromDayOneReducer = (state = [], action) => {
	switch (action.type) {
		case "SET_UP_FROMDAYONE":
			return action.payload;
			break;
		case "RESET_FROMDAYONE":
			return [];
			break;
		default:
			return state;
			break;
	}
};

export default fromDayOneReducer;
