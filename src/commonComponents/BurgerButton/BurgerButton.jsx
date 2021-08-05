/* eslint-disable react/prop-types */
import React from 'react';
import './BurgerButton.sass';

function BurgerButton({ active, setActive }) {
  return (
    <div
      className={active ? 'BurgerButton change' : 'BurgerButton'}
      onClick={() => setActive(!active)}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
}

export default BurgerButton;
