import React from 'react';
import './style.sass';

function BurgerButton({ active, setActive }) {
  return (
    <div
      className={active ? 'burgerButton change' : 'burgerButton'}
      onClick={() => setActive(!active)}
    >
      <div className='bar1' />
      <div className='bar2' />
      <div className='bar3' />
    </div>
  );
}

export default BurgerButton;