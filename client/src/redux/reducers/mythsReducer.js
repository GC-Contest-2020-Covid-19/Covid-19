import fetchers from "../../assets/services/fetchers";

export const setupMyths = () => {
	return async (dispatch) => {
		const payload = await fetchers.fetchMyths();
		dispatch({ type: "SETUP_MYTHS", payload });
	};
};

const mythsReducer = (state = [], action) => {
	switch (action.type) {
		case "SETUP_MYTHS":
			return action.payload;
			break;
		case "TAKE_DOWN_MYTHS":
			return [];
			break;
		default:
			return state;
			break;
	}
};

export default mythsReducer;
