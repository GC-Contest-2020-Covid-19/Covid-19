import fetchers from "../assets/services/fetchers";

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
			break;
		case "TAKE_DOWN":
			return {};
			break;
		default:
			return state;
			break;
	}
};

export default summaryReducer;
