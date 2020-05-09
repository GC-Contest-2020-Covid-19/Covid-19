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
			// eslint-disable-next-line
			break;
		case "TAKE_DOWN_MYTHS":
			return [];
			// eslint-disable-next-line
			break;
		default:
			return state;
			// eslint-disable-next-line
			break;
	}
};

export default mythsReducer;
