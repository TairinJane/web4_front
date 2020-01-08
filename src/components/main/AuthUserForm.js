import React from 'react';
import '../../css/App.css';
import WelcomeForm from './WelcomeForm';
import {connect} from "react-redux";
import history from "../../utils/history";

class AuthUserForm extends React.Component {
    render() {
        if (this.props.isAuthenticated) {
            return (
                <div>
                    <p>Hello, <b>{this.props.username}</b></p>
                    <button type="submit" onClick={() => {
                        history.push("/main");
                    }}>Check points
                    </button>
                </div>
            );
        } else return (
            <WelcomeForm/>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    username: state.user.username,
});

export default connect(mapStateToProps)(AuthUserForm)
