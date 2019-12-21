import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './css/index.css';
import App from './components/App.js'
import store from './store.js'

ReactDOM.render(<Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));