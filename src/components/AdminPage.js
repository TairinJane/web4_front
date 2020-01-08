import React from 'react';
import '../css/pointsPage.css';
import PointsForm from "./points/PointsForm";
import WelcomeForm from "./main/WelcomeForm";
import AdminPanel from "./AdminPanel";

function AdminPage() {
    return (
        <div className="content">
            <h2>Admin Page</h2>
            <div id="admin">
                <WelcomeForm/>
                <PointsForm/>
                <AdminPanel/>
            </div>
        </div>
    );
}

export default AdminPage;
