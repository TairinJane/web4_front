import {Redirect, Route, withRouter} from 'react-router';
import React from "react";
import {connect} from "react-redux";

const PrivateRoute = ({component: Component, auth, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props =>
                auth
                    ? <Component {...props} />
                    : <Redirect to={{pathname: "/login", state: {from: props.location}}}/>
            }
        />
    );
};

const mapStateToProps = state => ({auth: state.user.isAuthenticated});
export default withRouter(connect(mapStateToProps)(PrivateRoute));


