import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import RootReducer from '../reducers/rootReducer.js';

export default createStore(RootReducer, {
    point: {
        points: []
    },
    user: {
        isAuthenticated: false
    }
}, applyMiddleware(thunk));
console.log('store created');