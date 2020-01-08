import React from 'react';
import '../css/App.css';
import {connect} from "react-redux";
import {logOut} from "../actions/actions";

class UserLogOut extends React.Component {

    render() {
        if (this.props.username) {
            return (
                <div className="column">
                    <p className='header'>{this.props.username}</p>
                    <button type='submit' id='logOutButton' onClick={this.props.onLogOut}>Log out</button>
                </div>
            );
        } else return <div/>;
    }
}

const mapStateToProps = state => ({
    username: state.user.username,
});

const mapDispatchToProps = dispatch => ({
    onLogOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLogOut)
