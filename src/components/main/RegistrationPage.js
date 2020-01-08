import React from 'react';
import {connect} from 'react-redux';
import {register, resetError} from '../../actions/actions';
import '../../css/WelcomeForm.css'
import {NavLink} from "react-router-dom";
import {Growl} from "primereact/growl";

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
        this.props.onResetError();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.serverError && prevProps.serverError !== this.props.serverError) {
            this.growl.show({severity: 'error', summary: 'Server error', detail: this.props.serverError});
        }
    }

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
                <Growl ref={(el) => this.growl = el} className='validationError'/>
            </div>
        </div>
    }
}

const mapStateToProps = state => ({
    serverError: state.user.serverError
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (username, password) => dispatch(register(username, password)),
    onResetError: () => dispatch(resetError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage)