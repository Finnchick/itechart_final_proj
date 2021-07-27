import React from 'react';
import "./css/Menu.css"
/* eslint-disable react/prop-types */
function Menu({active, setActive}) {
    return (
        <nav className = {active ? "menuActive" : "menu"} onClick={() => setActive(false)}>
            {/* <div className = "blur"/> */}
            <li className = "menu__item">Home</li>
            <li className = "menu__item">Favorietes</li>
        </nav>
    )
}

export default Menu;