export const addCharity = (charity) => {
    return {
        type: "ADD_CHARITY",
        payload: charity,
    };
};

export const clearCharities = () => {
    return {
        type: "CLEAR_CHARITIES",
    };
};

export const changeCharityStatus = (status) => {
    return {
        type: "CHANGE_CHARITY_STATUS",
        payload: status,
    };
};
