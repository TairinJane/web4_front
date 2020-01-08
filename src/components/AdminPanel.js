import React from 'react';
import {connect} from 'react-redux';
import {getPoints} from '../actions/actions'

class AdminPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {x: '0', y: '', r: '1'};
    }

    render() {
        return <div id="adminPanel">
            <p>{this.props.point}</p>
            <p>{this.props.user}</p>
            <button onClick={this.props.getUserPoints}>Get user points</button>
        </div>
    }
}

const mapStateToProps = state => ({
    user: JSON.stringify(state.user, null, ' '),
    point: JSON.stringify(state.point, null, ' '),
});

const mapDispatchToProps = dispatch => ({
    getUserPoints: () => dispatch(getPoints)
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel)