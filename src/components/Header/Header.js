import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (

        <header>
            <h2>COURSE 4 ALL</h2>
            <nav>
                <ul className="nav-link">
                    <li><Link className="option" to="/home">HOME</Link></li>
                    <li><Link className="option" to="/services">SERVICES</Link></li>
                    <li><Link className="option" to="/instructor">INSTRUCTOR</Link></li>
                    <li><Link className="option" to="/about">ABOUT</Link></li>
                </ul>
            </nav>
        </header>

    );
};

export default Header;