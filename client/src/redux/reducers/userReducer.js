const initState = {
    coordinates: "NOT SET",
    us_state: "NOT SET",
    city: "NOT SET",
    theme: JSON.parse(localStorage.getItem("theme")) || "light",
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case "CHANGE_COORDINATES":
            return {
                ...state,
                coordinates: action.payload,
            };
            // eslint-disable-next-line
            break;
        case "CHANGE_US_STATE":
            return {
                ...state,
                us_state: action.payload,
            };
            // eslint-disable-next-line
            break;
        case "CHANGE_CITY":
            return {
                ...state,
                city: action.payload,
            };
            // eslint-disable-next-line
            break;
        case "CHANGE_THEME":
            let theme;
            state.theme === "light" ? (theme = "dark") : (theme = "light");
            localStorage.setItem("theme", JSON.stringify(theme));
            return {
                ...state,
                theme: theme,
            };
            // eslint-disable-next-line
            break;
        default:
            return state;
            // eslint-disable-next-line
            break;
    }
};

export default userReducer;
