export const clearModeling = () => {
    return {
        type: "CLEAR_MODELING",
    };
};

export const changeModelingParams = (params) => {
    return {
        type: "CHANGE_MODELING_PARAMS",
        payload: params,
    };
};
