import React from 'react';
import {connect} from 'react-redux';
import store from '../../utils/store';
import {RadioButton} from 'primereact/radiobutton';
import {InputText} from 'primereact/inputtext';
import {addPoint, changeR, getPoints} from '../../actions/actions'
import {Growl} from "primereact/growl";

class PointsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {x: '0', y: '', r: '1'};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.YChange = this.YChange.bind(this);
        this.XChange = this.XChange.bind(this);
        this.RChange = this.RChange.bind(this);
    }

    componentDidMount() {
        this.props.getUserPoints();
        this.props.onChangeR(+this.state.r);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.y === '' || !(+this.state.y > -3 && +this.state.y < 5)) {
            this.growl.show({severity: 'warn', summary: 'Wrong Y', detail: 'You must enter Y in (-3; 5)'});
        } else {
            const {x, y, r} = this.state;
            const result = this.checkArea(+x, +y, +r);
            this.props.onSubmit(+x, +y, +r, '' + result);
            console.log(store.getState())
        }
    };

    YChange = (event) => {
        this.setState({y: event.target.value.replace(',', '.')});
    };

    XChange = (event) => {
        this.setState({x: event.value});
    };

    RChange = (event) => {
        this.setState({r: event.value});
        this.props.onChangeR(+event.value);
        console.log(store.getState())
    };

    checkArea = (x, y, r) => {
        return (x <= 0 && y <= 0 && x >= -r && y >= -r) || (x >= 0 && y >= 0 && (x ** 2 + y ** 2 <= r ** 2))
            || (x >= 0 && y <= 0 && y >= (x / 2 - r / 2));
    };

    render() {
        return <div id="pointsForm">
            <form onSubmit={this.handleSubmit}>
                <h4>Pick X</h4>
                <div className="radioGroup" id="Xinput">
                    <RadioButton inputId="X1" name="X" value="-5" onChange={this.XChange}
                                 checked={this.state.x === '-5'}/>
                    <RadioButton inputId="X2" name="X" value="-4" onChange={this.XChange}
                                 checked={this.state.x === '-4'}/>
                    <RadioButton inputId="X3" name="X" value="-3" onChange={this.XChange}
                                 checked={this.state.x === '-3'}/>
                    <RadioButton inputId="X4" name="X" value="-2" onChange={this.XChange}
                                 checked={this.state.x === '-2'}/>
                    <RadioButton inputId="X5" name="X" value="-1" onChange={this.XChange}
                                 checked={this.state.x === '-1'}/>
                    <RadioButton inputId="X6" name="X" value="0" onChange={this.XChange}
                                 checked={this.state.x === '0'}/>
                    <RadioButton inputId="X7" name="X" value="1" onChange={this.XChange}
                                 checked={this.state.x === '1'}/>
                    <RadioButton inputId="X8" name="X" value="2" onChange={this.XChange}
                                 checked={this.state.x === '2'}/>
                    <RadioButton inputId="X9" name="X" value="3" onChange={this.XChange}
                                 checked={this.state.x === '3'}/>
                    <label htmlFor="X1">-5</label>
                    <label htmlFor="X2">-4</label>
                    <label htmlFor="X3">-3</label>
                    <label htmlFor="X4">-2</label>
                    <label htmlFor="X5">-1</label>
                    <label htmlFor="X6">0</label>
                    <label htmlFor="X7">1</label>
                    <label htmlFor="X8">2</label>
                    <label htmlFor="X9">3</label>
                </div>
                <h4>Enter Y in (-3; 5)</h4>
                <InputText id='Yinput' keyfilter={/[\w.,-]+/} value={this.state.y} onChange={this.YChange}
                           maxLength={15}/>
                <h4>Pick R</h4>
                <div className="radioGroup" id="Rinput">
                    <RadioButton inputId="R1" name="R" value="-5" onChange={this.RChange}
                                 checked={this.state.r === '-5'} disabled={true}/>
                    <RadioButton inputId="R2" name="R" value="-4" onChange={this.RChange}
                                 checked={this.state.r === '-4'} disabled={true}/>
                    <RadioButton inputId="R3" name="R" value="-3" onChange={this.RChange}
                                 checked={this.state.r === '-3'} disabled={true}/>
                    <RadioButton inputId="R4" name="R" value="-2" onChange={this.RChange}
                                 checked={this.state.r === '-2'} disabled={true}/>
                    <RadioButton inputId="R5" name="R" value="-1" onChange={this.RChange}
                                 checked={this.state.r === '-1'} disabled={true}/>
                    <RadioButton inputId="R6" name="R" value="0" onChange={this.RChange}
                                 checked={this.state.r === '0'} disabled={true}/>
                    <RadioButton inputId="R7" name="R" value="1" onChange={this.RChange}
                                 checked={this.state.r === '1'}/>
                    <RadioButton inputId="R8" name="R" value="2" onChange={this.RChange}
                                 checked={this.state.r === '2'}/>
                    <RadioButton inputId="R9" name="R" value="3" onChange={this.RChange}
                                 checked={this.state.r === '3'}/>
                    <label htmlFor="R1">-5</label>
                    <label htmlFor="R2">-4</label>
                    <label htmlFor="R3">-3</label>
                    <label htmlFor="R4">-2</label>
                    <label htmlFor="R5">-1</label>
                    <label htmlFor="R6">0</label>
                    <label htmlFor="R7">1</label>
                    <label htmlFor="R8">2</label>
                    <label htmlFor="R9">3</label>
                </div>
                <button type="submit">Check point</button>
            </form>
            <Growl ref={(el) => this.growl = el} className='validationError'/>
        </div>
    }
}

const mapStateToProps = state => ({
    x: state.point.x,
    y: state.point.y,
    r: state.point.r,
    serverError: state.point.serverError,
    serverSuccess: state.point.serverSuccess
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (x, y, r, result) => dispatch(addPoint(x, y, r, result)),
    onChangeR: (r) => dispatch(changeR(r)),
    getUserPoints: () => dispatch(getPoints()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PointsForm)