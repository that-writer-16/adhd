import React from 'react';
import { NavLink } from 'react-router-dom';

const MiniNavBar = () => {
    return (
        <nav>
        <ul>
        <li>
            <NavLink to="/account">Account</NavLink>
        </li>
        </ul>
        </nav>
    )
}

export default MiniNavBar