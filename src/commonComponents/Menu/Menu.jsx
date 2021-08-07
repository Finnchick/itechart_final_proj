import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Menu.sass';
/* eslint-disable react/prop-types */
function Menu({ active, setActive }) {
  return (
    <nav
      className={active ? 'menuActive' : 'menu'}
      onClick={() => setActive(false)}
    >
      <ul className="menu__list">
        <li className="menu__item">
          <FontAwesomeIcon icon={faHome} /> Home
        </li>
        <li className="menu__item">
          <FontAwesomeIcon icon={faStar} /> Favorietes
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
