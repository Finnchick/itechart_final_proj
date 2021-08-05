import React from 'react';
import './BeerCardButton.sass';
/* eslint-disable react/prop-types */
function BeerCardButton({ buttonText, buttonClass }) {
  return <button className={buttonClass}>{buttonText}</button>;
}

export default BeerCardButton;
