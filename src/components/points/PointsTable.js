import React from "react";
import {connect} from 'react-redux';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

class PointsTable extends React.Component {
    render() {
        return <DataTable value={this.props.points} id='dataTable' autoLayout={true}>
            <Column field="x" header="X"/>
            <Column field="y" header="Y"/>
            <Column field="r" header="R"/>
            <Column field="result" header="Result"/>
        </DataTable>
    }
}

const mapStateToProps = state => ({
    points: state.point.points
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PointsTable)