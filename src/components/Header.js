import React from 'react';
import '../css/Header.css';

function Header() {
    return <div id="head">
        <div className="column">
            <p className="header">Student</p>
            <p className="text">Kozhemyako A.K.</p>
        </div>
        <div className="column">
            <p className="header">Group</p>
            <p className="text">P3211</p>
        </div>
        <div className="column">
            <p className="header">Variant</p>
            <p className="text">1682</p>
        </div>
    </div>
}

export default Header;