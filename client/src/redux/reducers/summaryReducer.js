import fetchers from "../../assets/services/fetchers";

export const setSummary = () => {
    return async (dispatch) => {
        const payload = await fetchers.fetchSummary();
        dispatch({ type: "SET_UP", payload });
    };
};

const summaryReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_UP":
            return action.payload;
            // eslint-disable-next-line
            break;
        case "TAKE_DOWN":
            return [];
            // eslint-disable-next-line
            break;
        default:
            return state;
            // eslint-disable-next-line
            break;
    }
};

export default summaryReducer;
