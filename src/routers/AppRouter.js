import App from "../components/App";
import React from 'react';
import {Router, Route} from 'react-router';

export default function AppRouter () {
    return <Router>
        <Route path="/" component={App}/>
    </Router>
}