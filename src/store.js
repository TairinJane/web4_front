import {createStore} from 'redux'
import RootReducer from './reducers/rootReducer.js';

export default createStore(RootReducer);
console.log('store');