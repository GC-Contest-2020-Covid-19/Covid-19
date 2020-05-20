// testStations
export const addTestStation = (station) => {
    return {
        type: "ADD_TEST_STATION",
        payload: station,
    };
};

export const clearTestStations = () => {
    return {
        type: "CLEAR_TEST_STATIONS",
    };
};

export const changeTestStatus = (status) => {
    return {
        type: "CHANGE_TEST_STATUS",
        payload: status,
    };
};

export const changeTestResults = (amount) => {
    return {
        type: "CHANGE_TEST_RESULTS",
        payload: amount,
    };
};

export const addTestResult = (amount) => {
    return {
        type: "ADD_TEST_RESULT",
        payload: amount,
    };
};

// foodBanks
export const addFoodBank = (foodBank) => {
    return {
        type: "ADD_FOOD_BANK",
        payload: foodBank,
    };
};

export const changeFoodStatus = (status) => {
    return {
        type: "CHANGE_FOOD_STATUS",
        payload: status,
    };
};

export const addFoodResult = (amount) => {
    return {
        type: "ADD_TEST_RESULT",
        payload: amount,
    };
};

export const changeFoodResults = (amount) => {
    return {
        type: "CHANGE_FOOD_RESULTS",
        payload: amount,
    };
};

export const clearFoodBanks = () => {
    return {
        type: "CLEAR_FOOD_BANKS",
    };
};

export const changeMapRequested = (bool) => {
    return {
        type: "CHANGE_MAP_REQUESTED",
        payload: bool,
    };
};
