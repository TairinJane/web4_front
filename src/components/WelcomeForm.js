import React from 'react';
import {connect} from 'react-redux'
import {authenticate} from '../actions/actions';
import '../css/WelcomeForm.css'
import store from '../store';

class WelcomeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {username, password} = this.state;
        this.props.onSubmit(username, password);
        console.log(store.getState())
    };

    render() {
        return <div id="form">
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Username" id="username"/>
                <br/><input type="text" placeholder="Password" id="password"/>
                <br/>
                <button type="submit">Log in</button>
                <p>Username: {this.props.username}</p>
                <p>Password: {this.props.password}</p>
                <p>Auth result: {""+this.props.isAuthenticated}</p>
            </form>
        </div>
    }
}

const mapStateToProps = state => ({
    username: state.user.username,
    password: state.user.password,
    isAuthenticated: state.user.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (username, password) => dispatch(authenticate(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeForm)