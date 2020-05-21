import fetchers from "../../assets/services/fetchers";

export const setUpFromDayOne = (countryISO, timeline) => {
    return async (dispatch) => {
        const data = await fetchers.fetchDayoneByCountry(countryISO, timeline);

        const dates = Object.keys(data.timeline.cases);
        const cases = Object.values(data.timeline.cases);
        const deaths = Object.values(data.timeline.deaths);
        const recovereds = Object.values(data.timeline.recovered);
        const payload = {
            dates,
            cases,
            deaths,
            recovereds,
        };
        dispatch({ type: "RESET_FROMDAYONE" });
        dispatch({ type: "SET_UP_FROMDAYONE", payload });
    };
};

const fromDayOneReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_UP_FROMDAYONE":
            return action.payload;
            // eslint-disable-next-line
            break;
        case "RESET_FROMDAYONE":
            return [];
            // eslint-disable-next-line
            break;
        default:
            return state;
            // eslint-disable-next-line
            break;
    }
};

export default fromDayOneReducer;
