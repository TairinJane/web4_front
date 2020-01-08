import React from 'react';
import '../css/Header.css';
import UserLogOut from "./UserLogOut";

function Header() {
    return <div id="head">
        <div className="column hide">
            <p className="header">Student</p>
            <p className="text">Kozhemyako A.K.</p>
        </div>
        <div className="column hide">
            <p className="header">Group</p>
            <p className="text">P3211</p>
        </div>
        <div className="column">
            <p className="header">Variant</p>
            <p className="text">1682</p>
        </div>
        <UserLogOut/>
    </div>
}

export default Header;