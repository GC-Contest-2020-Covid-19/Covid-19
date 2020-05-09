const initState = {
	charities: [],
	status: false,
};

const charityReducer = (state = initState, action) => {
	switch (action.type) {
		case "ADD_CHARITY":
			return {
				...state,
				charities: [...state.charities, action.payload],
			};
			// eslint-disable-next-line
			break;
		case "CLEAR_CHARITIES":
			return {
				...state,
				status: false,
				charities: [],
			};
			// eslint-disable-next-line
			break;
		case "CHANGE_CHARITY_STATUS":
			return {
				...state,
				status: action.payload,
			};
			// eslint-disable-next-line
			break;
		default:
			return state;
			// eslint-disable-next-line
			break;
	}
};

export default charityReducer;
