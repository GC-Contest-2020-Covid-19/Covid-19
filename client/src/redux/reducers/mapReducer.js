const initState = {
	testStations: {
		// list of testStation objects
		testStations: [],
		// result of the last fetch
		status: true,
		// amount of results
		results: -1,
	},
	foodBanks: {
		// list of foodBank objects
		foodBanks: [],
		// results of the last fetch
		status: true,
		// amount of results
		results: -1,
	},
	requested: false
};

const mapReducer = (state = initState, action) => {
	switch (action.type) {
		// testStations
		case "ADD_TEST_STATION":
			return {
				...state,
				testStations: {
					...state.testStations,
					testStations: [action.payload, ...state.testStations.testStations],
				},
			};
			// eslint-disable-next-line
			break;
		case "CLEAR_TEST_STATIONS":
			return {
				...state,
				testStations: {
					...state.testStations,
					testStations: [],
					results: -1,
				},
			};
			// eslint-disable-next-line
			break;
		case "CHANGE_TEST_STATUS":
			return {
				...state,
				testStations: {
					...state.testStations,
					status: action.payload,
				},
			};
			// eslint-disable-next-line
			break;
		case "CHANGE_TEST_RESULTS":
			return {
				...state,
				testStations: {
					...state.testStations,
					results: action.payload,
				},
			};
			// eslint-disable-next-line
			break;
		case "ADD_TEST_RESULT":
			return {
				...state,
				testStations: {
					...state.testStations,
					results: action.payload + state.testStations.results,
				},
			};
			// eslint-disable-next-line
			break;
		// foodBanks
		case "ADD_FOOD_BANK":
			return {
				...state,
				foodBanks: {
					...state.foodBanks,
					foodBanks: [...state.foodBanks.foodBanks, action.payload],
				},
			};
			// eslint-disable-next-line
			break;
		case "CHANGE_FOOD_STATUS":
			return {
				...state,
				foodBanks: {
					...state.foodBanks,
					status: action.payload,
				},
			};
			// eslint-disable-next-line
			break;
		case "CHANGE_FOOD_RESULTS":
			return {
				...state,
				foodBanks: {
					...state.foodBanks,
					results: action.payload,
				},
			};
			// eslint-disable-next-line
			break;
		case "ADD_FOOD_RESULT":
			return {
				...state,
				foodBanks: {
					...state.foodBanks,
					results: action.payload + state.foodBanks.results,
				},
			};
			// eslint-disable-next-line
			break;
		case "CLEAR_FOOD_BANKS":
			return {
				...state,
				foodBanks: {
					...state.foodBanks,
					foodBanks: [],
					results: -1,
				},
			};
			// eslint-disable-next-line
			break;
		case "CHANGE_MAP_REQUESTED":
			return {
				...state,
				requested: action.payload,
			};
			// eslint-disable-next-line
		default:
			return state;
			// eslint-disable-next-line
			break;
	}
};

export default mapReducer;
