import React from 'react';
import '../css/App.css';
import Header from './Header';
import WelcomeForm from './WelcomeForm';

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="content">
                <h1>Point Checker 0.4</h1>
                <p>Current time: <span id="clock">is time...</span></p>
                <WelcomeForm/>
            </div>
        </div>
    );
}

export default App;
