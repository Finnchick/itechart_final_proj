import React from 'react';
import clsx from 'clsx';

import './style.sass';


export function BurgerButton({ active, setActive }) {
  return (
    <div
      className={clsx('burger-button', active && 'change')}
      onClick={() => setActive(!active)}
    >
      <div className='bar1' />
      <div className='bar2' />
      <div className='bar3' />
    </div>
  );
}