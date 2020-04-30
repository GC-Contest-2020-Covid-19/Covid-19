import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import summaryReducer from "./reducers/summaryReducer";
import mapReducer from "./reducers/mapReducer";
import userReducer from "./reducers/userReducer";
import allCountriesReducer from "./reducers/allCountriesReducer";
import fromDayOneReducer from "./reducers/fromDayOneReducer";
import charityReducer from "./reducers/charityReducer";

const reducers = combineReducers({
	summary: summaryReducer,
	map: mapReducer,
	user: userReducer,
	allCountries: allCountriesReducer,
	fromDayOne: fromDayOneReducer,
	charity: charityReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
