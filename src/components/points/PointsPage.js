import React from 'react';
import '../../css/pointsPage.css';
import PointsForm from "./PointsForm";
import PointCanvas from "./PointCanvas";
import PointsTable from "./PointsTable";

function PointsPage() {
    return (
        <div className="content">
            <h2>Enter point coordinates or click on canvas</h2>
            <div id="container">
                <PointsForm/>
                <PointCanvas/>
            </div>
            <PointsTable/>
        </div>
    );
}

export default PointsPage;