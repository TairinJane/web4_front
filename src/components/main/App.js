import React from 'react';
import '../../css/App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import AuthUserForm from "./AuthUserForm";

function App() {
    return (
        <div className="content">
            {/*<p>Current time: <span id="clock">is time...</span></p>*/}
            <AuthUserForm/>
        </div>
    );
}

export default App;
