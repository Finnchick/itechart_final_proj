import React, { useState } from 'react';
import './Header.sass';
//import BurgerButton from "./commonComponents/BurgerButton.jsx"
import BurgerButton from '../BurgerButton/BurgerButton';
import Menu from '../Menu/Menu';

function Header() {
  const [buttonActive, setButtonActive] = useState(false);
  return (
    <div className="Header">
      <BurgerButton active={buttonActive} setActive={setButtonActive} />
      <Menu active={buttonActive} setActive={setButtonActive}></Menu>
      <h1 className="Logo"> Beer Catalagoue </h1>
      <button></button>
    </div>
  );
}

export default Header;
