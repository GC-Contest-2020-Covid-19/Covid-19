const initState = {
	/*
        S - susceptible
        I - infected
        R - recovered
        a - Infection factor
        b - Recover factor
        testing - testing rate
        time - amount of days to simulate
        lag - days it takes to get tested
    */
	S: 0,
	I: 0,
	a: 0,
	b: 0,
	testing: 0,
	time: 0,
	lag: 0,
	population: 0,
};

const modelingReducer = (state = initState, action) => {
	switch (action.type) {
		case "CLEAR_MODELING":
			return {
				...initState,
			};
			// eslint-disable-next-line
			break;
		case "CHANGE_MODELING_PARAMS":
			return {
				...state,
				S: action.payload[0],
				I: action.payload[1],
				a: action.payload[2],
				b: action.payload[3],
				testing: action.payload[4],
				time: action.payload[5],
				lag: action.payload[6],
				population: action.payload[7],
			};
			// eslint-disable-next-line
			break;
		default:
			return state;
			// eslint-disable-next-line
			break;
	}
};

export default modelingReducer;
