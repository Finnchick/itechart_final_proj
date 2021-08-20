import React, { useState } from 'react';

import BurgerButton from '../BurgerButton/BurgerButton';
import Menu from '../Menu/Menu';
import './style.sass';

function Header() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div className='header'>
      <BurgerButton active={isMenuShown} setActive={setIsMenuShown} />
      <Menu active={isMenuShown} setActive={setIsMenuShown} />
      <h1 className='logo'> Beer Catalagoue </h1>
      <button />
    </div>
  );
}

export default Header;