import React, { useState } from 'react';
import './style.sass';
import BurgerButton from '../BurgerButton/BurgerButton';
import Menu from '../Menu/Menu';

function Header() {
  const [isMenuShown, ShowMenu] = useState(false);
  return (
    <div className='Header'>
      <BurgerButton active={isMenuShown} setActive={ShowMenu} />
      <Menu active={isMenuShown} setActive={ShowMenu} />
      <h1 className='Logo'> Beer Catalagoue </h1>
      <button />
    </div>
  );
}

export default Header;