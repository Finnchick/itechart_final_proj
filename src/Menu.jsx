import React from 'react';
import './sass/Menu.sass';
/* eslint-disable react/prop-types */
function Menu({ active, setActive }) {
  return (
    <nav
      className={active ? 'menuActive' : 'menu'}
      onClick={() => setActive(false)}
    >
      {/* <div className = "blur"/> */}
      <ul>
        <li className="menu__item">Home</li>
        <li className="menu__item">Favorietes</li>
      </ul>
    </nav>
  );
}

export default Menu;
