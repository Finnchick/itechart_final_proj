import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faStar} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './style.sass';
import {Link} from "react-router-dom";

/* eslint-disable react/prop-types */
function Menu({active, setActive}) {
    return (
        <nav
            className={active ? 'menuActive' : 'menu'}
            onClick={() => setActive(false)}
        >
            <ul className="menu__list">
                <Link to="/">
                    <li className="menu__item">
                        <FontAwesomeIcon icon={faHome}/> Home
                    </li>
                </Link>
                <Link to="/favorites">
                    <li className="menu__item">
                        <FontAwesomeIcon icon={faStar}/> Favorietes
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default Menu;