import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import summaryReducer from "./reducers/summaryReducer";
import mapReducer from "./reducers/mapReducer";
import userReducer from "./reducers/userReducer";
import allCountriesReducer from "./reducers/allCountriesReducer";
import fromDayOneReducer from "./reducers/fromDayOneReducer";
import charityReducer from "./reducers/charityReducer";
import mythsReducer from "./reducers/mythsReducer";
import modelingReducer from "./reducers/modelingReducer";
import courseReducer from "./reducers/courseReducer";
import notificationReducer from "./reducers/notificationReducer";

const reducers = combineReducers({
	summary: summaryReducer,
	map: mapReducer,
	user: userReducer,
	allCountries: allCountriesReducer,
	fromDayOne: fromDayOneReducer,
	charity: charityReducer,
	myths: mythsReducer,
	modeling: modelingReducer,
	courses: courseReducer,
	notification: notificationReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
