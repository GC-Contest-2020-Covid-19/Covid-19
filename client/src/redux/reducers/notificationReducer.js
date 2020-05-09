const notificationReducer = (state = "", action) => {
	switch (action.type) {
		case "SET_NOTIFICATION":
			return action.text;
			// eslint-disable-next-line
			break;
		case "RESET_NOTIFICATION":
			return "";
			// eslint-disable-next-line
			break;
		default:
			return state;
			// eslint-disable-next-line
			break;
	}
};

export default notificationReducer;
