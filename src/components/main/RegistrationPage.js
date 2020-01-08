import React from 'react';
import {connect} from 'react-redux';
import {register} from '../../actions/actions';
import '../../css/WelcomeForm.css'
import store from '../../utils/store';
import {NavLink} from "react-router-dom";

class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    usernameChange = (event) => {
        this.setState({username: event.target.value});
    };

    passwordChange = (event) => {
        this.setState({password: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {username, password} = this.state;
        this.props.onSubmit(username, password);
        console.log(store.getState())
    };

    render() {
        return <div className="content">
            <div id="form">
                <h3>Registration</h3>
                <form onSubmit={this.handleSubmit}>
                    <p>Username</p>
                    <input type="text" placeholder="Username" id="username"
                           onChange={this.usernameChange}/>
                    <p>Password</p>
                    <input type="password" placeholder="Password" id="password"
                           onChange={this.passwordChange}/>
                    <br/>
                    <button type="submit">Sign up</button>
                    <p>I wan to <NavLink to='/'>sign in</NavLink></p>
                </form>
            </div>
        </div>
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    serverAnswer: state.user.serverAnswer
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (username, password) => dispatch(register(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage)