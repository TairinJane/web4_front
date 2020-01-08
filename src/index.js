import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './css/index.css';
import store from './utils/store.js'
import AppRouter from "./routers/AppRouter";

ReactDOM.render(<Provider store={store}>
        <AppRouter/>
    </Provider>,
    document.getElementById('root'));