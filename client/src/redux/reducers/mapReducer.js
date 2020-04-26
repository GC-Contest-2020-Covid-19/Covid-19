const initState = {
    testStations: {
        // list of testStation objects
        testStations: [],
        // result of the last fetch
        status: true,
        // amount of results
        results: -1
    },
    foodBanks: {
        // list of foodBank objects
        foodBanks: [],
        // results of the last fetch
        status: true,
        // amount of results 
        results: -1
    }
}

const mapReducer = (state = initState, action) => {
    switch(action.type){
        // testStations
        case 'ADD_TEST_STATION':
            return{
                ...state,
                testStations: {
                    ...state.testStations,
                    testStations: [action.payload, ...state.testStations.testStations]
                }
            }
        case 'CLEAR_TEST_STATIONS':
            return{
                ...state,
                testStations: {
                    ...state.testStations,
                    testStations: [],
                    results: -1
                }
            }
        case 'CHANGE_TEST_STATUS':
            return{
                ...state,
                testStations: {
                    ...state.testStations,
                    status: action.payload
                }
            }
        case 'CHANGE_TEST_RESULTS':
            return{
                ...state,
                testStations: {
                    ...state.testStations,
                    results: action.payload
                }
            }
        // foodBanks
        case 'ADD_FOOD_BANK':
            return {
                ...state, 
                foodBanks:{
                    ...state.foodBanks,
                    foodBanks: [...state.foodBanks.foodBanks, action.payload]
                }
            }
        case 'CHANGE_FOOD_STATUS':
            return{
                ...state,
                foodBanks: {
                    ...state.foodBanks,
                    status: action.payload
                }
            }
        case 'CHANGE_FOOD_RESULTS':
            return {
                ...state,
                foodBanks: {
                    ...state.foodBanks,
                    results: action.payload
                }
            }
        case 'CLEAR_FOOD_BANKS':
            return{
                ...state,
                foodBanks: {
                    ...state.foodBanks,
                    foodBanks: [],
                    results: -1
                }
            }
        default: 
            return state
    }
}

export default mapReducer