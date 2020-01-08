import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import pointReducer from "./pointReducer";

export default combineReducers({
    user: userReducer,
    point: pointReducer
});