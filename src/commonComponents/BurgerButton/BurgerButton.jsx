import React from 'react';

import './style.sass';
import clsx from 'clsx';

function BurgerButton({ active, setActive }) {
  return (
    <div
      className={clsx('burger-button', active && ' change')}
      onClick={() => setActive(!active)}
    >
      <div className='bar1' />
      <div className='bar2' />
      <div className='bar3' />
    </div>
  );
}

export default BurgerButton;