import App from "../components/main/App";
import PointsPage from '../components/points/PointsPage'
import RegistrationPage from '../components/main/RegistrationPage';
import React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import Header from "../components/Header";
import {Router} from "react-router-dom";
import history from "../utils/history";
import PrivateRoute from "../components/PrivateRoute";
import {connect} from "react-redux";
import {getUsername} from "../actions/actions";

class AppRouter extends React.Component {

    constructor(props) {
        super(props);
        this.props.getUser();
    }

    render() {
        return (
            <Router history={history}>
                <Header/>
                <h1 className='hide'>Point Checker 0.4</h1>
                <Switch>
                    <Route exact path="/login" component={App}/>
                    <Route path="/registration" component={RegistrationPage}/>
                    <PrivateRoute path="/main" component={PointsPage}/>
                    <Route path="*">
                        <Redirect to="/login"/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getUser: () => dispatch(getUsername()),
});


export default connect(null, mapDispatchToProps)(AppRouter)