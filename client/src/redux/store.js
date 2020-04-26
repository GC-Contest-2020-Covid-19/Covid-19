import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import summaryReducer from "./reducers/summaryReducer";
import mapReducer from './reducers/mapReducer'
import userReducer from './reducers/userReducer'

const reducers = combineReducers({ 
    summary: summaryReducer,
    map: mapReducer,
    user: userReducer,
});


const store = createStore(reducers, applyMiddleware(thunk));

export default store;
