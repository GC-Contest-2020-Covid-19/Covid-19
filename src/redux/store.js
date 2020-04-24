import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import summaryReducer from "./summaryReducer";

const reducers = combineReducers({ summary: summaryReducer });
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
