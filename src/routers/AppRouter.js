import App from "../components/main/App";
import PointsPage from '../components/points/PointsPage'
import RegistrationPage from '../components/main/RegistrationPage';
import React from 'react';
import {Route, Switch} from 'react-router';
import Header from "../components/Header";
import {Link, Router} from "react-router-dom";
import history from "../utils/history";
import PrivateRoute from "../components/PrivateRoute";
import AdminPage from "../components/AdminPage";
import {connect} from "react-redux";
import {getUsername} from "../actions/actions";

class AppRouter extends React.Component {

    constructor(props) {
        super(props);
        this.props.getUser();
    }

    componentDidMount() {
        //  this.props.getUser();
    }

    render() {
        console.log('render router');
        return (
            <Router history={history}>
                <Header/>
                <h1 className='hide'>Point Checker 0.4</h1>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/registration" component={RegistrationPage}/>
                    <Route path="/admin" component={AdminPage}/>
                    <PrivateRoute path="/main" component={PointsPage}/>
                    <Route path="*">
                        <h3> No page here :( </h3>
                        <p>Want to <Link to='/'>sign in</Link>?</p>
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