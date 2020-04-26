import fetchers from "../../assets/services/fetchers";

export const setSummary = () => {
	return async (dispatch) => {
		const payload = await fetchers.fetchSummary();
		dispatch({ type: "SET_UP", payload });
	};
};

const summaryReducer = (state = {}, action) => {
	switch (action.type) {
		case "SET_UP":
			return action.payload;
		case "TAKE_DOWN":
			return {};
		default:
			return state;
	}
};

export default summaryReducer;
