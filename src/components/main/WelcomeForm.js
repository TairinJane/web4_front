import React from 'react';
import {connect} from 'react-redux';
import {authenticate} from '../../actions/actions';
import '../../css/WelcomeForm.css'
import store from '../../utils/store';
import {NavLink} from "react-router-dom";
import {Growl} from "primereact/growl";

class WelcomeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
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
        return <div id="form">
            <h3>Sign in</h3>
            <form onSubmit={this.handleSubmit}>
                <p>Username</p>
                <input type="text" placeholder="Username" id="username"
                       onChange={this.usernameChange} maxLength='15'/>
                <p>Password</p>
                <input type="password" placeholder="Password" id="password"
                       onChange={this.passwordChange} maxLength='15'/>
                <br/>
                <button type="submit">Sign in</button>
                <p>I want to <NavLink to='/registration'>register</NavLink></p>
                {/*<p>Auth result: {"" + this.props.isAuthenticated}</p>*/}
            </form>
            <Growl ref={(el) => this.growl = el} className='validationError'/>
        </div>
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    username: state.user.username,
    serverError: state.user.serverError,
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (username, password) => dispatch(authenticate(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeForm)