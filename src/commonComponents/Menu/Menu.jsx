import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

import './style.sass';

function Menu({ active, setActive }) {
  const setMenuActive = () => setActive(false);
  return (
    <nav
      className={clsx({
        menu: true,
        'menu-active': active,
      })}
      onClick={setMenuActive}
    >
      <ul className='menu-list'>
        <Link to='/'>
          <li className='menu-item'>
            <FontAwesomeIcon icon={faHome} /> Home
          </li>
        </Link>
        <Link to='/favorites'>
          <li className='menu-item'>
            <FontAwesomeIcon icon={faStar} /> Favorietes
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Menu;