const initState = {
	courses: [],
	// statuses of the cousera and edx request
	c_status: false,
	e_status: false,
	requested: false,
};

const courseReducer = (state = initState, action) => {
	switch (action.type) {
		case "CLEAR_COURSES":
			return {
				...initState,
			};
			// eslint-disable-next-line
			break;
		case "ADD_COURSE":
			return {
				...state,
				courses: [action.payload, ...state.courses],
			};
			// eslint-disable-next-line
			break;
		case "CHANGE_COURSE_C_STATUS":
			return {
				...state,
				c_status: action.payload,
			};
			// eslint-disable-next-line
			break;
		case "CHANGE_COURSE_E_STATUS":
			return {
				...state,
				e_status: action.payload,
			};
			// eslint-disable-next-line
			break;
		case "CHANGE_COURSE_REQUESTED":
			return {
				...state,
				requested: action.payload,
			};
			// eslint-disable-next-line
			break;
		default:
			return state;
			// eslint-disable-next-line
			break;
	}
};

export default courseReducer;
