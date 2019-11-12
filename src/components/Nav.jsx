import React from 'react';
import './styles/nav.scss';

export default function Nav() {
    return (
        <nav className="navbar" id="navbar">
            <div className="navbar-home">
                <a className="navbar-home-link" href="#home">Logo</a>
            </div>
            <ul className="navbar-links">
                <li className="navbar-link"><a href="">Growth Tips for Cafe</a></li>
                <li className="navbar-link"><a href="">Contact</a></li>
            </ul>
        </nav>
    )
}